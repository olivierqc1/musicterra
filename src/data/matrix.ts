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
 * SEED en un seul sens (on laisse la fonction rendre tout bidirectionnel).
 * Règles :
 * - liens pays → genres typiques
 * - liens genres → genres proches
 * - quelques liens pays ↔ pays régionaux utiles
 */
const seed: SimMatrix = {
  // Base (déjà présents dans ton projet)
  Rock:   { Metal: 0.7, Jazz: 0.2 },
  Reggae: { Brazil: 0.4 },
  Jazz:   { Rock: 0.2, France: 0.3 },
  France: {},
  Brazil: { Reggae: 0.4 },
  Spain:  { France: 0.2 },

  // Afrique de l'Est — pays
  Tanzania: { "Bongo Flava": 0.9, Taarab: 0.7, Kenya: 0.5, Uganda: 0.35, Rwanda: 0.3 },
  Kenya:    { Genge: 0.85, Benga: 0.75, Uganda: 0.4, Tanzania: 0.5, Rwanda: 0.3 },
  Uganda:   { "Kadongo Kamu": 0.85, Kenya: 0.4, Tanzania: 0.35, Rwanda: 0.45 },
  Rwanda:   { "Rwandan Afrobeat": 0.8, Uganda: 0.45, Tanzania: 0.3, Kenya: 0.3 },

  // Afrique de l'Est — genres
  "Bongo Flava":       { Genge: 0.5, "Rwandan Afrobeat": 0.45, Reggae: 0.25 },
  Taarab:              { },
  Genge:               { Benga: 0.4, "Bongo Flava": 0.5 },
  Benga:               { Genge: 0.4, Jazz: 0.15 },
  "Kadongo Kamu":      { Benga: 0.3 },
  "Rwandan Afrobeat":  { "Bongo Flava": 0.45 },

  // United States (pays)
  "United States": { Rock: 0.6, Jazz: 0.6 /* Actives de base */ },

  // === (Optionnel) Active ces 3 lignes SI tu as ajouté ces genres dans data/genres.ts ===
  // "United States": { Rock: 0.6, Jazz: 0.6, "Hip-Hop": 0.9, Country: 0.9, Blues: 0.7 },
  // "Hip-Hop": { "United States": 0.9 },
  // "Country": { "United States": 0.9 },
  // "Blues":   { "United States": 0.7, Jazz: 0.5, Rock: 0.4 },
};

export const similarityMatrix: SimMatrix = makeBidirectional(seed);

/**
 * Boosts "villes → styles" appliqués quand on NOTE un PAYS (aucun message affiché).
 * On reste minimaliste pour éviter d’introduire des genres non existants.
 * NB: si tu as ajouté Hip-Hop / Country / Blues, dé-commente les lignes marquées.
 */
export const cityStyleBoosts: { [country: string]: { [genre: string]: number } } = {
  // USA : scènes typiques (NY/LA/Nashville/NOLA/Detroit)
  "United States": {
    Rock: 0.3,
    Jazz: 0.4,
    // "Hip-Hop": 0.5,  // ⬅️ dé-commente si Hip-Hop existe dans data/genres.ts
    // Country: 0.6,    // ⬅️ idem
    // Blues: 0.4       // ⬅️ idem
  },

  // Afrique de l'Est — agrégés des villes typiques
  Tanzania: { "Bongo Flava": 0.6, Taarab: 0.5 },
  Kenya:    { Genge: 0.6, Benga: 0.5 },
  Uganda:   { "Kadongo Kamu": 0.6, Reggae: 0.2 },
  Rwanda:   { "Rwandan Afrobeat": 0.6 },

  // Exemple Europe déjà présent dans seed (léger boost France↔Jazz)
  France:   { Jazz: 0.3 },
  Brazil:   { Reggae: 0.3 }, // scène reggae locale notable
  Spain:    {}               // tu peux y mettre Flamenco si tu ajoutes ce genre plus tard
};


