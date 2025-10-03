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
// ======== MOYEN-ORIENT ========
{
  name: "Tarab (Levant/Arab World)",
  descriptionFr: "Esthétique vocale arabe (maqâm, longue improvisation, émotions intenses).",
  descriptionEn: "Classical Arabic vocal art (maqam, long improvisations, emotional depth).",
  subgenres: ["Muwashah", "Mawwal"],
  artists: ["Umm Kulthum", "Fairuz"],
  spotify: "https://open.spotify.com/search/tarab%20arabic",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Dabke (Levant)",
  descriptionFr: "Danse/rythme levantins (Syrie, Liban, Palestine, Jordanie) au beat entraînant.",
  descriptionEn: "Levantine dance/beat (Syria, Lebanon, Palestine, Jordan) with driving rhythm.",
  artists: ["Omar Souleyman", "Le Trio Joubran"],
  spotify: "https://open.spotify.com/search/dabke",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Traditional_Middle_Eastern_dance.jpg"
},
{
  name: "Mizrahi Pop (Israel)",
  descriptionFr: "Pop israélienne aux influences moyen-orientales/mediterranéennes.",
  descriptionEn: "Israeli pop with Middle Eastern/Mediterranean influences.",
  artists: ["Eyal Golan", "Sarit Hadad"],
  spotify: "https://open.spotify.com/search/mizrahi%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Khaleeji Pop (Gulf)",
  descriptionFr: "Pop du Golfe (Arabie Saoudite, Koweït, Bahreïn, Qatar, EAU, Oman).",
  descriptionEn: "Gulf pop (Saudi, Kuwait, Bahrain, Qatar, UAE, Oman).",
  artists: ["Rashed Al-Majed", "Ahlam"],
  spotify: "https://open.spotify.com/search/khaleeji%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Persian Traditional (Iran)",
  descriptionFr: "Musique savante persane (dastgâh, târ, setâr, santoor).",
  descriptionEn: "Classical Persian music (dastgah, tar, setar, santoor).",
  artists: ["Mohammad-Reza Shajarian", "Kayhan Kalhor"],
  spotify: "https://open.spotify.com/search/persian%20traditional",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Tar_%28Persian_instrument%29.jpg"
},
{
  name: "Iranian Pop/Rock (Iran)",
  descriptionFr: "Pop/rock iranien moderne, souvent mélodique et introspectif.",
  descriptionEn: "Modern Iranian pop/rock, often melodic and introspective.",
  artists: ["Googoosh", "Kiosk"],
  spotify: "https://open.spotify.com/search/iranian%20rock%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Kurdish Folk",
  descriptionFr: "Traditions kurdes (dengbêj, tembûr), transfrontalières.",
  descriptionEn: "Kurdish traditions (dengbej, tembur), cross-border.",
  artists: ["Şivan Perwer", "Aynur Doğan"],
  spotify: "https://open.spotify.com/search/kurdish%20music",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Armenian Duduk/Folk",
  descriptionFr: "Folk arménien, timbre du duduk, mélancolie et modalité.",
  descriptionEn: "Armenian folk with duduk’s timbre, modal/melancholic.",
  artists: ["Jivan Gasparyan", "Sayat-Nova"],
  spotify: "https://open.spotify.com/search/armenian%20duduk",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Duduk.jpg"
},
{
  name: "Azeri Mugham (Azerbaijan)",
  descriptionFr: "Art modal/improvisé azerbaïdjanais (mugham).",
  descriptionEn: "Azerbaijani modal/improvised art (mugham).",
  artists: ["Alim Qasimov"],
  spotify: "https://open.spotify.com/search/azerbaijan%20mugham",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tar_azeri.jpg"
},
{
  name: "Georgian Polyphony (Georgia)",
  descriptionFr: "Polyphonies géorgiennes, timbres puissants et modes anciens.",
  descriptionEn: "Georgian polyphony with powerful timbres and ancient modes.",
  artists: ["Rustavi Choir"],
  spotify: "https://open.spotify.com/search/georgian%20polyphony",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tbilisi_Skyline.jpg"
},

