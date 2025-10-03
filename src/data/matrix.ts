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
},
  // --- Costa Rica & genres ---
Costa Rica: { "Calypso Limonense": 0.9, Reggae: 0.3, Nicaragua: 0.35, Panama: 0.35 },
"Calypso Limonense": { Costa Rica: 0.9, Reggae: 0.25, "Punta": 0.25 },

// --- Nicaragua & genres ---
Nicaragua: { "Palo de Mayo": 0.9, Costa Rica: 0.35, Honduras: 0.3, "El Salvador": 0.3, Panama: 0.3 },
"Palo de Mayo": { Nicaragua: 0.9, "Calypso Limonense": 0.25, "Punta": 0.2 },

// --- El Salvador & genres ---
"El Salvador": { Xuc: 0.9, Honduras: 0.35, Nicaragua: 0.3, Guatemala: 0.4 },
Xuc: { "El Salvador": 0.9, Reggae: 0.15 },

// --- Honduras & genres --- (si déjà présent, fusionne/complète)
Honduras: { Punta: 0.9, Reggae: 0.3, Guatemala: 0.4, Nicaragua: 0.3, "El Salvador": 0.3 },
Punta: { Honduras: 0.9, Reggae: 0.25, "Calypso Limonense": 0.25, "Palo de Mayo": 0.2 },

// --- Panama & genres ---
Panama: { Tamborito: 0.85, "Típico panameño": 0.8, "Reggaetón (Panamá)": 0.7, Costa Rica: 0.35, Nicaragua: 0.3 },
Tamborito: { Panama: 0.85, "Típico panameño": 0.5 },
"Típico panameño": { Panama: 0.8, Tamborito: 0.5 },
"Reggaetón (Panamá)": { Panama: 0.7, Reggae: 0.25 },
// Argentina
Argentina: { Tango: 0.95, "Rock Nacional (AR)": 0.7, Uruguay: 0.4, Chile: 0.35 },
Tango: { Argentina: 0.95, "Rock Nacional (AR)": 0.25 },
"Rock Nacional (AR)": { Argentina: 0.7, Tango: 0.25 },

// Chile
Chile: { Cueca: 0.9, "Nueva Canción": 0.7, Argentina: 0.35, Peru: 0.35 },
Cueca: { Chile: 0.9 },
"Nueva Canción": { Chile: 0.7, Argentina: 0.3 },

// Colombia
Colombia: { "Cumbia (CO)": 0.9, Vallenato: 0.85, Champeta: 0.7, Venezuela: 0.35, Peru: 0.3 },
"Cumbia (CO)": { Colombia: 0.9, Vallenato: 0.25, Champeta: 0.2 },
Vallenato: { Colombia: 0.85, "Cumbia (CO)": 0.25 },
Champeta: { Colombia: 0.7, "Cumbia (CO)": 0.2 },

// Peru
Peru: { Huayno: 0.9, "Chicha (PE)": 0.85, Festejo: 0.6, Bolivia: 0.4, Chile: 0.35, Ecuador: 0.3 },
Huayno: { Peru: 0.9, "Chicha (PE)": 0.3 },
"Chicha (PE)": { Peru: 0.85, Huayno: 0.3 },
Festejo: { Peru: 0.6 },

// Bolivia
Bolivia: { Morenada: 0.85, Caporales: 0.75, Peru: 0.4 },
Morenada: { Bolivia: 0.85, Caporales: 0.3 },
Caporales: { Bolivia: 0.75, Morenada: 0.3 },

// Ecuador
Ecuador: { "Pasillo (EC)": 0.85, "Bomba del Chota": 0.7, Colombia: 0.35, Peru: 0.3 },
"Pasillo (EC)": { Ecuador: 0.85 },
"Bomba del Chota": { Ecuador: 0.7 },

// Paraguay
Paraguay: { Guarania: 0.85, "Polka Paraguaya": 0.8, Argentina: 0.35 },
Guarania: { Paraguay: 0.85, "Polka Paraguaya": 0.3 },
"Polka Paraguaya": { Paraguay: 0.8, Guarania: 0.3 },

// Uruguay
Uruguay: { "Candombe (UY)": 0.9, "Murga (UY)": 0.75, Argentina: 0.4 },
"Candombe (UY)": { Uruguay: 0.9, "Murga (UY)": 0.25, Tango: 0.25 },
"Murga (UY)": { Uruguay: 0.75, "Candombe (UY)": 0.25 },

// Venezuela
Venezuela: { Joropo: 0.9, "Gaita Zuliana": 0.75, Colombia: 0.35 },
Joropo: { Venezuela: 0.9 },
"Gaita Zuliana": { Venezuela: 0.75 },

// Guyana
Guyana: { "Chutney (GY)": 0.85, Suriname: 0.35, Venezuela: 0.3 },
"Chutney (GY)": { Guyana: 0.85 },

// Suriname
Suriname: { Kaseko: 0.9, Guyana: 0.35, "French Guiana": 0.3 },
Kaseko: { Suriname: 0.9 },

// French Guiana
"French Guiana": { Kasékò: 0.85, Suriname: 0.3 },
Kasékò: { "French Guiana": 0.85 },

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



