// scripts/generate-genre-pages.mjs
// Génère une page HTML statique par genre dans dist/genre/<slug>/index.html
// + un index A-Z dans dist/genres/ + un sitemap.xml complet.
// S'exécute après `vite build` (voir package.json).

import { build } from "esbuild";
import { mkdirSync, writeFileSync, unlinkSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { join } from "node:path";
import { slugify } from "./genre-slugs.mjs";

const SITE = "https://musicterra.xyz";
const DIST = "dist";

// ---------- 1. Charger les données depuis src/data/genres.ts ----------
await build({
  entryPoints: ["src/data/genres.ts"],
  bundle: true,
  format: "esm",
  outfile: ".tmp-genres.mjs",
  external: ["../types"],
});
const { genres } = await import(pathToFileURL(".tmp-genres.mjs").href);
console.log(`Genres chargés: ${genres.length}`);

// ---------- 2. Utilitaires ----------
// slugify est partag\u00e9 avec le plugin Vite genres-split (scripts/genre-slugs.mjs)

const esc = (s = "") =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const paragraphs = (s = "") =>
  s
    .split(/\n\s*\n/)
    .map((p) => `<p>${esc(p.trim())}</p>`)
    .join("\n      ");

// index par origine pour les liens "genres similaires"
const byOrigin = {};
for (const g of genres) {
  const o = g.origin || "Autre";
  (byOrigin[o] ||= []).push(g);
}

const CSS = `
  :root{color-scheme:light}
  *{box-sizing:border-box}
  body{margin:0;font-family:"Bricolage Grotesque",system-ui,-apple-system,sans-serif;background:#F4F6FB;color:#3A4166;line-height:1.65;-webkit-font-smoothing:antialiased}
  .wrap{max-width:720px;margin:0 auto;padding:20px 18px 60px}
  a{color:#2C3FD1}
  header{display:flex;align-items:center;justify-content:space-between;gap:12px}
  header .brand{display:flex;align-items:center;gap:8px;color:#151B3B;text-decoration:none;font-weight:800;font-size:1.3rem;letter-spacing:-.04em}
  header .all{font-size:.95rem}
  h1{font-size:clamp(2.2rem,9vw,3.2rem);line-height:1.02;letter-spacing:-.035em;margin:.8em 0 .25em;color:#151B3B;font-weight:800}
  .meta{display:inline-block;background:#FFF3D6;color:#151B3B;border-radius:999px;padding:4px 12px;font-size:.9rem;font-weight:600;margin-bottom:1em}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}
  .tag{background:#fff;border:1px solid #DFE3EF;border-radius:999px;padding:4px 12px;font-size:.88rem;color:#3A4166}
  .cta{display:inline-block;background:#2C3FD1;color:#fff;text-decoration:none;padding:14px 24px;border-radius:999px;font-weight:700;margin:20px 0 8px;box-shadow:0 3px 0 #151B3B}
  .spotify{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid #DFE3EF;color:#151B3B;text-decoration:none;padding:9px 16px;border-radius:999px;font-weight:600;margin:6px 0}
  .spotify::before{content:"";width:10px;height:10px;border-radius:99px;background:#1db954}
  h2{margin-top:1.8em;color:#151B3B;font-size:1.3rem;letter-spacing:-.02em}
  p{max-width:68ch}
  ul.links{padding-left:1.2em}
  footer{margin-top:48px;border-top:1px solid #DFE3EF;padding-top:18px;font-size:.9rem;color:#5A6183}
  .lang-en{border-left:3px solid #FFB224;padding-left:14px;color:#5A6183}
`;

const layout = ({ title, description, canonical, body }) => `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="MusicTerra">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#F4F6FB">
<meta property="og:image" content="${SITE}/og-image.jpg">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>
<div class="wrap">
<header><a class="brand" href="/"><img src="/favicon.svg" alt="" width="28" height="28">MusicTerra</a><a class="all" href="/genres/">Tous les genres</a></header>
${body}
<footer>MusicTerra : ${genres.length} genres musicaux du monde entier. <a href="/">Tourner la roue</a></footer>
</div>
</body>
</html>`;

// ---------- 3. Pages de genre ----------
mkdirSync(join(DIST, "genre"), { recursive: true });
const urls = [];
const seenSlugs = new Set();

for (const g of genres) {
  let slug = slugify(g.name);
  if (!slug) continue;
  // évite les collisions (noms différents -> même slug)
  let n = 2;
  while (seenSlugs.has(slug)) slug = `${slugify(g.name)}-${n++}`;
  seenSlugs.add(slug);
  const url = `${SITE}/genre/${slug}/`;
  urls.push(url);

  const related = (byOrigin[g.origin || "Autre"] || [])
    .filter((x) => x.name !== g.name)
    .slice(0, 6);

  const shortDesc = (g.descriptionFr || "").split(/\n/)[0].slice(0, 155);

  const jsonld = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MusicGenre",
    name: g.name,
    description: shortDesc,
    url,
  });

  const body = `
<h1>${esc(g.name)}</h1>
<div class="meta">Genre musical${g.origin ? ` · Origine : ${esc(g.origin)}` : ""}</div>
${g.subgenres?.length ? `<div class="tags">${g.subgenres.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>` : ""}
<h2>Histoire et caractéristiques</h2>
${paragraphs(g.descriptionFr)}
${g.artists?.length ? `<h2>Artistes emblématiques</h2><div class="tags">${g.artists.map((a) => `<span class="tag">${esc(a)}</span>`).join("")}</div>` : ""}
${g.spotify ? `<p><a class="spotify" href="${esc(g.spotify)}" rel="noopener" target="_blank">▶ Écouter sur Spotify</a></p>` : ""}
<a class="cta" href="/?g=${slug}">Écouter et noter dans MusicTerra</a>
<p><a href="/">🎡 Ou tourner la roue pour découvrir un autre genre</a></p>
<h2>In English</h2>
<div class="lang-en">${paragraphs(g.descriptionEn)}</div>
${related.length ? `<h2>Genres à explorer ensuite</h2><ul class="links">${related.map((r) => `<li><a href="/genre/${slugify(r.name)}/">${esc(r.name)}</a></li>`).join("")}</ul>` : ""}
<script type="application/ld+json">${jsonld}</script>`;

  const dir = join(DIST, "genre", slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "index.html"),
    layout({
      title: `${g.name} — histoire, artistes et playlist | MusicTerra`,
      description: shortDesc,
      canonical: url,
      body,
    })
  );
}

