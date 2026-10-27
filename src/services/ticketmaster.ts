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
// ── Concerts autour d'un lieu, filtrés par style ───────────────
// Utilisé par « Pour toi, près de chez toi » (ConcertsForYou.tsx).

export interface TmClassification {
  primary?: boolean;
  segment?: { name?: string };
  genre?: { name?: string };
  subGenre?: { name?: string };
}

export interface NearbyEvent extends TicketmasterEvent {
  classifications?: TmClassification[];
  images?: { url: string; width: number; height: number; ratio?: string }[];
}

export type Place =
  | { kind: "gps"; lat: number; lng: number; label?: string }
  | { kind: "city"; city: string };

// Encodage geohash (paramètre geoPoint recommandé par Ticketmaster)
const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
export function geohash(lat: number, lng: number, precision = 7): string {
  let latMin = -90, latMax = 90, lngMin = -180, lngMax = 180;
  let hash = "", bit = 0, ch = 0, even = true;
  while (hash.length < precision) {
    if (even) {
      const mid = (lngMin + lngMax) / 2;
      if (lng >= mid) { ch = (ch << 1) | 1; lngMin = mid; } else { ch <<= 1; lngMax = mid; }
    } else {
      const mid = (latMin + latMax) / 2;
      if (lat >= mid) { ch = (ch << 1) | 1; latMin = mid; } else { ch <<= 1; latMax = mid; }
    }
    even = !even;
    if (++bit === 5) {
      hash += BASE32[ch];
      bit = 0;
      ch = 0;
    }
  }
  return hash;
}

const isoNoMs = (d: Date) => d.toISOString().slice(0, 19) + "Z";

/**
 * Concerts à venir (90 jours) autour d'un lieu, pour un style Ticketmaster
 * (« Jazz », « Rock »…) ou tous styles si `classification` est vide.
 * Renvoie [] en cas d'erreur : l'appelant affiche alors un message.
 */
export async function searchNearbyEvents(
  place: Place,
  classification?: string,
  size = 60
): Promise<{ events: NearbyEvent[]; ok: boolean }> {
  if (!API_KEY) return { events: [], ok: false };
  const now = new Date();
  const end = new Date(now.getTime() + 90 * 24 * 3600 * 1000);
  const params = new URLSearchParams({
    apikey: API_KEY,
    size: String(size),
    sort: "date,asc",
    startDateTime: isoNoMs(now),
    endDateTime: isoNoMs(end),
  });
  params.set("classificationName", classification || "music");
  if (place.kind === "gps") {
    params.set("geoPoint", geohash(place.lat, place.lng));
    params.set("radius", "60");
    params.set("unit", "km");
  } else {
    params.set("city", place.city);
  }
  try {
    const res = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${params}`);
    if (!res.ok) {
      console.error("Ticketmaster", res.status);
      return { events: [], ok: false };
    }
    const data = await res.json();
    return { events: data?._embedded?.events || [], ok: true };
  } catch (err) {
    console.error("Ticketmaster", err);
    return { events: [], ok: false };
  }
}
