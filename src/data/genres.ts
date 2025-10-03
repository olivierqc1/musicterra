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
];


