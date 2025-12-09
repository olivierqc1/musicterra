// src/services/lastfm.ts
const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const BASE_URL = 'https://ws.audioscrobbler.com/2.0';

export interface LastFmArtist {
  name: string;
  mbid?: string;
  url: string;
  image?: any;
  listeners: number;
  playcount: number;
}

export async function getTopArtistsByTag(
  tag: string,
  limit: number = 50
): Promise<LastFmArtist[]> {
  try {
    const response = await fetch(
      `${BASE_URL}?method=tag.gettopartists&tag=${encodeURIComponent(tag)}&api_key=${API_KEY}&format=json&limit=${limit}`
    );
    
    const data = await response.json();
    return data.topartists?.artist || [];
  } catch (error) {
    console.error('Last.fm error:', error);
    return [];
  }
}

export async function getSimilarArtists(
  artistName: string,
  limit: number = 30
): Promise<LastFmArtist[]> {
  try {
    const response = await fetch(
      `${BASE_URL}?method=artist.getsimilar&artist=${encodeURIComponent(artistName)}&api_key=${API_KEY}&format=json&limit=${limit}`
    );
    
    const data = await response.json();
    return data.similarartists?.artist || [];
  } catch (error) {
    console.error('Last.fm error:', error);
    return [];
  }
}

// 🎯 Filtre intelligent adapté par genre
export function filterEmerging(artists: LastFmArtist[], tag?: string): LastFmArtist[] {
  // Genres très populaires = seuil plus élevé
  const popularGenres = ['rock', 'pop', 'jazz', 'electronic', 'hip hop', 'metal', 'indie', 'alternative'];
  
  // Définir le seuil selon la popularité du genre
  const isPopularGenre = tag ? popularGenres.some(g => tag.toLowerCase().includes(g)) : false;
  
  const listenerThreshold = isPopularGenre ? 500000 : 200000;  // 500k pour genres populaires, 200k sinon
  const playcountThreshold = isPopularGenre ? 5000000 : 2000000; // 5M pour genres populaires, 2M sinon
  
  // Filtrer les artistes
  const filtered = artists.filter(a => 
    a.listeners < listenerThreshold && 
    a.playcount < playcountThreshold
  );

  // Si aucun résultat, être encore moins strict
  if (filtered.length === 0) {
    return artists.filter(a => 
      a.listeners < listenerThreshold * 2 && 
      a.playcount < playcountThreshold * 2
    ).slice(0, 10); // Maximum 10 artistes
  }

  return filtered;
}