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
// src/data/matrix.ts
// ---- Similarity matrix (bidirectional) + optional city→style boosts ----
// Règles :
// - La matrice relie pays ↔ genres et genres ↔ genres proches (0..1)
// - On ne duplique pas : on sème à sens unique, puis on rend tout bidirectionnel
// - Ajouts Caraïbes + conservations des liens de base que tu avais déjà

type SimMatrix = { [item: string]: { [related: string]: number } };

function makeBidirectional(seed: SimMatrix): SimMatrix {
  const out: SimMatrix = {};
  for (const a of Object.keys(seed)) {
    if (!out[a]) out[a] = {};
    for (const [b, w] of Object.entries(seed[a])) {
      out[a][b] = Math.max(out[a][b] ?? 0, w);
      if (!out[b]) out[b] = {};
      out[b][a] = Math.max(out[b][a] ?? 0, w);
    }
  }
  return out;
}

/**
 * SEED unidirectionnel — la fonction makeBidirectional() rend tout symétrique.
 * Valeurs guides :
 *  - 0.9–1.0 : association quasi-« signature »
 *  - 0.7–0.8 : association forte / très fréquente
 *  - 0.4–0.6 : association moyenne (proximité régionale / stylistique)
 *  - 0.2–0.3 : association faible (influence, passerelle)
 */
