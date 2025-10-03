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
  // --- ARGENTINA ---
{
  name: 'Argentina',
  descriptionFr: "Tango à Buenos Aires, rock nacional et folklore andin au nord-ouest.",
  descriptionEn: "Tango in Buenos Aires, rock nacional, and Andean folk in the northwest.",
  regions: ['Buenos Aires', 'Córdoba', 'Salta/Jujuy'],
  artists: ['Astor Piazzolla', 'Soda Stereo', 'Mercedes Sosa'],
  spotify: "https://open.spotify.com/playlist/37i9dQZEVXbMMy2roB9myp?si=2SxHCDdkSrS_43zX676P2A&pi=URJUkrM_Q-6zT",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/ObeliscoBA2015.2.jpg",
  cityStyles: [
    { city: 'Buenos Aires', noteFr: "Tango et rock nacional.", noteEn: "Tango and rock nacional." },
    { city: 'Salta', noteFr: "Folklore andin (zamba, chacarera).", noteEn: "Andean folk (zamba, chacarera)." }
  ]
},

// --- CHILE ---
{
  name: 'Chile',
  descriptionFr: "Cueca nationale, Nueva Canción et scènes indie/électro à Santiago.",
  descriptionEn: "National cueca, Nueva Canción, and indie/electronic scenes in Santiago.",
  regions: ['Santiago', 'Valparaíso', 'Concepción'],
  artists: ['Violeta Parra', 'Los Bunkers', 'Los Jaivas'],
  spotify: "https://open.spotify.com/playlist/37i9dQZEVXbL0GavIqMTeb?si=sLacnVLtRg6lRK9EombM8w&pi=Z_K79HauR7SOV",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Santiago_de_Chile_cityscape.jpg",
  cityStyles: [
    { city: 'Santiago', noteFr: "Indie/électro, rap chileno.", noteEn: "Indie/electronic, Chilean rap." },
    { city: 'Valparaíso', noteFr: "Folk et fusion côtière.", noteEn: "Coastal folk/fusion." }
  ]
},

// --- COLOMBIA ---
{
  name: 'Colombia',
  descriptionFr: "Cumbia et vallenato sur la côte caraïbe, champeta urbaine.",
  descriptionEn: "Cumbia and vallenato on the Caribbean coast, urban champeta.",
  regions: ['Barranquilla', 'Cartagena', 'Bogotá'],
  artists: ['Carlos Vives', 'Joe Arroyo', 'Totó la Momposina'],
  spotify: "https://open.spotify.com/playlist/37i9dQZEVXbOa2lmxNORXQ?si=v6nbVtxDSqeDHPdit0m41Q&pi=jlnspvm-Suqbc",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Cartagena_de_Indias%2C_Ciudad_Amurallada.jpg",
  cityStyles: [
    { city: 'Barranquilla', noteFr: "Cumbia/vallenato.", noteEn: "Cumbia/vallenato." },
    { city: 'Cartagena', noteFr: "Champeta urbaine.", noteEn: "Urban champeta." }
  ]
},

// --- PERU ---
{
  name: 'Peru',
  descriptionFr: "Huayno andin, chicha (cumbia andine) et festejo afro-péruvien.",
  descriptionEn: "Andean huayno, chicha (Andean cumbia) and Afro-Peruvian festejo.",
  regions: ['Lima', 'Cusco', 'Arequipa'],
  artists: ['Los Mirlos', 'Chabuca Granda', 'Eva Ayllón'],
  spotify: "https://open.spotify.com/playlist/4HTamTCbToETP2AdO9XqQu?si=Zu2AxPyaSvm1-kHnX96IwQ&pi=Wg14xJfGQlizY",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Lima_City_Skyline.jpg",
  cityStyles: [
    { city: 'Lima', noteFr: "Chicha urbaine et festejo.", noteEn: "Urban chicha and festejo." },
    { city: 'Cusco', noteFr: "Huayno et musique andine.", noteEn: "Huayno and Andean music." }
  ]
},

