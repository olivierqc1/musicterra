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
    artists: ['Metallica','Iron Maiden','Black Sabbath'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Heavy_metal_band.jpg"
  },
  {
    name: 'Reggae',
    descriptionFr: "Originaire de la Jamaïque, rythmes lents et messages sociaux.",
    descriptionEn: "Originated in Jamaica, slow rhythms and social messages.",
    subgenres: ['Roots','Rocksteady','Dancehall','Dub','Lovers Rock','Ragga'],
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
    artists: ['Miles Davis','John Coltrane','Louis Armstrong'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Jazz_band.jpg"
  },

  // ——— USA spécifiques (optionnels mais recommandés) ———
  {
    name: 'Hip-Hop',
    descriptionFr: "Né dans le Bronx; rimes, beats et culture DJ/MC.",
    descriptionEn: "Born in the Bronx; rhymes, beats and DJ/MC culture.",
    subgenres: ['Boom Bap','Trap','Alternative Rap','West Coast','East Coast','Drill','Lo-Fi'],
    artists: ['Kendrick Lamar','Jay-Z','Missy Elliott'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Graffiti_Bronx.jpg"
  },
  {
    name: 'Country',
    descriptionFr: "Originaire du Sud des États-Unis; guitares, histoires et harmonies.",
    descriptionEn: "From the American South; guitars, storytelling and harmonies.",
    subgenres: ['Classic Country','Modern Country','Bluegrass','Outlaw','Alt-Country'],
    artists: ['Johnny Cash','Dolly Parton','Chris Stapleton'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nashville_Broadway.jpg"
  },
  {
    name: 'Blues',
    descriptionFr: "Né dans le Delta du Mississippi; racines du rock et du jazz.",
    descriptionEn: "Born in the Mississippi Delta; roots of rock and jazz.",
    subgenres: ['Delta Blues','Chicago Blues','Electric Blues','Piedmont','Country Blues'],
    artists: ['B.B. King','Muddy Waters','Etta James'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/BB_King_2009.jpg"
  },

  // ——— Afrique de l’Est ———
  {
    name: 'Bongo Flava',
    descriptionFr: "Genre tanzanien mêlant hip-hop, R&B et influences swahilies.",
    descriptionEn: "Tanzanian genre mixing hip-hop, R&B and Swahili influences.",
    subgenres: ['Afro-Fusion','Swahili Pop','Dance-Pop'],
    artists: ['Diamond Platnumz','Ali Kiba','Harmonize'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdI8tzTp8Kjk",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Diamond_Platnumz_live.jpg"
  },
  {
    name: 'Taarab',
    descriptionFr: "Musique de Zanzibar, mélange arabe, swahili et indien.",
    descriptionEn: "Zanzibar music blending Arabic, Swahili and Indian influences.",
    subgenres: ['Classique','Moderne'],
    artists: ['Bi Kidude','Culture Musical Club'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWSmCnE8n7DWH",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Zanzibar_Taarab_performance.jpg"
  },
  {
    name: 'Genge',
    descriptionFr: "Hip-hop kenyan avec paroles en sheng et rythmes locaux.",
    descriptionEn: "Kenyan hip-hop with sheng lyrics and local rhythms.",
    subgenres: ['Gengetone','Hip-hop Fusion'],
    artists: ['Jua Cali','Nonini'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWYkaDif7Ztbp",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Jua_Cali_performance.jpg"
  },
  {
    name: 'Benga',
    descriptionFr: "Musique dansante kenyane, guitare rapide et rythme entraînant.",
    descriptionEn: "Danceable Kenyan style with fast guitar and upbeat rhythm.",
    subgenres: ['Classic Benga','Modern Benga'],
    artists: ['D.O. Misiani','Suzanna Owiyo'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXcOZ52XmE7XQ",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Benga_band_performance.jpg"
  },
  {
    name: 'Kadongo Kamu',
    descriptionFr: "Musique ougandaise à une guitare, paroles narratives.",
    descriptionEn: "Ugandan one-guitar music with narrative lyrics.",
    subgenres: ['Traditionnel','Moderne'],
    artists: ['Paul Kafeero','Herman Basudde'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWUJcOa0BwVX5",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Uganda_traditional_music.jpg"
  },
  {
    name: 'Rwandan Afrobeat',
    descriptionFr: "Afrobeat rwandais, gospel et pop urbaine contemporaine.",
    descriptionEn: "Rwandan afrobeat, gospel and contemporary urban pop.",
    subgenres: ['Afro-Gospel','Urban Pop'],
    artists: ['Meddy','The Ben'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7dZc2QeWvZQ",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meddy_Rwanda.jpg"
  },
  {
  name: 'Marimba',
  descriptionFr: "Instrument national, présent dans la musique traditionnelle et festive.",
  descriptionEn: "National instrument, central to Guatemalan traditional and festive music.",
  subgenres: ['Marimba folklorique', 'Marimba moderne'],
  artists: ['Marimba Chapinlandia', 'Marimba de Concierto'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4xuWVBs4FgJ",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Marimba_Instrument.jpg"
},
{
  name: 'Fusion Latino',
  descriptionFr: "Mélange de sonorités latines, pop, rock et rythmes traditionnels.",
  descriptionEn: "Mix of Latin sounds, pop, rock, and traditional rhythms.",
  subgenres: ['Pop latino', 'Folk fusion', 'Rock alternatif'],
  artists: ['Gaby Moreno', 'Ricardo Arjona'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1s9knjP51Oa",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Latin_Fusion_Band.jpg"
},
{
  name: 'Punta',
  descriptionFr: "Rythme afro-caribéen garifuna d’Amérique centrale, dansé et festif.",
  descriptionEn: "Afro-Caribbean Garifuna rhythm from Central America, dance-oriented and festive.",
  subgenres: ['Punta Rock', 'Paranda'],
  artists: ['Banda Blanca', 'Aurelio Martínez'],
  spotify: "https://open.spotify.com/playlist/3yhOjgQDnOKcw4ICzwFaPC?si=EqIQcS9oRvK0_MZXgMVG9w&pi=Qt5TWBnORs2gh",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Garifuna_dancers_Belize.jpg",
  cityStyles: [
    {
      city: 'La Ceiba',
      noteFr: "Punta traditionnel et moderne (punta rock).",
      noteEn: "Traditional and modern (punta rock)."
    }
  ]
}
  // --- Limonense Calypso (Costa Rica) ---
{
  name: 'Calypso Limonense',
  descriptionFr: "Calypso afro-caribéen de Limón (Costa Rica), narratif et festif.",
  descriptionEn: "Afro-Caribbean calypso from Limón (Costa Rica), narrative and festive.",
  subgenres: [],
  artists: ['Walter Ferguson'],
  spotify: "https://open.spotify.com/playlist/27X0TfNiQuoOFFT3XjARWH?si=rjI-PYmgT5yTKkAFfZ3puA&pi=YoWfftKoThiOI",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Limon_Costa_Rica.jpg"
},

// --- Palo de Mayo / Maypole (Nicaragua) ---
{
  name: 'Palo de Mayo',
  descriptionFr: "Danse/musique festive de la côte Atlantique nicaraguayenne (Maypole).",
  descriptionEn: "Festive dance/music from Nicaragua’s Atlantic coast (Maypole).",
  subgenres: [],
  artists: ['Dimension Costeña'],
  spotify: "https://open.spotify.com/playlist/6Z1thlZ037D6CswrkkiMtI?si=LnpWeVvBRFOgud-Z0bNeQQ&pi=kdv1nuWLTe2Qp",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bluefields_Maypole.jpg"
},

// --- Xuc (El Salvador) ---
{
  name: 'Xuc',
  descriptionFr: "Genre salvadorien entraînant, proche de la cumbia, né pour la danse.",
  descriptionEn: "Lively Salvadoran genre, cumbia-adjacent and dance-focused.",
  subgenres: [],
  artists: ['Paquito Palaviccini'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1E8PbiHCbKHdCN?si=kdrFrX0GSU6PF9u3JBTymg&pi=XYD8CDcbTQWXw",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/San_Salvador_Dance.jpg"
},

// --- Punta (Honduras / Garifuna) ---
{
  name: 'Punta',
  descriptionFr: "Rythme afro-caribéen garifuna d’Amérique centrale, dansé et festif.",
  descriptionEn: "Afro-Caribbean Garifuna rhythm from Central America, dance-oriented and festive.",
  subgenres: ['Punta Rock', 'Paranda'],
  artists: ['Banda Blanca', 'Aurelio Martínez'],
  spotify: "https://open.spotify.com/playlist/3yhOjgQDnOKcw4ICzwFaPC?si=YilmXQ84QuG1zrQjC27nLA&pi=2Z86grXPQvmGp",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Garifuna_dancers_Belize.jpg"
},

// --- Tamborito (Panama) ---
{
  name: 'Tamborito',
  descriptionFr: "Danse/chant traditionnel panaméen, percussions et chœurs.",
  descriptionEn: "Traditional Panamanian dance/song with percussion and choral response.",
  subgenres: [],
  artists: ['Samy y Sandra Sandoval'],
  spotify: "https://open.spotify.com/playlist/3e9lGa5hjYaoXjn4XZxSOH?si=EL5c5ScxQpGQn_zzZ4X1QQ",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tamborito_Panama.jpg"
},

// --- Típico Panameño ---
{
  name: 'Típico panameño',
  descriptionFr: "Musique folklorique dansée (accordéon, percussions), très populaire au Panama.",
  descriptionEn: "Popular Panamanian folk dance music (accordion, percussion).",
  subgenres: [],
  artists: ['Samy y Sandra Sandoval'],
  spotify: "https://open.spotify.com/playlist/3bGfr6tkKWZtS6YoE7MZUu?si=SKAHDuFYSgelh4OrWoIW-w",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Panama_Tipico.jpg"
},

// --- Reggaetón (Panamá) ---
{
  name: 'Reggaetón (Panamá)',
  descriptionFr: "Scène urbaine panaméenne, parmi les racines historiques du reggaetón.",
  descriptionEn: "Panamanian urban scene, among the historical roots of reggaetón.",
  subgenres: [],
  artists: ['El General'],
  spotify: "https://open.spotify.com/playlist/5dSNRnhAMz7Uw3io5UUEQ2?si=_rrRrOkySIWiDhTa4oV7AA",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Panama_City_urban.jpg"
},
  // Argentina
{
  name: 'Tango',
  descriptionFr: "Danse/genre iconique de Buenos Aires, bandonéon et nostalgie.",
  descriptionEn: "Iconic Buenos Aires dance/music with bandoneon and nostalgia.",
  subgenres: ['Tango Nuevo', 'Milonga'],
  artists: ['Astor Piazzolla', 'Carlos Gardel'],
  spotify:"https://open.spotify.com/playlist/0sAAYyQQemt7UD1rbICQJo?si=WcEpXoEVRf2fFmH7iSrWZw",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Street_tango_Buenos_Aires.jpg"
},
{
  name: 'Rock Nacional (AR)',
  descriptionFr: "Rock argentin en espagnol, identitaire et populaire.",
  descriptionEn: "Argentinian Spanish-language rock, identity-defining and popular.",
  subgenres: [],
  artists: ['Soda Stereo', 'Charly García'],
  spotify:"https://open.spotify.com/playlist/67e8YlkxAwMsoAsqXVoBCh?si=UZOPgedETje2mFoYMmBteg&pi=tizXF6zqQXmTc",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Electric_guitar_closeup.jpg"
},

// Chile
{
  name: 'Cueca',
  descriptionFr: "Danse/genre national chilien, guitare, harpe et chant dialogué.",
  descriptionEn: "Chilean national dance/music with guitar, harp and call-response.",
  subgenres: [],
  artists: ['Violeta Parra'],
  spotify:"https://open.spotify.com/playlist/3d2xkfoedWPUtNCkql58QU?si=3u8QRFdSQryWLMwzIfaZew",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Cueca_chilena.jpg"
},
{
  name: 'Nueva Canción',
  descriptionFr: "Mouvement folk engagé du Cône Sud (années 60-70).",
  descriptionEn: "Politically-engaged folk movement in the Southern Cone (60s-70s).",
  subgenres: [],
  artists: ['Víctor Jara', 'Inti-Illimani'],
  spotify:"https://open.spotify.com/playlist/37i9dQZF1EIcKzfRPMeD3p?si=pV-ignbnS6aqeqh-et9R1Q",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Charango.jpg"
},

// Colombia
{
  name: 'Cumbia (CO)',
  descriptionFr: "Genre côtier colombien, percussions, flûtes de millo et danse circulaire.",
  descriptionEn: "Colombian coastal genre with percussion, flautas de millo and circle dance.",
  subgenres: [],
  artists: ['Totó la Momposina', 'Joe Arroyo'],
  spotify:"https://open.spotify.com/playlist/0h3mUr2mwCoAlVDbZwFC2s?si=ZIuJIiABTZK5eDqyxgOEvA",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Cumbia_Colombia.jpg"
},
{
  name: 'Vallenato',
  descriptionFr: "Musique de l’accordéon des Caraïbes colombiennes.",
  descriptionEn: "Accordion-driven music from Colombia’s Caribbean region.",
  subgenres: [],
  artists: ['Carlos Vives', 'Diomedes Díaz'],
  spotify:"https://open.spotify.com/playlist/4hPws0Egz0eicp6DvEcdyf?si=9pnCJtHTT2iV0Xny4UlE3g&pi=YEU4QBFGR_-nn",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Accordion.jpg"
},
{
  name: 'Champeta',
  descriptionFr: "Genre urbain afro-caribéen de Cartagena.",
  descriptionEn: "Afro-Caribbean urban genre from Cartagena.",
  subgenres: [],
  artists: ['Charles King'],
  spotify:"https://open.spotify.com/playlist/3WnrSBX3vfya9CLyID4pmX?si=3WA1RhVoRRm2YJzsQi88hA",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},

// Peru
{
  name: 'Huayno',
  descriptionFr: "Musique andine (voix hautes, charango, quena).",
  descriptionEn: "Andean music (high vocals, charango, quena).",
  subgenres: [],
  artists: ['Flor Pucarina'],
  spotify:"https://open.spotify.com/playlist/37i9dQZF1DX0dskKWpx62P?si=eqDWNDruTS6s6zCY7qiGPw",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Charango_bolivia.jpg"
},
{
  name: 'Chicha (PE)',
  descriptionFr: "Cumbia andine urbaine, guitares électriques et synthés.",
  descriptionEn: "Urban Andean cumbia with electric guitars and synths.",
  subgenres: [],
  artists: ['Los Mirlos', 'Los Shapis'],
  spotify:"https://open.spotify.com/playlist/2sWXv2tVWo3Gi19HcxL9d4?si=7Xa2eW06RZOnMXqIZlKYJQ",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Electric_guitar.jpg"
},
{
  name: 'Festejo',
  descriptionFr: "Genre afro-péruvien festif de la côte centrale.",
  descriptionEn: "Festive Afro-Peruvian genre from the central coast.",
  subgenres: [],
  artists: ['Eva Ayllón', 'Susana Baca'],
  spotify:"https://open.spotify.com/playlist/3iWwh0cIjpn6344d4iiGrn?si=W7M5Seo0TmS4N26tivfLlA",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Cajon_peruano.jpg"
},

// Bolivia
{
  name: 'Morenada',
  descriptionFr: "Danse/rythme du plateau andin, grosses caisses et matracas.",
  descriptionEn: "Highland Andean dance/rhythm with bass drums and rattles.",
  subgenres: [],
  artists: ['Los Kjarkas'],
  spotify:"https://open.spotify.com/playlist/5F6eeNiqNLD6cdgJ7S9GWJ?si=zHJsipm9R0aezqnifRCeYQ",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Diablada_Oruro.jpg"
},
{
  name: 'Caporales',
  descriptionFr: "Danse scénique bolivienne, tambours et sifflets.",
  descriptionEn: "Bolivian stage dance with drums and whistles.",
  subgenres: [],
  artists: [],
  spotify:"https://open.spotify.com/playlist/2DySCtsLZVnU86lDJn96jh?si=CIX6bWn3S0a5hGnpWEpVmw",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Diablada_Oruro.jpg"
},

// Ecuador
{
  name: 'Pasillo (EC)',
  descriptionFr: "Ballade romantique équatorienne en 3/4.",
  descriptionEn: "Romantic Ecuadorian ballad in 3/4.",
  subgenres: [],
  artists: ['Julio Jaramillo'],
  spotify:"https://open.spotify.com/playlist/7CDqiIvzkhUmxGa8djpFWG?si=JyY6odNlSKWE4ULBxyashA",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Acoustic_guitar_nylon.jpg"
},
{
  name: 'Bomba del Chota',
  descriptionFr: "Musique afro-équatorienne à grosse caisse, danse communautaire.",
  descriptionEn: "Afro-Ecuadorian music with bass drum, communal dance.",
  subgenres: [],
  artists: [],
  spotify:"https://open.spotify.com/playlist/5hPl8oMA2v3MINqHs849IR?si=k8Ku7fcVQh-3DiTtjbelJQ&pi=quPlehb6S_CaK",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Drum_bass.jpg"
},

// Paraguay
{
  name: 'Guarania',
  descriptionFr: "Genre lent et lyrique, emblème du Paraguay.",
  descriptionEn: "Slow, lyrical Paraguayan genre.",
  subgenres: [],
  artists: ['José Asunción Flores'],
  spotify:"https://open.spotify.com/playlist/7s0cQHnZTKueykafCY23Ji?si=oUTt-cCVR7mQle34TP3T4g&pi=DCTuDG4xSpenr",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Paraguayan_harp.jpg"
},
{
  name: 'Polka Paraguaya',
  descriptionFr: "Danse vive en 6/8, harpe paraguayenne.",
  descriptionEn: "Lively 6/8 dance with Paraguayan harp.",
  subgenres: [],
  artists: ['Luis Alberto del Paraná'],
  spotify:"https://open.spotify.com/playlist/1jdYkR6P4UP6etoDImX5fB?si=9MyMZToBSMSxYpCdR44TZA",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Paraguayan_harp.jpg"
},

// Uruguay
{
  name: 'Candombe (UY)',
  descriptionFr: "Rythme afro-uruguayen aux tambours (tambores) de Montevideo.",
  descriptionEn: "Afro-Uruguayan drum rhythm from Montevideo.",
  subgenres: [],
  artists: ['Rubén Rada'],
  spotify:"https://open.spotify.com/playlist/3CbJCgy9y1pFcbhJB2gnji?si=WLQGQz5MQSquLYb6FIKftg",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Candombe_Uruguay.jpg"
},
{
  name: 'Murga (UY)',
  descriptionFr: "Théâtre musical choral carnavalesque.",
  descriptionEn: "Carnival choral musical theatre.",
  subgenres: [],
  artists: [],
  spotify:"https://open.spotify.com/playlist/37i9dQZF1DX17W5sS8YJkb?si=PKHGbfZvSkCq-L0paL2PJg&pi=6vdEukZLQH2qf",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Choir_singing.jpg"
},

// Venezuela
{
  name: 'Joropo',
  descriptionFr: "Genre des Llanos (harpe, cuatro, maracas), danse rapide.",
  descriptionEn: "Plains genre (harp, cuatro, maracas), fast dance.",
  subgenres: [],
  artists: ['Simón Díaz'],
  spotify:"https://open.spotify.com/playlist/1z93667X0oCSAd6AlNeboq?si=1Bvg6IIWRzyGnLsKCstqxA",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Cuatro_venezolano.jpg"
},
{
  name: 'Gaita Zuliana',
  descriptionFr: "Musique festive de Maracaibo (Noël), tambora et chœurs.",
  descriptionEn: "Festive Maracaibo (Christmas) music with tambora and choirs.",
  subgenres: [],
  artists: ['Guaco'],
  spotify:"https://open.spotify.com/playlist/37i9dQZF1EIcNVBZzdriPe?si=eGcSak9hQg2NgITTyd-9uA",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tambora_drum.jpg"
},

// Guyana
{
  name: 'Chutney (GY)',
  descriptionFr: "Genre indo-caribéen avec harmonium, dholak et soca.",
  descriptionEn: "Indo-Caribbean genre with harmonium, dholak and soca.",
  subgenres: [],
  artists: ['Terry Gajraj'],
  spotify:"https://open.spotify.com/playlist/4wTwN9B3y7YaCotth5EPHl?si=qyny369qQdSlg3ctATc46Q",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Harmonium.jpg"
},

// Suriname
{
  name: 'Kaseko',
  descriptionFr: "Musique créole surinamaise (tambours, cuivres), danse.",
  descriptionEn: "Creole Surinamese music (drums, horns), dance.",
  subgenres: [],
  artists: ['Lieve Hugo'],
  spotify:"https://open.spotify.com/playlist/2Bv4dNyJCGb4T6olVXeep7?si=0IA9j4qNRvu_FjWziaFvGg",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Brass_band.jpg"
},

// French Guiana
{
  name: 'Kasékò',
  descriptionFr: "Genre créole guyanais, tambours et call-response.",
  descriptionEn: "French Guianese Creole genre with drums and call-response.",
  subgenres: [],
  artists: [],
  spotify:"https://open.spotify.com/playlist/37i9dQZF1EIeOlAvJLiYgJ?si=mXL9Ol6PQeOA3UmTLQOu0g",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Drums_set.jpg"
},
  // --- JAMAICA ---
{
  name: "Reggae (Jamaica)",
  descriptionFr: "Le reggae à la source : racines, messages sociaux, basses profondes.",
  descriptionEn: "Reggae at the source: roots, social messages, heavy bass.",
  subgenres: ["Roots", "Dub", "Lovers Rock"],
  artists: ["Bob Marley", "Peter Tosh", "Burning Spear"],
  spotify: "https://open.spotify.com/search/reggae%20jamaica",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bob-Marley.jpg"
},
{
  name: "Dancehall (Jamaica)",
  descriptionFr: "Riddims numériques, flows rapides, culture sound system.",
  descriptionEn: "Digital riddims, fast flows, sound system culture.",
  subgenres: ["Bashment", "New School"],
  artists: ["Vybz Kartel", "Sean Paul", "Shabba Ranks"],
  spotify: "https://open.spotify.com/search/dancehall%20jamaica",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Sound_system_JA.jpg"
},
{
  name: "Ska (Jamaica)",
  descriptionFr: "Précurseur de rocksteady/reggae, contre-temps et cuivres.",
  descriptionEn: "Precursor to rocksteady/reggae, off-beat and horns.",
  subgenres: ["1st Wave", "2 Tone"],
  artists: ["The Skatalites"],
  spotify: "https://open.spotify.com/search/ska%20jamaica",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Ska_band.jpg"
},
{
  name: "Rocksteady (Jamaica)",
  descriptionFr: "Tempo médian, harmonies vocales; pont vers le reggae.",
  descriptionEn: "Mid-tempo vocals; a bridge to reggae.",
  artists: ["Alton Ellis"],
  spotify: "https://open.spotify.com/search/rocksteady%20jamaica",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Vinyl_records.jpg"
},
{
  name: "Mento (Jamaica)",
  descriptionFr: "Folk jamaïcain pré-ska, acoustique, souvent humoristique.",
  descriptionEn: "Pre-ska Jamaican folk, acoustic and often humorous.",
  artists: [],
  spotify: "https://open.spotify.com/search/mento%20jamaica",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Acoustic_guitar_close.jpg"
},

// --- TRINIDAD & TOBAGO ---
{
  name: "Calypso (TT)",
  descriptionFr: "Narration satirique, call-and-response, emblème culturel.",
  descriptionEn: "Satirical storytelling, call-and-response, cultural emblem.",
  artists: ["Mighty Sparrow", "Calypso Rose", "Lord Kitchener"],
  spotify: "https://open.spotify.com/search/calypso%20trinidad",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Steelpan_Carnival.jpg"
},
{
  name: "Soca (TT)",
  descriptionFr: "Calypso modernisé pour le Carnaval: énergie, hooks, fête.",
  descriptionEn: "Modernized calypso for Carnival: energy, hooks, party.",
  subgenres: ["Power Soca", "Groovy Soca"],
  artists: ["Machel Montano", "Kes"],
  spotify: "https://open.spotify.com/search/soca%20trinidad",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Trinidad_Carnival.jpg"
},
{
  name: "Steelpan (TT)",
  descriptionFr: "Orchestres de pans; compétitions Panorama.",
  descriptionEn: "Steel orchestras; Panorama competitions.",
  artists: ["Desperadoes Steel Orchestra"],
  spotify: "https://open.spotify.com/search/steelpan%20trinidad",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Steelpan_instruments.jpg"
},

// --- BARBADOS ---
{
  name: "Bashment Soca (Barbados)",
  descriptionFr: "Version plus crue/club de la soca, née à la Barbade.",
  descriptionEn: "Raw/club-oriented soca variant from Barbados.",
  artists: ["Lil Rick"],
  spotify: "https://open.spotify.com/search/bashment%20soca%20barbados",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Barbados_Bridgetown.jpg"
},
{
  name: "Spouge (Barbados)",
  descriptionFr: "Style 60–70s mêlant ska/calypso; patrimoine barbadien.",
  descriptionEn: "1960–70s style blending ska/calypso; Barbadian heritage.",
  artists: ["The Merrymen"],
  spotify: "https://open.spotify.com/search/spouge%20barbados",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Vinyl_records.jpg"
},

// --- BAHAMAS ---
{
  name: "Junkanoo (Bahamas)",
  descriptionFr: "Fête de rue carnavalesque, percussions et cuivres.",
  descriptionEn: "Carnival street festival with percussion and brass.",
  artists: [],
  spotify: "https://open.spotify.com/search/junkanoo%20bahamas",
  image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Nassau_Bahamas_downtown.jpg"
},
{
  name: "Rake-n-Scrape (Bahamas)",
  descriptionFr: "Musique traditionnelle à scie musicale et accordéon.",
  descriptionEn: "Traditional music with saw and accordion.",
  artists: [],
  spotify: "https://open.spotify.com/search/rake%20n%20scrape%20bahamas",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Accordion.jpg"
},

// --- CUBA ---
{
  name: "Son Cubano (Cuba)",
  descriptionFr: "Tres, bongos, clave — fondation de la salsa.",
  descriptionEn: "Tres, bongos, clave — foundation of salsa.",
  artists: ["Compay Segundo", "Buena Vista Social Club"],
  spotify: "https://open.spotify.com/search/son%20cubano%20cuba",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Tres_cubano.jpg"
},
{
  name: "Rumba (Cuba)",
  descriptionFr: "Guaguancó/Yambú/Columbia; percussions et chant.",
  descriptionEn: "Guaguancó/Yambú/Columbia; percussion and vocals.",
  subgenres: ["Guaguancó", "Yambú", "Columbia"],
  artists: ["Los Muñequitos de Matanzas"],
  spotify: "https://open.spotify.com/search/rumba%20cubana",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Cuban_rumba_drums.jpg"
},
{
  name: "Timba (Cuba)",
  descriptionFr: "Pop cubaine hyper-rythmée, cuivres, breaks complexes.",
  descriptionEn: "Hyper-rhythmic Cuban pop with horns and complex breaks.",
  artists: ["Los Van Van", "NG La Banda"],
  spotify: "https://open.spotify.com/search/timba%20cuba",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Trumpet_section.jpg"
},
{
  name: "Salsa (Cuba/PR)",
  descriptionFr: "Mosaïque afro-caribéenne/NY, héritière du son cubain.",
  descriptionEn: "Afro-Caribbean/NY mosaic, heir to Cuban son.",
  subgenres: ["Salsa dura", "Salsa romántica"],
  artists: ["Celia Cruz", "Héctor Lavoe"],
  spotify: "https://open.spotify.com/search/salsa%20cuba%20puerto%20rico",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Salsa_band.jpg"
},

// --- DOMINICAN REPUBLIC ---
{
  name: "Merengue (DR)",
  descriptionFr: "Rythme rapide, accordéon/cuivres; danse nationale.",
  descriptionEn: "Fast rhythm, accordion/brass; national dance.",
  artists: ["Juan Luis Guerra", "Wilfrido Vargas"],
  spotify: "https://open.spotify.com/search/merengue%20dominican%20republic",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Accordion.jpg"
},
{
  name: "Bachata (DR)",
  descriptionFr: "Guitares, romantisme, danse sociale populaire.",
  descriptionEn: "Guitar-based, romantic, popular social dance.",
  artists: ["Aventura", "Romeo Santos"],
  spotify: "https://open.spotify.com/search/bachata%20dominican%20republic",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Acoustic_guitar_nylon.jpg"
},
{
  name: "Dembow (DR)",
  descriptionFr: "Beat minimal, base du reggaetón moderne en RD.",
  descriptionEn: "Minimal beat, backbone of modern DR reggaetón.",
  artists: ["El Alfa"],
  spotify: "https://open.spotify.com/search/dembow%20dominican%20republic",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},

// --- PUERTO RICO ---
{
  name: "Reggaetón (PR)",
  descriptionFr: "Urbain latino né PR/Panama : dembow, rap chanté.",
  descriptionEn: "Latino urban born PR/Panama: dembow, sung rap.",
  subgenres: ["Latin Trap"],
  artists: ["Daddy Yankee", "Bad Bunny"],
  spotify: "https://open.spotify.com/search/reggaeton%20puerto%20rico",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Puerto_Rico_Urban.jpg"
},
{
  name: "Bomba/Plena (PR)",
  descriptionFr: "Traditions afro-portoricaines, tambours et danse.",
  descriptionEn: "Afro-Puerto Rican traditions with drums and dance.",
  artists: ["Los Pleneros de la 21"],
  spotify: "https://open.spotify.com/search/bomba%20plena%20puerto%20rico",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Drums_set.jpg"
},

// --- HAITI ---
{
  name: "Compas (Haiti)",
  descriptionFr: "Groove binaire, guitares et sections de cuivres.",
  descriptionEn: "Binary groove, guitars and brass sections.",
  subgenres: ["Kadans", "Compas direct"],
  artists: ["Tabou Combo", "Carimi"],
  spotify: "https://open.spotify.com/search/compas%20konpa%20haiti",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Brass_band.jpg"
},
{
  name: "Rara (Haiti)",
  descriptionFr: "Processions carnavalesques, cornes, percussions.",
  descriptionEn: "Carnival processions, horns, percussion.",
  artists: [],
  spotify: "https://open.spotify.com/search/rara%20haiti",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Drums_set.jpg"
},
{
  name: "Mizik Rasin (Haiti)",
  descriptionFr: "Fusion vodou/rock, années 80-90.",
  descriptionEn: "Vodou/rock fusion from the 80s-90s.",
  artists: ["Boukan Ginen", "RAM"],
  spotify: "https://open.spotify.com/search/mizik%20rasin%20haiti",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Charango.jpg"
},

// --- GUADELOUPE / MARTINIQUE ---
{
  name: "Zouk (GP/MQ)",
  descriptionFr: "Zouk love et rétro Kassavʼ; ADN des Antilles FR.",
  descriptionEn: "Zouk love and classic Kassavʼ; French Antilles DNA.",
  subgenres: ["Zouk Love", "Retro Zouk"],
  artists: ["Kassavʼ"],
  spotify: "https://open.spotify.com/search/zouk%20guadeloupe%20martinique",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Salsa_band.jpg"
},
{
  name: "Gwoka (Guadeloupe)",
  descriptionFr: "Tambours ka, chant créole et danse traditionnelle.",
  descriptionEn: "Ka drums, Creole singing and traditional dance.",
  artists: [],
  spotify: "https://open.spotify.com/search/gwoka%20guadeloupe",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Drums_set.jpg"
},
{
  name: "Biguine (Martinique)",
  descriptionFr: "Jazz créole historique de Martinique.",
  descriptionEn: "Historic Creole jazz from Martinique.",
  artists: [],
  spotify: "https://open.spotify.com/search/biguine%20martinique",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Saxophone.jpg"
},

// --- SAINT LUCIA ---
{
  name: "Dennery Segment (Saint Lucia)",
  descriptionFr: "Soca locale à haut tempo et hooks efficaces.",
  descriptionEn: "Local soca with high tempo and punchy hooks.",
  artists: ["Freezy"],
  spotify: "https://open.spotify.com/search/dennery%20segment%20saint%20lucia",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},

// --- GRENADA ---
{
  name: "Jab Jab Soca (Grenada)",
  descriptionFr: "Soca sombre, sifflets, tambours; esprit carnaval.",
  descriptionEn: "Darker soca with whistles and drums; carnival spirit.",
  artists: ["Tallpree"],
  spotify: "https://open.spotify.com/search/jab%20jab%20soca%20grenada",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Drums_set.jpg"
},

// --- ANTIGUA & BARBUDA ---
{
  name: "Benna (Antigua)",
  descriptionFr: "Chant folk créole, ancêtre local du calypso.",
  descriptionEn: "Creole folk chant, local ancestor of calypso.",
  artists: [],
  spotify: "https://open.spotify.com/search/benna%20antigua",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Acoustic_guitar_close.jpg"
},

// --- CURAÇAO ---
{
  name: "Tumba (Curaçao)",
  descriptionFr: "Musique de carnaval avec groove afro-caribéen.",
  descriptionEn: "Carnival music with Afro-Caribbean groove.",
  artists: [],
  spotify: "https://open.spotify.com/search/tumba%20curacao",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Brass_band.jpg"
},
{
  name: "Tambú (Curaçao)",
  descriptionFr: "Chant/percussions d’héritage afro; cérémonies.",
  descriptionEn: "Afro-heritage vocal/percussion; ceremonies.",
  artists: [],
  spotify: "https://open.spotify.com/search/tambu%20curacao",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Drums_set.jpg"
    },
];
// --- UNITED KINGDOM ---
{
  name: "Grime (UK)",
  descriptionFr: "Rap UK ~140 BPM, MCs incisifs, basses lourdes.",
  descriptionEn: "UK rap at ~140 BPM, sharp MCs, heavy bass.",
  subgenres: ["Road rap", "Drill UK"],
  artists: ["Skepta", "Wiley", "Stormzy"],
  spotify: "https://open.spotify.com/search/grime%20uk",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Stormzy_Glastonbury_2019.jpg"
},
{
  name: "UK Garage (UK)",
  descriptionFr: "Garage/2-step, voix hachées, swing syncopé.",
  descriptionEn: "Garage/2-step, chopped vocals, syncopated swing.",
  artists: ["Artful Dodger", "MJ Cole"],
  spotify: "https://open.spotify.com/search/uk%20garage",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Drum & Bass (UK)",
  descriptionFr: "Breakbeats rapides, basses profondes.",
  descriptionEn: "Fast breakbeats, deep basslines.",
  artists: ["Goldie", "Andy C"],
  spotify: "https://open.spotify.com/search/drum%20and%20bass%20uk",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Britpop (UK)",
  descriptionFr: "Pop/rock 90s à mélodies accrocheuses.",
  descriptionEn: "90s pop/rock with catchy melodies.",
  artists: ["Oasis", "Blur", "Pulp"],
  spotify: "https://open.spotify.com/search/britpop",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Oasis_2005.jpg"
},

// --- IRELAND ---
{
  name: "Celtic Folk (Ireland)",
  descriptionFr: "Trad irlandaise : fiddles, tin whistle, bodhrán.",
  descriptionEn: "Irish trad: fiddles, tin whistle, bodhrán.",
  artists: ["The Chieftains", "The Dubliners"],
  spotify: "https://open.spotify.com/search/irish%20traditional%20music",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Irish_fiddle.jpg"
},
{
  name: "Irish Indie (Ireland)",
  descriptionFr: "Rock/indie aux mélodies mélancoliques.",
  descriptionEn: "Indie/rock with melancholic melodies.",
  artists: ["The Cranberries", "Fontaines D.C."],
  spotify: "https://open.spotify.com/search/irish%20indie",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},

// --- FRANCE ---
{
  name: "French Touch (France)",
  descriptionFr: "House FR 90s-00s : filtres, samples disco.",
  descriptionEn: "90s-00s French house: filters, disco samples.",
  artists: ["Daft Punk", "Justice", "Cassius"],
  spotify: "https://open.spotify.com/search/french%20touch",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Synthesizer2.jpg"
},
{
  name: "Chanson (France)",
  descriptionFr: "Texte/voix au centre, héritage poétique.",
  descriptionEn: "Lyric-centered, poetic heritage.",
  artists: ["Brel", "Brassens", "Barbara"],
  spotify: "https://open.spotify.com/search/chanson%20fran%C3%A7aise",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Rap Français (France)",
  descriptionFr: "Rap francophone : poésie urbaine, flows variés.",
  descriptionEn: "French-language rap: urban poetry, varied flows.",
  artists: ["IAM", "PNL", "Booba"],
  spotify: "https://open.spotify.com/search/rap%20fran%C3%A7ais",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},

// --- SPAIN ---
{
  name: "Flamenco (Spain)",
  descriptionFr: "Art andalou : chant, guitare, palmas, duende.",
  descriptionEn: "Andalusian art: vocals, guitar, palmas, duende.",
  artists: ["Paco de Lucía", "Camarón de la Isla", "Niña Pastori"],
  spotify: "https://open.spotify.com/search/flamenco%20spain",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Flamenco_guitar.jpg"
},
{
  name: "Flamenco Pop (Spain)",
  descriptionFr: "Fusion flamenco avec pop/urbain.",
  descriptionEn: "Flamenco fused with pop/urban.",
  artists: ["Rosalía", "Niña Pastori"],
  spotify: "https://open.spotify.com/search/flamenco%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},

// --- PORTUGAL ---
{
  name: "Fado (Portugal)",
  descriptionFr: "Chant mélancolique, guitare portugaise.",
  descriptionEn: "Melancholic singing with Portuguese guitar.",
  artists: ["Amália Rodrigues", "Mariza"],
  spotify: "https://open.spotify.com/search/fado%20portugal",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Portuguese_guitar.jpg"
},
{
  name: "Kuduro (Lisboa)",
  descriptionFr: "Club afro-lusophone venu d’Angola, scène lisboète.",
  descriptionEn: "Afro-Lusophone club sound from Angola via Lisbon.",
  artists: ["Buraka Som Sistema"],
  spotify: "https://open.spotify.com/search/kuduro%20lisbon",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},

// --- ITALY ---
{
  name: "Italo Disco (Italy)",
  descriptionFr: "Disco/électro 80s : synthés, hooks mélodiques.",
  descriptionEn: "80s disco/electro: synth lines, melodic hooks.",
  artists: ["Gazebo", "Sabrina"],
  spotify: "https://open.spotify.com/search/italo%20disco",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Synthesizer2.jpg"
},
{
  name: "Canzone (Italy)",
  descriptionFr: "Chanson italienne, mélodie et émotion.",
  descriptionEn: "Italian songcraft, melody and emotion.",
  artists: ["Lucio Battisti", "Mina"],
  spotify: "https://open.spotify.com/search/canzone%20italiana",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Italo Rap (Italy)",
  descriptionFr: "Rap italien, mélodique/urbain.",
  descriptionEn: "Italian rap, melodic/urban.",
  artists: ["Sfera Ebbasta", "Marracash"],
  spotify: "https://open.spotify.com/search/rap%20italiano",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},

// --- GERMANY ---
{
  name: "Techno (Germany)",
  descriptionFr: "Techno berlinoise : minimale, indus, hypnotique.",
  descriptionEn: "Berlin techno: minimal, industrial, hypnotic.",
  artists: ["Ben Klock", "Paul Kalkbrenner"],
  spotify: "https://open.spotify.com/search/berlin%20techno",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Berlin_Television_Tower.jpg"
},
{
  name: "Krautrock (Germany)",
  descriptionFr: "Rock expérimental 70s, motorik, synthés.",
  descriptionEn: "70s experimental rock, motorik beats, synths.",
  artists: ["Can", "Neu!", "Faust"],
  spotify: "https://open.spotify.com/search/krautrock",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Vinyl_records.jpg"
},

// --- NETHERLANDS ---
{
  name: "Dutch House (Netherlands)",
  descriptionFr: "EDM/house néerlandais, drops massifs.",
  descriptionEn: "Dutch EDM/house with massive drops.",
  artists: ["Tiesto", "Hardwell", "Afrojack"],
  spotify: "https://open.spotify.com/search/dutch%20house",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Gabber (Netherlands)",
  descriptionFr: "Hardcore techno ultra-rapide, kicks saturés.",
  descriptionEn: "Ultra-fast hardcore techno with distorted kicks.",
  artists: ["Rotterdam Terror Corps"],
  spotify: "https://open.spotify.com/search/gabber%20rotterdam",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},

// --- BELGIUM ---
{
  name: "New Beat (Belgium)",
  descriptionFr: "Électro lente/acid des clubs belges fin 80s.",
  descriptionEn: "Slow/acid club sound from late-80s Belgium.",
  artists: ["Confetti's", "Front 242 (influence EBM)"],
  spotify: "https://open.spotify.com/search/new%20beat%20belgium",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "EBM (Belgium)",
  descriptionFr: "Electronic Body Music : pulsations sombres/indus.",
  descriptionEn: "Electronic Body Music: dark/industrial pulses.",
  artists: ["Front 242"],
  spotify: "https://open.spotify.com/search/ebm%20belgium",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Synthesizer2.jpg"
},

// --- LUXEMBOURG / SWITZERLAND / AUSTRIA ---
{
  name: "Lux Pop (Luxembourg)",
  descriptionFr: "Pop/rock/électro d’un carrefour culturel.",
  descriptionEn: "Pop/rock/electronic from a cultural crossroads.",
  artists: ["Rome", "Tuys"],
  spotify: "https://open.spotify.com/search/Luxembourg%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Luxembourg_City_Skyline.jpg"
},
{
  name: "Swiss House (Switzerland)",
  descriptionFr: "House/techno helvète, finesse sonore.",
  descriptionEn: "Swiss house/techno with sonic finesse.",
  artists: ["Yello", "Ellen Allien (in CH scenes)"],
  spotify: "https://open.spotify.com/search/swiss%20house",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Z%C3%BCrich_-_Uetliberg_-_Skyline.jpg"
},
{
  name: "Vienna Downtempo (Austria)",
  descriptionFr: "Down/nu-jazz viennois, grooves feutrés.",
  descriptionEn: "Viennese down/nu-jazz with cozy grooves.",
  artists: ["Kruder & Dorfmeister"],
  spotify: "https://open.spotify.com/search/kruder%20dorfmeister",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Wien_Skyline.jpg"
},

// --- DENMARK / SWEDEN / NORWAY / FINLAND / ICELAND ---
{
  name: "Nordic Pop (Denmark)",
  descriptionFr: "Pop scandinave claire, hooks efficaces.",
  descriptionEn: "Clean Scandinavian pop with strong hooks.",
  artists: ["MØ", "Aqua"],
  spotify: "https://open.spotify.com/search/denmark%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Copenhagen_Skyline_2014.jpg"
},
{
  name: "Scandi Pop (Sweden)",
  descriptionFr: "Pop nordique à hooks imparables, prod léchée.",
  descriptionEn: "Nordic pop with irresistible hooks and slick production.",
  artists: ["ABBA", "Tove Lo", "Robyn"],
  spotify: "https://open.spotify.com/search/swedish%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/27/ABBA_-_TopPop_1974_5.png"
},
{
  name: "Melodic Death Metal (Sweden)",
  descriptionFr: "Death metal mélodique de Göteborg.",
  descriptionEn: "Gothenburg melodic death metal.",
  artists: ["In Flames", "At the Gates"],
  spotify: "https://open.spotify.com/search/melodic%20death%20metal%20sweden",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Metallica_Live.jpg"
},
{
  name: "Black Metal (Norway)",
  descriptionFr: "Extrême, atmosphérique, scène norvégienne culte.",
  descriptionEn: "Extreme, atmospheric, seminal Norwegian scene.",
  artists: ["Mayhem", "Emperor", "Darkthrone"],
  spotify: "https://open.spotify.com/search/black%20metal%20norway",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Metallica_Live.jpg"
},
{
  name: "Power Metal (Finland)",
  descriptionFr: "Chœurs épiques, orchestration, vitesse.",
  descriptionEn: "Epic choirs, orchestration, speed.",
  artists: ["Nightwish", "Stratovarius"],
  spotify: "https://open.spotify.com/search/power%20metal%20finland",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Metallica_Live.jpg"
},
{
  name: "Icelandic Post-Rock (Iceland)",
  descriptionFr: "Post-rock/ambient éthéré, textures vastes.",
  descriptionEn: "Ethereal post-rock/ambient with vast textures.",
  artists: ["Sigur Rós"],
  spotify: "https://open.spotify.com/search/post%20rock%20iceland",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Reykjavik_Skyline.jpg"
},

// --- POLAND / CZECHIA / SLOVAKIA / HUNGARY ---
{
  name: "Polish Hip-Hop (Poland)",
  descriptionFr: "Rap polonais : introspectif, boom bap/trap.",
  descriptionEn: "Polish rap: introspective, boom bap/trap.",
  artists: ["Taco Hemingway", "Quebonafide"],
  spotify: "https://open.spotify.com/search/polish%20hip%20hop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Czech Alt Rock (Czechia)",
  descriptionFr: "Rock alternatif tchèque, contre-culture.",
  descriptionEn: "Czech alternative rock, counterculture roots.",
  artists: ["Plastic People of the Universe"],
  spotify: "https://open.spotify.com/search/czech%20alternative%20rock",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Slovak Pop Rock (Slovakia)",
  descriptionFr: "Pop-rock slovaque, scènes locales.",
  descriptionEn: "Slovak pop-rock, local scenes.",
  artists: ["IMT Smile"],
  spotify: "https://open.spotify.com/search/slovak%20pop%20rock",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Hungarian Folk Fusion (Hungary)",
  descriptionFr: "Csárdás/folk mélangé à pop/électro.",
  descriptionEn: "Csárdás/folk blended with pop/electronic.",
  artists: ["Muzsikás", "Parno Graszt"],
  spotify: "https://open.spotify.com/search/hungarian%20folk",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},

// --- ROMANIA / BULGARIA / GREECE / MALTA / CYPRUS ---
{
  name: "Manele (Romania)",
  descriptionFr: "Pop urbaine roumaine aux influences orientales.",
  descriptionEn: "Romanian urban pop with Oriental influences.",
  artists: ["Tzancă Uraganu", "Florin Salam"],
  spotify: "https://open.spotify.com/search/manele%20romania",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Chalga (Bulgaria)",
  descriptionFr: "Pop-folk bulgare, mélismes orientaux.",
  descriptionEn: "Bulgarian pop-folk with Oriental melismas.",
  artists: ["Azis"],
  spotify: "https://open.spotify.com/search/chalga%20bulgaria",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Rebetiko (Greece)",
  descriptionFr: "Blues grec urbain, bouzouki, poésie mélancolique.",
  descriptionEn: "Greek urban blues, bouzouki, melancholic poetry.",
  artists: ["Vassilis Tsitsanis", "Markos Vamvakaris"],
  spotify: "https://open.spotify.com/search/rebetiko%20greece",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Bouzouki_modern.jpg"
},
{
  name: "Laïko (Greece)",
  descriptionFr: "Pop grecque issue du rébétiko, très populaire.",
  descriptionEn: "Greek pop stemming from rebetiko, very popular.",
  artists: ["Anna Vissi", "Giorgos Mazonakis"],
  spotify: "https://open.spotify.com/search/laiko%20greek",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Maltese Pop (Malta)",
  descriptionFr: "Pop méditerranéenne, scène émergente.",
  descriptionEn: "Mediterranean pop, emerging scene.",
  artists: ["Ira Losco"],
  spotify: "https://open.spotify.com/search/malta%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Valletta_Skyline.jpg"
},
{
  name: "Cypriot Pop (Cyprus)",
  descriptionFr: "Pop chypriote/grecque, influences levantines.",
  descriptionEn: "Cypriot/Greek pop with Levantine touches.",
  artists: ["Anna Vissi"],
  spotify: "https://open.spotify.com/search/cyprus%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Nicosia_Skyline.jpg"
},
// --- BALTICS ---
{
  name: "Baltic Choral (Estonia/Latvia/Lithuania)",
  descriptionFr: "Tradition chorale balte, harmonies riches et solennelles.",
  descriptionEn: "Baltic choral tradition with rich, solemn harmonies.",
  subgenres: ["Song Festival Style"],
  artists: ["Arvo Pärt", "Latvian Radio Choir"],
  spotify: "https://open.spotify.com/search/baltic%20choir",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Tallinn_Song_Festival_Grounds.jpg"
},
{
  name: "Baltic Indie (Baltics)",
  descriptionFr: "Indie/électro-pop émergente de Tallinn/Riga/Vilnius.",
  descriptionEn: "Emerging indie/electro-pop from Tallinn/Riga/Vilnius.",
  artists: ["Brainstorm", "NOËP", "The Roop"],
  spotify: "https://open.spotify.com/search/baltic%20indie",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},

// --- UKRAINE / BELARUS / MOLDOVA ---
{
  name: "Ukrainian Folk Fusion",
  descriptionFr: "Fusion folk/électro/rock (polyrythmie, voix blanches).",
  descriptionEn: "Folk/electronic/rock fusion (polyrhythms, white voice).",
  artists: ["DakhaBrakha", "Onuka"],
  spotify: "https://open.spotify.com/search/ukrainian%20folk%20fusion",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Kyiv_Skyline_2017.jpg"
},
{
  name: "Post-Soviet Pop (Belarus/Moldova)",
  descriptionFr: "Pop/électro d'Europe de l'Est post-URSS.",
  descriptionEn: "Post-Soviet Eastern European pop/electronic.",
  artists: ["Max Korzh", "Carla’s Dreams"],
  spotify: "https://open.spotify.com/search/eastern%20europe%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},

// --- SLOVENIA / CROATIA / BOSNIA & HERZEGOVINA / SERBIA / MONTENEGRO / N. MACEDONIA / ALBANIA / KOSOVO ---
{
  name: "Sevdah (Bosnia)",
  descriptionFr: "Blues balkanique aux mélismes poignants.",
  descriptionEn: "Balkan blues with poignant melismas.",
  artists: ["Amira Medunjanin"],
  spotify: "https://open.spotify.com/search/sevdah",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Klapa (Croatia)",
  descriptionFr: "Polyphonies a cappella dalmates.",
  descriptionEn: "Dalmatian a cappella polyphonies.",
  artists: ["Klapa Cambi"],
  spotify: "https://open.spotify.com/search/klapa%20croatia",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Turbo-Folk (Serbia/Balkans)",
  descriptionFr: "Pop-folk balkanique avec beats club.",
  descriptionEn: "Balkan pop-folk with club beats.",
  artists: ["Ceca", "Jelena Karleuša"],
  spotify: "https://open.spotify.com/search/turbo%20folk",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Truba Brass (Serbia)",
  descriptionFr: "Fanfares balkaniques festives (Guča).",
  descriptionEn: "Festive Balkan brass bands (Guča).",
  artists: ["Boban Marković Orkestar"],
  spotify: "https://open.spotify.com/search/balkan%20brass%20serbia",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Brass_instruments.jpg"
},
{
  name: "Adriatic Pop (Slovenia/Croatia/Montenegro)",
  descriptionFr: "Pop adriatique ensoleillée et mélodique.",
  descriptionEn: "Sunny, melodic Adriatic pop.",
  artists: ["Severina", "Laibach (alt influence)"],
  spotify: "https://open.spotify.com/search/adriatic%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Macedonian Folk Pop",
  descriptionFr: "Pop/folk macédonienne, timbres orientalisants.",
  descriptionEn: "Macedonian pop/folk with Oriental tinges.",
  artists: ["Toše Proeski"],
  spotify: "https://open.spotify.com/search/macedonian%20folk%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Albanian Pop/Rap",
  descriptionFr: "Pop/rap moderne (scène locale + diaspora).",
  descriptionEn: "Modern pop/rap (local + diaspora).",
  artists: ["Noizy", "Dua Lipa (diaspora)"],
  spotify: "https://open.spotify.com/search/albanian%20rap%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Kosovar Pop/Rap",
  descriptionFr: "Pop/rap kosovar, proche de la scène albanaise.",
  descriptionEn: "Kosovar pop/rap, close to Albanian scene.",
  artists: ["Capital T", "Rita Ora (diaspora)"],
  spotify: "https://open.spotify.com/search/kosovo%20rap%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},

// --- MICRO-ÉTATS & TURQUIE ---
{
  name: "Mediterranean Chanson (Andorra/Monaco/San Marino)",
  descriptionFr: "Micro-scènes mêlant pop/chanson méditerranéenne.",
  descriptionEn: "Micro-scenes blending Mediterranean pop/chanson.",
  artists: ["Anonymous (Andorra)", "Valentina Monetta (SM)"],
  spotify: "https://open.spotify.com/search/mediterranean%20chanson",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Anatolian Rock/Psych (Turkey)",
  descriptionFr: "Rock psyché turc 60s–70s et revival moderne.",
  descriptionEn: "Turkish psych rock 60s–70s and modern revival.",
  artists: ["Barış Manço", "Altın Gün", "Selda Bağcan"],
  spotify: "https://open.spotify.com/search/anatolian%20rock",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Electric_guitar_closeup.jpg"
},
{
  name: "Arabesk Pop (Turkey)",
  descriptionFr: "Pop turque mélodramatique, maqâms orientaux.",
  descriptionEn: "Dramatic Turkish pop with Oriental maqams.",
  artists: ["Orhan Gencebay", "Müslüm Gürses", "Sezen Aksu"],
  spotify: "https://open.spotify.com/search/arabesk%20turkey",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
    }


