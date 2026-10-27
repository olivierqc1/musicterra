// src/lib/tasteProfile.ts
// Calcule le « portrait musical » d'un utilisateur à partir de ses notes
// (localStorage, aucune requête réseau) :
// - ses grandes familles de styles (jazz, folk, metal…), déduites des mots
//   dans les noms des genres qu'il a aimés ;
// - ses coins du monde, déduits des pays et régions dans ces noms ;
// - des genres à écouter ensuite, via la matrice de similarité ;
// - des pays à approfondir, qu'il n'a pas encore notés.
// Tout est recalculé à chaque appel : c'est rapide (quelques milliers de
// genres au plus) et toujours à jour avec les dernières notes.

import { genres } from "../data/genresLite";
import { countries } from "../data/countries";
import { matrix } from "../data/matrix";

export interface RatedItem {
  type: "genre" | "country" | "year";
  name: string;
  rating: number;
}

export interface FamilyScore {
  key: string;
  fr: string;
  en: string;
  share: number; // part du total, entre 0 et 1
  examples: string[]; // genres notés de cette famille, du mieux noté au moins bien
}

export interface PlaceScore {
  country: string; // nom tel qu'il apparaît dans countries.ts
  score: number;
  examples: string[];
  rated: boolean; // le pays lui-même a déjà été noté
}

export interface Suggestion {
  name: string;
  because: string; // genre noté qui a mené à cette suggestion
  becauseRating: number;
  score: number;
}

export interface TasteProfile {
  rated: RatedItem[];
  genresRated: number;
  average: number;
  favorite: RatedItem | null;
  top: RatedItem[];
  families: FamilyScore[];
  places: PlaceScore[];
  suggestions: Suggestion[];
  countriesToExplore: PlaceScore[];
}

// ── Lecture des notes ──────────────────────────────────────────
export function readRatings(): RatedItem[] {
  const best = new Map<string, RatedItem>();
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith("rating_")) continue;
      const parts = key.split("_");
      if (parts.length < 4) continue;
      const type = parts[2];
      if (type !== "genre" && type !== "country" && type !== "year") continue;
      const name = parts.slice(3).join("_");
      const rating = parseInt(localStorage.getItem(key) || "0", 10);
      if (!rating) continue;
      const id = `${type}:${name.toLowerCase()}`;
      const prev = best.get(id);
      if (!prev || rating > prev.rating) best.set(id, { type, name, rating });
    }
  } catch {
    /* localStorage indisponible */
  }
  return [...best.values()];
}

// Poids d'une note : on ne compte que ce qui a plu (6/10 et plus),
// et un 10 pèse cinq fois plus qu'un 6.
const weight = (rating: number) => Math.max(0, rating - 5);

