// Types
export type GenreItem = {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  subgenres?: string[];
  artists: string[];
  spotify?: string;
  image?: string;
  /** Rempli par genres-split : clé de /genre-desc/<slug>.json */
  descSlug?: string | null;
};

export type CountryItem = {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  regions?: string[];
  artists: string[];
  spotify?: string;
  image?: string;
  cities?: any[];
};

export type YearItem = {
  name: string;
  year: number;
  descriptionFr: string;
  descriptionEn: string;
  spotify?: string;
  image?: string;
};

export type Item = GenreItem | CountryItem | YearItem;

export const isGenre = (i: Item): i is GenreItem => "subgenres" in i;
export const isCountry = (i: Item): i is CountryItem => "regions" in i;
export const isYear = (i: Item): i is YearItem => "year" in i;