// ======== ASIE CENTRALE ========
{
  name: "Q-Pop (Kazakhstan)",
  descriptionFr: "Pop kazakh inspirée de la K-pop, chorégraphies et prod modernes.",
  descriptionEn: "Kazakh pop inspired by K-pop with modern choreography/production.",
  artists: ["Ninety One", "MadMen"],
  spotify: "https://open.spotify.com/search/q-pop%20kazakhstan",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Almaty_skyline.jpg"
},
{
  name: "Kazakh Dombra Folk",
  descriptionFr: "Folk kazakh centré sur la dombra (luth à deux cordes).",
  descriptionEn: "Kazakh folk built around the two-string dombra.",
  artists: ["Dimash (influence pop)", "Traditional dombrists"],
  spotify: "https://open.spotify.com/search/kazakh%20dombra",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Dombra.jpg"
},
{
  name: "Shashmaqam (Uzbekistan/Tajikistan)",
  descriptionFr: "Suite savante centre-asiatique (modes/poésie).",
  descriptionEn: "Classical Central Asian suite (modes/poetry).",
  artists: ["Bukhara Ensembles"],
  spotify: "https://open.spotify.com/search/shashmaqam",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sitar_like_lute.jpg"
},
{
  name: "Kyrgyz Komuz Folk",
  descriptionFr: "Folk kirghize autour du komuz (luth), épopées/manas.",
  descriptionEn: "Kyrgyz folk around the komuz lute, epic/manas tradition.",
  artists: ["Traditional komuz players"],
  spotify: "https://open.spotify.com/search/kyrgyz%20komuz",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Komuz.jpg"
},
{
  name: "Tajik Pamiri Folk",
  descriptionFr: "Musique pamirie montagnarde aux modes particuliers.",
  descriptionEn: "Mountain Pamiri music with distinctive modes.",
  artists: ["Badakhshan Ensemble"],
  spotify: "https://open.spotify.com/search/pamiri%20music",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Turkmen Dutar Folk",
  descriptionFr: "Folk turkmène centré sur le dutar (luth à long manche).",
  descriptionEn: "Turkmen folk built around the long-necked dutar.",
  artists: ["Traditional dutar players"],
  spotify: "https://open.spotify.com/search/turkmen%20dutar",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Dutar.jpg"
},
{
  name: "Afghan Ghazal/Rubab",
  descriptionFr: "Ghazal afghan, rubab et tablas, poésie et modalité.",
  descriptionEn: "Afghan ghazal with rubab and tablas, poetry and modality.",
  artists: ["Ustad Mohammad Omar", "Qais Essar"],
  spotify: "https://open.spotify.com/search/afghan%20rubab",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Rubab_Afghan.jpg"
},
{
  name: "Yemeni Hadrami",
  descriptionFr: "Style yéménite hadrami (oud, chant modal).",
  descriptionEn: "Yemeni Hadrami style (oud, modal singing).",
  artists: ["Abu Bakr Salem"],
  spotify: "https://open.spotify.com/search/yemeni%20music",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Oud_instrument.jpg"
},
// ========= EAST ASIA =========
{
  name: "J-Pop (Japan)",
  descriptionFr: "Pop japonaise moderne, refrains accrocheurs, idols.",
  descriptionEn: "Modern Japanese pop with catchy hooks and idol culture.",
  artists: ["Hikaru Utada", "Perfume"],
  spotify: "https://open.spotify.com/search/j-pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "City Pop (Japan)",
  descriptionFr: "Pop japonaise 70s–80s, grooves sophistiqués, revival mondial.",
  descriptionEn: "70s–80s Japanese pop with smooth grooves; global revival.",
  artists: ["Tatsuro Yamashita", "Mariya Takeuchi"],
  spotify: "https://open.spotify.com/search/city%20pop%20japan",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},
{
  name: "Enka (Japan)",
  descriptionFr: "Ballades traditionnelles japonaises, vibrato expressif.",
  descriptionEn: "Traditional Japanese ballads with expressive vibrato.",
  artists: ["Hibari Misora"],
  spotify: "https://open.spotify.com/search/enka",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "K-Pop (Korea)",
  descriptionFr: "Pop sud-coréenne, chorégraphies, production léchée.",
  descriptionEn: "South Korean pop — choreography and polished production.",
  artists: ["BTS", "BLACKPINK"],
  spotify: "https://open.spotify.com/search/k-pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "K-Hip-Hop (Korea)",
  descriptionFr: "Hip-hop coréen, scènes underground et mainstream.",
  descriptionEn: "Korean hip-hop with both underground and mainstream scenes.",
  artists: ["Jay Park", "Epik High"],
  spotify: "https://open.spotify.com/search/k%20hip%20hop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Trot (Korea)",
  descriptionFr: "Style rétro coréen, signatures rythmiques particulières.",
  descriptionEn: "Retro Korean style with distinctive rhythmic signatures.",
  artists: ["Jang Yoon-jeong"],
  spotify: "https://open.spotify.com/search/korean%20trot",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Microphone_1920s.jpg"
},
{
  name: "Mandopop (China/Taiwan)",
  descriptionFr: "Pop chinoise (mandarin), ballades à gros refrains.",
  descriptionEn: "Mandarin pop with big ballads and radio hooks.",
  artists: ["Jay Chou", "Jolin Tsai"],
  spotify: "https://open.spotify.com/search/mandopop",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Cantopop (Hong Kong)",
  descriptionFr: "Pop cantonaise iconique, glamour et mélodies.",
  descriptionEn: "Iconic Cantonese pop with glam and melodies.",
  artists: ["Leslie Cheung", "Anita Mui"],
  spotify: "https://open.spotify.com/search/cantopop",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},
{
  name: "Chinese Classical/Guqin (China)",
  descriptionFr: "Musique classique chinoise, guqin, guzheng, erhu.",
  descriptionEn: "Chinese classical traditions: guqin, guzheng, erhu.",
  artists: ["Liu Fang"],
  spotify: "https://open.spotify.com/search/chinese%20guqin",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Guqin.jpg"
},
{
  name: "Taipei Indie (Taiwan)",
  descriptionFr: "Indie/folk/électro de Taïwan, scène créative.",
  descriptionEn: "Taiwan indie/folk/electronic — vibrant creative scene.",
  artists: ["Elephant Gym", "Sunset Rollercoaster"],
  spotify: "https://open.spotify.com/search/taiwan%20indie",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Mongolian Throat Singing (Mongolia)",
  descriptionFr: "Chant diphonique khoomei, timbres de steppe.",
  descriptionEn: "Khoomei throat singing with steppe timbres.",
  artists: ["Huun-Huur-Tu", "The HU"],
  spotify: "https://open.spotify.com/search/mongolian%20throat%20singing",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Steppe_landscape.jpg"
},

