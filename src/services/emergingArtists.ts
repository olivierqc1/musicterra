// src/services/emergingArtists.ts - VERSION AVEC LAST.FM API
import { supabase } from '../lib/supabase';
import { matrix } from '../data/matrix';
import { getTopArtistsByTag, filterEmerging, LastFmArtist } from './lastfm';

export interface Rating {
  id: string;
  user_id: string;
  item_type: 'genre' | 'country';
  item_name: string;
  rating: number;
  updated_at: string;
}

export interface EmergingArtist {
  name: string;
  mbid: string;
  genres: string[];
  imageUrl?: string;
  listeners?: number;
  lastfmUrl?: string;
  emergenceScore: number;
  matchScore: number;
}

// ==========================================
// CHARGER DEPUIS LOCALSTORAGE
// ==========================================
function loadRatingsFromLocalStorage(userId: string): Rating[] {
  const ratings: Rating[] = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(`rating_${userId}_`)) {
      const parts = key.split('_');
      const itemType = parts[2] as 'genre' | 'country';
      const itemName = parts.slice(3).join('_');
      const rating = parseInt(localStorage.getItem(key) || '0');

      if (rating > 0) {
        ratings.push({
          id: key,
          user_id: userId,
          item_type: itemType,
          item_name: itemName,
          rating: rating,
          updated_at: new Date().toISOString(),
        });
      }
    }
  }

  return ratings;
}

// ==========================================
// CHARGER DEPUIS SUPABASE (avec timeout)
// ==========================================
async function loadRatingsFromSupabase(userId: string): Promise<Rating[]> {
  try {
    console.log("☁️ Chargement Supabase...");
    
    const supabasePromise = supabase
      .from('ratings')
      .select('*')
      .eq('user_id', userId)
      .gte('rating', 5);

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Supabase timeout')), 5000)
    );

    const { data, error } = await Promise.race([
      supabasePromise,
      timeoutPromise
    ]) as any;

    if (error) {
      console.warn("⚠️ Erreur Supabase:", error.message);
      return [];
    }

    if (data && data.length > 0) {
      console.log(`☁️ ${data.length} ratings Supabase chargés`);
      return data;
    }

    return [];
  } catch (err: any) {
    console.warn("⚠️ Supabase indisponible:", err.message);
    return [];
  }
}

// ==========================================
// MERGER localStorage + Supabase
// ==========================================
function mergeRatings(localRatings: Rating[], supabaseRatings: Rating[]): Rating[] {
  const merged = new Map<string, Rating>();

  // 1. Ajouter les ratings locaux
  localRatings.forEach(rating => {
    const key = `${rating.item_type}_${rating.item_name}`;
    merged.set(key, rating);
  });

  // 2. Ajouter/remplacer avec les ratings Supabase (priorité)
  supabaseRatings.forEach(rating => {
    const key = `${rating.item_type}_${rating.item_name}`;
    const existing = merged.get(key);

    // Si Supabase a une version, elle prend priorité
    if (!existing || new Date(rating.updated_at) >= new Date(existing.updated_at)) {
      merged.set(key, rating);
    }
  });

  return Array.from(merged.values());
}

// ==========================================
// CHARGER HYBRIDE (localStorage + Supabase)
// ==========================================
export async function loadUserRatings(userId: string): Promise<Rating[]> {
  console.log("📥 Chargement HYBRIDE des ratings...");

  // 1. Charger localStorage (instantané)
  const localRatings = loadRatingsFromLocalStorage(userId);
  console.log(`📦 ${localRatings.length} ratings locaux`);

  // 2. Lancer Supabase en parallèle
  const supabaseRatings = await loadRatingsFromSupabase(userId);

  // 3. Merger les deux
  const merged = mergeRatings(localRatings, supabaseRatings);
  console.log(`✅ ${merged.length} ratings au total (${localRatings.length} local + ${supabaseRatings.length} cloud)`);

  return merged;
}

// ==========================================
// CALCUL DE SIMILARITÉ
// ==========================================
function calculateSimilarity(genre1: string, genre2: string): number {
  const g1 = genre1.toLowerCase().trim();
  const g2 = genre2.toLowerCase().trim();

  if (g1 === g2) return 1;

  return matrix[g1]?.[g2] || matrix[g2]?.[g1] || 0;
}

// ==========================================
// OBTENIR GENRES ÉTENDUS
// ==========================================
function getExtendedGenres(userRatings: Rating[]): Map<string, number> {
  const genreScores = new Map<string, number>();

  // Genres notés ≥5
  const highRatedGenres = userRatings
    .filter(r => r.item_type === 'genre' && r.rating >= 5)
    .map(r => ({ name: r.item_name.toLowerCase(), rating: r.rating }));

  if (highRatedGenres.length === 0) return genreScores;

  // Ajouter les genres de base
  highRatedGenres.forEach(({ name, rating }) => {
    genreScores.set(name, rating);
  });

  // Étendre via similarité
  highRatedGenres.forEach(({ name, rating }) => {
    const similarities = matrix[name] || {};
    
    Object.entries(similarities)
      .filter(([_, sim]) => sim >= 0.5)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .forEach(([relatedGenre, similarity]) => {
        const score = rating * similarity;
        const current = genreScores.get(relatedGenre) || 0;
        genreScores.set(relatedGenre, Math.max(current, score));
      });
  });

  return genreScores;
}

// ==========================================
// CALCULER SCORE ÉMERGENCE
// ==========================================
function calculateEmergenceScore(artist: LastFmArtist): number {
  // Score basé sur le nombre d'auditeurs (moins = plus émergent)
  const listenerScore = Math.max(0, 100 - (artist.listeners / 1000));
  
  // Score basé sur le ratio playcount/listeners (plus bas = plus émergent)
  const ratio = artist.playcount / Math.max(artist.listeners, 1);
  const ratioScore = Math.max(0, 100 - ratio);
  
  return Math.min(100, (listenerScore + ratioScore) / 2);
}

