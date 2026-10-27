// src/lib/concertPicks.ts
// Choisit 5 concerts à venir près de l'utilisateur, selon ses goûts :
// - un artiste qu'il connaît déjà (présent dans un genre qu'il a bien noté)
//   passe en premier ;
// - sinon, plus le style du concert pèse dans ses goûts, plus il monte.
// Pas plus de deux concerts du même style, et un seul par artiste.

import { genres } from "../data/genresLite";
import { familiesOf, type TasteProfile } from "./tasteProfile";
import type { NearbyEvent } from "../services/ticketmaster";

// Nombre minimum de genres notés avant de conseiller des concerts
export const MIN_RATED_FOR_CONCERTS = 5;
export const PICKS = 5;

// Familles de goûts → style Ticketmaster à demander
export const FAMILY_TO_TM: Record<string, string> = {
  jazz: "Jazz",
  folk: "Folk",
  metal: "Metal",
  punk: "Punk",
  rock: "Rock",
  indie: "Alternative",
  hiphop: "Hip-Hop/Rap",
  electronic: "Dance/Electronic",
  pop: "Pop",
  classical: "Classical",
  soul: "R&B",
  blues: "Blues",
  reggae: "Reggae",
  latin: "Latin",
  african: "World",
  country: "Country",
};

// Styles Ticketmaster dont le nom ne contient pas le mot de la famille
const TM_EXTRA: Record<string, string[]> = {
  alternative: ["indie", "rock"],
  world: ["folk", "african", "latin"],
  "r&b": ["soul"],
  "hip-hop/rap": ["hiphop"],
  "dance/electronic": ["electronic"],
};

export interface ConcertPick {
  event: NearbyEvent;
  artist: string;
  venue: string;
  city: string;
  date: string;
  time?: string;
  url: string;
  score: number;
  family?: string; // famille de goûts retenue
  because?: { genre: string; rating: number }; // artiste reconnu
}

function eventFamilies(e: NearbyEvent): string[] {
  const out = new Set<string>();
  for (const c of e.classifications || []) {
    for (const n of [c.genre?.name, c.subGenre?.name]) {
      if (!n || /undefined|other/i.test(n)) continue;
      const lower = n.toLowerCase();
      familiesOf(lower).forEach((f) => out.add(f));
      (TM_EXTRA[lower] || []).forEach((f) => out.add(f));
    }
  }
  return [...out];
}

// Artistes des genres bien notés (7/10 et plus) → genre d'origine
function likedArtists(profile: TasteProfile): Map<string, { genre: string; rating: number }> {
  const byName = new Map(genres.map((g) => [g.name.toLowerCase(), g]));
  const out = new Map<string, { genre: string; rating: number }>();
  for (const r of profile.rated) {
    if (r.type !== "genre" || r.rating < 7) continue;
    const g = byName.get(r.name.toLowerCase());
    for (const a of g?.artists || []) {
      const key = a.toLowerCase();
      const prev = out.get(key);
      if (!prev || r.rating > prev.rating) out.set(key, { genre: g!.name, rating: r.rating });
    }
  }
  return out;
}

export function pickConcerts(events: NearbyEvent[], profile: TasteProfile): ConcertPick[] {
  const share = new Map(profile.allFamilies.map((f) => [f.key, f.share]));
  const artists = likedArtists(profile);
  const now = Date.now();

  const scored: ConcertPick[] = [];
  const seen = new Set<string>();
  for (const e of events) {
    if (seen.has(e.id)) continue;
    seen.add(e.id);
    const date = e.dates?.start?.localDate;
    if (!date || new Date(date).getTime() < now - 24 * 3600 * 1000) continue;

    const venue = e._embedded?.venues?.[0];
    const attraction = e._embedded?.attractions?.[0]?.name || e.name;

    let score = 0;
    let family: string | undefined;
    for (const f of eventFamilies(e)) {
      const s = share.get(f) || 0;
      if (s * 10 > score) {
        score = s * 10;
        family = f;
      }
    }
    const known = artists.get(attraction.toLowerCase());
    if (known) score += 8;
    if (score <= 0) continue;

    scored.push({
      event: e,
      artist: attraction,
      venue: venue?.name || "",
      city: venue?.city?.name || "",
      date,
      time: e.dates.start.localTime,
      url: e.url,
      score,
      family,
      because: known,
    });
  }

  // Meilleur score d'abord ; à score égal, le plus proche dans le temps
  scored.sort((a, b) => b.score - a.score || a.date.localeCompare(b.date));

  const picks: ConcertPick[] = [];
  const perFamily = new Map<string, number>();
  const artistsTaken = new Set<string>();
  for (const p of scored) {
    const a = p.artist.toLowerCase();
    if (artistsTaken.has(a)) continue;
    const f = p.family || "";
    if (!p.because && (perFamily.get(f) || 0) >= 2) continue;
    artistsTaken.add(a);
    perFamily.set(f, (perFamily.get(f) || 0) + 1);
    picks.push(p);
    if (picks.length >= PICKS) break;
  }
  // Trop peu de diversité possible : on complète sans la limite par style
  if (picks.length < PICKS) {
    for (const p of scored) {
      if (picks.length >= PICKS) break;
      const a = p.artist.toLowerCase();
      if (artistsTaken.has(a)) continue;
      artistsTaken.add(a);
      picks.push(p);
    }
  }
  return picks.sort((a, b) => a.date.localeCompare(b.date));
}

// Styles Ticketmaster à interroger : ceux des 3 familles qui comptent le plus
export function classificationsToQuery(profile: TasteProfile): string[] {
  const out: string[] = [];
  for (const f of profile.families) {
    const tm = FAMILY_TO_TM[f.key];
    if (tm && !out.includes(tm)) out.push(tm);
    if (out.length >= 3) break;
  }
  return out;
}