// ========= SOUTH ASIA =========
{
  name: "Bollywood (India)",
  descriptionFr: "Musique de films hindi : orchestration, dance, romance.",
  descriptionEn: "Hindi film music: orchestration, dance, romance.",
  artists: ["AR Rahman", "Arijit Singh"],
  spotify: "https://open.spotify.com/search/bollywood",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Film_reel_icon.png"
},
{
  name: "Hindustani Classical (India)",
  descriptionFr: "Musique classique du nord de l’Inde (ragas, talas).",
  descriptionEn: "North Indian classical (ragas, talas).",
  artists: ["Ravi Shankar", "Zakir Hussain"],
  spotify: "https://open.spotify.com/search/hindustani%20classical",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Sitar.jpg"
},
{
  name: "Carnatic (India)",
  descriptionFr: "Musique classique du sud de l’Inde, virtuosité vocale.",
  descriptionEn: "South Indian classical with vocal virtuosity.",
  artists: ["M.S. Subbulakshmi"],
  spotify: "https://open.spotify.com/search/carnatic",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Veena.jpg"
},
{
  name: "Bhangra (Punjab)",
  descriptionFr: "Danse/beat pendjab, dhol, pop mondiale.",
  descriptionEn: "Punjabi dance/beat with dhol; global pop.",
  artists: ["Diljit Dosanjh"],
  spotify: "https://open.spotify.com/search/bhangra",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dhol.jpg"
},
{
  name: "Qawwali (Pakistan)",
  descriptionFr: "Chant soufi extatique, harmonium et percussions.",
  descriptionEn: "Sufi devotional ecstatic singing with harmonium.",
  artists: ["Nusrat Fateh Ali Khan"],
  spotify: "https://open.spotify.com/search/qawwali",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Coke Studio Pop (Pakistan)",
  descriptionFr: "Fusions pop/folk/classique amplifiées par Coke Studio.",
  descriptionEn: "Pop/folk/classical fusions popularized by Coke Studio.",
  artists: ["Strings", "Atif Aslam"],
  spotify: "https://open.spotify.com/search/pakistan%20coke%20studio",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Baul (Bangladesh)",
  descriptionFr: "Tradition mystique bengalie, voix et ektara.",
  descriptionEn: "Mystic Bengali tradition with vocal/ektara.",
  artists: ["Purna Das Baul"],
  spotify: "https://open.spotify.com/search/baul%20bangla",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Ektara.jpg"
},
{
  name: "Baila (Sri Lanka)",
  descriptionFr: "Musique festive sri-lankaise d’influence lusophone.",
  descriptionEn: "Festive Sri Lankan music with Lusophone influence.",
  artists: ["W.D. Amaradeva"],
  spotify: "https://open.spotify.com/search/baila%20sri%20lanka",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Nepali Folk (Nepal)",
  descriptionFr: "Folk népalais : sarangi, flûte bansuri, voix haut perchées.",
  descriptionEn: "Nepali folk: sarangi, bansuri flute, high registers.",
  artists: ["Kutumba"],
  spotify: "https://open.spotify.com/search/nepali%20folk",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Nepal_mountains.jpg"
},
{
  name: "Dranyen Folk (Bhutan)",
  descriptionFr: "Folk bhoutanais, luth dranyen, chants rituels.",
  descriptionEn: "Bhutanese folk with dranyen lute and ritual songs.",
  artists: [],
  spotify: "https://open.spotify.com/search/bhutan%20music",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Bhutan_landscape.jpg"
},
{
  name: "Boduberu (Maldives)",
  descriptionFr: "Percussions/chant de groupe des Maldives.",
  descriptionEn: "Group drumming/singing from the Maldives.",
  artists: [],
  spotify: "https://open.spotify.com/search/boduberu%20maldives",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Maldives_beach.jpg"
},