// ==========================================
// CALCULER MATCH SCORE
// ==========================================
function calculateMatchScore(
  artistGenres: string[],
  extendedGenres: Map<string, number>
): number {
  if (artistGenres.length === 0 || extendedGenres.size === 0) return 0;

  let totalScore = 0;
  let matchCount = 0;

  artistGenres.forEach(artistGenre => {
    const ag = artistGenre.toLowerCase();
    
    // Match direct
    if (extendedGenres.has(ag)) {
      totalScore += extendedGenres.get(ag)!;
      matchCount++;
      return;
    }

    // Match par similarité
    let bestMatch = 0;
    extendedGenres.forEach((score, userGenre) => {
      const similarity = calculateSimilarity(ag, userGenre);
      if (similarity >= 0.5) {
        bestMatch = Math.max(bestMatch, score * similarity);
      }
    });

    if (bestMatch > 0) {
      totalScore += bestMatch;
      matchCount++;
    }
  });

  return matchCount > 0 ? totalScore / matchCount : 0;
}

// ==========================================
// OBTENIR ARTISTES ÉMERGENTS VIA LAST.FM
// ==========================================
export async function getPersonalizedEmergingArtists(
  userId: string,
  limit: number = 20
): Promise<EmergingArtist[]> {
  try {
    console.log("🌱 Recherche d'artistes émergents personnalisés...");

    // Vérifier si l'API key Last.fm est configurée
    const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
    if (!apiKey) {
      console.warn("⚠️ VITE_LASTFM_API_KEY non configurée");
      return [];
    }

    // 1. Charger les ratings (hybride)
    const ratings = await loadUserRatings(userId);
    
    if (ratings.length === 0) {
      console.log("ℹ️ Aucun rating trouvé");
      return [];
    }

    // 2. Obtenir genres étendus
    const extendedGenres = getExtendedGenres(ratings);
    console.log(`🎸 ${extendedGenres.size} genres dans le profil`);

    if (extendedGenres.size === 0) {
      console.log("ℹ️ Aucun genre bien noté");
      return [];
    }

    // 3. Prendre les top genres
    const topGenres = Array.from(extendedGenres.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10) // Top 10 genres
      .map(([genre]) => genre);

    console.log(`🔍 Recherche sur Last.fm pour ${topGenres.length} genres...`);

    // 4. Charger artistes de Last.fm pour chaque genre
    const artistsMap = new Map<string, { artist: LastFmArtist; genres: string[] }>();

    for (const genre of topGenres) {
      try {
        const artists = await getTopArtistsByTag(genre, 30);
        const emerging = filterEmerging(artists, genre);
        
        console.log(`  ${genre}: ${emerging.length} émergents`);

        emerging.forEach(artist => {
          const existing = artistsMap.get(artist.name);
          if (existing) {
            // Ajouter le genre à l'artiste existant
            if (!existing.genres.includes(genre)) {
              existing.genres.push(genre);
            }
          } else {
            // Nouvel artiste
            artistsMap.set(artist.name, {
              artist,
              genres: [genre]
            });
          }
        });
      } catch (err) {
        console.warn(`⚠️ Erreur pour genre "${genre}":`, err);
      }
    }

    console.log(`📊 ${artistsMap.size} artistes émergents trouvés`);

    // 5. Calculer scores et filtrer
    const scoredArtists = Array.from(artistsMap.values())
      .map(({ artist, genres }) => {
        const matchScore = calculateMatchScore(genres, extendedGenres);
        const emergenceScore = calculateEmergenceScore(artist);

        // Récupérer l'image (Last.fm retourne un tableau d'images de différentes tailles)
        let imageUrl = '';
        if (Array.isArray(artist.image)) {
          // Prendre la plus grande image disponible
          const largeImg = artist.image.find((img: any) => img.size === 'extralarge' || img.size === 'large');
          imageUrl = largeImg?.['#text'] || artist.image[artist.image.length - 1]?.['#text'] || '';
        } else if (typeof artist.image === 'string') {
          imageUrl = artist.image;
        }

        return {
          name: artist.name,
          mbid: artist.mbid || '',
          genres: genres,
          imageUrl: imageUrl,
          listeners: artist.listeners,
          lastfmUrl: artist.url,
          emergenceScore: emergenceScore,
          matchScore: matchScore,
        };
      })
      .filter(a => a.matchScore > 0)
      .sort((a, b) => {
        // Score final = emergence × match
        const scoreA = a.emergenceScore * a.matchScore;
        const scoreB = b.emergenceScore * b.matchScore;
        return scoreB - scoreA;
      })
      .slice(0, limit);

    console.log(`✅ ${scoredArtists.length} artistes recommandés`);
    return scoredArtists;

  } catch (err: any) {
    console.error("❌ Erreur getPersonalizedEmergingArtists:", err);
    return [];
  }
}

// ==========================================
// SAUVEGARDER DÉCOUVERTE
// ==========================================
export async function saveEmergingDiscovery(
  artistName: string,
  artistMbid: string,
  genres: string[]
): Promise<void> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Optionnel : sauvegarder dans Supabase si tu veux
    // Pour l'instant, on sauvegarde juste en localStorage
    localStorage.setItem(`emerging_saved_${artistName}`, 'true');

    console.log("✅ Découverte sauvegardée:", artistName);
  } catch (err: any) {
    console.error("❌ Erreur saveEmergingDiscovery:", err);
  }
}