// ── Familles de styles ─────────────────────────────────────────
const FAMILIES: { key: string; fr: string; en: string; words: string[] }[] = [
  { key: "jazz", fr: "le jazz", en: "jazz", words: ["jazz", "bebop", "swing", "big band", "bossa nova"] },
  { key: "folk", fr: "le folk et les musiques traditionnelles", en: "folk and traditional music", words: ["folk", "traditional", "trad", "celtic", "bluegrass", "americana", "fado", "flamenco", "rebetiko", "polka"] },
  { key: "metal", fr: "le metal", en: "metal", words: ["metal", "metalcore", "deathcore", "grindcore", "doom", "sludge", "djent", "thrash"] },
  { key: "punk", fr: "le punk et le hardcore", en: "punk and hardcore", words: ["punk", "hardcore", "emo", "screamo", "oi"] },
  { key: "rock", fr: "le rock", en: "rock", words: ["rock", "grunge", "shoegaze", "garage", "psychedelic", "psych", "post-rock", "britpop"] },
  { key: "indie", fr: "l'indie", en: "indie", words: ["indie", "lo-fi", "lofi", "alternative", "alt"] },
  { key: "hiphop", fr: "le hip hop", en: "hip hop", words: ["hip hop", "hip-hop", "rap", "drill", "trap", "grime", "boom bap"] },
  { key: "electronic", fr: "l'électronique", en: "electronic music", words: ["electronic", "electronica", "techno", "house", "trance", "edm", "dubstep", "drum and bass", "dnb", "jungle", "ambient", "idm", "synth", "synthwave", "electro", "breakbeat", "rave"] },
  { key: "pop", fr: "la pop", en: "pop", words: ["pop", "k-pop", "j-pop", "c-pop", "dance pop", "city pop"] },
  { key: "classical", fr: "le classique", en: "classical music", words: ["classical", "baroque", "opera", "orchestral", "symphonic", "chamber music", "choral", "minimalism"] },
  { key: "soul", fr: "la soul, le funk et le R&B", en: "soul, funk and R&B", words: ["soul", "funk", "r&b", "rnb", "motown", "disco", "gospel", "neo soul"] },
  { key: "blues", fr: "le blues", en: "blues", words: ["blues", "delta blues"] },
  { key: "reggae", fr: "le reggae et le ska", en: "reggae and ska", words: ["reggae", "dub", "ska", "dancehall", "rocksteady"] },
  { key: "latin", fr: "les musiques latines", en: "Latin music", words: ["cumbia", "salsa", "tango", "samba", "reggaeton", "bachata", "merengue", "mpb", "forro", "chicha", "latin", "bolero", "vallenato"] },
  { key: "african", fr: "les musiques africaines", en: "African music", words: ["afrobeat", "afrobeats", "highlife", "mbalax", "soukous", "amapiano", "kwaito", "gnawa", "rai", "afro"] },
  { key: "country", fr: "la country", en: "country", words: ["country", "honky tonk", "western"] },
  { key: "experimental", fr: "l'expérimental", en: "experimental music", words: ["experimental", "noise", "avant-garde", "avant garde", "drone", "industrial"] },
];

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const wordRe = (w: string) => new RegExp(`(^|[^a-z])${escapeRe(w)}([^a-z]|$)`, "i");
const FAMILY_RES = FAMILIES.map((f) => ({ ...f, res: f.words.map(wordRe) }));

export function familiesOf(genreName: string): string[] {
  const n = genreName.toLowerCase();
  return FAMILY_RES.filter((f) => f.res.some((re) => re.test(n))).map((f) => f.key);
}

