export interface City {
  name: string;
  styles?: string[];
  artists?: string[];
  spotify?: string;
  image?: string;
}

export interface Item {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  artists?: string[];
  subgenres?: string[];
  regions?: string[];
  cities?: City[];
  spotify?: string;
  image?: string;
  origin?: string;
  relatedCountries?: string[];
  year?: number;
  /** Rempli par genres-split : clé de /genre-desc/<slug>.json */
  descSlug?: string | null;
}