// ========= SOUTHEAST ASIA =========
{
  name: "Gamelan (Indonesia)",
  descriptionFr: "Ensembles de métallophones/gongs, Java/Bali.",
  descriptionEn: "Ensembles of metallophones/gongs, Java/Bali.",
  artists: ["Gamelan Gong Kebyar"],
  spotify: "https://open.spotify.com/search/gamelan",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Gamelan_instruments_Bali.jpg"
},
{
  name: "Dangdut (Indonesia)",
  descriptionFr: "Pop dansante indonésienne, tablas/synthés.",
  descriptionEn: "Dancey Indonesian pop with tablas/synths.",
  artists: ["Rhoma Irama"],
  spotify: "https://open.spotify.com/search/dangdut",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Kroncong (Indonesia)",
  descriptionFr: "Style indo-portugais ancien, ukulélés/luths.",
  descriptionEn: "Old Indo-Portuguese style with ukuleles/lutes.",
  artists: ["Waldjinah"],
  spotify: "https://open.spotify.com/search/kroncong",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},
{
  name: "Malay Pop (Malaysia)",
  descriptionFr: "Pop malaisienne contemporaine.",
  descriptionEn: "Contemporary Malaysian pop.",
  artists: ["Yuna"],
  spotify: "https://open.spotify.com/search/malaysian%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Nasyid (Malaysia)",
  descriptionFr: "Chant religieux/pop spirituel malais.",
  descriptionEn: "Malay religious/spiritual pop singing.",
  artists: ["Raihan"],
  spotify: "https://open.spotify.com/search/nasyid",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "OPM Pop/Rock (Philippines)",
  descriptionFr: "Original Pinoy Music — pop/rock locale.",
  descriptionEn: "Original Pinoy Music — local pop/rock.",
  artists: ["Eraserheads", "Ben&Ben"],
  spotify: "https://open.spotify.com/search/opm%20philippines",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Kundiman (Philippines)",
  descriptionFr: "Chanson philippine traditionnelle, ballades romantiques.",
  descriptionEn: "Traditional Filipino songs; romantic ballads.",
  artists: [],
  spotify: "https://open.spotify.com/search/kundiman",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},
{
  name: "Thai Pop (Thailand)",
  descriptionFr: "Pop thaï actuelle, mélodique/dansante.",
  descriptionEn: "Modern Thai pop, melodic and danceable.",
  artists: ["Tilly Birds"],
  spotify: "https://open.spotify.com/search/thai%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Luk Thung (Thailand)",
  descriptionFr: "Country/pop thaï, thématiques rurales.",
  descriptionEn: "Thai country/pop with rural themes.",
  artists: ["Pumpuang Duangjan"],
  spotify: "https://open.spotify.com/search/luk%20thung",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Mor Lam (Isan)",
  descriptionFr: "Chant/khene de l’Isan (NE Thaïlande/Laos).",
  descriptionEn: "Isan/Laos vocal & khene traditions.",
  artists: ["XiaoYen (trad.)"],
  spotify: "https://open.spotify.com/search/mor%20lam",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Khene.jpg"
},
{
  name: "V-Pop (Vietnam)",
  descriptionFr: "Pop vietnamienne moderne.",
  descriptionEn: "Modern Vietnamese pop.",
  artists: ["Sơn Tùng M-TP"],
  spotify: "https://open.spotify.com/search/v-pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Nhạc Vàng (Vietnam)",
  descriptionFr: "Ballades vietnamiennes classiques.",
  descriptionEn: "Classic Vietnamese ballads.",
  artists: ["Khánh Ly"],
  spotify: "https://open.spotify.com/search/nhac%20vang",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},
{
  name: "Khmer Oldies (Cambodia)",
  descriptionFr: "Pop/rock khmer 60s–70s (golden era).",
  descriptionEn: "Cambodian 60s–70s pop/rock (golden era).",
  artists: ["Sinn Sisamouth", "Ros Serey Sothea"],
  spotify: "https://open.spotify.com/search/khmer%20oldies",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},
{
  name: "Cambodian Rock (Cambodia)",
  descriptionFr: "Rock khmer revival inspiré des 60s–70s.",
  descriptionEn: "Khmer rock revival inspired by the 60s–70s.",
  artists: ["Dengue Fever"],
  spotify: "https://open.spotify.com/search/cambodian%20rock",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Lao Lam (Laos)",
  descriptionFr: "Chant/lao lam, khene, formes traditionnelles.",
  descriptionEn: "Lao lam singing, khene, traditional forms.",
  artists: [],
  spotify: "https://open.spotify.com/search/lao%20lam",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Khene.jpg"
},
{
  name: "Burmese Pop (Myanmar)",
  descriptionFr: "Pop birmane moderne + influences tradi.",
  descriptionEn: "Modern Burmese pop + traditional influences.",
  artists: [],
  spotify: "https://open.spotify.com/search/myanmar%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Hsaing Waing (Myanmar)",
  descriptionFr: "Ensembles de percussions/gongs traditionnels.",
  descriptionEn: "Traditional percussion/gong ensembles.",
  artists: [],
  spotify: "https://open.spotify.com/search/hsaing%20waing",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Burmese_Music_Ensemble.jpg"
},
{
  name: "Mandopop SG (Singapore)",
  descriptionFr: "Scène mandopop singapourienne.",
  descriptionEn: "Singaporean mandopop scene.",
  artists: ["JJ Lin"],
  spotify: "https://open.spotify.com/search/mandopop%20singapore",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Singapore_skyline.jpg"
},
{
  name: "Thai-Isan Fusion (Thailand/Laos)",
  descriptionFr: "Fusion pop de mor lam/luk thung et beats modernes.",
  descriptionEn: "Pop fusion of mor lam/luk thung with modern beats.",
  artists: [],
  spotify: "https://open.spotify.com/search/isan%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Brunei Malay Pop (Brunei)",
  descriptionFr: "Pop malaise de Brunei, scène locale.",
  descriptionEn: "Bruneian Malay pop, local scene.",
  artists: [],
  spotify: "https://open.spotify.com/search/brunei%20pop",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Timor-Leste Tebe-Dai (Timor)",
  descriptionFr: "Chant/danse communautaire timoraise.",
  descriptionEn: "Community singing/dance from Timor-Leste.",
  artists: [],
  spotify: "https://open.spotify.com/search/tebe%20dai",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Timor_Leste_Hills.jpg"
    },