// ── Lieux dans les noms de genres ──────────────────────────────
// Adjectifs, régions et villes qu'on trouve dans les noms des genres,
// rattachés aux pays de countries.ts.
const PLACE_WORDS: Record<string, string[]> = {
  "United States": [
    "american", "usa", "nyc", "new york", "brooklyn", "chicago", "detroit", "atlanta", "houston", "dallas", "austin", "memphis", "nashville", "new orleans", "boston", "philly", "philadelphia", "seattle", "portland", "oakland", "bay area", "los angeles", "san diego", "miami", "baltimore", "dc", "pittsburgh", "minneapolis", "denver", "phoenix", "okc", "oklahoma", "texas", "texan", "california", "florida", "ohio", "georgia", "alabama", "mississippi", "louisiana", "kentucky", "tennessee", "virginia", "west virginia", "carolina", "arkansas", "missouri", "kansas", "iowa", "idaho", "utah", "nevada", "arizona", "colorado", "montana", "wyoming", "oregon", "washington", "alaska", "hawaii", "hawaiian", "maine", "vermont", "michigan", "wisconsin", "indiana", "illinois", "nebraska", "dakota", "new jersey", "connecticut", "delaware", "maryland", "appalachian", "midwest",
  ],
  Canada: ["canadian", "quebec", "québécois", "quebecois", "montreal", "toronto", "vancouver", "ottawa", "calgary", "edmonton", "winnipeg", "saskatchewan", "alberta", "ontario", "manitoba", "nova scotia", "acadian", "newfoundland"],
  "United Kingdom": ["british", "uk", "english", "england", "scottish", "scotland", "welsh", "wales", "london", "manchester", "liverpool", "birmingham", "bristol", "leeds", "sheffield", "glasgow", "edinburgh", "northern irish", "cornish"],
  Ireland: ["irish", "ireland", "dublin", "cork", "galway"],
  France: ["french", "france", "paris", "parisian", "breton", "occitan", "corsican", "marseille", "lyon"],
  Spain: ["spanish", "spain", "catalan", "basque", "galician", "andalusian", "madrid", "barcelona", "valencian", "asturian"],
  Portugal: ["portuguese", "portugal", "lisbon", "porto"],
  Italy: ["italian", "italy", "neapolitan", "sicilian", "sardinian", "milan", "rome", "roman", "torino", "napoli"],
  Germany: ["german", "germany", "berlin", "hamburg", "munich", "bavarian", "cologne", "kraut"],
  Netherlands: ["dutch", "netherlands", "amsterdam", "rotterdam", "frisian"],
  Belgium: ["belgian", "belgium", "flemish", "brussels", "antwerp"],
  Switzerland: ["swiss", "switzerland", "appenzeller", "zurich", "geneva", "bernese"],
  Austria: ["austrian", "austria", "vienna", "viennese", "tyrolean"],
  Denmark: ["danish", "denmark", "copenhagen", "faroese"],
  Sweden: ["swedish", "sweden", "stockholm", "gothenburg"],
  Norway: ["norwegian", "norway", "oslo", "bergen"],
  Finland: ["finnish", "finland", "helsinki", "sami"],
  Iceland: ["icelandic", "iceland", "reykjavik"],
  Poland: ["polish", "poland", "warsaw", "krakow"],
  Czechia: ["czech", "czechia", "prague", "moravian"],
  Slovakia: ["slovak", "slovakia", "bratislava"],
  Hungary: ["hungarian", "hungary", "budapest"],
  Romania: ["romanian", "romania", "bucharest"],
  Bulgaria: ["bulgarian", "bulgaria", "sofia"],
  Greece: ["greek", "greece", "athens", "cretan"],
  Ukraine: ["ukrainian", "ukraine", "kyiv", "kiev"],
  Belarus: ["belarusian", "belarus", "minsk"],
  Estonia: ["estonian", "estonia"],
  Latvia: ["latvian", "latvia"],
  Lithuania: ["lithuanian", "lithuania"],
  Slovenia: ["slovenian", "slovene", "slovenia"],
  Croatia: ["croatian", "croatia", "zagreb"],
  Serbia: ["serbian", "serbia", "belgrade"],
  "Bosnia and Herzegovina": ["bosnian", "bosnia"],
  "North Macedonia": ["macedonian"],
  Albania: ["albanian", "albania"],
  Turkey: ["turkish", "turkey", "istanbul", "anatolian"],
  Israel: ["israeli", "israel", "hebrew"],
  Lebanon: ["lebanese", "lebanon", "beirut"],
  Iran: ["iranian", "iran", "persian"],
  Armenia: ["armenian", "armenia"],
  Georgia: ["georgian"],
  Kazakhstan: ["kazakh", "kazakhstan"],
  Japan: ["japanese", "japan", "j-pop", "j-rock", "tokyo", "osaka", "okinawan", "kyoto"],
  "South Korea": ["korean", "korea", "k-pop", "k-indie", "seoul"],
  China: ["chinese", "china", "c-pop", "mandopop", "beijing", "shanghai", "cantonese"],
  "Hong Kong": ["hong kong", "cantopop"],
  Taiwan: ["taiwanese", "taiwan", "taipei"],
  Mongolia: ["mongolian", "mongolia", "tuvan"],
  India: ["indian", "india", "bollywood", "hindustani", "carnatic", "punjabi", "bengali", "tamil", "telugu", "kannada", "marathi", "gujarati", "mumbai", "delhi", "kolkata", "goa"],
  Pakistan: ["pakistani", "pakistan", "qawwali", "lahore", "karachi"],
  Bangladesh: ["bangladeshi", "bangladesh", "dhaka"],
  "Sri Lanka": ["sri lankan", "sri lanka", "sinhala"],
  Nepal: ["nepali", "nepalese", "nepal"],
  Indonesia: ["indonesian", "indonesia", "jakarta", "javanese", "balinese", "sundanese", "dangdut", "bandung"],
  Malaysia: ["malaysian", "malaysia", "malay"],
  Singapore: ["singaporean", "singapore"],
  Philippines: ["filipino", "philippines", "pinoy", "manila", "opm"],
  Thailand: ["thai", "thailand", "bangkok", "luk thung", "mor lam"],
  Vietnam: ["vietnamese", "vietnam", "v-pop", "saigon", "hanoi"],
  Morocco: ["moroccan", "morocco", "gnawa", "casablanca"],
  Algeria: ["algerian", "algeria", "rai", "kabyle"],
  Tunisia: ["tunisian", "tunisia"],
  Egypt: ["egyptian", "egypt", "cairo", "mahraganat"],
  Nigeria: ["nigerian", "nigeria", "lagos", "yoruba", "igbo", "afrobeats"],
  Ghana: ["ghanaian", "ghana", "accra", "highlife"],
  Senegal: ["senegalese", "senegal", "dakar", "mbalax"],
  Mali: ["malian", "mali", "bamako", "wassoulou"],
  "Ivory Coast": ["ivorian", "ivory coast", "coupe-decale", "zouglou"],
  "Cape Verde": ["cape verdean", "cape verde", "morna", "funana"],
  "DR Congo": ["congolese", "congo", "kinshasa", "soukous", "rumba congolaise"],
  Cameroon: ["cameroonian", "cameroon", "makossa", "bikutsi"],
  "South Africa": ["south african", "south africa", "johannesburg", "cape town", "durban", "amapiano", "kwaito", "gqom", "zulu"],
  Zimbabwe: ["zimbabwean", "zimbabwe", "chimurenga"],
  Angola: ["angolan", "angola", "kuduro", "kizomba", "semba"],
  Mozambique: ["mozambican", "mozambique", "marrabenta"],
  Madagascar: ["malagasy", "madagascar"],
  Tanzania: ["tanzanian", "tanzania", "bongo flava", "taarab"],
  Kenya: ["kenyan", "kenya", "nairobi", "benga"],
  Uganda: ["ugandan", "uganda"],
  Mexico: ["mexican", "mexico", "norteno", "norteño", "banda", "mariachi", "corrido", "corridos", "ranchera"],
  Guatemala: ["guatemalan", "guatemala"],
  Cuba: ["cuban", "cuba", "havana", "son cubano", "timba"],
  "Puerto Rico": ["puerto rican", "puerto rico", "boricua"],
  "Dominican Republic": ["dominican", "bachata", "merengue", "dembow"],
  Jamaica: ["jamaican", "jamaica", "kingston", "dancehall", "rocksteady"],
  Haiti: ["haitian", "haiti", "kompa"],
  "Trinidad & Tobago": ["trinidadian", "trinidad", "soca", "calypso"],
  Argentina: ["argentine", "argentinian", "argentina", "buenos aires", "rioplatense", "cuarteto"],
  Chile: ["chilean", "chile", "santiago"],
  Colombia: ["colombian", "colombia", "bogota", "medellin", "champeta", "vallenato", "cumbia colombiana"],
  Peru: ["peruvian", "peru", "lima", "chicha", "huayno"],
  Bolivia: ["bolivian", "bolivia"],
  Ecuador: ["ecuadorian", "ecuador"],
  Uruguay: ["uruguayan", "uruguay", "candombe"],
  Venezuela: ["venezuelan", "venezuela", "joropo"],
  Brazil: ["brazilian", "brazil", "brasil", "mpb", "samba", "bossa nova", "forro", "forró", "sertanejo", "funk carioca", "baile funk", "axe", "sao paulo", "rio de janeiro", "bahia", "pagode"],
  Australia: ["australian", "australia", "aussie", "sydney", "melbourne", "brisbane", "perth", "adelaide"],
  "New Zealand": ["kiwi", "new zealand", "nz", "maori", "auckland", "wellington"],
};
const PLACE_RES: [string, RegExp][] = [];
for (const [country, words] of Object.entries(PLACE_WORDS)) {
  // les noms les plus longs d'abord : « west virginia » avant « virginia »
  for (const w of [...words].sort((a, b) => b.length - a.length)) PLACE_RES.push([country, wordRe(w)]);
}

