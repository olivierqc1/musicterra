import { supabase } from '../lib/supabase';
import { searchArtistsByGenre, findEmergingArtists as findEmergingMB, MusicBrainzArtist } from './musicbrainz';
import { getSimilarArtists, LastFmArtist } from './lastfm';

export interface EmergingArtist {
  name: string;
  mbid?: string; // MusicBrainz ID
  country?: string;
  genres: string[];
  imageUrl?: string;
  lastfmUrl?: string;
  listeners?: number;
  emergenceScore: number;
  lifeSpan?: {
    begin?: string;
    ended?: boolean;
  };
}

// Combiner MusicBrainz + Last.fm pour avoir les images
async function enrichWithLastFm(
  mbArtists: MusicBrainzArtist[]
): Promise<EmergingArtist[]> {
  const enriched: EmergingArtist[] = [];

  for (const artist of mbArtists) {
    try {
      // Chercher sur Last.fm pour avoir l'image et les stats
      const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(artist.name)}&api_key=${API_KEY}&format=json`
      );
      
      const data = await response.json();
      const lfmArtist = data.artist;

      // Calculer score d'émergence
      const listeners = parseInt(lfmArtist?.stats?.listeners || '0');
      const emergenceScore = calculateEmergenceScore(listeners, artist.lifeSpan?.begin);

      if (emergenceScore > 0) {
        enriched.push({
          name: artist.name,
          mbid: artist.id,
          country: artist.country || artist.area,
          genres: artist.genres || [],
          imageUrl: lfmArtist?.image?.find((img: any) => img.size === 'large')?.['#text'],
          lastfmUrl: lfmArtist?.url,
          listeners,
          emergenceScore,
          lifeSpan: artist.lifeSpan
        });
      }

      // Rate limit
      await new Promise(resolve => setTimeout(resolve, 250));
    } catch (error) {
      console.error(`Error enriching ${artist.name}:`, error);
    }
  }

  return enriched;
}

// Score d'émergence: artistes récents avec peu d'auditeurs
function calculateEmergenceScore(listeners: number, beginYear?: string): number {
  if (!beginYear) return 0;

  const year = parseInt(beginYear.split('-')[0]);
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  // Seulement artistes de moins de 10 ans
  if (age > 10 || age < 0) return 0;

  // Seulement ceux avec peu d'auditeurs (< 50k)
  if (listeners > 50000 || listeners < 100) return 0;

  // Score: plus récent et moins d'auditeurs = meilleur score
  const recencyScore = Math.max(0, 100 - (age * 10)); // 100 pour cette année, 90 pour l'an dernier, etc.
  const listenerScore = Math.max(0, 100 - (listeners / 500)); // 100 pour 0, diminue graduellement

  return (recencyScore * 0.6) + (listenerScore * 0.4);
}

// Trouver des artistes émergents par genre
export async function findEmergingArtistsByGenre(
  genre: string,
  limit: number = 10
): Promise<EmergingArtist[]> {
  try {
    // Chercher sur MusicBrainz
    const mbArtists = await findEmergingMB(genre, 30);
    
    // Enrichir avec Last.fm
    const enriched = await enrichWithLastFm(mbArtists);
    
    return enriched
      .sort((a, b) => b.emergenceScore - a.emergenceScore)
      .slice(0, limit);
  } catch (error) {
    console.error('Error finding emerging artists:', error);
    return [];
  }
}

// Recommandations personnalisées basées sur le profil
export async function getPersonalizedEmergingArtists(
  userId: string,
  limit: number = 20
): Promise<EmergingArtist[]> {
  // 1. Récupérer le profil de goûts
  const { getUserTasteProfile } = await import('./userBehavior');
  const profile = await getUserTasteProfile(userId);
  
  if (!profile || profile.topGenres.length === 0) {
    return [];
  }

  // 2. Chercher des artistes émergents pour chaque top genre
  const allArtists: EmergingArtist[] = [];
  
  for (const [genreName, score] of profile.topGenres.slice(0, 5)) {
    const artists = await findEmergingArtistsByGenre(genreName, 8);
    allArtists.push(...artists);
  }

  // 3. Dédupliquer par nom (pas de MBID parfois)
  const uniqueArtists = Array.from(
    new Map(allArtists.map(a => [a.name.toLowerCase(), a])).values()
  );

  // 4. Optionnel: Ajouter des artistes similaires aux favoris de l'utilisateur
  if (profile.topGenres.length > 0) {
    const { data: topRatings } = await supabase
      .from('ratings')
      .select('item_name, rating')
      .eq('user_id', userId)
      .eq('item_type', 'genre')
      .gte('rating', 7)
      .order('rating', { ascending: false })
      .limit(3);

    if (topRatings) {
      for (const rating of topRatings) {
        // Récupérer les artistes du genre depuis vos données
        const { genres } = await import('../data/genres');
        const genre = genres.find(g => g.name === rating.item_name);
        
        if (genre?.artists) {
          // Pour chaque artiste connu du genre, trouver des similaires
          for (const artistName of genre.artists.slice(0, 2)) {
            try {
              const similar = await getSimilarArtists(artistName, 10);
              
              // Filtrer les émergents (peu d'auditeurs)
              const emergingSimilar = similar
                .filter(a => a.listeners < 50000 && a.listeners > 100)
                .map(a => ({
                  name: a.name,
                  mbid: a.mbid,
                  genres: [rating.item_name],
                  imageUrl: a.image,
                  lastfmUrl: a.url,
                  listeners: a.listeners,
                  emergenceScore: Math.max(0, 100 - (a.listeners / 500)),
                  country: undefined,
                  lifeSpan: undefined
                }));

              uniqueArtists.push(...emergingSimilar);
              
              await new Promise(resolve => setTimeout(resolve, 250));
            } catch (error) {
              console.error(`Error getting similar for ${artistName}:`, error);
            }
          }
        }
      }
    }
  }

  // 5. Dédupliquer à nouveau et trier
  const finalUnique = Array.from(
    new Map(uniqueArtists.map(a => [a.name.toLowerCase(), a])).values()
  );

  return finalUnique
    .sort((a, b) => b.emergenceScore - a.emergenceScore)
    .slice(0, limit);
}

// Sauvegarder les découvertes d'artistes émergents
export async function saveEmergingDiscovery(
  artistName: string,
  mbid: string | undefined,
  genres: string[]
) {
  const { error } = await supabase.from('emerging_discoveries').insert({
    artist_name: artistName,
    spotify_id: mbid || artistName, // Utiliser MBID ou le nom
    genres
  });

  if (error) console.error(error);
}
