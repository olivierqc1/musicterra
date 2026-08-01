// src/services/wheelPersonalization.ts
// Construit un pool de genres personnalisé pour la roue, basé sur les
// genres que l'utilisateur a le mieux notés (localStorage, aucune requête
// réseau). Utilisé par le bouton "Propose-moi un truc" dans App.tsx.

import type { Item } from "../itemTypes";

const RATING_PREFIX = "rating_";
const MIN_RATING = 6; // même seuil que artistsFromTopRatedGenres dans App.tsx
const DEFAULT_POOL_SIZE = 20;

interface RatedGenre {
  name: string;
  rating: number;
}

// Lit les genres notés >= MIN_RATING depuis le localStorage de l'appareil.
function getTopRatedGenreNames(): RatedGenre[] {
  const rated: RatedGenre[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(RATING_PREFIX)) continue;
      const parts = key.split("_");
      if (parts[2] !== "genre") continue;
      const rating = parseInt(localStorage.getItem(key) || "0", 10);
      if (rating >= MIN_RATING) {
        rated.push({ name: parts.slice(3).join("_"), rating });
      }
    }
  } catch {
    /* localStorage indisponible */
  }
  return rated.sort((a, b) => b.rating - a.rating);
}

/**
 * Construit un pool de genres pondéré vers les goûts de l'utilisateur :
 * - Les sous-genres des genres bien notés reçoivent un gros bonus (c'est
 *   la version "plus niche" de ce que tu aimes déjà).
 * - Le genre bien noté lui-même garde un petit bonus.
 * - Tout le reste garde un poids de base pour que la roue surprenne
 *   quand même un peu, même en mode personnalisé.
 *
 * Si l'utilisateur n'a encore rien noté (rating >= 6), on retombe sur le
 * pool complet — comportement identique au mode aléatoire, pas de crash
 * et pas de pool vide pour un nouvel utilisateur.
 */
export function buildPersonalizedGenrePool(
  allGenres: Item[],
  size: number = DEFAULT_POOL_SIZE
): Item[] {
  const topRated = getTopRatedGenreNames();
  if (topRated.length === 0) return allGenres;

  const byNameLower = new Map(allGenres.map((g) => [g.name.toLowerCase(), g]));
  const weights = new Map<string, number>();
  for (const g of allGenres) weights.set(g.name, 1); // poids de base

  for (const rated of topRated) {
    const parent = byNameLower.get(rated.name.toLowerCase());
    if (!parent) continue;

    weights.set(parent.name, (weights.get(parent.name) || 1) + rated.rating * 0.5);

    for (const sub of parent.subgenres || []) {
      const subItem = byNameLower.get(sub.toLowerCase());
      const key = subItem ? subItem.name : sub;
      weights.set(key, (weights.get(key) || 1) + rated.rating * 2);
    }
  }

  // Tirage pondéré sans remise jusqu'à `size` items
  const picked: Item[] = [];
  const pickedNames = new Set<string>();
  const targetSize = Math.min(size, allGenres.length);

  while (picked.length < targetSize) {
    const available = allGenres.filter((g) => !pickedNames.has(g.name));
    if (available.length === 0) break;

    const totalWeight = available.reduce((sum, g) => sum + (weights.get(g.name) || 1), 0);
    let r = Math.random() * totalWeight;
    let chosen = available[available.length - 1];

    for (const g of available) {
      r -= weights.get(g.name) || 1;
      if (r <= 0) {
        chosen = g;
        break;
      }
    }

    picked.push(chosen);
    pickedNames.add(chosen.name);
  }

  return picked;
}