// ========== AFRIQUE DU NORD ==========
{
  name: "Raï (Algeria)",
  descriptionFr: "Genre algérien né à Oran, chants populaires et rythmes dansants.",
  descriptionEn: "Algerian genre from Oran, popular singing and danceable grooves.",
  artists: ["Cheb Khaled", "Cheb Mami"],
  spotify: "https://open.spotify.com/search/rai%20algeria",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Chaabi (Maghreb)",
  descriptionFr: "Style populaire urbain du Maghreb (Alger/ Casablanca).",
  descriptionEn: "Urban popular style of the Maghreb (Algiers/Casablanca).",
  artists: ["Dahmane El Harrachi"],
  spotify: "https://open.spotify.com/search/chaabi%20maghreb",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},
{
  name: "Gnawa (Morocco)",
  descriptionFr: "Transe marocaine (guembri, qraqeb), héritage subsaharien.",
  descriptionEn: "Moroccan trance (guembri, qraqeb) with Sub-Saharan roots.",
  artists: ["Maâlem Mahmoud Guinia"],
  spotify: "https://open.spotify.com/search/gnawa",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Gnawa_musicians.jpg"
},
{
  name: "Malouf/Andalusi (Tunisia)",
  descriptionFr: "Musique andalouse savante, luth/violon, modes arabo-andalous.",
  descriptionEn: "Andalusian classical tradition with Arab-Andalusian modes.",
  artists: ["Rachidia Ensemble"],
  spotify: "https://open.spotify.com/search/malouf%20andalusi",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Oud_instrument.jpg"
},
{
  name: "Mahraganat (Egypt)",
  descriptionFr: "Électro de rue du Caire, autotune, beats trap/shaabi.",
  descriptionEn: "Cairo street electro with autotune and trap/shaabi beats.",
  artists: ["Oka Wi Ortega", "Hamo Bika"],
  spotify: "https://open.spotify.com/search/mahraganat",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Shaabi (Egypt)",
  descriptionFr: "Pop populaire égyptienne, claviers et percussions.",
  descriptionEn: "Egyptian popular music with keyboards and percussion.",
  artists: ["Ahmed Adaweyah"],
  spotify: "https://open.spotify.com/search/shaabi%20egypt",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},

