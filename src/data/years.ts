export interface YearItem {
  year: number;
  descriptionFr: string;
  descriptionEn: string;
  majorEvents: string[];
  emergingGenres: string[];
  topArtists: string[];
  culturalContext: string;
  spotify?: string;
  image?: string;
}

export const years: YearItem[] = [
  {
    year: 1954,
    descriptionFr: "Naissance du Rock'n'Roll avec 'Rock Around the Clock'. Elvis signe chez Sun Records. Premier festival de Newport Jazz.",
    descriptionEn: "Birth of Rock'n'Roll with 'Rock Around the Clock'. Elvis signs with Sun Records. First Newport Jazz Festival.",
    majorEvents: [
      "Bill Haley - Rock Around the Clock",
      "Elvis Presley signe chez Sun Records",
      "Premier festival de Newport Jazz"
    ],
    emergingGenres: ["Rock'n'Roll", "Rockabilly"],
    topArtists: ["Elvis Presley", "Bill Haley", "Chuck Berry"],
    culturalContext: "Post-guerre, boom économique américain, naissance de la culture jeune",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXaQk1f3SUEHx",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Elvis_Presley_1954.jpg"
  },
  {
    year: 1964,
    descriptionFr: "British Invasion: Les Beatles débarquent en Amérique. Bob Dylan passe à l'électrique. Motown domine les charts.",
    descriptionEn: "British Invasion: The Beatles arrive in America. Bob Dylan goes electric. Motown dominates charts.",
    majorEvents: [
      "Les Beatles au Ed Sullivan Show",
      "Bob Dylan - The Times They Are a-Changin'",
      "The Rolling Stones émergent"
    ],
    emergingGenres: ["British Rock", "Motown", "Folk Rock"],
    topArtists: ["The Beatles", "The Rolling Stones", "The Supremes"],
    culturalContext: "Mouvement des droits civiques, Beatlemania, révolution culturelle",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4UtSsGT1Sbe"
  },
  {
    year: 1973,
    descriptionFr: "Naissance du Hip-Hop dans le Bronx (DJ Kool Herc). Pink Floyd - Dark Side of the Moon. Début du punk en Angleterre.",
    descriptionEn: "Birth of Hip-Hop in the Bronx (DJ Kool Herc). Pink Floyd - Dark Side of the Moon. Punk begins in England.",
    majorEvents: [
      "DJ Kool Herc invente le Hip-Hop",
      "Pink Floyd - Dark Side of the Moon",
      "Formation des Sex Pistols"
    ],
    emergingGenres: ["Hip-Hop", "Punk Proto", "Progressive Rock"],
    topArtists: ["Pink Floyd", "Led Zeppelin", "Stevie Wonder"],
    culturalContext: "Crise pétrolière, fin de la guerre du Vietnam, contre-culture",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWTJ7xPn4vNaz"
  },
  {
    year: 1981,
    descriptionFr: "Lancement de MTV. Début de l'ère synthpop. Thriller de Michael Jackson se prépare. Post-Punk au sommet.",
    descriptionEn: "MTV launches. Synthpop era begins. Michael Jackson's Thriller in the making. Post-Punk at its peak.",
    majorEvents: [
      "MTV lance 'Video Killed the Radio Star'",
      "Premiers synthétiseurs grand public",
      "New Wave domine"
    ],
    emergingGenres: ["Synthpop", "New Wave", "Post-Punk"],
    topArtists: ["Depeche Mode", "Joy Division", "Talking Heads"],
    culturalContext: "Début ère Reagan, révolution informatique, MTV change tout",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4UtSsGT1Sbe"
  },
  {
    year: 1991,
    descriptionFr: "Nevermind de Nirvana tue le Hair Metal. Naissance du Gangsta Rap (N.W.A). Trip-Hop émerge à Bristol.",
    descriptionEn: "Nirvana's Nevermind kills Hair Metal. Birth of Gangsta Rap (N.W.A). Trip-Hop emerges in Bristol.",
    majorEvents: [
      "Nirvana - Nevermind",
      "N.W.A - Efil4zaggin",
      "Massive Attack - Blue Lines"
    ],
    emergingGenres: ["Grunge", "Gangsta Rap", "Trip-Hop"],
    topArtists: ["Nirvana", "Pearl Jam", "N.W.A"],
    culturalContext: "Fin guerre froide, génération X, MTV Unplugged",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbTxeAdrVG2l"
  },
  {
    year: 1997,
    descriptionFr: "OK Computer de Radiohead. Daft Punk - Homework lance la French Touch. Buena Vista Social Club redécouvert.",
    descriptionEn: "Radiohead's OK Computer. Daft Punk - Homework launches French Touch. Buena Vista Social Club rediscovered.",
    majorEvents: [
      "Radiohead - OK Computer",
      "Daft Punk - Homework",
      "The Prodigy - Fat of the Land"
    ],
    emergingGenres: ["French Touch", "Drum & Bass", "Post-Rock"],
    topArtists: ["Radiohead", "Daft Punk", "The Prodigy"],
    culturalContext: "Internet se démocratise, apogée du CD, festivals électro explosent",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4JAvHpjipBk"
  },
  {
    year: 2008,
    descriptionFr: "808s & Heartbreak de Kanye change le rap. Spotify lance en Europe. Émergence du Dubstep mainstream.",
    descriptionEn: "Kanye's 808s & Heartbreak changes rap. Spotify launches in Europe. Mainstream Dubstep emerges.",
    majorEvents: [
      "Kanye West - 808s & Heartbreak",
      "Lancement de Spotify",
      "Dubstep mainstream (Skrillex)"
    ],
    emergingGenres: ["Emo Rap", "Dubstep", "Electro-Pop"],
    topArtists: ["Kanye West", "Lil Wayne", "M.I.A."],
    culturalContext: "Crise financière, iPhone change l'écoute, fin du CD",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4JAvHpjipBk"
  },
  {
    year: 2013,
    descriptionFr: "Random Access Memories de Daft Punk. Émergence du Trap (Migos, Future). Début de l'ère du streaming.",
    descriptionEn: "Daft Punk's Random Access Memories. Trap emerges (Migos, Future). Streaming era begins.",
    majorEvents: [
      "Daft Punk - Random Access Memories",
      "Kendrick Lamar - good kid, m.A.A.d city",
      "Trap devient dominant"
    ],
    emergingGenres: ["Trap", "Alt-R&B", "Indie Electro"],
    topArtists: ["Daft Punk", "Kendrick Lamar", "Drake"],
    culturalContext: "Streaming dépasse le téléchargement, Vine influence la musique, festivals partout",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0"
  },
  {
    year: 2016,
    descriptionFr: "Beyoncé - Lemonade révolutionne les albums visuels. Afrobeats devient global. Lo-fi Hip-Hop explose sur YouTube.",
    descriptionEn: "Beyoncé's Lemonade revolutionizes visual albums. Afrobeats goes global. Lo-fi Hip-Hop explodes on YouTube.",
    majorEvents: [
      "Beyoncé - Lemonade",
      "Afrobeats global (Wizkid & Drake)",
      "Lo-fi Hip-Hop streams 24/7"
    ],
    emergingGenres: ["Afrobeats", "Lo-fi Hip-Hop", "Trap Latino"],
    topArtists: ["Beyoncé", "Drake", "Wizkid"],
    culturalContext: "TikTok emerge, playlists algorithmiques dominent, albums surprises",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
  },
  {
    year: 2019,
    descriptionFr: "Lil Nas X - Old Town Road casse les barrières de genre. Billie Eilish domine. Amapiano sud-africain émerge.",
    descriptionEn: "Lil Nas X - Old Town Road breaks genre barriers. Billie Eilish dominates. South African Amapiano emerges.",
    majorEvents: [
      "Lil Nas X - Old Town Road",
      "Billie Eilish - When We All Fall Asleep",
      "Amapiano se mondialise"
    ],
    emergingGenres: ["Country Trap", "Dark Pop", "Amapiano"],
    topArtists: ["Billie Eilish", "Lil Nas X", "Bad Bunny"],
    culturalContext: "TikTok devient machine à hits, pandémie approche, concerts virtuels",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
  },
  {
    year: 2022,
    descriptionFr: "Renaissance de Beyoncé célèbre la house. Bad Bunny artiste le plus streamé. UK Drill domine Londres.",
    descriptionEn: "Beyoncé's Renaissance celebrates house. Bad Bunny most streamed. UK Drill dominates London.",
    majorEvents: [
      "Beyoncé - Renaissance",
      "Bad Bunny bat tous les records",
      "Harry Styles - Harry's House"
    ],
    emergingGenres: ["Hyperpop", "Jersey Club", "Afro-House"],
    topArtists: ["Bad Bunny", "Beyoncé", "Harry Styles"],
    culturalContext: "Post-pandémie, retour des concerts, TikTok influence dominante",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
  },
  {
    year: 2024,
    descriptionFr: "IA générative bouleverse la création. Amapiano et Afrobeats fusionnent. Résurgence du Rock indépendant.",
    descriptionEn: "Generative AI disrupts creation. Amapiano and Afrobeats merge. Indie Rock resurges.",
    majorEvents: [
      "Débat sur l'IA en musique",
      "Fusion Afro-House globale",
      "Retour du vinyle record"
    ],
    emergingGenres: ["AI-assisted Music", "Global Afro-fusion", "Neo-Rock"],
    topArtists: ["Tyla", "Peso Pluma", "Sabrina Carpenter"],
    culturalContext: "IA controversée, nostalgie années 2000, mondialisation des sons africains",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
  }
];
