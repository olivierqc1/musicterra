// src/hooks/useItemDescription.ts
// Renvoie la description d'un genre, d'un pays ou d'une année dans la langue
// demandée. Les genres arrivent sans description (voir src/data/genresLite.ts) :
// on télécharge alors /genre-desc/<slug>.json, une seule fois par genre.

import { useEffect, useState } from 'react';

type Lang = 'fr' | 'en';
type Desc = { fr: string; en: string };

type Describable = {
  descriptionFr: string;
  descriptionEn: string;
  descSlug?: string | null;
};

const cache = new Map<string, Desc>();
const pending = new Map<string, Promise<Desc>>();

function fetchDescription(slug: string): Promise<Desc> {
  const cached = cache.get(slug);
  if (cached) return Promise.resolve(cached);
  const inFlight = pending.get(slug);
  if (inFlight) return inFlight;

  const request = fetch(`${import.meta.env.BASE_URL}genre-desc/${slug}.json`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json() as Promise<Desc>;
    })
    .then((desc) => {
      cache.set(slug, desc);
      return desc;
    })
    .finally(() => {
      pending.delete(slug);
    });

  pending.set(slug, request);
  return request;
}

export function useItemDescription(
  item: Describable | null | undefined,
  language: Lang,
): { text: string; loading: boolean } {
  const inline = item ? (language === 'fr' ? item.descriptionFr : item.descriptionEn) : '';
  const slug = !inline && item?.descSlug ? item.descSlug : null;

  const [loaded, setLoaded] = useState<{ slug: string; desc: Desc } | null>(() => {
    const hit = slug ? cache.get(slug) : undefined;
    return slug && hit ? { slug, desc: hit } : null;
  });
  const [failedSlug, setFailedSlug] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    fetchDescription(slug)
      .then((desc) => {
        if (!cancelled) setLoaded({ slug, desc });
      })
      .catch(() => {
        if (!cancelled) setFailedSlug(slug);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (inline) return { text: inline, loading: false };
  if (!slug) return { text: '', loading: false };
  if (loaded && loaded.slug === slug) return { text: loaded.desc[language], loading: false };
  if (failedSlug === slug) return { text: '', loading: false };
  return { text: '', loading: true };
}
