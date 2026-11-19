// src/lib/affinity.ts
// Recommandations pour les fiches « pays » et « année », et poids de la roue
// « Propose-moi un truc » pour ces deux catégories.
//
// La matrice de similarité (matrix.ts) ne contient que des genres : elle ne
// peut rien dire d'un pays ou d'une année. On passe donc par les genres :
// - pays : les genres qui y sont nés ou très présents (origin,
//   relatedCountries, et lieux dans le nom du genre) ;
// - année : les genres liés à la décennie (src/data/decadeGenres.ts).
// Tout est calculé à la demande, sans réseau.

import { genres } from "../data/genresLite";
import { countries } from "../data/countries";
import { matrix } from "../data/matrix";
import { DECADE_GENRES } from "../data/decadeGenres";
import { placesOf } from "./tasteProfile";

// Noms de pays écrits autrement dans genres.ts et countries.ts
const COUNTRY_ALIAS: Record<string, string> = {
  "Czech Republic": "Czechia",
  "Trinidad and Tobago": "Trinidad & Tobago",
};
const canon = (c: string) => COUNTRY_ALIAS[c] ?? c;

const WEIGHT_ORIGIN = 3;
const WEIGHT_RELATED = 2;
const WEIGHT_NAME = 2.5;

let countryIndex: Map<string, Map<string, number>> | null = null; // pays -> (genre -> poids de relation)
let genresOfCountry: Map<string, Map<string, number>> | null = null;
let popularity: Map<string, number> | null = null;
let genreByLower: Map<string, string> | null = null;

function genreName(lower: string): string | undefined {
  if (!genreByLower) genreByLower = new Map(genres.map((g) => [g.name.toLowerCase(), g.name]));
  return genreByLower.get(lower);
}

// Popularité d'un genre : somme des poids qu'il reçoit dans la matrice.
function popularityOf(name: string): number {
  if (!popularity) {
    popularity = new Map();
    for (const row of Object.values(matrix)) {
      for (const [k, v] of Object.entries(row)) {
        const key = k.toLowerCase();
        popularity.set(key, (popularity.get(key) || 0) + (v as number));
      }
    }
  }
  return Math.log(1 + (popularity.get(name.toLowerCase()) || 0));
}

// Pour chaque genre : les pays qui lui sont liés et le poids du lien.
function buildIndexes() {
  if (countryIndex && genresOfCountry) return;
  countryIndex = new Map(); // genre -> (pays -> poids)
  genresOfCountry = new Map(); // pays -> (genre -> poids)
  const bump = (genre: string, country: string, w: number) => {
    const c = canon(country);
    const byCountry = countryIndex!.get(genre) ?? new Map<string, number>();
    byCountry.set(c, Math.max(byCountry.get(c) || 0, w));
    countryIndex!.set(genre, byCountry);
    const byGenre = genresOfCountry!.get(c) ?? new Map<string, number>();
    byGenre.set(genre, Math.max(byGenre.get(genre) || 0, w));
    genresOfCountry!.set(c, byGenre);
  };
  for (const g of genres) {
    if (g.origin && g.origin !== "International") bump(g.name, g.origin, WEIGHT_ORIGIN);
    for (const c of g.relatedCountries || []) if (c !== "Multiple") bump(g.name, c, WEIGHT_RELATED);
    for (const c of placesOf(g.name)) bump(g.name, c, WEIGHT_NAME);
  }
}

/** Pays liés à un genre, avec le poids du lien (3 = pays d'origine). */
export function countriesOfGenre(name: string): [string, number][] {
  buildIndexes();
  return [...(countryIndex!.get(name) ?? [])];
}

// Les grands genres (Samba, Flamenco, Jazz…) ont un nom avec majuscule dans
// genres.ts ; les scènes locales (« rap catarinense ») sont en minuscules.
// La matrice ne suffit pas à les distinguer : certaines petites scènes y
// reçoivent beaucoup de poids parce que des dizaines de genres les ont pour voisin.
const isCore = (name: string) => name[0] !== name[0].toLowerCase();

/** Genres nés dans un pays ou très présents dedans : les grands genres
 *  d'abord, puis les scènes locales les plus connues. */
export function genresForCountry(country: string, limit = 8): string[] {
  buildIndexes();
  const rows = genresOfCountry!.get(canon(country));
  if (!rows) return [];
  return [...rows.entries()]
    .map(([name, w]) => ({ name, score: (isCore(name) ? 4 : 0) + 0.35 * w + 0.6 * popularityOf(name) }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, limit)
    .map((x) => x.name);
}

/** Pays qui partagent le plus de genres avec celui-ci (similarité cosinus). */
export function similarCountries(country: string, limit = 6): string[] {
  buildIndexes();
  const me = genresOfCountry!.get(canon(country));
  if (!me || me.size < 5) return [];
  const known = new Set(countries.map((c) => c.name));
  const out: { name: string; score: number }[] = [];
  for (const [other, set] of genresOfCountry!) {
    if (other === canon(country) || !known.has(other) || set.size < 5) continue;
    let shared = 0;
    for (const g of me.keys()) if (set.has(g)) shared++;
    if (shared < 3) continue;
    out.push({ name: other, score: shared / Math.sqrt(me.size * set.size) });
  }
  return out
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, limit)
    .map((x) => x.name);
}

/** Époque d'une année : la décennie depuis 1890, le siècle avant. */
export const eraOf = (year: number) => (year >= 1890 ? Math.floor(year / 10) * 10 : Math.floor(year / 100) * 100);

/** Genres liés à l'époque d'une année (décennie, ou siècle avant 1890). */
export function genresForYear(year: number, limit = 8): string[] {
  const names = DECADE_GENRES[eraOf(year)] || [];
  const out: string[] = [];
  for (const n of names) {
    const real = genreName(n);
    if (real && !out.includes(real)) out.push(real);
  }
  return out.slice(0, limit);
}

let decadesByGenre: Map<string, number[]> | null = null;
/** Époques (décennies ou siècles) auxquelles un genre est lié. */
export function decadesOfGenre(name: string): number[] {
  if (!decadesByGenre) {
    decadesByGenre = new Map();
    for (const [dec, list] of Object.entries(DECADE_GENRES)) {
      for (const n of list) {
        const key = n.toLowerCase();
        decadesByGenre.set(key, [...(decadesByGenre.get(key) || []), Number(dec)]);
      }
    }
  }
  return decadesByGenre.get(name.toLowerCase()) ?? [];
}
