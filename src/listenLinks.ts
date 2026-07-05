// src/listenLinks.ts
// Génère les liens d'écoute multi-plateformes pour un genre.
// Aucune API requise : ce sont des URLs de recherche construites depuis le nom.

export interface ListenLink {
  label: string;
  emoji: string;
  url: string;
}

export function getListenLinks(name: string, spotify?: string): ListenLink[] {
  const q = encodeURIComponent(name);
  const qMusic = encodeURIComponent(`${name} music`);

  return [
    {
      label: "Spotify",
      emoji: "🎧",
      url: spotify || `https://open.spotify.com/search/${q}`,
    },
    {
      label: "YouTube",
      emoji: "▶️",
      url: `https://www.youtube.com/results?search_query=${qMusic}`,
    },
    {
      label: "YT Music",
      emoji: "🎵",
      url: `https://music.youtube.com/search?q=${qMusic}`,
    },
    {
      label: "Bandcamp",
      emoji: "🎸",
      url: `https://bandcamp.com/search?q=${q}`,
    },
    {
      label: "Deezer",
      emoji: "🎶",
      url: `https://www.deezer.com/search/${q}`,
    },
  ];
}