// ---------- 4. Index A-Z ----------
const groups = {};
for (const g of genres) {
  const slug = slugify(g.name);
  if (!slug) continue;
  const letter = slug[0].toUpperCase();
  (groups[letter] ||= []).push(g);
}
const letters = Object.keys(groups).sort();

const indexBody = `
<h1>Tous les genres musicaux (${genres.length})</h1>
<p>Explorez notre encyclopédie de genres musicaux du monde entier — histoire, artistes emblématiques et playlists pour chaque style.</p>
<p>${letters.map((l) => `<a href="#${l}">${l}</a>`).join(" · ")}</p>
${letters
  .map(
    (l) => `<h2 id="${l}">${l}</h2><ul class="links">${groups[l]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((g) => `<li><a href="/genre/${slugify(g.name)}/">${esc(g.name)}</a></li>`)
      .join("")}</ul>`
  )
  .join("\n")}`;

mkdirSync(join(DIST, "genres"), { recursive: true });
writeFileSync(
  join(DIST, "genres", "index.html"),
  layout({
    title: `Tous les genres musicaux du monde (${genres.length}) | MusicTerra`,
    description: `Encyclopédie de ${genres.length} genres musicaux du monde entier : histoire, artistes emblématiques et playlists Spotify pour chaque style.`,
    canonical: `${SITE}/genres/`,
    body: indexBody,
  })
);
urls.push(`${SITE}/genres/`);

// ---------- 5. Sitemap ----------
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>${SITE}/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>
${urls.map((u) => `<url><loc>${u}</loc><lastmod>${today}</lastmod><priority>0.7</priority></url>`).join("\n")}
</urlset>`;
writeFileSync(join(DIST, "sitemap.xml"), sitemap);

try { unlinkSync(".tmp-genres.mjs"); } catch {}
console.log(`✅ ${urls.length - 1} pages de genre + index + sitemap générés dans ${DIST}/`);
 