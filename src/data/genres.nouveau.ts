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
