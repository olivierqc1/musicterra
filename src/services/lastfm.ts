// src/services/lastfm.ts
// VERSION OPTIMISÉE : cache localStorage (24h), moins d'appels API,
// respect du rate limit Last.fm, normalisation des tags français.
// Interface identique à l'ancienne version — remplacement direct.

const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const BASE_URL = 'https://ws.audioscrobbler.com/2.0';

// ── Réglages ──────────────────────────────────────────────
const CACHE_PREFIX = 'lastfm_v2:';
const CACHE_TTL_TAG = 24 * 60 * 60 * 1000;      // 24h pour les listes par tag
const CACHE_TTL_ARTIST = 7 * 24 * 60 * 60 * 1000; // 7 jours pour les stats d'artiste
const MAX_ENRICHED = 25;   // on enrichit max 25 artistes (au lieu de 50)
const BATCH_SIZE = 5;      // 5 requêtes en parallèle max
const BATCH_DELAY = 250;   // pause entre les lots (rate limit ~5 req/s)

export interface LastFmArtist {
  name: string;
  mbid?: string;
  url: string;
  image?: any;
  listeners: number;
  playcount: number;
}

// ── Cache localStorage (sécurisé : ne plante jamais) ─────
function cacheGet<T>(key: string, ttl: number): T | null {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const { t, data } = JSON.parse(raw);
    if (Date.now() - t > ttl) {
      localStorage.removeItem(CACHE_PREFIX + key);
      return null;
    }
    return data as T;
  } catch {
    return null;
  }
}

