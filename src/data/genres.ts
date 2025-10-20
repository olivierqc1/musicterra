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
    spotify: "https://spotify.link/V5HHX2uWxXb"
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
    spotify: "https://spotify.link/SGbYezRFzXb"
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
    subgenres: ['Delta Blues','Chicago Blues','Electric Blues','Piedmont','Country Blues','Piano Blues'],
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
    spotify: "https://spotify.link/evys4qPowXb"
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
  {
    name: 'Trap Latino',
    descriptionFr: "Trap en espagnol 2015+: fusion reggaeton + trap américain. Bad Bunny et Anuel AA pionniers, production sombre, autotune.",
    descriptionEn: "2015+ Spanish trap: reggaeton + American trap fusion. Bad Bunny and Anuel AA pioneers, dark production, autotune.",
    subgenres: ['Latin Trap', 'Trap Reggaeton'],
    artists: ['Bad Bunny', 'Anuel AA', 'Ozuna'],
    origin: 'Puerto Rico',
    relatedCountries: ['Puerto Rico', 'Colombia', 'Argentina'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX48TTZL62Yht",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/San_Juan_Puerto_Rico.jpg"
  },
  {
    name: 'Samba',
    descriptionFr: "Rythme brésilien emblématique, racines afro-brésiliennes. Carnaval Rio, batucada, structure complexe de percussions.",
    descriptionEn: "Iconic Brazilian rhythm, Afro-Brazilian roots. Rio carnival, batucada, complex percussion structure.",
    subgenres: ['Samba de roda', 'Samba enredo', 'Pagode', 'Samba-Rock'],
    artists: ['Cartola', 'Zeca Pagodinho', 'Martinho da Vila'],
    origin: 'Brazil',
    relatedCountries: ['Brazil'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7UE7qrnkvsf",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Copacabana_Beach_Rio_de_Janeiro.jpg"
  },
  {
    name: 'Bossa Nova',
    descriptionFr: "Fusion sophistiquée jazz-samba fin 50s-60s. João Gilberto voix intimiste, Tom Jobim compositeur, révolution musicale brésilienne.",
    descriptionEn: "Late 50s-60s sophisticated jazz-samba fusion. João Gilberto intimate voice, Tom Jobim composer, Brazilian musical revolution.",
    subgenres: ['Bossa Nova Moderne'],
    artists: ['João Gilberto', 'Tom Jobim', 'Astrud Gilberto'],
    origin: 'Brazil',
    relatedCountries: ['Brazil'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX5oZZZXLjFGH",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vinyl_record.png"
  },
  {
    name: 'Tropicália',
    descriptionFr: "Mouvement brésilien psychédélique fin 60s: rock + bossa + traditions régionales. Caetano et Gil révolutionnaires, répression dictature.",
    descriptionEn: "Late 60s Brazilian psychedelic movement: rock + bossa + regional traditions. Caetano and Gil revolutionary, dictatorship repression.",
    subgenres: ['Tropicália moderna', 'Manguebeat'],
    artists: ['Caetano Veloso', 'Gilberto Gil', 'Os Mutantes'],
    origin: 'Brazil',
    relatedCountries: ['Brazil'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7UE7qrnkvsf",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Copacabana_Beach_Rio_de_Janeiro.jpg"
  },
  {
    name: 'Funk Carioca',
    descriptionFr: "Funk brésilien favelas Rio 80s-90s: rythmes Miami bass rapides, lyrics crus. MC Créu pionnier, Anitta mainstream.",
    descriptionEn: "80s-90s Rio favelas Brazilian funk: fast Miami bass rhythms, raw lyrics. MC Créu pioneer, Anitta mainstream.",
    subgenres: ['Funk Ostentação', 'Funk Melody', 'Proibidão', 'Funk 150 BPM'],
    artists: ['MC Créu', 'Anitta', 'Ludmilla', 'MC Kevin o Chris'],
    origin: 'Brazil',
    relatedCountries: ['Brazil'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rio_de_Janeiro_Favela.jpg"
  },
  {
    name: 'Cumbia',
    descriptionFr: "Originaire Colombie, répandu Amérique Latine. Rythmes afro-indigènes, accordéon, variations régionales infinies.",
    descriptionEn: "Originating Colombia, spread across Latin America. Afro-indigenous rhythms, accordion, infinite regional variations.",
    subgenres: ['Cumbia villera','Cumbia andina','Cumbia sonidera', 'Cumbia Mexicana', 'Chicha'],
    artists: ['Los Ángeles Azules','Totó la Momposina', 'Selena'],
    origin: 'Colombia',
    relatedCountries: ['Colombia', 'Mexico', 'Argentina', 'Peru'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWU4xkXueiKGW",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Cumbia_Colombia.jpg"
  },
  {
    name: 'Tango',
    descriptionFr: "Danse argentine emblématique née Buenos Aires 1880s: passion, nostalgie, bandoneón. Piazzolla révolutionne avec nuevo tango.",
    descriptionEn: "Iconic Argentine dance born Buenos Aires 1880s: passion, nostalgia, bandoneón. Piazzolla revolutionizes with nuevo tango.",
    subgenres: ['Tango nuevo','Tango tradicional', 'Tango électronique'],
    artists: ['Carlos Gardel','Astor Piazzolla', 'Gotan Project'],
    origin: 'Argentina',
    relatedCountries: ['Argentina', 'Uruguay'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9u7XXOp0l5L",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Street_tango_Buenos_Aires.jpg"
  },

  // ═══════════════════════════════════════════════════════════
  // 🎌 GENRES ASIATIQUES
  // ═══════════════════════════════════════════════════════════
  {
    name: 'K-Pop',
    descriptionFr: "Pop sud-coréenne 90s+: chorégraphies synchronisées, production léchée, training system. BTS et BLACKPINK phénomènes globaux.",
    descriptionEn: "90s+ South Korean pop: synchronized choreography, polished production, training system. BTS and BLACKPINK global phenomena.",
    subgenres: ['K-Hip Hop', 'K-R&B', 'K-Indie'],
    artists: ['BTS', 'BLACKPINK', 'TWICE', 'NewJeans'],
    origin: 'South Korea',
    relatedCountries: ['South Korea'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9tPFwDMOaN1",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/DJ_turntable.jpg"
  },
  {
    name: 'J-Pop',
    descriptionFr: "Pop japonaise moderne: refrains accrocheurs, idol culture, production variée. Hikaru Utada icône, AKB48 phénomène commercial.",
    descriptionEn: "Modern Japanese pop: catchy hooks, idol culture, varied production. Hikaru Utada icon, AKB48 commercial phenomenon.",
    subgenres: ['Idol Pop', 'Visual Kei', 'J-Rock'],
    artists: ['Hikaru Utada', 'Perfume', 'YOASOBI'],
    origin: 'Japan',
    relatedCountries: ['Japan'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4VFhE8rDJI6",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rock_concert.jpg"
  },
  {
    name: 'City Pop',
    descriptionFr: "Pop japonaise sophistiquée 70s-80s: fusion jazz-funk-disco, production AOR. Tatsuro Yamashita légende, redécouvert Internet 2010s.",
    descriptionEn: "70s-80s sophisticated Japanese pop: jazz-funk-disco fusion, AOR production. Tatsuro Yamashita legend, Internet rediscovered 2010s.",
    subgenres: ['AOR Japonais', 'Shibuya-kei'],
    artists: ['Tatsuro Yamashita', 'Mariya Takeuchi', 'Casiopea'],
    origin: 'Japan',
    relatedCountries: ['Japan'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Tokyo_Tower_and_around_Skyscrapers.jpg"
  },
  {
    name: 'Bollywood',
    descriptionFr: "Musique de films hindi: orchestration somptueuse, dance, romance. AR Rahman compositeur star, influence mondiale grandissante.",
    descriptionEn: "Hindi film music: sumptuous orchestration, dance, romance. AR Rahman star composer, growing global influence.",
    subgenres: ['Filmi', 'Indi-pop'],
    artists: ['AR Rahman', 'Arijit Singh', 'Lata Mangeshkar'],
    origin: 'India',
    relatedCountries: ['India', 'Pakistan'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Film_reel_icon.png"
  },

  // ═══════════════════════════════════════════════════════════
  // 🎹 GENRES EUROPÉENS
  // ═══════════════════════════════════════════════════════════
  {
    name: 'Flamenco',
    descriptionFr: "Art andalou complexe: chant (cante), guitare, palmas, danse. Duende concept mystique, Paco de Lucía virtuose, Rosalía modernise.",
    descriptionEn: "Complex Andalusian art: vocals (cante), guitar, palmas, dance. Duende mystic concept, Paco de Lucía virtuoso, Rosalía modernizes.",
    subgenres: ['Flamenco Nuevo', 'Flamenco Pop', 'Flamenco Fusion'],
    artists: ['Paco de Lucía', 'Camarón de la Isla', 'Rosalía'],
    origin: 'Spain',
    relatedCountries: ['Spain'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX5oZZZXLjFGH",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Flamenco_guitar.jpg"
  },
  {
    name: 'Fado',
    descriptionFr: "Chant mélancolique portugais avec guitare portugaise. Saudade sentiment unique, Amália Rodrigues légende, Mariza moderne.",
    descriptionEn: "Melancholic Portuguese singing with Portuguese guitar. Saudade unique feeling, Amália Rodrigues legend, Mariza modern.",
    subgenres: ['Fado de Coimbra', 'Fado de Lisboa'],
    artists: ['Amália Rodrigues', 'Mariza', 'Carminho'],
    origin: 'Portugal',
    relatedCountries: ['Portugal'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Portuguese_guitar.jpg"
  },
  {
    name: 'Chanson',
    descriptionFr: "Tradition française texte/voix au centre, héritage poétique. Piaf, Brel, Brassens poètes-chanteurs, Barbara intime.",
    descriptionEn: "French tradition lyric-centered, poetic heritage. Piaf, Brel, Brassens poet-singers, Barbara intimate.",
    subgenres: ['Chanson Réaliste', 'Nouvelle Chanson'],
    artists: ['Édith Piaf', 'Jacques Brel', 'Georges Brassens', 'Barbara'],
    origin: 'France',
    relatedCountries: ['France', 'Belgium'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DWVpjAJGB70vU",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microphone_classic.jpg"
  },
  {
    name: 'French Touch',
    descriptionFr: "House française 90s-00s: filtres caractéristiques, samples disco. Daft Punk icônes mondiales, Justice, Cassius. Influence massive EDM.",
    descriptionEn: "90s-00s French house: characteristic filters, disco samples. Daft Punk global icons, Justice, Cassius. Massive EDM influence.",
    subgenres: ['Filter House', 'French Electro'],
    artists: ['Daft Punk', 'Justice', 'Cassius', 'Mr. Oizo'],
    origin: 'France',
    relatedCountries: ['France'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Synthesizer2.jpg"
  },
  {
    name: 'Techno',
    descriptionFr: "Techno berlinoise 90s+: minimale, industrielle, hypnotique. Berghain temple, Ben Klock prêtre, culture underground extrême.",
    descriptionEn: "90s+ Berlin techno: minimal, industrial, hypnotic. Berghain temple, Ben Klock priest, extreme underground culture.",
    subgenres: ['Minimal Techno', 'Industrial Techno', 'Dub Techno'],
    artists: ['Ben Klock', 'Paul Kalkbrenner', 'Marcel Dettmann'],
    origin: 'Germany',
    relatedCountries: ['Germany', 'Netherlands'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX6J5NfMJS675",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Berlin_Television_Tower.jpg"
  },
  {
    name: 'Grime',
    descriptionFr: "Rap UK ~140 BPM, MCs incisifs, basses lourdes. Né Londres Est 2000s, Skepta, Wiley pionniers. Culture pirate radio et clash.",
    descriptionEn: "UK rap ~140 BPM, sharp MCs, heavy bass. Born East London 2000s, Skepta, Wiley pioneers. Pirate radio and clash culture.",
    subgenres: ['Road Rap', 'UK Drill'],
    artists: ['Skepta', 'Wiley', 'Stormzy', 'Dizzee Rascal'],
    origin: 'United Kingdom',
    relatedCountries: ['United Kingdom'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX3mUffc9vHUZ",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Stormzy_Glastonbury_2019.jpg"
  },
  {
    name: 'UK Drill',
    descriptionFr: "Dérivé drill chicagoan mais accent britannique 2012+. Rythmes plus sombres, slide 808s. Pop Smoke connecte NY/London.",
    descriptionEn: "Derived from Chicago drill but British accent 2012+. Darker rhythms, slide 808s. Pop Smoke connects NY/London.",
    subgenres: ['Brooklyn Drill', 'Irish Drill', 'French Drill'],
    artists: ['Headie One', 'Digga D', 'Central Cee', 'Pop Smoke'],
    origin: 'United Kingdom',
    relatedCountries: ['United Kingdom', 'United States', 'France'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Skyline_%28cropped%29.jpg"
  },
  {
    name: 'aarhus indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'aberdeen indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'abstract',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'abstract beats',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'abstract hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'abstract idm',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'abstractro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'acid jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'acid rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'acid techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'acidcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'acoustic blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'acoustic punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'acoustic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'action rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'adelaide indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'african metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'african reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'african rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'afrikaans folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'afro dancehall',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'afro-funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'afrobeat',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'afrobeat brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'afrobeat fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'afroswing',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ainu folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alabama indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alabama metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alabama rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alaska indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'albanian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'albanian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'albany ny indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alberta country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alberta hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'album rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'albuquerque indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'algerian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alte',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative ccm',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative dance',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative pop rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative r&b',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'alternative roots rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'amapiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ambient black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ambient dub techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ambient folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ambient fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ambient techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'american folk revival',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'american grindcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'american melodeath',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'american metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'american post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'american shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'anadolu rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'anarcho-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'anime rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'anime score',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ann arbor indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'anthem emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'anti-folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'antilliaanse folklore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'antilliaanse rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'appalachian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'appenzeller folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arab alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arab folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arab metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arab trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arabic hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arabic jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine heavy metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'argentine rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arizona punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arkansas country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arkansas hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arkansas indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'arkansas metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'armenian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'armenian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'art punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'art rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'asbury park indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'asheville indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'asian american hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'athens indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atl hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atl trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atlanta indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atlanta metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atlanta punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atmospheric black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atmospheric doom',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atmospheric post-metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atmospheric post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'atmospheric sludge',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'auckland indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'aussie drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'aussie emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austin americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austin hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austin rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austindie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian alternative pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian garage punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian reggae fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian thrash metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'australian underground hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austrian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austrian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austrian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austrian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austrian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austrian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austrian stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'austrian techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'autonomous black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'avant-garde black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'avant-garde jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'avant-garde metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'avant-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'azeri rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'background jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bahamian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'baja indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'balfolk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'balkan folk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'balkan hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'balkan trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'baltic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'baltic folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'baltic post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'baltimore hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'baltimore indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'baluchi folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bangalore indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bangladeshi hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bangladeshi indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bangladeshi rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'barockinterpreten',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'basel indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'basque folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bass trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bath indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'baton rouge indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'baton rouge rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'battle rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bay area hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bay area indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bayerischer rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bc underground hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bebop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belarusian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belarusian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belarusian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belarusian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belarusian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belfast indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belfast metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belgian techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'belo horizonte indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bengali folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bergamo indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bergen indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'berlin minimal techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bern indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'birmingham grime',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'birmingham hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'birmingham indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'birmingham metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bisaya indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bisaya rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bisrock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: "black 'n' roll",
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'black comedy',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'black death',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'black metal argentino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'black noise',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'black punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'black sludge',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'black speed metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'black thrash',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blackened crust',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blackened deathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blackened hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blackgaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blaskapelle',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bleep techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bluegrass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bluegrass fiddle',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bluegrass gospel',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blues band',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blues latinoamericano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blues mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blues rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'blues-rock guitar',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bogor indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bohol indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bolivian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bolivian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bongo flava',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'boom bap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'boom bap brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bosnian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bossa nova',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bossa nova cover',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bossa nova jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'boston folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'boston hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'boston hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'boston indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'boston metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'boston punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'boston rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brasilia indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian doom metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian grindcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian groove metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian heavy metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian lo-fi rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian progressive metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian punk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian surf rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brazilian thrash metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'breakcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brega funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'breton folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brighton indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brisbane indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bristol indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brit funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british grindcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british math rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'british power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'broadway',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brockton hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'broken beat',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bronx hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brooklyn drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brooklyn indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brostep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brutal death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'brutal deathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bubblegrunge',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'buffalo hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'buffalo ny indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'buffalo ny metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bulgarian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bulgarian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bulgarian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bulgarian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bulgarian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'bury st edmunds indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'calgary indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cali rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'california hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cambodian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cambridgeshire indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cameroonian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian contemporary country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian garage rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian indigenous hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian old school hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian psychedelic',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian psychedelic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canadian underground hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'canberra indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cancion infantil latinoamericana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cante flamenco',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cape breton folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cape breton indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cape town indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cape verdean folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'caracas indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cardiff indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'caribbean metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cascadian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'catalan folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'caucasian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cavernous death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cdmx indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'celtic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'celtic punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'celtic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'central american metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'central asian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'central asian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chamber folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'channel islands indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chanson',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chanson paillarde',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chanson quebecois',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chanson virale',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chaotic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chaotic hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'charlotte nc indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'charlottesville indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'charred death',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chattanooga indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chennai indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago bop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicago soul',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicano punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicano rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chicha',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chihuahua indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: "children's folk",
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chilean black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chilean hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chilean indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chilean metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chilean rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chillhop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chinese punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'chip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christchurch indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian afrobeat',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian deathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian hard rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian symphonic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian thrash metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christian trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'christlicher rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cincinnati indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cincinnati rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cinematic dubstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cinematic post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'circassian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'city pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic afrobeat',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic australian country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic bollywood',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic canadian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic city pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic country pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic danish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic dubstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic finnish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic garage rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic greek pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic greek rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic hungarian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic indonesian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic italian folk pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic j-pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic j-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic japanese jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic k-pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic nz country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic progressive house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic psychedelic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic russian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classic uk pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'classical jazz fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cleveland indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cleveland metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cologne hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cologne indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'colombian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'colombian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'colombian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'colombian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'colombian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'colombian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'colorado hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'columbus ohio indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'comedy rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'comedy rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'comic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'concepcion indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'connecticut hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'connecticut indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'conscious hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'contemporary country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'contemporary folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'contemporary jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'contemporary post-bop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'contemporary vocal jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cool jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cork indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cornish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cornwall indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'corsican folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cosmic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cosmic post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country boogie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country dawn',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country gospel',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country quebecois',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country road',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'country rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'coupe-decale',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'coventry indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cowboy western',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cowpunk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'crack rock steady',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'croatian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'croatian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'croatian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'croatian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'croatian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'crossover prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'crossover thrash',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'crust punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cryptic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cuban alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia andina mexicana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia boliviana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia chilena',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia colombiana regia',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia del sureste',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia ecuatoriana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia lagunera',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia paraguaya',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia peruana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia ranchera',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia salvadorena',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia santafesina',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia sonidera',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia sonorense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia surena',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia uruguaya',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cumbia villera',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cyber metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cybergrind',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cyberpunk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'cypriot metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'czech folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'czech hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'czech indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'czech metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'czech punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'czech rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'czsk black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'czsk hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'czsk reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dalarna indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dallas indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dance rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dance-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dancehall',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dancehall colombiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish pop rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danish techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'danspunk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark minimal techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark progressive house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dark trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dayton indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dc hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dc indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: "death 'n' roll",
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'death doom',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'death industrial',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deathgrass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deathgrind',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deathrash',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deathrock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deathstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep active rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep breakcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep christian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep classic garage rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep contemporary country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep delta blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep downtempo fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep dubstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep east coast hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep folk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep free jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep freestyle',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep funk house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep funk ostentacao',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep g funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep german hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep german indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep german punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep gothic post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep happy hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep hardcore punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep hardtechno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep indie singer-songwriter',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep jazz fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep latin alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep latin jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep melodic death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep melodic hard rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep melodic metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep minimal techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep neofolk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep new americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep orgcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep pop emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep power-pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep progressive house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep progressive trance',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep punk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep ragga',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep smooth jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep smooth r&b',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep soft rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep southern trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep space rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep surf music',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep swedish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep symphonic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep tropical house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep underground hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'deep vocal jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'delaware indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'delta blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'demoscene',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'denton tx indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'denver indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'denver metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'denver rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'depressive black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'derby indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'derry indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'desert blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'desi hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'desi trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'destroy techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'detroit hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'detroit indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'detroit rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'detroit techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'detroit trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'detskie rasskazy',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'devon indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dfw rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'digital hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dinner jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dirty south rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dirty texas rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'disney svenska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dissonant death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dixieland',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'diy emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'diy pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'djent',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dmv rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dominican indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'doom metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'doomcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dortmund indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'downtempo fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dresden indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drill and bass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drill espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drill francais',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drill italiana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drill tuga',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drone folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drone metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drone rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'drumfunk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dub',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dub brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dub metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dub poetry',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dub product',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dub punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dub reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dub techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dublin indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dubstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dubstep product',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dubsteppe',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'duluth indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dundee indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dunedin indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dusseldorf indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch punk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch rap pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'dutch underground hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'early american folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'early french punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'early reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'early us punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'east anglia indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'east coast hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'east coast reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'easycore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'eau claire indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ecm-style jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ectofolk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ecuadorian alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ecuadorian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'edinburgh indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'edinburgh metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'edmonton indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'egyptian alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'egyptian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'el paso indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electric bass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electric blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electro dub',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electro jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electro swing',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electronic djent',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electronic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electronic trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electronicore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'electropowerpop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'elektropunk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'emo mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'emo punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'emo rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'emo rap italiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'emocore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'emoviolence',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'english indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'epic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'epic doom',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'epicore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'essex indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'estonian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'estonian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'estonian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'estonian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'estonian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'estonian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ethio-jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'eugene indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'euroska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'euskal indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'euskal metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'euskal musica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'euskal rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental dub',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental dubstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'experimental techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'fado',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'fado antigo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'fado de coimbra',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'fado instrumental',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'faroese folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'faroese indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'faroese jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'faroese rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'fast melodic punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'filmi',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'filter house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finlandssvenska musik',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish doom metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish hard rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish heavy metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish melodeath',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish progressive metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish progressive rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish psychedelic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish tango',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'finnish trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'firenze indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'flamenco',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'flamenco fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'flamenco guitar',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'flamenco urbano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'flemish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'flint hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'florida death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'florida hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'florida rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'flute rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folclore salteno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk cantabria',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk metal latinoamericano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk rock italiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk siciliana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folk-pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore argentino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore boliviano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore chileno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore cuyano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore ecuatoriano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore nuevo argentino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore panameno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore paraguayo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore peruano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore quebecois',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore surero',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore uruguayo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore venezolano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folklore veracruzano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folkmusik',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'folktronica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'fort wayne indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'fort worth indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'frankfurt indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'frauenrap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'freak folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'free folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'free improvisation',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'free jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'freestyle',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'fremantle indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french dub',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french experimental rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french folk pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french garage rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french indietronica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french psychedelic',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'french techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'frenchcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funeral doom',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk 150 bpm',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk bh',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk capixaba',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk carioca',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk consciente',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk das antigas',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk evangelico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk melody',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk ostentacao',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk paulista',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funky breaks',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funky house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'funky tech house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'future funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'future garage',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'future rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'g funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gaian doom',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gainesville indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'galician folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'galician indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'galician jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'galician rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'galway indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gamecore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gaming dubstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gangster rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'garage house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'garage pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'garage psych',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'garage punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'garage punk blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'garage rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'garage rock mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'garage rock revival',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'garifuna folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'geek folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'geek rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'georgian alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'georgian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german alternative rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german boom bap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german cloud rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german dark minimal techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german grindcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german hard rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german heavy metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german jazz rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german melodeath',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german pagan metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german pop rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german punk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german street punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german thrash metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'german viral rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ghanaian alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ghanaian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ghent indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'glam metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'glam punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'glam rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'glasgow indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'glitchcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'golden age hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'goregrind',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gospel blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gospel drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gospel rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gospel reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothenburg hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothenburg indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothenburg metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothic alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothic americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothic doom',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothic post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gothic symphonic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'granada indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grand rapids indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'graz indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek psychedelic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek swing',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'greek underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grim death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grime',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grime brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grimewave',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grindcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grisly death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'groove metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grunge',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grunge argentina',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grunge brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grunge pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'grunge revival',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'guadalajara indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'guam indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'guatemalan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'guatemalan metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gulf hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gymcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gypsy fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gypsy jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'gypsy punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'halifax indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hamburg hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hamburg indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hamilton on indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hampton roads indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'happy hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hard alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hard bop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hard minimal techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hard rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hard rock brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hard rock mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hard stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hard techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hardcore breaks',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hardcore hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hardcore punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hardcore punk espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hardcore techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'harlem hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'harmonica blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'harmonica jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hawaiian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hawaiian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hawaiian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'heartland rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'heavy alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'heavy gothic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'highlife',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'himalayan folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hindi hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hindi indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hip hop boliviano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hip hop cubano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hip hop galsen',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hip hop quebecois',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hip hop tuga',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hip-hop experimental',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hokkaido indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hong kong hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hong kong indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hong kong rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'honky tonk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'honky-tonk piano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'horror punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'horror punk brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'horrorcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'houston indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'houston rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hull indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hungarian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hungarian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hungarian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hungarian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hungarian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hungarian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hungarian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hungarian techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'hungarian underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'icelandic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'icelandic folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'icelandic hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'icelandic indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'icelandic jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'icelandic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'icelandic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'idaho hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'idaho indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'idol rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian instrumental rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian lo-fi',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indian underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indiana hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indiana indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie anthem-folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie arequipeno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie boliviano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie cafe pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie campechano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie canario',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie cantabria',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie catracho',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie cordoba',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie cristao',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie curitibano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie dream pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie electronica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie electropop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie emo rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie extremena',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie folk argentino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie folk italiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie fuzzpop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie game soundtrack',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie garage rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie hidalguense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie hidrocalido',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie liguria',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie michoacano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie napoletano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie nica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie nordeste argentino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie paraense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie platense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie poblano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie pop rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie pop rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie poptimism',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie psych-pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie psychedelic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie quebecois',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie queretano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie r&b',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie rock colombiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie rock italiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie rock mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie rock peruano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie rockism',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie salvadoreno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie siciliano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie singer-songwriter',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie soul',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie sudcaliforniano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie surf',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie tabasqueno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie tico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie triste',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie trujillano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie tucumano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie valenciana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie veneto',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indie viet',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indiecoustica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indietronica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian city pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian deathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian emo rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian folk pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indonesian ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indorock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'industrial black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'industrial hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'industrial hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'industrial metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'industrial rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'industrial techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'indy indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental bluegrass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental djent',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental grime',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental math rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental progressive metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'instrumental surf',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'iowa hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'iowa indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'iranian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish gaelic folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'irish underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'isle of man indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'isle of wight indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'israeli folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'israeli hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'israeli indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'israeli jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'israeli metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'israeli punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'israeli rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'israeli techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'israeli trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian contemporary jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian doom metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian folk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian gothic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian heavy metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian jazz fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian modern prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian pop rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian post punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian progressive metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian progressive rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'italian underground hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-core',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-pop boy group',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-pop girl group',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-poprock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'j-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jacksonville indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jangle rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese alternative pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese boom bap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese chill rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese chillhop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese garage rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese girl punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese heavy metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese jazz fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese jazztronica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese math rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese melodic punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese old school hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese pop rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese progressive house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese psychedelic',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese psychedelic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese punk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'japanese vocal jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz accordion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz boom bap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz brass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz caraibes',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz chileno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz clarinet',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz colombiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz composition',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz cubano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz dominicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz double bass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz drums',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz flute',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz guitar',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz harp',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz orchestra',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz organ',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz piano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz puertorriqueno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz quartet',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz saxophone',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz tico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz trio',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz trombone',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz trumpet',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz tuba',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz venezolano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz vibraphone',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazz violin',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazzcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazztronica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jazzy dnb',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jewish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'jump blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'k-indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'k-pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'k-pop boy group',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'k-pop girl group',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'k-rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'k-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kalmar indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kannada hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kansai indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kansas city hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kansas hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kansas indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kawaii metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kazakh hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kazakh indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kc indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kelowna bc indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kent indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kentucky hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kentucky indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kentucky metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kentucky mountain folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kentucky punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kentucky roots',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kenyan alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kenyan hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kids hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kindie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kingston on indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kiwi rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'knoxville indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kolkata indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean city pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean old school hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'korean underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kosovan folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'krautrock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kurdish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kurdish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kurdish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kyrgyz hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'kyushu indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'la indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lafayette indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lancashire indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lancaster pa indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin afrobeat',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin surf rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latin viral rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latincore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latinx alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latvian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latvian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latvian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latvian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'latvian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lawrence ks indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lebanese indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'leeds indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'leicester indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'leipzig indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'leon gto indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lexington ky indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lgbtq+ hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'limerick indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lincoln ne indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'liquid funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lithuanian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lithuanian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lithuanian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lithuanian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lithuanian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lithuanian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'little rock indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'liverpool indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi beats',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi chill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi cover',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi jazzhop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lo-fi vgm',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'london indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'london on indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'london rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'long island punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'louisiana blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'louisiana metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'louisville indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lovecraftian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lovers rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lowlands hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'lund indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'luxembourgian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'luxembourgian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'luxembourgian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'macedonian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'macedonian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'magyar alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'magyar trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'maine hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'maine indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mainland se asia metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malagasy folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malawian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malay rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malayalam hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malaysian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malaysian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malaysian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malaysian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malian blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'malmo indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'maltese metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'maltese pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'manchester hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'manchester indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'manitoba country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'manitoba indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'manso indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'marathi hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'maskandi',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'math pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'math rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'math rock latinoamericano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mathgrind',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mazandarani folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mbalax',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'medieval folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'medieval rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melbourne indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic deathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic doom',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic dubstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic groove metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic hard rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic progressive metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'melodic thrash',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'meme rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'memphis americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'memphis blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'memphis hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'memphis indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'merida indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal baiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal balear',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal catarinense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal cearense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal colombiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal cristao',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal ecuatoriano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal galego',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal gaucho',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal gotico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal guitar',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal mineiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal noir quebecois',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal nortista',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal paraguayo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal paranaense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal pernambucano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal piauiense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal salvadoreno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal tico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metal uruguayo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metalcore espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'metallic hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican classic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican rock-and-roll',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mexican thrash metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'miami hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'miami indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'miami metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'michigan folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'michigan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'middle east hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'midwest americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'midwest emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'milan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'military rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'milwaukee hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'milwaukee indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'minimal dub',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'minimal dubstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'minimal melodic techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'minimal techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'minneapolis indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'minneapolis metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'minneapolis punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'minnesota hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mississippi hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mississippi indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'missouri indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern alternative pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern blues rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern bollywood',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern country rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern folk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern free jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern hard rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern jazz piano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern jazz trio',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern power pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern progressive rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern psychedelic folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern salsa',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern ska punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern southern rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modern swing',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'modular techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mongolian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mongolian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'montana indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'montana metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'montana roots',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'monterrey indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'montreal indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'moravian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'morelos indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'mumbai indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'munich indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'murcia indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'musica cristiana guatemalteca',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'musica folk asturiana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'musica indigena latinoamericana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'musica piemonteisa',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'musica rapa nui',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'musica tropical guatemalteca',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'myanmar hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'myanmar indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'naija worship',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nantes indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nashville americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nashville hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nashville indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'native american hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neapolitan funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'necrogrind',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo classical metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo honky tonk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo soul-jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo-industrial rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo-progressive',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo-psychedelic',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo-rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo-trad doom metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo-trad metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo-trad prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo-traditional bluegrass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neo-traditional country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neofolk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neon pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neotango',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nepali indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nerdcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nerdcore brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'neurofunk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new brunswick indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new delhi indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new england americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new england emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new england metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new french touch',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new hampshire indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new jack smooth',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new jack swing',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new jersey hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new jersey indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new jersey punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new jersey rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new orleans americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new orleans blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new orleans funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new orleans indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new orleans jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new orleans rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new wave of glam metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new wave of speed metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new wave of thrash metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new york death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'new york drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'newcastle indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'newcastle nsw indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'newfoundland indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nice indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nigerian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nightcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nintendocore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nl folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'noise punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'noise rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'noisecore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nordic folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nordic folk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nordic post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nordnorsk rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'normal indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norman ok indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norrbotten indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norrlandsk hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'north carolina emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'north carolina hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'north carolina indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'north carolina metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'north carolina roots',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'north dakota indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'north east england indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'northamptonshire indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'northeast indian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'northeast indian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'northern irish indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'northern irish punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'northumbrian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'northwest china indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian contemporary jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian doom metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian folk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian pop rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian psychedelic',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian punk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'norwegian trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nottingham indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nouvelle chanson francaise',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'novo rock gaucho',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nu jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nu metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nu-cumbia',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nu-metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nuevo flamenco',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nuevo folklore argentino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nuevo folklore mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nuevo tango',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ny roots',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nyc metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nyc rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nz folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nz hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nz hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nz indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nz metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nz punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'nz reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oakland hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oakland indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oaxaca indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oc indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oc rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ohio hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ohio indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ok indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'okc indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'okinawan folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oklahoma country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'old school dancehall',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'old school hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'old school rap francais',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'old school thrash',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'old school uk hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oldschool deutschrap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'olympia wa indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'omaha indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ontario indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'opera metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'orebro indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'orgcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oriental metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'orkney and shetland folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'orlando indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'orquesta tropical',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oslo indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ostrock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'otacore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oth indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ottawa indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ottawa rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oulu indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oulu metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'outer hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'outlaw country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'oxford indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'p funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pagan black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pakistani folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pakistani hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pakistani indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pakistani rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'panamanian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'panamanian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'paraguayan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'paraguayan rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pei indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pennsylvania hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'perreo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'persian alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'persian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'persian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'perth indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'peruvian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'peruvian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'peruvian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'peruvian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'peruvian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'peruvian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'philly drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'philly indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'philly rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'phoenix indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'piano blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'piano rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pibroch',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'piedmont blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pinoy alternative rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pinoy hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pinoy indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pinoy metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pinoy pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pinoy reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pinoy rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pinoy trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pittsburgh indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pittsburgh metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pittsburgh rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pittsburgh rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pokemon',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish alternative rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish folk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish free jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish noise rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish thrash metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polish trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'political hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'polynesian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pontian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pop emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pop flamenco',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pop folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pop rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pop rap brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pop reggaeton',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pop rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pop rock brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pornogrind',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portland hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portland indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portland metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portland punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portsmouth indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'portuguese techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-disco',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-disco soul',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-doom metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-grunge',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-minimalism',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-punk argentina',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-punk brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-punk colombiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-punk mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-rock latinoamericano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-romantic era',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-screamo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'post-teen pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'power blues-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'power electronics',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'power noise',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'power pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'power thrash',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'power-pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'powerviolence',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'poznan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pre-war blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'prog metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'prog quebec',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive bluegrass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive breaks',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive deathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive doom',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive electro house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive groove metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive jazz fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive psytrance',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive sludge',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive technical death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive thrash',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive trance',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive trance house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'progressive uplifting trance',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'protest folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'proto-rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'proto-techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'protopunk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic blues-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic doom',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic folk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic jazz fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic soul',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic space rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psychedelic trance',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'psydub',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pub rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'puerto rican folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'puerto rican indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'puerto rican metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'puerto rican rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'puglia indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'pune indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punjabi folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punjabi hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: "punk 'n' roll",
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk chileno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk colombiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk ecuatoriano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk euskera',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk galego',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk melodico chileno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk rock italiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk rock mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk tico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk tuga',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punk urbano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'punta rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'quebec death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'quebec indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'quebec punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'queens hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'queer country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'queercore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'raga rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ragga jungle',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'raggatek',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ragtime',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rajasthani folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap abc paulista',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap alagoano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap algerien',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap angolano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap antillais',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap baiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap baixada fluminense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap belge',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap boricua',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap calme',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap capixaba',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap catarinense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap cearense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap chileno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap chretien',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap conciencia',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap conscient',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap criolo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap cristao',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap cristiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap df',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap dominicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap ecuatoriano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap euskera',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap feminino nacional',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap francais',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap galego',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap gaucho',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap guarulhense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap inde',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap ivoire',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap kreyol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap latina',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap liegeois',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap lyonnais',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap malien',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap maroc',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap maromba',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap marseille',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap metal espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap mineiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap mocambicana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap montrealais',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap nacional antigo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap napoletano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap nortista',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap paraense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap paraguayo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap paranaense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap pernambucano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap portuense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap potiguar',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap regio',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap romantico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap salvadoreno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap sardegna',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap sergipano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap tico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap toscana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap tuga underground',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap tunisien',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap underground argentino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap underground colombiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap underground espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap underground mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rap uruguayo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rave funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'raw black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'raw techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 're:techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reading indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rebel blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae cover',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae cristao',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae en espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae gaucho',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae maghreb',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae peruano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae tico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggae tuga',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggaeton',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggaeton chileno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggaeton colombiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggaeton cristiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggaeton flow',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'reggaeton mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rennes indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'retro metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rhode island indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rhode island rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rhythm and blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'riddim dubstep',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rio grande do sul indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rochester mn indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rochester ny indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock abc paulista',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock alagoano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock alternatif francais',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock alternativo brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock alternativo espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock andaluz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock baiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock brasiliense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock caipira',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock campineiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock catarinense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock catracho',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock cearense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock chapin',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock cristao fluminense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock cristiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock curitibano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock dominicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock drums',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock en asturiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock en espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock gaucho',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock goiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock gospel brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock gotico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock in opposition',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock independant francais',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock kapak',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock keyboard',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock mineiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock nacional',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock nacional brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock nacional feminino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock nica',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock noise',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock of gibraltar',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock paraense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock paraibano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock pernambucano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock piauiense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock potiguar',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock progresivo mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock progressif francais',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock quebecois',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock sergipano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock steady',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock sul-mato-grossense',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock tico',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock urbano mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock uruguayo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock viet',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rock-and-roll',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rockabilly en espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'roda de samba',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rogaland indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'romanian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'romanian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'romanian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'romanian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'romanian rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'romanian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'romanian trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rome indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'roots americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'roots reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'roots rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'roots worship',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rosario indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rotterdam indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rune folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian chanson',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian emo rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian folk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian folk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian gangster rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian grime',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian heavy metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian nu metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian old school hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian punk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian thrash metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'russian viral rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rva indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'rwandan hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sacramento hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sacramento indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sad rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salsa',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salsa choke',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salsa colombiana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salsa cristiana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salsa cubana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salsa international',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salsa peruana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salsa puertorriquena',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salsa venezolana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'salzburg indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samba',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samba de roda',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samba gospel',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samba moderno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samba paulista',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samba reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samba-enredo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samba-jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samba-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sambass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'samurai trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'san antonio indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'san antonio rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'san diego indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'san diego rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'san marcos tx indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'santa fe indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sardinia indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'saskatchewan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'saxony metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scam rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'schweizer rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sci-fi metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scorecore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish gaelic folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scottish techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'scream rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'screamocore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'seattle hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'seattle indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'seattle metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'semarang indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'serbian alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'serbian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'serbian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'serbian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'serbian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sevilla indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'shanghai indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sheffield indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'shoegaze',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'shoegaze brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'shoegaze chileno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'siberian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sinaloa indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'singaporean hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'singaporean indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'singaporean metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'singaporean punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sinhala indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sinhala rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ska argentino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ska catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ska chileno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ska espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ska jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ska mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ska punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ska revival',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'skansk musik',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'skate punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slam death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slamming deathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slash punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slavic folk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slavic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slc indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sleaze rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovak folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovak hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovak indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovak metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovak pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovak rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovenian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovenian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovenian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovenian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slovenian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'slowcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sludge metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sludgecore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'smooth jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'smooth saxophone',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'smooth soul',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'smutny rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'socal indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'socal pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'soft rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'somatik techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sonora indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'soul blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'soul jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south african alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south african country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south african hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south african jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south african metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south african modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south african punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south african rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south african trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south asian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south carolina hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south carolina indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south carolina metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'south dakota indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'southampton indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'southeast asian post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'southern americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'southern china indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'southern hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'southern metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'southern rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'southern soul blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'space rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish folk metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish folk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish modern rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish pop rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish post-rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish progressive rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish psychedelic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spanish techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'speed garage',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'speed metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'speedcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spiritual hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'spiritual jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'springfield mo indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'st louis rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'st petersburg fl indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'starogradska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'steampunk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'stl indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'stockholm indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'stoner metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'straight-ahead jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'street punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'street punk espanol',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'stride',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'string folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'stuttgart indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'suomi rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'suomirap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'surf music',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'surf punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'svensk indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'svensk progg',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swamp blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swamp rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swancore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swansea indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish dancehall',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish doom metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish emo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish folk pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish gangsta rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish garage rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish grindcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish hard rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish heavy metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish jazz orkester',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish melodeath',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish melodic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish pop rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish prog',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish progressive metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish psychedelic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish rock-and-roll',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish trap pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish tropical house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swedish underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swing',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swing italiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swing revival',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss indie folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'swiss trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'sydney indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'symphonic black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'symphonic death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'symphonic melodic death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'symphonic metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'symphonic power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'symphonic rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'synth funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'synth punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tagalog rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'taiwan campus folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'taiwan hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'taiwan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'taiwan metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'taiwan punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'taiwan rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'taiwanese indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tajik pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tamaulipas indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tamaulipas rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tamil hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tamil indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tampa indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tango',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tango cancion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tassie indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tatar folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'technical black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'technical brutal death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'technical death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'technical deathcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'technical grindcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'technical groove metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'technical melodic death metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'technical thrash',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'techno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'techno argentina',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'techno kayo',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'techno rave',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'telugu hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'telugu indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tempe indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tennessee hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tennessee metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'terrorcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'texas blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'texas country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'texas hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'texas latin rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'texas metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'texas pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'texas punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai folk pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai folk rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai indie rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai pop rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai psychedelic',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thai trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'therapy',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thrash core',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thrash metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'thrash-groove metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tijuana indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tolkien metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'toronto indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'toronto rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trad jazz catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional bluegrass',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional blues',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional british folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional english folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional scottish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional ska',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traditional southern folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trancecore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap argentino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap baiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap boricua',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap brasileiro',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap carioca',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap catala',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap chileno',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap colombiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap cristao',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap cristiano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap dominicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap funk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap italiana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap latino',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap metal italiana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap mexicano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap peruano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap pesado',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap queen',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap soul',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap triste',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap tuga',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trap venezolano',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'traprun',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trash rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'triangle indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trinidadian reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'trondheim indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tropical',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tropical house',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tropical tecladista',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tropicalia',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'truck-driving country',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tucson indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tulsa indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turbo folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turin indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkce drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkce kadin rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkce trap metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish alternative',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish alternative rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish modern jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkish trap pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'turkmen hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'tuvan folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'twee indie pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'twin cities indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uae indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk alternative hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk alternative pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk christian rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk contemporary jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk dancehall',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk diy punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk doom metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk drill',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk dub',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk funky',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk garage',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk metalcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk noise rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk pop punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk post-hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk post-metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk post-punk revival',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uk stoner rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ukrainian black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ukrainian folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ukrainian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ukrainian indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ukrainian metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ukrainian post-punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'ukrainian rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'umea hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'umea indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'unblack metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'underground boom bap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'underground hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'underground power pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'underground rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uppsala indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'upstate ny rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uptempo hardcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uruguayan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'us power metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'utah indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'utah metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uyghur folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'uzbek pop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vancouver indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vancouver metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vancouver punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vapor trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'varmland rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vegas indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'venezuelan hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'venezuelan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'venezuelan metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'venezuelan rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'veracruz indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vermont indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'victoria bc indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vienna indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'viet lo-fi',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vietnamese hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'viking black metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'viking folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'viking metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage chanson',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage country folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage finnish jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage french electronic',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage rockabilly',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage swing',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage tango',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vintage western',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'viral rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'viral trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'virgin islands reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'virginia hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'virginia indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'virginia metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'virginia punk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vlaamse rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'vocal jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'voidgrind',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'war metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'warrington indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'washington indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'weirdcore',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'wellington indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'welsh folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'welsh hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'welsh indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'welsh metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'welsh rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'west african jazz',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'west australian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'west coast rap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'west coast reggae',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'west coast trap',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'west virginia indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'west virginia metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'west yorkshire indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'west-vlaamse hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'western americana',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'western mass indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'western ny metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'western saharan folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'western swing',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'windsor on indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'winnipeg hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'wisconsin indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'wisconsin metal',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'worcester ma indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'world fusion',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'wrock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'wuhan indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'wyoming indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'wyoming roots',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'yacht rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'yiddish folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'york indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'yorkshire folk',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'yugoslav rock',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'zambian hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'zim hip hop',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'zimdancehall',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  {
    name: 'zurich indie',
    descriptionFr: "",
    descriptionEn: "",
    subgenres: [],
    artists: [],
    origin: '',
    relatedCountries: [],
    spotify: ""
  },
  //
  // ======================================================================
  // 📃 Additional subgenre definitions for genres detected from your CSV
  // The following objects provide English/French descriptions and example
  // artists for a handful of subgenres requested by the user.  Each object
  // includes a `parentGenre` field indicating the high‑level genre it falls
  // under.  Spotify links are left blank for you to fill in later.
  // ======================================================================
  {
    name: 'Piano Blues',
    descriptionFr: "Le piano blues parcourt toute l'histoire du blues : il embrasse aussi bien le ragtime et le barrelhouse que le boogie‑woogie, les styles jazz de la côte Ouest et les rythmes plus rock du blues de Chicago.",
    descriptionEn: "Piano Blues runs through the entire history of the music itself, embracing everything from ragtime, barrelhouse, boogie‑woogie and smooth West Coast jazz stylings to the hard‑rocking rhythms of Chicago blues.",
    subgenres: [],
    artists: ['Ray Charles','Memphis Slim','Champion Jack Dupree','Fats Domino'],
    origin: 'United States',
    relatedCountries: ['United States'],
    parentGenre: 'Blues',
    spotify: ''
  },
  {
    name: 'Australian Classical Piano',
    descriptionFr: "La musique pour piano classique australien est un genre qui mélange les traditions de la musique classique et des éléments contemporains. Elle se distingue par des mélodies élaborées, des harmonies complexes et un jeu pianistique virtuose. De nombreux compositeurs et interprètes australiens y apportent une profondeur émotionnelle capable d'évoquer une large palette de sentiments.",
    descriptionEn: "Australian classical piano music is a genre that combines traditional classical music with contemporary elements. It is characterized by its use of intricate melodies, complex harmonies and virtuosic piano playing. In recent years it has gained popularity thanks to talented Australian composers and performers and is known for its emotional depth and ability to evoke a wide range of feelings.",
    subgenres: [],
    artists: ['Rebecca Chambers','Piers Lane','Geoffrey Tozer','Leslie Howard'],
    origin: 'Australia',
    relatedCountries: ['Australia'],
    parentGenre: 'Classical',
    spotify: ''
  },
  {
    name: 'Histoire Pour Enfants',
    descriptionFr: "Histoire pour enfants est un genre musical français spécialement conçu pour les enfants. Il présente des mélodies accrocheuses et des paroles ludiques qui visent à divertir et à instruire les jeunes auditeurs. Les chansons racontent des histoires sur l'amitié, l'aventure ou l'imagination, et elles séduisent parfois les adultes par leur côté tendre.",
    descriptionEn: "Histoire pour enfants is a French music genre that is specifically created for children. It features catchy tunes and playful lyrics that aim to entertain and educate young listeners. The songs often tell stories relatable to children – themes such as friendship, adventure and imagination – and have gained popularity with artists whose music appeals to both children and adults.",
    subgenres: [],
    artists: ['Petit Ours Brun','Aldebert','Loup','Vincent Malone'],
    origin: 'France',
    relatedCountries: ['France'],
    parentGenre: 'Easy Listening',
    spotify: ''
  },
  {
    name: 'Dalarna Indie',
    descriptionFr: "Le dalarna indie est un genre né dans la région suédoise de Dalarna qui combine des éléments de rock indie, de pop et de folk. Il se caractérise par des mélodies entraînantes, des textes introspectifs et l'utilisation d'instruments acoustiques comme les guitares et les pianos. L'ensemble crée une ambiance nostalgique et mélancolique qui reflète la beauté naturelle et le mode de vie rural de la province.",
    descriptionEn: "Dalarna indie music is a genre that combines elements of indie rock, pop and folk music. It is characterized by its catchy melodies, introspective lyrics and use of acoustic instruments such as guitars and pianos. The music often has a nostalgic and melancholic feel, reflecting the natural beauty and rural lifestyle of the Dalarna region in Sweden.",
    subgenres: [],
    artists: ['Mando Diao','Mimikry','Stiko Per Larsson','Gustaf & Viktor Norén'],
    origin: 'Sweden',
    relatedCountries: ['Sweden'],
    parentGenre: 'Rock',
    spotify: ''
  },
  {
    name: 'Cante Alentejano',
    descriptionFr: "Le cante alentejano est un style de chant polyphonique traditionnel du sud du Portugal, interprété par des groupes choraux amateurs sans accompagnement instrumental. Des groupes pouvant compter jusqu'à trente chanteurs se partagent deux voix : le 'ponto' dans les graves ouvre la chanson, l' 'alto' lui répond à l'aigu en ornant la mélodie, avant que tout le chœur ne chante en tierces parallèles. Les paroles évoquent la vie rurale, la nature, l'amour, la maternité, la religion et les mutations sociales.",
    descriptionEn: "Cante Alentejano is a traditional polyphonic singing style from the Alentejo region of southern Portugal performed by amateur choral groups without instruments. Groups of up to thirty singers divide into two parts: a low ‘ponto’ voice introduces the melody and a higher ‘alto’ repeats it a third or a tenth above with ornaments before the chorus joins in singing in parallel thirds. Lyrics explore themes such as rural life, nature, love, motherhood, religion and social change.",
    subgenres: [],
    artists: [],
    origin: 'Portugal',
    relatedCountries: ['Portugal'],
    parentGenre: 'Folk',
    spotify: ''
  }
];