// ========== AFRIQUE DE L’OUEST ==========
{
  name: "Afrobeat (Nigeria, 70s)",
  descriptionFr: "Fusions funk/jazz de Fela Kuti, cuivres et grooves étendus.",
  descriptionEn: "Fela Kuti’s funk/jazz fusions with long horn-driven grooves.",
  artists: ["Fela Kuti"],
  spotify: "https://open.spotify.com/search/afrobeat%20fela",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Afrobeats (Nigeria/Ghana)",
  descriptionFr: "Pop ouest-africaine moderne (Afro-pop/hip-hop/dancehall).",
  descriptionEn: "Modern West African pop (Afro-pop/hip-hop/dancehall).",
  artists: ["Wizkid", "Burna Boy", "Davido"],
  spotify: "https://open.spotify.com/search/afrobeats",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Highlife (Ghana)",
  descriptionFr: "Guitares polyrythmiques, cuivres, ambiance dansante.",
  descriptionEn: "Polyrhythmic guitars, horns, danceable feel.",
  artists: ["E.T. Mensah"],
  spotify: "https://open.spotify.com/search/highlife%20ghana",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_guitar.jpg"
},
{
  name: "Hiplife (Ghana)",
  descriptionFr: "Rap ghanéen sur instrumentaux highlife/afro-pop.",
  descriptionEn: "Ghanaian rap over highlife/afro-pop instrumentals.",
  artists: ["Reggie Rockstone"],
  spotify: "https://open.spotify.com/search/hiplife",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Juju (Nigeria)",
  descriptionFr: "Musique yoruba à guitares et percussions parlantes.",
  descriptionEn: "Yoruba guitar music with talking drums.",
  artists: ["King Sunny Adé"],
  spotify: "https://open.spotify.com/search/juju%20music",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dhol.jpg"
},
{
  name: "Fuji (Nigeria)",
  descriptionFr: "Chant yoruba et percussions, héritage were/ajisari.",
  descriptionEn: "Yoruba vocal percussion style with were/ajisari roots.",
  artists: ["Wasiu Ayinde Marshall"],
  spotify: "https://open.spotify.com/search/fuji%20music",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Mbalax (Senegal)",
  descriptionFr: "Style de Dakar (sabar), voix puissantes et guitares.",
  descriptionEn: "Dakar style (sabar drums), powerful vocals and guitars.",
  artists: ["Youssou N’Dour"],
  spotify: "https://open.spotify.com/search/mbalax",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/African_drums.jpg"
},
{
  name: "Desert Blues (Sahel)",
  descriptionFr: "Guitares touareg/sahel, transe et modalité.",
  descriptionEn: "Tuareg/Sahel guitars with trancey modal sound.",
  artists: ["Tinariwen", "Ali Farka Touré"],
  spotify: "https://open.spotify.com/search/desert%20blues",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sahara_desert.jpg"
},
{
  name: "Coupé-Décalé (Côte d’Ivoire)",
  descriptionFr: "Club ivoirien, percussions numériques et slogans.",
  descriptionEn: "Ivorian club style with digital percussion and chants.",
  artists: ["DJ Arafat"],
  spotify: "https://open.spotify.com/search/coupe%20decale",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Zouglou (Côte d’Ivoire)",
  descriptionFr: "Chant choral urbain et rythmes entraînants.",
  descriptionEn: "Urban choral singing with driving rhythms.",
  artists: ["Magic System"],
  spotify: "https://open.spotify.com/search/zouglou",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},
{
  name: "Afro-Cuban/Marabenta (Cape Verde/Mozambique)",
  descriptionFr: "Mélanges afro-atlantiques (classer selon pays).",
  descriptionEn: "Afro-Atlantic blends (categorize per country).",
  artists: [],
  spotify: "https://open.spotify.com/search/afro%20atlantic%20music",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},