function cacheSet(key: string, data: unknown) {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ t: Date.now(), data }));
  } catch {
    // localStorage plein ou indisponible : on continue sans cache
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ── Normalisation des tags pour Last.fm ──────────────────
// Les tags Last.fm sont communautaires et surtout en anglais.
// On traduit les termes français fréquents et on retire les accents.
const TAG_MAP: Record<string, string> = {
  'musique électronique': 'electronic',
  'électronique': 'electronic',
  'électro': 'electro',
  'chanson française': 'chanson',
  'variété française': 'french pop',
  'musique classique': 'classical',
  'classique': 'classical',
  'métal': 'metal',
  'prog symphonique': 'symphonic prog',
  'rock progressif': 'progressive rock',
  'rock psychédélique': 'psychedelic rock',
  'psychédélique': 'psychedelic',
  'musique du monde': 'world music',
  'musique traditionnelle': 'folk',
  'jazz manouche': 'gypsy jazz',
  'musique celtique': 'celtic',
  'musique andine': 'andean',
  'musique africaine': 'african',
  'musique brésilienne': 'brazilian',
  'musique cubaine': 'cuban',
  'hip-hop français': 'french hip hop',
  'rap français': 'french rap',
};

function normalizeTag(tag: string): string {
  const lower = tag.trim().toLowerCase();
  if (TAG_MAP[lower]) return TAG_MAP[lower];
  // retirer les accents (Last.fm matche mieux sans)
  return lower.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// ── Stats d'un artiste (avec cache 7 jours) ──────────────
async function getArtistInfo(artistName: string): Promise<{ listeners: number; playcount: number }> {
  const cacheKey = `artist:${artistName.toLowerCase()}`;
  const cached = cacheGet<{ listeners: number; playcount: number }>(cacheKey, CACHE_TTL_ARTIST);
  if (cached) return cached;

  try {
    const response = await fetch(
      `${BASE_URL}?method=artist.getinfo&artist=${encodeURIComponent(artistName)}&api_key=${API_KEY}&format=json`
    );
    const data = await response.json();
    const stats = {
      listeners: parseInt(data.artist?.stats?.listeners || '0', 10),
      playcount: parseInt(data.artist?.stats?.playcount || '0', 10),
    };
    cacheSet(cacheKey, stats);
    return stats;
  } catch {
    return { listeners: 0, playcount: 0 };
  }
}

// ── Enrichir une liste d'artistes avec leurs stats ───────
async function enrichArtists(rawArtists: any[]): Promise<LastFmArtist[]> {
  const toEnrich = rawArtists.slice(0, MAX_ENRICHED);
  const enriched: LastFmArtist[] = [];

  for (let i = 0; i < toEnrich.length; i += BATCH_SIZE) {
    const batch = toEnrich.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(
      batch.map(async (artist: any) => {
        const stats = await getArtistInfo(artist.name);
        return { ...artist, listeners: stats.listeners, playcount: stats.playcount };
      })
    );
    enriched.push(...results);
    if (i + BATCH_SIZE < toEnrich.length) await sleep(BATCH_DELAY);
  }

  return enriched;
}

// ── Top artistes par tag (avec cache 24h + fallback de tag) ──
export async function getTopArtistsByTag(
  tag: string,
  limit: number = 50
): Promise<LastFmArtist[]> {
  if (!API_KEY) return [];

  const normalized = normalizeTag(tag);
  const cacheKey = `tag:${normalized}`;
  const cached = cacheGet<LastFmArtist[]>(cacheKey, CACHE_TTL_TAG);
  if (cached) return cached;

  const fetchTag = async (t: string): Promise<any[]> => {
    try {
      const response = await fetch(
        `${BASE_URL}?method=tag.gettopartists&tag=${encodeURIComponent(t)}&api_key=${API_KEY}&format=json&limit=${Math.min(limit, MAX_ENRICHED)}`
      );
      const data = await response.json();
      return data.topartists?.artist || [];
    } catch {
      return [];
    }
  };

  // essai avec le tag normalisé, puis avec le tag original si vide
  let artists = await fetchTag(normalized);
  if (artists.length < 3 && normalized !== tag.toLowerCase()) {
    artists = await fetchTag(tag);
  }
  if (artists.length === 0) {
    cacheSet(cacheKey, []); // mémoriser aussi les échecs (évite de re-taper l'API)
    return [];
  }

  const enriched = await enrichArtists(artists);
  cacheSet(cacheKey, enriched);
  return enriched;
}

// ── Artistes similaires (avec cache 24h) ─────────────────
export async function getSimilarArtists(
  artistName: string,
  limit: number = 30
): Promise<LastFmArtist[]> {
  if (!API_KEY) return [];

  const cacheKey = `similar:${artistName.toLowerCase()}`;
  const cached = cacheGet<LastFmArtist[]>(cacheKey, CACHE_TTL_TAG);
  if (cached) return cached;

  try {
    const response = await fetch(
      `${BASE_URL}?method=artist.getsimilar&artist=${encodeURIComponent(artistName)}&api_key=${API_KEY}&format=json&limit=${Math.min(limit, MAX_ENRICHED)}`
    );
    const data = await response.json();
    const artists = data.similarartists?.artist || [];
    const enriched = await enrichArtists(artists);
    cacheSet(cacheKey, enriched);
    return enriched;
  } catch {
    return [];
  }
}

// ── Filtre "émergents" (logique inchangée, sans les logs) ──
export function filterEmerging(artists: LastFmArtist[], tag?: string): LastFmArtist[] {
  const popularGenres = ['rock', 'pop', 'jazz', 'electronic', 'hip hop', 'metal', 'indie', 'alternative'];
  const isPopularGenre = tag ? popularGenres.some((g) => tag.toLowerCase().includes(g)) : false;

  const minListeners = 5000;
  const maxListeners = isPopularGenre ? 150000 : 80000;
  const maxPlaycount = isPopularGenre ? 2000000 : 1000000;

  const filtered = artists.filter(
    (a) => a.listeners >= minListeners && a.listeners < maxListeners && a.playcount < maxPlaycount
  );

  if (filtered.length === 0) {
    return artists
      .filter((a) => a.listeners >= minListeners / 2 && a.listeners < maxListeners * 3)
      .slice(0, 15);
  }

  return filtered.slice(0, 20);
}
