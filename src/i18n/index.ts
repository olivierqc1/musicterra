// src/i18n/index.ts
// Langues de l'interface : français, anglais, espagnol, catalan.
//
// Dans le code, on écrit toujours t("texte français", "English text").
// Pour l'espagnol et le catalan, la traduction est cherchée dans
// src/i18n/dict.ts à partir du texte français. Un texte qui contient des
// variables (`${n} genres`) ne peut pas être cherché dans le dictionnaire :
// on passe alors l'espagnol et le catalan en 3e et 4e arguments.
// Sans traduction, le catalan se replie sur l'espagnol, puis l'anglais.

import { DICT } from "./dict";

export type Lang = "fr" | "en" | "es" | "ca";
export const LANGS: Lang[] = ["fr", "en", "es", "ca"];

export const LANG_LABELS: Record<Lang, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  ca: "Català",
};

export const isLang = (x: unknown): x is Lang =>
  typeof x === "string" && (LANGS as string[]).includes(x);

export type T = (fr: string, en: string, es?: string, ca?: string) => string;

export function makeT(lang: Lang): T {
  return (fr, en, es, ca) => {
    if (lang === "fr") return fr;
    if (lang === "en") return en;
    const d = DICT[fr];
    if (lang === "es") return es ?? d?.[0] ?? en;
    return ca ?? d?.[1] ?? es ?? d?.[0] ?? en;
  };
}

// Choisit la bonne valeur dans un objet { fr, en, es?, ca? }
export function pick<V>(lang: Lang, v: { fr: V; en: V; es?: V; ca?: V }): V {
  if (lang === "es") return v.es ?? v.en;
  if (lang === "ca") return v.ca ?? v.es ?? v.en;
  return v[lang];
}

export const localeOf = (lang: Lang) =>
  ({ fr: "fr-FR", en: "en-GB", es: "es-ES", ca: "ca-ES" })[lang];

// Langue au premier passage : celle du navigateur si on la connaît
export function detectLang(): Lang {
  try {
    const prefs = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const p of prefs) {
      const code = (p || "").slice(0, 2).toLowerCase();
      if (isLang(code)) return code;
      if (code === "gl" || code === "eu") return "es";
    }
  } catch {
    /* hors navigateur */
  }
  return "en";
}
