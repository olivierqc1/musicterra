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
  Brazil: { Reggae: 0.4 },
  Reggae: { Brazil: 0.4 },
  Spain:  { France: 0.2 },

  // ===================================================================
  // =========================   EUROPE   ===============================
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
    Rock: 0.6, Jazz: 0.6
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
  French Guiana: { Zouk: 0.5, Brazil: 0.3 },
  Suriname:  { Kaseko: 0.9, Kawina: 0.8, Zouk: 0.3 },
  Guyana:    { Chutney: 0.8, Calypso: 0.5 },

  // ---------- LIENS GENRE↔GENRE (Amériques) ----------
  Reggaeton: { Dancehall: 0.35 },
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
  Champeta:  { Cumbia: 0.25 },
  Tango:     { "Rock Nacional": 0.2 },
  Chicha:    { Cumbia: 0.35 },
  "Andean Folk": { Chicha: 0.3, "Nueva Canción": 0.3 },
  Mariachi:  { Ranchera: 0.6 },
  Norteño:   { Banda: 0.5 },
  Banda:     { Norteño: 0.5 },

  // ======= BALTICS =======
  Estonia:  { "Baltic Choral (Estonia/Latvia/Lithuania)": 0.9, "Baltic Indie (Baltics)": 0.6, Latvia: 0.35, Lithuania: 0.35, Finland: 0.25 },
  Latvia:   { "Baltic Choral (Estonia/Latvia/Lithuania)": 0.9, "Baltic Indie (Baltics)": 0.6, Estonia: 0.35, Lithuania: 0.35 },
  Lithuania:{ "Baltic Choral (Estonia/Latvia/Lithuania)": 0.9, "Baltic Indie (Baltics)": 0.6, Latvia: 0.35, Poland: 0.25 },

  // ======= UKRAINE / BELARUS / MOLDOVA =======
  Ukraine:  { "Ukrainian Folk Fusion": 0.95, Poland: 0.25, Romania: 0.25 },
  Belarus:  { "Post-Soviet Pop (Belarus/Moldova)": 0.85, Lithuania: 0.25 },
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
  "Truba Brass (Serbia)": {},
  "Klapa (Croatia)": { "Adriatic Pop (Slovenia/Croatia/Montenegro)": 0.3 },

  // ======= MICRO-ÉTATS =======
  Andorra:  { "Mediterranean Chanson (Andorra/Monaco/San Marino)": 0.9, Spain: 0.3, France: 0.3 },
  Monaco:   { "Mediterranean Chanson (Andorra/Monaco/San Marino)": 0.9, France: 0.35, Italy: 0.3 },
  "San Marino": { "Mediterranean Chanson (Andorra/Monaco/San Marino)": 0.9, Italy: 0.35 },
  Liechtenstein: { "Lux Pop (Luxembourg)": 0.2, Switzerland: 0.3, Austria: 0.3 },
  "Vatican City": {},

  // ======= TURKEY =======
  Turkey: { "Anatolian Rock/Psych (Turkey)": 0.95, "Arabesk Pop (Turkey)": 0.9, Greece: 0.3, Bulgaria: 0.25 },
  "Anatolian Rock/Psych (Turkey)": { "Krautrock (Germany)": 0.25 },
  "Arabesk Pop (Turkey)": { "Laïko (Greece)": 0.25 },

  // ===== MOYEN-ORIENT =====
  Israel:  { "Mizrahi Pop (Israel)": 0.9, "Tarab (Levant/Arab World)": 0.3, Palestine: 0.3, Lebanon: 0.25 },
  Palestine:{ "Dabke (Levant)": 0.9, "Tarab (Levant/Arab World)": 0.4, Israel: 0.3, Jordan: 0.3, Lebanon: 0.25 },
  Lebanon: { "Tarab (Levant/Arab World)": 0.9, "Dabke (Levant)": 0.6, Syria: 0.35, Palestine: 0.25 },
  Syria:   { "Dabke (Levant)": 0.9, "Tarab (Levant/Arab World)": 0.6, Lebanon: 0.35, Jordan: 0.3 },
  Jordan:  { "Dabke (Levant)": 0.85, "Tarab (Levant/Arab World)": 0.3, Palestine: 0.3, Syria: 0.3 },
  Iraq:    { "Tarab (Levant/Arab World)": 0.3, "Kurdish Folk": 0.5, Iran: 0.3 },
  Iran:    { "Persian Traditional (Iran)": 0.95, "Iranian Pop/Rock (Iran)": 0.8, Iraq: 0.3, Armenia: 0.25, Azerbaijan: 0.25 },
  "Saudi Arabia": { "Khaleeji Pop (Gulf)": 0.9, "Tarab (Levant/Arab World)": 0.2, Kuwait: 0.35, Bahrain: 0.3, Qatar: 0.3, UAE: 0.35, Oman: 0.35, Yemen: 0.35 },
  "United Arab Emirates": { "Khaleeji Pop (Gulf)": 0.85, Qatar: 0.35, "Saudi Arabia": 0.35, Oman: 0.3 },
  Qatar:   { "Khaleeji Pop (Gulf)": 0.85, "United Arab Emirates": 0.35, "Saudi Arabia": 0.3, Bahrain: 0.3 },
  Bahrain: { "Khaleeji Pop (Gulf)": 0.85, "Saudi Arabia": 0.3, Qatar: 0.3, Kuwait: 0.3 },
  Kuwait:  { "Khaleeji Pop (Gulf)": 0.85, "Saudi Arabia": 0.35, Bahrain: 0.3 },
  Oman:    { "Khaleeji Pop (Gulf)": 0.8, Yemen: 0.35, "United Arab Emirates": 0.3, "Saudi Arabia": 0.3 },
  Yemen:   { "Yemeni Hadrami": 0.9, Oman: 0.35, "Saudi Arabia": 0.35 },

  Armenia:    { "Armenian Duduk/Folk": 0.95, Georgia: 0.3, Iran: 0.25 },
  Azerbaijan: { "Azeri Mugham (Azerbaijan)": 0.95, Iran: 0.25, Georgia: 0.25, Turkey: 0.25 },
  Georgia:    { "Georgian Polyphony (Georgia)": 0.95, Armenia: 0.3, Azerbaijan: 0.25, Turkey: 0.25 },

  "Mizrahi Pop (Israel)": { "Khaleeji Pop (Gulf)": 0.25, "Tarab (Levant/Arab World)": 0.2 },
  "Dabke (Levant)": { "Tarab (Levant/Arab World)": 0.3 },
  "Kurdish Folk": { "Persian Traditional (Iran)": 0.25, Turkey: 0.2 },

  // ===== ASIE CENTRALE =====
  Kazakhstan:   { "Q-Pop (Kazakhstan)": 0.9, "Kazakh Dombra Folk": 0.8, Uzbekistan: 0.3, Kyrgyzstan: 0.3 },
  Uzbekistan:   { "Shashmaqam (Uzbekistan/Tajikistan)": 0.95, Kazakhstan: 0.3, Tajikistan: 0.35, Turkmenistan: 0.25 },
  Kyrgyzstan:   { "Kyrgyz Komuz Folk": 0.95, Kazakhstan: 0.3, Tajikistan: 0.25 },
  Tajikistan:   { "Shashmaqam (Uzbekistan/Tajikistan)": 0.9, "Tajik Pamiri Folk": 0.8, Uzbekistan: 0.35, Kyrgyzstan: 0.25 },
  Turkmenistan: { "Turkmen Dutar Folk": 0.95, Uzbekistan: 0.25, Iran: 0.25 },
  Afghanistan:  { "Afghan Ghazal/Rubab": 0.95, Iran: 0.25, Tajikistan: 0.25 },

  "Persian Traditional (Iran)": { "Armenian Duduk/Folk": 0.25, "Azeri Mugham (Azerbaijan)": 0.3 },
  "Azeri Mugham (Azerbaijan)":  { "Persian Traditional (Iran)": 0.3, "Tarab (Levant/Arab World)": 0.2 },
  "Georgian Polyphony (Georgia)": { "Baltic Choral (Estonia/Latvia/Lithuania)": 0.25 },
  "Q-Pop (Kazakhstan)": { "Scandi Pop (Sweden)": 0.15 },
  "Shashmaqam (Uzbekistan/Tajikistan)": { "Persian Traditional (Iran)": 0.25 },
  "Afghan Ghazal/Rubab": { "Persian Traditional (Iran)": 0.3 },
  "Khaleeji Pop (Gulf)": { "Mizrahi Pop (Israel)": 0.25 },
  "Yemeni Hadrami": { "Tarab (Levant/Arab World)": 0.2 },

  // ===== EAST ASIA =====
  Japan: { "J-Pop (Japan)": 0.9, "City Pop (Japan)": 0.85, "Enka (Japan)": 0.8 },
  "J-Pop (Japan)": { "City Pop (Japan)": 0.4 },
  "City Pop (Japan)": { "J-Pop (Japan)": 0.4 },
  "Enka (Japan)": {},

  "South Korea": { "K-Pop (Korea)": 0.95, "K-Hip-Hop (Korea)": 0.8, "Trot (Korea)": 0.7 },
  "K-Pop (Korea)": { "K-Hip-Hop (Korea)": 0.35 },
  "K-Hip-Hop (Korea)": {},
  "Trot (Korea)": {},

  China: { "Mandopop (China/Taiwan)": 0.9, "Chinese Classical/Guqin (China)": 0.8, HongKong: 0.3, Taiwan: 0.35 },
  HongKong: { "Cantopop (Hong Kong)": 0.95, China: 0.3 },
  Taiwan: { "Mandopop (China/Taiwan)": 0.9, "Taipei Indie (Taiwan)": 0.7, China: 0.35 },
  "Mandopop (China/Taiwan)": { "Cantopop (Hong Kong)": 0.25, "J-Pop (Japan)": 0.2 },
  "Cantopop (Hong Kong)": { "Mandopop (China/Taiwan)": 0.25 },

  Mongolia: { "Mongolian Throat Singing (Mongolia)": 0.95 },

  // ===== SOUTH ASIA =====
  India: { "Bollywood (India)": 0.9, "Hindustani Classical (India)": 0.85, "Carnatic (India)": 0.85, "Bhangra (Punjab)": 0.7 },
  "Bollywood (India)": { "Bhangra (Punjab)": 0.3 },
  "Hindustani Classical (India)": { "Qawwali (Pakistan)": 0.25 },
  "Carnatic (India)": {},
  "Bhangra (Punjab)": { "Bollywood (India)": 0.3 },

  Pakistan: { "Qawwali (Pakistan)": 0.95, "Coke Studio Pop (Pakistan)": 0.85, India: 0.3 },
  "Qawwali (Pakistan)": { "Hindustani Classical (India)": 0.25 },
  "Coke Studio Pop (Pakistan)": { "Qawwali (Pakistan)": 0.25 },

  Bangladesh: { "Baul (Bangladesh)": 0.9, India: 0.25 },
  "Baul (Bangladesh)": {},

  "Sri Lanka": { "Baila (Sri Lanka)": 0.9, India: 0.25 },
  "Baila (Sri Lanka)": {},

  Nepal: { "Nepali Folk (Nepal)": 0.9, India: 0.25 },
  "Nepali Folk (Nepal)": {},

  Bhutan: { "Dranyen Folk (Bhutan)": 0.9, Nepal: 0.25 },
  "Dranyen Folk (Bhutan)": {},

  Maldives: { "Boduberu (Maldives)": 0.9 },
  "Boduberu (Maldives)": {},

  // ===== SOUTHEAST ASIA =====
  Indonesia: { "Gamelan (Indonesia)": 0.95, "Dangdut (Indonesia)": 0.85, "Kroncong (Indonesia)": 0.8 },
  "Gamelan (Indonesia)": {},
  "Dangdut (Indonesia)": { "Kroncong (Indonesia)": 0.25 },
  "Kroncong (Indonesia)": {},

  Malaysia: { "Malay Pop (Malaysia)": 0.9, "Nasyid (Malaysia)": 0.8 },
  "Malay Pop (Malaysia)": {},
  "Nasyid (Malaysia)": {},

  Singapore: { "Mandopop SG (Singapore)": 0.9, "Malay Pop (Malaysia)": 0.3 },
  "Mandopop SG (Singapore)": { "Mandopop (China/Taiwan)": 0.25 },

  Philippines: { "OPM Pop/Rock (Philippines)": 0.9, "Kundiman (Philippines)": 0.8 },
  "OPM Pop/Rock (Philippines)": {},
  "Kundiman (Philippines)": {},

  Thailand: { "Thai Pop (Thailand)": 0.9, "Luk Thung (Thailand)": 0.85, "Mor Lam (Isan)": 0.85 },
  "Thai Pop (Thailand)": {},
  "Luk Thung (Thailand)": { "Mor Lam (Isan)": 0.35 },
  "Mor Lam (Isan)": { "Lao Lam (Laos)": 0.35 },

  Vietnam: { "V-Pop (Vietnam)": 0.9, "Nhạc Vàng (Vietnam)": 0.85 },
  "V-Pop (Vietnam)": {},
  "Nhạc Vàng (Vietnam)": {},

  Cambodia: { "Khmer Oldies (Cambodia)": 0.9, "Cambodian Rock (Cambodia)": 0.85 },
  "Khmer Oldies (Cambodia)": { "Cambodian Rock (Cambodia)": 0.35 },
  "Cambodian Rock (Cambodia)": {},

  Laos: { "Lao Lam (Laos)": 0.9, Thailand: 0.3 },
  "Lao Lam (Laos)": { "Mor Lam (Isan)": 0.35 },

  Myanmar: { "Burmese Pop (Myanmar)": 0.85, "Hsaing Waing (Myanmar)": 0.85 },
  "Burmese Pop (Myanmar)": {},
  "Hsaing Waing (Myanmar)": {},

  Brunei: { "Brunei Malay Pop (Brunei)": 0.9, Malaysia: 0.3 },
  "Brunei Malay Pop (Brunei)": {},

  "Timor-Leste": { "Timor-Leste Tebe-Dai (Timor)": 0.9, Indonesia: 0.25 },
  "Timor-Leste Tebe-Dai (Timor)": {},

  // ===== AFRIQUE DU NORD =====
  Morocco: { "Gnawa (Morocco)": 0.9, "Chaabi (Maghreb)": 0.6, Algeria: 0.35, Spain: 0.2 },
  Algeria: { "Raï (Algeria)": 0.95, "Chaabi (Maghreb)": 0.7, Morocco: 0.35, Tunisia:0.3 },
  Tunisia: { "Malouf/Andalusi (Tunisia)": 0.9, "Chaabi (Maghreb)": 0.3, Algeria: 0.3, Libya: 0.25 },
  Libya:   { "Malouf/Andalusi (Tunisia)": 0.25, Tunisia: 0.25, Egypt: 0.25 },
  Egypt:   { "Mahraganat (Egypt)": 0.9, "Shaabi (Egypt)": 0.8, Libya: 0.25 },

  "Raï (Algeria)": { "Chaabi (Maghreb)": 0.3 },
  "Gnawa (Morocco)": { "Chaabi (Maghreb)": 0.25 },
  "Malouf/Andalusi (Tunisia)": { "Chaabi (Maghreb)": 0.25 },
  "Mahraganat (Egypt)": { "Shaabi (Egypt)": 0.35 },
  "Shaabi (Egypt)": {},

  // ===== AFRIQUE DE L'OUEST =====
  Nigeria: { "Afrobeat (Nigeria, 70s)": 0.9, "Afrobeats (Nigeria/Ghana)": 0.95, "Juju (Nigeria)": 0.85, "Fuji (Nigeria)": 0.8, Ghana: 0.35, Benin: 0.25 },
  Ghana:   { "Highlife (Ghana)": 0.95, "Hiplife (Ghana)": 0.85, "Afrobeats (Nigeria/Ghana)": 0.9, Nigeria: 0.35 },
  Senegal: { "Mbalax (Senegal)": 0.95, Mali: 0.25, Gambia: 0.25 },
  Mali:    { "Desert Blues (Sahel)": 0.9, Senegal: 0.25, Niger: 0.3, Guinea: 0.25 },
  "Ivory Coast": { "Coupé-Décalé (Côte d'Ivoire)": 0.95, "Zouglou (Côte d'Ivoire)": 0.85, Ghana: 0.25 },
  Guinea:  { Mali: 0.25 },
  Gambia:  { Senegal: 0.25 },
  Benin:   { Ghana: 0.25, Nigeria: 0.25 },
  Togo:    { Ghana: 0.25, Benin: 0.25 },
  "Burkina Faso": { Mali: 0.3, Ghana: 0.25 },
  Niger:   { "Desert Blues (Sahel)": 0.85, Mali: 0.3 },
  "Cape Verde": { "Funaná/Morna (Cape Verde)": 0.95 },

  "Afrobeat (Nigeria, 70s)": { "Highlife (Ghana)": 0.3 },
  "Afrobeats (Nigeria/Ghana)": { "Highlife (Ghana)": 0.25, "Hiplife (Ghana)": 0.25 },
  "Highlife (Ghana)": { "Hiplife (Ghana)": 0.35 },
  "Hiplife (Ghana)": {},
  "Juju (Nigeria)": {},
  "Fuji (Nigeria)": {},
  "Mbalax (Senegal)": {},
  "Desert Blues (Sahel)": {},
  "Coupé-Décalé (Côte d'Ivoire)": { "Zouglou (Côte d'Ivoire)": 0.35 },
  "Zouglou (Côte d'Ivoire)": {},
  "Funaná/Morna (Cape Verde)": {},

  // ===== AFRIQUE CENTRALE =====
  "DR Congo": { "Rumba Congolaise (DRC/RC)": 0.95, "Soukous/Ndombolo (DRC)": 0.9, "Republic of the Congo": 0.35, Angola: 0.3 },
  "Republic of the Congo": { "Rumba Congolaise (DRC/RC)": 0.9, "Soukous/Ndombolo (DRC)": 0.6, "DR Congo": 0.35, Cameroon: 0.3 },
  Cameroon: { "Makossa (Cameroon)": 0.9, "Bikutsi (Cameroon)": 0.85, "Republic of the Congo": 0.3, Gabon: 0.25 },
  Gabon:    { Cameroon: 0.25 },

  "Rumba Congolaise (DRC/RC)": { "Soukous/Ndombolo (DRC)": 0.4, "Makossa (Cameroon)": 0.25 },
  "Soukous/Ndombolo (DRC)": { "Rumba Congolaise (DRC/RC)": 0.4 },
  "Makossa (Cameroon)": { "Bikutsi (Cameroon)": 0.3 },
  "Bikutsi (Cameroon)": {},

  // ===== AFRIQUE AUSTRALE =====
  "South Africa": { "Amapiano (South Africa)": 0.95, "Gqom (South Africa)": 0.85, "Kwaito (South Africa)": 0.85, "Township Jazz (South Africa)": 0.8, "Maskandi (South Africa)": 0.75, Zimbabwe: 0.3, Mozambique: 0.25, Namibia: 0.25, Botswana: 0.25 },
  Zimbabwe: { "South Africa": 0.3 },
  Zambia:   {},
  Namibia:  { "South Africa": 0.25 },
  Botswana: { "Kwaito (South Africa)": 0.3, "South Africa": 0.25 },
  Mozambique: { "Marrabenta (Mozambique)": 0.95, "South Africa": 0.25 },
  Angola:   { "Kuduro (Angola)": 0.95, "Kizomba/Semba (Angola)": 0.9, "DR Congo": 0.3 },
  Madagascar: { "Salegy/Tsapiky (Madagascar)": 0.95 },
  Mauritius:  { "Sega (Mauritius)": 0.95 },

  "Amapiano (South Africa)": { "Kwaito (South Africa)": 0.35, "Gqom (South Africa)": 0.25 },
  "Gqom (South Africa)": {},
  "Kwaito (South Africa)": {},
  "Township Jazz (South Africa)": {},
  "Maskandi (South Africa)": {},
  "Marrabenta (Mozambique)": {},
  "Kuduro (Angola)": { "Kizomba/Semba (Angola)": 0.25 },
  "Kizomba/Semba (Angola)": {},
  "Salegy/Tsapiky (Madagascar)": {},
  "Sega (Mauritius)": {},

  // ===== CANADA =====
  "Chanson Québécoise (Canada)": { "Canadian Indie (Canada)": 0.25 },
  "Canadian Indie (Canada)": { "Canadian Hip-Hop (Canada)": 0.2 },
  "Canadian Hip-Hop (Canada)": {},
  "Canadian Country (Canada)": {},
  "Inuit Throat Singing (Canada)": {},
  "Celtic des Maritimes (Canada)": {},

  // ===== OCÉANIE =====
  Australia: {
    "Aussie Rock (Australia)": 0.9,
    "Aussie Indie (Australia)": 0.85,
    "Didgeridoo/Aboriginal Trad (Australia)": 0.75,
    "New Zealand": 0.3
  },
  "Aussie Rock (Australia)": { "Aussie Indie (Australia)": 0.35 },
  "Aussie Indie (Australia)": {},
  "Didgeridoo/Aboriginal Trad (Australia)": {},

  "New Zealand": {
    "Kiwi Pop/Indie (New Zealand)": 0.9,
    "Waiata Māori (New Zealand)": 0.8,
    Australia: 0.3
  },
  "Kiwi Pop/Indie (New Zealand)": {},
  "Waiata Māori (New Zealand)": {},

  "Papua New Guinea": { "Stringband (Melanesia)": 0.9 },
  Fiji: { "Vude (Fiji)": 0.9, "Pacific Island Reggae (Polynesia/Melanesia)": 0.6 },
  Samoa: { "Pacific Island Reggae (Polynesia/Melanesia)": 0.7, "Stringband (Melanesia)": 0.3 },
  Tonga: { "Pacific Island Reggae (Polynesia/Melanesia)": 0.7 },
  "Solomon Islands": { "Stringband (Melanesia)": 0.9, "Pacific Island Reggae (Polynesia/Melanesia)": 0.5 },
  Vanuatu: { "Stringband (Melanesia)": 0.9 },

  "Pacific Island Reggae (Polynesia/Melanesia)": { "Stringband (Melanesia)": 0.2 },
  "Stringband (Melanesia)": {},
  "Vude (Fiji)": {}
};

