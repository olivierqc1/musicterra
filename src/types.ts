export interface City {
  name: string;
  styles?: string[];
  artists?: string[];
  spotify?: string;
  image?: string;
}

/** Note sur la scène musicale d'une ville (countries.ts) */
export interface CityStyle {
  city: string;
  noteFr?: string;
  noteEn?: string;
}

export interface Item {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  artists?: string[];
  subgenres?: string[];
  regions?: string[];
  cities?: City[];
  cityStyles?: CityStyle[];
  spotify?: string;
  image?: string;
  origin?: string;
  relatedCountries?: string[];
  year?: number;
  /** Rempli par genres-split : clé de /genre-desc/<slug>.json */
  descSlug?: string | null;
}