// --- BOLIVIA ---
{
  name: 'Bolivia',
  descriptionFr: "Morenada, caporales et tinku dans la riche tradition andine.",
  descriptionEn: "Morenada, caporales, and tinku in a rich Andean tradition.",
  regions: ['La Paz', 'Cochabamba', 'Oruro'],
  artists: ['Los Kjarkas', 'Bonny Lovy'],
  spotify: "https://open.spotify.com/playlist/2zvn0gdOKh4xiMTqn9CVAk?si=lHMglPHQTBOuoZPhTgDo8g",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/La_Paz_Bolivia.jpg",
  cityStyles: [
    { city: 'Oruro', noteFr: "Carnaval : morenada/caporales.", noteEn: "Carnival: morenada/caporales." }
  ]
},

// --- ECUADOR ---
{
  name: 'Ecuador',
  descriptionFr: "Pasillo romantique, bomba del Chota et música montubia.",
  descriptionEn: "Romantic pasillo, bomba del Chota, and montubio folk.",
  regions: ['Quito', 'Guayaquil', 'Valle del Chota'],
  artists: ['Julio Jaramillo', 'Mirella Cesa'],
  spotify: "https://open.spotify.com/playlist/2w8Fn0VtirkCefHUUW0YsP?si=KEKLV7acQ1OSw2QspXLxAw",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Quito_Panoramic.jpg",
  cityStyles: [
    { city: 'Quito', noteFr: "Pasillo/tradition andine.", noteEn: "Pasillo/Andean tradition." },
    { city: 'Valle del Chota', noteFr: "Bomba afro-équatorienne.", noteEn: "Afro-Ecuadorian bomba." }
  ]
},

// --- PARAGUAY ---
{
  name: 'Paraguay',
  descriptionFr: "Guarania et polka paraguaya (harpe paraguayenne).",
  descriptionEn: "Guarania and Paraguayan polka (Paraguayan harp).",
  regions: ['Asunción', 'Encarnación', 'Ciudad del Este'],
  artists: ['Agustín Barrios', 'Luis Alberto del Paraná'],
  spotify: "https://open.spotify.com/playlist/5yj4ed1rnEU9bbKdc1Vb47?si=GsAYgE4pTCSWiws6rxcnig",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Asuncion_skyline.jpg",
  cityStyles: [
    { city: 'Asunción', noteFr: "Guarania/polka paraguaya.", noteEn: "Guarania/Paraguayan polka." }
  ]
},

// --- URUGUAY ---
{
  name: 'Uruguay',
  descriptionFr: "Candombe afro-uruguayen, murga et rock rioplatense.",
  descriptionEn: "Afro-Uruguayan candombe, murga, and Río de la Plata rock.",
  regions: ['Montevideo', 'Punta del Este', 'Canelones'],
  artists: ['Rubén Rada', 'La Vela Puerca'],
  spotify: "https://open.spotify.com/playlist/0G4oEhrEK1KpoQVXcTkJBl?si=6rG2jHvOSp-L0EmDD5Yxsg",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Montevideo_Panorama.jpg",
  cityStyles: [
    { city: 'Montevideo', noteFr: "Candombe/murga.", noteEn: "Candombe/murga." }
  ]
},

// --- VENEZUELA ---
{
  name: 'Venezuela',
  descriptionFr: "Joropo des Llanos, gaitas zulianas et pop tropicale.",
  descriptionEn: "Llanos joropo, Zulian gaita, and tropical pop.",
  regions: ['Caracas', 'Maracaibo', 'Barquisimeto'],
  artists: ['Simón Díaz', 'Guaco'],
  spotify: "https://open.spotify.com/playlist/1EbVc8fl9r51zeZNYiHFvB?si=_HaHWXSURnyDD1dQg58B7w",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Caracas_Skyline.jpg",
  cityStyles: [
    { city: 'Los Llanos', noteFr: "Joropo (arpa cuatro maracas).", noteEn: "Joropo (harp cuatro maracas)." },
    { city: 'Maracaibo', noteFr: "Gaita zuliana.", noteEn: "Gaita zuliana." }
  ]
},

