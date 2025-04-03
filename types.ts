// types.ts
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
