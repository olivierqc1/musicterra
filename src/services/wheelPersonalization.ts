// src/services/wheelPersonalization.ts
// Construit un pool de genres personnalisé pour la roue, basé sur les
// genres que l'utilisateur a le mieux notés (localStorage, aucune requête
// réseau) ET sur la matrice de similarité déjà utilisée par ResultCard
// pour afficher les "Affinités" (src/data/matrix.ts). Utilisé par le
// bouton "Propose-moi un truc" dans App.tsx.

import type { Item } from "../itemTypes";
import { matrix } from "../data/matrix";

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

// Récupère la ligne de la matrice pour un genre (tolère une casse
// différente entre le nom noté et la clé de la matrice).
function getSimilarGenres(genreName: string): [string, number][] {
  if (matrix[genreName]) return Object.entries(matrix[genreName]);
  const foundKey = Object.keys(matrix).find(
    (k) => k.toLowerCase() === genreName.toLowerCase()
  );
  return foundKey ? Object.entries(matrix[foundKey]) : [];
}

/**
 * Construit un pool de genres pondéré vers les goûts de l'utilisateur :
 * - Les genres proches (via la matrice de similarité, la même que celle
 *   des "Affinités" affichées après un spin) reçoivent un bonus
 *   proportionnel au score de similarité.
 * - Le bonus est exponentiel selon la note : un 10/10 pèse BEAUCOUP plus
 *   qu'un 6-7/10 "juste correct", pour que la roue se concentre sur tes
 *   vrais coups de cœur plutôt que sur tout ce qui a une note passable.
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

    // rating 6 -> x1, 7 -> x2, 8 -> x4, 9 -> x8, 10 -> x16
    const intensity = Math.pow(2, rated.rating - MIN_RATING);

    weights.set(parent.name, (weights.get(parent.name) || 1) + intensity);

    for (const [simName, score] of getSimilarGenres(parent.name)) {
      const simItem = byNameLower.get(simName.toLowerCase());
      const key = simItem ? simItem.name : simName;
      if (!weights.has(key)) continue; // ignore les tags qui ne sont pas sur la roue
      weights.set(key, (weights.get(key) || 1) + intensity * score * 6);
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
