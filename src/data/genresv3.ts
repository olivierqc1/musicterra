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
  {
    name: 'East Coast Hip-Hop',
    descriptionFr: "Hip-hop new-yorkais originel, lyrisme complexe, beats jazz/soul. Compétition technique, culture battle.",
    descriptionEn: "Original New York hip-hop, complex lyricism, jazz/soul beats. Technical competition, battle culture.",
    subgenres: ['Hardcore Hip-Hop', 'Conscious Rap'],
    artists: ['Nas', 'The Notorious B.I.G.', 'Jay-Z'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
  },
  {
    name: 'Drill',
    descriptionFr: "Hip-hop sombre de Chicago 2010s, violence urbaine, 808s menaçantes. UK Drill plus sombre avec accent britannique.",
    descriptionEn: "Dark 2010s Chicago hip-hop, urban violence, menacing 808s. UK Drill darker with British accent.",
    subgenres: ['UK Drill', 'Brooklyn Drill', 'Irish Drill'],
    artists: ['Chief Keef', 'Pop Smoke', 'Headie One'],
    origin: 'United States',
    relatedCountries: ['United States', 'United Kingdom'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM"
  },
  {
    name: 'Alternative Hip-Hop',
    descriptionFr: "Hip-hop expérimental rejetant conventions mainstream. Influences diverses: rock, électro, jazz. Lyrisme introspectif.",
    descriptionEn: "Experimental hip-hop rejecting mainstream conventions. Diverse influences: rock, electronic, jazz. Introspective lyricism.",
    subgenres: ['Abstract Hip-Hop', 'Jazz Rap', 'Nerdcore'],
    artists: ['OutKast', 'MF DOOM', 'Tyler, The Creator'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX2RxBh64BHjQ"
  },
  {
    name: 'Lo-Fi Hip-Hop',
    descriptionFr: "Hip-hop chill années 2010s, beats relaxants, imperfections sonores volontaires. Culture 'study beats', streaming 24/7.",
    descriptionEn: "2010s chill hip-hop, relaxing beats, intentional sonic imperfections. 'Study beats' culture, 24/7 streaming.",
    subgenres: ['Chillhop', 'Jazzhop'],
    artists: ['Nujabes', 'J Dilla', 'Jinsang'],
    origin: 'Japan',
    relatedCountries: ['Japan', 'United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
  },

  // ═══════════════════════════════════════════════════════════
  // 🎸 BLUES - Genre principal et tous ses sous-genres
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Blues',
    descriptionFr: "Né dans le Delta du Mississippi fin 1800s; racines du rock et du jazz. Structure 12 mesures, pentatonique, call-and-response.",
    descriptionEn: "Born in Mississippi Delta late 1800s; roots of rock and jazz. 12-bar structure, pentatonic, call-and-response.",
    subgenres: ['Delta Blues','Chicago Blues','Electric Blues','Piedmont','Country Blues'],
    artists: ['B.B. King','Muddy Waters','Etta James'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/BB_King_2009.jpg"
  },
  {
    name: 'Delta Blues',
    descriptionFr: "Blues acoustique originel du Delta Mississippi, slide guitar, son brut. Robert Johnson figure mythique.",
    descriptionEn: "Original acoustic blues from Mississippi Delta, slide guitar, raw sound. Robert Johnson mythical figure.",
    subgenres: [],
    artists: ['Robert Johnson', 'Son House', 'Skip James'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk"
  },
  {
    name: 'Chicago Blues',
    descriptionFr: "Blues électrique urbain années 40-50, migration du Sud vers Chicago. Amplification, harmonica, section rythmique.",
    descriptionEn: "Urban electric blues 40s-50s, migration from South to Chicago. Amplification, harmonica, rhythm section.",
    subgenres: ['West Side Sound'],
    artists: ['Muddy Waters', 'Howlin\' Wolf', 'Willie Dixon'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk"
  },
  {
    name: 'Electric Blues',
    descriptionFr: "Blues amplifié post-guerre, guitares électriques, son plus puissant. Influence directe sur le rock.",
    descriptionEn: "Post-war amplified blues, electric guitars, more powerful sound. Direct influence on rock.",
    subgenres: ['Blues Rock', 'British Blues'],
    artists: ['B.B. King', 'Albert King', 'Eric Clapton'],
    origin: 'United States',
    relatedCountries: ['United States', 'United Kingdom'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk"
  },
  {
    name: 'Piedmont Blues',
    descriptionFr: "Blues acoustique fingerstyle de la côte Est, patterns ragtime. Alternating bass, mélodies complexes.",
    descriptionEn: "East Coast acoustic fingerstyle blues, ragtime patterns. Alternating bass, complex melodies.",
    subgenres: [],
    artists: ['Blind Blake', 'Rev. Gary Davis', 'Blind Boy Fuller'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk"
  },

  // ═══════════════════════════════════════════════════════════
  // 🤠 COUNTRY - Genre principal et tous ses sous-genres
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Country',
    descriptionFr: "Originaire du Sud des États-Unis années 20s; guitares, histoires et harmonies. Racines folk, blues, gospel.",
    descriptionEn: "From the American South 20s; guitars, storytelling and harmonies. Folk, blues, gospel roots.",
    subgenres: ['Classic Country','Modern Country','Bluegrass','Outlaw','Alt-Country'],
    artists: ['Johnny Cash','Dolly Parton','Chris Stapleton'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nashville_Broadway.jpg"
  },
  {
    name: 'Classic Country',
    descriptionFr: "Country traditionnel années 40-70s, Nashville sound, steel guitar, fiddle. Hank Williams, Patsy Cline définissent le genre.",
    descriptionEn: "Traditional 40s-70s country, Nashville sound, steel guitar, fiddle. Hank Williams, Patsy Cline define the genre.",
    subgenres: ['Honky Tonk', 'Western Swing'],
    artists: ['Hank Williams', 'Patsy Cline', 'George Jones'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda"
  },
  {
    name: 'Bluegrass',
    descriptionFr: "Country acoustique rapide des Appalaches, banjo, mandoline, fiddle. Virtuosité instrumentale, harmonies serrées.",
    descriptionEn: "Fast-paced Appalachian acoustic country, banjo, mandolin, fiddle. Instrumental virtuosity, tight harmonies.",
    subgenres: ['Progressive Bluegrass', 'Traditional Bluegrass'],
    artists: ['Bill Monroe', 'Alison Krauss', 'Béla Fleck'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0WNFy5xBnjz"
  },
  {
    name: 'Outlaw Country',
    descriptionFr: "Mouvement rebelle années 70 contre Nashville commercial. Son brut, textes honnêtes, attitude rock. Waylon, Willie, Cash.",
    descriptionEn: "70s rebel movement against commercial Nashville. Raw sound, honest lyrics, rock attitude. Waylon, Willie, Cash.",
    subgenres: ['Red Dirt', 'Texas Country'],
    artists: ['Willie Nelson', 'Waylon Jennings', 'Merle Haggard'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9ReK4W0ITtr"
  },
  {
    name: 'Alt-Country',
    descriptionFr: "Country alternatif années 90s, influences rock indie et punk. Oncle Tupelo pionnier, rejette Nashville mainstream.",
    descriptionEn: "90s alternative country, indie rock and punk influences. Uncle Tupelo pioneer, rejects mainstream Nashville.",
    subgenres: ['Americana', 'Folk Country'],
    artists: ['Ryan Adams', 'Wilco', 'Lucinda Williams'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWVhoKgqZL2Aj"
  },
  {
    name: 'Modern Country',
    descriptionFr: "Country pop actuel, production polished, crossover mainstream. Influences rock, pop, hip-hop. Dominé par Nashville.",
    descriptionEn: "Current country pop, polished production, mainstream crossover. Rock, pop, hip-hop influences. Nashville-dominated.",
    subgenres: ['Bro-Country', 'Country Pop'],
    artists: ['Luke Bryan', 'Carrie Underwood', 'Morgan Wallen'],
    origin: 'United States',
    relatedCountries: ['United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda"
  },

  // ═══════════════════════════════════════════════════════════
  // 🌴 REGGAE - Genre principal et tous ses sous-genres
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Reggae',
    descriptionFr: "Originaire de la Jamaïque années 60, rythmes lents et messages sociaux. Offbeat guitare, basslines lourdes, culture rasta.",
    descriptionEn: "Originated in Jamaica 60s, slow rhythms and social messages. Offbeat guitar, heavy basslines, rasta culture.",
    subgenres: ['Roots','Rocksteady','Dancehall','Dub','Lovers Rock','Ragga'],
    artists: ['Bob Marley','Peter Tosh','Burning Spear'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bob-Marley.jpg"
  },
  {
    name: 'Roots Reggae',
    descriptionFr: "Reggae originel années 70, messages rastafari et spirituels. Bob Marley ambassadeur mondial, conscience sociale.",
    descriptionEn: "Original 70s reggae, rastafari and spiritual messages. Bob Marley global ambassador, social consciousness.",
    subgenres: ['Nyabinghi Reggae'],
    artists: ['Bob Marley', 'Peter Tosh', 'Burning Spear'],
    origin: 'Jamaica',
    relatedCountries: ['Jamaica'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9"
  },
  {
    name: 'Rocksteady',
    descriptionFr: "Précurseur du reggae fin 60s, tempo plus lent que ska. Basse proéminente, romantisme, transition vers reggae.",
    descriptionEn: "Late 60s reggae precursor, slower tempo than ska. Prominent bass, romanticism, transition to reggae.",
    subgenres: [],
    artists: ['Alton Ellis', 'The Paragons', 'The Techniques'],
    origin: 'Jamaica',
    relatedCountries: ['Jamaica'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9"
  },
  {
    name: 'Dancehall',
    descriptionFr: "Reggae digital années 80, rythmes électroniques, DJ toasting. Plus agressif, dancefloor-oriented, culture clash.",
    descriptionEn: "80s digital reggae, electronic rhythms, DJ toasting. More aggressive, dancefloor-oriented, clash culture.",
    subgenres: ['Digital Dancehall', 'Ragga Dancehall'],
    artists: ['Shabba Ranks', 'Sean Paul', 'Vybz Kartel'],
    origin: 'Jamaica',
    relatedCountries: ['Jamaica'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX8FwnYE6PRvL"
  },
  {
    name: 'Dub',
    descriptionFr: "Reggae expérimental années 70, remixes instrumentaux avec effets. Lee Perry pionnier, influence massive sur électronique.",
    descriptionEn: "70s experimental reggae, instrumental remixes with effects. Lee Perry pioneer, massive influence on electronic music.",
    subgenres: ['Steppers Dub', 'Digital Dub'],
    artists: ["Lee 'Scratch' Perry", 'King Tubby', 'Mad Professor'],
    origin: 'Jamaica',
    relatedCountries: ['Jamaica', 'United Kingdom'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n"
  },
  {
    name: 'Lovers Rock',
    descriptionFr: "Reggae romantique britannique années 70-80, thèmes amoureux doux. Version UK du reggae, influences soul.",
    descriptionEn: "70s-80s British romantic reggae, soft love themes. UK version of reggae, soul influences.",
    subgenres: [],
    artists: ['Janet Kay', 'Carroll Thompson', 'Maxi Priest'],
    origin: 'United Kingdom',
    relatedCountries: ['United Kingdom'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1ewVhAJ17m4"
  },

  // ═══════════════════════════════════════════════════════════
  // 🌍 GENRES AFRICAINS
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Desert Blues',
    descriptionFr: "Blues touareg du Sahara malien, guitares hypnotiques du désert. Fusion unique de blues américain et traditions nomades touaregs.",
    descriptionEn: "Tuareg blues from Mali's Sahara, hypnotic desert guitars. Unique fusion of American blues and Tuareg nomadic traditions.",
    subgenres: ['Touareg Rock', 'Sahel Blues', 'Tishoumaren'],
    artists: ['Ali Farka Touré', 'Tinariwen', 'Bombino'],
    origin: 'Mali',
    relatedCountries: ['Mali', 'Niger', 'Algeria'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4VFhE8rDJI6",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sahara_desert.jpg/800px-Sahara_desert.jpg"
  },
  {
    name: 'Afrobeat',
    descriptionFr: "Genre nigérian lancé par Fela Kuti années 70: rythmes complexes, cuivres jazz, messages politiques. Fusion funk, jazz, highlife.",
    descriptionEn: "Nigerian genre pioneered by Fela Kuti 70s: complex rhythms, jazz horns, political messages. Funk, jazz, highlife fusion.",
    subgenres: ['Afrobeat Classique','Afro-fusion','Naija'],
    artists: ['Fela Kuti','Tony Allen','Burna Boy'],
    origin: 'Nigeria',
    relatedCountries: ['Nigeria', 'Ghana'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWYkaDif7Ztbp",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Fela_Kuti.jpg"
  },
  {
    name: 'Afrobeats',
    descriptionFr: "DIFFÉRENT de l'Afrobeat de Fela! Fusion moderne nigériane 2000s: highlife, hip-hop, dancehall, R&B. Succès commercial global.",
    descriptionEn: "DIFFERENT from Fela's Afrobeat! Modern 2000s Nigerian fusion: highlife, hip-hop, dancehall, R&B. Global commercial success.",
    subgenres: ['Naija Pop', 'Afro-fusion', 'Alte', 'Afro-swing'],
    artists: ['Wizkid', 'Burna Boy', 'Davido', 'Tems'],
    origin: 'Nigeria',
    relatedCountries: ['Nigeria', 'Ghana', 'South Africa', 'United Kingdom'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7QOv0IgJ5mg",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Lagos_Island_skyline.jpg"
  },
  {
    name: 'Amapiano',
    descriptionFr: "House sud-africaine 2012+ avec log drums caractéristiques et percussions jazzy. Né townships de Pretoria, dominant en Afrique.",
    descriptionEn: "2012+ South African house with characteristic log drums and jazzy percussion. Born Pretoria townships, dominant in Africa.",
    subgenres: ['Private School Amapiano', 'Sgija', 'Bacardi', 'Vocal Amapiano'],
    artists: ['Kabza De Small', 'DJ Maphorisa', 'Focalistic', 'Uncle Waffles'],
    origin: 'South Africa',
    relatedCountries: ['South Africa', 'Zimbabwe', 'Nigeria'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9u7XXOp0l5L",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Johannesburg_Skyline.jpg"
  },
  {
    name: 'Mbalax',
    descriptionFr: "Fusion sénégalaise années 70: sabar traditionnel + influences afro-cubaines. Youssou N'Dour ambassadeur mondial, percussions complexes.",
    descriptionEn: "70s Senegalese fusion: traditional sabar + Afro-Cuban influences. Youssou N'Dour global ambassador, complex percussion.",
    subgenres: ['Sabar moderne', 'Mbalax-hip-hop'],
    artists: ["Youssou N'Dour", 'Orchestra Baobab', 'Baaba Maal'],
    origin: 'Senegal',
    relatedCountries: ['Senegal', 'Gambia', 'Mali'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Dakar_Skyline.jpg"
  },
  {
    name: 'Highlife',
    descriptionFr: "Originaire Ghana/Nigeria années 20s: guitares jazzy, cuivres, groove africain. Influence majeure sur afrobeat et afrobeats.",
    descriptionEn: "From Ghana/Nigeria 20s: jazzy guitars, horns, African groove. Major influence on afrobeat and afrobeats.",
    subgenres: ['Palmwine Highlife','Dance Band Highlife', 'Guitar Band Highlife'],
    artists: ['E.T. Mensah','Osibisa', 'King Sunny Adé'],
    origin: 'Ghana',
    relatedCountries: ['Ghana', 'Nigeria'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXzDsC3jppjE",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Osibisa.jpg"
  },
  {
    name: 'Bongo Flava',
    descriptionFr: "Genre tanzanien 90s+ mêlant hip-hop, R&B, influences swahilies. Diamond Platnumz star, paroles swahili/anglais.",
    descriptionEn: "90s+ Tanzanian genre mixing hip-hop, R&B, Swahili influences. Diamond Platnumz star, Swahili/English lyrics.",
    subgenres: ['Afro-fusion','Rap Tanzanien','Swahili Pop'],
    artists: ['Diamond Platnumz','Ali Kiba','Harmonize'],
    origin: 'Tanzania',
    relatedCountries: ['Tanzania', 'Kenya'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWXbLOeOIhbc5",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Diamond_Platnumz.jpg"
  },
  {
    name: 'Ndombolo',
    descriptionFr: "Musique dansante RDC, héritière du soukous congolais. Rythme rapide, chorégraphies suggestives, Koffi Olomidé roi.",
    descriptionEn: "DRC dance music, heir of Congolese soukous. Fast rhythm, suggestive choreography, Koffi Olomidé king.",
    subgenres: ['Ndombolo Rapide','Ndombolo Lent', 'Rumba Ndombolo'],
    artists: ['Koffi Olomidé','Werrason', 'Fally Ipupa'],
    origin: 'DR Congo',
    relatedCountries: ['DR Congo', 'Republic of the Congo'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWUjqUjZBdjJ6",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Koffi_Olomide.jpg"
  },
  {
    name: 'Coupé-Décalé',
    descriptionFr: "Né Côte d'Ivoire, popularisé Paris début 2000s. Ambiance festive, percussions électroniques, danse extravagante.",
    descriptionEn: "Born Côte d'Ivoire, popularized Paris early 2000s. Party vibe, electronic percussion, extravagant dance.",
    subgenres: ['Coupé Décalé Classique','New Coupé Décalé'],
    artists: ['DJ Arafat','Debordo Leekunfa', 'Serge Beynaud'],
    origin: 'Ivory Coast',
    relatedCountries: ['Ivory Coast', 'France'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX2VYjzZZsF3C",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/DJ_Arafat.jpg"
  },

  // ═══════════════════════════════════════════════════════════
  // 🌎 GENRES LATINO-AMÉRICAINS
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Salsa',
    descriptionFr: "Genre phare Caraïbes années 60-70: fusion son cubain + rythmes portoricains. New York melting pot, Celia Cruz reine.",
    descriptionEn: "60s-70s key Caribbean genre: Cuban son + Puerto Rican rhythms fusion. New York melting pot, Celia Cruz queen.",
    subgenres: ['Salsa dura','Salsa romantica', 'Salsa Choke', 'Timba'],
    artists: ['Celia Cruz','Rubén Blades','Marc Anthony', 'Héctor Lavoe'],
    origin: 'Cuba',
    relatedCountries: ['Cuba', 'Puerto Rico', 'United States'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7ZUug1ANKRP",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Salsa_band.jpg"
  },
  {
    name: 'Reggaeton',
    descriptionFr: "Urbain latino né Puerto Rico/Panama 90s: dembow jamaïcain + rap chanté espagnol. Daddy Yankee pionnier, Bad Bunny roi actuel.",
    descriptionEn: "90s Puerto Rico/Panama urban Latin: Jamaican dembow + Spanish sung rap. Daddy Yankee pioneer, Bad Bunny current king.",
    subgenres: ['Latin Trap', 'Perreo', 'Reggaeton Romántico'],
    artists: ['Daddy Yankee', 'Bad Bunny', 'J Balvin'],
    origin: 'Puerto Rico',
    relatedCountries: ['Puerto Rico', 'Panama', 'Colombia'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXaXB8fQg7xif",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Puerto_Rico_Urban.jpg"
  },
  
