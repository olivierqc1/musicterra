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
    const artists = data.topartists?.artist || [];
    
    // Convertir listeners et playcount en nombres
    return artists.map((a: any) => ({
      ...a,
      listeners: parseInt(a.listeners || '0', 10),
      playcount: parseInt(a.playcount || '0', 10),
    }));
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
    const artists = data.similarartists?.artist || [];
    
    // Convertir listeners et playcount en nombres
    return artists.map((a: any) => ({
      ...a,
      listeners: parseInt(a.listeners || '0', 10),
      playcount: parseInt(a.playcount || '0', 10),
    }));
  } catch (error) {
    console.error('Last.fm error:', error);
    return [];
  }
}

// 🎯 Filtre intelligent adapté par genre
export function filterEmerging(artists: LastFmArtist[], tag?: string): LastFmArtist[] {
  console.log(`📊 ${tag}: ${artists.length} artistes reçus`);
  
  // Log des exemples (avec vérification)
  if (artists.length > 0 && artists[0]) {
    const l1 = artists[0].listeners || 0;
    console.log(`  Ex 1: ${artists[0].name} - ${l1.toLocaleString()} listeners`);
    if (artists[1]) {
      const l2 = artists[1].listeners || 0;
      console.log(`  Ex 2: ${artists[1].name} - ${l2.toLocaleString()} listeners`);
    }
  }
  
  const popularGenres = ['rock', 'pop', 'jazz', 'electronic', 'hip hop', 'metal', 'indie', 'alternative'];
  const isPopularGenre = tag ? popularGenres.some(g => tag.toLowerCase().includes(g)) : false;
  
  const listenerThreshold = isPopularGenre ? 500000 : 200000;
  const playcountThreshold = isPopularGenre ? 5000000 : 2000000;
  
  console.log(`  Seuil: ${listenerThreshold.toLocaleString()} listeners`);
  
  // Filtrer en vérifiant que listeners existe
  const filtered = artists.filter(a => 
    a.listeners && 
    a.listeners < listenerThreshold && 
    a.playcount < playcountThreshold
  );

  console.log(`  → ${filtered.length} après filtre`);

  if (filtered.length === 0) {
    const fallback = artists.filter(a => 
      a.listeners &&
      a.listeners < listenerThreshold * 2 && 
      a.playcount < playcountThreshold * 2
    ).slice(0, 10);
    console.log(`  → ${fallback.length} avec fallback (x2)`);
    return fallback;
  }

  return filtered;
}