// --- GUYANA ---
{
  name: 'Guyana',
  descriptionFr: "Scène indo-caribéenne (chutney), soca et influences reggae.",
  descriptionEn: "Indo-Caribbean chutney scene, soca and reggae influences.",
  regions: ['Georgetown', 'Linden', 'Berbice'],
  artists: ['Terry Gajraj'],
  spotify: "https://open.spotify.com/playlist/5WrJyWv7owAxRv26rLlCJw?si=IgtRih2NSCWmXvMib4rxWA",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Georgetown_Guyana_Stabroek.jpg",
  cityStyles: [
    { city: 'Georgetown', noteFr: "Chutney/soca/reggae mix.", noteEn: "Chutney/soca/reggae mix." }
  ]
},

// --- SURINAME ---
{
  name: 'Suriname',
  descriptionFr: "Kaseko (créole), kawina et influences kaseko-jazz.",
  descriptionEn: "Creole Kaseko, Kawina, and kaseko-jazz influences.",
  regions: ['Paramaribo', 'Nickerie', 'Commewijne'],
  artists: ['Lieve Hugo'],
  spotify: "https://open.spotify.com/playlist/16Ihulxx1iYmMlcU8BWVEF?si=DAmA0f3MRfKx157y1luA6g&pi=k4uUDhNRRwCzP",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Paramaribo_Centrum.jpg",
  cityStyles: [
    { city: 'Paramaribo', noteFr: "Kaseko/kawina.", noteEn: "Kaseko/kawina." }
  ]
},

// --- FRENCH GUIANA (Guyane) ---
{
  name: 'French Guiana',
  descriptionFr: "Kasékò, aléké et biguine créole en Amazonie française.",
  descriptionEn: "Kasékò, aléké, and Creole biguine in French Amazonia.",
  regions: ['Cayenne', 'Kourou', 'Saint-Laurent-du-Maroni'],
  artists: ['Tina Ly'],
  // spotify: "",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Centre_Cayenne.jpg",
  cityStyles: [
    { city: 'Cayenne', noteFr: "Kasékò/aléké.", noteEn: "Kasékò/aléké." }
  ]
},
  // src/data/countries.ts
// Pays & territoires des Caraïbes (avec liens Spotify par pays)

