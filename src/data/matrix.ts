// src/data/matrix.ts
// Similarity matrix (bidirectional) + optional country→style boosts
// Europe + Americas (North, Central, South, Caribbean)

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
 * Légende des poids:
 *  0.9–1.0 : signature quasi exclusive
 *  0.7–0.8 : très fort
 *  0.4–0.6 : moyen / proximité
 *  0.2–0.3 : faible / influence
 *
 * ⚠️ IMPORTANT: ne garde ici que les genres qui existent vraiment dans ton `genres.ts`.
 * Exemples de genres mentionnés ci-dessous:
 * Rock, Jazz, Reggae, Salsa, Cumbia, Reggaeton, Bachata, Merengue, Calypso,
 * Soca, Kompa, Zouk, Samba, Bossa Nova, MPB, Tango, Vallenato, Champeta,
 * Andean Folk, Mariachi, Norteño, Banda, Son Cubano, Danzón, Nueva Canción,
 * Rock Nacional (Argentina), etc.
 */

const seed: SimMatrix = {
  // ==== BASE MINIMALE (déjà dans ton projet) ====
  Rock:   { Metal: 0.7, Jazz: 0.2 },
  Metal:  { Rock: 0.7 },
  Jazz:   { Rock: 0.2, France: 0.3 },
  France: {},
  Brazil: { Reggae: 0.4 },      // déjà présent plus haut
  Reggae: { Brazil: 0.4 },
  Spain:  { France: 0.2 },

  // ===================================================================
  // =========================   EUROPE   ===============================
  // (bloc identique à la version précédente que je t’ai donnée)
  // ===================================================================

  // United Kingdom
  "United Kingdom": {
    "Grime (UK)": 0.9,
    "UK Garage (UK)": 0.85,
    "Drum & Bass (UK)": 0.85,
    "Britpop (UK)": 0.8,
    Ireland: 0.3,
    France: 0.25
  },
  "Grime (UK)": { "UK Garage (UK)": 0.4, "Drum & Bass (UK)": 0.35 },
  "UK Garage (UK)": { "Drum & Bass (UK)": 0.35 },
  "Britpop (UK)": { Rock: 0.4 },

  // Ireland
  Ireland: {
    "Celtic Folk (Ireland)": 0.95,
    "Irish Indie (Ireland)": 0.8,
    "United Kingdom": 0.3
  },

  // France
  "French Touch (France)": { "Dutch House (Netherlands)": 0.3, "Techno (Germany)": 0.25 },
  "Chanson (France)": { Jazz: 0.25 },
  "Rap Français (France)": { "Grime (UK)": 0.2 },

  // Spain
  "Flamenco (Spain)": { "Flamenco Pop (Spain)": 0.4 },
  "Flamenco Pop (Spain)": { "Rap Français (France)": 0.2 },

  // Portugal
  Portugal: { "Fado (Portugal)": 0.95, Spain: 0.3 },
  "Fado (Portugal)": { "Canzone (Italy)": 0.2 },
  "Kuduro (Lisboa)": { "Dutch House (Netherlands)": 0.2, "Techno (Germany)": 0.2 },

  // Italy
  Italy: { "Italo Disco (Italy)": 0.9, "Canzone (Italy)": 0.85, France: 0.25, Spain: 0.25 },
  "Italo Disco (Italy)": { "French Touch (France)": 0.3, "Dutch House (Netherlands)": 0.2 },
  "Canzone (Italy)": {},

  // Germany
  Germany: { "Techno (Germany)": 0.95, "Krautrock (Germany)": 0.75, Netherlands: 0.35, Belgium: 0.25 },
  "Techno (Germany)": { "Dutch House (Netherlands)": 0.3, "New Beat (Belgium)": 0.25 },
  "Krautrock (Germany)": { Rock: 0.3 },

  // Netherlands
  Netherlands: { "Dutch House (Netherlands)": 0.9, "Gabber (Netherlands)": 0.85, Germany: 0.35, Belgium: 0.3 },
  "Gabber (Netherlands)": { "Techno (Germany)": 0.25 },

  // Belgium
  Belgium: { "New Beat (Belgium)": 0.9, Netherlands: 0.3, France: 0.25 },
  "New Beat (Belgium)": { "Techno (Germany)": 0.25, "French Touch (France)": 0.25 },
  "EBM (Belgium)": { "New Beat (Belgium)": 0.35 },

  // Luxembourg / Switzerland / Austria
  Luxembourg: { "Lux Pop (Luxembourg)": 0.85, Belgium: 0.25, France: 0.25, Germany: 0.25 },
  Switzerland: { "Swiss House (Switzerland)": 0.85, Germany: 0.25, France: 0.25, Italy: 0.25 },
  Austria: { "Vienna Downtempo (Austria)": 0.9, Germany: 0.3, Switzerland: 0.25 },

  // Nordics
  Denmark: { "Nordic Pop (Denmark)": 0.9, Sweden: 0.25, Norway: 0.2 },
  Sweden: { "Scandi Pop (Sweden)": 0.9, "Melodic Death Metal (Sweden)": 0.85, Norway: 0.25, Finland: 0.25 },
  Norway: { "Black Metal (Norway)": 0.95, Sweden: 0.25, Finland: 0.2 },
  Finland: { "Power Metal (Finland)": 0.95, Sweden: 0.25, Norway: 0.2 },
  Iceland: { "Icelandic Post-Rock (Iceland)": 0.95 },

  // Central/Eastern
  Poland: { "Polish Hip-Hop (Poland)": 0.9, Germany: 0.25, Czechia: 0.2 },
  Czechia: { "Czech Alt Rock (Czechia)": 0.85, Slovakia: 0.25, Poland: 0.2 },
  Slovakia: { "Slovak Pop Rock (Slovakia)": 0.85, Czechia: 0.25 },
  Hungary: { "Hungarian Folk Fusion (Hungary)": 0.9, Romania: 0.25, Slovakia: 0.2 },

  // Balkans / SE
  Romania: { "Manele (Romania)": 0.95, Hungary: 0.25, Bulgaria: 0.25 },
  Bulgaria: { "Chalga (Bulgaria)": 0.95, Romania: 0.25, Greece: 0.25 },
  Greece: { "Rebetiko (Greece)": 0.95, "Laïko (Greece)": 0.85 },

  // Islands south
  Malta: { "Maltese Pop (Malta)": 0.9, Italy: 0.25 },
  Cyprus: { "Cypriot Pop (Cyprus)": 0.9, Greece: 0.35 },

  // ===================================================================
  // ========================   AMERICAS   ==============================
  // ===================================================================

  // ---------- NORTH AMERICA ----------
  "United States": {
    Rock: 0.6, Jazz: 0.6,
    // Décommente si tu as créé ces genres:
    // "Hip-Hop": 0.9, Country: 0.9, Blues: 0.7
  },
  Canada: {
    Rock: 0.4, Jazz: 0.3, "Scandi Pop (Sweden)": 0.15, "United States": 0.4
  },
  Mexico: {
    Mariachi: 0.9, Norteño: 0.85, Banda: 0.8, Cumbia: 0.4, "United States": 0.3
  },

  // ---------- CARIBBEAN ----------
  Jamaica:   { Reggae: 0.95, Dancehall: 0.9 },
  "Trinidad & Tobago": { Calypso: 0.95, Soca: 0.9 },
  "Dominican Republic": { Bachata: 0.95, Merengue: 0.9, Reggaeton: 0.3 },
  "Puerto Rico": { Reggaeton: 0.95, Salsa: 0.5 },
  Cuba:      { "Son Cubano": 0.95, Salsa: 0.8, Danzón: 0.7 },
  Haiti:     { Kompa: 0.95, Zouk: 0.5 },
  "Guadeloupe/Martinique": { Zouk: 0.95, Kompa: 0.5 },

  // ---------- CENTRAL AMERICA ----------
  Guatemala: { Marimba: 0.9, "Andean Folk": 0.35, Cumbia: 0.4 },
  Belize:    { Punta: 0.9, Soca: 0.3, Calypso: 0.3 },
  Honduras:  { Punta: 0.8, Cumbia: 0.4 },
  ElSalvador:{ Cumbia: 0.6, "Nueva Canción": 0.3 },
  Nicaragua: { PaloDeMayo: 0.8, Cumbia: 0.4, "Nueva Canción": 0.3 },
  CostaRica: { Calypso: 0.6, Salsa: 0.4, Reggae: 0.4 },
  Panama:    { Reggaeton: 0.85, Salsa: 0.4, Calypso: 0.3 },

  // ---------- SOUTH AMERICA ----------
  Colombia: { Cumbia: 0.9, Vallenato: 0.9, Champeta: 0.8, Salsa: 0.5, Reggaeton: 0.4 },
  Venezuela:{ Joropo: 0.9, Salsa: 0.5, Gaita: 0.7 },
  "Ecuador": { "Andean Folk": 0.9, Pasillo: 0.75, Salsa: 0.3 },
  Peru:      { "Andean Folk": 0.9, Chicha: 0.8, "Nueva Canción": 0.4 },
  Bolivia:   { "Andean Folk": 0.95, Saya: 0.7 },
  Chile:     { "Nueva Canción": 0.95, Rock: 0.4, Cumbia: 0.4 },
  Argentina: { Tango: 0.95, "Rock Nacional": 0.9, Folklore: 0.7 },
  Uruguay:   { Candombe: 0.9, Tango: 0.6 },
  Paraguay:  { Guarania: 0.9, PolkaParaguaya: 0.8 },
  "French Guiana": { Zouk: 0.5, Brazil: 0.3 }, // culturellement Caraïbe/Amazonie
  Suriname:  { Kaseko: 0.9, Kawina: 0.8, Zouk: 0.3 },
  Guyana:    { Chutney: 0.8, Calypso: 0.5 },
  // Brésil déjà présent dans le haut (Brazil: { Reggae: 0.4 })
  // si tu as Samba / Bossa Nova / MPB en genres :
  // Brazil: { Samba: 0.95, "Bossa Nova": 0.9, MPB: 0.85, Reggae: 0.4 },

  // ---------- LIENS GENRE↔GENRE (Amériques) ----------
  Reggaeton: { Dancehall: 0.35, "Hip-Hop": 0.3 }, // décommente "Hip-Hop" si tu l’as
  Salsa:     { "Son Cubano": 0.5, Cumbia: 0.3, Bachata: 0.25, Merengue: 0.25 },
  Cumbia:    { Vallenato: 0.3, Chicha: 0.35, Champeta: 0.25 },
  Bachata:   { Merengue: 0.3, Salsa: 0.25 },
  Merengue:  { Bachata: 0.3, Salsa: 0.25 },
  Calypso:   { Soca: 0.5, Zouk: 0.25 },
  Soca:      { Calypso: 0.5 },
  Kompa:     { Zouk: 0.5 },
  Zouk:      { Kompa: 0.5 },
  "Son Cubano": { Salsa: 0.5, Danzón: 0.4 },
  Vallenato: { Cumbia: 0.3 },
  Champeta:  { Cumbia: 0.25, Afrobeats: 0.2 }, // "Afrobeats" si tu l’ajoutes
  Tango:     { "Rock Nacional": 0.2 },
  Chicha:    { Cumbia: 0.35 },
  "Andean Folk": { Chicha: 0.3, "Nueva Canción": 0.3 },
  Mariachi:  { Ranchera: 0.6 },
  Norteño:   { Banda: 0.5 },
  Banda:     { Norteño: 0.5 },
};