// ========== AFRIQUE CENTRALE ==========
{
  name: "Rumba Congolaise (DRC/RC)",
  descriptionFr: "Rumba/soukous d’Afrique centrale, guitares liquides.",
  descriptionEn: "Central African rumba/soukous with liquid guitars.",
  artists: ["Franco", "Tabu Ley Rochereau"],
  spotify: "https://open.spotify.com/search/rumba%20congolaise",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_guitar.jpg"
},
{
  name: "Soukous/Ndombolo (DRC)",
  descriptionFr: "Tempo rapide, guitares étincelantes, danse ndombolo.",
  descriptionEn: "Fast tempos, sparkling guitars, ndombolo dance.",
  artists: ["Koffi Olomidé", "Fally Ipupa"],
  spotify: "https://open.spotify.com/search/soukous%20ndombolo",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Makossa (Cameroon)",
  descriptionFr: "Style de Douala, lignes de basse marquantes.",
  descriptionEn: "Douala style with notable bass lines.",
  artists: ["Manu Dibango"],
  spotify: "https://open.spotify.com/search/makossa",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/African_drums.jpg"
},
{
  name: "Bikutsi (Cameroon)",
  descriptionFr: "Rythmes 6/8, danse et guitare percussive.",
  descriptionEn: "6/8 rhythms with percussive guitars and dance focus.",
  artists: ["Les Têtes Brûlées"],
  spotify: "https://open.spotify.com/search/bikutsi",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_guitar.jpg"
},