export const countries = [
  // --- JAMAICA ---
  {
    name: 'Jamaica',
    descriptionFr: "Racines du reggae, dancehall, ska et rocksteady.",
    descriptionEn: "Roots of reggae, dancehall, ska and rocksteady.",
    regions: ['Kingston', 'Montego Bay', 'St. Ann'],
    artists: ['Bob Marley', 'Peter Tosh', 'Vybz Kartel'],
    spotify: "https://open.spotify.com/search/Jamaica%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kingston_Jamaica_skyline.jpg",
    cityStyles: [
      { city: 'Kingston', noteFr: "Reggae, dancehall, studios historiques.", noteEn: "Reggae, dancehall, historic studios." }
    ]
  },

  // --- TRINIDAD & TOBAGO ---
  {
    name: 'Trinidad & Tobago',
    descriptionFr: "Soca, calypso, steelpan; Carnaval de Trinidad.",
    descriptionEn: "Soca, calypso, steelpan; Trinidad Carnival.",
    regions: ['Port of Spain', 'San Fernando', 'Scarborough'],
    artists: ['Machel Montano', 'Calypso Rose'],
    spotify: "https://open.spotify.com/search/Trinidad%20and%20Tobago%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Port_of_Spain_Downtown.jpg",
    cityStyles: [
      { city: 'Port of Spain', noteFr: "Soca/calypso, steelpan (Panorama).", noteEn: "Soca/calypso, steelpan (Panorama)." }
    ]
  },

  // --- BARBADOS ---
  {
    name: 'Barbados',
    descriptionFr: "Soca, bashment soca et spouge classique.",
    descriptionEn: "Soca, bashment soca and classic spouge.",
    regions: ['Bridgetown', 'Oistins', 'Saint Michael'],
    artists: ['Rihanna', 'The Merrymen'],
    spotify: "https://open.spotify.com/search/Barbados%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Barbados_Bridgetown.jpg",
    cityStyles: [
      { city: 'Bridgetown', noteFr: "Bashment soca, spouge.", noteEn: "Bashment soca, spouge." }
    ]
  },

  // --- BAHAMAS ---
  {
    name: 'Bahamas',
    descriptionFr: "Junkanoo, rake-n-scrape et influences calypso.",
    descriptionEn: "Junkanoo, rake-n-scrape and calypso influences.",
    regions: ['Nassau', 'Freeport'],
    artists: ['The Baha Men'],
    spotify: "https://open.spotify.com/search/Bahamas%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Nassau_Bahamas_downtown.jpg",
    cityStyles: [
      { city: 'Nassau', noteFr: "Junkanoo carnavalesque.", noteEn: "Carnival-style Junkanoo." }
    ]
  },

  // --- CUBA ---
  {
    name: 'Cuba',
    descriptionFr: "Son cubano, rumba, timba; source majeure de la salsa.",
    descriptionEn: "Son cubano, rumba, timba; major source of salsa.",
    regions: ['La Habana', 'Santiago de Cuba', 'Matanzas'],
    artists: ['Buena Vista Social Club', 'Los Van Van', 'Celia Cruz'],
    spotify: "https://open.spotify.com/search/Cuba%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Havana_Cuba.jpg",
    cityStyles: [
      { city: 'La Habana', noteFr: "Son/timba; salsa cubaine.", noteEn: "Son/timba; Cuban salsa." },
      { city: 'Matanzas', noteFr: "Rumba traditionnelle.", noteEn: "Traditional rumba." }
    ]
  },

  // --- DOMINICAN REPUBLIC ---
  {
    name: 'Dominican Republic',
    descriptionFr: "Merengue, bachata et scène dembow.",
    descriptionEn: "Merengue, bachata and dembow scene.",
    regions: ['Santo Domingo', 'Santiago de los Caballeros', 'La Romana'],
    artists: ['Juan Luis Guerra', 'Aventura', 'El Alfa'],
    spotify: "https://open.spotify.com/search/Dominican%20Republic%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Santo_Domingo_Skyline.jpg",
    cityStyles: [
      { city: 'Santo Domingo', noteFr: "Merengue, bachata, dembow.", noteEn: "Merengue, bachata, dembow." }
    ]
  },

  // --- HAITI ---
  {
    name: 'Haiti',
    descriptionFr: "Compas (konpa), mizik rasin et rara.",
    descriptionEn: "Compas (konpa), mizik rasin and rara.",
    regions: ['Port-au-Prince', 'Cap-Haïtien', 'Jacmel'],
    artists: ['Tabou Combo', 'Carimi', 'Boukan Ginen'],
    spotify: "https://open.spotify.com/search/Haiti%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Port-au-Prince.jpg",
    cityStyles: [
      { city: 'Port-au-Prince', noteFr: "Compas/kadans moderne.", noteEn: "Modern compas/kadans." },
      { city: 'Jacmel', noteFr: "Rara/carnaval.", noteEn: "Rara/carnival." }
    ]
  },

  // --- PUERTO RICO ---
  {
    name: 'Puerto Rico',
    descriptionFr: "Salsa dura, reggaetón moderne et plena/bomba.",
    descriptionEn: "Salsa dura, modern reggaetón and plena/bomba.",
    regions: ['San Juan', 'Ponce', 'Bayamón'],
    artists: ['Héctor Lavoe', 'Bad Bunny', 'Calle 13'],
    spotify: "https://open.spotify.com/search/Puerto%20Rico%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/San_Juan_Puerto_Rico.jpg",
    cityStyles: [
      { city: 'San Juan', noteFr: "Reggaetón, salsa urbaine.", noteEn: "Reggaetón, urban salsa." }
    ]
  },

  // --- GUADELOUPE ---
  {
    name: 'Guadeloupe',
    descriptionFr: "Zouk et gwoka; traditions créoles.",
    descriptionEn: "Zouk and gwoka; Creole traditions.",
    regions: ['Pointe-à-Pitre', 'Basse-Terre'],
    artists: ['Kassavʼ', 'Admiral T'],
    spotify: "https://open.spotify.com/search/Guadeloupe%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pointe-a-Pitre_Guadeloupe.jpg",
    cityStyles: [
      { city: 'Pointe-à-Pitre', noteFr: "Zouk moderne, gwoka urbain.", noteEn: "Modern zouk, urban gwoka." }
    ]
  },

  // --- MARTINIQUE ---
  {
    name: 'Martinique',
    descriptionFr: "Zouk, biguine et bèlè.",
    descriptionEn: "Zouk, biguine and bèlè.",
    regions: ['Fort-de-France', 'Le Lamentin'],
    artists: ['Kassavʼ', 'Jocelyne Béroard'],
    spotify: "https://open.spotify.com/search/Martinique%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fort-de-France_Martinique.jpg",
    cityStyles: [
      { city: 'Fort-de-France', noteFr: "Zouk/biguine.", noteEn: "Zouk/biguine." }
    ]
  },

  // --- SAINT LUCIA ---
  {
    name: 'Saint Lucia',
    descriptionFr: "Dennery Segment (soca locale) énergique.",
    descriptionEn: "High-energy local soca (Dennery Segment).",
    regions: ['Castries', 'Vieux Fort'],
    artists: ['Machel Montano (influence régionale)', 'Freezy'],
    spotify: "https://open.spotify.com/search/Saint%20Lucia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Castries_St_Lucia.jpg",
    cityStyles: [
      { city: 'Castries', noteFr: "Dennery segment soca.", noteEn: "Dennery segment soca." }
    ]
  },

  // --- GRENADA ---
  {
    name: 'Grenada',
    descriptionFr: "Jab Jab soca et calypso local.",
    descriptionEn: "Jab Jab soca and local calypso.",
    regions: ["St. George's", 'Gouyave'],
    artists: ['Tallpree'],
    spotify: "https://open.spotify.com/search/Grenada%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/St._Georges_Grenada.jpg",
    cityStyles: [
      { city: "St. George's", noteFr: "Jab Jab (Carnaval).", noteEn: "Jab Jab (Carnival)." }
    ]
  },

  // --- ANTIGUA & BARBUDA ---
  {
    name: 'Antigua & Barbuda',
    descriptionFr: "Benna traditionnelle et soca.",
    descriptionEn: "Traditional benna and soca.",
    regions: ['St. John’s'],
    artists: ['Burning Flames'],
    spotify: "https://open.spotify.com/search/Antigua%20and%20Barbuda%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/St_Johns_Antigua.jpg",
    cityStyles: [
      { city: "St. John's", noteFr: "Benna/soca.", noteEn: "Benna/soca." }
    ]
  },

  // --- CURAÇAO ---
  {
    name: 'Curaçao',
    descriptionFr: "Tumba et tambú en Papiamentu.",
    descriptionEn: "Tumba and tambú in Papiamentu.",
    regions: ['Willemstad'],
    artists: ['Izaline Calister'],
    spotify: "https://open.spotify.com/search/Curacao%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Willemstad_Curacao.jpg",
    cityStyles: [
      { city: 'Willemstad', noteFr: "Tumba/tambú.", noteEn: "Tumba/tambú." }
    ]
  }
];
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


