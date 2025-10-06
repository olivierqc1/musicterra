const APP_ID = import.meta.env.VITE_BANDSINTOWN_APP_ID || 'musicterra';
const BASE_URL = 'https://rest.bandsintown.com';

export interface BandsintownEvent {
  id: string;
  artist_id: string;
  url: string;
  datetime: string;
  title?: string;
  description?: string;
  venue: {
    name: string;
    location: string;
    city: string;
    region: string;
    country: string;
    latitude: string;
    longitude: string;
  };
  lineup: string[];
  offers: Array<{
    type: string;
    url: string;
    status: string;
  }>;
}

export async function searchArtistEvents(artistName: string): Promise<BandsintownEvent[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/artists/${encodeURIComponent(artistName)}/events?app_id=${APP_ID}`
    );
    
    if (!response.ok) {
      if (response.status === 404) return [];
      throw new Error(`Bandsintown API error: ${response.status}`);
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Bandsintown API error:', error);
    return [];
  }
}

export async function searchLocationEvents(city: string): Promise<BandsintownEvent[]> {
  // Bandsintown n'a pas de recherche par ville directe
  // On peut chercher "all events" dans une zone mais c'est limité
  // Alternative: rechercher les artistes populaires de cette région
  console.warn('Location search not directly supported by Bandsintown free API');
  return [];
}

// Helper: formatter la date
export function formatEventDate(datetime: string, language: 'fr' | 'en'): string {
  const date = new Date(datetime);
  return date.toLocaleDateString(language, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Helper: extraire la ville proprement
export function getEventCity(event: BandsintownEvent): string {
  return event.venue.city || event.venue.location.split(',')[0];
}
