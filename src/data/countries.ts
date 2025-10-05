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
    spotify: "https://open.spotify.com/playlist/37i9dQZEVXbJp9wcIM9Eo5?si=zm2HGF7ZQvmd293uoV-k9w&pi=WBaEUBloQdqzH",
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
  {
    name: 'French Guiana',
    descriptionFr: "Kasékò, aléké et biguine créole en Amazonie française.",
    descriptionEn: "Kasékò, aléké, and Creole biguine in French Amazonia.",
    regions: ['Cayenne', 'Kourou', 'Saint-Laurent-du-Maroni'],
    artists: ['Tina Ly'],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Centre_Cayenne.jpg",
    cityStyles: [
      { city: 'Cayenne', noteFr: "Kasékò/aléké.", noteEn: "Kasékò/aléké." }
    ]
  },

// ——— CARAÏBES ———
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
  {
    name: 'Antigua & Barbuda',
    descriptionFr: "Benna traditionnelle et soca.",
    descriptionEn: "Traditional benna and soca.",
    regions: ['St. John's'],
    artists: ['Burning Flames'],
    spotify: "https://open.spotify.com/search/Antigua%20and%20Barbuda%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/St_Johns_Antigua.jpg",
    cityStyles: [
      { city: "St. John's", noteFr: "Benna/soca.", noteEn: "Benna/soca." }
    ]
  },
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
  },

  // ——— EUROPE ———
  {
    name: 'United Kingdom',
    descriptionFr: "Berceau pop/rock moderne, grime, drum & bass, garage.",
    descriptionEn: "Birthplace of modern pop/rock, grime, drum & bass, garage.",
    regions: ['London', 'Manchester', 'Bristol', 'Liverpool'],
    artists: ['The Beatles', 'The Rolling Stones', 'Skepta'],
    spotify: "https://open.spotify.com/search/United%20Kingdom%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Skyline_%28cropped%29.jpg",
    cityStyles: [
      { city: 'London', noteFr: "Grime, UK garage, DnB.", noteEn: "Grime, UK garage, DnB." },
      { city: 'Manchester', noteFr: "Britpop, indie.", noteEn: "Britpop, indie." },
      { city: 'Bristol', noteFr: "Trip-hop, bass music.", noteEn: "Trip-hop, bass music." }
    ]
  },
  {
    name: 'Ireland',
    descriptionFr: "Folk celtique, rock/indie, tradition et modernité.",
    descriptionEn: "Celtic folk, indie/rock, tradition and modernity.",
    regions: ['Dublin', 'Cork', 'Galway'],
    artists: ['U2', 'The Cranberries', 'Enya'],
    spotify: "https://open.spotify.com/search/Ireland%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Dublin_General_Post_Office_2018.jpg",
    cityStyles: [
      { city: 'Dublin', noteFr: "Folk/rock celtique.", noteEn: "Celtic folk/rock." }
    ]
  },
  {
    name: 'Spain',
    descriptionFr: "Flamenco, pop urbaine, musiques latines.",
    descriptionEn: "Flamenco, urban pop, Latin sounds.",
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
    name: 'Portugal',
    descriptionFr: "Fado, afro-lusophone (Lisbonne), pop moderne.",
    descriptionEn: "Fado, Afro-Lusophone (Lisbon), modern pop.",
    regions: ['Lisboa', 'Porto'],
    artists: ['Amália Rodrigues', 'Mariza'],
    spotify: "https://open.spotify.com/search/Portugal%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lisbon_Panorama.jpg",
    cityStyles: [
      { city: 'Lisboa', noteFr: "Fado, kuduro club.", noteEn: "Fado, club kuduro." }
    ]
  },
  {
    name: 'Italy',
    descriptionFr: "Canzone, italo disco, opéra, rap italien.",
    descriptionEn: "Canzone, italo disco, opera, Italian rap.",
    regions: ['Roma', 'Milano', 'Napoli'],
    artists: ['Lucio Battisti', 'Måneskin'],
    spotify: "https://open.spotify.com/search/Italy%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
    cityStyles: [
      { city: 'Milano', noteFr: "Italo disco, pop.", noteEn: "Italo disco, pop." },
      { city: 'Napoli', noteFr: "Canzone napolitaine.", noteEn: "Neapolitan song." }
    ]
  },
  {
    name: 'Germany',
    descriptionFr: "Techno (Berlin), krautrock, pop/rock.",
    descriptionEn: "Techno (Berlin), krautrock, pop/rock.",
    regions: ['Berlin', 'Hamburg', 'Cologne'],
    artists: ['Kraftwerk', 'Paul Kalkbrenner', 'Scorpions'],
    spotify: "https://open.spotify.com/search/Germany%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Berlin_Skyline_Fernsehturm_2015.jpg",
    cityStyles: [
      { city: 'Berlin', noteFr: "Techno minimale/indus.", noteEn: "Minimal/industrial techno." }
    ]
  },
  {
    name: 'Netherlands',
    descriptionFr: "EDM/house, gabber/hardcore, pop.",
    descriptionEn: "EDM/house, gabber/hardcore, pop.",
    regions: ['Amsterdam', 'Rotterdam', 'Utrecht'],
    artists: ['Tiesto', 'Armin van Buuren'],
    spotify: "https://open.spotify.com/search/Netherlands%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Keizersgracht_Reguliersgracht_Amsterdam.jpg",
    cityStyles: [
      { city: 'Amsterdam', noteFr: "House/EDM.", noteEn: "House/EDM." },
      { city: 'Rotterdam', noteFr: "Gabber/hardcore.", noteEn: "Gabber/hardcore." }
    ]
  },
  {
    name: 'Belgium',
    descriptionFr: "New beat, techno, pop FR/NL.",
    descriptionEn: "New beat, techno, French/Dutch pop.",
    regions: ['Bruxelles', 'Antwerpen', 'Gent'],
    artists: ['Stromae', 'Soulwax'],
    spotify: "https://open.spotify.com/search/Belgium%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Grand_Place_Brussels.jpg",
    cityStyles: [
      { city: 'Bruxelles', noteFr: "New beat, électro-pop.", noteEn: "New beat, electro-pop." }
    ]
  },
  {
    name: 'Luxembourg',
    descriptionFr: "Petite scène pop/rock/électro, carrefour culturel.",
    descriptionEn: "Small pop/rock/electronic scene, cultural crossroads.",
    regions: ['Luxembourg City', 'Esch-sur-Alzette'],
    artists: ['Rome', 'Tuys'],
    spotify: "https://open.spotify.com/search/Luxembourg%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Luxembourg_City_Skyline.jpg"
  },
  {
    name: 'Switzerland',
    descriptionFr: "Pop multilingue, techno/house, rock alpin.",
    descriptionEn: "Multilingual pop, techno/house, alpine rock.",
    regions: ['Zürich', 'Genève', 'Lausanne'],
    artists: ['Yello', 'Sophie Hunger'],
    spotify: "https://open.spotify.com/search/Switzerland%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Z%C3%BCrich_-_Uetliberg_-_Skyline.jpg"
  },
  {
    name: 'Austria',
    descriptionFr: "Vienne classique, électronique, pop germanophone.",
    descriptionEn: "Classical Vienna, electronic, German-language pop.",
    regions: ['Wien', 'Salzburg', 'Graz'],
    artists: ['Falco', 'Kruder & Dorfmeister'],
    spotify: "https://open.spotify.com/search/Austria%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Wien_Skyline.jpg"
  },
  {
    name: 'Denmark',
    descriptionFr: "Pop scandinave, indie, électronique.",
    descriptionEn: "Scandi pop, indie, electronic.",
    regions: ['Copenhagen', 'Aarhus'],
    artists: ['Aqua', 'MØ'],
    spotify: "https://open.spotify.com/search/Denmark%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Copenhagen_Skyline_2014.jpg"
  },
  {
    name: 'Sweden',
    descriptionFr: "Scandi pop, EDM, metal mélodique.",
    descriptionEn: "Scandi pop, EDM, melodic metal.",
    regions: ['Stockholm', 'Gothenburg'],
    artists: ['ABBA', 'Avicii', 'In Flames'],
    spotify: "https://open.spotify.com/search/Sweden%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Stockholm_skyline.jpg",
    cityStyles: [
      { city: 'Stockholm', noteFr: "Pop suédoise, EDM.", noteEn: "Swedish pop, EDM." },
      { city: 'Gothenburg', noteFr: "Death metal mélodique.", noteEn: "Melodic death metal." }
    ]
  },
  {
    name: 'Norway',
    descriptionFr: "Black metal, pop/indie nordique.",
    descriptionEn: "Black metal, Nordic pop/indie.",
    regions: ['Oslo', 'Bergen'],
    artists: ['A-ha', 'Mayhem', 'Aurora'],
    spotify: "https://open.spotify.com/search/Norway%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Oslo_skyline.jpg",
    cityStyles: [
      { city: 'Oslo', noteFr: "Black metal, indé.", noteEn: "Black metal, indie." }
    ]
  },
  {
    name: 'Finland',
    descriptionFr: "Metal symphonique/power, rock nordique.",
    descriptionEn: "Symphonic/power metal, Nordic rock.",
    regions: ['Helsinki', 'Tampere'],
    artists: ['Nightwish', 'HIM', 'Children of Bodom'],
    spotify: "https://open.spotify.com/search/Finland%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Helsinki_Skyline_2.jpg",
    cityStyles: [
      { city: 'Helsinki', noteFr: "Metal symphonique/power.", noteEn: "Symphonic/power metal." }
    ]
  },
  {
    name: 'Iceland',
    descriptionFr: "Indie/expérimental, ambient, folk nordique.",
    descriptionEn: "Indie/experimental, ambient, Nordic folk.",
    regions: ['Reykjavík', 'Akureyri'],
    artists: ['Björk', 'Sigur Rós'],
    spotify: "https://open.spotify.com/search/Iceland%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Reykjavik_Skyline.jpg"
  },
  {
    name: 'Poland',
    descriptionFr: "Hip-hop PL, indie/rock, jazz vibrant.",
    descriptionEn: "Polish hip-hop, indie/rock, vibrant jazz.",
    regions: ['Warszawa', 'Kraków', 'Gdańsk'],
    artists: ['Taco Hemingway', 'Penderecki'],
    spotify: "https://open.spotify.com/search/Poland%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Warsaw_skyline_2019.jpg"
  },
  {
    name: 'Czechia',
    descriptionFr: "Rock alternatif, jazz contemporain, folk.",
    descriptionEn: "Alternative rock, contemporary jazz, folk.",
    regions: ['Praha', 'Brno'],
    artists: ['Plastic People of the Universe'],
    spotify: "https://open.spotify.com/search/Czech%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Prague_skyline_view.jpg"
  },
  {
    name: 'Slovakia',
    descriptionFr: "Pop/rock, folk carpathique, hip-hop SK.",
    descriptionEn: "Pop/rock, Carpathian folk, Slovak hip-hop.",
    regions: ['Bratislava', 'Košice'],
    artists: ['IMT Smile'],
    spotify: "https://open.spotify.com/search/Slovakia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Bratislava_skyline.jpg"
  },
  {
    name: 'Hungary',
    descriptionFr: "Csárdás/folk, pop-rock, scène électronique.",
    descriptionEn: "Csárdás/folk, pop-rock, electronic scene.",
    regions: ['Budapest', 'Debrecen'],
    artists: ['Omega', 'Zoltán Kodály'],
    spotify: "https://open.spotify.com/search/Hungary%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Budapest_skyline.jpg"
  },
  {
    name: 'Romania',
    descriptionFr: "Manele, folk roumain, pop/rock moderne.",
    descriptionEn: "Manele, Romanian folk, modern pop/rock.",
    regions: ['București', 'Cluj-Napoca', 'Iași'],
    artists: ['Goran Bregović (régionnel)', 'Inna'],
    spotify: "https://open.spotify.com/search/Romania%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Bucharest_Skyline.jpg"
  },
  {
    name: 'Bulgaria',
    descriptionFr: "Chalga/pop-folk, chœurs bulgares, rock/pop.",
    descriptionEn: "Chalga/pop-folk, Bulgarian choirs, rock/pop.",
    regions: ['Sofia', 'Plovdiv', 'Varna'],
    artists: ['Azis', 'Le Mystère des Voix Bulgares'],
    spotify: "https://open.spotify.com/search/Bulgaria%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sofia_Skyline_2017.jpg"
  },
  {
    name: 'Greece',
    descriptionFr: "Rébétiko, laïko, pop grecque, méditerranéen.",
    descriptionEn: "Rebetiko, laiko, Greek pop, Mediterranean.",
    regions: ['Athens', 'Thessaloniki'],
    artists: ['Mikis Theodorakis', 'Haris Alexiou'],
    spotify: "https://open.spotify.com/search/Greece%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Acropolis_Athens.jpg",
    cityStyles: [
      { city: 'Athens', noteFr: "Rébétiko/laïko.", noteEn: "Rebetiko/laiko." }
    ]
  },
  {
    name: 'Malta',
    descriptionFr: "Pop méditerranéenne, indie/électro émergente.",
    descriptionEn: "Mediterranean pop, emerging indie/electronic.",
    regions: ['Valletta', 'Sliema'],
    artists: ['Ira Losco'],
    spotify: "https://open.spotify.com/search/Malta%20music",
    image: "https://upload.wikimedia.org/wikipedia/c"
    },
  {
    name: 'Cyprus',
    descriptionFr: "Pop/rock grecque/chypriote, musiques levantines.",
    descriptionEn: "Greek/Cypriot pop/rock, Levantine influences.",
    regions: ['Nicosia', 'Limassol'],
    artists: ['Anna Vissi'],
    spotify: "https://open.spotify.com/search/Cyprus%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Nicosia_Skyline.jpg"
  },
