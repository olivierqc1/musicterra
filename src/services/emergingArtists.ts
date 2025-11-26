// emergingArtists.ts - VERSION AMÉLIORÉE AVEC MATRICE DE SIMILARITÉ
import { supabase } from '../lib/supabase';
import { searchArtistsByGenre, findEmergingArtists as findEmergingMB, MusicBrainzArtist } from './musicbrainz';
import { getSimilarArtists, LastFmArtist } from './lastfm';
import { matrix } from '../data/matrix'; // ← NOUVEAU : Import de la matrice !

export interface EmergingArtist {
  name: string;
  mbid?: string;
  country?: string;
  genres: string[];
  imageUrl?: string;
  lastfmUrl?: string;
  listeners?: number;
  emergenceScore: number;
  matchScore?: number; // ← NOUVEAU : Score de match avec tes goûts
  lifeSpan?: {
    begin?: string;
    ended?: boolean;
  };
}

// ============================================
// NOUVEAU : CALCUL DE SIMILARITÉ AVEC MATRICE
// ============================================

/**
 * Récupère le score de similarité entre deux genres depuis la matrice
 */
function getGenreSimilarity(genre1: string, genre2: string): number {
  // Normaliser les noms (minuscules, trim)
  const g1 = genre1.toLowerCase().trim();
  const g2 = genre2.toLowerCase().trim();
  
  // Si c'est le même genre
  if (g1 === g2) return 1.0;
  
  // Chercher dans la matrice
  const g1Data = matrix[g1];
  if (!g1Data) return 0;
  
  return g1Data[g2] || 0;
}

/**
 * Trouve les genres similaires à un genre donné avec leur score
 * @param genre Le genre source
 * @param minSimilarity Score minimum de similarité (par défaut 0.5)
 * @param limit Nombre max de genres similaires
 * @returns Array de [genreName, similarityScore] triés par score
 */
function findSimilarGenres(
  genre: string,
  minSimilarity: number = 0.5,
  limit: number = 10
): Array<[string, number]> {
  const normalized = genre.toLowerCase().trim();
  const genreData = matrix[normalized];
  
  if (!genreData) {
    console.warn(`⚠️ Genre "${genre}" not found in similarity matrix`);
    return [];
  }
  
  // Convertir en array et filtrer
  const similar = Object.entries(genreData)
    .filter(([_, score]) => score >= minSimilarity)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
  
  console.log(`🔗 Found ${similar.length} similar genres for "${genre}" (min: ${minSimilarity})`);
  return similar;
}

/**
 * NOUVEAU : Calcule les genres pondérés basés sur les ratings de l'utilisateur
 * Utilise la matrice de similarité pour étendre les genres
 * 
 * @param userRatings Les ratings de l'utilisateur [{item_name, rating}]
 * @param minSimilarity Score minimum de similarité pour inclure un genre
 * @returns Map de genre → score pondéré
 */