// ========== AFRIQUE AUSTRALE ==========
{
  name: "Kwaito (South Africa)",
  descriptionFr: "House lent + rap/chant township (90s).",
  descriptionEn: "Slowed house with township rap/sing (90s).",
  artists: ["Mandoza"],
  spotify: "https://open.spotify.com/search/kwaito",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Amapiano (South Africa)",
  descriptionFr: "Deep-house sud-africain : log-drums, pianos, grooves.",
  descriptionEn: "South African deep-house with log-drums and pianos.",
  artists: ["Kabza De Small", "DJ Maphorisa"],
  spotify: "https://open.spotify.com/search/amapiano",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Gqom (South Africa)",
  descriptionFr: "House minimaliste et sombre de Durban.",
  descriptionEn: "Minimal, dark Durban house sound.",
  artists: ["DJ Lag"],
  spotify: "https://open.spotify.com/search/gqom",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Township Jazz (South Africa)",
  descriptionFr: "Jazz sud-africain, marabi/kwela, héritage anti-apartheid.",
  descriptionEn: "SA jazz with marabi/kwela roots, anti-apartheid heritage.",
  artists: ["Hugh Masekela", "Abdullah Ibrahim"],
  spotify: "https://open.spotify.com/search/south%20african%20jazz",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Jazz_band.jpg"
},
{
  name: "Maskandi (South Africa)",
  descriptionFr: "Musique zouloue à guitare picking et chant narratif.",
  descriptionEn: "Zulu guitar picking music with narrative vocals.",
  artists: ["Phuzekhemisi"],
  spotify: "https://open.spotify.com/search/maskandi",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_guitar.jpg"
},
{
  name: "Marrabenta (Mozambique)",
  descriptionFr: "Pop urbaine de Maputo, guitares et rythmes rapides.",
  descriptionEn: "Maputo urban pop with quick guitar rhythms.",
  artists: ["Fany Pfumo"],
  spotify: "https://open.spotify.com/search/marrabenta",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
},
{
  name: "Kuduro (Angola)",
  descriptionFr: "Électro frénétique d’Angola, danse et samples.",
  descriptionEn: "Angolan frenetic electro with dance/samples.",
  artists: ["Buraka Som Sistema"],
  spotify: "https://open.spotify.com/search/kuduro",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
},
{
  name: "Kizomba/Semba (Angola)",
  descriptionFr: "Danse/romance, tempo lent (kizomba) et racines semba.",
  descriptionEn: "Romantic dance (kizomba) with semba roots.",
  artists: ["Bonga"],
  spotify: "https://open.spotify.com/search/kizomba%20semba",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},
{
  name: "Sega (Mauritius)",
  descriptionFr: "Musique/danse créoles de l’île Maurice.",
  descriptionEn: "Creole music/dance from Mauritius.",
  artists: ["Ti Frère"],
  spotify: "https://open.spotify.com/search/sega%20mauritius",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
},
{
  name: "Salegy/Tsapiky (Madagascar)",
  descriptionFr: "Styles malgaches à guitares rapides et polyrythmies.",
  descriptionEn: "Malagasy fast-guitar styles with polyrhythms.",
  artists: ["Jaojoby", "D’Gary"],
  spotify: "https://open.spotify.com/search/salegy%20tsapiky",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_guitar.jpg"
},
{
  name: "Funaná/Morna (Cape Verde)",
  descriptionFr: "Styles cap-verdiens : funaná dansant, morna mélancolique.",
  descriptionEn: "Cape Verdean styles: dancey funaná, melancholic morna.",
  artists: ["Cesária Évora"],
  spotify: "https://open.spotify.com/search/funana%20morna",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
},


