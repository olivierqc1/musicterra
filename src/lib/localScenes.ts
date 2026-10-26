// src/lib/localScenes.ts
// Rassemble les « scènes locales » d'un pays (régions et villes) à partir des
// trois sources de countries.ts : `cities` (styles, artistes, playlist),
// `cityStyles` (une note FR/EN par ville) et `regions` (simples noms).
// Une même ville peut apparaître dans plusieurs sources : on fusionne.

import type { City, CityStyle } from "../types";

export interface LocalScene {
  name: string;
  noteFr?: string;
  noteEn?: string;
  styles?: string[];
  artists?: string[];
  spotify?: string;
}

interface CountryLike {
  regions?: string[];
  cities?: City[];
  cityStyles?: CityStyle[];
}

// « La Ceiba (côte Garifuna) » et « La Ceiba » désignent la même ville
function key(name: string): string {
  return name
    .split("(")[0]
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

export function getLocalScenes(country: CountryLike): LocalScene[] {
  const byKey = new Map<string, LocalScene>();
  const order: string[] = [];

  const upsert = (name: string, extra: Partial<LocalScene>) => {
    const k = key(name);
    if (!k) return;
    const existing = byKey.get(k);
    if (existing) {
      for (const [field, value] of Object.entries(extra)) {
        const f = field as keyof LocalScene;
        if (value && !existing[f]) (existing as unknown as Record<string, unknown>)[f] = value;
      }
      return;
    }
    byKey.set(k, { name: name.trim(), ...extra });
    order.push(k);
  };

  for (const r of country.regions || []) upsert(r, {});
  for (const c of country.cities || []) {
    upsert(c.name, { styles: c.styles, artists: c.artists, spotify: c.spotify });
  }
  for (const cs of country.cityStyles || []) {
    upsert(cs.city, { noteFr: cs.noteFr, noteEn: cs.noteEn });
  }

  return order.map((k) => byKey.get(k)!);
}