const seed: SimMatrix = {
  // ======== Liens de base (déjà présents dans ton projet) ========
  Rock:   { Metal: 0.7, Jazz: 0.2 },
  Metal:  { Rock: 0.7 },
  Reggae: { Brazil: 0.4 }, // existant (scène locale au Brésil)
  Jazz:   { Rock: 0.2, France: 0.3 },
  France: {},
  Brazil: { Reggae: 0.4 },
  Spain:  { France: 0.2 },

  // (optionnel) USA minimal
  "United States": { Rock: 0.6, Jazz: 0.6 },

  // (optionnel) Afrique de l'Est (si tu les as déjà en data)
  Tanzania: { "Bongo Flava": 0.9, Taarab: 0.7, Kenya: 0.5, Uganda: 0.35, Rwanda: 0.3 },
  Kenya:    { Genge: 0.85, Benga: 0.75, Uganda: 0.4, Tanzania: 0.5, Rwanda: 0.3 },
  Uganda:   { "Kadongo Kamu": 0.85, Kenya: 0.4, Tanzania: 0.35, Rwanda: 0.45 },
  Rwanda:   { "Rwandan Afrobeat": 0.8, Uganda: 0.45, Tanzania: 0.3, Kenya: 0.3 },
  "Bongo Flava":       { Genge: 0.5, "Rwandan Afrobeat": 0.45, Reggae: 0.25 },
  Taarab:              { },
  Genge:               { Benga: 0.4, "Bongo Flava": 0.5 },
  Benga:               { Genge: 0.4, Jazz: 0.15 },
  "Kadongo Kamu":      { Benga: 0.3 },
  "Rwandan Afrobeat":  { "Bongo Flava": 0.45 },

  // ======== CARAÏBES — PAYS ↔ GENRES SIGNATURE ========

  // Jamaïque
  Jamaica: {
    "Reggae (Jamaica)": 1.0,
    "Dancehall (Jamaica)": 0.9,
    "Ska (Jamaica)": 0.7,
    "Rocksteady (Jamaica)": 0.7,
    "Mento (Jamaica)": 0.5
  },
  "Reggae (Jamaica)": { Reggae: 0.8 }, // pont vers ton genre "Reggae" global
  "Dancehall (Jamaica)": { "Reggaetón (PR)": 0.35, "Dembow (DR)": 0.35 }, // influence rythmique
  "Ska (Jamaica)": { "Rocksteady (Jamaica)": 0.5 },
  "Rocksteady (Jamaica)": { Reggae: 0.4 },

  // Trinité-et-Tobago
  "Trinidad & Tobago": {
    "Calypso (TT)": 0.9,
    "Soca (TT)": 1.0,
    "Steelpan (TT)": 0.8,
    Barbados: 0.35, // proximité soca
    "Grenada": 0.3
  },
  "Calypso (TT)": { "Soca (TT)": 0.6 },
  "Soca (TT)": { "Bashment Soca (Barbados)": 0.5, "Dennery Segment (Saint Lucia)": 0.4, "Jab Jab Soca (Grenada)": 0.4 },

  // Barbade
  Barbados: {
    "Bashment Soca (Barbados)": 0.9,
    "Spouge (Barbados)": 0.8,
    "Trinidad & Tobago": 0.35
  },

  // Bahamas
  Bahamas: {
    "Junkanoo (Bahamas)": 0.9,
    "Rake-n-Scrape (Bahamas)": 0.8
  },

  // Cuba
  Cuba: {
    "Son Cubano (Cuba)": 0.9,
    "Rumba (Cuba)": 0.8,
    "Timba (Cuba)": 0.85,
    "Salsa (Cuba/PR)": 0.8,
    "Dominican Republic": 0.4,
    "Puerto Rico": 0.4
  },
  "Son Cubano (Cuba)": { "Salsa (Cuba/PR)": 0.6 },
  "Rumba (Cuba)": { "Salsa (Cuba/PR)": 0.3 },
  "Timba (Cuba)": { "Salsa (Cuba/PR)": 0.4 },

  // République dominicaine
  "Dominican Republic": {
    "Merengue (DR)": 0.95,
    "Bachata (DR)": 0.95,
    "Dembow (DR)": 0.8,
    Haiti: 0.3,
    Cuba: 0.4,
    "Puerto Rico": 0.35
  },
  "Merengue (DR)": { "Salsa (Cuba/PR)": 0.3 },
  "Bachata (DR)": { "Bolero" : 0.25 }, // si tu ajoutes un jour Bolero en genre global
  "Dembow (DR)": { "Reggaetón (PR)": 0.6, "Dancehall (Jamaica)": 0.35 },

  // Porto Rico
  "Puerto Rico": {
    "Reggaetón (PR)": 0.95,
    "Bomba/Plena (PR)": 0.85,
    "Salsa (Cuba/PR)": 0.85,
    "Dominican Republic": 0.35,
    Cuba: 0.4
  },
  "Reggaetón (PR)": { "Dembow (DR)": 0.6, "Dancehall (Jamaica)": 0.35 },

  // Haïti
  Haiti: {
    "Compas (Haiti)": 0.95,
    "Rara (Haiti)": 0.8,
    "Mizik Rasin (Haiti)": 0.8,
    "Dominican Republic": 0.3,
    "Guadeloupe": 0.25,
    "Martinique": 0.25
  },
  "Compas (Haiti)": { "Zouk (GP/MQ)": 0.45 },

  // Guadeloupe / Martinique
  Guadeloupe: {
    "Zouk (GP/MQ)": 0.9,
    "Gwoka (Guadeloupe)": 0.85,
    Martinique: 0.5,
    Haiti: 0.25
  },
  Martinique: {
    "Zouk (GP/MQ)": 0.9,
    "Biguine (Martinique)": 0.8,
    Guadeloupe: 0.5,
    Haiti: 0.25
  },

  // Sainte-Lucie
  "Saint Lucia": {
    "Dennery Segment (Saint Lucia)": 0.9,
    Barbados: 0.3,
    "Trinidad & Tobago": 0.3
  },

  // Grenade
  Grenada: {
    "Jab Jab Soca (Grenada)": 0.9,
    "Trinidad & Tobago": 0.3
  },

  // Antigua & Barbuda
  "Antigua & Barbuda": {
    "Benna (Antigua)": 0.85,
    "Trinidad & Tobago": 0.25
  },

  // Curaçao
  "Curaçao": {
    "Tumba (Curaçao)": 0.9,
    "Tambú (Curaçao)": 0.85
  },

  // ======== LIENS TRANSVERSAUX (genres proches inter-pays) ========
  "Zouk (GP/MQ)": { "Compas (Haiti)": 0.45, "Salsa (Cuba/PR)": 0.25 },
  "Salsa (Cuba/PR)": { "Merengue (DR)": 0.3, "Bachata (DR)": 0.2 },
  "Reggae (Jamaica)": { "Dancehall (Jamaica)": 0.5 },
  "Soca (TT)": { "Bashment Soca (Barbados)": 0.5, "Dennery Segment (Saint Lucia)": 0.4, "Jab Jab Soca (Grenada)": 0.4 },
};

