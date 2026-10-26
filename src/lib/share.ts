// src/lib/share.ts
// Liens partageables vers un genre, un pays ou une année.
//
// - Genre : on partage la page statique /genre/<slug>/ (générée au build),
//   parce qu'elle a son propre titre et sa description pour les aperçus
//   Reddit / WhatsApp / Google. Cette page renvoie vers /?g=<slug>.
// - Pays : /?c=<slug>   - Année : /?y=<année>
//
// À l'ouverture, readDeepLink() lit ces paramètres pour afficher la fiche.

import type { Item } from "../itemTypes";

export type Pool = "genres" | "countries" | "years";

// Même règle que scripts/genre-slugs.mjs (utilisé pour les pages de genre).
export const slugify = (s: string): string =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const SITE = "https://musicterra.xyz";

function siteOrigin(): string {
  if (typeof window === "undefined") return SITE;
  const { origin } = window.location;
  return origin.startsWith("http") ? origin : SITE;
}

function genreSlug(item: Item): string | null {
  const s = (item as { descSlug?: string | null }).descSlug;
  return s || slugify(item.name) || null;
}

/** Paramètre d'URL à mettre dans la barre d'adresse pour cet élément. */
export function deepLinkParam(item: Item, pool: Pool): [string, string] | null {
  if (pool === "genres") {
    const slug = genreSlug(item);
    return slug ? ["g", slug] : null;
  }
  if (pool === "countries") {
    const slug = slugify(item.name);
    return slug ? ["c", slug] : null;
  }
  return ["y", item.name];
}

/** URL à partager (page statique pour un genre, lien profond sinon). */
export function shareUrl(item: Item, pool: Pool): string {
  const origin = siteOrigin();
  if (pool === "genres") {
    const slug = genreSlug(item);
    if (slug) return `${origin}/genre/${slug}/`;
  }
  const param = deepLinkParam(item, pool);
  return param ? `${origin}/?${param[0]}=${encodeURIComponent(param[1])}` : origin;
}

/** Lit ?g= / ?c= / ?y= dans l'URL actuelle. */
export function readDeepLink(): { pool: Pool; key: string } | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const g = params.get("g");
  if (g) return { pool: "genres", key: g };
  const c = params.get("c");
  if (c) return { pool: "countries", key: c };
  const y = params.get("y");
  if (y) return { pool: "years", key: y };
  return null;
}

/** Retrouve l'élément correspondant à un lien profond. */
export function findByDeepLink(items: Item[], pool: Pool, key: string): Item | null {
  if (pool === "genres") {
    return (
      items.find((i) => (i as { descSlug?: string | null }).descSlug === key) ||
      items.find((i) => slugify(i.name) === key) ||
      null
    );
  }
  if (pool === "countries") return items.find((i) => slugify(i.name) === key) || null;
  return items.find((i) => i.name === key) || null;
}

/** Met à jour la barre d'adresse sans recharger ni ajouter d'entrée d'historique. */
export function syncUrl(item: Item | null, pool: Pool): void {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  url.searchParams.delete("g");
  url.searchParams.delete("c");
  url.searchParams.delete("y");
  if (item) {
    const param = deepLinkParam(item, pool);
    if (param) url.searchParams.set(param[0], param[1]);
  }
  const next = url.pathname + url.search + url.hash;
  const current = window.location.pathname + window.location.search + window.location.hash;
  if (next !== current) window.history.replaceState(window.history.state, "", next);
}
