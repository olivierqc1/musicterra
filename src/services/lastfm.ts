const API_KEY = import.meta.env.VITE_LASTFM_API_KEY; // Gratuit: https://www.last.fm/api
const BASE_URL = 'https://ws.audioscrobbler.com/2.0';

export interface LastFmArtist {
  name: string;
  mbid?: string;
  url: string;
  image?: string;
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

// Artistes similaires
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

// Filtrer les artistes émergents (peu d'écoutes)
export function filterEmerging(artists: LastFmArtist[]): LastFmArtist[] {
  return artists.filter(a => 
    a.listeners < 100000 && // Moins de 100k auditeurs
    a.playcount < 1000000    // Moins de 1M d'écoutes
  );
}