/** Matrice finale (bidirectionnelle) */
export const similarityMatrix: SimMatrix = makeBidirectional(seed);

/**
 * Boosts silencieux "pays → styles typiques" (appliqués quand l’utilisateur note le PAYS).
 * Ces boosts sont additionnels aux similarités et ne s’affichent pas en message.
 * Tu peux laisser vide un pays si tu ne veux pas de boost.
 */
export const cityStyleBoosts: { [country: string]: { [genre: string]: number } } = {
  // Existant / autres régions
  "United States": { Rock: 0.3, Jazz: 0.4 },
  Tanzania: { "Bongo Flava": 0.6, Taarab: 0.5 },
  Kenya:    { Genge: 0.6, Benga: 0.5 },
  Uganda:   { "Kadongo Kamu": 0.6, Reggae: 0.2 },
  Rwanda:   { "Rwandan Afrobeat": 0.6 },
  France:   { Jazz: 0.3 },
  Brazil:   { Reggae: 0.3 },
  Spain:    {},

  // Caraïbes
  Jamaica: {
    "Reggae (Jamaica)": 0.9,
    "Dancehall (Jamaica)": 0.8,
    "Ska (Jamaica)": 0.4
  },
  "Trinidad & Tobago": {
    "Soca (TT)": 0.9,
    "Calypso (TT)": 0.7,
    "Steelpan (TT)": 0.6
  },
  Barbados: {
    "Bashment Soca (Barbados)": 0.7,
    "Spouge (Barbados)": 0.5
  },
  Bahamas: {
    "Junkanoo (Bahamas)": 0.7,
    "Rake-n-Scrape (Bahamas)": 0.6
  },
  Cuba: {
    "Salsa (Cuba/PR)": 0.7,
    "Son Cubano (Cuba)": 0.7,
    "Rumba (Cuba)": 0.5,
    "Timba (Cuba)": 0.6
  },
  "Dominican Republic": {
    "Merengue (DR)": 0.8,
    "Bachata (DR)": 0.8,
    "Dembow (DR)": 0.6
  },
  "Puerto Rico": {
    "Reggaetón (PR)": 0.85,
    "Bomba/Plena (PR)": 0.7,
    "Salsa (Cuba/PR)": 0.6
  },
  Haiti: {
    "Compas (Haiti)": 0.8,
    "Rara (Haiti)": 0.6,
    "Mizik Rasin (Haiti)": 0.6
  },
  Guadeloupe: {
    "Zouk (GP/MQ)": 0.75,
    "Gwoka (Guadeloupe)": 0.6
  },
  Martinique: {
    "Zouk (GP/MQ)": 0.75,
    "Biguine (Martinique)": 0.55
  },
  "Saint Lucia": {
    "Dennery Segment (Saint Lucia)": 0.7
  },
  Grenada: {
    "Jab Jab Soca (Grenada)": 0.7
  },
  "Antigua & Barbuda": {
    "Benna (Antigua)": 0.6
  },
  "Curaçao": {
    "Tumba (Curaçao)": 0.65,
    "Tambú (Curaçao)": 0.6
  }
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



