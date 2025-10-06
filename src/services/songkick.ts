const SONGKICK_API_KEY = import.meta.env.VITE_SONGKICK_API_KEY;
const BASE_URL = 'https://api.songkick.com/api/3.0';

export interface SongkickEvent {
  id: string;
  displayName: string;
  type: string;
  uri: string;
  status: string;
  start: {
    date: string;
    datetime?: string;
    time?: string;
  };
  performance: Array<{
    artist: {
      displayName: string;
      uri: string;
    };
    billing: string;
  }>;
  venue: {
    displayName: string;
    uri: string;
    lat: number;
    lng: number;
  };
  location: {
    city: string;
    lat: number;
    lng: number;
  };
}

export async function searchArtistEvents(artistName: string): Promise<SongkickEvent[]> {
  try {
    // Trouver l'artiste
    const artistRes = await fetch(
      `${BASE_URL}/search/artists.json?apikey=${SONGKICK_API_KEY}&query=${encodeURIComponent(artistName)}`
    );
    const artistData = await artistRes.json();
    
    if (!artistData.resultsPage.results.artist?.[0]) return [];
    
    const artistId = artistData.resultsPage.results.artist[0].id;
    
    // Récupérer ses concerts
    const eventsRes = await fetch(
      `${BASE_URL}/artists/${artistId}/calendar.json?apikey=${SONGKICK_API_KEY}`
    );
    const eventsData = await eventsRes.json();
    
    return eventsData.resultsPage.results.event || [];
  } catch (error) {
    console.error('Songkick API error:', error);
    return [];
  }
}

export async function searchLocationEvents(city: string): Promise<SongkickEvent[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/search/locations.json?apikey=${SONGKICK_API_KEY}&query=${encodeURIComponent(city)}`
    );
    const data = await res.json();
    
    if (!data.resultsPage.results.location?.[0]) return [];
    
    const metroId = data.resultsPage.results.location[0].metroArea.id;
    
    const eventsRes = await fetch(
      `${BASE_URL}/metro_areas/${metroId}/calendar.json?apikey=${SONGKICK_API_KEY}`
    );
    const eventsData = await eventsRes.json();
    
    return eventsData.resultsPage.results.event || [];
  } catch (error) {
    console.error('Songkick API error:', error);
    return [];
  }
}