export const similarityMatrix: SimMatrix = makeBidirectional(seed);

// Boosts silencieux appliqués quand on NOTE un PAYS
// (supprime les entrées de genres absents de ton `genres.ts`)
export const cityStyleBoosts: { [country: string]: { [genre: string]: number } } = {
  // ---- Europe (identiques au bloc précédent) ----
  "United Kingdom": { "Grime (UK)": 0.6, "UK Garage (UK)": 0.5, "Drum & Bass (UK)": 0.5, "Britpop (UK)": 0.4 },
  Ireland: { "Celtic Folk (Ireland)": 0.7, "Irish Indie (Ireland)": 0.4 },
  France: { "French Touch (France)": 0.5, "Chanson (France)": 0.6, "Rap Français (France)": 0.4 },
  Spain: { "Flamenco (Spain)": 0.7, "Flamenco Pop (Spain)": 0.5 },
  Portugal: { "Fado (Portugal)": 0.7, "Kuduro (Lisboa)": 0.4 },
  Italy: { "Italo Disco (Italy)": 0.6, "Canzone (Italy)": 0.5, "Italo Rap (Italy)": 0.4 },
  Germany: { "Techno (Germany)": 0.7, "Krautrock (Germany)": 0.4 },
  Netherlands: { "Dutch House (Netherlands)": 0.6, "Gabber (Netherlands)": 0.5 },
  Belgium: { "New Beat (Belgium)": 0.6, "EBM (Belgium)": 0.5 },
  Luxembourg: { "Lux Pop (Luxembourg)": 0.6 },
  Switzerland: { "Swiss House (Switzerland)": 0.6 },
  Austria: { "Vienna Downtempo (Austria)": 0.6 },
  Denmark: { "Nordic Pop (Denmark)": 0.6 },
  Sweden: { "Scandi Pop (Sweden)": 0.6, "Melodic Death Metal (Sweden)": 0.5 },
  Norway: { "Black Metal (Norway)": 0.7 },
  Finland: { "Power Metal (Finland)": 0.7 },
  Iceland: { "Icelandic Post-Rock (Iceland)": 0.7 },
  Poland: { "Polish Hip-Hop (Poland)": 0.6 },
  Czechia: { "Czech Alt Rock (Czechia)": 0.6 },
  Slovakia: { "Slovak Pop Rock (Slovakia)": 0.6 },
  Hungary: { "Hungarian Folk Fusion (Hungary)": 0.6 },
  Romania: { "Manele (Romania)": 0.7 },
  Bulgaria: { "Chalga (Bulgaria)": 0.7 },
  Greece: { "Rebetiko (Greece)": 0.6, "Laïko (Greece)": 0.5 },
  Malta: { "Maltese Pop (Malta)": 0.6 },
  Cyprus: { "Cypriot Pop (Cyprus)": 0.6 },

  // ---- Americas ----
  "United States": {
    Rock: 0.4, Jazz: 0.4,
    // "Hip-Hop": 0.6, Country: 0.6, Blues: 0.5 // si ces genres existent
  },
  Canada: { Rock: 0.3, Jazz: 0.2 },
  Mexico: { Mariachi: 0.6, Norteño: 0.5, Banda: 0.5, Cumbia: 0.2 },

  Jamaica: { Reggae: 0.7, Dancehall: 0.6 },
  "Trinidad & Tobago": { Calypso: 0.6, Soca: 0.6 },
  "Dominican Republic": { Bachata: 0.6, Merengue: 0.6, Reggaeton: 0.25 },
  "Puerto Rico": { Reggaeton: 0.7, Salsa: 0.3 },
  Cuba: { "Son Cubano": 0.6, Salsa: 0.5 },
  Haiti: { Kompa: 0.7, Zouk: 0.3 },
  "Guadeloupe/Martinique": { Zouk: 0.7, Kompa: 0.3 },

  Guatemala: { Marimba: 0.6, Cumbia: 0.2 },
  Belize: { Punta: 0.6, Calypso: 0.25, Soca: 0.25 },
  Honduras: { Punta: 0.5, Cumbia: 0.2 },
  ElSalvador: { Cumbia: 0.3 },
  Nicaragua: { PaloDeMayo: 0.5, Cumbia: 0.2 },
  CostaRica: { Calypso: 0.4, Reggae: 0.3, Salsa: 0.2 },
  Panama: { Reggaeton: 0.6, Salsa: 0.3 },

  Colombia: { Cumbia: 0.5, Vallenato: 0.5, Champeta: 0.4, Salsa: 0.3, Reggaeton: 0.25 },
  Venezuela: { Joropo: 0.5, Gaita: 0.4, Salsa: 0.3 },
  Ecuador: { "Andean Folk": 0.5, Pasillo: 0.4 },
  Peru: { "Andean Folk": 0.6, Chicha: 0.5 },
  Bolivia: { "Andean Folk": 0.7, Saya: 0.4 },
  Chile: { "Nueva Canción": 0.6, Cumbia: 0.3 },
  Argentina: { Tango: 0.7, "Rock Nacional": 0.5, Folklore: 0.4 },
  Uruguay: { Candombe: 0.6, Tango: 0.3 },
  Paraguay: { Guarania: 0.6, PolkaParaguaya: 0.5 },
  Suriname: { Kaseko: 0.6, Kawina: 0.5 },
  Guyana: { Chutney: 0.6, Calypso: 0.3 },
  "French Guiana": { Zouk: 0.4 }
  // ======= BALTICS =======
  Estonia:  { "Baltic Choral (Estonia/Latvia/Lithuania)": 0.9, "Baltic Indie (Baltics)": 0.6, Latvia: 0.35, Lithuania: 0.35, Finland: 0.25 },
  Latvia:   { "Baltic Choral (Estonia/Latvia/Lithuania)": 0.9, "Baltic Indie (Baltics)": 0.6, Estonia: 0.35, Lithuania: 0.35 },
  Lithuania:{ "Baltic Choral (Estonia/Latvia/Lithuania)": 0.9, "Baltic Indie (Baltics)": 0.6, Latvia: 0.35, Poland: 0.25 },

  // ======= UKRAINE / BELARUS / MOLDOVA =======
  Ukraine:  { "Ukrainian Folk Fusion": 0.95, Poland: 0.25, Romania: 0.25 },
  Belarus:  { "Post-Soviet Pop (Belarus/Moldova)": 0.85, Russia: 0.3 /* si tu ajoutes Russia plus tard */, Lithuania: 0.25 },
  Moldova:  { "Post-Soviet Pop (Belarus/Moldova)": 0.85, Romania: 0.35, Ukraine: 0.3 },

  "Ukrainian Folk Fusion": { "Baltic Choral (Estonia/Latvia/Lithuania)": 0.25, "Hungarian Folk Fusion (Hungary)": 0.2 },
  "Post-Soviet Pop (Belarus/Moldova)": { "Polish Hip-Hop (Poland)": 0.2, "Czech Alt Rock (Czechia)": 0.2 },

  // ======= BALKANS OUEST & SUD =======
  Slovenia: { "Adriatic Pop (Slovenia/Croatia/Montenegro)": 0.85, Croatia: 0.35, Austria: 0.25 },
  Croatia:  { "Adriatic Pop (Slovenia/Croatia/Montenegro)": 0.9, "Klapa (Croatia)": 0.95, Slovenia: 0.35, Bosnia: 0.3, Montenegro: 0.3, Italy: 0.25 },
  "Bosnia and Herzegovina": { "Sevdah (Bosnia)": 0.95, Serbia: 0.3, Croatia: 0.3 },
  Serbia:   { "Turbo-Folk (Serbia/Balkans)": 0.9, "Truba Brass (Serbia)": 0.85, "Bosnia and Herzegovina": 0.3, Montenegro: 0.3, NorthMacedonia: 0.3 },
  Montenegro:{ "Adriatic Pop (Slovenia/Croatia/Montenegro)": 0.85, Serbia: 0.3, Croatia: 0.3 },
  NorthMacedonia: { "Macedonian Folk Pop": 0.9, Serbia: 0.3, Greece: 0.25, Bulgaria: 0.25 },
  Albania:  { "Albanian Pop/Rap": 0.9, Kosovo: 0.4, NorthMacedonia: 0.25, Greece: 0.25 },
  Kosovo:   { "Kosovar Pop/Rap": 0.9, Albania: 0.4, NorthMacedonia: 0.25, Serbia: 0.25 },

  "Sevdah (Bosnia)": { "Macedonian Folk Pop": 0.25, "Rebetiko (Greece)": 0.2 },
  "Turbo-Folk (Serbia/Balkans)": { "Chalga (Bulgaria)": 0.3, "Laïko (Greece)": 0.2 },
  "Truba Brass (Serbia)": { "Balkan Brass": 0.4 /* ajoute ce genre si tu veux le détailler */ },
  "Klapa (Croatia)": { "Adriatic Pop (Slovenia/Croatia/Montenegro)": 0.3 },

  // ======= MICRO-ÉTATS =======
  Andorra:  { "Mediterranean Chanson (Andorra/Monaco/San Marino)": 0.9, Spain: 0.3, France: 0.3 },
  Monaco:   { "Mediterranean Chanson (Andorra/Monaco/San Marino)": 0.9, France: 0.35, Italy: 0.3 },
  "San Marino": { "Mediterranean Chanson (Andorra/Monaco/San Marino)": 0.9, Italy: 0.35 },
  Liechtenstein: { "Lux Pop (Luxembourg)": 0.2, Switzerland: 0.3, Austria: 0.3 },
  "Vatican City": { Choral: 0.9 /* si tu ajoutes un genre choral sacré */ },

  // ======= TURKEY =======
  Turkey: { "Anatolian Rock/Psych (Turkey)": 0.95, "Arabesk Pop (Turkey)": 0.9, Greece: 0.3, Bulgaria: 0.25 },
  "Anatolian Rock/Psych (Turkey)": { "Krautrock (Germany)": 0.25, Psychedelic: 0.3 /* si tu ajoutes un genre générique Psychedelic */ },
  "Arabesk Pop (Turkey)": { "Laïko (Greece)": 0.25 }
};
