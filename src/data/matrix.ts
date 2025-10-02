// src/data/matrix.ts
// ---- Similarity matrix (bidirectional) + silent city-style boosts ----

type SimMatrix = { [item: string]: { [related: string]: number } };

function makeBidirectional(seed: SimMatrix): SimMatrix {
  const out: SimMatrix = {};
  for (const a of Object.keys(seed)) {
    if (!out[a]) out[a] = {};
    for (const [b, w] of Object.entries(seed[a])) {
      out[a][b] = w;
      if (!out[b]) out[b] = {};
      out[b][a] = Math.max(out[b][a] ?? 0, w);
    }
  }
  return out;
}

/**
 * SEED en un seul sens (la fonction ci-dessus rend tout bidirectionnel).
 * Règles :
 * - liens pays → genres typiques
 * - liens genres → genres proches / pays associés
 * - liens pays ↔ pays régionaux utiles
 */
const seed: SimMatrix = {
  // === Base (déjà présents) ===
  Rock:   { Metal: 0.7, Jazz: 0.2 },
  Reggae: { Brazil: 0.4 },
  Jazz:   { Rock: 0.2, France: 0.3 },
  France: {},
  Brazil: { Reggae: 0.4 },

  // ----- BOOST Espagne (renforcé) -----
  // On augmente l’affinité France↔Spain et on relie Spain ↔ Guatemala / FusionLatino
  Spain:  { France: 0.5, Guatemala: 0.3, FusionLatino: 0.4 },
  // Si tu ajoutes le genre "Flamenco" dans data/genres.ts, tu peux aussi relier :
  // Spain:  { France: 0.5, Guatemala: 0.3, FusionLatino: 0.4, Flamenco: 0.9 },
  // Flamenco: { Spain: 0.9 },

  // ----- Afrique de l'Est — pays -----
  Tanzania: { "Bongo Flava": 0.9, Taarab: 0.7, Kenya: 0.5, Uganda: 0.35, Rwanda: 0.3 },
  Kenya:    { Genge: 0.85, Benga: 0.75, Uganda: 0.4, Tanzania: 0.5, Rwanda: 0.3 },
  Uganda:   { "Kadongo Kamu": 0.85, Kenya: 0.4, Tanzania: 0.35, Rwanda: 0.45 },
  Rwanda:   { "Rwandan Afrobeat": 0.8, Uganda: 0.45, Tanzania: 0.3, Kenya: 0.3 },

  // ----- Afrique de l'Est — genres -----
  "Bongo Flava":       { Genge: 0.5, "Rwandan Afrobeat": 0.45, Reggae: 0.25 },
  Taarab:              { },
  Genge:               { Benga: 0.4, "Bongo Flava": 0.5 },
  Benga:               { Genge: 0.4, Jazz: 0.15 },
  "Kadongo Kamu":      { Benga: 0.3 },
  "Rwandan Afrobeat":  { "Bongo Flava": 0.45 },

  // ----- United States -----
  "United States": { Rock: 0.6, Jazz: 0.6 },
  // Si tu ajoutes ces genres dans data/genres.ts, décommente :
  // "United States": { Rock: 0.6, Jazz: 0.6, "Hip-Hop": 0.9, Country: 0.9, Blues: 0.7 },
  // "Hip-Hop": { "United States": 0.9 },
  // Country:   { "United States": 0.9 },
  // Blues:     { "United States": 0.7, Jazz: 0.5, Rock: 0.4 },

  // ======= Guatemala (NOUVEAU) =======
  Guatemala: { Marimba: 0.7, FusionLatino: 0.6, Spain: 0.3 },
  Marimba:   { Guatemala: 0.7 },
  FusionLatino: { Guatemala: 0.6, Spain: 0.4 },
  // --- Honduras & genre Punta ---
Honduras: { Punta: 0.9, Reggae: 0.3, Guatemala: 0.4, "United States": 0.25 },
Punta:    { Honduras: 0.9, Reggae: 0.25 },

  // (Option) petits liens transverses utiles
  // FusionLatino peut aussi se rapprocher de Rock/Pop selon tes données :
  // FusionLatino: { Guatemala: 0.6, Spain: 0.4, Rock: 0.2 }
};

export const similarityMatrix: SimMatrix = makeBidirectional(seed);

/**
 * Boosts "villes → styles" appliqués quand on NOTE un PAYS (aucun message affiché).
 * Minimalistes pour éviter de référencer des genres non présents.
 */
export const cityStyleBoosts: { [country: string]: { [genre: string]: number } } = {
  // USA : scènes typiques (NY/LA/Nashville/NOLA/Detroit)
  "United States": {
    Rock: 0.3,
    Jazz: 0.4,
    // "Hip-Hop": 0.5,  // décommente si présent dans data/genres.ts
    // Country: 0.6,    // idem
    // Blues: 0.4       // idem
  },

  // Afrique de l'Est — agrégés
  Tanzania: { "Bongo Flava": 0.6, Taarab: 0.5 },
  Kenya:    { Genge: 0.6, Benga: 0.5 },
  Uganda:   { "Kadongo Kamu": 0.6, Reggae: 0.2 },
  Rwanda:   { "Rwandan Afrobeat": 0.6 },

  // Europe / Amériques
  France:   { Jazz: 0.3 },
  Brazil:   { Reggae: 0.3 },       // scène reggae notable locale
  Spain:    { FusionLatino: 0.2 }, // petit boost générique (Flamenco si tu l’ajoutes)
  Guatemala:{ Marimba: 0.5, FusionLatino: 0.3 },
};



