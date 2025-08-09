import type { Item } from '../types';

export const genres: Item[] = [
  {
    name: 'Rock',
    descriptionFr: "Né dans les années 50 aux USA, influencé par le blues et la country.",
    descriptionEn: "Born in the 1950s in the USA, influenced by blues and country.",
    subgenres: ['Progressif', 'Alternatif', 'Psychédélique'],
    artists: ['The Beatles', 'Led Zeppelin', 'Pink Floyd'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_guitar.jpg"
  },
  {
    name: 'Metal',
    descriptionFr: "Plus lourd et agressif, popularisé dans les années 70.",
    descriptionEn: "Heavier and more aggressive, popular since the 1970s.",
    subgenres: ['Black Metal', 'Heavy Metal', 'Death Metal'],
    artists: ['Metallica', 'Iron Maiden', 'Black Sabbath'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Heavy_metal_band.jpg"
  },
  {
    name: 'Reggae',
    descriptionFr: "Originaire de la Jamaïque, rythmes lents et messages sociaux.",
    descriptionEn: "Originated in Jamaica, slow rhythms and social messages.",
    subgenres: ['Roots', 'Dancehall', 'Dub'],
    artists: ['Bob Marley', 'Peter Tosh', 'Burning Spear'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bob-Marley.jpg"
  },
  {
    name: 'Jazz',
    descriptionFr: "Improvisation née à la Nouvelle-Orléans.",
    descriptionEn: "Improvisation at its core, born in New Orleans.",
    subgenres: ['Bebop', 'Swing', 'Free Jazz'],
    artists: ['Miles Davis', 'John Coltrane', 'Louis Armstrong'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Jazz_band.jpg"
  },
  // Afrique de l'Est
  {
    name: 'Bongo Flava',
    descriptionFr: "Genre tanzanien mêlant hip-hop, R&B, et influences swahilies.",
    descriptionEn: "Tanzanian genre mixing hip-hop, R&B, and Swahili influences.",
    subgenres: ['Afrobeat Fusion', 'Swahili Pop'],
    artists: ['Diamond Platnumz', 'Ali Kiba', 'Harmonize'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdI8tzTp8Kjk",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Diamond_Platnumz_live.jpg"
  },
  {
    name: 'Taarab',
    descriptionFr: "Musique traditionnelle de Zanzibar, mélange arabe, swahili et indien.",
    descriptionEn: "Traditional music from Zanzibar blending Arabic, Swahili and Indian influences.",
    subgenres: ['Classique', 'Moderne'],
    artists: ['Bi Kidude', 'Culture Musical Club'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWSmCnE8n7DWH",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Zanzibar_Taarab_performance.jpg"
  },
  {
    name: 'Genge',
    descriptionFr: "Hip-hop kenyan avec paroles en sheng et rythmes locaux.",
    descriptionEn: "Kenyan hip-hop with sheng lyrics and local rhythms.",
    subgenres: ['Genge Tone', 'Hip-hop Fusion'],
    artists: ['Jua Cali', 'Nonini'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWYkaDif7Ztbp",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Jua_Cali_performance.jpg"
  },
  {
    name: 'Benga',
    descriptionFr: "Musique dansante kenyane, guitare rapide et rythme entraînant.",
    descriptionEn: "Danceable Kenyan music with fast guitar and upbeat rhythm.",
    subgenres: ['Classic Benga', 'Modern Benga'],
    artists: ['D.O. Misiani', 'Suzanna Owiyo'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXcOZ52XmE7XQ",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Benga_band_performance.jpg"
  },
  {
    name: 'Kadongo Kamu',
    descriptionFr: "Musique ougandaise à une guitare, souvent avec des paroles narratives.",
    descriptionEn: "Ugandan one-guitar music, often with narrative lyrics.",
    subgenres: ['Traditionnel', 'Moderne'],
    artists: ['Paul Kafeero', 'Herman Basudde'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWUJcOa0BwVX5",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Uganda_traditional_music.jpg"
  },
  {
    name: 'Rwandan Afrobeat',
    descriptionFr: "Fusion afrobeat, gospel et pop rwandaise contemporaine.",
    descriptionEn: "Afrobeat fusion, gospel, and contemporary Rwandan pop.",
    subgenres: ['Afro-Gospel', 'Urban Pop'],
    artists: ['Meddy', 'The Ben'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7dZc2QeWvZQ",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meddy_Rwanda.jpg"
  }
];

