// src/theme.ts
// Palette et typographie de MusicTerra. Toute couleur de l'app vient d'ici
// (styles en ligne, canvas) ou des variables CSS équivalentes dans
// index.css (classes Tailwind). Changer une couleur ici = la changer partout.

export const C = {
  paper: "#F4F6FB", // fond de page
  surface: "#FFFFFF", // panneaux
  soft: "#EEF1F8", // fonds secondaires, pistes, puces
  line: "#DFE3EF", // bordures
  ink: "#151B3B", // texte principal
  inkSoft: "#3A4166", // texte secondaire fort
  muted: "#5A6183", // texte secondaire
  faint: "#8A90AD", // méta, désactivé
  cobalt: "#2C3FD1", // action principale
  cobaltDark: "#2232B0",
  cobaltSoft: "#E8EBFC",
  marigold: "#FFB224", // accent : pointeur, séries, tampons
  marigoldSoft: "#FFF3D6",
  jade: "#0E9F75", // succès
  jadeSoft: "#DDF5EC",
  rose: "#D9374B", // erreur
  roseSoft: "#FCE4E7",
} as const;

export const FONT =
  '"Bricolage Grotesque", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

// Rayons : du plus grand panneau au plus petit contrôle
export const R = {
  panel: 20,
  control: 12,
  small: 8,
  pill: 999,
} as const;

// Couleurs des segments de la roue, avec la couleur de texte lisible dessus.
// Alternance sombre / clair pour un rythme de disque vinyle.
export const WHEEL_SEGMENTS: { bg: string; fg: string }[] = [
  { bg: C.cobalt, fg: "#FFFFFF" },
  { bg: "#FFE0A1", fg: C.ink },
  { bg: C.jade, fg: "#FFFFFF" },
  { bg: "#B5C2FF", fg: C.ink },
  { bg: "#6B3FA0", fg: "#FFFFFF" },
  { bg: C.marigold, fg: C.ink },
  { bg: C.ink, fg: "#FFFFFF" },
  { bg: "#A6E4CC", fg: C.ink },
];
