// src/i18n/countryNames.ts
// Nom d'un pays dans la langue de l'interface. Les pays de countries.ts sont
// identifiés par leur nom anglais ; on passe par leur code ISO et
// Intl.DisplayNames, fourni par le navigateur. Si le code ou la traduction
// manque, on garde le nom anglais.

import type { Lang } from "./index";

const ISO: Record<string, string> = {
  France: "FR", Guatemala: "GT", Honduras: "HN", "Costa Rica": "CR", Nicaragua: "NI",
  "El Salvador": "SV", Panama: "PA", Argentina: "AR", Chile: "CL", Colombia: "CO",
  Peru: "PE", Bolivia: "BO", Ecuador: "EC", Paraguay: "PY", Uruguay: "UY",
  Venezuela: "VE", Guyana: "GY", Suriname: "SR", "French Guiana": "GF", Jamaica: "JM",
  "Trinidad & Tobago": "TT", Barbados: "BB", Bahamas: "BS", Cuba: "CU",
  "Dominican Republic": "DO", Haiti: "HT", "Puerto Rico": "PR", Guadeloupe: "GP",
  Martinique: "MQ", "Saint Lucia": "LC", Grenada: "GD", "Antigua & Barbuda": "AG",
  "Curaçao": "CW", "United Kingdom": "GB", Ireland: "IE", Spain: "ES", Portugal: "PT",
  Italy: "IT", Germany: "DE", Netherlands: "NL", Belgium: "BE", Luxembourg: "LU",
  Switzerland: "CH", Austria: "AT", Denmark: "DK", Sweden: "SE", Norway: "NO",
  Finland: "FI", Iceland: "IS", Poland: "PL", Czechia: "CZ", Slovakia: "SK",
  Hungary: "HU", Romania: "RO", Bulgaria: "BG", Greece: "GR", Malta: "MT", Cyprus: "CY",
  Estonia: "EE", Latvia: "LV", Lithuania: "LT", Ukraine: "UA", Belarus: "BY",
  Moldova: "MD", Slovenia: "SI", Croatia: "HR", "Bosnia and Herzegovina": "BA",
  Serbia: "RS", Montenegro: "ME", "North Macedonia": "MK", Albania: "AL", Kosovo: "XK",
  Andorra: "AD", Monaco: "MC", "San Marino": "SM", Liechtenstein: "LI",
  "Vatican City": "VA", Turkey: "TR", Israel: "IL", Palestine: "PS", Lebanon: "LB",
  Syria: "SY", Jordan: "JO", Iraq: "IQ", Iran: "IR", "Saudi Arabia": "SA",
  "United Arab Emirates": "AE", Qatar: "QA", Bahrain: "BH", Kuwait: "KW", Oman: "OM",
  Yemen: "YE", Armenia: "AM", Azerbaijan: "AZ", Georgia: "GE", Kazakhstan: "KZ",
  Uzbekistan: "UZ", Kyrgyzstan: "KG", Tajikistan: "TJ", Turkmenistan: "TM",
  Afghanistan: "AF", Japan: "JP", "South Korea": "KR", China: "CN", Taiwan: "TW",
  Mongolia: "MN", India: "IN", Pakistan: "PK", Bangladesh: "BD", "Sri Lanka": "LK",
  Nepal: "NP", Bhutan: "BT", Maldives: "MV", Indonesia: "ID", Malaysia: "MY",
  Singapore: "SG", Philippines: "PH", Thailand: "TH", Vietnam: "VN", Cambodia: "KH",
  Laos: "LA", Myanmar: "MM", Brunei: "BN", "Timor-Leste": "TL", Morocco: "MA",
  Algeria: "DZ", Tunisia: "TN", Libya: "LY", Egypt: "EG", Nigeria: "NG", Ghana: "GH",
  Senegal: "SN", Mali: "ML", "Ivory Coast": "CI", Guinea: "GN", Gambia: "GM", Benin: "BJ",
  Togo: "TG", "Burkina Faso": "BF", Niger: "NE", "Cape Verde": "CV", "DR Congo": "CD",
  "Republic of the Congo": "CG", Cameroon: "CM", Gabon: "GA", "South Africa": "ZA",
  Zimbabwe: "ZW", Zambia: "ZM", Namibia: "NA", Botswana: "BW", Mozambique: "MZ",
  Angola: "AO", Madagascar: "MG", Mauritius: "MU", Tanzania: "TZ", Kenya: "KE",
  Uganda: "UG", Rwanda: "RW", "United States": "US", Brazil: "BR", Canada: "CA",
  Australia: "AU", "New Zealand": "NZ", "Papua New Guinea": "PG", Fiji: "FJ",
  Samoa: "WS", Tonga: "TO", "Solomon Islands": "SB", Vanuatu: "VU",
};

// Noms donnés à la main : le navigateur n'a pas de code pour le Kosovo partout
const MANUAL: Record<string, Partial<Record<Lang, string>>> = {
  Kosovo: { fr: "Kosovo", es: "Kosovo", ca: "Kosovo" },
};

const cache = new Map<string, Intl.DisplayNames | null>();
function namer(lang: Lang): Intl.DisplayNames | null {
  if (!cache.has(lang)) {
    try {
      cache.set(lang, new Intl.DisplayNames([lang], { type: "region" }));
    } catch {
      cache.set(lang, null);
    }
  }
  return cache.get(lang) ?? null;
}

export function countryLabel(name: string, lang: Lang): string {
  if (lang === "en") return name;
  const manual = MANUAL[name]?.[lang];
  if (manual) return manual;
  const code = ISO[name];
  if (!code) return name;
  try {
    const out = namer(lang)?.of(code);
    return out && out !== code ? out : name;
  } catch {
    return name;
  }
}