export function placesOf(genreName: string): string[] {
  const n = genreName.toLowerCase();
  const out = new Set<string>();
  for (const [country, re] of PLACE_RES) if (re.test(n)) out.add(country);
  return [...out];
}

// ── Index des genres et de la matrice (insensible à la casse) ──
let genreIndex: Map<string, string> | null = null;
let matrixIndex: Map<string, string> | null = null;
function genreByLower() {
  if (!genreIndex) genreIndex = new Map(genres.map((g) => [g.name.toLowerCase(), g.name]));
  return genreIndex;
}
function matrixKey(name: string): string | null {
  if (!matrixIndex) matrixIndex = new Map(Object.keys(matrix).map((k) => [k.toLowerCase(), k]));
  return matrixIndex.get(name.toLowerCase()) ?? null;
}

// ── Portrait complet ───────────────────────────────────────────
export function buildTasteProfile(rated: RatedItem[] = readRatings()): TasteProfile {
  const ratedGenres = rated.filter((r) => r.type === "genre");
  const sorted = [...ratedGenres].sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name));
  const average = ratedGenres.length
    ? ratedGenres.reduce((s, r) => s + r.rating, 0) / ratedGenres.length
    : 0;

  // Familles
  const famScore = new Map<string, number>();
  const famExamples = new Map<string, string[]>();
  for (const r of sorted) {
    const w = weight(r.rating);
    if (!w) continue;
    for (const key of familiesOf(r.name)) {
      famScore.set(key, (famScore.get(key) || 0) + w);
      famExamples.set(key, [...(famExamples.get(key) || []), r.name]);
    }
  }
  const famTotal = [...famScore.values()].reduce((a, b) => a + b, 0) || 1;
  const families: FamilyScore[] = FAMILIES.filter((f) => famScore.has(f.key))
    .map((f) => ({
      key: f.key,
      fr: f.fr,
      en: f.en,
      share: (famScore.get(f.key) || 0) / famTotal,
      examples: famExamples.get(f.key) || [],
    }))
    .sort((a, b) => b.share - a.share);

  // Coins du monde
  const ratedCountries = new Set(
    rated.filter((r) => r.type === "country").map((r) => r.name.toLowerCase())
  );
  const placeScore = new Map<string, number>();
  const placeExamples = new Map<string, string[]>();
  for (const r of sorted) {
    const w = weight(r.rating);
    if (!w) continue;
    for (const c of placesOf(r.name)) {
      placeScore.set(c, (placeScore.get(c) || 0) + w);
      placeExamples.set(c, [...(placeExamples.get(c) || []), r.name]);
    }
  }
  // Les pays notés directement comptent aussi
  for (const r of rated) {
    if (r.type !== "country" || !weight(r.rating)) continue;
    placeScore.set(r.name, (placeScore.get(r.name) || 0) + weight(r.rating));
  }
  const knownCountries = new Set(countries.map((c) => c.name));
  const places: PlaceScore[] = [...placeScore.entries()]
    .filter(([c]) => knownCountries.has(c))
    .map(([country, score]) => ({
      country,
      score,
      examples: placeExamples.get(country) || [],
      rated: ratedCountries.has(country.toLowerCase()),
    }))
    .sort((a, b) => b.score - a.score || a.country.localeCompare(b.country));

  // Genres à écouter ensuite : voisins dans la matrice des genres aimés
  const ratedGenreNames = new Set(ratedGenres.map((r) => r.name.toLowerCase()));
  const byLower = genreByLower();
  const sugg = new Map<string, Suggestion>();
  for (const r of sorted) {
    const w = weight(r.rating);
    if (!w) continue;
    const key = matrixKey(r.name);
    if (!key) continue;
    for (const [neighbor, sim] of Object.entries(matrix[key])) {
      const real = byLower.get(neighbor.toLowerCase());
      if (!real || ratedGenreNames.has(real.toLowerCase())) continue;
      const score = w * sim;
      const prev = sugg.get(real);
      if (prev) {
        prev.score += score;
      } else {
        sugg.set(real, { name: real, because: r.name, becauseRating: r.rating, score });
      }
    }
  }
  // Pas plus de deux suggestions issues du même genre, pour varier
  const perSource = new Map<string, number>();
  const suggestions: Suggestion[] = [];
  for (const s of [...sugg.values()].sort((a, b) => b.score - a.score)) {
    const n = perSource.get(s.because) || 0;
    if (n >= 2) continue;
    perSource.set(s.because, n + 1);
    suggestions.push(s);
    if (suggestions.length >= 6) break;
  }

  return {
    rated,
    genresRated: ratedGenres.length,
    average,
    favorite: sorted[0] || null,
    top: sorted.slice(0, 5),
    families: families.slice(0, 4),
    places: places.slice(0, 6),
    suggestions,
    countriesToExplore: places.filter((p) => !p.rated).slice(0, 4),
  };
}
