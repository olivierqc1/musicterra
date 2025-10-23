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

// ============================================
// ENRICHISSEMENT AVEC LAST.FM (PARALLÉLISÉ)
// ============================================

// Enrichir UN artiste avec Last.fm
async function enrichArtist(artist: MusicBrainzArtist): Promise<EmergingArtist | null> {
  try {
    const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(artist.name)}&api_key=${API_KEY}&format=json`
    );
    
    if (!response.ok) {
      console.warn(`Last.fm API error for ${artist.name}:`, response.status);
      return null;
    }

    const data = await response.json();
    const lfmArtist = data.artist;

    if (!lfmArtist) {
      return null;
    }

    // Calculer score d'émergence
    const listeners = parseInt(lfmArtist?.stats?.listeners || '0');
    const emergenceScore = calculateEmergenceScore(listeners, artist.lifeSpan?.begin);

    if (emergenceScore <= 0) {
      return null;
    }

    return {
      name: artist.name,
      mbid: artist.id,
      country: artist.country || artist.area,
      genres: artist.genres || [],
      imageUrl: lfmArtist?.image?.find((img: any) => img.size === 'large')?.['#text'],
      lastfmUrl: lfmArtist?.url,
      listeners,
      emergenceScore,
      lifeSpan: artist.lifeSpan
    };
  } catch (error) {
    console.error(`Error enriching ${artist.name}:`, error);
    return null;
  }
}

// Enrichir plusieurs artistes EN PARALLÈLE (par batches)
async function enrichWithLastFm(
  mbArtists: MusicBrainzArtist[]
): Promise<EmergingArtist[]> {
  const BATCH_SIZE = 5; // 5 requêtes parallèles à la fois
  const enriched: EmergingArtist[] = [];

  console.log(`🔄 Enriching ${mbArtists.length} artists in batches of ${BATCH_SIZE}...`);

  for (let i = 0; i < mbArtists.length; i += BATCH_SIZE) {
    const batch = mbArtists.slice(i, i + BATCH_SIZE);
    
    console.log(`  📦 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(mbArtists.length / BATCH_SIZE)} (${batch.length} artists)`);
    
    // Traiter le batch en parallèle
    const results = await Promise.allSettled(
      batch.map(artist => enrichArtist(artist))
    );
    
    // Collecter les résultats réussis
    const batchResults = results
      .filter((r): r is PromiseFulfilledResult<EmergingArtist | null> => r.status === 'fulfilled')
      .map(r => r.value)
      .filter((artist): artist is EmergingArtist => artist !== null);
    
    enriched.push(...batchResults);
    
    // Rate limit entre les batches
    if (i + BATCH_SIZE < mbArtists.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log(`✅ Successfully enriched ${enriched.length}/${mbArtists.length} artists`);
  return enriched;
}

// ============================================
// CALCUL DU SCORE D'ÉMERGENCE
// ============================================

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

// ============================================
// DÉDUPLICATION INTELLIGENTE
// ============================================

function deduplicateArtists(artists: EmergingArtist[]): EmergingArtist[] {
  const seen = new Map<string, EmergingArtist>();
  
  for (const artist of artists) {
    // Clé unique: MBID si disponible, sinon nom en minuscules
    const key = artist.mbid || artist.name.toLowerCase().trim();
    const existing = seen.get(key);
    
    // Garder celui avec le meilleur score d'émergence
    if (!existing || artist.emergenceScore > existing.emergenceScore) {
      seen.set(key, artist);
    }
  }
  
  return Array.from(seen.values());
}

// ============================================
// RECHERCHE AVEC CACHE
// ============================================

// Trouver des artistes émergents par genre (avec cache)
export async function findEmergingArtistsByGenre(
  genre: string,
  limit: number = 10
): Promise<EmergingArtist[]> {
  try {
    // ===== 1. VÉRIFIER LE CACHE =====
    console.log('🔍 Checking cache for genre:', genre);
    
    const { data: cached, error: cacheError } = await supabase
      .from('emerging_artists_cache')
      .select('artists, created_at')
      .eq('genre', genre)
      .gt('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    // Si on trouve dans le cache
    if (cached && !cacheError) {
      const ageMinutes = Math.round((Date.now() - new Date(cached.created_at).getTime()) / 1000 / 60);
      console.log(`✅ Cache HIT for "${genre}" - Age: ${ageMinutes} minutes`);
      return cached.artists.slice(0, limit);
    }

    // ===== 2. CACHE MISS - Chercher les données =====
    console.log(`❌ Cache MISS for "${genre}" - Fetching fresh data...`);
    
    // Chercher sur MusicBrainz
    const mbArtists = await findEmergingMB(genre, 30);
    console.log(`📥 Found ${mbArtists.length} artists from MusicBrainz`);
    
    if (mbArtists.length === 0) {
      console.warn(`⚠️ No artists found for genre "${genre}"`);
      return [];
    }
    
    // Enrichir avec Last.fm (parallélisé)
    const enriched = await enrichWithLastFm(mbArtists);
    
    // Trier par score
    const sorted = enriched
      .sort((a, b) => b.emergenceScore - a.emergenceScore)
      .slice(0, limit);

    // ===== 3. SAUVEGARDER DANS LE CACHE =====
    if (sorted.length > 0) {
      console.log(`💾 Saving ${sorted.length} artists to cache for "${genre}"`);
      
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24); // Expire dans 24h

      const { error: insertError } = await supabase
        .from('emerging_artists_cache')
        .insert({
          genre,
          artists: sorted,
          expires_at: expiresAt.toISOString()
        });

      if (insertError) {
        console.error('❌ Error saving to cache:', insertError);
      } else {
        console.log('✅ Cache saved successfully');
      }
    }

    return sorted;
    
  } catch (error) {
    console.error('❌ Error finding emerging artists:', error);
    return [];
  }
}

// ============================================
// RECOMMANDATIONS PERSONNALISÉES
// ============================================

// Recommandations personnalisées basées sur le profil
export async function getPersonalizedEmergingArtists(
  userId: string,
  limit: number = 20
): Promise<EmergingArtist[]> {
  try {
    // Validation
    if (limit > 50) limit = 50;
    if (limit < 1) limit = 20;

    console.log(`🎯 Getting personalized emerging artists for user ${userId}`);

    // 1. Récupérer le profil de goûts
    const { getUserTasteProfile } = await import('./userBehavior');
    const profile = await getUserTasteProfile(userId);
    
    if (!profile || profile.topGenres.length === 0) {
      console.log('⚠️ No taste profile found for user');
      return [];
    }

    console.log(`📊 User top genres:`, profile.topGenres.slice(0, 5).map(([g]) => g));

    // 2. Chercher des artistes émergents pour chaque top genre
    const allArtists: EmergingArtist[] = [];
    const topGenres = profile.topGenres.slice(0, 5); // Top 5 genres
    
    for (const [genreName, score] of topGenres) {
      console.log(`🔍 Searching emerging artists for "${genreName}" (score: ${score})`);
      const artists = await findEmergingArtistsByGenre(genreName, 8);
      allArtists.push(...artists);
    }

    console.log(`📦 Collected ${allArtists.length} artists before deduplication`);

    // 3. Dédupliquer
    const uniqueArtists = deduplicateArtists(allArtists);
    console.log(`✨ ${uniqueArtists.length} unique artists after deduplication`);

    // 4. Optionnel: Ajouter des artistes similaires aux favoris
    if (profile.topGenres.length > 0) {
      const { data: topRatings } = await supabase
        .from('ratings')
        .select('item_name, rating')
        .eq('user_id', userId)
        .eq('item_type', 'genre')
        .gte('rating', 7)
        .order('rating', { ascending: false })
        .limit(3);

      if (topRatings && topRatings.length > 0) {
        console.log(`🎵 Finding similar artists based on top ratings:`, topRatings.map(r => r.item_name));
        
        for (const rating of topRatings) {
          // Récupérer les artistes du genre
          const { genres } = await import('../data/genres');
          const genre = genres.find(g => g.name === rating.item_name);
          
          if (genre?.artists && genre.artists.length > 0) {
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
                
                // Rate limit
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
    const finalUnique = deduplicateArtists(uniqueArtists);
    console.log(`🎯 Final count: ${finalUnique.length} unique emerging artists`);

    const result = finalUnique
      .sort((a, b) => b.emergenceScore - a.emergenceScore)
      .slice(0, limit);

    console.log(`✅ Returning ${result.length} personalized emerging artists`);
    return result;
    
  } catch (error) {
    console.error('❌ Error getting personalized emerging artists:', error);
    return [];
  }
}

// ============================================
// SAUVEGARDER LES DÉCOUVERTES
// ============================================

// Sauvegarder les découvertes d'artistes émergents
export async function saveEmergingDiscovery(
  artistName: string,
  mbid: string | undefined,
  genres: string[]
) {
  try {
    const { error } = await supabase.from('emerging_discoveries').insert({
      artist_name: artistName,
      spotify_id: mbid || artistName,
      genres
    });

    if (error) {
      console.error('Error saving emerging discovery:', error);
    } else {
      console.log(`✅ Saved discovery: ${artistName}`);
    }
  } catch (error) {
    console.error('Error saving emerging discovery:', error);
  }
}