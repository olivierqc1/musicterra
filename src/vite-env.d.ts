/// <reference types="vite/client" />

// Module généré par scripts/genres-split-plugin.mjs à partir de src/data/genres.ts :
// mêmes genres, mais descriptionFr / descriptionEn vides. La description se
// charge à la demande via descSlug (voir src/hooks/useItemDescription.ts).
declare module 'virtual:genres-lite' {
  import type { Item } from './types';
  export const genres: Item[];
}
