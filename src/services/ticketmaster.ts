const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

export interface TicketmasterEvent {
  id: string;
  name: string;
  type: string;
  url: string;
  dates: {
    start: {
      localDate: string;
      localTime?: string;
    };
  };
  _embedded?: {
    venues: Array<{
      name: string;
      city: {
        name: string;
      };
      state?: {
        name: string;
      };
      country: {
        name: string;
      };
      location?: {
        longitude: string;
        latitude: string;
      };
    }>;
    attractions?: Array<{
      name: string;
      url: string;
    }>;
  };
  priceRanges?: Array<{
    min: number;
    max: number;
    currency: string;
  }>;
}

export async function searchEventsByCity(city: string, page = 0): Promise<TicketmasterEvent[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/events.json?city=${encodeURIComponent(city)}&apikey=${API_KEY}&size=20&page=${page}&locale=*`
    );
    
    if (!response.ok) {
      throw new Error(`Ticketmaster API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.error('Ticketmaster API error:', error);
    return [];
  }
}

export async function searchEventsByLocation(
  lat: number,
  lng: number,
  radiusKm = 50
): Promise<TicketmasterEvent[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/events.json?latlong=${lat},${lng}&radius=${radiusKm}&unit=km&apikey=${API_KEY}&size=20&locale=*`
    );
    
    if (!response.ok) {
      throw new Error(`Ticketmaster API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.error('Ticketmaster API error:', error);
    return [];
  }
}

// Filtrer seulement les concerts (pas les sports/théâtre)
export function filterMusicEvents(events: TicketmasterEvent[]): TicketmasterEvent[] {
  return events.filter(event => 
    event.type === 'event' && 
    event._embedded?.attractions?.some(attr => attr.name)
  );
}
