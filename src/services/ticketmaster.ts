// src/services/ticketmaster.ts
const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY;

export interface TicketmasterEvent {
  id: string;
  name: string;
  url: string;
  dates: {
    start: {
      localDate: string;
      localTime?: string;
    };
  };
  _embedded?: {
    venues?: Array<{
      name: string;
      city: { name: string };
      country: { name: string };
    }>;
    attractions?: Array<{
      name: string;
    }>;
  };
}

export async function searchConcertsByArtist(artist: string): Promise<TicketmasterEvent[]> {
  console.log('🎫 Ticketmaster API Key présente:', !!API_KEY);
  
  if (!API_KEY) {
    console.error('❌ VITE_TICKETMASTER_API_KEY manquante dans .env');
    alert('Erreur: Clé API Ticketmaster manquante. Vérifiez votre fichier .env');
    return [];
  }

  if (!artist || artist.trim() === '') {
    console.error('❌ Nom d\'artiste vide');
    return [];
  }

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&keyword=${encodeURIComponent(artist)}&classificationName=music&size=20`;

  console.log('🔍 Recherche Ticketmaster pour:', artist);
  console.log('📡 URL:', url);

  try {
    const res = await fetch(url);
    
    console.log('📊 Status HTTP:', res.status);

    if (!res.ok) {
      console.error('❌ Erreur HTTP:', res.status, res.statusText);
      
      if (res.status === 401) {
        alert('Erreur: Clé API Ticketmaster invalide');
      }
      
      return [];
    }

    const data = await res.json();
    console.log('📦 Données reçues:', data);

    // Vérifier si des événements existent
    if (!data._embedded || !data._embedded.events || data._embedded.events.length === 0) {
      console.log('⚠️ Aucun concert trouvé avec filtre "music", essai sans filtre...');
      
      // Essai sans le filtre "music"
      const fallbackUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&keyword=${encodeURIComponent(artist)}&size=20`;
      
      console.log('🔄 Fallback URL:', fallbackUrl);
      
      const fallbackRes = await fetch(fallbackUrl);
      
      if (!fallbackRes.ok) {
        console.error('❌ Erreur fallback:', fallbackRes.status);
        return [];
      }
      
      const fallbackData = await fallbackRes.json();
      console.log('📦 Données fallback:', fallbackData);
      
      if (!fallbackData._embedded?.events) {
        console.log('⚠️ Aucun événement trouvé même en fallback');
        return [];
      }
      
      console.log('✅ Événements trouvés (fallback):', fallbackData._embedded.events.length);
      return fallbackData._embedded?.events || []; // ✅ FIX ICI
    }

    console.log('✅ Événements trouvés:', data._embedded.events.length);
    
    // Afficher le premier événement pour debug
    if (data._embedded.events.length > 0) {
      console.log('🎵 Premier événement:', data._embedded.events[0]);
    }
    
    return data._embedded?.events || []; // ✅ FIX ICI
    
  } catch (err) {
    console.error('💥 Erreur complète Ticketmaster:', err);
    
    if (err instanceof TypeError) {
      alert('Erreur de connexion. Vérifiez votre connexion internet.');
    }
    
    return [];
  }
}

// Fonction helper pour formater un événement
export function formatEvent(event: TicketmasterEvent, artistQuery: string) {
  const venue = event._embedded?.venues?.[0];
  const artist = event._embedded?.attractions?.[0]?.name || artistQuery;
  
  return {
    id: event.id,
    name: event.name,
    artistName: artist,
    venueName: venue?.name || 'Lieu inconnu',
    city: venue?.city?.name || '',
    country: venue?.country?.name || '',
    date: event.dates.start.localDate,
    time: event.dates.start.localTime,
    url: event.url
  };
}

// Fonction pour rechercher par localisation
export async function searchConcertsByLocation(
  city?: string,
  coords?: { lat: number; lng: number }
): Promise<TicketmasterEvent[]> {
  if (!API_KEY) {
    console.error('❌ API Key manquante');
    return [];
  }

  let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&classificationName=music&size=50`;

  if (city) {
    url += `&city=${encodeURIComponent(city)}`;
    console.log('🏙️ Recherche par ville:', city);
  } else if (coords) {
    url += `&latlong=${coords.lat},${coords.lng}&radius=50&unit=km`;
    console.log('📍 Recherche par GPS:', coords);
  }

  console.log('🔍 URL:', url);

  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      console.error('❌ Erreur HTTP:', res.status);
      return [];
    }

    const data = await res.json();
    console.log('📦 Événements trouvés:', data._embedded?.events?.length || 0);

    return data._embedded?.events || [];
    
  } catch (err) {
    console.error('💥 Erreur:', err);
    return [];
  }
}