function calculateWeightedGenres(
  userRatings: Array<{ item_name: string; rating: number }>,
  minSimilarity: number = 0.5
): Map<string, number> {
  const weightedGenres = new Map<string, number>();
  
  console.log(`🧮 Calculating weighted genres from ${userRatings.length} ratings...`);
  
  for (const { item_name: genre, rating } of userRatings) {
    // 1. Ajouter le genre lui-même avec son rating complet
    const current = weightedGenres.get(genre) || 0;
    weightedGenres.set(genre, Math.max(current, rating));
    
    // 2. Trouver les genres similaires via la matrice
    const similarGenres = findSimilarGenres(genre, minSimilarity, 15);
    
    // 3. Ajouter les genres similaires avec pondération
    for (const [similarGenre, similarity] of similarGenres) {
      // Score = rating × similarité
      // Ex: Si tu notes Afrobeat 9/10 et Highlife est similaire à 0.85
      //     → Highlife score = 9 × 0.85 = 7.65
      const weightedScore = rating * similarity;
      
      const existingScore = weightedGenres.get(similarGenre) || 0;
      
      // Garder le meilleur score si le genre apparaît plusieurs fois
      weightedGenres.set(similarGenre, Math.max(existingScore, weightedScore));
    }
  }
  
  console.log(`✅ Generated ${weightedGenres.size} weighted genres (from ${userRatings.length} ratings)`);
  
  // Trier par score et afficher les top 10
  const topGenres = Array.from(weightedGenres.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  console.log(`📊 Top 10 weighted genres:`, 
    topGenres.map(([g, s]) => `${g} (${s.toFixed(2)})`).join(', ')
  );
  
  return weightedGenres;
}

// ============================================
// ENRICHISSEMENT AVEC LAST.FM (INCHANGÉ)
// ============================================

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

async function enrichWithLastFm(mbArtists: MusicBrainzArtist[]): Promise<EmergingArtist[]> {
  const BATCH_SIZE = 5;
  const enriched: EmergingArtist[] = [];

  console.log(`🔄 Enriching ${mbArtists.length} artists in batches of ${BATCH_SIZE}...`);

  for (let i = 0; i < mbArtists.length; i += BATCH_SIZE) {
    const batch = mbArtists.slice(i, i + BATCH_SIZE);
    
    const results = await Promise.allSettled(
      batch.map(artist => enrichArtist(artist))
    );
    
    const batchResults = results
      .filter((r): r is PromiseFulfilledResult<EmergingArtist | null> => r.status === 'fulfilled')
      .map(r => r.value)
      .filter((artist): artist is EmergingArtist => artist !== null);
    
    enriched.push(...batchResults);
    
    if (i + BATCH_SIZE < mbArtists.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log(`✅ Successfully enriched ${enriched.length}/${mbArtists.length} artists`);
  return enriched;
}

function calculateEmergenceScore(listeners: number, beginYear?: string): number {
  if (!beginYear) return 0;

  const year = parseInt(beginYear.split('-')[0]);
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age > 10 || age < 0) return 0;
  if (listeners > 50000 || listeners < 100) return 0;

  const recencyScore = Math.max(0, 100 - (age * 10));
  const listenerScore = Math.max(0, 100 - (listeners / 500));

  return (recencyScore * 0.6) + (listenerScore * 0.4);
}

function deduplicateArtists(artists: EmergingArtist[]): EmergingArtist[] {
  const seen = new Map<string, EmergingArtist>();
  
  for (const artist of artists) {
    const key = artist.mbid || artist.name.toLowerCase().trim();
    const existing = seen.get(key);
    
    // Garder celui avec le meilleur score combiné (émergence × match)
    const currentScore = (artist.emergenceScore || 0) * (artist.matchScore || 1);
    const existingScore = existing ? (existing.emergenceScore || 0) * (existing.matchScore || 1) : 0;
    
    if (!existing || currentScore > existingScore) {
      seen.set(key, artist);
    }
  }
  
  return Array.from(seen.values());
}

// ============================================
// RECHERCHE AVEC CACHE (INCHANGÉ)
// ============================================

export async function findEmergingArtistsByGenre(
  genre: string,
  limit: number = 10
): Promise<EmergingArtist[]> {
  try {
    console.log('🔍 Checking cache for genre:', genre);
    
    const { data: cached, error: cacheError } = await supabase
      .from('emerging_artists_cache')
      .select('artists, created_at')
      .eq('genre', genre)
      .gt('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (cached && !cacheError) {
      const ageMinutes = Math.round((Date.now() - new Date(cached.created_at).getTime()) / 1000 / 60);
      console.log(`✅ Cache HIT for "${genre}" - Age: ${ageMinutes} minutes`);
      return cached.artists.slice(0, limit);
    }

    console.log(`❌ Cache MISS for "${genre}" - Fetching fresh data...`);
    
    const mbArtists = await findEmergingMB(genre, 30);
    console.log(`📥 Found ${mbArtists.length} artists from MusicBrainz`);
    
    if (mbArtists.length === 0) {
      console.warn(`⚠️ No artists found for genre "${genre}"`);
      return [];
    }
    
    const enriched = await enrichWithLastFm(mbArtists);
    
    const sorted = enriched
      .sort((a, b) => b.emergenceScore - a.emergenceScore)
      .slice(0, limit);

    if (sorted.length > 0) {
      console.log(`💾 Saving ${sorted.length} artists to cache for "${genre}"`);
      
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24);

      const { error: insertError } = await supabase
        .from('emerging_artists_cache')
        .insert({
          genre,
          artists: sorted,
          expires_at: expiresAt.toISOString()
        });

      if (insertError) {
        console.error('❌ Error saving to cache:', insertError);
      }
    }

    return sorted;
    
  } catch (error) {
    console.error('❌ Error finding emerging artists:', error);
    return [];
  }
}

// ============================================
// NOUVEAU : RECOMMANDATIONS AVEC MATRICE
// ============================================

/**
 * Recommandations personnalisées AMÉLIORÉES avec matrice de similarité
 * 
 * Cette version utilise ta matrice pour trouver des artistes émergents
 * non seulement dans tes genres favoris, mais aussi dans les genres similaires !
 */
export async function getPersonalizedEmergingArtists(
  userId: string,
  limit: number = 20
): Promise<EmergingArtist[]> {
  try {
    if (limit > 50) limit = 50;
    if (limit < 1) limit = 20;

    console.log(`🎯 Getting personalized emerging artists for user ${userId} (WITH MATRIX)`);

    // 1. Récupérer TOUS les ratings de genres (pas juste top 5)
    const { data: ratings, error } = await supabase
      .from('ratings')
      .select('item_name, rating')
      .eq('user_id', userId)
      .eq('item_type', 'genre')
      .gte('rating', 5) // Seulement les genres notés >= 5/10
      .order('rating', { ascending: false });

    if (error || !ratings || ratings.length === 0) {
      console.log('⚠️ No genre ratings found for user');
      return [];
    }

    console.log(`📊 User has ${ratings.length} genre ratings >= 5`);

    // 2. NOUVEAU : Calculer les genres pondérés avec la matrice
    const weightedGenres = calculateWeightedGenres(ratings, 0.5);
    
    // 3. Trier par score et prendre les meilleurs
    const topWeightedGenres = Array.from(weightedGenres.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15); // Top 15 genres pondérés

    console.log(`🎵 Searching in ${topWeightedGenres.length} weighted genres...`);

    // 4. Chercher des artistes émergents pour chaque genre pondéré
    const allArtists: EmergingArtist[] = [];
    
    for (const [genreName, weightedScore] of topWeightedGenres) {
      // Nombre d'artistes proportionnel au score
      const artistsToFetch = Math.max(3, Math.min(10, Math.round(weightedScore)));
      
      console.log(`🔍 Searching "${genreName}" (score: ${weightedScore.toFixed(2)}) - fetching ${artistsToFetch} artists`);
      
      const artists = await findEmergingArtistsByGenre(genreName, artistsToFetch);
      
      // NOUVEAU : Ajouter le matchScore basé sur le weighted score
      const artistsWithMatch = artists.map(artist => ({
        ...artist,
        matchScore: weightedScore / 10 // Normaliser sur 1
      }));
      
      allArtists.push(...artistsWithMatch);
    }

    console.log(`📦 Collected ${allArtists.length} artists before deduplication`);

    // 5. Dédupliquer (maintenant considère emergenceScore × matchScore)
    const uniqueArtists = deduplicateArtists(allArtists);
    console.log(`✨ ${uniqueArtists.length} unique artists after deduplication`);

    // 6. Trier par score combiné : émergence × match
    const result = uniqueArtists
      .map(artist => ({
        ...artist,
        // Score final = émergence (qualité de l'artiste) × match (pertinence pour toi)
        finalScore: (artist.emergenceScore || 0) * (artist.matchScore || 1)
      }))
      .sort((a, b) => b.finalScore - a.finalScore)
      .slice(0, limit);

    console.log(`✅ Returning ${result.length} personalized emerging artists`);
    console.log(`📊 Top 5:`, result.slice(0, 5).map(a => 
      `${a.name} (emergence: ${a.emergenceScore?.toFixed(0)}, match: ${a.matchScore?.toFixed(2)}, final: ${a.finalScore?.toFixed(0)})`
    ));
    
    return result;
    
  } catch (error) {
    console.error('❌ Error getting personalized emerging artists:', error);
    return [];
  }
}

// ============================================
// SAUVEGARDER LES DÉCOUVERTES (INCHANGÉ)
// ============================================

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