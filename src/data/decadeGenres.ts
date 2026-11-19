// src/data/decadeGenres.ts
// Genres liés à chaque décennie : ceux qui y sont nés ou qui y ont percé.
// Liste volontairement courte, limitée aux genres dont l'époque est bien
// établie. Sert aux recommandations sur les fiches « année » et à la roue
// « Propose-moi un truc » en mode années (src/lib/affinity.ts).
// Les noms sont ceux de genres.ts, en minuscules : un nom qui n'existe pas
// est simplement ignoré.

export const DECADE_GENRES: Record<number, string[]> = {
  1890: ["ragtime", "blues"],
  1900: ["ragtime", "blues"],
  1910: ["jazz", "blues"],
  1920: ["jazz", "blues", "country"],
  1930: ["swing", "jazz", "country"],
  1940: ["bebop", "bluegrass", "swing"],
  1950: ["rockabilly", "bossa nova", "blues", "country"],
  1960: ["ska", "rocksteady", "reggae", "psychedelic rock", "folk rock", "garage rock", "surf rock", "funk", "tropicalia", "progressive rock", "hard rock"],
  1970: ["heavy metal", "glam rock", "krautrock", "hip hop", "dub", "afrobeat", "salsa", "post-punk", "mbalax", "funk", "reggae"],
  1980: ["thrash metal", "death metal", "black metal", "techno", "hip hop", "city pop", "emo", "grunge", "shoegaze"],
  1990: ["grunge", "shoegaze", "pop punk", "nu metal", "emo", "uk garage", "k-pop", "reggaeton", "black metal", "death metal"],
  2000: ["dubstep", "grime", "trap", "indietronica", "reggaeton", "emo", "k-pop"],
  2010: ["trap", "drill", "afrobeats", "amapiano", "k-pop", "reggaeton"],
  2020: ["amapiano", "drill", "afrobeats", "k-pop", "reggaeton"],
};
