import type { Item } from '../types';

export const genres: Item[] = [
  // ——— Fondations internationales ———
  {
    name: 'Rock',
    descriptionFr: "Né dans les années 50 aux USA, influencé par le blues et la country.",
    descriptionEn: "Born in the 1950s in the USA, influenced by blues and country.",
    subgenres: [
      'Progressif','Alternatif','Psychédélique','Garage Rock','Hard Rock',
      'Indie Rock','Post-Rock','Shoegaze','Grunge','Surf Rock'
    ],
    subgenresRich: [
      { name: 'Progressif', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Alternatif', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Psychédélique', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Garage Rock', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Hard Rock', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Indie Rock', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Post-Rock', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Shoegaze', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Grunge', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Surf Rock', descriptionFr: "Sous-genre de Rock. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Rock. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['The Beatles','Led Zeppelin','Pink Floyd'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_guitar.jpg"
  },
  {
    name: 'Metal',
    descriptionFr: "Plus lourd et agressif, popularisé dans les années 70.",
    descriptionEn: "Heavier and more aggressive, popular since the 1970s.",
    subgenres: [
      'Heavy Metal','Thrash','Death Metal','Black Metal','Doom',
      'Power Metal','Metalcore','Progressive Metal','Nu Metal'
    ],
    subgenresRich: [
      { name: 'Heavy Metal', descriptionFr: "Sous-genre de Metal. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Metal. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Thrash', descriptionFr: "Sous-genre de Metal. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Metal. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Death Metal', descriptionFr: "Sous-genre de Metal. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Metal. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Black Metal', descriptionFr: "Sous-genre de Metal. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Metal. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Doom', descriptionFr: "Sous-genre de Metal. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Metal. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Power Metal', descriptionFr: "Sous-genre de Metal. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Metal. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Metalcore', descriptionFr: "Sous-genre de Metal. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Metal. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Progressive Metal', descriptionFr: "Sous-genre de Metal. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Metal. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Nu Metal', descriptionFr: "Sous-genre de Metal. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Metal. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Metallica','Iron Maiden','Black Sabbath'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Heavy_metal_band.jpg"
  },
  {
    name: 'Reggae',
    descriptionFr: "Originaire de la Jamaïque, rythmes lents et messages sociaux.",
    descriptionEn: "Originated in Jamaica, slow rhythms and social messages.",
    subgenres: ['Roots','Rocksteady','Dancehall','Dub','Lovers Rock','Ragga'],
    subgenresRich: [
      { name: 'Roots', descriptionFr: "Sous-genre de Reggae. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Reggae. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Rocksteady', descriptionFr: "Sous-genre de Reggae. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Reggae. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Dancehall', descriptionFr: "Sous-genre de Reggae. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Reggae. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Dub', descriptionFr: "Sous-genre de Reggae. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Reggae. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Lovers Rock', descriptionFr: "Sous-genre de Reggae. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Reggae. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Ragga', descriptionFr: "Sous-genre de Reggae. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Reggae. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Bob Marley','Peter Tosh','Burning Spear'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bob-Marley.jpg"
  },
  {
    name: 'Jazz',
    descriptionFr: "Improvisation née à la Nouvelle-Orléans.",
    descriptionEn: "Improvisation at its core, born in New Orleans.",
    subgenres: [
      'New Orleans','Swing','Bebop','Hard Bop','Cool Jazz',
      'Modal','Free Jazz','Fusion','Smooth Jazz','Nu Jazz'
    ],
    subgenresRich: [
      { name: 'New Orleans', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Swing', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Bebop', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Hard Bop', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Cool Jazz', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Modal', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Free Jazz', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Fusion', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Smooth Jazz', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Nu Jazz', descriptionFr: "Sous-genre de Jazz. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Jazz. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Miles Davis','John Coltrane','Louis Armstrong'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Jazz_band.jpg"
  },
  {
    name: 'Hip-Hop',
    descriptionFr: "Né dans le Bronx; rimes, beats et culture DJ/MC.",
    descriptionEn: "Born in the Bronx; rhymes, beats and DJ/MC culture.",
    subgenres: ['Boom Bap','Trap','Alternative Rap','West Coast','East Coast','Drill','Lo-Fi'],
    subgenresRich: [
      { name: 'Boom Bap', descriptionFr: "Sous-genre de Hip-Hop. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Hip-Hop. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Trap', descriptionFr: "Sous-genre de Hip-Hop. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Hip-Hop. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Alternative Rap', descriptionFr: "Sous-genre de Hip-Hop. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Hip-Hop. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'West Coast', descriptionFr: "Sous-genre de Hip-Hop. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Hip-Hop. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'East Coast', descriptionFr: "Sous-genre de Hip-Hop. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Hip-Hop. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Drill', descriptionFr: "Sous-genre de Hip-Hop. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Hip-Hop. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Lo-Fi', descriptionFr: "Sous-genre de Hip-Hop. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Hip-Hop. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Kendrick Lamar','Jay-Z','Missy Elliott'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Graffiti_Bronx.jpg"
  },
  {
    name: 'Country',
    descriptionFr: "Originaire du Sud des États-Unis; guitares, histoires et harmonies.",
    descriptionEn: "From the American South; guitars, storytelling and harmonies.",
    subgenres: ['Classic Country','Modern Country','Bluegrass','Outlaw','Alt-Country'],
    subgenresRich: [
      { name: 'Classic Country', descriptionFr: "Sous-genre de Country. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Country. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Modern Country', descriptionFr: "Sous-genre de Country. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Country. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Bluegrass', descriptionFr: "Sous-genre de Country. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Country. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Outlaw', descriptionFr: "Sous-genre de Country. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Country. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Alt-Country', descriptionFr: "Sous-genre de Country. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Country. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Johnny Cash','Dolly Parton','Chris Stapleton'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nashville_Broadway.jpg"
  },
  {
    name: 'Blues',
    descriptionFr: "Né dans le Delta du Mississippi; racines du rock et du jazz.",
    descriptionEn: "Born in the Mississippi Delta; roots of rock and jazz.",
    subgenres: ['Delta Blues','Chicago Blues','Electric Blues','Piedmont','Country Blues'],
    subgenresRich: [
      { name: 'Delta Blues', descriptionFr: "Sous-genre de Blues. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Blues. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Chicago Blues', descriptionFr: "Sous-genre de Blues. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Blues. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Electric Blues', descriptionFr: "Sous-genre de Blues. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Blues. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Piedmont', descriptionFr: "Sous-genre de Blues. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Blues. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Country Blues', descriptionFr: "Sous-genre de Blues. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Blues. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['B.B. King','Muddy Waters','Etta James'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/BB_King_2009.jpg"
  },
  // ——— Afrique de l’Est ———
  {
    name: 'Bongo Flava',
    descriptionFr: "Genre tanzanien mêlant hip-hop, R&B et influences swahilies.",
    descriptionEn: "Tanzanian genre mixing hip-hop, R&B and Swahili influences.",
    subgenres: ['Afro-fusion','Rap Tanzanien','Swahili Pop'],
    subgenresRich: [
      { name: 'Afro-fusion', descriptionFr: "Sous-genre de Bongo Flava. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Bongo Flava. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Rap Tanzanien', descriptionFr: "Sous-genre de Bongo Flava. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Bongo Flava. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Swahili Pop', descriptionFr: "Sous-genre de Bongo Flava. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Bongo Flava. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Diamond Platnumz','Ali Kiba','Harmonize'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXbLOeOIhbc5",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Diamond_Platnumz.jpg"
  },
  {
    name: 'Taarab',
    descriptionFr: "Fusion de musique swahilie, arabe et indienne, populaire à Zanzibar.",
    descriptionEn: "Fusion of Swahili, Arab and Indian music, popular in Zanzibar.",
    subgenres: ['Swahili Classical','Orchestral Taarab'],
    subgenresRich: [
      { name: 'Swahili Classical', descriptionFr: "Sous-genre de Taarab. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Taarab. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Orchestral Taarab', descriptionFr: "Sous-genre de Taarab. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Taarab. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Culture Musical Club','Ikhwani Safaa'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWU4xkXueiKGW",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Taarab_Band.jpg"
  },
  {
    name: 'Genge',
    descriptionFr: "Style kényan dérivé du hip-hop, mêlant anglais, kiswahili et sheng.",
    descriptionEn: "Kenyan hip-hop style mixing English, Kiswahili and Sheng slang.",
    subgenres: ['Kapuka','Urban Kenyan Rap'],
    subgenresRich: [
      { name: 'Kapuka', descriptionFr: "Sous-genre de Genge. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Genge. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Urban Kenyan Rap', descriptionFr: "Sous-genre de Genge. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Genge. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Jua Cali','Nonini','Klef Records'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1s9knjP51Oa",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Jua_Cali.jpg"
  },
  {
    name: 'Kapuka',
    descriptionFr: "Sous-genre du hip-hop kényan, proche du Genge mais plus commercial.",
    descriptionEn: "Subgenre of Kenyan hip-hop, close to Genge but more commercial.",
    subgenres: ['Mainstream Kapuka'],
    subgenresRich: [
      { name: 'Mainstream Kapuka', descriptionFr: "Sous-genre de Kapuka. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Kapuka. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Nameless','Prezzo'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1wdZM1q5wVv",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Nameless_Kenya.jpg"
  },
  {
    name: 'Swahili Gospel',
    descriptionFr: "Musique chrétienne en kiswahili, populaire en Afrique de l’Est.",
    descriptionEn: "Christian music in Kiswahili, popular in East Africa.",
    subgenres: ['Chorale','Praise & Worship'],
    subgenresRich: [
      { name: 'Chorale', descriptionFr: "Sous-genre de Swahili Gospel. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Swahili Gospel. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" },
      { name: 'Praise & Worship', descriptionFr: "Sous-genre de Swahili Gospel. Brève description automatique à personnaliser.", descriptionEn: "Subgenre of Swahili Gospel. Short auto-generated description to customize.", spotify: "https://open.spotify.com/playlist/XXXX" }
    ],
    artists: ['Christina Shusho','Mercy Masika'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4ju6R7t8J7Q",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Christina_Shusho.jpg"
  },
  
