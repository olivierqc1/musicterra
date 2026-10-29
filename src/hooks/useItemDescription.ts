// src/hooks/useItemDescription.ts
// Renvoie la description d'un genre, d'un pays ou d'une année dans la langue
// demandée.
// - Genres : ils arrivent sans description (voir src/data/genresLite.ts). On
//   télécharge /genre-desc/<slug>.json ({ fr, en, es?, ca? }), une seule fois.
// - Pays et années : français et anglais sont dans l'objet. L'espagnol et le
//   catalan sont dans /i18n/countries.<lang>.json et /i18n/years.<lang>.json,
//   téléchargés une seule fois au premier besoin.
// Sans traduction, le catalan se replie sur l'espagnol, puis l'anglais.
// Pour un genre, renvoie aussi son tempo habituel (bpm) quand il est connu.

import { useEffect, useState } from 'react';
import { type Lang } from '../i18n';

type Desc = { fr: string; en: string; es?: string; ca?: string; bpm?: [number, number] };

type Describable = {
  name?: string;
  year?: number;
  descriptionFr: string;
  descriptionEn: string;
  descSlug?: string | null;
};

const BASE = import.meta.env.BASE_URL;

// ── Cache générique de fichiers JSON ──────────────────────────
const jsonCache = new Map<string, unknown>();
const jsonPending = new Map<string, Promise<unknown>>();

function fetchJson<V>(url: string): Promise<V> {
  if (jsonCache.has(url)) return Promise.resolve(jsonCache.get(url) as V);
  const inFlight = jsonPending.get(url);
  if (inFlight) return inFlight as Promise<V>;
  const request = fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      jsonCache.set(url, data);
      return data;
    })
    .finally(() => jsonPending.delete(url));
  jsonPending.set(url, request);
  return request as Promise<V>;
}

const cachedJson = <V,>(url: string | null): V | undefined =>
  url ? (jsonCache.get(url) as V | undefined) : undefined;

// Texte dans la langue voulue, avec repli
function choose(lang: Lang, d: Desc): string {
  if (lang === 'fr') return d.fr || d.en;
  if (lang === 'en') return d.en || d.fr;
  if (lang === 'es') return d.es || d.en || d.fr;
  return d.ca || d.es || d.en || d.fr;
}

// Où se trouve le texte à télécharger pour cet élément et cette langue
function sourceOf(item: Describable | null | undefined, lang: Lang) {
  if (!item) return { url: null as string | null, key: '' };
  if (item.descSlug) return { url: `${BASE}genre-desc/${item.descSlug}.json`, key: '' };
  if (lang !== 'es' && lang !== 'ca') return { url: null, key: '' };
  if (typeof item.year === 'number') {
    return { url: `${BASE}i18n/years.${lang}.json`, key: String(item.year) };
  }
  return { url: `${BASE}i18n/countries.${lang}.json`, key: item.name || '' };
}

export function useItemDescription(
  item: Describable | null | undefined,
  language: Lang,
): { text: string; loading: boolean; bpm?: [number, number] } {
  const { url, key } = sourceOf(item, language);
  const [, setVersion] = useState(0);
  const [failedUrl, setFailedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!url || jsonCache.has(url)) return;
    let cancelled = false;
    fetchJson(url)
      .then(() => {
        if (!cancelled) setVersion((v) => v + 1);
      })
      .catch(() => {
        if (!cancelled) setFailedUrl(url);
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (!item) return { text: '', loading: false };
  const inline: Desc = { fr: item.descriptionFr, en: item.descriptionEn };

  // Genre : tout est dans le fichier téléchargé
  if (item.descSlug) {
    const desc = cachedJson<Desc>(url);
    if (desc) return { text: choose(language, desc), loading: false, bpm: desc.bpm };
    if (failedUrl === url) return { text: '', loading: false };
    return { text: '', loading: true };
  }

  // Pays ou année en français ou en anglais : déjà dans l'objet
  if (!url) return { text: choose(language, inline), loading: false };

  // Pays ou année en espagnol ou en catalan
  const table = cachedJson<Record<string, string>>(url);
  if (table) {
    const tr = table[key];
    return { text: choose(language, { ...inline, [language]: tr }), loading: false };
  }
  if (failedUrl === url) return { text: choose(language, inline), loading: false };
  return { text: '', loading: true };
}