// ——— EUROPE DE L'EST & BALTES ———
  {
    name: 'Estonia',
    descriptionFr: "Scène électronique/folk nordique, chœurs riches.",
    descriptionEn: "Nordic electronic/folk scene, rich choirs.",
    regions: ['Tallinn', 'Tartu'],
    artists: ['Arvo Pärt', 'NOËP'],
    spotify: "https://open.spotify.com/search/Estonia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Tallinn_Skyline_2021.jpg",
    cityStyles: [
      { city: 'Tallinn', noteFr: "Électro minimal/ambiant.", noteEn: "Minimal/ambient electronic." }
    ]
  },
  {
    name: 'Latvia',
    descriptionFr: "Chœurs baltes, pop/électro émergente.",
    descriptionEn: "Baltic choirs, emerging pop/electronic.",
    regions: ['Riga', 'Liepāja'],
    artists: ['Instrumenti', 'Brainstorm'],
    spotify: "https://open.spotify.com/search/Latvia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Riga_skyline_2013.jpg"
  },
  {
    name: 'Lithuania',
    descriptionFr: "Folk baltique, hip-hop/pop moderne.",
    descriptionEn: "Baltic folk, modern hip-hop/pop.",
    regions: ['Vilnius', 'Kaunas'],
    artists: ['The Roop', 'Jurga'],
    spotify: "https://open.spotify.com/search/Lithuania%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Vilnius_Skyline.jpg"
  },
  {
    name: 'Ukraine',
    descriptionFr: "Folk slave/électronique, rock et pop actuelle.",
    descriptionEn: "Slavic folk/electronic blends, rock and current pop.",
    regions: ['Kyiv', 'Lviv', 'Odesa', 'Kharkiv'],
    artists: ['DakhaBrakha', 'Jamala', 'Okean Elzy'],
    spotify: "https://open.spotify.com/search/Ukraine%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Kyiv_Skyline_2017.jpg",
    cityStyles: [
      { city: 'Kyiv', noteFr: "Fusion folk/électro.", noteEn: "Folk/electronic fusion." }
    ]
  },
  {
    name: 'Belarus',
    descriptionFr: "Pop/rock de l'Est, touches électroniques.",
    descriptionEn: "Eastern pop/rock with electronic touches.",
    regions: ['Minsk', 'Hrodna'],
    artists: ['LSP', 'Max Korzh'],
    spotify: "https://open.spotify.com/search/Belarus%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Minsk_skyline.jpg"
  },
  {
    name: 'Moldova',
    descriptionFr: "Folk moldave/roumain, pop/électro récente.",
    descriptionEn: "Moldovan/Romanian folk, recent pop/electronic.",
    regions: ['Chișinău', 'Bălți'],
    artists: ['Zdob și Zdub', 'Carla's Dreams'],
    spotify: "https://open.spotify.com/search/Moldova%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Chisinau_skyline.jpg"
  },

  // ——— BALKANS ———
  {
    name: 'Slovenia',
    descriptionFr: "Électro/indie alpin, pop alternative.",
    descriptionEn: "Alpine electro/indie, alternative pop.",
    regions: ['Ljubljana', 'Maribor'],
    artists: ['Laibach', 'Melodrom'],
    spotify: "https://open.spotify.com/search/Slovenia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Ljubljana_Skyline.jpg"
  },
  {
    name: 'Croatia',
    descriptionFr: "Pop adriatique, rock alternatif, klapa.",
    descriptionEn: "Adriatic pop, alternative rock, klapa singing.",
    regions: ['Zagreb', 'Split', 'Dubrovnik'],
    artists: ['Parni Valjak', 'Severina'],
    spotify: "https://open.spotify.com/search/Croatia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Zagreb_skyline.jpg",
    cityStyles: [
      { city: 'Dalmatia', noteFr: "Klapa (polyphonies).", noteEn: "Klapa (a cappella choirs)." }
    ]
  },
  {
    name: 'Bosnia and Herzegovina',
    descriptionFr: "Sevdah (blues balkanique), rock/alt.",
    descriptionEn: "Sevdah (Balkan blues), rock/alt.",
    regions: ['Sarajevo', 'Mostar'],
    artists: ['Amira Medunjanin', 'Dubioza Kolektiv'],
    spotify: "https://open.spotify.com/search/Bosnia%20and%20Herzegovina%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Sarajevo_Skyline.jpg"
  },
  {
    name: 'Serbia',
    descriptionFr: "Trubaci (fanfares), turbo-folk, rock/électro.",
    descriptionEn: "Trubaci brass, turbo-folk, rock/electronic.",
    regions: ['Beograd', 'Novi Sad', 'Niš'],
    artists: ['Goran Bregović', 'Emir Kusturica & No Smoking Orchestra'],
    spotify: "https://open.spotify.com/search/Serbia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Belgrade_Skyline.jpg",
    cityStyles: [
      { city: 'Guča', noteFr: "Festival fanfares/truba.", noteEn: "Brass/truba festival." }
    ]
  },
  {
    name: 'Montenegro',
    descriptionFr: "Pop adriatique, influences balkaniques.",
    descriptionEn: "Adriatic pop with Balkan influences.",
    regions: ['Podgorica', 'Kotor'],
    artists: ['Sergej Ćetković'],
    spotify: "https://open.spotify.com/search/Montenegro%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kotor_Bay_Montenegro.jpg"
  },
  {
    name: 'North Macedonia',
    descriptionFr: "Folk macédonienne, pop/rock, scène balkanique.",
    descriptionEn: "Macedonian folk, pop/rock, Balkan scene.",
    regions: ['Skopje', 'Ohrid'],
    artists: ['Toše Proeski'],
    spotify: "https://open.spotify.com/search/North%20Macedonia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Skopje_Skyline.jpg"
  },
  {
    name: 'Albania',
    descriptionFr: "Iso-polyphonie, pop moderne, rap albanais.",
    descriptionEn: "Iso-polyphony, modern pop, Albanian rap.",
    regions: ['Tirana', 'Shkodër'],
    artists: ['Dua Lipa (diaspora)', 'Noizy'],
    spotify: "https://open.spotify.com/search/Albania%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Tirana_Skyline.jpg"
  },
  {
    name: 'Kosovo',
    descriptionFr: "Pop/rap kosovar, scène diasporique.",
    descriptionEn: "Kosovar pop/rap, strong diaspora scene.",
    regions: ['Prishtina', 'Prizren'],
    artists: ['Rita Ora (diaspora)', 'Capital T'],
    spotify: "https://open.spotify.com/search/Kosovo%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Pristina_Skyline.jpg"
  },

  // ——— MICRO-ÉTATS EUROPÉENS ———
  {
    name: 'Andorra',
    descriptionFr: "Petite scène pop/folk pyrénéenne.",
    descriptionEn: "Small Pyrenean pop/folk scene.",
    regions: ['Andorra la Vella'],
    artists: ['Anonymous (Eurovision)'],
    spotify: "https://open.spotify.com/search/Andorra%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Andorra_la_Vella_Skyline.jpg"
  },
  {
    name: 'Monaco',
    descriptionFr: "Micro-scène pop/chanson, influence française/italienne.",
    descriptionEn: "Micro pop/chanson scene with FR/IT influence.",
    regions: ['Monte-Carlo'],
    artists: ['Léo Ferré (lien historique)'],
    spotify: "https://open.spotify.com/search/Monaco%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Monaco_Skyline.jpg"
  },
  {
    name: 'San Marino',
    descriptionFr: "Très petite scène pop/rock, Eurovision ponctuel.",
    descriptionEn: "Very small pop/rock scene, occasional Eurovision.",
    regions: ['Città di San Marino'],
    artists: ['Valentina Monetta'],
    spotify: "https://open.spotify.com/search/San%20Marino%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/San_Marino_Skyline.jpg"
  },
  {
    name: 'Liechtenstein',
    descriptionFr: "Micro-scène alpine pop/rock.",
    descriptionEn: "Micro alpine pop/rock scene.",
    regions: ['Vaduz'],
    artists: ['Elisabeth Gunawan (classique, ex.)'],
    spotify: "https://open.spotify.com/search/Liechtenstein%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Vaduz_Skyline.jpg"
  },
  {
    name: 'Vatican City',
    descriptionFr: "Chant liturgique, chœurs sacrés.",
    descriptionEn: "Liturgical chant, sacred choirs.",
    regions: ['Città del Vaticano'],
    artists: ['Chœur de la Chapelle Sixtine'],
    spotify: "https://open.spotify.com/search/Vatican%20choir",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Vatican_City_Skyline.jpg"
  },

  // ——— TURQUIE ———
  {
    name: 'Turkey',
    descriptionFr: "Arabesque, pop turque, anatolian rock/psych.",
    descriptionEn: "Arabesk, Turkish pop, Anatolian rock/psych.",
    regions: ['Istanbul', 'Ankara', 'Izmir'],
    artists: ['Barış Manço', 'Selda Bağcan', 'Sezen Aksu'],
    spotify: "https://open.spotify.com/search/Turkey%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Istanbul_Skyline_from_Galata_Tower.jpg",
    cityStyles: [
      { city: 'Istanbul', noteFr: "Anatolian rock/psych, pop moderne.", noteEn: "Anatolian rock/psych, modern pop." }
    ]
  },

  // ——— MOYEN-ORIENT ———
  {
    name: 'Israel',
    descriptionFr: "Scènes pop/rock/électro et courant mizrahi.",
    descriptionEn: "Pop/rock/electronic scenes and Mizrahi current.",
    regions: ['Tel Aviv', 'Jerusalem', 'Haifa'],
    artists: ['Infected Mushroom', 'Eyal Golan', 'Noga Erez'],
    spotify: "https://open.spotify.com/search/israel%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Tel_Aviv_Skyline.jpg"
  },
  {
    name: 'Palestine',
    descriptionFr: "Rap/indé, oud et dabke modernes.",
    descriptionEn: "Rap/indie, oud and modern dabke.",
    regions: ['Ramallah', 'Gaza', 'Bethlehem'],
    artists: ['DAM', 'Le Trio Joubran'],
    spotify: "https://open.spotify.com/search/palestinian%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ramallah_skyline.jpg"
  },
  {
    name: 'Lebanon',
    descriptionFr: "Pop arabe, tarab moderne, scène Beyrouth.",
    descriptionEn: "Arabic pop, modern tarab, Beirut scene.",
    regions: ['Beirut', 'Tripoli'],
    artists: ['Fairuz', 'Mashrou' Leila'],
    spotify: "https://open.spotify.com/search/lebanon%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Beirut_Skyline.jpg"
  },
  {
    name: 'Syria',
    descriptionFr: "Dabke, tarab, tradition maqâm.",
    descriptionEn: "Dabke, tarab, maqam tradition.",
    regions: ['Damascus', 'Aleppo'],
    artists: ['Omar Souleyman', 'Sabah Fakhri'],
    spotify: "https://open.spotify.com/search/syrian%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Damascus_Skyline.jpg"
  },
  {
    name: 'Jordan',
    descriptionFr: "Dabke, rock/indé émergent à Amman.",
    descriptionEn: "Dabke, emerging indie/rock in Amman.",
    regions: ['Amman', 'Irbid'],
    artists: ['Ayloul'],
    spotify: "https://open.spotify.com/search/jordan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Amman_Skyline.jpg"
  },
  {
    name: 'Iraq',
    descriptionFr: "Maqâm irakien, pop/rap récent.",
    descriptionEn: "Iraqi maqam, recent pop/rap.",
    regions: ['Baghdad', 'Basra', 'Erbil'],
    artists: ['Ilham al-Madfai'],
    spotify: "https://open.spotify.com/search/iraqi%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Baghdad_Skyline.jpg"
  },
  {
    name: 'Iran',
    descriptionFr: "Musique persane (dastgâh), pop/rock moderne.",
    descriptionEn: "Persian classical (dastgah), modern pop/rock.",
    regions: ['Tehran', 'Isfahan', 'Shiraz'],
    artists: ['Shajarian', 'Googoosh', 'Kiosk'],
    spotify: "https://open.spotify.com/search/iranian%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Tehran_Skyline.jpg"
  },
  {
    name: 'Saudi Arabia',
    descriptionFr: "Khaleeji pop/folk, scène moderne à Riyad/Jeddah.",
    descriptionEn: "Khaleeji pop/folk, modern scene in Riyadh/Jeddah.",
    regions: ['Riyadh', 'Jeddah', 'Dammam'],
    artists: ['Mohammed Abdu'],
    spotify: "https://open.spotify.com/search/saudi%20arabia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Riyadh_skyline.jpg"
  },
  {
    name: 'United Arab Emirates',
    descriptionFr: "Scène club/DJ internationale + khaleeji moderne.",
    descriptionEn: "International club/DJ scene + modern Khaleeji.",
    regions: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    artists: ['DJ Bliss'],
    spotify: "https://open.spotify.com/search/uae%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Dubai_Skyline_2015.jpg"
  },
  {
    name: 'Qatar',
    descriptionFr: "Khaleeji pop, scène en développement.",
    descriptionEn: "Khaleeji pop, developing scene.",
    regions: ['Doha'],
    artists: [],
    spotify: "https://open.spotify.com/search/qatar%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Doha_Skyline.jpg"
  },
  {
    name: 'Bahrain',
    descriptionFr: "Khaleeji, percussions du Golfe, pop locale.",
    descriptionEn: "Khaleeji, Gulf percussion, local pop.",
    regions: ['Manama'],
    artists: [],
    spotify: "https://open.spotify.com/search/bahrain%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Manama_skyline.jpg"
  },
  {
    name: 'Kuwait',
    descriptionFr: "Khaleeji, tradition de luth/oud et percussions.",
    descriptionEn: "Khaleeji, oud/percussion traditions.",
    regions: ['Kuwait City'],
    artists: ['Nawal El Kuwaitia'],
    spotify: "https://open.spotify.com/search/kuwait%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Kuwait_City_Skyline.jpg"
  },
  {
    name: 'Oman',
    descriptionFr: "Khaleeji+influences africaines de la côte.",
    descriptionEn: "Khaleeji + East African coastal influences.",
    regions: ['Muscat', 'Salalah'],
    artists: [],
    spotify: "https://open.spotify.com/search/oman%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Muscat_Skyline.jpg"
  },
  {
    name: 'Yemen',
    descriptionFr: "Hadrami/outh, chant modal.",
    descriptionEn: "Hadrami/oud, modal singing.",
    regions: ['Sana'a', 'Aden', 'Mukalla'],
    artists: ['Abu Bakr Salem'],
    spotify: "https://open.spotify.com/search/yemen%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Sanaa_Skyline.jpg"
  },
  {
    name: 'Armenia',
    descriptionFr: "Folk/duduk, chœurs, fusion moderne.",
    descriptionEn: "Folk/duduk, choirs, modern fusion.",
    regions: ['Yerevan', 'Gyumri'],
    artists: ['Jivan Gasparyan'],
    spotify: "https://open.spotify.com/search/armenia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Yerevan_Skyline.jpg"
  },
  {
    name: 'Azerbaijan',
    descriptionFr: "Mugham (art modal), jazz-mugham.",
    descriptionEn: "Mugham (modal art), jazz-mugham fusions.",
    regions: ['Baku', 'Ganja'],
    artists: ['Alim Qasimov'],
    spotify: "https://open.spotify.com/search/azerbaijan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Baku_Skyline.jpg"
  },
  {
    name: 'Georgia',
    descriptionFr: "Polyphonies, folk, rock/électro émergents.",
    descriptionEn: "Polyphony, folk, emerging rock/electronic.",
    regions: ['Tbilisi', 'Batumi'],
    artists: ['Rustavi Choir', 'Katie Melua'],
    spotify: "https://open.spotify.com/search/georgia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tbilisi_Skyline.jpg"
  },

  // ——— ASIE CENTRALE ———
  {
    name: 'Kazakhstan',
    descriptionFr: "Q-Pop, dombra folk, hip-hop/électro émergents.",
    descriptionEn: "Q-Pop, dombra folk, emerging hip-hop/electronic.",
    regions: ['Almaty', 'Astana'],
    artists: ['Ninety One', 'Dimash Kudaibergen'],
    spotify: "https://open.spotify.com/search/kazakhstan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Almaty_skyline.jpg"
  },
  {
    name: 'Uzbekistan',
    descriptionFr: "Shashmaqam, folk, pop ouzbèke.",
    descriptionEn: "Shashmaqam, folk, Uzbek pop.",
    regions: ['Tashkent', 'Bukhara', 'Samarkand'],
    artists: [],
    spotify: "https://open.spotify.com/search/uzbekistan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Registan_Samarqand.jpg"
  },
  {
    name: 'Kyrgyzstan',
    descriptionFr: "Komuz folk, épopées/manas, pop moderne.",
    descriptionEn: "Komuz folk, manas epics, modern pop.",
    regions: ['Bishkek', 'Osh'],
    artists: [],
    spotify: "https://open.spotify.com/search/kyrgyz%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Bishkek_Ala-Too_Square.jpg"
  },
  {
    name: 'Tajikistan',
    descriptionFr: "Shashmaqam (avec Ouzbékistan), folk pamiri.",
    descriptionEn: "Shashmaqam (with Uzbekistan), Pamiri folk.",
    regions: ['Dushanbe', 'Khorog'],
    artists: [],
    spotify: "https://open.spotify.com/search/tajikistan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Dushanbe_Skyline.jpg"
  },
  {
    name: 'Turkmenistan',
    descriptionFr: "Dutar folk, traditions sahariennes/des steppes.",
    descriptionEn: "Dutar folk, steppe/desert traditions.",
    regions: ['Ashgabat', 'Mary'],
    artists: [],
    spotify: "https://open.spotify.com/search/turkmen%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Ashgabat_Skyline.jpg"
  },
  {
    name: 'Afghanistan',
    descriptionFr: "Ghazal/rubab, folk, pop/rap diasporique.",
    descriptionEn: "Ghazal/rubab, folk, diaspora pop/rap.",
    regions: ['Kabul', 'Herat', 'Mazar-i-Sharif'],
    artists: ['Ustad Mohammad Omar', 'Qais Essar'],
    spotify: "https://open.spotify.com/search/afghanistan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kabul_skyline.jpg"
  },
// ——— ASIE DE L'EST ———
  {
    name: 'Japan',
    descriptionFr: "J-Pop, City Pop, enka; rock/électro créatifs.",
    descriptionEn: "J-Pop, City Pop, enka; creative rock/electronic.",
    regions: ['Tokyo', 'Osaka', 'Kyoto'],
    artists: ['Hikaru Utada', 'Tatsuro Yamashita'],
    spotify: "https://open.spotify.com/search/japan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Tokyo_Tower_and_around_Skyscrapers.jpg"
  },
  {
    name: 'South Korea',
    descriptionFr: "K-Pop, hip-hop, R&B et trot.",
    descriptionEn: "K-Pop, hip-hop, R&B and trot.",
    regions: ['Seoul', 'Busan'],
    artists: ['BTS', 'BLACKPINK', 'Epik High'],
    spotify: "https://open.spotify.com/search/korea%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Seoul_Skyline_2019.jpg"
  },
  {
    name: 'China',
    descriptionFr: "Mandopop, traditions (guqin/guzheng), rock chinois.",
    descriptionEn: "Mandopop, classical (guqin/guzheng), Chinese rock.",
    regions: ['Beijing', 'Shanghai', 'Chengdu'],
    artists: ['Faye Wong', 'Cui Jian'],
    spotify: "https://open.spotify.com/search/china%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Shanghai_Skyline%2C_2017.jpg"
  },
  {
    name: 'Hong Kong',
    descriptionFr: "Cantopop iconique; pop/rock cantonais.",
    descriptionEn: "Iconic Cantopop; Cantonese pop/rock.",
    regions: ['Hong Kong Island', 'Kowloon'],
    artists: ['Leslie Cheung', 'Eason Chan'],
    spotify: "https://open.spotify.com/search/hong%20kong%20cantopop",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hong_Kong_Skyline_Restitch_-_Dec_2007.jpg"
  },
  {
    name: 'Taiwan',
    descriptionFr: "Mandopop, indie/électro Taipei.",
    descriptionEn: "Mandopop, Taipei indie/electronic.",
    regions: ['Taipei', 'Kaohsiung'],
    artists: ['Jay Chou', 'Jolin Tsai'],
    spotify: "https://open.spotify.com/search/taiwan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Taipei_101_2020.jpg"
  },
  {
    name: 'Mongolia',
    descriptionFr: "Chant diphonique khoomei; rock folk.",
    descriptionEn: "Khoomei throat singing; folk rock.",
    regions: ['Ulaanbaatar'],
    artists: ['The HU'],
    spotify: "https://open.spotify.com/search/mongolia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Ulaanbaatar_skyline.jpg"
  },

  // ——— ASIE DU SUD ———
  {
    name: 'India',
    descriptionFr: "Bollywood, hindoustani, carnatique, bhangra.",
    descriptionEn: "Bollywood, Hindustani, Carnatic, Bhangra.",
    regions: ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'],
    artists: ['AR Rahman', 'Ravi Shankar'],
    spotify: "https://open.spotify.com/search/india%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mumbai_Skyline_at_Night.jpg"
  },
  {
    name: 'Pakistan',
    descriptionFr: "Qawwali, Coke Studio fusions.",
    descriptionEn: "Qawwali, Coke Studio fusions.",
    regions: ['Lahore', 'Karachi', 'Islamabad'],
    artists: ['Nusrat Fateh Ali Khan', 'Atif Aslam'],
    spotify: "https://open.spotify.com/search/pakistan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Badshahi_Masjid_Sunset.jpg"
  },
  {
    name: 'Bangladesh',
    descriptionFr: "Baul, pop/rock moderne.",
    descriptionEn: "Baul, modern pop/rock.",
    regions: ['Dhaka', 'Chittagong'],
    artists: ['Purna Das Baul'],
    spotify: "https://open.spotify.com/search/bangladesh%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dhaka_Skyline.jpg"
  },
  {
    name: 'Sri Lanka',
    descriptionFr: "Baila, pop/folklore moderne.",
    descriptionEn: "Baila, modern pop/folk.",
    regions: ['Colombo', 'Kandy'],
    artists: ['W.D. Amaradeva'],
    spotify: "https://open.spotify.com/search/sri%20lanka%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Colombo_Skyline.jpg"
  },
  {
    name: 'Nepal',
    descriptionFr: "Folk népalais, pop/rock Kathmandu.",
    descriptionEn: "Nepali folk, Kathmandu pop/rock.",
    regions: ['Kathmandu', 'Pokhara'],
    artists: ['Kutumba'],
    spotify: "https://open.spotify.com/search/nepal%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Kathmandu_skyline.jpg"
  },
  {
    name: 'Bhutan',
    descriptionFr: "Folk dranyen, chants rituels.",
    descriptionEn: "Dranyen folk, ritual songs.",
    regions: ['Thimphu', 'Paro'],
    artists: [],
    spotify: "https://open.spotify.com/search/bhutan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Thimphu_Skyline.jpg"
  },
  {
    name: 'Maldives',
    descriptionFr: "Boduberu percussif; pop insulaire.",
    descriptionEn: "Percussive Boduberu; island pop.",
    regions: ['Malé'],
    artists: [],
    spotify: "https://open.spotify.com/search/maldives%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Male%2C_Maldives.jpg"
  },

  // ——— ASIE DU SUD-EST ———
  {
    name: 'Indonesia',
    descriptionFr: "Gamelan, dangdut, kroncong.",
    descriptionEn: "Gamelan, dangdut, kroncong.",
    regions: ['Jakarta', 'Yogyakarta', 'Bali'],
    artists: ['Rhoma Irama', 'Gamelan Gong Kebyar'],
    spotify: "https://open.spotify.com/search/indonesia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Jakarta_Skyline_Part_2.jpg"
  },
  {
    name: 'Malaysia',
    descriptionFr: "Pop malaise, nasyid, joget.",
    descriptionEn: "Malay pop, nasyid, joget.",
    regions: ['Kuala Lumpur', 'Penang'],
    artists: ['Yuna', 'Raihan'],
    spotify: "https://open.spotify.com/search/malaysia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/KL_Skyline_Petronas.jpg"
  },
  {
    name: 'Singapore',
    descriptionFr: "Mandopop SG, scène multi-ethnique.",
    descriptionEn: "Mandopop SG, multi-ethnic scene.",
    regions: ['Singapore'],
    artists: ['JJ Lin'],
    spotify: "https://open.spotify.com/search/singapore%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Singapore_skyline.jpg"
  },
  {
    name: 'Philippines',
    descriptionFr: "OPM pop/rock, kundiman.",
    descriptionEn: "OPM pop/rock, kundiman.",
    regions: ['Manila', 'Cebu', 'Davao'],
    artists: ['Eraserheads', "Ben&Ben"],
    spotify: "https://open.spotify.com/search/philippines%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Manila_Skyline_View.jpg"
  },
  {
    name: 'Thailand',
    descriptionFr: "Thai pop, luk thung, mor lam.",
    descriptionEn: "Thai pop, luk thung, mor lam.",
    regions: ['Bangkok', 'Chiang Mai', 'Isan'],
    artists: ['Tilly Birds', 'Pumpuang Duangjan'],
    spotify: "https://open.spotify.com/search/thailand%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Bangkok_Skytrain_skyline.jpg"
  },
  {
    name: 'Vietnam',
    descriptionFr: "V-Pop, nhạc vàng.",
    descriptionEn: "V-Pop, nhạc vàng.",
    regions: ['Hanoi', 'Ho Chi Minh City'],
    artists: ['Sơn Tùng M-TP', 'Khánh Ly'],
    spotify: "https://open.spotify.com/search/vietnam%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ho_Chi_Minh_City_Skyline.jpg"
  },
  {
    name: 'Cambodia',
    descriptionFr: "Khmer oldies, Cambodian rock (revival).",
    descriptionEn: "Khmer oldies, Cambodian rock (revival).",
    regions: ['Phnom Penh', 'Siem Reap'],
    artists: ['Sinn Sisamouth', 'Dengue Fever'],
    spotify: "https://open.spotify.com/search/cambodia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Phnom_Penh_Skyline.jpg"
  },
  {
    name: 'Laos',
    descriptionFr: "Lao lam, khene, folk.",
    descriptionEn: "Lao lam, khene, folk.",
    regions: ['Vientiane', 'Luang Prabang'],
    artists: [],
    spotify: "https://open.spotify.com/search/laos%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Vientiane_Skyline.jpg"
  },
  {
    name: 'Myanmar',
    descriptionFr: "Pop birmane, hsaing waing tradi.",
    descriptionEn: "Burmese pop, traditional hsaing waing.",
    regions: ['Yangon', 'Mandalay'],
    artists: [],
    spotify: "https://open.spotify.com/search/myanmar%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Yangon_Skyline.jpg"
  },
  {
    name: 'Brunei',
    descriptionFr: "Pop malaise locale.",
    descriptionEn: "Local Malay pop.",
    regions: ['Bandar Seri Begawan'],
    artists: [],
    spotify: "https://open.spotify.com/search/brunei%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Bandar_Seri_Begawan_Skyline.jpg"
  },
  {
    name: 'Timor-Leste',
    descriptionFr: "Tebe-dai, chant/danse communautaire.",
    descriptionEn: "Tebe-dai, communal singing/dance.",
    regions: ['Dili', 'Baucau'],
    artists: [],
    spotify: "https://open.spotify.com/search/timor%20leste%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Timor_Leste_Hills.jpg"
  },
  {
    name: 'Morocco',
    descriptionFr: "Gnawa, chaabi, folk amazigh; scènes électro/cinéma.",
    descriptionEn: "Gnawa, chaabi, Amazigh folk; electronic/cinema scenes.",
    regions: ['Casablanca', 'Marrakesh', 'Fès'],
    artists: ['Maâlem Mahmoud Guinia', 'Nass El Ghiwane'],
    spotify: "https://open.spotify.com/search/morocco%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Casablanca_Skyline.jpg"
  },
  {
    name: 'Algeria',
    descriptionFr: "Raï (Oran), chaabi (Alger), rock/rap contemporains.",
    descriptionEn: "Raï (Oran), chaabi (Algiers), contemporary rock/rap.",
    regions: ['Oran', 'Algiers', 'Constantine'],
    artists: ['Cheb Khaled', 'Dahmane El Harrachi'],
    spotify: "https://open.spotify.com/search/algeria%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Algiers_Skyline.jpg"
  },
  {
    name: 'Tunisia',
    descriptionFr: "Malouf andalou, mezoued, pop moderne.",
    descriptionEn: "Andalusian malouf, mezoued, modern pop.",
    regions: ['Tunis', 'Sfax'],
    artists: ['Rachidia Ensemble'],
    spotify: "https://open.spotify.com/search/tunisia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tunis_Skyline.jpg"
  },
  {
    name: 'Libya',
    descriptionFr: "Ma'luf/chaabi, pop arabe locale.",
    descriptionEn: "Ma'luf/chaabi and local Arabic pop.",
    regions: ['Tripoli', 'Benghazi'],
    artists: [],
    spotify: "https://open.spotify.com/search/libya%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Tripoli_Skyline.jpg"
  },
  {
    name: 'Egypt',
    descriptionFr: "Mahraganat, shaabi, pop arabe et tarab classique.",
    descriptionEn: "Mahraganat, shaabi, Arabic pop and classical tarab.",
    regions: ['Cairo', 'Alexandria'],
    artists: ['Umm Kulthum', 'Amr Diab'],
    spotify: "https://open.spotify.com/search/egypt%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Cairo_Skyline.jpg"
  },
// ——— AFRIQUE DE L'OUEST ———
  {
    name: 'Nigeria',
    descriptionFr: "Afrobeat (Fela), Afrobeats, juju, fuji.",
    descriptionEn: "Afrobeat (Fela), Afrobeats, juju, fuji.",
    regions: ['Lagos', 'Abuja', 'Ibadan'],
    artists: ['Fela Kuti', 'Wizkid', 'Burna Boy'],
    spotify: "https://open.spotify.com/search/nigeria%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Lagos_Island_skyline.jpg"
  },
  {
    name: 'Ghana',
    descriptionFr: "Highlife, hiplife, azonto; afro-fusion.",
    descriptionEn: "Highlife, hiplife, azonto; afro-fusion.",
    regions: ['Accra', 'Kumasi'],
    artists: ['E.T. Mensah', 'Reggie Rockstone'],
    spotify: "https://open.spotify.com/search/ghana%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Accra_skyline.jpg"
  },
  {
    name: 'Senegal',
    descriptionFr: "Mbalax (sabar), hip-hop, mbalax-pop.",
    descriptionEn: "Mbalax (sabar), hip-hop, mbalax-pop.",
    regions: ['Dakar', 'Saint-Louis'],
    artists: ['Youssou N\'Dour'],
    spotify: "https://open.spotify.com/search/senegal%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Dakar_Skyline.jpg"
  },
  {
    name: 'Mali',
    descriptionFr: "Desert blues, griots mandingues, kora.",
    descriptionEn: "Desert blues, Manding griots, kora.",
    regions: ['Bamako', 'Timbuktu'],
    artists: ['Ali Farka Touré', 'Toumani Diabaté'],
    spotify: "https://open.spotify.com/search/mali%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Bamako_skyline.jpg"
  },
  {
    name: 'Ivory Coast',
    descriptionFr: "Coupé-décalé, zouglou, pop/rap abidjanais.",
    descriptionEn: "Coupé-décalé, zouglou, Abidjan pop/rap.",
    regions: ['Abidjan', 'Bouaké'],
    artists: ['DJ Arafat', 'Magic System'],
    spotify: "https://open.spotify.com/search/ivory%20coast%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Abidjan_skyline.jpg"
  },
  {
    name: 'Guinea',
    descriptionFr: "Percussions mandingues, voix puissantes.",
    descriptionEn: "Mande percussion traditions, powerful vocals.",
    regions: ['Conakry'],
    artists: [],
    spotify: "https://open.spotify.com/search/guinea%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Conakry.jpg"
  },
  {
    name: 'Gambia',
    descriptionFr: "Kora/griots, afro-pop locale.",
    descriptionEn: "Kora/griot traditions, local afro-pop.",
    regions: ['Banjul'],
    artists: [],
    spotify: "https://open.spotify.com/search/gambia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Banjul_Skyline.jpg"
  },
  {
    name: 'Benin',
    descriptionFr: "Afro-funk/vodun, highlife/afrobeat historiques.",
    descriptionEn: "Afro-funk/vodun, historic highlife/afrobeat.",
    regions: ['Cotonou'],
    artists: ["Angélique Kidjo"],
    spotify: "https://open.spotify.com/search/benin%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Cotonou.jpg"
  },
  {
    name: 'Togo',
    descriptionFr: "Afro-funk/électro locale.",
    descriptionEn: "Local afro-funk/electro.",
    regions: ['Lomé'],
    artists: [],
    spotify: "https://open.spotify.com/search/togo%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Lome_Togo.jpg"
  },
  {
    name: 'Burkina Faso',
    descriptionFr: "Folk mossi, balafon/guitares, rap Ouaga.",
    descriptionEn: "Mossi folk, balafon/guitars, Ouaga rap.",
    regions: ['Ouagadougou', 'Bobo-Dioulasso'],
    artists: [],
    spotify: "https://open.spotify.com/search/burkina%20faso%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ouagadougou_downtown.jpg"
  },
  {
    name: 'Niger',
    descriptionFr: "Blues touareg/sahel, tendences takamba.",
    descriptionEn: "Tuareg/Sahel blues, takamba tendencies.",
    regions: ['Niamey', 'Agadez'],
    artists: ["Bombino"],
    spotify: "https://open.spotify.com/search/niger%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Niamey_skyline.jpg"
  },
  {
    name: 'Cape Verde',
    descriptionFr: "Morna, coladeira, funaná.",
    descriptionEn: "Morna, coladeira, funaná.",
    regions: ['Mindelo', 'Praia'],
    artists: ['Cesária Évora'],
    spotify: "https://open.spotify.com/search/cape%20verde%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Mindelo_Cape_Verde.jpg"
  },
// ——— AFRIQUE CENTRALE ———
  {
    name: 'DR Congo',
    descriptionFr: "Rumba congolaise, soukous/ndombolo, rumba moderne.",
    descriptionEn: "Congolese rumba, soukous/ndombolo, modern rumba.",
    regions: ['Kinshasa', 'Goma'],
    artists: ['Franco', 'Fally Ipupa'],
    spotify: "https://open.spotify.com/search/congo%20rumba",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Kinshasa_Skyline.jpg"
  },
  {
    name: 'Republic of the Congo',
    descriptionFr: "Rumba congolaise (Brazzaville), soukous.",
    descriptionEn: "Congo-Brazzaville rumba, soukous.",
    regions: ['Brazzaville', 'Pointe-Noire'],
    artists: [],
    spotify: "https://open.spotify.com/search/congo%20brazzaville%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Brazzaville_skyline.jpg"
  },
  {
    name: 'Cameroon',
    descriptionFr: "Makossa, bikutsi, afro-pop/rap.",
    descriptionEn: "Makossa, bikutsi, afro-pop/rap.",
    regions: ['Douala', 'Yaoundé'],
    artists: ['Manu Dibango'],
    spotify: "https://open.spotify.com/search/cameroon%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Douala_Skyline.jpg"
  },
  {
    name: 'Gabon',
    descriptionFr: "Afro-pop et traditions fang.",
    descriptionEn: "Afro-pop and Fang traditions.",
    regions: ['Libreville'],
    artists: [],
    spotify: "https://open.spotify.com/search/gabon%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Libreville_skyline.jpg"
  },

  // ——— AFRIQUE AUSTRALE ———
  {
    name: 'South Africa',
    descriptionFr: "Amapiano, gqom, kwaito, jazz/rock SA.",
    descriptionEn: "Amapiano, gqom, kwaito, SA jazz/rock.",
    regions: ['Johannesburg', 'Cape Town', 'Durban'],
    artists: ['Kabza De Small', 'Hugh Masekela'],
    spotify: "https://open.spotify.com/search/south%20africa%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Johannesburg_Skyline.jpg"
  },
  {
    name: 'Zimbabwe',
    descriptionFr: "Chimurenga/mbira, sungura.",
    descriptionEn: "Chimurenga/mbira, sungura.",
    regions: ['Harare', 'Bulawayo'],
    artists: ["Thomas Mapfumo"],
    spotify: "https://open.spotify.com/search/zimbabwe%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Harare_skyline.jpg"
  },
  {
    name: 'Zambia',
    descriptionFr: "Kalindula, zedbeats modernes.",
    descriptionEn: "Kalindula, modern zedbeats.",
    regions: ['Lusaka'],
    artists: [],
    spotify: "https://open.spotify.com/search/zambia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Lusaka_skyline.jpg"
  },
  {
    name: 'Namibia',
    descriptionFr: "Shambo, scènes afropop/house.",
    descriptionEn: "Shambo, afropop/house scenes.",
    regions: ['Windhoek'],
    artists: [],
    spotify: "https://open.spotify.com/search/namibia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Windhoek_skyline.jpg"
  },
  {
    name: 'Botswana',
    descriptionFr: "House/Kwaaito local, folk setswana.",
    descriptionEn: "Local house/kwaito, Setswana folk.",
    regions: ['Gaborone'],
    artists: [],
    spotify: "https://open.spotify.com/search/botswana%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Gaborone_skyline.jpg"
  },
  {
    name: 'Mozambique',
    descriptionFr: "Marrabenta, afro-pop/rap Maputo.",
    descriptionEn: "Marrabenta, Maputo afro-pop/rap.",
    regions: ['Maputo'],
    artists: ['Fany Pfumo'],
    spotify: "https://open.spotify.com/search/mozambique%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Maputo_skyline.jpg"
  },
  {
    name: 'Angola',
    descriptionFr: "Kuduro, kizomba/semba.",
    descriptionEn: "Kuduro, kizomba/semba.",
    regions: ['Luanda'],
    artists: ['Bonga'],
    spotify: "https://open.spotify.com/search/angola%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Luanda_skyline.jpg"
  },
  {
    name: 'Madagascar',
    descriptionFr: "Salegy/tsapiky, folk malgache.",
    descriptionEn: "Salegy/tsapiky and Malagasy folk.",
    regions: ['Antananarivo', 'Toliara'],
    artists: ['Jaojoby', "D'Gary"],
    spotify: "https://open.spotify.com/search/madagascar%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Antananarivo_skyline.jpg"
  },
  {
    name: 'Mauritius',
    descriptionFr: "Sega, seggae, pop créole.",
    descriptionEn: "Sega, seggae, Creole pop.",
    regions: ['Port Louis'],
    artists: ['Ti Frère'],
    spotify: "https://open.spotify.com/search/mauritius%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Port_Louis_Skyline.jpg"
  },
// ——— AFRIQUE DE L'EST ———
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
  },
// ——— AMÉRIQUE DU NORD ———
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
    name: 'Canada',
    descriptionFr: "Chanson québécoise, indie canadien, hip-hop, traditions autochtones.",
    descriptionEn: "Quebec chanson, Canadian indie, hip-hop, Indigenous traditions.",
    regions: ['Montréal', 'Toronto', 'Vancouver', 'Québec', 'Halifax'],
    artists: ['Leonard Cohen', 'Céline Dion', 'Drake', 'The Weeknd', 'Arcade Fire'],
    spotify: "https://open.spotify.com/search/canada%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Montreal_skyline_from_Mt._Royal.jpg"
  },

  // ——— OCÉANIE ———
  {
    name: 'Australia',
    descriptionFr: "Rock/indie australien, traditions aborigènes, électronique.",
    descriptionEn: "Australian rock/indie, Aboriginal traditions, electronic.",
    regions: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
    artists: ['AC/DC', 'Tame Impala'],
    spotify: "https://open.spotify.com/search/australia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sydney_skyline_from_the_north.jpg"
  },
  {
    name: 'New Zealand',
    descriptionFr: "Pop/indie NZ et chants māori (waiata).",
    descriptionEn: "NZ pop/indie and Māori waiata.",
    regions: ['Auckland', 'Wellington', 'Christchurch'],
    artists: ['Lorde', 'Fat Freddy\'s Drop'],
    spotify: "https://open.spotify.com/search/new%20zealand%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Auckland_skyline.jpg"
  },
  {
    name: 'Papua New Guinea',
    descriptionFr: "Stringband, percussions garamut, chants polyphoniques.",
    descriptionEn: "Stringband, garamut percussion, polyphonic singing.",
    regions: ['Port Moresby'],
    artists: [],
    spotify: "https://open.spotify.com/search/papua%20new%20guinea%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Port_Moresby_skyline.jpg"
  },
  {
    name: 'Fiji',
    descriptionFr: "Vude, island reggae, polyphonie.",
    descriptionEn: "Vude, island reggae, polyphony.",
    regions: ['Suva', 'Nadi'],
    artists: [],
    spotify: "https://open.spotify.com/search/fiji%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Suva_skyline.jpg"
  },
  {
    name: 'Samoa',
    descriptionFr: "Pop polynésienne, chœurs, reggae insulaire.",
    descriptionEn: "Polynesian pop, choral traditions, island reggae.",
    regions: ['Apia'],
    artists: [],
    spotify: "https://open.spotify.com/search/samoa%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Apia_Samoa.jpg"
  },
  {
    name: 'Tonga',
    descriptionFr: "Chants/chœurs polynésiens, pop contemporaine.",
    descriptionEn: "Polynesian choral music, contemporary pop.",
    regions: ["Nuku'alofa"],
    artists: [],
    spotify: "https://open.spotify.com/search/tonga%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Nukualofa.jpg"
  },
  {
    name: 'Solomon Islands',
    descriptionFr: "Stringband, island reggae.",
    descriptionEn: "Stringband, island reggae.",
    regions: ['Honiara'],
    artists: [],
    spotify: "https://open.spotify.com/search/solomon%20islands%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Honiara_Skyline.jpg"
  },
  {
    name: 'Vanuatu',
    descriptionFr: "Stringband, percussions, folk mélanésien.",
    descriptionEn: "Stringband, percussion, Melanesian folk.",
    regions: ['Port Vila'],
    artists: [],
    spotify: "https://open.spotify.com/search/vanuatu%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Port_Vila.jpg"
  }
];
