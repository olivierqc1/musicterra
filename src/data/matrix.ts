// Matrice de similarité bidirectionnelle
type SimMatrix = { [item: string]: { [related: string]: number } };

function makeBidirectional(seed: SimMatrix): SimMatrix {
  const out: SimMatrix = {};
  for (const a of Object.keys(seed)) {
    if (!out[a]) out[a] = {};
    for (const [b, w] of Object.entries(seed[a])) {
      out[a][b] = w;
      if (!out[b]) out[b] = {};
      out[b][a] = Math.max(out[b][a] ?? 0, w);
    }
  }
  return out;
}

const seed: SimMatrix = {
  // Base
  Rock: { Metal: 0.7, Jazz: 0.2 },
  Reggae: { Brazil: 0.4 },
  Jazz: { Rock: 0.2, France: 0.3 },
  France: {},
  Brazil: { Reggae: 0.4 },
  Spain: { France: 0.2 },

  // Pays Afrique de l'Est
  Tanzania: { "Bongo Flava": 0.9, Taarab: 0.7, Kenya: 0.5, Uganda: 0.35, Rwanda: 0.3 },
  Kenya: { Genge: 0.85, Benga: 0.75, Uganda: 0.4, Tanzania: 0.5, Rwanda: 0.3 },
  Uganda: { "Kadongo Kamu": 0.85, Kenya: 0.4, Tanzania: 0.35, Rwanda: 0.45 },
  Rwanda: { "Rwandan Afrobeat": 0.8, Uganda: 0.45, Tanzania: 0.3, Kenya: 0.3 },

  // Genres Afrique de l'Est
  "Bongo Flava": { Genge: 0.5, "Rwandan Afrobeat": 0.45, Reggae: 0.25 },
  Taarab: { },
  Genge: { Benga: 0.4, "Bongo Flava": 0.5 },
  Benga: { Genge: 0.4, Jazz: 0.15 },
  "Kadongo Kamu": { Benga: 0.3 },
  "Rwandan Afrobeat": { "Bongo Flava": 0.45 }
};

export const similarityMatrix: SimMatrix = makeBidirectional(seed);
