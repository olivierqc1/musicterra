// MusicBrainz = Wikipedia de la musique, 100% gratuit et open
const BASE_URL = 'https://musicbrainz.org/ws/2';

export interface MusicBrainzArtist {
  id: string;
  name: string;
  country?: string;
  type?: string;
  genres?: string[];
  disambiguation?: string;
  area?: string;
  lifeSpan?: {
    begin?: string;
    ended?: boolean;
  };
}

export async function searchArtistsByGenre(
  genre: string,
  country?: string
): Promise<MusicBrainzArtist[]> {
  try {
    let query = `tag:"${genre}"`;
    if (country) {
      query += ` AND country:${country}`;
    }

    const response = await fetch(
      `${BASE_URL}/artist?query=${encodeURIComponent(query)}&fmt=json&limit=50`,
      {
        headers: {
          'User-Agent': 'Musicterra/1.0 (contact@musicterra.app)'
        }
      }
    );

    await rateLimitDelay(); // MusicBrainz limite à 1 req/sec
    
    const data = await response.json();
    return data.artists || [];
  } catch (error) {
    console.error('MusicBrainz error:', error);
    return [];
  }
}

// Récupérer les tags/genres d'un artiste
export async function getArtistTags(artistId: string): Promise<string[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/artist/${artistId}?inc=tags&fmt=json`,
      {
        headers: {
          'User-Agent': 'Musicterra/1.0 (contact@musicterra.app)'
        }
      }
    );

    await rateLimitDelay();
    
    const data = await response.json();
    return data.tags?.map((t: any) => t.name) || [];
  } catch (error) {
    console.error('MusicBrainz error:', error);
    return [];
  }
}

// Helper pour respecter le rate limit (1 req/sec)
let lastRequest = 0;
async function rateLimitDelay() {
  const now = Date.now();
  const elapsed = now - lastRequest;
  if (elapsed < 1000) {
    await new Promise(resolve => setTimeout(resolve, 1000 - elapsed));
  }
  lastRequest = Date.now();
}

// Découvrir des artistes émergents (récents)
export async function findEmergingArtists(
  genre: string,
  limit: number = 20
): Promise<MusicBrainzArtist[]> {
  const currentYear = new Date().getFullYear();
  
  try {
    const response = await fetch(
      `${BASE_URL}/artist?query=tag:"${genre}" AND begin:[${currentYear - 5} TO ${currentYear}]&fmt=json&limit=${limit}`,
      {
        headers: {
          'User-Agent': 'Musicterra/1.0 (contact@musicterra.app)'
        }
      }
    );

    await rateLimitDelay();
    
    const data = await response.json();
    return data.artists || [];
  } catch (error) {
    console.error('MusicBrainz error:', error);
    return [];
  }
}
