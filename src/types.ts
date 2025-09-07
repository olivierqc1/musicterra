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
  cities?: City[];     // 👈 nouveau
  spotify?: string;
  image?: string;
}

