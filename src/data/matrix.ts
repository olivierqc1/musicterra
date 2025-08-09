// Types
type SimMatrix = { [item: string]: { [related: string]: number } };

// Petite aide: rend la matrice automatiquement bidirectionnelle
function makeBidirectional(seed: SimMatrix): SimMatrix {
  const out: SimMatrix = {};
  for (const a of Object.keys(seed)) {
    if (!out[a]) out[a] = {};
    for (const [b, w] of Object.entries(seed[a])) {
      out[a][b] = w;
      if (!out[b]) out[b] = {};
      // on garde le poids le plus fort si un lien existait déjà dans l'autre sens
      out[b][a] = Math.max(out[b][a] ?? 0, w);
    }
  }
  return out;
}

// Définition des liens (sens unique); la fonction au-dessus créera l'autre sens
const seed: SimMatrix = {
  // Existant
  Rock: { Metal: 0.7, Jazz: 0.2 },
  Reggae: { Brazil: 0.4 },
  Jazz: { Rock: 0.2, France: 0.3 },
  France: {}, // laissé vide; les liens arrivent via les autres
  Brazil: { Reggae: 0.4 },
  Spain: { France: 0.2 },

  // Nouveaux pays d'Afrique de l'Est
  Tanzania: {
    "Bongo Flava": 0.9,
    Taarab: 0.7,
    Kenya: 0.5,
    Uganda: 0.35,
    Rwanda: 0.3
  },
  Kenya: {
    Genge: 0.85,
    Benga: 0.75,
    Uganda: 0.4,
    Tanzania: 0.5,
    Rwanda: 0.3
  },
  Uganda: {
    "Kadongo Kamu": 0.85,
    Kenya: 0.4,
    Tanzania: 0.35,
    Rwanda: 0.45
  },
  Rwanda: {
    "Rwandan Afrobeat": 0.8,
    Uganda: 0.45,
    Tanzania: 0.3,
    Kenya: 0.3
  },

  // Genres d'Afrique de l'Est (et proximités entre genres)
  "Bongo Flava": { Genge: 0.5, "Rwandan Afrobeat": 0.45, Reggae: 0.25 },
  Taarab: { }, // style assez singulier; on garde des liens surtout via Tanzania
  Genge: { Benga: 0.4, "Bongo Flava": 0.5 },
  Benga: { Genge: 0.4, Jazz: 0.15 }, // petites proximités rythmiques/harmoniques
  "Kadongo Kamu": { Benga: 0.3 },
  "Rwandan Afrobeat": { "Bongo Flava": 0.45 }
};

// Matrice finale, bidirectionnelle
export const similarityMatrix: SimMatrix = makeBidirectional(seed);
