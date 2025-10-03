import type { Item } from '../types';

export const countries: Item[] = [
  // ——— Europe / Amériques ———
  {
    name: 'France',
    descriptionFr: "Chanson, électro, rap et jazz — scènes très variées selon les villes.",
    descriptionEn: "Chanson, electronic, rap and jazz — very diverse scenes by city.",
    regions: ['Île-de-France', 'Provence', 'Bretagne'],
    artists: ['Daft Punk', 'Édith Piaf', 'MC Solaar'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWVpjAJGB70vU",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_from_the_Tour_Saint-Jacques_2011.jpg",
    cities: [
      {
        name: 'Paris',
        styles: ['Chanson', 'Électronique', 'Jazz', 'Rap'],
        artists: ['Air', 'Serge Gainsbourg'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX9qpx7CJPf2e'
      },
      {
        name: 'Marseille',
        styles: ['Rap', 'Électro', 'Pop'],
        artists: ['IAM', 'Soprano']
      },
      {
        name: 'Lyon',
        styles: ['Électronique', 'Indie Rock', 'Jazz']
      }
    ]
  },
  {
  name: 'Guatemala',
  descriptionFr: "Marimba, musique folklorique maya, et fusion moderne.",
  descriptionEn: "Marimba, traditional Mayan folk music, and modern fusion.",
  regions: ['Antigua', 'Guatemala City', 'Quetzaltenango'],
  artists: ['Gaby Moreno', 'Ricardo Arjona', 'Marimba Chapinlandia'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4xuWVBs4FgJ",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Antigua_Guatemala_Street.jpg"
},
{
  name: 'Honduras',
  descriptionFr: "Berceau du Punta garifuna, scène côtière caribéenne et pop locale.",
  descriptionEn: "Home of Garifuna Punta, Caribbean coastal scene and local pop.",
  regions: ['Tegucigalpa', 'San Pedro Sula', 'La Ceiba (côte Garifuna)'],
  artists: ['Banda Blanca', 'Aurelio Martínez', 'Guillermo Anderson'],
  spotify:  "https://open.spotify.com/playlist/37i9dQZEVXbJp9wcIM9Eo5?si=zm2HGF7ZQvmd293uoV-k9w&pi=WBaEUBloQdqzH",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Honduras_Bay_Islands_Caribbean.jpg",
  cityStyles: [
    {
      city: 'La Ceiba',
      noteFr: "Cœur du Punta et des rythmes garifuna.",
      noteEn: "Heart of Punta and Garifuna rhythms."
    },
    {
      city: 'Tegucigalpa',
      noteFr: "Pop/rock local, scènes indie.",
      noteEn: "Local pop/rock, indie scenes."
    },
    {
      city: 'San Pedro Sula',
      noteFr: "Mix urbain: pop latine, fusion punta-rock.",
      noteEn: "Urban mix: Latin pop, punta-rock fusion."
    }
  ]
},
  // --- COSTA RICA ---
{
  name: 'Costa Rica',
  descriptionFr: "Calypso limonense sur la côte Caraïbe, folk guanacasteco et scène rock/pop locale.",
  descriptionEn: "Limonense calypso on the Caribbean coast, Guanacaste folk, and local rock/pop.",
  regions: ['San José', 'Limón (côte caribéenne)', 'Guanacaste'],
  artists: ['Walter Ferguson', 'Debi Nova', 'Percance'],
  spotify: "https://open.spotify.com/playlist/37i9dQZEVXbMZAjGMynsQX?si=M_rdM1KoRnuqbm5byld1YQ&pi=W8mSyv-PTICLp",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Sanjose_costarica.jpg",
  cityStyles: [
    { city: 'Limón', noteFr: "Berceau du calypso limonense.", noteEn: "Birthplace of Limonense calypso." },
    { city: 'San José', noteFr: "Rock/indie et pop locale.", noteEn: "Local rock/indie and pop." },
    { city: 'Guanacaste', noteFr: "Folklore et marimba.", noteEn: "Folk traditions and marimba." }
  ]
},

// --- NICARAGUA ---
{
  name: 'Nicaragua',
  descriptionFr: "Palo de Mayo (Maypole) sur la côte Atlantique, et musique traditionnelle nica.",
  descriptionEn: "Palo de Mayo (Maypole) on the Atlantic coast, plus traditional Nica music.",
  regions: ['Managua', 'Bluefields (Riviera Atlantique)', 'León'],
  artists: ['Dimension Costeña', 'Camilo Zapata'],
  spotify: "https://open.spotify.com/playlist/37i9dQZEVXbISk8kxnzfCq?si=9tzqY5L7QAi_nyPrfB8DPA&pi=UjGXM1gdRMqCH",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Bluefields_Nicaragua.jpg",
  cityStyles: [
    { city: 'Bluefields', noteFr: "Palo de Mayo/Maypole (danse festive).", noteEn: "Palo de Mayo / Maypole (festive dance)." },
    { city: 'Managua', noteFr: "Pop/rock nica moderne.", noteEn: "Modern Nica pop/rock." }
  ]
},

// --- EL SALVADOR ---
{
  name: 'El Salvador',
  descriptionFr: "Xuc salvadorien et cumbia locale, scènes pop et rock émergentes.",
  descriptionEn: "Salvadoran Xuc and local cumbia, emerging pop and rock scenes.",
  regions: ['San Salvador', 'Santa Ana', 'San Miguel'],
  artists: ['Paquito Palaviccini', 'Marito Rivera'],
  spotify: "https://open.spotify.com/playlist/37i9dQZEVXbLxoIml4MYkT?si=_yRmNtXxTWu-z1IjJRSdiA&pi=hfXJ7GJpRZSwW",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/San_Salvador_Panorama.jpg",
  cityStyles: [
    { city: 'San Salvador', noteFr: "Xuc moderne et cumbia urbaine.", noteEn: "Modern Xuc and urban cumbia." }
  ]
},

// --- HONDURAS ---
{
  name: 'Honduras',
  descriptionFr: "Berceau du Punta garifuna, scène côtière caribéenne et pop locale.",
  descriptionEn: "Home of Garifuna Punta, Caribbean coastal scene and local pop.",
  regions: ['Tegucigalpa', 'San Pedro Sula', 'La Ceiba (côte Garifuna)'],
  artists: ['Banda Blanca', 'Aurelio Martínez', 'Guillermo Anderson'],
  spotify: "https://open.spotify.com/playlist/37i9dQZEVXbJp9wcIM9Eo5?si=iyi9jRWeRv6xjrky5u51PQ&pi=dLH9pC4mRvSzk",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Honduras_Bay_Islands_Caribbean.jpg",
  cityStyles: [
    { city: 'La Ceiba', noteFr: "Cœur du Punta/garifuna.", noteEn: "Heart of Punta/Garifuna." },
    { city: 'Tegucigalpa', noteFr: "Pop/rock local, indie.", noteEn: "Local pop/rock, indie." }
  ]
},

// --- PANAMA ---
{
  name: 'Panama',
  descriptionFr: "Tamborito et típico panaméno, racines du reggaetón (scènes urbaines).",
  descriptionEn: "Tamborito and Panamanian típico, roots of reggaetón (urban scenes).",
  regions: ['Ciudad de Panamá', 'Colón', 'Azuero'],
  artists: ['Samy y Sandra Sandoval', 'Rubén Blades'],
  spotify: "https://open.spotify.com/playlist/37i9dQZEVXbKypXHVwk1f0?si=30wIaqujQnCLrX_tlPN8og",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Panama_City_Skyline.jpg",
  cityStyles: [
    { city: 'Ciudad de Panamá', noteFr: "Urbain : reggaetón/latin urban.", noteEn: "Urban: reggaetón/latin urban." },
    { city: 'Azuero', noteFr: "Tamborito et típico panaméno.", noteEn: "Tamborito and típico panameño." }
  ]
},
  {
  name: 'Spain',
  descriptionFr: "Flamenco, musiques gitanes, pop/rock et électronica — fortes racines andalouses.",
  descriptionEn: "Flamenco, gypsy music, pop/rock and electronica — strong Andalusian roots.",
  regions: ['Andalucía', 'Catalunya', 'Madrid', 'València', 'Galicia'],
  artists: ['Paco de Lucía', 'Rosalía', 'Manolo Sanlúcar'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Alhambra.jpg",
  cities: [
    {
      name: 'Seville',
      styles: ['Flamenco', 'Rumba', 'Sevillanas'],
      artists: ['Paco de Lucía', 'Niña Pastori']
    },
    {
      name: 'Madrid',
      styles: ['Pop', 'Rock', 'Rap'],
      artists: ['Vetusta Morla', 'C. Tangana'],
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX2Xmsr0G8Eux'
    },
    {
      name: 'Barcelona',
      styles: ['Indie Pop', 'Electronica', 'Urban'],
      artists: ['Rosalía', 'Love of Lesbian'],
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX0CIO5EOSHeD'
    },
    {
      name: 'Granada',
      styles: ['Flamenco', 'World', 'Indie'],
      artists: ['Los Planetas'],
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX3ntY0G0BiLh'
    },
    {
      name: 'Valencia',
      styles: ['Electronic', 'Dance', 'Pop'],
      artists: ['Chimo Bayo'],
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWWY64wDtewQt'
    }
  ]
},

  {
    name: 'Brazil',
    descriptionFr: "Samba, bossa nova, MPB et funk carioca — une palette rythmique unique.",
    descriptionEn: "Samba, bossa nova, MPB and funk carioca — a unique rhythmic palette.",
    regions: ['Rio de Janeiro', 'Bahia', 'São Paulo'],
    artists: ['Gilberto Gil', 'Caetano Veloso', 'Anitta'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7UE7qrnkvsf",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Copacabana_Beach_Rio_de_Janeiro.jpg",
    cities: [
      { name: 'Rio de Janeiro', styles: ['Samba', 'Bossa Nova', 'Funk Carioca'] },
      { name: 'São Paulo', styles: ['MPB', 'Indie', 'Rap'] },
      { name: 'Salvador (Bahia)', styles: ['Axé', 'Samba-Reggae'] }
    ]
  },
  {
    name: 'Spain',
    descriptionFr: "Flamenco, musiques gitanes, pop et électronica — racines andalouses fortes.",
    descriptionEn: "Flamenco, gypsy music, pop and electronica — strong Andalusian roots.",
    regions: ['Andalousie', 'Catalogne', 'Madrid'],
    artists: ['Paco de Lucía', 'Rosalía', 'Manolo Sanlúcar'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Alhambra.jpg",
    cities: [
      { name: 'Seville', styles: ['Flamenco'] },
      { name: 'Barcelona', styles: ['Indie Pop', 'Électronica'] },
      { name: 'Madrid', styles: ['Pop', 'Rock', 'Rap'] }
    ]
  },
  {
    name: 'United States',
    descriptionFr: "Berceau du jazz, du rock, du hip-hop et de la country; scènes ultra-diverses.",
    descriptionEn: "Birthplace of jazz, rock, hip-hop and country; highly diverse scenes.",
    regions: ['New York', 'Los Angeles', 'Nashville', 'New Orleans', 'Detroit'],
    artists: ['Beyoncé', 'Miles Davis', 'Elvis Presley'],
    spotify: "https://open.spotify.com/playlist/37i9dQZEVXbLRQDuF5jeBp",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Manhattan_skyline_from_Brooklyn.jpg",
    cities: [
      {
        name: 'New York',
        styles: ['Hip-Hop', 'Jazz', 'Indie Rock'],
        artists: ['Jay-Z', 'A Tribe Called Quest', 'The Strokes'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX2WkIBRaChxW'
      },
      {
        name: 'Los Angeles',
        styles: ['Hip-Hop', 'Pop', 'Psych Rock'],
        artists: ['Kendrick Lamar', 'Red Hot Chili Peppers'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX0hWmn8d5pRe'
      },
      {
        name: 'Nashville',
        styles: ['Country', 'Bluegrass', 'Americana'],
        artists: ['Dolly Parton', 'Chris Stapleton'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda'
      },
      {
        name: 'New Orleans',
        styles: ['Jazz', 'Blues', 'Funk'],
        artists: ['Louis Armstrong', 'Dr. John'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWV7EzJMK2FUI'
      },
      {
        name: 'Detroit',
        styles: ['Motown', 'Techno', 'Hip-Hop'],
        artists: ['The Supremes', 'Eminem'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX4tE58eNSt4Q'
      }
    ]
  },

  // ——— Afrique de l’Est ———
  {
    name: 'Tanzania',
    descriptionFr: "Bongo Flava, taarab et musiques traditionnelles de la côte swahilie.",
    descriptionEn: "Bongo Flava, taarab and traditional Swahili coast music.",
    regions: ['Dar es Salaam', 'Zanzibar', 'Arusha'],
    artists: ['Diamond Platnumz', 'Ali Kiba', 'Lady Jaydee'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX31fVvTvdTRa",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Zanzibar_Stone_Town.jpg",
    cities: [
      {
        name: 'Dar es Salaam',
        styles: ['Bongo Flava', 'Afrobeats'],
        artists: ['Diamond Platnumz', 'Harmonize'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXdI8tzTp8Kjk'
      },
      {
        name: 'Zanzibar',
        styles: ['Taarab', 'Swahili Fusion'],
        artists: ['Bi Kidude'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWSmCnE8n7DWH'
      },
      { name: 'Arusha', styles: ['Hip-Hop', 'Bongo Flava'] }
    ]
  },
  {
    name: 'Kenya',
    descriptionFr: "Genge, gengetone et benga; mélange urbain et traditions des hauts plateaux.",
    descriptionEn: "Genge, gengetone and benga; urban blend and highland traditions.",
    regions: ['Nairobi', 'Mombasa', 'Kisumu'],
    artists: ['Sauti Sol', 'Nyashinski', 'Jua Cali'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9lAKJGxQ0Im",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Nairobi_skyline.jpg",
    cities: [
      {
        name: 'Nairobi',
        styles: ['Genge', 'Gengetone', 'Hip-Hop'],
        artists: ['Sauti Sol', 'Nyashinski'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWYkaDif7Ztbp'
      },
      { name: 'Mombasa', styles: ['Taarab', 'Chakacha'] },
      { name: 'Kisumu', styles: ['Benga'] }
    ]
  },
  {
    name: 'Uganda',
    descriptionFr: "Afrobeats, kadongo kamu et fusions afro-électro.",
    descriptionEn: "Afrobeats, kadongo kamu and afro-electronic fusions.",
    regions: ['Kampala', 'Jinja', 'Gulu'],
    artists: ['Eddy Kenzo', 'Sheebah Karungi', 'Bebe Cool'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX3EbcelyrZPd",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Kampala_skyline.jpg",
    cities: [
      {
        name: 'Kampala',
        styles: ['Afrobeats', 'Kadongo Kamu', 'Dancehall'],
        artists: ['Eddy Kenzo', 'Bebe Cool'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX3EbcelyrZPd'
      },
      { name: 'Jinja', styles: ['Kadongo Kamu'] },
      { name: 'Gulu', styles: ['Acholi Traditional', 'Afro-Fusion'] }
    ]
  },
  {
    name: 'Rwanda',
    descriptionFr: "Afropop/afrobeat rwandais, gospel et traditions des collines.",
    descriptionEn: "Rwandan afropop/afrobeat, gospel and hill country traditions.",
    regions: ['Kigali', 'Huye', 'Musanze'],
    artists: ['Meddy', 'The Ben', 'Aline Gahongayire'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXb9I5xoXLjp",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Kigali_city_view.jpg",
    cities: [
      {
        name: 'Kigali',
        styles: ['Rwandan Afrobeat', 'Gospel', 'Afropop'],
        artists: ['Meddy', 'The Ben'],
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWXb9I5xoXLjp'
      },
      { name: 'Huye', styles: ['Traditional', 'Afro-Fusion'] },
      { name: 'Musanze', styles: ['Gospel', 'Afropop'] }
    ]
  }
];


