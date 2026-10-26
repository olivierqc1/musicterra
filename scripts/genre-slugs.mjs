// scripts/genre-slugs.mjs
// Slugs des genres, partagés entre le plugin Vite (genres-split) et
// generate-genre-pages.mjs pour que les deux produisent les mêmes URL.

export const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Renvoie un slug unique par genre (même ordre que le tableau).
// Deux noms différents qui donnent le même slug reçoivent -2, -3…
// Un nom qui ne donne aucun slug (que des symboles) reçoit null.
export function assignSlugs(genres) {
  const seen = new Set();
  return genres.map((g) => {
    const base = slugify(g.name || "");
    if (!base) return null;
    let slug = base;
    let n = 2;
    while (seen.has(slug)) slug = `${base}-${n++}`;
    seen.add(slug);
    return slug;
  });
}