export const similarityMatrix: SimMatrix = makeBidirectional(seed);

// Boosts silencieux appliqués quand on NOTE un PAYS
export const cityStyleBoosts: { [country: string]: { [genre: string]: number } } = {
  // ---- Europe ----
  "United Kingdom": { "Grime (UK)": 0.6, "UK Garage (UK)": 0.5, "Drum & Bass (UK)": 0.5, "Britpop (UK)": 0.4 },
  Ireland: { "Celtic Folk (Ireland)": 0.7, "Irish Indie (Ireland)": 0.4 },
  France: { "French Touch (France)": 0.5, "Chanson (France)": 0.6, "Rap Français (France)": 0.4 },
  Spain: { "Flamenco (Spain)": 0.7, "Flamenco Pop (Spain)": 0.5 },
  Portugal: { "Fado (Portugal)": 0.7, "Kuduro (Lisboa)": 0.4 },
  Italy: { "Italo Disco (Italy)": 0.6, "Canzone (Italy)": 0.5 },
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
  "United States": { Rock: 0.4, Jazz: 0.4 },
  Canada: { Rock: 0.3, Jazz: 0.2, "Chanson Québécoise (Canada)": 0.6, "Canadian Indie (Canada)": 0.5, "Canadian Hip-Hop (Canada)": 0.4, "Celtic des Maritimes (Canada)": 0.4, "Canadian Country (Canada)": 0.4 },
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
  "French Guiana": { Zouk: 0.4 },

  // ---- Baltics ----
  Estonia: { "Baltic Choral (Estonia/Latvia/Lithuania)": 0.6, "Baltic Indie (Baltics)": 0.4 },
  Latvia: { "Baltic Choral (Estonia/Latvia/Lithuania)": 0.6, "Baltic Indie (Baltics)": 0.4 },
  Lithuania: { "Baltic Choral (Estonia/Latvia/Lithuania)": 0.6, "Baltic Indie (Baltics)": 0.4 },

  // ---- Ukraine / Belarus / Moldova ----
  Ukraine: { "Ukrainian Folk Fusion": 0.7 },
  Belarus: { "Post-Soviet Pop (Belarus/Moldova)": 0.6 },
  Moldova: { "Post-Soviet Pop (Belarus/Moldova)": 0.6 },

  // ---- Balkans ----
  Slovenia: { "Adriatic Pop (Slovenia/Croatia/Montenegro)": 0.6 },
  Croatia: { "Adriatic Pop (Slovenia/Croatia/Montenegro)": 0.6, "Klapa (Croatia)": 0.7 },
  "Bosnia and Herzegovina": { "Sevdah (Bosnia)": 0.7 },
  Serbia: { "Turbo-Folk (Serbia/Balkans)": 0.6, "Truba Brass (Serbia)": 0.6 },
  Montenegro: { "Adriatic Pop (Slovenia/Croatia/Montenegro)": 0.6 },
  NorthMacedonia: { "Macedonian Folk Pop": 0.6 },
  Albania: { "Albanian Pop/Rap": 0.6 },
  Kosovo: { "Kosovar Pop/Rap": 0.6 },

  // ---- Micro-états ----
  Andorra: { "Mediterranean Chanson (Andorra/Monaco/San Marino)": 0.6 },
  Monaco: { "Mediterranean Chanson (Andorra/Monaco/San Marino)": 0.6 },
  "San Marino": { "Mediterranean Chanson (Andorra/Monaco/San Marino)": 0.6 },

  // ---- Turkey ----
  Turkey: { "Anatolian Rock/Psych (Turkey)": 0.7, "Arabesk Pop (Turkey)": 0.6 },

  // ---- Moyen-Orient ----
  Israel: { "Mizrahi Pop (Israel)": 0.6 },
  Palestine: { "Dabke (Levant)": 0.6, "Tarab (Levant/Arab World)": 0.4 },
  Lebanon: { "Tarab (Levant/Arab World)": 0.6, "Dabke (Levant)": 0.5 },
  Syria: { "Dabke (Levant)": 0.6, "Tarab (Levant/Arab World)": 0.4 },
  Jordan: { "Dabke (Levant)": 0.6 },
  Iraq: { "Kurdish Folk": 0.5, "Tarab (Levant/Arab World)": 0.2 },
  Iran: { "Persian Traditional (Iran)": 0.7, "Iranian Pop/Rock (Iran)": 0.5 },
  "Saudi Arabia": { "Khaleeji Pop (Gulf)": 0.7 },
  "United Arab Emirates": { "Khaleeji Pop (Gulf)": 0.6 },
  Qatar: { "Khaleeji Pop (Gulf)": 0.6 },
  Bahrain: { "Khaleeji Pop (Gulf)": 0.6 },
  Kuwait: { "Khaleeji Pop (Gulf)": 0.6 },
  Oman: { "Khaleeji Pop (Gulf)": 0.6 },
  Yemen: { "Yemeni Hadrami": 0.7 },
  Armenia: { "Armenian Duduk/Folk": 0.7 },
  Azerbaijan: { "Azeri Mugham (Azerbaijan)": 0.7 },
  Georgia: { "Georgian Polyphony (Georgia)": 0.7 },

  // ---- Asie Centrale ----
  Kazakhstan: { "Q-Pop (Kazakhstan)": 0.6, "Kazakh Dombra Folk": 0.6 },
  Uzbekistan: { "Shashmaqam (Uzbekistan/Tajikistan)": 0.7 },
  Kyrgyzstan: { "Kyrgyz Komuz Folk": 0.7 },
  Tajikistan: { "Shashmaqam (Uzbekistan/Tajikistan)": 0.6, "Tajik Pamiri Folk": 0.6 },
  Turkmenistan: { "Turkmen Dutar Folk": 0.7 },
  Afghanistan: { "Afghan Ghazal/Rubab": 0.7 },

  // ---- East Asia ----
  Japan: { "J-Pop (Japan)": 0.6, "City Pop (Japan)": 0.6, "Enka (Japan)": 0.5 },
  "South Korea": { "K-Pop (Korea)": 0.7, "K-Hip-Hop (Korea)": 0.5, "Trot (Korea)": 0.5 },
  China: { "Mandopop (China/Taiwan)": 0.6, "Chinese Classical/Guqin (China)": 0.5 },
  HongKong: { "Cantopop (Hong Kong)": 0.7 },
  Taiwan: { "Mandopop (China/Taiwan)": 0.6, "Taipei Indie (Taiwan)": 0.5 },
  Mongolia: { "Mongolian Throat Singing (Mongolia)": 0.7 },

  // ---- South Asia ----
  India: { "Bollywood (India)": 0.6, "Hindustani Classical (India)": 0.5, "Carnatic (India)": 0.5, "Bhangra (Punjab)": 0.4 },
  Pakistan: { "Qawwali (Pakistan)": 0.6, "Coke Studio Pop (Pakistan)": 0.5 },
  Bangladesh: { "Baul (Bangladesh)": 0.6 },
  "Sri Lanka": { "Baila (Sri Lanka)": 0.6 },
  Nepal: { "Nepali Folk (Nepal)": 0.6 },
  Bhutan: { "Dranyen Folk (Bhutan)": 0.6 },
  Maldives: { "Boduberu (Maldives)": 0.6 },

  // ---- Southeast Asia ----
  Indonesia: { "Gamelan (Indonesia)": 0.7, "Dangdut (Indonesia)": 0.6, "Kroncong (Indonesia)": 0.5 },
  Malaysia: { "Malay Pop (Malaysia)": 0.6, "Nasyid (Malaysia)": 0.5 },
  Singapore: { "Mandopop SG (Singapore)": 0.6 },
  Philippines: { "OPM Pop/Rock (Philippines)": 0.6, "Kundiman (Philippines)": 0.5 },
  Thailand: { "Thai Pop (Thailand)": 0.6, "Luk Thung (Thailand)": 0.6, "Mor Lam (Isan)": 0.6 },
  Vietnam: { "V-Pop (Vietnam)": 0.6, "Nhạc Vàng (Vietnam)": 0.5 },
  Cambodia: { "Khmer Oldies (Cambodia)": 0.6, "Cambodian Rock (Cambodia)": 0.5 },
  Laos: { "Lao Lam (Laos)": 0.6 },
  Myanmar: { "Burmese Pop (Myanmar)": 0.6, "Hsaing Waing (Myanmar)": 0.5 },
  Brunei: { "Brunei Malay Pop (Brunei)": 0.6 },
  "Timor-Leste": { "Timor-Leste Tebe-Dai (Timor)": 0.6 },

  // ---- Afrique du Nord ----
  Morocco: { "Gnawa (Morocco)": 0.6, "Chaabi (Maghreb)": 0.4 },
  Algeria: { "Raï (Algeria)": 0.7, "Chaabi (Maghreb)": 0.4 },
  Tunisia: { "Malouf/Andalusi (Tunisia)": 0.7, "Chaabi (Maghreb)": 0.3 },
  Libya: { "Malouf/Andalusi (Tunisia)": 0.2 },
  Egypt: { "Mahraganat (Egypt)": 0.7, "Shaabi (Egypt)": 0.5 },

  // ---- Afrique de l'Ouest ----
  Nigeria: { "Afrobeats (Nigeria/Ghana)": 0.7, "Afrobeat (Nigeria, 70s)": 0.5, "Juju (Nigeria)": 0.5, "Fuji (Nigeria)": 0.5 },
  Ghana: { "Highlife (Ghana)": 0.7, "Hiplife (Ghana)": 0.6, "Afrobeats (Nigeria/Ghana)": 0.5 },
  Senegal: { "Mbalax (Senegal)": 0.7 },
  Mali: { "Desert Blues (Sahel)": 0.6 },
  "Ivory Coast": { "Coupé-Décalé (Côte d'Ivoire)": 0.7, "Zouglou (Côte d'Ivoire)": 0.6 },
  Niger: { "Desert Blues (Sahel)": 0.6 },
  "Cape Verde": { "Funaná/Morna (Cape Verde)": 0.7 },

  // ---- Afrique Centrale ----
  "DR Congo": { "Rumba Congolaise (DRC/RC)": 0.7, "Soukous/Ndombolo (DRC)": 0.6 },
  "Republic of the Congo": { "Rumba Congolaise (DRC/RC)": 0.6 },
  Cameroon: { "Makossa (Cameroon)": 0.6, "Bikutsi (Cameroon)": 0.6 },

  // ---- Afrique Australe ----
  "South Africa": { "Amapiano (South Africa)": 0.7, "Gqom (South Africa)": 0.6, "Kwaito (South Africa)": 0.6, "Township Jazz (South Africa)": 0.5, "Maskandi (South Africa)": 0.5 },
  Mozambique: { "Marrabenta (Mozambique)": 0.7 },
  Angola: { "Kuduro (Angola)": 0.7, "Kizomba/Semba (Angola)": 0.6 },
  Madagascar: { "Salegy/Tsapiky (Madagascar)": 0.7 },
  Mauritius: { "Sega (Mauritius)": 0.7 },

  // ---- Océanie ----
  Australia: { "Aussie Rock (Australia)": 0.6, "Aussie Indie (Australia)": 0.5, "Didgeridoo/Aboriginal Trad (Australia)": 0.5 },
  "New Zealand": { "Kiwi Pop/Indie (New Zealand)": 0.6, "Waiata Māori (New Zealand)": 0.5 },
  "Papua New Guinea": { "Stringband (Melanesia)": 0.6 },
  Fiji: { "Vude (Fiji)": 0.6, "Pacific Island Reggae (Polynesia/Melanesia)": 0.5 },
  Samoa: { "Pacific Island Reggae (Polynesia/Melanesia)": 0.6 },
  Tonga: { "Pacific Island Reggae (Polynesia/Melanesia)": 0.6 },
  "Solomon Islands": { "Stringband (Melanesia)": 0.6, "Pacific Island Reggae (Polynesia/Melanesia)": 0.4 },
  Vanuatu: { "Stringband (Melanesia)": 0.6 }
};
