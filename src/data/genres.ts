import type { Item } from '../types';

export const genres: Item[] = [
  
  // ═══════════════════════════════════════════════════════════
  // 🎸 ROCK - Genre principal et tous ses sous-genres
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Rock',
    descriptionFr: "Né dans les années 50 aux USA, influencé par le blues et la country. Base de la musique moderne occidentale.",
    descriptionEn: "Born in the 1950s in the USA, influenced by blues and country. Foundation of modern Western music.",
    subgenres: ['Progressif','Alternatif','Psychédélique','Garage Rock','Hard Rock','Indie Rock','Post-Rock','Shoegaze','Grunge','Surf Rock'],
    artists: ['The Beatles','Led Zeppelin','Pink Floyd'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_guitar.jpg"
  },
  {
    name: 'Progressive Rock',
    descriptionFr: "Rock complexe des années 70 avec structures longues, influences classiques et jazz. Virtuosité technique et concepts albums.",
    descriptionEn: "Complex 70s rock with long structures, classical and jazz influences. Technical virtuosity and concept albums.",
    subgenres: ['Prog symphonique', 'Canterbury', 'Krautrock'],
    artists: ['Pink Floyd', 'Yes', 'King Crimson'],
    origin: 'United Kingdom',
    relatedCountries: ['United Kingdom', 'Germany', 'Italy'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX3Sp2qw96U5d"
  },
  {
    name: 'Psychedelic Rock',
    descriptionFr: "Rock expérimental des années 60 avec effets, distorsions et influences psychédéliques. Lié à la culture hippie.",
    descriptionEn: "Experimental 60s rock with effects, distortions and psychedelic influences. Linked to hippie culture.",
    subgenres: ['Acid Rock', 'Space Rock', 'Neo-Psychedelia'],
    artists: ['The Doors', 'Pink Floyd', 'Jimi Hendrix'],
    origin: 'United States',
    relatedCountries: ['United States', 'United Kingdom'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX8gDIpdqp1XJ"
  },
  {
    name: 'Garage Rock',
    descriptionFr: "Rock brut et DIY des années 60, précurseur du punk. Riffs simples, production lo-fi, énergie brute.",
    descriptionEn: "Raw and DIY 60s rock, punk precursor. Simple riffs, lo-fi production, raw energy.",
    subgenres: ['Garage Punk', 'Proto-Punk', 'Garage Revival'],
    artists: ['The Stooges', 'MC5', 'The Sonics'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9wa6XirBPv8"
  },
  {
    name: 'Hard Rock',
    descriptionFr: "Rock puissant des années 70 avec guitares lourdes, riffs agressifs. Pont entre rock classique et metal.",
    descriptionEn: "Powerful 70s rock with heavy guitars, aggressive riffs. Bridge between classic rock and metal.",
    subgenres: ['Blues Rock', 'Southern Rock', 'Glam Rock'],
    artists: ['Led Zeppelin', 'AC/DC', 'Deep Purple'],
    origin: 'United Kingdom',
    relatedCountries: ['United Kingdom', 'United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWWJOmJ7nRx0C"
  },
  {
    name: 'Indie Rock',
    descriptionFr: "Rock indépendant des années 80-90, production DIY et labels indépendants. Diversité sonore et expérimentation.",
    descriptionEn: "Independent 80s-90s rock, DIY production and indie labels. Sonic diversity and experimentation.",
    subgenres: ['Indie Pop', 'Math Rock', 'Noise Rock', 'Lo-Fi'],
    artists: ['Sonic Youth', 'Pavement', 'Arctic Monkeys'],
    origin: 'United Kingdom',
    relatedCountries: ['United Kingdom', 'United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX2Nc3B70tvx0"
  },
  {
    name: 'Post-Rock',
    descriptionFr: "Rock instrumental atmosphérique des années 90, structures crescendo, ambiances cinématiques sans chant traditionnel.",
    descriptionEn: "Atmospheric instrumental 90s rock, crescendo structures, cinematic ambiences without traditional vocals.",
    subgenres: ['Post-Rock Ambiant', 'Post-Rock Expérimental'],
    artists: ['Mogwai', 'Godspeed You! Black Emperor', 'Explosions in the Sky'],
    origin: 'United States',
    relatedCountries: ['United States', 'Canada', 'Iceland'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX8gDIpdqp1XJ"
  },
  {
    name: 'Shoegaze',
    descriptionFr: "Rock britannique fin 80s avec murs de guitares, effets, voix noyées. Nom vient des musiciens fixant leurs pédales.",
    descriptionEn: "Late 80s British rock with guitar walls, effects, buried vocals. Name from musicians staring at their pedals.",
    subgenres: ['Dream Pop', 'Noise Pop'],
    artists: ['My Bloody Valentine', 'Slowdive', 'Ride'],
    origin: 'United Kingdom',
    relatedCountries: ['United Kingdom', 'Ireland'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX11ghcIxjcj5"
  },
  {
    name: 'Grunge',
    descriptionFr: "Mouvement Seattle début 90s fusionnant punk et metal. Esthétique anti-glamour, textes sombres, guitares saturées.",
    descriptionEn: "Early 90s Seattle movement fusing punk and metal. Anti-glamour aesthetic, dark lyrics, saturated guitars.",
    subgenres: ['Post-Grunge'],
    artists: ['Nirvana', 'Pearl Jam', 'Soundgarden'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1rVvRgjX59F"
  },
  {
    name: 'Surf Rock',
    descriptionFr: "Rock instrumental californien des années 60, thème surf et plage. Guitares réverbérées, rythmes rapides.",
    descriptionEn: "60s California instrumental rock, surf and beach themes. Reverb-heavy guitars, fast rhythms.",
    subgenres: ['Surf Instrumental', 'Surf Pop'],
    artists: ['The Beach Boys', 'Dick Dale', 'The Ventures'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXaXjBFWOx48v"
  },

  // ═══════════════════════════════════════════════════════════
  // 🤘 METAL - Genre principal et tous ses sous-genres
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Metal',
    descriptionFr: "Plus lourd et agressif que le rock, popularisé dans les années 70. Distorsion extrême, tempos rapides, virtuosité.",
    descriptionEn: "Heavier and more aggressive than rock, popular since the 1970s. Extreme distortion, fast tempos, virtuosity.",
    subgenres: ['Heavy Metal','Thrash','Death Metal','Black Metal','Doom','Power Metal','Metalcore','Progressive Metal','Nu Metal'],
    artists: ['Metallica','Iron Maiden','Black Sabbath'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Heavy_metal_band.jpg"
  },
  {
    name: 'Heavy Metal',
    descriptionFr: "Metal classique des années 70-80 avec riffs puissants, solos de guitare virtuoses. Base du genre metal.",
    descriptionEn: "Classic 70s-80s metal with powerful riffs, virtuoso guitar solos. Foundation of the metal genre.",
    subgenres: ['NWOBHM', 'Traditional Metal'],
    artists: ['Iron Maiden', 'Judas Priest', 'Black Sabbath'],
    origin: 'United Kingdom',
    relatedCountries: ['United Kingdom', 'United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe"
  },
  {
    name: 'Thrash Metal',
    descriptionFr: "Metal rapide et agressif des années 80, influences punk hardcore. Tempos ultra-rapides, riffs saccadés.",
    descriptionEn: "Fast and aggressive 80s metal, hardcore punk influences. Ultra-fast tempos, choppy riffs.",
    subgenres: ['Crossover Thrash', 'Technical Thrash'],
    artists: ['Metallica', 'Slayer', 'Megadeth', 'Anthrax'],
    origin: 'United States',
    relatedCountries: ['United States', 'Germany'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWWOaP4H0w5b0"
  },
  {
    name: 'Death Metal',
    descriptionFr: "Metal extrême des années 80 avec growls, blast beats, thèmes morbides. Technicité et brutalité maximales.",
    descriptionEn: "Extreme 80s metal with growls, blast beats, morbid themes. Maximum technicality and brutality.",
    subgenres: ['Melodic Death', 'Technical Death', 'Brutal Death'],
    artists: ['Death', 'Cannibal Corpse', 'Morbid Angel'],
    origin: 'United States',
    relatedCountries: ['United States', 'Sweden', 'Finland'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWTcqUzwhNmKv"
  },
  {
    name: 'Black Metal',
    descriptionFr: "Metal scandinave début 90s, atmosphères sombres, screams aigus, thèmes sataniques/païens. Esthétique corpse paint.",
    descriptionEn: "Early 90s Scandinavian metal, dark atmospheres, high-pitched screams, satanic/pagan themes. Corpse paint aesthetic.",
    subgenres: ['Symphonic Black', 'Atmospheric Black', 'DSBM'],
    artists: ['Mayhem', 'Darkthrone', 'Emperor'],
    origin: 'Norway',
    relatedCountries: ['Norway', 'Sweden', 'Finland'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX20ERdEdOOGi"
  },
  {
    name: 'Doom Metal',
    descriptionFr: "Metal lent et lourd inspiré de Black Sabbath. Tempos traînants, riffs écrasants, ambiances sombres et désespérées.",
    descriptionEn: "Slow and heavy metal inspired by Black Sabbath. Dragging tempos, crushing riffs, dark and desperate atmospheres.",
    subgenres: ['Stoner Doom', 'Funeral Doom', 'Sludge Metal'],
    artists: ['Candlemass', 'Electric Wizard', 'Sleep'],
    origin: 'United Kingdom',
    relatedCountries: ['United Kingdom', 'United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1n8HBnb3Zif"
  },
  {
    name: 'Power Metal',
    descriptionFr: "Metal épique et mélodique des années 80, thèmes fantasy. Voix claires, riffs rapides, solos virtuoses.",
    descriptionEn: "Epic and melodic 80s metal, fantasy themes. Clean vocals, fast riffs, virtuoso solos.",
    subgenres: ['Symphonic Power', 'Speed Metal'],
    artists: ['Helloween', 'Blind Guardian', 'DragonForce'],
    origin: 'Germany',
    relatedCountries: ['Germany', 'Finland', 'Italy'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe"
  },
  {
    name: 'Metalcore',
    descriptionFr: "Fusion metal et hardcore punk années 90. Breakdowns lourds, alternance screams/chant clair, riffs techniques.",
    descriptionEn: "90s fusion of metal and hardcore punk. Heavy breakdowns, scream/clean vocal alternation, technical riffs.",
    subgenres: ['Melodic Metalcore', 'Mathcore', 'Deathcore'],
    artists: ['Killswitch Engage', 'Parkway Drive', 'August Burns Red'],
    origin: 'United States',
    relatedCountries: ['United States', 'Australia', 'Sweden'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX34IlJAcD7dj"
  },
  {
    name: 'Progressive Metal',
    descriptionFr: "Metal technique fusionnant prog rock et metal. Structures complexes, signatures rythmiques inhabituelles, virtuosité.",
    descriptionEn: "Technical metal fusing prog rock and metal. Complex structures, unusual time signatures, virtuosity.",
    subgenres: ['Djent', 'Tech Metal'],
    artists: ['Dream Theater', 'Opeth', 'Tool'],
    origin: 'United States',
    relatedCountries: ['United States', 'Sweden'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX5wgKYQVRARv"
  },
  {
    name: 'Nu Metal',
    descriptionFr: "Metal fusion fin 90s avec hip-hop, grunge, electro. DJs, raps, guitares down-tuned, angst adolescent.",
    descriptionEn: "Late 90s fusion metal with hip-hop, grunge, electro. DJs, raps, down-tuned guitars, teenage angst.",
    subgenres: ['Rap Metal', 'Industrial Nu Metal'],
    artists: ['Korn', 'Linkin Park', 'Limp Bizkit'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX6XceJKP4F0Y"
  },

  // ═══════════════════════════════════════════════════════════
  // 🎺 JAZZ - Genre principal et tous ses sous-genres
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Jazz',
    descriptionFr: "Improvisation née à la Nouvelle-Orléans début 1900s. Syncopes, swing, liberté harmonique.",
    descriptionEn: "Improvisation at its core, born in New Orleans early 1900s. Syncopation, swing, harmonic freedom.",
    subgenres: ['New Orleans','Swing','Bebop','Hard Bop','Cool Jazz','Modal','Free Jazz','Fusion','Smooth Jazz','Nu Jazz'],
    artists: ['Miles Davis','John Coltrane','Louis Armstrong'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Jazz_band.jpg"
  },
  {
    name: 'New Orleans Jazz',
    descriptionFr: "Jazz originel 1910s-20s, polyphonie collective, influences ragtime et blues. Trompette, clarinette, trombone.",
    descriptionEn: "Original 1910s-20s jazz, collective polyphony, ragtime and blues influences. Trumpet, clarinet, trombone.",
    subgenres: ['Dixieland', 'Traditional Jazz'],
    artists: ['Louis Armstrong', 'Jelly Roll Morton', 'King Oliver'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbKfAHLt30eI"
  },
  {
    name: 'Swing',
    descriptionFr: "Jazz dansant des années 30-40, big bands, rythme swingué. Ère des orchestres de Basie, Ellington, Goodman.",
    descriptionEn: "Danceable 30s-40s jazz, big bands, swung rhythm. Era of Basie, Ellington, Goodman orchestras.",
    subgenres: ['Big Band', 'Jump Blues'],
    artists: ['Duke Ellington', 'Count Basie', 'Benny Goodman'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdwTUxmGKrdN"
  },
  {
    name: 'Bebop',
    descriptionFr: "Jazz virtuose années 40, tempos rapides, harmonies complexes. Révolution contre commercialisation du swing.",
    descriptionEn: "Virtuoso 40s jazz, fast tempos, complex harmonies. Revolution against swing commercialization.",
    subgenres: ['Hard Bop', 'Post-Bop'],
    artists: ['Charlie Parker', 'Dizzy Gillespie', 'Thelonious Monk'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4wta20PHgwo"
  },
  {
    name: 'Cool Jazz',
    descriptionFr: "Jazz détendu fin 40s-50s, tempos modérés, tonalités douces. Réaction au bebop frénétique.",
    descriptionEn: "Relaxed late 40s-50s jazz, moderate tempos, soft tones. Reaction to frenetic bebop.",
    subgenres: ['West Coast Jazz'],
    artists: ['Miles Davis', 'Chet Baker', 'Dave Brubeck'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4fMDEoFGjV9"
  },
  {
    name: 'Modal Jazz',
    descriptionFr: "Jazz années 50-60 basé sur modes plutôt que progressions d'accords. Liberté mélodique, improvisations étendues.",
    descriptionEn: "50s-60s jazz based on modes rather than chord progressions. Melodic freedom, extended improvisations.",
    subgenres: [],
    artists: ['Miles Davis', 'John Coltrane', 'Bill Evans'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7YCknf2jT6s"
  },
  {
    name: 'Free Jazz',
    descriptionFr: "Jazz avant-gardiste années 60, abandon des structures traditionnelles. Improvisation collective totale, dissonances.",
    descriptionEn: "Avant-garde 60s jazz, abandoning traditional structures. Total collective improvisation, dissonance.",
    subgenres: ['Spiritual Jazz'],
    artists: ['Ornette Coleman', 'Albert Ayler', 'Sun Ra'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWV7EzJMK2FUI"
  },
  {
    name: 'Jazz Fusion',
    descriptionFr: "Fusion jazz-rock années 70, instruments électriques, influences funk. Miles Davis pionnier avec Bitches Brew.",
    descriptionEn: "70s jazz-rock fusion, electric instruments, funk influences. Miles Davis pioneer with Bitches Brew.",
    subgenres: ['Jazz-Rock', 'Acid Jazz', 'Jazz-Funk'],
    artists: ['Weather Report', 'Herbie Hancock', 'Mahavishnu Orchestra'],
    origin: 'United States',
    relatedCountries: ['United States', 'United Kingdom'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4wta20PHgwo"
  },
  {
    name: 'Smooth Jazz',
    descriptionFr: "Jazz commercial années 80-90, mélodies douces, production pop. Orienté radio, moins d'improvisation.",
    descriptionEn: "Commercial 80s-90s jazz, smooth melodies, pop production. Radio-oriented, less improvisation.",
    subgenres: ['Contemporary Jazz'],
    artists: ['Kenny G', 'George Benson', 'Grover Washington Jr.'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdwTUxmGKrdN"
  },
  {
    name: 'Nu Jazz',
    descriptionFr: "Jazz électronique années 90-2000s, fusion avec house, trip-hop, électronique. Club-oriented, grooves modernes.",
    descriptionEn: "90s-2000s electronic jazz, fusion with house, trip-hop, electronic. Club-oriented, modern grooves.",
    subgenres: ['Jazz House', 'Broken Beat'],
    artists: ['St Germain', 'Jazzanova', 'Bugge Wesseltoft'],
    origin: 'France',
    relatedCountries: ['France', 'United Kingdom', 'Norway'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT"
  },

  // ═══════════════════════════════════════════════════════════
  // 🎤 HIP-HOP - Genre principal et tous ses sous-genres
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Hip-Hop',
    descriptionFr: "Né dans le Bronx années 70; rimes, beats et culture DJ/MC. Culture des 4 éléments: rap, DJ, breakdance, graffiti.",
    descriptionEn: "Born in the Bronx 70s; rhymes, beats and DJ/MC culture. 4 elements culture: rap, DJ, breakdance, graffiti.",
    subgenres: ['Boom Bap','Trap','Alternative Rap','West Coast','East Coast','Drill','Lo-Fi'],
    artists: ['Kendrick Lamar','Jay-Z','Missy Elliott'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Graffiti_Bronx.jpg"
  },
  {
    name: 'Boom Bap',
    descriptionFr: "Hip-hop classique années 90, drums lourds et samples soul/funk. Son new-yorkais authentique, lyrisme complexe.",
    descriptionEn: "Classic 90s hip-hop, heavy drums and soul/funk samples. Authentic New York sound, complex lyricism.",
    subgenres: ['Golden Age Hip-Hop'],
    artists: ['Nas', 'Wu-Tang Clan', 'A Tribe Called Quest'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWUgX5cUT0GhA"
  },
  {
    name: 'Trap',
    descriptionFr: "Hip-hop du Sud années 2000s, 808s lourdes, hi-hats rapides, thèmes rue. Atlanta origine, devenu dominant globalement.",
    descriptionEn: "Southern 2000s hip-hop, heavy 808s, rapid hi-hats, street themes. Atlanta origin, became globally dominant.",
    subgenres: ['Latin Trap', 'Trap Soul', 'Drill Trap'],
    artists: ['Future', 'Migos', 'Gucci Mane'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
  },
  {
    name: 'West Coast Hip-Hop',
    descriptionFr: "Hip-hop californien années 80-90, G-funk, basses lourdes, ambiance laid-back. Dr. Dre et Death Row définissent le son.",
    descriptionEn: "80s-90s California hip-hop, G-funk, heavy bass, laid-back vibe. Dr. Dre and Death Row define the sound.",
    subgenres: ['G-Funk', 'Hyphy', 'Chicano Rap'],
    artists: ['Dr. Dre', 'Snoop Dogg', 'Tupac'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
  },
  
