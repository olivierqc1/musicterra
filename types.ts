// types.ts
export interface UserPreferences {
  favoriteGenres: string[];
  favoriteCountries: string[];
  ratings: Record<string, number>;
  location: string | null;
  searchHistory?: string[];
  theme?: 'dark' | 'light';
  interactionHistory?: {
    timestamp: number;
    type: 'view' | 'like' | 'search';
    itemType: 'genre' | 'country';
    itemName: string;
  }[];
  spotifyConnected?: boolean;
}

export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string;
}

export interface Variant {
  name: string;
  period: string;
  description?: string;
  spotifyLink?: string;
  spotifyId?: string;
  subgenres?: any[];
  relatedGenres?: string[];
  artists?: Artist[];
}

export interface Artist {
  id: string;
  name: string;
  image?: string;
  spotifyId?: string;
}

export interface Genre {
  name: string;
  period: string;
  variants: Variant[];
  popularity?: number;
  tags?: string[];
  image?: string;
}

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

export
