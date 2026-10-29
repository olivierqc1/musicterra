// scripts/genres-split-plugin.mjs
// Plugin Vite qui sépare src/data/genres.ts en deux :
//   - "virtual:genres-lite" : la liste des genres SANS les descriptions
//     (noms, artistes, sous-genres…), chargée avec l'app ;
//   - un petit fichier JSON par genre, /genre-desc/<slug>.json, qui contient
//     { fr, en, es?, ca?, bpm? } et n'est téléchargé que quand le genre est affiché.
// Les descriptions représentent environ 9,5 Mo sur les 10,4 Mo de genres.ts.
// genres.ts reste la seule source de vérité : rien à générer à la main.

import { build } from "esbuild";
import { mkdtempSync, writeFileSync, rmSync, existsSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { assignSlugs } from "./genre-slugs.mjs";

const LITE_ID = "virtual:genres-lite";
const RESOLVED_LITE_ID = "\0" + LITE_ID;
const DESC_DIR = "genre-desc";

async function loadGenres(root) {
  const entry = resolve(root, "src/data/genres.ts");
  const result = await build({
    entryPoints: [entry],
    bundle: true,
    format: "esm",
    platform: "node",
    write: false,
    logLevel: "silent",
  });
  const dir = mkdtempSync(join(tmpdir(), "genres-split-"));
  const file = join(dir, "genres.mjs");
  writeFileSync(file, result.outputFiles[0].text);
  try {
    const mod = await import(pathToFileURL(file).href + `?t=${Date.now()}`);
    return mod.genres;
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

// Traductions espagnole et catalane des descriptions, par slug de genre :
// src/data/i18n/genres.es.json et genres.ca.json ({ "<slug>": "texte" }).
// Un genre absent de ces fichiers retombe sur l'anglais dans l'app.
function loadTranslations(root, lang) {
  const file = resolve(root, `src/data/i18n/genres.${lang}.json`);
  if (!existsSync(file)) return {};
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch (err) {
    console.warn(`genres-split : ${file} illisible`, err);
    return {};
  }
}

// Tempo habituel par genre (nom → [min, max] en BPM), indicatif.
function loadTempo(root) {
  const file = resolve(root, "src/data/genreTempo.json");
  if (!existsSync(file)) return {};
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch (err) {
    console.warn(`genres-split : ${file} illisible`, err);
    return {};
  }
}

function split(genres, root) {
  const tempo = loadTempo(root);
  const es = loadTranslations(root, "es");
  const ca = loadTranslations(root, "ca");
  const slugs = assignSlugs(genres);
  const lite = [];
  const descs = new Map();
  genres.forEach((g, i) => {
    const { descriptionFr, descriptionEn, ...rest } = g;
    const slug = slugs[i];
    lite.push({ ...rest, descriptionFr: "", descriptionEn: "", descSlug: slug });
    if (slug) {
      const d = { fr: descriptionFr || "", en: descriptionEn || "" };
      if (es[slug]) d.es = es[slug];
      if (ca[slug]) d.ca = ca[slug];
      if (tempo[g.name]) d.bpm = tempo[g.name];
      descs.set(slug, d);
    }
  });
  return { lite, descs };
}

export default function genresSplit() {
  let root = process.cwd();
  let cache = null;

  const getData = async () => {
    if (!cache) cache = split(await loadGenres(root), root);
    return cache;
  };

  return {
    name: "genres-split",

    configResolved(config) {
      root = config.root;
    },

    resolveId(id) {
      if (id === LITE_ID) return RESOLVED_LITE_ID;
      return null;
    },

    async load(id) {
      if (id !== RESOLVED_LITE_ID) return null;
      this.addWatchFile(resolve(root, "src/data/genres.ts"));
      const { lite } = await getData();
      return `export const genres = ${JSON.stringify(lite)};`;
    },

    // En dev : sert /genre-desc/<slug>.json depuis la mémoire.
    configureServer(server) {
      server.watcher.on("change", (file) => {
        if (file.endsWith(join("src", "data", "genres.ts"))) cache = null;
      });
      server.middlewares.use(async (req, res, next) => {
        const match = req.url && req.url.match(/^\/genre-desc\/([a-z0-9-]+)\.json$/);
        if (!match) return next();
        const { descs } = await getData();
        const desc = descs.get(match[1]);
        if (!desc) {
          res.statusCode = 404;
          return res.end();
        }
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(desc));
      });
    },

    // Au build : écrit un fichier JSON par genre dans dist/genre-desc/.
    async generateBundle() {
      const { descs } = await getData();
      for (const [slug, desc] of descs) {
        this.emitFile({
          type: "asset",
          fileName: `${DESC_DIR}/${slug}.json`,
          source: JSON.stringify(desc),
        });
      }
    },
  };
}
