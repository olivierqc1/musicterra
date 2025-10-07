import type { Item } from '../types';

export const genres: Item[] = [
  // ——— Fondations internationales ———
  {
    name: 'Rock',
    descriptionFr: "Né dans les années 50 aux USA, influencé par le blues et la country.",
    descriptionEn: "Born in the 1950s in the USA, influenced by blues and country.",
    subgenres: ['Progressif','Alternatif','Psychédélique','Garage Rock','Hard Rock','Indie Rock','Post-Rock','Shoegaze','Grunge','Surf Rock'],
    artists: ['The Beatles','Led Zeppelin','Pink Floyd'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_guitar.jpg"
  },
  {
    name: 'Metal',
    descriptionFr: "Plus lourd et agressif, popularisé dans les années 70.",
    descriptionEn: "Heavier and more aggressive, popular since the 1970s.",
    subgenres: ['Heavy Metal','Thrash','Death Metal','Black Metal','Doom','Power Metal','Metalcore','Progressive Metal','Nu Metal'],
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
    subgenres: ['New Orleans','Swing','Bebop','Hard Bop','Cool Jazz','Modal','Free Jazz','Fusion','Smooth Jazz','Nu Jazz'],
    artists: ['Miles Davis','John Coltrane','Louis Armstrong'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Jazz_band.jpg"
  },
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

  // ——— Afrique de l'Est ———
  {
    name: 'Bongo Flava',
    descriptionFr: "Genre tanzanien mêlant hip-hop, R&B et influences swahilies.",
    descriptionEn: "Tanzanian genre mixing hip-hop, R&B and Swahili influences.",
    subgenres: ['Afro-fusion','Rap Tanzanien','Swahili Pop'],
    artists: ['Diamond Platnumz','Ali Kiba','Harmonize'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXbLOeOIhbc5",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Diamond_Platnumz.jpg"
  },
  {
    name: 'Taarab',
    descriptionFr: "Fusion de musique swahilie, arabe et indienne, populaire à Zanzibar.",
    descriptionEn: "Fusion of Swahili, Arab and Indian music, popular in Zanzibar.",
    subgenres: ['Swahili Classical','Orchestral Taarab'],
    artists: ['Culture Musical Club','Ikhwani Safaa'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWU4xkXueiKGW",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Taarab_Band.jpg"
  },
  {
    name: 'Genge',
    descriptionFr: "Style kényan dérivé du hip-hop, mêlant anglais, kiswahili et sheng.",
    descriptionEn: "Kenyan hip-hop style mixing English, Kiswahili and Sheng slang.",
    subgenres: ['Kapuka','Urban Kenyan Rap'],
    artists: ['Jua Cali','Nonini','Klef Records'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1s9knjP51Oa",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Jua_Cali.jpg"
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

  // ——— Afrique de l'Ouest et Centrale ———
  {
    name: 'Afrobeat',
    descriptionFr: "Genre nigérian lancé par Fela Kuti : rythmes complexes, cuivres et messages politiques.",
    descriptionEn: "Nigerian genre pioneered by Fela Kuti: complex rhythms, horns and political messages.",
    subgenres: ['Afrobeat Classique','Afro-fusion','Naija'],
    artists: ['Fela Kuti','Tony Allen','Burna Boy'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWYkaDif7Ztbp",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Fela_Kuti.jpg"
  },
  {
    name: 'Coupé-Décalé',
    descriptionFr: "Né en Côte d'Ivoire et popularisé à Paris : ambiance festive, percussions électroniques.",
    descriptionEn: "Originated in Côte d'Ivoire and popularized in Paris: party vibe with electronic percussion.",
    subgenres: ['Coupé Décalé Classique','New Coupé Décalé'],
    artists: ['DJ Arafat','Debordo Leekunfa'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX2VYjzZZsF3C",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/DJ_Arafat.jpg"
  },
  {
    name: 'Zouglou',
    descriptionFr: "Mouvement ivoirien des années 90, critique sociale sur rythmes dansants.",
    descriptionEn: "Ivorian movement from the 1990s, social criticism on danceable rhythms.",
    subgenres: ['Zouglou Classique'],
    artists: ['Magic System'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdEN2uwCw6kV",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Magic_System.jpg"
  },
  {
    name: 'Highlife',
    descriptionFr: "Originaire du Ghana et du Nigéria; guitares jazzy, cuivres et groove africain.",
    descriptionEn: "From Ghana and Nigeria; jazzy guitars, horns and African groove.",
    subgenres: ['Palmwine Highlife','Dance Band Highlife'],
    artists: ['E.T. Mensah','Osibisa'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXzDsC3jppjE",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Osibisa.jpg"
  },
  {
    name: 'Makossa',
    descriptionFr: "Genre camerounais aux rythmes entraînants, popularisé par Manu Dibango.",
    descriptionEn: "Cameroonian genre with catchy rhythms, popularized by Manu Dibango.",
    subgenres: ['Makossa Moderne'],
    artists: ['Manu Dibango'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWVzZlRWgqAGH",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Manu_Dibango.jpg"
  },
  {
    name: 'Ndombolo',
    descriptionFr: "Musique dansante de la RDC, héritière du soukous.",
    descriptionEn: "Dance music from DRC, heir of soukous.",
    subgenres: ['Ndombolo Rapide','Ndombolo Lent'],
    artists: ['Koffi Olomidé','Werrason'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWUjqUjZBdjJ6",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Koffi_Olomide.jpg"
  },

  // ——— Caraïbes ———
  {
    name: 'Salsa',
    descriptionFr: "Genre phare des Caraïbes, fusion de son cubain et rythmes portoricains.",
    descriptionEn: "Key Caribbean genre, fusion of Cuban son and Puerto Rican rhythms.",
    subgenres: ['Salsa dura','Salsa romantica'],
    artists: ['Celia Cruz','Rubén Blades','Marc Anthony'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7ZUug1ANKRP",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Salsa_band.jpg"
  },
  {
    name: 'Merengue',
    descriptionFr: "Musique/danse rapide de République Dominicaine.",
    descriptionEn: "Fast-paced music/dance from the Dominican Republic.",
    subgenres: ['Merengue típico','Merengue urbano'],
    artists: ['Juan Luis Guerra','Wilfrido Vargas'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9sIqqvKsjG8",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Accordion.jpg"
  },
  {
    name: 'Bachata',
    descriptionFr: "Romantisme dominicain; guitares et voix passionnées.",
    descriptionEn: "Dominican romantic genre; guitars and passionate vocals.",
    subgenres: ['Bachata moderna','Bachata clásica'],
    artists: ['Aventura','Romeo Santos'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9jOJuUdxlrO",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Acoustic_guitar_nylon.jpg"
  },
  {
    name: 'Cumbia',
    descriptionFr: "Originaire de Colombie, mais répandu dans toute l'Amérique Latine.",
    descriptionEn: "Originating in Colombia, spread across Latin America.",
    subgenres: ['Cumbia villera','Cumbia andina','Cumbia sonidera'],
    artists: ['Los Ángeles Azules','Totó la Momposina'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWU4xkXueiKGW",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Cumbia_Colombia.jpg"
  },
  {
    name: 'Tango',
    descriptionFr: "Danse argentine emblématique, passion et nostalgie.",
    descriptionEn: "Iconic Argentine dance, passion and nostalgia.",
    subgenres: ['Tango nuevo','Tango tradicional'],
    artists: ['Carlos Gardel','Astor Piazzolla'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9u7XXOp0l5L",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Street_tango_Buenos_Aires.jpg"
  },
  {
    name: 'Reggaeton',
    descriptionFr: "Urbain latino né PR/Panama : dembow, rap chanté.",
    descriptionEn: "Latino urban born PR/Panama: dembow, sung rap.",
    subgenres: ['Latin Trap'],
    artists: ['Daddy Yankee', 'Bad Bunny'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXaXB8fQg7xif",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Puerto_Rico_Urban.jpg"
  },

  // ——— Amérique Centrale ———
  {
    name: 'Marimba',
    descriptionFr: "Instrument national guatémaltèque, présent dans la musique traditionnelle et festive.",
    descriptionEn: "Guatemalan national instrument, central to traditional and festive music.",
    subgenres: ['Marimba folklorique', 'Marimba moderne'],
    artists: ['Marimba Chapinlandia', 'Marimba de Concierto'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4xuWVBs4FgJ",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Marimba_Instrument.jpg"
  },
  {
    name: 'Punta',
    descriptionFr: "Rythme afro-caribéen garifuna d'Amérique centrale, dansé et festif.",
    descriptionEn: "Afro-Caribbean Garifuna rhythm from Central America, dance-oriented and festive.",
    subgenres: ['Punta Rock', 'Paranda'],
    artists: ['Banda Blanca', 'Aurelio Martínez'],
    spotify: "https://open.spotify.com/playlist/3yhOjgQDnOKcw4ICzwFaPC",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Garifuna_dancers_Belize.jpg"
  },
  {
    name: 'Calypso Limonense',
    descriptionFr: "Calypso afro-caribéen de Limón (Costa Rica), narratif et festif.",
    descriptionEn: "Afro-Caribbean calypso from Limón (Costa Rica), narrative and festive.",
    subgenres: [],
    artists: ['Walter Ferguson'],
    spotify: "https://open.spotify.com/playlist/27X0TfNiQuoOFFT3XjARWH",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Limon_Costa_Rica.jpg"
  },
  {
    name: 'Palo de Mayo',
    descriptionFr: "Danse/musique festive de la côte Atlantique nicaraguayenne (Maypole).",
    descriptionEn: "Festive dance/music from Nicaragua's Atlantic coast (Maypole).",
    subgenres: [],
    artists: ['Dimension Costeña'],
    spotify: "https://open.spotify.com/playlist/6Z1thlZ037D6CswrkkiMtI",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bluefields_Maypole.jpg"
  },

  // ——— Amérique du Sud ———
  {
    name: 'Samba',
    descriptionFr: "Rythme brésilien emblématique, carnaval de Rio.",
    descriptionEn: "Iconic Brazilian rhythm, Rio carnival.",
    subgenres: ['Samba de roda', 'Samba enredo', 'Pagode'],
    artists: ['Cartola', 'Zeca Pagodinho'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7UE7qrnkvsf",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Copacabana_Beach_Rio_de_Janeiro.jpg"
  },
  {
    name: 'Bossa Nova',
    descriptionFr: "Fusion jazz-samba des années 60, sophistication brésilienne.",
    descriptionEn: "60s jazz-samba fusion, Brazilian sophistication.",
    subgenres: [],
    artists: ['João Gilberto', 'Tom Jobim', 'Astrud Gilberto'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX5oZZZXLjFGH",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
  },
  {
    name: 'MPB',
    descriptionFr: "Musique Populaire Brésilienne, fusion sophistiquée.",
    descriptionEn: "Brazilian Popular Music, sophisticated fusion.",
    subgenres: [],
    artists: ['Gilberto Gil', 'Caetano Veloso', 'Elis Regina'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWZXyFN6hhhmY",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
  },
  {
    name: 'Vallenato',
    descriptionFr: "Musique de l'accordéon des Caraïbes colombiennes.",
    descriptionEn: "Accordion-driven music from Colombia's Caribbean region.",
    subgenres: [],
    artists: ['Carlos Vives', 'Diomedes Díaz'],
    spotify: "https://open.spotify.com/playlist/4hPws0Egz0eicp6DvEcdyf",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Accordion.jpg"
  },
  {
    name: 'Champeta',
    descriptionFr: "Genre urbain afro-caribéen de Cartagena.",
    descriptionEn: "Afro-Caribbean urban genre from Cartagena.",
    subgenres: [],
    artists: ['Charles King'],
    spotify: "https://open.spotify.com/playlist/3WnrSBX3vfya9CLyID4pmX",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
  },

  // ——— Europe ———
  {
    name: 'Flamenco',
    descriptionFr: "Art andalou : chant, guitare, palmas, duende.",
    descriptionEn: "Andalusian art: vocals, guitar, palmas, duende.",
    subgenres: ['Flamenco Nuevo', 'Flamenco Pop'],
    artists: ['Paco de Lucía', 'Camarón de la Isla', 'Rosalía'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX5oZZZXLjFGH",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Flamenco_guitar.jpg"
  },
  {
    name: 'Fado',
    descriptionFr: "Chant mélancolique portugais avec guitare portugaise.",
    descriptionEn: "Melancholic Portuguese singing with Portuguese guitar.",
    subgenres: [],
    artists: ['Amália Rodrigues', 'Mariza'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Portuguese_guitar.jpg"
  },
  {
    name: 'Chanson',
    descriptionFr: "Texte/voix au centre, héritage poétique français.",
    descriptionEn: "Lyric-centered French style, poetic heritage.",
    subgenres: [],
    artists: ['Brel', 'Brassens', 'Barbara', 'Piaf'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWVpjAJGB70vU",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
  },
  {
    name: 'French Touch',
    descriptionFr: "House FR 90s-00s : filtres, samples disco.",
    descriptionEn: "90s-00s French house: filters, disco samples.",
    subgenres: [],
    artists: ['Daft Punk', 'Justice', 'Cassius'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Synthesizer2.jpg"
  },
  {
    name: 'Techno',
    descriptionFr: "Techno berlinoise : minimale, indus, hypnotique.",
    descriptionEn: "Berlin techno: minimal, industrial, hypnotic.",
    subgenres: [],
    artists: ['Ben Klock', 'Paul Kalkbrenner'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX6J5NfMJS675",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Berlin_Television_Tower.jpg"
  },
  {
    name: 'Grime',
    descriptionFr: "Rap UK ~140 BPM, MCs incisifs, basses lourdes.",
    descriptionEn: "UK rap at ~140 BPM, sharp MCs, heavy bass.",
    subgenres: ['Road rap', 'Drill UK'],
    artists: ['Skepta', 'Wiley', 'Stormzy'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX3mUffc9vHUZ",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Stormzy_Glastonbury_2019.jpg"
  },
  {
    name: 'K-Pop',
    descriptionFr: "Pop sud-coréenne, chorégraphies, production léchée.",
    descriptionEn: "South Korean pop — choreography and polished production.",
    subgenres: [],
    artists: ['BTS', 'BLACKPINK', 'TWICE'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9tPFwDMOaN1",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
  },
  {
    name: 'J-Pop',
    descriptionFr: "Pop japonaise moderne, refrains accrocheurs, idols.",
    descriptionEn: "Modern Japanese pop with catchy hooks and idol culture.",
    subgenres: [],
    artists: ['Hikaru Utada', 'Perfume'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4VFhE8rDJI6",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
  },
  {
    name: 'Bollywood',
    descriptionFr: "Musique de films hindi : orchestration, dance, romance.",
    descriptionEn: "Hindi film music: orchestration, dance, romance.",
    subgenres: [],
    artists: ['AR Rahman', 'Arijit Singh', 'Lata Mangeshkar'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Film_reel_icon.png"
  },
  // Ajoutez ces nouveaux genres dans votre tableau existant

{
  name: 'Desert Blues',
  descriptionFr: "Blues touareg du Sahara malien, guitares hypnotiques du désert. Fusion unique de blues américain et traditions nomades.",
  descriptionEn: "Tuareg blues from Mali's Sahara, hypnotic desert guitars. Unique fusion of American blues and nomadic traditions.",
  subgenres: ['Touareg Rock', 'Sahel Blues', 'Tishoumaren'],
  artists: ['Ali Farka Touré', 'Tinariwen', 'Bombino'],
  origin: 'Mali',
  relatedCountries: ['Mali', 'Niger', 'Algeria'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4VFhE8rDJI6",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sahara_desert.jpg/800px-Sahara_desert.jpg"
},
{
  name: 'Afrobeats',
  descriptionFr: "Différent de l'Afrobeat de Fela! Fusion moderne nigériane de highlife, hip-hop et dancehall des années 2000.",
  descriptionEn: "Different from Fela's Afrobeat! Modern Nigerian fusion of highlife, hip-hop and dancehall from the 2000s.",
  subgenres: ['Naija Pop', 'Afro-fusion', 'Alte'],
  artists: ['Wizkid', 'Burna Boy', 'Davido'],
  origin: 'Nigeria',
  relatedCountries: ['Nigeria', 'Ghana', 'South Africa'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7QOv0IgJ5mg",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Lagos_Island_skyline.jpg"
},
{
  name: 'Amapiano',
  descriptionFr: "House sud-africaine avec log drums et percussions jazzy. Né dans les townships de Pretoria vers 2012.",
  descriptionEn: "South African house with log drums and jazzy percussion. Born in Pretoria townships around 2012.",
  subgenres: ['Private School Amapiano', 'Sgija', 'Bacardi'],
  artists: ['Kabza De Small', 'DJ Maphorisa', 'Focalistic'],
  origin: 'South Africa',
  relatedCountries: ['South Africa'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9u7XXOp0l5L",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Johannesburg_Skyline.jpg"
},
{
  name: 'City Pop',
  descriptionFr: "Pop japonaise sophistiquée des années 70-80, fusion jazz-funk-disco. Redécouvert via Internet en 2010s.",
  descriptionEn: "Sophisticated Japanese pop from the 70s-80s, jazz-funk-disco fusion. Rediscovered via Internet in 2010s.",
  subgenres: ['AOR Japonais', 'Shibuya-kei'],
  artists: ['Tatsuro Yamashita', 'Mariya Takeuchi', 'Casiopea'],
  origin: 'Japan',
  relatedCountries: ['Japan'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Tokyo_Tower_and_around_Skyscrapers.jpg"
},
{
  name: 'Mbalax',
  descriptionFr: "Fusion sénégalaise de sabar traditionnel et influences afro-cubaines des années 70. Popularisé par Youssou N'Dour.",
  descriptionEn: "Senegalese fusion of traditional sabar and Afro-Cuban influences from the 70s. Popularized by Youssou N'Dour.",
  subgenres: ['Sabar moderne', 'Mbalax-hip-hop'],
  artists: ["Youssou N'Dour", 'Orchestra Baobab', 'Baaba Maal'],
  origin: 'Senegal',
  relatedCountries: ['Senegal', 'Gambia'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Dakar_Skyline.jpg"
},
{
  name: 'Tropicália',
  descriptionFr: "Mouvement brésilien psychédélique des années 60 fusionnant rock, bossa nova et traditions régionales.",
  descriptionEn: "Brazilian psychedelic movement from the 60s fusing rock, bossa nova and regional traditions.",
  subgenres: ['Tropicália moderna'],
  artists: ['Caetano Veloso', 'Gilberto Gil', 'Os Mutantes'],
  origin: 'Brazil',
  relatedCountries: ['Brazil'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7UE7qrnkvsf",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Copacabana_Beach_Rio_de_Janeiro.jpg"
},
{
  name: 'Funk Carioca',
  descriptionFr: "Funk brésilien des favelas cariocas, rythmes Miami bass rapides. Émergé dans les années 80-90.",
  descriptionEn: "Brazilian funk from Rio's favelas, fast Miami bass rhythms. Emerged in the 80s-90s.",
  subgenres: ['Funk Ostentação', 'Funk Melody', 'Proibidão'],
  artists: ['MC Créu', 'Anitta', 'Ludmilla'],
  origin: 'Brazil',
  relatedCountries: ['Brazil'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rio_de_Janeiro_Favela.jpg"
},
{
  name: 'Trap Latino',
  descriptionFr: "Trap en espagnol, fusion reggaeton et trap américain. Émergé vers 2015 avec Bad Bunny et Anuel AA.",
  descriptionEn: "Spanish-language trap, fusion of reggaeton and American trap. Emerged around 2015 with Bad Bunny and Anuel AA.",
  subgenres: ['Latin Trap', 'Trap Reggaeton'],
  artists: ['Bad Bunny', 'Anuel AA', 'Ozuna'],
  origin: 'Puerto Rico',
  relatedCountries: ['Puerto Rico', 'Colombia', 'Argentina'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DX48TTZL62Yht",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/San_Juan_Puerto_Rico.jpg"
},
{
  name: 'UK Drill',
  descriptionFr: "Dérivé du drill chicagoan mais avec accent britannique et rythmes plus sombres. Émergé à Londres vers 2012.",
  descriptionEn: "Derived from Chicago drill but with British accent and darker rhythms. Emerged in London around 2012.",
  subgenres: ['Brooklyn Drill', 'Irish Drill'],
  artists: ['Headie One', 'Digga D', 'Central Cee'],
  origin: 'United Kingdom',
  relatedCountries: ['United Kingdom', 'United States'],
  spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Skyline_%28cropped%29.jpg"
}
];
