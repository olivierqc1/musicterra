// src/services/ratedItems.ts
// Liste des items déjà notés sur cet appareil, pour que la roue ne
// retombe jamais dessus. Lit le localStorage (format des clés :
// rating_{userId}_{type}_{name}) — aucune requête réseau.

const PREFIX = "rating_";
export const RATINGS_CHANGED_EVENT = "mt-ratings-changed";

// À appeler après chaque écriture de note pour rafraîchir la roue.
export function notifyRatingsChanged() {
  try {
    window.dispatchEvent(new Event(RATINGS_CHANGED_EVENT));
  } catch {
    /* hors navigateur */
  }
}

// Noms (en minuscules) des items notés pour les types donnés.
// Toute note > 0 compte, peu importe l'utilisateur stocké sur l'appareil.
export function getRatedNames(itemTypes: string[]): Set<string> {
  const out = new Set<string>();
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(PREFIX)) continue;
      const parts = key.split("_");
      if (parts.length < 4 || !itemTypes.includes(parts[2])) continue;
      const rating = parseInt(localStorage.getItem(key) || "0", 10);
      if (rating > 0) out.add(parts.slice(3).join("_").toLowerCase());
    }
  } catch {
    /* localStorage indisponible */
  }
  return out;
}

// Types de notes à vérifier selon le pool de la roue.
export function ratingTypesForPool(pool: string): string[] {
  if (pool === "genres") return ["genre"];
  if (pool === "countries") return ["country"];
  return ["year"];
}

// Retire les items déjà notés. Si tout a été noté, on garde le pool
// complet plutôt qu'une roue vide.
export function excludeRated<T extends { name: string }>(items: T[], pool: string): T[] {
  const rated = getRatedNames(ratingTypesForPool(pool));
  if (rated.size === 0) return items;
  const left = items.filter((i) => !rated.has(i.name.toLowerCase()));
  return left.length > 0 ? left : items;
}
