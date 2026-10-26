import type { Item } from '../types';

export const countries: Item[] = [
  // ——— Europe / Amériques ———
  {
    name: 'France',
    descriptionFr: "La France a une longue tradition de chanson à texte, d'Édith Piaf à Georges Brassens, Jacques Brel et Serge Gainsbourg. Dans les années 1990, la French Touch de Daft Punk et Air a mis l'électronique française sur la carte du monde, pendant que le rap, de MC Solaar à IAM, devenait l'un des plus importants hors des États-Unis. Chaque région a sa couleur : rap à Marseille, musique celtique en Bretagne, électro et jazz à Paris.",
    descriptionEn: "France has a long tradition of lyric-driven chanson, from Édith Piaf to Georges Brassens, Jacques Brel and Serge Gainsbourg. In the 1990s the French Touch of Daft Punk and Air put French electronic music on the world map, while rap, from MC Solaar to IAM, became one of the biggest scenes outside the US. Each region has its own colour: rap in Marseille, Celtic music in Brittany, electronic music and jazz in Paris.",
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
    descriptionFr: "Le Guatemala a fait de la marimba son instrument national : de grands ensembles de bois jouent sones, valses et boleros dans les fêtes de village comme dans les cérémonies officielles. Les traditions mayas des hautes terres (tambours, flûtes de roseau, musique rituelle) côtoient la culture garifuna de la côte caraïbe. Aujourd'hui, Ricardo Arjona et Gaby Moreno portent une pop et une chanson guatémaltèques écoutées dans toute l'Amérique latine.",
    descriptionEn: "Guatemala made the marimba its national instrument: large wooden ensembles play sones, waltzes and boleros at village fiestas and official ceremonies alike. Mayan highland traditions (drums, reed flutes, ritual music) sit alongside the Garifuna culture of the Caribbean coast. Today Ricardo Arjona and Gaby Moreno carry Guatemalan pop and songwriting across Latin America.",
    regions: ['Antigua', 'Guatemala City', 'Quetzaltenango'],
    artists: ['Gaby Moreno', 'Ricardo Arjona', 'Marimba Chapinlandia'],
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4xuWVBs4FgJ",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Antigua_Guatemala_Street.jpg"
  },
  {
    name: 'Honduras',
    descriptionFr: "Le Honduras est l'un des foyers de la punta, rythme garifuna de la côte caraïbe joué aux tambours et aux maracas, qui est devenu dans les années 1990 le punta rock, avec des groupes comme Banda Blanca. Aurelio Martínez a fait connaître la paranda garifuna dans le monde entier. Dans l'intérieur du pays, la musique de marimba, la ranchera et la pop latine dominent la radio.",
    descriptionEn: "Honduras is one of the homes of punta, the Garifuna rhythm of the Caribbean coast played on drums and maracas, which became punta rock in the 1990s with bands like Banda Blanca. Aurelio Martínez took Garifuna paranda to audiences worldwide. Inland, marimba music, ranchera and Latin pop rule the airwaves.",
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
    descriptionFr: "Sur la côte caraïbe, autour de Limón, les descendants de travailleurs jamaïcains ont gardé un calypso en anglais dont Walter Ferguson est la figure légendaire. Le Guanacaste, au nord-ouest, est le cœur du folklore national : marimba, guitare et danse du punto guanacasteco. San José concentre une scène pop, rock et électronique active, d'où vient Debi Nova.",
    descriptionEn: "On the Caribbean coast around Limón, descendants of Jamaican workers kept an English-language calypso whose legendary figure is Walter Ferguson. Guanacaste in the northwest is the heart of national folklore: marimba, guitar and the punto guanacasteco dance. San José has an active pop, rock and electronic scene, home to singer Debi Nova.",
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
    descriptionFr: "La côte atlantique du Nicaragua, autour de Bluefields, célèbre chaque mois de mai le Palo de Mayo, une fête afro-caribéenne aux rythmes dansants popularisés par Dimension Costeña. Le Pacifique cultive la marimba de arco et les sones nicas, dont Camilo Zapata a fixé le répertoire. Dans les années 1970-1980, la canción testimonial des frères Mejía Godoy a accompagné l'histoire politique du pays.",
    descriptionEn: "Nicaragua's Atlantic coast around Bluefields celebrates Palo de Mayo every May, an Afro-Caribbean festival whose dance rhythms were popularised by Dimension Costeña. The Pacific side cultivates the marimba de arco and the sones nicas that Camilo Zapata shaped into a national repertoire. In the 1970s and 1980s, the canción testimonial of the Mejía Godoy brothers soundtracked the country's political history.",
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
    descriptionFr: "El Salvador a inventé le xuc, un rythme de danse créé dans les années 1940 par Paquito Palaviccini et devenu un symbole national. La cumbia y est reine, portée par des orchestres comme celui de Marito Rivera, qui animent fêtes patronales et mariages. Les scènes rock, reggae et pop de San Salvador se développent, avec une forte diaspora aux États-Unis.",
    descriptionEn: "El Salvador invented xuc, a dance rhythm created in the 1940s by Paquito Palaviccini that became a national symbol. Cumbia reigns there, carried by orchestras such as Marito Rivera's that play patron-saint fiestas and weddings. San Salvador's rock, reggae and pop scenes are growing, with a large diaspora in the United States.",
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
    descriptionFr: "Au Panama, la musique típica se joue à l'accordéon, à la caja et à la guacharaca, surtout dans la péninsule d'Azuero ; Samy y Sandra Sandoval en sont les stars. Le tamborito, chanté par des femmes sur des tambours, est la danse nationale. Panama est aussi un berceau du reggae en espagnol des années 1980, ancêtre direct du reggaetón, et la patrie du salsero Rubén Blades.",
    descriptionEn: "In Panama, música típica is played on accordion, caja and guacharaca, especially on the Azuero peninsula; Samy y Sandra Sandoval are its stars. Tamborito, sung by women over drums, is the national dance. Panama was also a cradle of 1980s Spanish-language reggae, a direct ancestor of reggaetón, and is the home of salsa singer Rubén Blades.",
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
    descriptionFr: "Le tango est né dans les faubourgs de Buenos Aires à la fin du XIXe siècle, avant qu'Astor Piazzolla ne le réinvente en tango nuevo. Le nord-ouest andin (Salta, Jujuy) est le pays de la zamba, de la chacarera et du charango, que Mercedes Sosa a portés dans le monde entier. Le rock nacional, de Charly García à Soda Stereo, est l'un des plus influents d'Amérique latine.",
    descriptionEn: "Tango was born in the outskirts of Buenos Aires in the late 19th century, before Astor Piazzolla reinvented it as tango nuevo. The Andean northwest (Salta, Jujuy) is the land of zamba, chacarera and the charango, which Mercedes Sosa carried around the world. Rock nacional, from Charly García to Soda Stereo, is one of the most influential rock scenes in Latin America.",
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
    descriptionFr: "La cueca, danse de couple au mouchoir, est la musique nationale du Chili. Dans les années 1960, Violeta Parra puis Víctor Jara ont lancé la Nueva Canción, chanson engagée qui a marqué tout le continent, tandis que Los Jaivas mêlaient rock progressif et instruments andins. Santiago a aujourd'hui une scène pop, indie et électronique très active, de Los Bunkers à Mon Laferte.",
    descriptionEn: "Cueca, a couple's dance with handkerchiefs, is Chile's national music. In the 1960s Violeta Parra and later Víctor Jara launched Nueva Canción, a socially engaged song movement that marked the whole continent, while Los Jaivas blended progressive rock with Andean instruments. Santiago now has a lively pop, indie and electronic scene, from Los Bunkers to Mon Laferte.",
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
    descriptionFr: "La côte caraïbe colombienne a donné naissance à la cumbia et au vallenato à l'accordéon, ainsi qu'à la champeta des sound systems de Cartagena. Totó la Momposina garde vivantes les traditions afro-indigènes, Joe Arroyo a modernisé la salsa, et Carlos Vives a fait entrer le vallenato dans la pop. Medellín est devenue une capitale mondiale du reggaetón, avec J Balvin et Karol G.",
    descriptionEn: "Colombia's Caribbean coast gave birth to cumbia and accordion-led vallenato, as well as the champeta of Cartagena's sound systems. Totó la Momposina keeps Afro-Indigenous traditions alive, Joe Arroyo modernised salsa, and Carlos Vives brought vallenato into pop. Medellín has become a world capital of reggaetón, home to J Balvin and Karol G.",
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
    descriptionFr: "Le Pérou a trois grandes sources musicales : le huayno des Andes, joué au charango et à la harpe ; la musique afro-péruvienne de la côte, avec le cajón et le festejo d'Eva Ayllón ; et la valse créole de Lima, dont Chabuca Granda est l'icône. Dans les années 1960-1970, la chicha a mêlé cumbia, guitares électriques psychédéliques et mélodies andines, avec Los Mirlos et Los Destellos.",
    descriptionEn: "Peru has three great musical sources: Andean huayno played on charango and harp; Afro-Peruvian coastal music with the cajón and the festejo of Eva Ayllón; and Lima's creole waltz, whose icon is Chabuca Granda. In the 1960s and 1970s, chicha blended cumbia, psychedelic electric guitars and Andean melodies, with Los Mirlos and Los Destellos.",
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
    descriptionFr: "La Bolivie est l'un des cœurs de la musique andine : charango, quena, zampoña et bombo. Le Carnaval d'Oruro réunit des milliers de danseurs de morenada, de diablada et de caporales, classé au patrimoine immatériel de l'UNESCO. Los Kjarkas ont fait connaître la saya et le huayno bolivien dans toute l'Amérique latine, notamment avec « Llorando se fue ».",
    descriptionEn: "Bolivia is one of the hearts of Andean music: charango, quena, zampoña and bombo drum. The Oruro Carnival gathers thousands of morenada, diablada and caporales dancers and is listed by UNESCO as intangible heritage. Los Kjarkas spread Bolivian saya and huayno across Latin America, notably with “Llorando se fue”.",
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
    descriptionFr: "Le pasillo, chanson romantique à trois temps, est l'emblème musical de l'Équateur, et Julio Jaramillo en reste la voix la plus célèbre. Dans la vallée du Chota, la communauté afro-équatorienne joue la bomba, tandis que la côte d'Esmeraldas conserve la marimba afro-pacifique. Les Andes équatoriennes ont leurs propres sanjuanitos, joués lors des fêtes de l'Inti Raymi.",
    descriptionEn: "Pasillo, a romantic song in triple time, is Ecuador's musical emblem, and Julio Jaramillo remains its most famous voice. In the Chota Valley the Afro-Ecuadorian community plays bomba, while the coast of Esmeraldas keeps Afro-Pacific marimba alive. The Ecuadorian Andes have their own sanjuanitos, played at Inti Raymi festivities.",
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
    descriptionFr: "La harpe paraguayenne, plus légère que la harpe classique, est le cœur de la musique du pays. La polka paraguaya, rapide et syncopée, et la guarania, plus lente et mélancolique, inventée par José Asunción Flores, sont souvent chantées en guarani. Le guitariste Agustín Barrios, l'un des grands compositeurs pour guitare, est né au Paraguay.",
    descriptionEn: "The Paraguayan harp, lighter than the concert harp, is at the heart of the country's music. The fast, syncopated polka paraguaya and the slower, melancholic guarania invented by José Asunción Flores are often sung in Guaraní. Guitarist Agustín Barrios, one of the great composers for the guitar, was born in Paraguay.",
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
    descriptionFr: "Le candombe, joué par des cordes de tambours dans les rues de Montevideo, est l'héritage de la communauté afro-uruguayenne et rythme le carnaval avec la murga, théâtre musical satirique. Uruguay partage avec l'Argentine la naissance du tango : « La Cumparsita » a été composée à Montevideo. Rubén Rada a fusionné candombe, jazz et rock, et La Vela Puerca est un pilier du rock rioplatense.",
    descriptionEn: "Candombe, played by lines of drums through the streets of Montevideo, is the legacy of the Afro-Uruguayan community and drives Carnival alongside murga, a satirical musical theatre. Uruguay shares the birth of tango with Argentina: “La Cumparsita” was composed in Montevideo. Rubén Rada fused candombe, jazz and rock, and La Vela Puerca is a pillar of Río de la Plata rock.",
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
    descriptionFr: "Le joropo des Llanos, joué à la harpe, au cuatro et aux maracas, est la danse nationale du Venezuela ; Simón Díaz en a été le grand chanteur et compositeur. Autour de Maracaibo, la gaita zuliana anime chaque année la période de Noël. Le pays a aussi une forte tradition de salsa et de pop tropicale, avec Guaco, et le célèbre programme d'orchestres El Sistema.",
    descriptionEn: "Joropo from the Llanos plains, played on harp, cuatro and maracas, is Venezuela's national dance; Simón Díaz was its great singer and composer. Around Maracaibo, gaita zuliana fills the Christmas season every year. The country also has a strong salsa and tropical-pop tradition, with Guaco, and the famous El Sistema youth orchestra programme.",
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
    descriptionFr: "Guyana, seul pays anglophone d'Amérique du Sud, a une culture tournée vers les Caraïbes. La forte communauté indo-guyanienne y a développé le chutney, qui mêle chants en bhojpuri, rythmes caribéens et soca, porté notamment par Terry Gajraj. Calypso, soca et reggae complètent le paysage, surtout lors du Mashramani, le carnaval national.",
    descriptionEn: "Guyana, the only English-speaking country in South America, looks culturally towards the Caribbean. Its large Indo-Guyanese community developed chutney music, mixing Bhojpuri songs, Caribbean rhythms and soca, carried notably by Terry Gajraj. Calypso, soca and reggae complete the picture, especially during Mashramani, the national carnival.",
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
    descriptionFr: "Au Suriname, le kaseko est la grande musique créole : un mélange de rythmes africains, de cuivres et de jazz, né à Paramaribo au XXe siècle. Il descend de la kawina, musique de percussions et de chants. Les communautés hindoustanies, javanaises et marronnes y apportent chacune leurs traditions, et une partie de la scène vit aux Pays-Bas.",
    descriptionEn: "In Suriname, kaseko is the great Creole music: a mix of African rhythms, horns and jazz born in Paramaribo in the 20th century. It descends from kawina, a percussion and vocal music. The Hindustani, Javanese and Maroon communities each bring their own traditions, and part of the scene lives in the Netherlands.",
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
    descriptionFr: "En Guyane, le kasékò, joué sur de grands tambours, est la musique créole des fêtes et du carnaval, l'un des plus longs du monde. Les communautés marronnes du Maroni ont développé l'aléké, très populaire chez les jeunes. Les influences des Antilles (zouk, biguine), du Brésil et du Suriname voisin se croisent à Cayenne et Saint-Laurent-du-Maroni.",
    descriptionEn: "In French Guiana, kasékò, played on large drums, is the Creole music of parties and of Carnival, one of the longest in the world. The Maroon communities of the Maroni river developed aléké, very popular with young people. Influences from the French Caribbean (zouk, biguine), Brazil and neighbouring Suriname meet in Cayenne and Saint-Laurent-du-Maroni.",
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
    descriptionFr: "La Jamaïque a donné au monde le ska, le rocksteady, le reggae et le dancehall, une suite d'inventions nées en une vingtaine d'années à Kingston. Bob Marley et Peter Tosh ont porté le reggae roots et le message rastafari dans le monde entier, tandis que les producteurs de dub, comme King Tubby et Lee « Scratch » Perry, ont inventé des techniques de studio reprises par le hip-hop et l'électronique. Le dancehall, de Shabba Ranks à Vybz Kartel, domine aujourd'hui.",
    descriptionEn: "Jamaica gave the world ska, rocksteady, reggae and dancehall, a run of inventions born within about twenty years in Kingston. Bob Marley and Peter Tosh carried roots reggae and the Rastafari message worldwide, while dub producers such as King Tubby and Lee “Scratch” Perry invented studio techniques later taken up by hip-hop and electronic music. Dancehall, from Shabba Ranks to Vybz Kartel, dominates today.",
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
    descriptionFr: "Trinité-et-Tobago est le berceau du calypso, de la soca et du steelpan, le seul instrument acoustique majeur inventé au XXe siècle, fabriqué à partir de bidons de pétrole. Le Carnaval de Port of Spain est le grand moment de l'année, avec ses concours de calypso et de steel bands. Calypso Rose et Mighty Sparrow sont des légendes du calypso, et Machel Montano est le roi de la soca moderne.",
    descriptionEn: "Trinidad and Tobago is the birthplace of calypso, soca and the steelpan, the only major acoustic instrument invented in the 20th century, made from oil drums. The Port of Spain Carnival is the high point of the year, with its calypso and steel-band competitions. Calypso Rose and Mighty Sparrow are calypso legends, and Machel Montano is the king of modern soca.",
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
    descriptionFr: "La Barbade vit au rythme de la soca, surtout pendant le Crop Over, la fête de fin de récolte de la canne à sucre, qui est l'une des plus grandes célébrations des Caraïbes. Le pays a créé son propre style, la bashment soca, et le spouge, une musique des années 1960 inventée par Jackie Opel. Rihanna, la star internationale, vient de Bridgetown.",
    descriptionEn: "Barbados lives to the rhythm of soca, especially during Crop Over, the end-of-sugar-cane-harvest festival and one of the biggest celebrations in the Caribbean. The island created its own style, bashment soca, and spouge, a 1960s sound invented by Jackie Opel. Global star Rihanna comes from Bridgetown.",
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
    descriptionFr: "Le Junkanoo, défilé de Noël et du Nouvel An avec cloches, tambours de peau de chèvre et cuivres, est le cœur de la culture bahaméenne. Le rake-n-scrape, joué avec une scie raclée, un accordéon et un tambour, est la musique populaire traditionnelle des îles. Les Baha Men ont fait connaître ce son au monde entier avec « Who Let the Dogs Out ».",
    descriptionEn: "Junkanoo, the Christmas and New Year parade with cowbells, goatskin drums and horns, is the heart of Bahamian culture. Rake-n-scrape, played with a scraped saw, accordion and drum, is the islands' traditional popular music. The Baha Men took this sound worldwide with “Who Let the Dogs Out”.",
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
    descriptionFr: "Cuba est l'une des grandes puissances musicales du monde : le son cubano, la rumba, le danzón, le mambo et le cha-cha-chá en sont nés, et la salsa new-yorkaise s'en est directement inspirée. Celia Cruz est devenue la reine de la salsa, le Buena Vista Social Club a fait redécouvrir le son traditionnel dans les années 1990, et Los Van Van ont inventé la timba moderne. Santiago de Cuba et Matanzas sont des berceaux du son et de la rumba.",
    descriptionEn: "Cuba is one of the world's great musical powers: son cubano, rumba, danzón, mambo and cha-cha-chá were born there, and New York salsa drew directly on them. Celia Cruz became the queen of salsa, Buena Vista Social Club revived traditional son in the 1990s, and Los Van Van invented modern timba. Santiago de Cuba and Matanzas are cradles of son and rumba.",
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
    descriptionFr: "La République dominicaine a donné naissance au merengue, rapide et joué à l'accordéon, à la güira et à la tambora, et à la bachata, longtemps méprisée avant de conquérir le monde. Juan Luis Guerra a sophistiqué les deux genres, et Aventura a modernisé la bachata depuis New York. Aujourd'hui, le dembow, rythme urbain très rapide porté par El Alfa, est la bande-son des rues de Santo Domingo.",
    descriptionEn: "The Dominican Republic gave birth to merengue, fast and played on accordion, güira and tambora, and to bachata, long looked down upon before conquering the world. Juan Luis Guerra refined both genres, and Aventura modernised bachata from New York. Today dembow, a very fast urban rhythm carried by El Alfa, is the soundtrack of Santo Domingo's streets.",
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
    descriptionFr: "Le compas (konpa), créé dans les années 1950 par Nemours Jean-Baptiste, est la musique populaire d'Haïti et a influencé le zouk antillais ; Tabou Combo et Carimi en sont des noms majeurs. Le rara, musique de procession jouée pendant le Carême avec des trompes en bambou (vaccines), et la musique vodou sont au cœur des traditions. Dans les années 1990, la mizik rasin, avec Boukman Eksperyans et Boukan Ginen, a mêlé rythmes vodou et rock.",
    descriptionEn: "Compas (konpa), created in the 1950s by Nemours Jean-Baptiste, is Haiti's popular music and influenced French Caribbean zouk; Tabou Combo and Carimi are major names. Rara, a procession music played during Lent with bamboo trumpets (vaksin), and Vodou music are at the heart of its traditions. In the 1990s, mizik rasin, with Boukman Eksperyans and Boukan Ginen, blended Vodou rhythms with rock.",
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
    descriptionFr: "Porto Rico a deux traditions afro-portoricaines majeures : la bomba, dialogue entre danseur et tambour, et la plena, surnommée « le journal chanté ». L'île a fourni à la salsa new-yorkaise certaines de ses plus grandes voix, comme Héctor Lavoe. Elle est aussi le berceau du reggaetón moderne, de Daddy Yankee à Bad Bunny, et Calle 13 y a mêlé rap et engagement.",
    descriptionEn: "Puerto Rico has two major Afro-Puerto Rican traditions: bomba, a dialogue between dancer and drum, and plena, nicknamed “the sung newspaper”. The island gave New York salsa some of its greatest voices, such as Héctor Lavoe. It is also the cradle of modern reggaetón, from Daddy Yankee to Bad Bunny, and Calle 13 mixed rap with social commentary there.",
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
    descriptionFr: "Le gwoka, joué sur les tambours ka, est la musique ancestrale de la Guadeloupe, héritée de l'esclavage et inscrite au patrimoine immatériel de l'UNESCO. Dans les années 1980, le groupe Kassav' y a inventé le zouk, qui a conquis les Antilles, l'Afrique et l'Europe. La scène dancehall et rap créole, avec Admiral T, est aujourd'hui très active.",
    descriptionEn: "Gwoka, played on ka drums, is Guadeloupe's ancestral music, inherited from slavery and listed by UNESCO as intangible heritage. In the 1980s, the band Kassav' invented zouk there, which conquered the Caribbean, Africa and Europe. The Creole dancehall and rap scene, with Admiral T, is very active today.",
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
    descriptionFr: "La Martinique a donné la biguine, cousine créole du jazz qui faisait danser Paris dans les années 1930, et le bèlè, tradition de tambour et de danse héritée de l'esclavage. Le zouk, né avec Kassav', est aussi martiniquais par ses membres, dont la chanteuse Jocelyne Béroard. Le chouval bwa, musique des manèges de village, est une autre tradition locale.",
    descriptionEn: "Martinique gave us biguine, a Creole cousin of jazz that set Paris dancing in the 1930s, and bèlè, a drum-and-dance tradition inherited from slavery. Zouk, born with Kassav', is also Martinican through members such as singer Jocelyne Béroard. Chouval bwa, the music of village merry-go-rounds, is another local tradition.",
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
    descriptionFr: "Sainte-Lucie a créé son propre style de soca, la Dennery Segment, née dans le village de Dennery : un rythme rapide et répétitif conçu pour danser pendant le carnaval. L'île, bilingue anglais et créole, garde aussi des traditions de quadrille et de musique kwadril jouées au violon et au banjo. Le Saint Lucia Jazz Festival accueille chaque année des artistes internationaux.",
    descriptionEn: "Saint Lucia created its own style of soca, Dennery Segment, born in the village of Dennery: a fast, repetitive rhythm made for dancing at Carnival. The island, bilingual in English and Creole, also keeps quadrille traditions (kwadril) played on fiddle and banjo. The Saint Lucia Jazz Festival hosts international artists every year.",
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
    descriptionFr: "Grenade a son propre style de soca, la Jab Jab, inspirée du personnage de carnaval des Jab Molassie, couverts d'huile noire et de chaînes. Le carnaval de Spicemas, en août, est le grand moment musical de l'île, avec ses concours de calypso et de soca. Tallpree est l'un des artistes les plus connus de la scène locale.",
    descriptionEn: "Grenada has its own soca style, Jab Jab, inspired by the Jab Molassie carnival characters covered in black oil and chains. Spicemas carnival in August is the island's big musical moment, with calypso and soca competitions. Tallpree is one of the best-known artists of the local scene.",
    regions: ["St. George's", "Gouyave"],
    artists: ['Tallpree'],
    spotify: "https://open.spotify.com/search/Grenada%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/St._Georges_Grenada.jpg",
    cityStyles: [
      { city: "St. George's", noteFr: "Jab Jab (Carnaval).", noteEn: "Jab Jab (Carnival)." }
    ]
  },
  {
    name: 'Antigua & Barbuda',
    descriptionFr: "Antigua-et-Barbuda a créé la benna, une chanson populaire satirique héritée de l'époque coloniale, ancêtre local du calypso. L'île vit au rythme de la soca pendant son Carnaval de fin juillet. Burning Flames, groupe des années 1980-1990, a popularisé un son de soca typiquement antiguais dans toutes les Caraïbes.",
    descriptionEn: "Antigua and Barbuda created benna, a satirical folk song from colonial times and the local ancestor of calypso. The islands live to the rhythm of soca during Carnival at the end of July. Burning Flames, a band of the 1980s and 1990s, made a typically Antiguan soca sound popular across the Caribbean.",
    regions: ["St. John's"],
    artists: ['Burning Flames'],
    spotify: "https://open.spotify.com/search/Antigua%20and%20Barbuda%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/St_Johns_Antigua.jpg",
    cityStyles: [
      { city: "St. John's", noteFr: "Benna/soca.", noteEn: "Benna/soca." }
    ]
  },
  {
    name: 'Curaçao',
    descriptionFr: "À Curaçao, on chante en papiamentu, la langue créole de l'île. La tumba, rythme de carnaval, et le tambú, musique de tambour héritée des esclaves et longtemps interdite, sont les deux grandes traditions locales. La chanteuse Izaline Calister modernise ces racines avec le jazz, et l'île accueille un festival de jazz international.",
    descriptionEn: "In Curaçao people sing in Papiamentu, the island's Creole language. Tumba, a carnival rhythm, and tambú, a drum music inherited from enslaved people and long banned, are the two great local traditions. Singer Izaline Calister modernises these roots with jazz, and the island hosts an international jazz festival.",
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
    descriptionFr: "Le Royaume-Uni a façonné la pop et le rock modernes, des Beatles et des Rolling Stones aux vagues punk, new wave et britpop. Ses scènes urbaines sont tout aussi inventives : drum & bass et jungle à Londres et Bristol, UK garage, dubstep, puis grime avec Skepta et Stormzy. Chaque ville a son histoire, du Merseybeat de Liverpool à la Madchester des années 1980-1990.",
    descriptionEn: "The United Kingdom shaped modern pop and rock, from the Beatles and the Rolling Stones to the punk, new wave and Britpop waves. Its urban scenes are just as inventive: drum & bass and jungle in London and Bristol, UK garage, dubstep, then grime with Skepta and Stormzy. Each city has its story, from Liverpool's Merseybeat to 1980s and 1990s Madchester.",
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
    descriptionFr: "L'Irlande a une musique traditionnelle très vivante, jouée au violon, à la flûte, au bodhrán et aux uilleann pipes dans les sessions de pub, avec des groupes comme The Chieftains. Enya a mêlé ces racines celtiques à des nappes new age, tandis que U2, The Cranberries et Sinéad O'Connor ont porté le rock irlandais dans le monde entier. Galway et Dublin restent des foyers de la musique folk et indie.",
    descriptionEn: "Ireland has a very lively traditional music played on fiddle, flute, bodhrán and uilleann pipes in pub sessions, with groups such as The Chieftains. Enya blended these Celtic roots with new-age soundscapes, while U2, The Cranberries and Sinéad O'Connor carried Irish rock worldwide. Galway and Dublin remain hubs of folk and indie music.",
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
    descriptionFr: "Le flamenco d'Andalousie, avec son chant, sa guitare et sa danse, est inscrit au patrimoine immatériel de l'UNESCO ; Paco de Lucía et Camarón de la Isla l'ont révolutionné. Chaque région a ses traditions : gaita et musique celtique en Galice, rumba catalane à Barcelone, jota en Aragon. Aujourd'hui, Rosalía mêle flamenco et pop urbaine, et l'Espagne est un grand marché pour le reggaetón et la pop latine.",
    descriptionEn: "Andalusian flamenco, with its song, guitar and dance, is listed by UNESCO as intangible heritage; Paco de Lucía and Camarón de la Isla revolutionised it. Each region has its own traditions: bagpipes and Celtic music in Galicia, Catalan rumba in Barcelona, jota in Aragon. Today Rosalía blends flamenco with urban pop, and Spain is a major market for reggaetón and Latin pop.",
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
    descriptionFr: "Le fado, chant mélancolique accompagné de la guitare portugaise, est né à Lisbonne au XIXe siècle et a été porté au rang d'art par Amália Rodrigues ; Mariza en est une grande voix actuelle. Coimbra a son propre fado, chanté par les étudiants. Lisbonne est aussi un carrefour des musiques lusophones d'Afrique, de la kizomba à l'afro-house, avec des artistes comme Buraka Som Sistema.",
    descriptionEn: "Fado, a melancholic song accompanied by the Portuguese guitar, was born in Lisbon in the 19th century and raised to an art form by Amália Rodrigues; Mariza is one of its great voices today. Coimbra has its own fado, sung by students. Lisbon is also a crossroads of Lusophone African music, from kizomba to Afro-house, with artists such as Buraka Som Sistema.",
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
    descriptionFr: "L'Italie est le pays de l'opéra, de Verdi à Puccini, et d'une grande tradition de canzone, portée par le Festival de Sanremo et des auteurs comme Lucio Battisti et Fabrizio De André. Naples a sa propre chanson napolitaine, et Ennio Morricone a révolutionné la musique de film. L'italo disco des années 1980, le rap italien actuel et le rock de Måneskin, vainqueur de l'Eurovision 2021, montrent la vitalité de la scène moderne.",
    descriptionEn: "Italy is the land of opera, from Verdi to Puccini, and of a great canzone tradition carried by the Sanremo Festival and songwriters such as Lucio Battisti and Fabrizio De André. Naples has its own Neapolitan song, and Ennio Morricone revolutionised film music. 1980s Italo disco, today's Italian rap and the rock of Måneskin, Eurovision winners in 2021, show how lively the modern scene is.",
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
    descriptionFr: "L'Allemagne, pays de Bach, Beethoven et Brahms, a aussi inventé une partie de la musique électronique moderne : Kraftwerk à Düsseldorf et le krautrock de Can et Neu! dans les années 1970. Après la chute du Mur, Berlin est devenue la capitale mondiale de la techno, avec des clubs comme le Berghain. La pop et le rock germanophones, des Scorpions à Rammstein, ont aussi un public international.",
    descriptionEn: "Germany, the land of Bach, Beethoven and Brahms, also invented part of modern electronic music: Kraftwerk in Düsseldorf and the krautrock of Can and Neu! in the 1970s. After the fall of the Wall, Berlin became the world capital of techno, with clubs such as Berghain. German-language pop and rock, from the Scorpions to Rammstein, also have an international audience.",
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
    descriptionFr: "Les Pays-Bas sont une superpuissance de la musique électronique : Tiësto, Armin van Buuren, Martin Garrix et Hardwell font partie des DJ les plus écoutés au monde. Rotterdam a inventé le gabber dans les années 1990, un hardcore très rapide. L'Amsterdam Dance Event, chaque octobre, est l'un des plus grands rendez-vous de l'électronique au monde.",
    descriptionEn: "The Netherlands is an electronic-music superpower: Tiësto, Armin van Buuren, Martin Garrix and Hardwell are among the most-streamed DJs in the world. Rotterdam invented gabber in the 1990s, a very fast form of hardcore. The Amsterdam Dance Event every October is one of the biggest electronic-music gatherings in the world.",
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
    descriptionFr: "La Belgique a joué un rôle clé dans la musique électronique : la new beat des années 1980, puis la techno et la scène rave, avec le label R&S et des collectifs comme Soulwax. Le pays a aussi une grande tradition de chanson, de Jacques Brel à Stromae, qui mêle aujourd'hui électro et textes en français. Le festival Tomorrowland, près d'Anvers, est l'un des plus grands festivals électroniques du monde.",
    descriptionEn: "Belgium played a key role in electronic music: 1980s new beat, then techno and the rave scene, with the R&S label and outfits such as Soulwax. The country also has a great chanson tradition, from Jacques Brel to Stromae, who today blends electronic music with French lyrics. Tomorrowland, near Antwerp, is one of the biggest electronic festivals in the world.",
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
    descriptionFr: "Le Luxembourg, petit pays multilingue, a une scène où l'on chante en luxembourgeois, en français, en allemand et en anglais. Il a gagné l'Eurovision cinq fois, souvent avec des artistes français. La Philharmonie et la salle Rockhal d'Esch-sur-Alzette en font une étape importante pour la musique classique et les tournées internationales.",
    descriptionEn: "Luxembourg, a small multilingual country, has a scene where artists sing in Luxembourgish, French, German and English. It has won Eurovision five times, often with French artists. The Philharmonie and the Rockhal venue in Esch-sur-Alzette make it an important stop for classical music and international tours.",
    regions: ['Luxembourg City', 'Esch-sur-Alzette'],
    artists: ['Rome', 'Tuys'],
    spotify: "https://open.spotify.com/search/Luxembourg%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Luxembourg_City_Skyline.jpg"
  },
  {
    name: 'Switzerland',
    descriptionFr: "La Suisse a des traditions alpines comme le yodel et le cor des Alpes, et une scène qui chante en quatre langues. Le duo Yello a été un pionnier de la pop électronique dans les années 1980, et le Montreux Jazz Festival est l'un des festivals les plus célèbres du monde. Zurich et Genève ont des scènes techno et house actives.",
    descriptionEn: "Switzerland has Alpine traditions such as yodelling and the alphorn, and a scene that sings in four languages. The duo Yello pioneered electronic pop in the 1980s, and the Montreux Jazz Festival is one of the most famous festivals in the world. Zurich and Geneva have active techno and house scenes.",
    regions: ['Zürich', 'Genève', 'Lausanne'],
    artists: ['Yello', 'Sophie Hunger'],
    spotify: "https://open.spotify.com/search/Switzerland%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Z%C3%BCrich_-_Uetliberg_-_Skyline.jpg"
  },
  {
    name: 'Austria',
    descriptionFr: "Vienne a été la capitale de la musique classique avec Haydn, Mozart, Beethoven et Schubert, puis la ville de la valse des Strauss. Au XXe siècle, Falco a fait de la pop autrichienne un succès mondial avec « Rock Me Amadeus ». Dans les années 1990, le duo Kruder & Dorfmeister a défini le downtempo viennois, et la scène électronique et indie de Vienne reste très active.",
    descriptionEn: "Vienna was the capital of classical music with Haydn, Mozart, Beethoven and Schubert, then the city of the Strauss family's waltzes. In the 20th century Falco made Austrian pop a worldwide hit with “Rock Me Amadeus”. In the 1990s the duo Kruder & Dorfmeister defined Viennese downtempo, and Vienna's electronic and indie scene remains very active.",
    regions: ['Wien', 'Salzburg', 'Graz'],
    artists: ['Falco', 'Kruder & Dorfmeister'],
    spotify: "https://open.spotify.com/search/Austria%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Wien_Skyline.jpg"
  },
  {
    name: 'Denmark',
    descriptionFr: "Le Danemark a une scène pop et électronique très exportée, d'Aqua dans les années 1990 à MØ et Lukas Graham aujourd'hui. Copenhague a aussi une forte tradition de jazz, qui a attiré de nombreux musiciens américains dans les années 1960. Le festival de Roskilde est l'un des plus grands festivals de musique d'Europe.",
    descriptionEn: "Denmark has a highly exported pop and electronic scene, from Aqua in the 1990s to MØ and Lukas Graham today. Copenhagen also has a strong jazz tradition that drew many American musicians in the 1960s. Roskilde Festival is one of the biggest music festivals in Europe.",
    regions: ['Copenhagen', 'Aarhus'],
    artists: ['Aqua', 'MØ'],
    spotify: "https://open.spotify.com/search/Denmark%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Copenhagen_Skyline_2014.jpg"
  },
  {
    name: 'Sweden',
    descriptionFr: "La Suède est l'un des plus grands exportateurs de musique au monde par habitant : ABBA, Roxette, puis Avicii et Swedish House Mafia. Des producteurs comme Max Martin ont écrit une grande partie de la pop mondiale des trente dernières années. Göteborg a donné naissance au death metal mélodique, avec In Flames et At the Gates.",
    descriptionEn: "Sweden is one of the world's biggest music exporters per capita: ABBA, Roxette, then Avicii and Swedish House Mafia. Producers such as Max Martin wrote a large share of global pop over the last thirty years. Gothenburg gave birth to melodic death metal, with In Flames and At the Gates.",
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
    descriptionFr: "La Norvège est le berceau du black metal, né au début des années 1990 avec Mayhem, Darkthrone et Emperor. Elle a aussi produit une pop très mélodique, d'a-ha à Aurora et Kygo, figure de la tropical house. Le pays garde des traditions folk comme le joik sami et le violon de Hardanger.",
    descriptionEn: "Norway is the birthplace of black metal, born in the early 1990s with Mayhem, Darkthrone and Emperor. It has also produced very melodic pop, from a-ha to Aurora and Kygo, a leading figure of tropical house. The country keeps folk traditions such as Sámi joik and the Hardanger fiddle.",
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
    descriptionFr: "La Finlande a le plus grand nombre de groupes de metal par habitant au monde : Nightwish, HIM, Children of Bodom ou Lordi, vainqueur de l'Eurovision 2006. Le pays a aussi une grande tradition classique, de Sibelius à une école de chefs d'orchestre renommée. Le tango finlandais et la chanson populaire iskelmä restent très écoutés.",
    descriptionEn: "Finland has the highest number of metal bands per capita in the world: Nightwish, HIM, Children of Bodom and Lordi, Eurovision winners in 2006. The country also has a great classical tradition, from Sibelius to a renowned school of conductors. Finnish tango and iskelmä popular song remain widely loved.",
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
    descriptionFr: "L'Islande, avec moins de 400 000 habitants, a une scène musicale d'une créativité exceptionnelle. Björk, d'abord avec les Sugarcubes, a ouvert la voie à une pop expérimentale, et Sigur Rós a créé un post-rock aérien chanté en islandais et en langue inventée. Le festival Iceland Airwaves, à Reykjavík, fait découvrir chaque année la nouvelle scène locale.",
    descriptionEn: "Iceland, with fewer than 400,000 inhabitants, has an exceptionally creative music scene. Björk, first with the Sugarcubes, paved the way for experimental pop, and Sigur Rós created an ethereal post-rock sung in Icelandic and an invented language. The Iceland Airwaves festival in Reykjavík showcases the new local scene every year.",
    regions: ['Reykjavík', 'Akureyri'],
    artists: ['Björk', 'Sigur Rós'],
    spotify: "https://open.spotify.com/search/Iceland%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Reykjavik_Skyline.jpg"
  },
  {
    name: 'Poland',
    descriptionFr: "La Pologne a une grande tradition classique, de Chopin à Penderecki et Górecki, et une scène jazz réputée depuis Krzysztof Komeda et Tomasz Stańko. Le rap polonais est aujourd'hui l'un des genres les plus écoutés du pays, avec Taco Hemingway. Le folk des montagnes de Podhale et le disco polo, pop dansante populaire, font aussi partie du paysage.",
    descriptionEn: "Poland has a great classical tradition, from Chopin to Penderecki and Górecki, and a renowned jazz scene since Krzysztof Komeda and Tomasz Stańko. Polish rap is now one of the country's most-streamed genres, with Taco Hemingway. The folk of the Podhale mountains and disco polo, a popular dance pop, are also part of the landscape.",
    regions: ['Warszawa', 'Kraków', 'Gdańsk'],
    artists: ['Taco Hemingway', 'Penderecki'],
    spotify: "https://open.spotify.com/search/Poland%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Warsaw_skyline_2019.jpg"
  },
  {
    name: 'Czechia',
    descriptionFr: "La Tchéquie a une riche tradition classique avec Dvořák, Smetana et Janáček. Sous le régime communiste, le groupe underground The Plastic People of the Universe est devenu un symbole de résistance culturelle. Prague a une scène jazz et alternative active, et la polka est née en Bohême au XIXe siècle.",
    descriptionEn: "Czechia has a rich classical tradition with Dvořák, Smetana and Janáček. Under communism, the underground band The Plastic People of the Universe became a symbol of cultural resistance. Prague has an active jazz and alternative scene, and the polka was born in Bohemia in the 19th century.",
    regions: ['Praha', 'Brno'],
    artists: ['Plastic People of the Universe'],
    spotify: "https://open.spotify.com/search/Czech%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Prague_skyline_view.jpg"
  },
  {
    name: 'Slovakia',
    descriptionFr: "La Slovaquie garde des traditions folk très vivantes dans ses montagnes, avec la fujara, une grande flûte de berger inscrite au patrimoine de l'UNESCO. Le pays a une scène pop et rock en slovaque, et un hip-hop local en plein essor. Bratislava et Košice accueillent des festivals indie et électroniques.",
    descriptionEn: "Slovakia keeps very lively folk traditions in its mountains, including the fujara, a large shepherd's flute listed by UNESCO. The country has a Slovak-language pop and rock scene and a booming local hip-hop. Bratislava and Košice host indie and electronic festivals.",
    regions: ['Bratislava', 'Košice'],
    artists: ['IMT Smile'],
    spotify: "https://open.spotify.com/search/Slovakia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Bratislava_skyline.jpg"
  },
  {
    name: 'Hungary',
    descriptionFr: "La Hongrie a une musique folk très riche, que Béla Bartók et Zoltán Kodály ont collectée et intégrée à la musique classique. La danse csárdás et les musiques tziganes sont au cœur de son identité, ainsi que le mouvement táncház de redécouverte du folk. Omega a été l'un des grands groupes de rock d'Europe de l'Est, et le festival Sziget de Budapest est l'un des plus grands d'Europe.",
    descriptionEn: "Hungary has a very rich folk music that Béla Bartók and Zoltán Kodály collected and brought into classical music. The csárdás dance and Roma music are at the heart of its identity, along with the táncház folk-revival movement. Omega was one of the great rock bands of Eastern Europe, and Budapest's Sziget festival is one of the largest in Europe.",
    regions: ['Budapest', 'Debrecen'],
    artists: ['Omega', 'Zoltán Kodály'],
    spotify: "https://open.spotify.com/search/Hungary%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Budapest_skyline.jpg"
  },
  {
    name: 'Romania',
    descriptionFr: "La Roumanie a un folk très varié, des doinas mélancoliques aux fanfares tziganes comme Fanfare Ciocărlia et au Taraf de Haïdouks. La manele, mélange de pop, de rythmes orientaux et de musique tzigane, est extrêmement populaire. Le pays a aussi une scène électronique reconnue, du minimal de Bucarest à la pop dance d'Inna.",
    descriptionEn: "Romania has a very varied folk music, from melancholic doinas to Roma brass bands such as Fanfare Ciocărlia and Taraf de Haïdouks. Manele, a blend of pop, Oriental rhythms and Roma music, is hugely popular. The country also has a recognised electronic scene, from Bucharest minimal to Inna's dance pop.",
    regions: ['București', 'Cluj-Napoca', 'Iași'],
    artists: ['Goran Bregović (régionnel)', 'Inna'],
    spotify: "https://open.spotify.com/search/Romania%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Bucharest_Skyline.jpg"
  },
  {
    name: 'Bulgaria',
    descriptionFr: "La Bulgarie est célèbre pour ses chœurs de femmes aux harmonies uniques, révélés au monde par l'album « Le Mystère des Voix Bulgares ». Ses danses folk se jouent sur des rythmes asymétriques (7/8, 11/8) avec gaida et kaval. La chalga, pop-folk aux influences orientales, domine la musique populaire, avec des stars comme Azis.",
    descriptionEn: "Bulgaria is famous for its women's choirs with unique harmonies, revealed to the world by the album “Le Mystère des Voix Bulgares”. Its folk dances are played in asymmetric rhythms (7/8, 11/8) on gaida bagpipe and kaval flute. Chalga, a pop-folk with Oriental influences, dominates popular music, with stars such as Azis.",
    regions: ['Sofia', 'Plovdiv', 'Varna'],
    artists: ['Azis', 'Le Mystère des Voix Bulgares'],
    spotify: "https://open.spotify.com/search/Bulgaria%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sofia_Skyline_2017.jpg"
  },
  {
    name: 'Greece',
    descriptionFr: "Le rébétiko, souvent appelé le « blues grec », est né dans les ports du Pirée et de Thessalonique au début du XXe siècle, porté par le bouzouki. Mikis Theodorakis a fait de la musique grecque un symbole mondial, notamment avec la musique de « Zorba le Grec ». Le laïko et l'entechno restent très populaires, avec des voix comme Haris Alexiou, et chaque île a ses propres traditions.",
    descriptionEn: "Rebetiko, often called the “Greek blues”, was born in the ports of Piraeus and Thessaloniki in the early 20th century, carried by the bouzouki. Mikis Theodorakis made Greek music a global symbol, notably with the score of “Zorba the Greek”. Laïko and entechno remain very popular, with voices such as Haris Alexiou, and each island has its own traditions.",
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
    descriptionFr: "Malte a une tradition de chant improvisé, le għana, une joute vocale accompagnée de guitares. Les fanfares tiennent une place centrale dans les fêtes religieuses de chaque village l'été. La scène pop maltaise est très tournée vers l'Eurovision, avec Ira Losco, et l'île accueille de grands festivals électroniques.",
    descriptionEn: "Malta has a tradition of improvised singing, għana, a vocal duel accompanied by guitars. Brass bands play a central role in every village's religious festas in summer. Maltese pop is strongly focused on Eurovision, with Ira Losco, and the island hosts big electronic festivals.",
    regions: ['Valletta', 'Sliema'],
    artists: ['Ira Losco'],
    spotify: "https://open.spotify.com/search/Malta%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Valletta_Malta.jpg"
    },
  {
    name: 'Cyprus',
    descriptionFr: "Chypre partage les musiques grecques et turques, avec des chansons traditionnelles jouées au violon et au luth. La pop chypriote grecque est étroitement liée à celle de la Grèce, où la star Anna Vissi a fait carrière. Ayia Napa et Limassol sont connues pour leur scène club et leurs festivals d'été.",
    descriptionEn: "Cyprus shares Greek and Turkish musical traditions, with folk songs played on violin and lute. Greek Cypriot pop is closely tied to Greece's, where star Anna Vissi built her career. Ayia Napa and Limassol are known for their club scene and summer festivals.",
    regions: ['Nicosia', 'Limassol'],
    artists: ['Anna Vissi'],
    spotify: "https://open.spotify.com/search/Cyprus%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Nicosia_Skyline.jpg"
  },
// ——— EUROPE DE L'EST & BALTES ———
  {
    name: 'Estonia',
    descriptionFr: "L'Estonie est un pays de chœurs : son Festival de la chanson réunit des dizaines de milliers de chanteurs, et la « révolution chantante » a accompagné son indépendance. Arvo Pärt, l'un des compositeurs vivants les plus joués au monde, est estonien. Tallinn a une scène électronique et indie dynamique, mise en avant par le festival Tallinn Music Week.",
    descriptionEn: "Estonia is a land of choirs: its Song Festival gathers tens of thousands of singers, and the “Singing Revolution” accompanied its independence. Arvo Pärt, one of the most performed living composers in the world, is Estonian. Tallinn has a dynamic electronic and indie scene showcased by the Tallinn Music Week festival.",
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
    descriptionFr: "La Lettonie a une immense tradition de chant choral et de dainas, de courts chants folk dont plus d'un million ont été collectés. Son Festival de la chanson et de la danse est inscrit au patrimoine de l'UNESCO avec ceux de l'Estonie et de la Lituanie. Le groupe Brainstorm a été la grande star pop-rock du pays, et Riga a une scène indie et électronique active.",
    descriptionEn: "Latvia has a huge tradition of choral singing and dainas, short folk songs of which more than a million have been collected. Its Song and Dance Festival is UNESCO-listed together with those of Estonia and Lithuania. The band Brainstorm has been the country's big pop-rock star, and Riga has an active indie and electronic scene.",
    regions: ['Riga', 'Liepāja'],
    artists: ['Instrumenti', 'Brainstorm'],
    spotify: "https://open.spotify.com/search/Latvia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Riga_skyline_2013.jpg"
  },
  {
    name: 'Lithuania',
    descriptionFr: "La Lituanie garde les sutartinės, des chants polyphoniques anciens inscrits au patrimoine de l'UNESCO, et une forte tradition chorale. Vilnius a une scène jazz d'avant-garde réputée, notamment avec le Ganelin Trio à l'époque soviétique. Le groupe The Roop et la pop lituanienne actuelle connaissent un succès croissant, porté par l'Eurovision.",
    descriptionEn: "Lithuania keeps the sutartinės, ancient polyphonic songs listed by UNESCO, and a strong choral tradition. Vilnius has a renowned avant-garde jazz scene, notably the Ganelin Trio in Soviet times. The Roop and today's Lithuanian pop are growing in popularity, helped by Eurovision.",
    regions: ['Vilnius', 'Kaunas'],
    artists: ['The Roop', 'Jurga'],
    spotify: "https://open.spotify.com/search/Lithuania%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Vilnius_Skyline.jpg"
  },
  {
    name: 'Ukraine',
    descriptionFr: "L'Ukraine a un folk très riche, joué au bandoura, et des traditions de chant polyphonique que DakhaBrakha réinvente avec une approche « ethno-chaos ». Okean Elzy est le groupe de rock le plus populaire du pays, et Jamala puis Kalush Orchestra ont gagné l'Eurovision. Kyiv et Odesa ont des scènes électroniques et indie très actives.",
    descriptionEn: "Ukraine has a very rich folk music played on the bandura, and polyphonic singing traditions that DakhaBrakha reinvents with an “ethno-chaos” approach. Okean Elzy is the country's most popular rock band, and Jamala and later Kalush Orchestra won Eurovision. Kyiv and Odesa have very active electronic and indie scenes.",
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
    descriptionFr: "La Biélorussie a des traditions folk slaves, avec des chants rituels liés aux saisons et aux fêtes paysannes. Le groupe Pesniary a modernisé ce folk dans les années 1970, et Lyapis Trubetskoy a marqué le rock local. Aujourd'hui, des artistes comme Max Korzh et LSP sont très écoutés dans tout l'espace russophone.",
    descriptionEn: "Belarus has Slavic folk traditions, with ritual songs tied to the seasons and peasant festivals. The band Pesniary modernised this folk in the 1970s, and Lyapis Trubetskoy left its mark on local rock. Today artists such as Max Korzh and LSP are widely streamed across the Russian-speaking world.",
    regions: ['Minsk', 'Hrodna'],
    artists: ['LSP', 'Max Korzh'],
    spotify: "https://open.spotify.com/search/Belarus%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Minsk_skyline.jpg"
  },
  {
    name: 'Moldova',
    descriptionFr: "La Moldavie partage avec la Roumanie un folk riche en violons, cymbalums et fanfares. Zdob și Zdub mêle ce folk au rock et au punk, et O-Zone a créé le tube mondial « Dragostea din tei ». Le pays participe avec enthousiasme à l'Eurovision, souvent avec des chansons festives et décalées.",
    descriptionEn: "Moldova shares with Romania a folk music rich in fiddles, cimbaloms and brass bands. Zdob și Zdub blends this folk with rock and punk, and O-Zone created the global hit “Dragostea din tei”. The country takes part in Eurovision with enthusiasm, often with festive, quirky songs.",
    regions: ['Chișinău', 'Bălți'],
    artists: ['Zdob și Zdub', "'Carla's Dreams'"],
    spotify: "https://open.spotify.com/search/Moldova%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Chisinau_skyline.jpg"
  },

  // ——— BALKANS ———
  {
    name: 'Slovenia',
    descriptionFr: "La Slovénie est connue pour Laibach, groupe industriel provocateur fondé dans les années 1980, qui a même joué en Corée du Nord. Le pays a une tradition de polka et de valse alpines, la musique « oberkrainer » popularisée par les frères Avsenik. Ljubljana a une scène alternative et électronique active, autour de lieux comme Metelkova.",
    descriptionEn: "Slovenia is known for Laibach, a provocative industrial band formed in the 1980s that even played in North Korea. The country has a tradition of Alpine polkas and waltzes, the “Oberkrainer” music popularised by the Avsenik brothers. Ljubljana has an active alternative and electronic scene, around venues such as Metelkova.",
    regions: ['Ljubljana', 'Maribor'],
    artists: ['Laibach', 'Melodrom'],
    spotify: "https://open.spotify.com/search/Slovenia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Ljubljana_Skyline.jpg"
  },
  {
    name: 'Croatia',
    descriptionFr: "La Croatie a la klapa, un chant polyphonique a cappella de la côte dalmate inscrit au patrimoine de l'UNESCO. Le rock yougoslave y a eu des groupes majeurs comme Parni Valjak, et la pop adriatique, avec Severina, est très populaire. Les festivals électroniques d'été, comme ceux de l'île de Pag, attirent un public international.",
    descriptionEn: "Croatia has klapa, an a cappella polyphonic song from the Dalmatian coast listed by UNESCO. Yugoslav rock had major Croatian bands such as Parni Valjak, and Adriatic pop, with Severina, is very popular. Summer electronic festivals, like those on the island of Pag, draw an international crowd.",
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
    descriptionFr: "La sevdalinka, ou sevdah, est le « blues » de Bosnie : des chansons d'amour mélancoliques aux influences ottomanes, que modernise Amira Medunjanin. Sarajevo a été un foyer majeur du rock yougoslave, avec Bijelo Dugme. Dubioza Kolektiv mêle aujourd'hui rock, ska, électro et satire politique.",
    descriptionEn: "Sevdalinka, or sevdah, is Bosnia's “blues”: melancholic love songs with Ottoman influences, modernised by Amira Medunjanin. Sarajevo was a major hub of Yugoslav rock, with Bijelo Dugme. Dubioza Kolektiv now blends rock, ska, electronic music and political satire.",
    regions: ['Sarajevo', 'Mostar'],
    artists: ['Amira Medunjanin', 'Dubioza Kolektiv'],
    spotify: "https://open.spotify.com/search/Bosnia%20and%20Herzegovina%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Sarajevo_Skyline.jpg"
  },
  {
    name: 'Serbia',
    descriptionFr: "La Serbie est célèbre pour ses fanfares de trompettes, les trubači, dont le festival de Guča attire des centaines de milliers de personnes. Goran Bregović et Emir Kusturica ont popularisé ces sons balkaniques dans le monde entier. Le turbo-folk, mélange de folk et de pop électronique, domine la musique populaire, et Belgrade a une scène techno réputée.",
    descriptionEn: "Serbia is famous for its trumpet brass bands, the trubači, whose Guča festival draws hundreds of thousands of people. Goran Bregović and Emir Kusturica made these Balkan sounds popular worldwide. Turbo-folk, a blend of folk and electronic pop, dominates popular music, and Belgrade has a renowned techno scene.",
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
    descriptionFr: "Le Monténégro a des traditions de chant épique accompagné de la gusle, un instrument à une corde. La pop adriatique y est très populaire, avec des artistes comme Sergej Ćetković. Le festival Sea Dance, sur la côte de Budva, accueille chaque été des artistes internationaux.",
    descriptionEn: "Montenegro has traditions of epic song accompanied by the gusle, a one-string instrument. Adriatic pop is very popular there, with artists such as Sergej Ćetković. The Sea Dance festival on the coast near Budva hosts international artists every summer.",
    regions: ['Podgorica', 'Kotor'],
    artists: ['Sergej Ćetković'],
    spotify: "https://open.spotify.com/search/Montenegro%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kotor_Bay_Montenegro.jpg"
  },
  {
    name: 'North Macedonia',
    descriptionFr: "La Macédoine du Nord a un folk aux rythmes asymétriques et aux fanfares tziganes, dont Esma Redžepova, la « reine de la musique rom », était la grande voix. Toše Proeski a été la plus grande star pop du pays. Le festival d'été d'Ohrid mêle musique classique, théâtre et concerts au bord du lac.",
    descriptionEn: "North Macedonia has a folk music with asymmetric rhythms and Roma brass bands, whose great voice was Esma Redžepova, the “queen of Romani music”. Toše Proeski was the country's biggest pop star. The Ohrid Summer Festival mixes classical music, theatre and concerts by the lake.",
    regions: ['Skopje', 'Ohrid'],
    artists: ['Toše Proeski'],
    spotify: "https://open.spotify.com/search/North%20Macedonia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Skopje_Skyline.jpg"
  },
  {
    name: 'Albania',
    descriptionFr: "L'Albanie est connue pour son iso-polyphonie, un chant à plusieurs voix sur un bourdon, inscrit au patrimoine de l'UNESCO. La pop et le rap albanais sont aujourd'hui très dynamiques, en Albanie comme au Kosovo et dans la diaspora. Plusieurs stars internationales, comme Dua Lipa et Rita Ora, ont des origines albanaises.",
    descriptionEn: "Albania is known for its iso-polyphony, multi-voice singing over a drone, listed by UNESCO. Albanian pop and rap are very dynamic today, in Albania as in Kosovo and the diaspora. Several international stars, such as Dua Lipa and Rita Ora, have Albanian roots.",
    regions: ['Tirana', 'Shkodër'],
    artists: ['Dua Lipa (diaspora)', 'Noizy'],
    spotify: "https://open.spotify.com/search/Albania%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Tirana_Skyline.jpg"
  },
  {
    name: 'Kosovo',
    descriptionFr: "Le Kosovo a une scène pop et rap en albanais très productive, qui rayonne dans tous les Balkans et la diaspora en Suisse et en Allemagne. Dua Lipa et Rita Ora sont nées de familles kosovares, et le festival Sunny Hill de Pristina a été fondé par la famille de Dua Lipa. Le folk local se joue à la çiftelia, un luth à deux cordes.",
    descriptionEn: "Kosovo has a very productive Albanian-language pop and rap scene that reaches the whole Balkans and the diaspora in Switzerland and Germany. Dua Lipa and Rita Ora were born to Kosovar families, and Pristina's Sunny Hill festival was founded by Dua Lipa's family. Local folk is played on the çiftelia, a two-string lute.",
    regions: ['Prishtina', 'Prizren'],
    artists: ['Rita Ora (diaspora)', 'Capital T'],
    spotify: "https://open.spotify.com/search/Kosovo%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Pristina_Skyline.jpg"
  },

  // ——— MICRO-ÉTATS EUROPÉENS ———
  {
    name: 'Andorra',
    descriptionFr: "L'Andorre, petite principauté des Pyrénées, partage les traditions musicales catalanes, comme la sardane et les chants populaires. Le pays a participé à l'Eurovision de 2004 à 2009. Le festival de jazz d'Escaldes-Engordany et les concerts d'été animent sa vie culturelle.",
    descriptionEn: "Andorra, a small principality in the Pyrenees, shares Catalan musical traditions such as the sardana and folk songs. The country took part in Eurovision from 2004 to 2009. The Escaldes-Engordany jazz festival and summer concerts drive its cultural life.",
    regions: ['Andorra la Vella'],
    artists: ['Anonymous (Eurovision)'],
    spotify: "https://open.spotify.com/search/Andorra%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Andorra_la_Vella_Skyline.jpg"
  },
  {
    name: 'Monaco',
    descriptionFr: "Monaco a une vie musicale tournée vers le classique, avec l'Orchestre philharmonique de Monte-Carlo et l'Opéra, qui a créé des œuvres de Ravel et Puccini. Les Ballets russes de Diaghilev y ont été basés au début du XXe siècle. Léo Ferré, l'un des grands noms de la chanson française, est né à Monaco.",
    descriptionEn: "Monaco's musical life is centred on classical music, with the Monte-Carlo Philharmonic Orchestra and the Opera, which premiered works by Ravel and Puccini. Diaghilev's Ballets Russes were based there in the early 20th century. Léo Ferré, one of the great names of French chanson, was born in Monaco.",
    regions: ['Monte-Carlo'],
    artists: ['Léo Ferré (lien historique)'],
    spotify: "https://open.spotify.com/search/Monaco%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Monaco_Skyline.jpg"
  },
  {
    name: 'San Marino',
    descriptionFr: "Saint-Marin, l'un des plus petits pays du monde, partage la culture musicale italienne. Sa présence internationale passe surtout par l'Eurovision, où Valentina Monetta l'a représenté quatre fois. La ville accueille des concerts et des festivals d'été dans son centre historique.",
    descriptionEn: "San Marino, one of the smallest countries in the world, shares Italy's musical culture. Its international presence comes mostly through Eurovision, where Valentina Monetta represented it four times. The town hosts concerts and summer festivals in its historic centre.",
    regions: ['Città di San Marino'],
    artists: ['Valentina Monetta'],
    spotify: "https://open.spotify.com/search/San%20Marino%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/San_Marino_Skyline.jpg"
  },
  {
    name: 'Liechtenstein',
    descriptionFr: "Le Liechtenstein, petite principauté alpine, a une vie musicale tournée vers le classique et les traditions alpines, avec ses fanfares et ses chœurs. Le compositeur Josef Rheinberger, connu pour sa musique d'orgue, y est né. Le pays n'a jamais participé à l'Eurovision, faute de radio publique membre de l'UER.",
    descriptionEn: "Liechtenstein, a small Alpine principality, has a musical life centred on classical music and Alpine traditions, with its brass bands and choirs. Composer Josef Rheinberger, known for his organ music, was born there. The country has never taken part in Eurovision, as it has no public broadcaster in the EBU.",
    regions: ['Vaduz'],
    artists: ['Elisabeth Gunawan (classique, ex.)'],
    spotify: "https://open.spotify.com/search/Liechtenstein%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Vaduz_Skyline.jpg"
  },
  {
    name: 'Vatican City',
    descriptionFr: "Le Vatican est le centre de la musique sacrée catholique, et le chant grégorien y reste la tradition de référence. Le Chœur de la Chapelle Sixtine, l'un des plus anciens chœurs du monde, accompagne les cérémonies du pape. Palestrina, maître de la polyphonie de la Renaissance, y a composé une grande partie de son œuvre.",
    descriptionEn: "The Vatican is the centre of Catholic sacred music, and Gregorian chant remains its reference tradition. The Sistine Chapel Choir, one of the oldest choirs in the world, accompanies papal ceremonies. Palestrina, master of Renaissance polyphony, composed much of his work there.",
    regions: ['Città del Vaticano'],
    artists: ['Chœur de la Chapelle Sixtine'],
    spotify: "https://open.spotify.com/search/Vatican%20choir",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Vatican_City_Skyline.jpg"
  },

  // ——— TURQUIE ———
  {
    name: 'Turkey',
    descriptionFr: "La Turquie se trouve au carrefour de l'Orient et de l'Occident : musique classique ottomane, folk anatolien joué au saz (bağlama) et chants soufis. Dans les années 1960-1970, le rock anatolien de Barış Manço, Erkin Koray et Selda Bağcan a mêlé folk et guitares psychédéliques. L'arabesk, mélodramatique, et la pop turque de Sezen Aksu et Tarkan dominent la musique populaire.",
    descriptionEn: "Turkey sits at the crossroads of East and West: Ottoman classical music, Anatolian folk played on the saz (bağlama) and Sufi chants. In the 1960s and 1970s, the Anatolian rock of Barış Manço, Erkin Koray and Selda Bağcan blended folk with psychedelic guitars. Melodramatic arabesk and the Turkish pop of Sezen Aksu and Tarkan dominate popular music.",
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
    descriptionFr: "Israël mêle les traditions musicales des communautés venues du monde entier : chants ashkénazes, séfarades et yéménites. La musique mizrahi, aux influences arabes et grecques, est devenue la plus populaire, avec Eyal Golan et Omer Adam. Le pays est aussi une référence de la trance psychédélique, avec Infected Mushroom, et Tel Aviv a une scène électronique et indie très active, dont fait partie Noga Erez.",
    descriptionEn: "Israel blends the musical traditions of communities from all over the world: Ashkenazi, Sephardic and Yemenite song. Mizrahi music, with Arabic and Greek influences, has become the most popular, with Eyal Golan and Omer Adam. The country is also a reference for psychedelic trance, with Infected Mushroom, and Tel Aviv has a very active electronic and indie scene that includes Noga Erez.",
    regions: ['Tel Aviv', 'Jerusalem', 'Haifa'],
    artists: ['Infected Mushroom', 'Eyal Golan', 'Noga Erez'],
    spotify: "https://open.spotify.com/search/israel%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Tel_Aviv_Skyline.jpg"
  },
  {
    name: 'Palestine',
    descriptionFr: "La musique palestinienne est marquée par la dabke, danse en ligne des fêtes et des mariages, et par l'oud, que Le Trio Joubran porte sur les scènes internationales. Le groupe DAM, de Lod, a été l'un des pionniers du rap en arabe. Ramallah et Haïfa ont aujourd'hui une scène indie et électronique en plein essor.",
    descriptionEn: "Palestinian music is marked by dabke, the line dance of celebrations and weddings, and by the oud, which Le Trio Joubran takes to international stages. The group DAM, from Lod, was one of the pioneers of Arabic-language rap. Ramallah and Haifa now have a growing indie and electronic scene.",
    regions: ['Ramallah', 'Gaza', 'Bethlehem'],
    artists: ['DAM', 'Le Trio Joubran'],
    spotify: "https://open.spotify.com/search/palestinian%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ramallah_skyline.jpg"
  },
  {
    name: 'Lebanon',
    descriptionFr: "Le Liban a donné au monde arabe certaines de ses plus grandes voix : Fairuz, accompagnée des compositions des frères Rahbani, est une icône dans toute la région. Beyrouth a longtemps été la capitale de la pop arabe, avec Wadih El Safi, puis Nancy Ajram. Mashrou' Leila a incarné une nouvelle scène indie arabe, libre et engagée.",
    descriptionEn: "Lebanon gave the Arab world some of its greatest voices: Fairuz, with songs by the Rahbani brothers, is an icon across the region. Beirut was long the capital of Arab pop, with Wadih El Safi and later Nancy Ajram. Mashrou' Leila embodied a new, free and outspoken Arab indie scene.",
    regions: ['Beirut', 'Tripoli'],
    artists: ["Fairuz", "Mashrou' Leila"],
    spotify: "https://open.spotify.com/search/lebanon%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Beirut_Skyline.jpg"
  },
  {
    name: 'Syria',
    descriptionFr: "La Syrie a une longue tradition de musique savante arabe : Alep est célèbre pour ses muwashshahat et ses qudud, chantés par Sabah Fakhri. La dabke est la musique des mariages et des fêtes. Omar Souleyman a fait connaître la dabke électronique des mariages syriens sur les scènes de festivals du monde entier.",
    descriptionEn: "Syria has a long tradition of Arab art music: Aleppo is famous for its muwashshahat and qudud, sung by Sabah Fakhri. Dabke is the music of weddings and celebrations. Omar Souleyman took the electronic dabke of Syrian weddings to festival stages around the world.",
    regions: ['Damascus', 'Aleppo'],
    artists: ['Omar Souleyman', 'Sabah Fakhri'],
    spotify: "https://open.spotify.com/search/syrian%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Damascus_Skyline.jpg"
  },
  {
    name: 'Jordan',
    descriptionFr: "La Jordanie partage la dabke et les traditions bédouines, avec la rababa, un violon à une corde. Amman a vu naître une scène indie et rock arabe, avec des groupes comme El Morabba3 et Autostrad. La pop arabe et le rap en arabe y sont aujourd'hui très écoutés.",
    descriptionEn: "Jordan shares dabke and Bedouin traditions, with the rababa, a one-string fiddle. Amman gave rise to an Arab indie and rock scene, with bands such as El Morabba3 and Autostrad. Arab pop and Arabic-language rap are widely streamed there today.",
    regions: ['Amman', 'Irbid'],
    artists: ['Ayloul'],
    spotify: "https://open.spotify.com/search/jordan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Amman_Skyline.jpg"
  },
  {
    name: 'Iraq',
    descriptionFr: "L'Irak est le pays du maqâm irakien, une musique savante inscrite au patrimoine de l'UNESCO, et de grands joueurs d'oud comme Munir Bashir et Naseer Shamma. Kazem El Saher est l'une des plus grandes stars de la chanson arabe. La musique kurde, au nord, et la pop et le rap irakiens actuels complètent un paysage très riche.",
    descriptionEn: "Iraq is the land of the Iraqi maqam, an art music listed by UNESCO, and of great oud players such as Munir Bashir and Naseer Shamma. Kazem El Saher is one of the biggest stars of Arab song. Kurdish music in the north, and today's Iraqi pop and rap, complete a very rich picture.",
    regions: ['Baghdad', 'Basra', 'Erbil'],
    artists: ['Ilham al-Madfai'],
    spotify: "https://open.spotify.com/search/iraqi%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Baghdad_Skyline.jpg"
  },
  {
    name: 'Iran',
    descriptionFr: "La musique classique persane est organisée en dastgâh, des systèmes modaux joués au târ, au setâr et au santour ; Mohammad-Reza Shajarian en a été la grande voix. Avant 1979, Googoosh était la plus grande star pop du pays, et une partie de cette scène s'est ensuite développée en exil à Los Angeles. Malgré les restrictions, Téhéran a une scène rock, rap et électronique underground active.",
    descriptionEn: "Persian classical music is organised in dastgah, modal systems played on the tar, setar and santur; Mohammad-Reza Shajarian was its great voice. Before 1979 Googoosh was the country's biggest pop star, and part of that scene later developed in exile in Los Angeles. Despite restrictions, Tehran has an active underground rock, rap and electronic scene.",
    regions: ['Tehran', 'Isfahan', 'Shiraz'],
    artists: ['Shajarian', 'Googoosh', 'Kiosk'],
    spotify: "https://open.spotify.com/search/iranian%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Tehran_Skyline.jpg"
  },
  {
    name: 'Saudi Arabia',
    descriptionFr: "L'Arabie saoudite partage la musique khaleeji du Golfe, avec ses rythmes de percussions et son oud ; Mohammed Abdu en est la légende vivante. Les traditions bédouines et la danse ardah, avec épées et tambours, font partie du patrimoine national. Depuis 2019, de grands festivals comme MDLBEAST à Riyad ont ouvert le pays à la musique électronique et aux concerts internationaux.",
    descriptionEn: "Saudi Arabia shares the khaleeji music of the Gulf, with its percussion rhythms and oud; Mohammed Abdu is its living legend. Bedouin traditions and the ardah dance, with swords and drums, are part of the national heritage. Since 2019, large festivals such as MDLBEAST in Riyadh have opened the country to electronic music and international concerts.",
    regions: ['Riyadh', 'Jeddah', 'Dammam'],
    artists: ['Mohammed Abdu'],
    spotify: "https://open.spotify.com/search/saudi%20arabia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Riyadh_skyline.jpg"
  },
  {
    name: 'United Arab Emirates',
    descriptionFr: "Les Émirats arabes unis ont une tradition de musique khaleeji et de chants de pêcheurs de perles, ainsi que la danse ayyala, inscrite au patrimoine de l'UNESCO. Dubaï et Abou Dhabi sont devenues des étapes majeures des tournées internationales et de la scène club, avec des DJ comme DJ Bliss. Hussain Al Jassmi est l'une des grandes voix de la pop du Golfe.",
    descriptionEn: "The United Arab Emirates has a tradition of khaleeji music and pearl-divers' songs, as well as the ayyala dance listed by UNESCO. Dubai and Abu Dhabi have become major stops for international tours and the club scene, with DJs such as DJ Bliss. Hussain Al Jassmi is one of the great voices of Gulf pop.",
    regions: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    artists: ['DJ Bliss'],
    spotify: "https://open.spotify.com/search/uae%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Dubai_Skyline_2015.jpg"
  },
  {
    name: 'Qatar',
    descriptionFr: "Le Qatar partage la musique khaleeji et les chants traditionnels des pêcheurs de perles, accompagnés de percussions et de claquements de mains. La danse ardah y est jouée lors des fêtes nationales. Doha investit dans la culture, avec un orchestre philharmonique et de grands concerts internationaux.",
    descriptionEn: "Qatar shares khaleeji music and the traditional songs of pearl divers, accompanied by percussion and hand-clapping. The ardah dance is performed on national holidays. Doha invests in culture, with a philharmonic orchestra and large international concerts.",
    regions: ['Doha'],
    artists: [],
    spotify: "https://open.spotify.com/search/qatar%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Doha_Skyline.jpg"
  },
  {
    name: 'Bahrain',
    descriptionFr: "Bahreïn a une tradition très vivante de fijiri, les chants des pêcheurs de perles, accompagnés de tambours et de jarres en terre cuite. Le pays partage la musique khaleeji du Golfe, jouée à l'oud. Manama accueille un festival international de musique chaque automne.",
    descriptionEn: "Bahrain has a very lively tradition of fijiri, the songs of pearl divers, accompanied by drums and clay pots. The country shares the khaleeji music of the Gulf, played on the oud. Manama hosts an international music festival every autumn.",
    regions: ['Manama'],
    artists: [],
    spotify: "https://open.spotify.com/search/bahrain%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Manama_skyline.jpg"
  },
  {
    name: 'Kuwait',
    descriptionFr: "Le Koweït a été un centre majeur de la chanson khaleeji, et ses premiers studios d'enregistrement ont joué un rôle clé dans la diffusion de cette musique dans le Golfe. Nawal El Kuwaitia est l'une des grandes voix du pays. Les chants de pêcheurs de perles et les percussions du Golfe font partie de son patrimoine.",
    descriptionEn: "Kuwait was a major centre of khaleeji song, and its early recording studios played a key role in spreading this music across the Gulf. Nawal El Kuwaitia is one of the country's great voices. Pearl divers' songs and Gulf percussion are part of its heritage.",
    regions: ['Kuwait City'],
    artists: ['Nawal El Kuwaitia'],
    spotify: "https://open.spotify.com/search/kuwait%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Kuwait_City_Skyline.jpg"
  },
  {
    name: 'Oman',
    descriptionFr: "Oman a une musique très diverse, influencée par l'Afrique de l'Est, l'Inde et le Golfe, du fait de son histoire maritime et de ses liens avec Zanzibar. La région du Dhofar, autour de Salalah, a ses propres danses et chants. L'Opéra royal de Mascate, ouvert en 2011, accueille des artistes du monde entier.",
    descriptionEn: "Oman has a very diverse music influenced by East Africa, India and the Gulf, thanks to its maritime history and ties with Zanzibar. The Dhofar region around Salalah has its own dances and songs. The Royal Opera House Muscat, opened in 2011, hosts artists from all over the world.",
    regions: ['Muscat', 'Salalah'],
    artists: [],
    spotify: "https://open.spotify.com/search/oman%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Muscat_Skyline.jpg"
  },
  {
    name: 'Yemen',
    descriptionFr: "Le Yémen a l'une des plus anciennes traditions de chant de la péninsule arabique : le chant de Sanaa, accompagné d'un luth et d'un plateau de cuivre, est inscrit au patrimoine de l'UNESCO. Le Hadramaout a son propre style, porté par Abu Bakr Salem. Des chanteurs juifs d'origine yéménite, comme Ofra Haza, ont fait connaître ces mélodies dans le monde.",
    descriptionEn: "Yemen has one of the oldest song traditions on the Arabian Peninsula: the song of Sana'a, accompanied by a lute and a copper tray, is listed by UNESCO. Hadramawt has its own style, carried by Abu Bakr Salem. Jewish singers of Yemeni origin, such as Ofra Haza, took these melodies around the world.",
    regions: ["Sana'a", 'Aden', 'Mukalla'],
    artists: ['Abu Bakr Salem'],
    spotify: "https://open.spotify.com/search/yemen%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Sanaa_Skyline.jpg"
  },
  {
    name: 'Armenia',
    descriptionFr: "Le doudouk, une flûte en bois d'abricotier au son très doux, est l'emblème de la musique arménienne ; Djivan Gasparyan l'a fait connaître au cinéma et dans le monde entier. Komitas a collecté le folk arménien au début du XXe siècle et posé les bases de la musique classique nationale. Le pays a aussi une scène jazz réputée et des stars de la diaspora, comme System of a Down.",
    descriptionEn: "The duduk, an apricot-wood flute with a very soft tone, is the emblem of Armenian music; Djivan Gasparyan made it famous in film and worldwide. Komitas collected Armenian folk music in the early 20th century and laid the foundations of national classical music. The country also has a renowned jazz scene and diaspora stars such as System of a Down.",
    regions: ['Yerevan', 'Gyumri'],
    artists: ['Jivan Gasparyan'],
    spotify: "https://open.spotify.com/search/armenia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Yerevan_Skyline.jpg"
  },
  {
    name: 'Azerbaijan',
    descriptionFr: "Le mugham, musique modale improvisée jouée au tar et au kamantcha, est le cœur de la musique azerbaïdjanaise et est inscrit au patrimoine de l'UNESCO ; Alim Qasimov en est le grand maître. Dans les années 1950, Vagif Mustafazadeh a inventé le jazz-mugham, une fusion unique. Bakou a gagné l'Eurovision en 2011 et accueille un festival de jazz réputé.",
    descriptionEn: "Mugham, an improvised modal music played on the tar and kamancha, is the heart of Azerbaijani music and is listed by UNESCO; Alim Qasimov is its great master. In the 1950s Vagif Mustafazadeh invented jazz-mugham, a unique fusion. Azerbaijan won Eurovision in 2011, and Baku hosts a renowned jazz festival.",
    regions: ['Baku', 'Ganja'],
    artists: ['Alim Qasimov'],
    spotify: "https://open.spotify.com/search/azerbaijan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Baku_Skyline.jpg"
  },
  {
    name: 'Georgia',
    descriptionFr: "La Géorgie est célèbre pour sa polyphonie vocale à trois voix, l'une des plus anciennes du monde, inscrite au patrimoine de l'UNESCO ; le Rustavi Choir en est l'ambassadeur. Chaque région a son style, des chants de table de Kakhétie aux polyphonies complexes de Svanétie. Tbilissi est aujourd'hui une destination majeure de la techno, avec des clubs comme Bassiani.",
    descriptionEn: "Georgia is famous for its three-part vocal polyphony, one of the oldest in the world and listed by UNESCO; the Rustavi Choir is its ambassador. Each region has its own style, from the table songs of Kakheti to the complex polyphony of Svaneti. Tbilisi is now a major techno destination, with clubs such as Bassiani.",
    regions: ['Tbilisi', 'Batumi'],
    artists: ['Rustavi Choir', 'Katie Melua'],
    spotify: "https://open.spotify.com/search/georgia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tbilisi_Skyline.jpg"
  },

  // ——— ASIE CENTRALE ———
  {
    name: 'Kazakhstan',
    descriptionFr: "La dombra, un luth à deux cordes, est l'instrument national du Kazakhstan, et le kuï, pièce instrumentale qui raconte une histoire, en est la forme classique. Dimash Kudaibergen, à la voix d'une étendue exceptionnelle, est devenu une star dans toute l'Asie. La Q-pop, avec le groupe Ninety One, et le hip-hop kazakh connaissent un fort succès auprès des jeunes.",
    descriptionEn: "The dombra, a two-string lute, is Kazakhstan's national instrument, and the kui, an instrumental piece that tells a story, is its classic form. Dimash Kudaibergen, with an exceptional vocal range, has become a star across Asia. Q-pop, with the group Ninety One, and Kazakh hip-hop are hugely popular with young people.",
    regions: ['Almaty', 'Astana'],
    artists: ['Ninety One', 'Dimash Kudaibergen'],
    spotify: "https://open.spotify.com/search/kazakhstan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Almaty_skyline.jpg"
  },
  {
    name: 'Uzbekistan',
    descriptionFr: "L'Ouzbékistan partage avec le Tadjikistan le shashmaqam, un grand répertoire de musique savante né dans les cours de Boukhara. Samarcande accueille le festival Sharq Taronalari, consacré aux musiques d'Orient. Sevara Nazarkhan a fait connaître une pop ouzbèke aux couleurs traditionnelles à l'international.",
    descriptionEn: "Uzbekistan shares the shashmaqam with Tajikistan, a great art-music repertoire born in the courts of Bukhara. Samarkand hosts the Sharq Taronalari festival, dedicated to the music of the East. Sevara Nazarkhan took an Uzbek pop with traditional colours to international audiences.",
    regions: ['Tashkent', 'Bukhara', 'Samarkand'],
    artists: [],
    spotify: "https://open.spotify.com/search/uzbekistan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Registan_Samarqand.jpg"
  },
  {
    name: 'Kyrgyzstan',
    descriptionFr: "Le komuz, un luth à trois cordes, est l'instrument national du Kirghizistan. Le pays garde la tradition de l'épopée de Manas, l'un des plus longs poèmes épiques du monde, récitée par des conteurs appelés manaschi. La pop et le rap kirghizes se développent à Bichkek.",
    descriptionEn: "The komuz, a three-string lute, is Kyrgyzstan's national instrument. The country keeps the tradition of the Epic of Manas, one of the longest epic poems in the world, recited by storytellers called manaschi. Kyrgyz pop and rap are developing in Bishkek.",
    regions: ['Bishkek', 'Osh'],
    artists: [],
    spotify: "https://open.spotify.com/search/kyrgyz%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Bishkek_Ala-Too_Square.jpg"
  },
  {
    name: 'Tajikistan',
    descriptionFr: "Le Tadjikistan partage le shashmaqam avec l'Ouzbékistan et a une forte tradition de musique persanophone. Les montagnes du Pamir ont leurs propres chants religieux et le rubab pamiri. La pop tadjike, chantée en tadjik, est très écoutée en Asie centrale et en Afghanistan.",
    descriptionEn: "Tajikistan shares the shashmaqam with Uzbekistan and has a strong tradition of Persian-language music. The Pamir mountains have their own devotional songs and the Pamiri rubab. Tajik pop, sung in Tajik, is widely heard in Central Asia and Afghanistan.",
    regions: ['Dushanbe', 'Khorog'],
    artists: [],
    spotify: "https://open.spotify.com/search/tajikistan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Dushanbe_Skyline.jpg"
  },
  {
    name: 'Turkmenistan',
    descriptionFr: "Le Turkménistan a une tradition de bakhshi, des musiciens-conteurs qui chantent l'épopée en s'accompagnant au dutar, un luth à deux cordes. Cet art, inscrit au patrimoine de l'UNESCO, se transmet de maître à élève. La musique de cour et les chants de mariage complètent un patrimoine lié à la culture des steppes.",
    descriptionEn: "Turkmenistan has a tradition of bakhshi, musician-storytellers who sing epics while accompanying themselves on the dutar, a two-string lute. This art, listed by UNESCO, is passed down from master to pupil. Court music and wedding songs complete a heritage tied to steppe culture.",
    regions: ['Ashgabat', 'Mary'],
    artists: [],
    spotify: "https://open.spotify.com/search/turkmen%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Ashgabat_Skyline.jpg"
  },
  {
    name: 'Afghanistan',
    descriptionFr: "Le rubab, un luth à cordes sympathiques, est l'instrument national de l'Afghanistan, et Ustad Mohammad Omar en a été le grand maître. Le pays a une riche tradition de ghazal et de chant classique influencé par la musique indienne, avec Ahmad Zahir comme figure légendaire. Depuis 2021, la musique est interdite en public et une grande partie de la scène vit en exil, comme Qais Essar.",
    descriptionEn: "The rubab, a lute with sympathetic strings, is Afghanistan's national instrument, and Ustad Mohammad Omar was its great master. The country has a rich tradition of ghazal and classical song influenced by Indian music, with Ahmad Zahir as a legendary figure. Since 2021 public music has been banned and much of the scene lives in exile, like Qais Essar.",
    regions: ['Kabul', 'Herat', 'Mazar-i-Sharif'],
    artists: ['Ustad Mohammad Omar', 'Qais Essar'],
    spotify: "https://open.spotify.com/search/afghanistan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kabul_skyline.jpg"
  },
// ——— ASIE DE L'EST ———
  {
    name: 'Japan',
    descriptionFr: "Le Japon est le deuxième marché de la musique au monde. Il a ses traditions (gagaku de cour, shamisen, koto, enka mélancolique) et une pop très inventive : la city pop des années 1980, avec Tatsuro Yamashita, est redécouverte en ligne, et la J-pop, de Hikaru Utada aux musiques d'anime, s'exporte partout. Yellow Magic Orchestra a été un pionnier de l'électronique, et le Japon a aussi une scène noise et rock expérimental réputée.",
    descriptionEn: "Japan is the world's second-largest music market. It has its traditions (gagaku court music, shamisen, koto, melancholic enka) and a very inventive pop scene: 1980s city pop, with Tatsuro Yamashita, has been rediscovered online, and J-pop, from Hikaru Utada to anime soundtracks, is exported everywhere. Yellow Magic Orchestra pioneered electronic music, and Japan also has a renowned noise and experimental rock scene.",
    regions: ['Tokyo', 'Osaka', 'Kyoto'],
    artists: ['Hikaru Utada', 'Tatsuro Yamashita'],
    spotify: "https://open.spotify.com/search/japan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Tokyo_Tower_and_around_Skyscrapers.jpg"
  },
  {
    name: 'South Korea',
    descriptionFr: "La Corée du Sud a fait de la K-pop un phénomène mondial, de BTS à BLACKPINK, avec un système de formation des artistes très structuré. Le pays a aussi un hip-hop et un R&B coréens très inventifs, avec Epik High, et le trot, chanson populaire plus ancienne, revient en force. Le pansori, chant narratif accompagné d'un tambour, est inscrit au patrimoine de l'UNESCO.",
    descriptionEn: "South Korea turned K-pop into a global phenomenon, from BTS to BLACKPINK, with a highly structured artist-training system. The country also has very inventive Korean hip-hop and R&B, with Epik High, and trot, an older popular song style, is making a strong comeback. Pansori, narrative singing accompanied by a drum, is listed by UNESCO.",
    regions: ['Seoul', 'Busan'],
    artists: ['BTS', 'BLACKPINK', 'Epik High'],
    spotify: "https://open.spotify.com/search/korea%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Seoul_Skyline_2019.jpg"
  },
  {
    name: 'China',
    descriptionFr: "La Chine a des traditions millénaires : le guqin, cithare des lettrés, le guzheng, le pipa et l'opéra de Pékin. La mandopop domine la musique populaire, portée par des stars venues aussi de Taïwan et Hong Kong, comme Faye Wong. Cui Jian est considéré comme le père du rock chinois, et Pékin et Chengdu ont aujourd'hui des scènes rap et indie très vivantes.",
    descriptionEn: "China has ancient traditions: the guqin, the scholar's zither, the guzheng, the pipa and Peking opera. Mandopop dominates popular music, carried by stars who also come from Taiwan and Hong Kong, such as Faye Wong. Cui Jian is seen as the father of Chinese rock, and Beijing and Chengdu now have very lively rap and indie scenes.",
    regions: ['Beijing', 'Shanghai', 'Chengdu'],
    artists: ['Faye Wong', 'Cui Jian'],
    spotify: "https://open.spotify.com/search/china%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Shanghai_Skyline%2C_2017.jpg"
  },
  {
    name: 'Hong Kong',
    descriptionFr: "Hong Kong est le berceau de la cantopop, la pop chantée en cantonais, qui a dominé l'Asie de l'Est dans les années 1980-1990 avec Leslie Cheung, Anita Mui et les « Quatre Rois Célestes ». Elle est étroitement liée au cinéma hongkongais, dont les stars étaient souvent aussi chanteurs. Eason Chan en est l'une des grandes voix actuelles, et une scène indie locale s'est développée.",
    descriptionEn: "Hong Kong is the birthplace of Cantopop, pop sung in Cantonese, which dominated East Asia in the 1980s and 1990s with Leslie Cheung, Anita Mui and the “Four Heavenly Kings”. It is closely tied to Hong Kong cinema, whose stars were often singers too. Eason Chan is one of its great voices today, and a local indie scene has grown.",
    regions: ['Hong Kong Island', 'Kowloon'],
    artists: ['Leslie Cheung', 'Eason Chan'],
    spotify: "https://open.spotify.com/search/hong%20kong%20cantopop",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hong_Kong_Skyline_Restitch_-_Dec_2007.jpg"
  },
  {
    name: 'Taiwan',
    descriptionFr: "Taïwan est l'un des grands centres de la mandopop : Teresa Teng y a marqué toute l'Asie, puis Jay Chou et Jolin Tsai ont dominé les années 2000. L'île a aussi une scène indie et rock très active, avec Mayday et le festival Spring Scream. Les peuples autochtones de Taïwan ont leurs propres traditions de chant polyphonique.",
    descriptionEn: "Taiwan is one of the great centres of Mandopop: Teresa Teng left her mark on all of Asia, then Jay Chou and Jolin Tsai dominated the 2000s. The island also has a very active indie and rock scene, with Mayday and the Spring Scream festival. Taiwan's Indigenous peoples have their own polyphonic singing traditions.",
    regions: ['Taipei', 'Kaohsiung'],
    artists: ['Jay Chou', 'Jolin Tsai'],
    spotify: "https://open.spotify.com/search/taiwan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Taipei_101_2020.jpg"
  },
  {
    name: 'Mongolia',
    descriptionFr: "La Mongolie est le pays du khoomei, le chant diphonique où un seul chanteur produit deux sons à la fois, et du morin khuur, la vièle à tête de cheval. Le long chant (urtiin duu) est inscrit au patrimoine de l'UNESCO. Le groupe The HU a fait connaître dans le monde entier son « hunnu rock », qui mêle ces traditions au metal.",
    descriptionEn: "Mongolia is the land of khoomei, throat singing in which a single singer produces two notes at once, and of the morin khuur, the horsehead fiddle. Long song (urtiin duu) is listed by UNESCO. The band The HU took its “hunnu rock”, which blends these traditions with metal, around the world.",
    regions: ['Ulaanbaatar'],
    artists: ['The HU'],
    spotify: "https://open.spotify.com/search/mongolia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Ulaanbaatar_skyline.jpg"
  },

  // ——— ASIE DU SUD ———
  {
    name: 'India',
    descriptionFr: "L'Inde a deux grandes traditions classiques : la musique hindoustanie du nord, jouée au sitar et au tabla (Ravi Shankar), et la musique carnatique du sud. Bollywood et le cinéma indien produisent la musique populaire la plus écoutée du pays, avec des compositeurs comme A. R. Rahman. Le bhangra du Pendjab, le qawwali et une scène indie et hip-hop en plein essor complètent un paysage immense.",
    descriptionEn: "India has two great classical traditions: the Hindustani music of the north, played on sitar and tabla (Ravi Shankar), and the Carnatic music of the south. Bollywood and Indian cinema produce the country's most popular music, with composers such as A. R. Rahman. Punjabi bhangra, qawwali and a booming indie and hip-hop scene complete an immense picture.",
    regions: ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'],
    artists: ['AR Rahman', 'Ravi Shankar'],
    spotify: "https://open.spotify.com/search/india%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mumbai_Skyline_at_Night.jpg"
  },
  {
    name: 'Pakistan',
    descriptionFr: "Le qawwali, chant soufi de dévotion, a été porté au monde par Nusrat Fateh Ali Khan, l'une des plus grandes voix du XXe siècle. Le Pakistan a aussi une tradition de ghazal et de musique classique partagée avec l'Inde. L'émission Coke Studio, lancée en 2008, a mêlé folk, soufi et pop et révélé des artistes comme Atif Aslam et Ali Sethi.",
    descriptionEn: "Qawwali, devotional Sufi song, was carried to the world by Nusrat Fateh Ali Khan, one of the greatest voices of the 20th century. Pakistan also has a ghazal and classical-music tradition shared with India. The Coke Studio show, launched in 2008, blended folk, Sufi and pop and revealed artists such as Atif Aslam and Ali Sethi.",
    regions: ['Lahore', 'Karachi', 'Islamabad'],
    artists: ['Nusrat Fateh Ali Khan', 'Atif Aslam'],
    spotify: "https://open.spotify.com/search/pakistan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Badshahi_Masjid_Sunset.jpg"
  },
  {
    name: 'Bangladesh',
    descriptionFr: "Les Bauls, ménestrels mystiques du Bengale, chantent une musique spirituelle inscrite au patrimoine de l'UNESCO ; Lalon Shah en est le grand poète. Le Rabindra Sangeet, les chansons de Rabindranath Tagore, est au cœur de la culture bengalie. Dhaka a une scène rock et pop active depuis les années 1980.",
    descriptionEn: "The Bauls, mystic minstrels of Bengal, sing a spiritual music listed by UNESCO; Lalon Shah is its great poet. Rabindra Sangeet, the songs of Rabindranath Tagore, is at the heart of Bengali culture. Dhaka has had an active rock and pop scene since the 1980s.",
    regions: ['Dhaka', 'Chittagong'],
    artists: ['Purna Das Baul'],
    spotify: "https://open.spotify.com/search/bangladesh%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dhaka_Skyline.jpg"
  },
  {
    name: 'Sri Lanka',
    descriptionFr: "La baila, musique de fête née des influences portugaises et africaines, est la grande musique populaire du Sri Lanka. Le pays a une tradition de percussions, avec les tambours de Kandy, et de musique classique cinghalaise, dont W. D. Amaradeva a été le grand maître. M.I.A., star internationale du rap, a des origines tamoules sri-lankaises.",
    descriptionEn: "Baila, a party music born of Portuguese and African influences, is Sri Lanka's great popular music. The country has a percussion tradition, with the Kandyan drums, and Sinhala classical music, whose great master was W. D. Amaradeva. M.I.A., an international rap star, has Sri Lankan Tamil roots.",
    regions: ['Colombo', 'Kandy'],
    artists: ['W.D. Amaradeva'],
    spotify: "https://open.spotify.com/search/sri%20lanka%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Colombo_Skyline.jpg"
  },
  {
    name: 'Nepal',
    descriptionFr: "Le Népal a une musique folk très variée selon ses ethnies, jouée au sarangi et au madal, un tambour à deux faces. Le groupe Kutumba modernise ces instruments traditionnels. Katmandou a une scène rock et pop népalaise active, et la musique rituelle bouddhiste et hindoue est présente dans les temples.",
    descriptionEn: "Nepal has a folk music that varies widely by ethnic group, played on the sarangi and the madal, a two-headed drum. The band Kutumba modernises these traditional instruments. Kathmandu has an active Nepali rock and pop scene, and Buddhist and Hindu ritual music fills the temples.",
    regions: ['Kathmandu', 'Pokhara'],
    artists: ['Kutumba'],
    spotify: "https://open.spotify.com/search/nepal%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Kathmandu_skyline.jpg"
  },
  {
    name: 'Bhutan',
    descriptionFr: "Le Bhoutan garde des traditions musicales bouddhistes, avec les danses masquées des festivals tsechu accompagnées de trompes et de cymbales. Le dranyen, un luth, accompagne les chants folk zhungdra et boedra. Le rigsar, pop bhoutanaise moderne, est très populaire à Thimphou.",
    descriptionEn: "Bhutan keeps Buddhist musical traditions, with the masked dances of tsechu festivals accompanied by horns and cymbals. The dranyen, a lute, accompanies zhungdra and boedra folk songs. Rigsar, modern Bhutanese pop, is very popular in Thimphu.",
    regions: ['Thimphu', 'Paro'],
    artists: [],
    spotify: "https://open.spotify.com/search/bhutan%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Thimphu_Skyline.jpg"
  },
  {
    name: 'Maldives',
    descriptionFr: "Le boduberu, joué sur de grands tambours avec un chanteur, est la musique traditionnelle des Maldives ; il serait né de l'influence de marins d'Afrique de l'Est. Le rythme s'accélère jusqu'à faire danser tout le public. La pop maldivienne, chantée en divehi, est influencée par la musique de Bollywood.",
    descriptionEn: "Boduberu, played on large drums with a singer, is the traditional music of the Maldives, thought to come from the influence of East African sailors. The rhythm speeds up until the whole audience dances. Maldivian pop, sung in Dhivehi, is influenced by Bollywood music.",
    regions: ['Malé'],
    artists: [],
    spotify: "https://open.spotify.com/search/maldives%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Male%2C_Maldives.jpg"
  },

  // ——— ASIE DU SUD-EST ———
  {
    name: 'Indonesia',
    descriptionFr: "L'Indonésie est le pays du gamelan, des ensembles de gongs et de métallophones, avec des styles très différents à Java et à Bali. Le dangdut, mélange de musique malaise, indienne et arabe, est la musique populaire la plus écoutée, et Rhoma Irama en est le roi. Le kroncong, aux influences portugaises, et une scène pop, rock et metal très vivante complètent le paysage.",
    descriptionEn: "Indonesia is the land of the gamelan, ensembles of gongs and metallophones, with very different styles in Java and Bali. Dangdut, a blend of Malay, Indian and Arabic music, is the most popular music, and Rhoma Irama is its king. Kroncong, with Portuguese influences, and a very lively pop, rock and metal scene complete the picture.",
    regions: ['Jakarta', 'Yogyakarta', 'Bali'],
    artists: ['Rhoma Irama', 'Gamelan Gong Kebyar'],
    spotify: "https://open.spotify.com/search/indonesia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Jakarta_Skyline_Part_2.jpg"
  },
  {
    name: 'Malaysia',
    descriptionFr: "La Malaisie mêle les traditions malaises, chinoises et indiennes. La musique malaise comprend le joget, danse aux influences portugaises, et le ghazal de Johor ; le nasyid, chant religieux, a été popularisé par Raihan. Yuna, chanteuse de R&B, a fait carrière aux États-Unis, et Siti Nurhaliza est l'une des plus grandes stars de la pop malaise.",
    descriptionEn: "Malaysia blends Malay, Chinese and Indian traditions. Malay music includes joget, a dance with Portuguese influences, and Johor ghazal; nasyid, a religious song form, was popularised by Raihan. R&B singer Yuna built a career in the US, and Siti Nurhaliza is one of the biggest stars of Malay pop.",
    regions: ['Kuala Lumpur', 'Penang'],
    artists: ['Yuna', 'Raihan'],
    spotify: "https://open.spotify.com/search/malaysia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/KL_Skyline_Petronas.jpg"
  },
  {
    name: 'Singapore',
    descriptionFr: "Singapour est un carrefour de cultures chinoise, malaise et indienne, et sa scène reflète cette diversité. Des chanteurs comme JJ Lin et Stefanie Sun sont des stars de la mandopop dans toute l'Asie. La ville a une scène indie, électronique et jazz active, et accueille de grands festivals internationaux.",
    descriptionEn: "Singapore is a crossroads of Chinese, Malay and Indian cultures, and its scene reflects that diversity. Singers such as JJ Lin and Stefanie Sun are Mandopop stars across Asia. The city has an active indie, electronic and jazz scene and hosts major international festivals.",
    regions: ['Singapore'],
    artists: ['JJ Lin'],
    spotify: "https://open.spotify.com/search/singapore%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Singapore_skyline.jpg"
  },
  {
    name: 'Philippines',
    descriptionFr: "L'OPM (Original Pilipino Music) désigne la pop philippine, des ballades aux groupes rock comme les Eraserheads, surnommés les « Beatles philippins ». Le kundiman, chanson d'amour lyrique, est la grande forme traditionnelle. Le karaoké est une institution nationale, et les Philippines produisent de grandes voix, de Lea Salonga au groupe Ben&Ben et à la P-pop actuelle.",
    descriptionEn: "OPM (Original Pilipino Music) is Filipino pop, from ballads to rock bands like the Eraserheads, nicknamed the “Filipino Beatles”. Kundiman, a lyrical love song, is the great traditional form. Karaoke is a national institution, and the Philippines produces great voices, from Lea Salonga to the band Ben&Ben and today's P-pop.",
    regions: ['Manila', 'Cebu', 'Davao'],
    artists: ['Eraserheads', "Ben&Ben"],
    spotify: "https://open.spotify.com/search/philippines%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Manila_Skyline_View.jpg"
  },
  {
    name: 'Thailand',
    descriptionFr: "La Thaïlande a deux grandes musiques populaires rurales : le luk thung, ballades de campagne dont Pumpuang Duangjan est la reine, et le mor lam de l'Isan, joué au khene, un orgue à bouche en bambou. La musique classique thaïe se joue avec des ensembles de percussions et de xylophones. La T-pop moderne, avec des groupes comme Tilly Birds, gagne en popularité.",
    descriptionEn: "Thailand has two great rural popular musics: luk thung, country ballads whose queen is Pumpuang Duangjan, and the mor lam of Isan, played on the khene, a bamboo mouth organ. Thai classical music is played by percussion and xylophone ensembles. Modern T-pop, with bands such as Tilly Birds, is gaining popularity.",
    regions: ['Bangkok', 'Chiang Mai', 'Isan'],
    artists: ['Tilly Birds', 'Pumpuang Duangjan'],
    spotify: "https://open.spotify.com/search/thailand%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Bangkok_Skytrain_skyline.jpg"
  },
  {
    name: 'Vietnam',
    descriptionFr: "Le Vietnam a une riche tradition, du ca trù, chant de cour accompagné d'un luth, au đàn bầu, une cithare monocorde. Le nhạc vàng, chanson romantique d'avant 1975, reste très aimé, avec des voix comme Khánh Ly, et Trịnh Công Sơn en est le grand auteur. La V-pop actuelle, menée par Sơn Tùng M-TP, domine les écoutes des jeunes.",
    descriptionEn: "Vietnam has a rich tradition, from ca trù, a court song accompanied by a lute, to the đàn bầu, a one-string zither. Nhạc vàng, the romantic song of before 1975, is still much loved, with voices such as Khánh Ly, and Trịnh Công Sơn is its great songwriter. Today's V-pop, led by Sơn Tùng M-TP, dominates young people's listening.",
    regions: ['Hanoi', 'Ho Chi Minh City'],
    artists: ['Sơn Tùng M-TP', 'Khánh Ly'],
    spotify: "https://open.spotify.com/search/vietnam%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ho_Chi_Minh_City_Skyline.jpg"
  },
  {
    name: 'Cambodia',
    descriptionFr: "Dans les années 1960, Phnom Penh a vu naître un rock cambodgien unique, mêlant mélodies khmères, rock garage et psychédélisme, porté par Sinn Sisamouth et Ros Serey Sothea. Beaucoup de ces artistes ont disparu sous les Khmers rouges, et cette musique a été redécouverte dans les années 2000, notamment par le groupe Dengue Fever. Les traditions du ballet royal et des ensembles pinpeat restent vivantes.",
    descriptionEn: "In the 1960s Phnom Penh gave birth to a unique Cambodian rock that blended Khmer melodies, garage rock and psychedelia, carried by Sinn Sisamouth and Ros Serey Sothea. Many of these artists died under the Khmer Rouge, and this music was rediscovered in the 2000s, notably by the band Dengue Fever. The traditions of the royal ballet and pinpeat ensembles remain alive.",
    regions: ['Phnom Penh', 'Siem Reap'],
    artists: ['Sinn Sisamouth', 'Dengue Fever'],
    spotify: "https://open.spotify.com/search/cambodia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Phnom_Penh_Skyline.jpg"
  },
  {
    name: 'Laos',
    descriptionFr: "Le khene, un orgue à bouche en bambou, est l'instrument emblématique du Laos, et sa musique est inscrite au patrimoine de l'UNESCO. Le lam lao, chant improvisé accompagné du khene, est la grande forme populaire. La pop laotienne est très influencée par la musique thaïe voisine.",
    descriptionEn: "The khene, a bamboo mouth organ, is Laos's emblematic instrument, and its music is listed by UNESCO. Lam lao, improvised singing accompanied by the khene, is the great popular form. Lao pop is strongly influenced by the music of neighbouring Thailand.",
    regions: ['Vientiane', 'Luang Prabang'],
    artists: [],
    spotify: "https://open.spotify.com/search/laos%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Vientiane_Skyline.jpg"
  },
  {
    name: 'Myanmar',
    descriptionFr: "La musique traditionnelle birmane se joue avec le hsaing waing, un ensemble de tambours accordés et de gongs, et la harpe saung, instrument national. Les scènes pop et rock de Yangon reprennent souvent des tubes occidentaux en birman. Depuis 2021, une partie des artistes s'est engagée contre le régime militaire.",
    descriptionEn: "Traditional Burmese music is played with the hsaing waing, an ensemble of tuned drums and gongs, and the saung harp, the national instrument. Yangon's pop and rock scenes often cover Western hits in Burmese. Since 2021, some artists have spoken out against the military regime.",
    regions: ['Yangon', 'Mandalay'],
    artists: [],
    spotify: "https://open.spotify.com/search/myanmar%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Yangon_Skyline.jpg"
  },
  {
    name: 'Brunei',
    descriptionFr: "Brunei partage la culture musicale malaise, avec le gulingtangan, un ensemble de gongs, et l'adai-adai, chants de pêcheurs. La musique religieuse islamique tient une place importante. La pop malaise de Malaisie et d'Indonésie y est très écoutée.",
    descriptionEn: "Brunei shares Malay musical culture, with the gulingtangan, a gong ensemble, and adai-adai, fishermen's songs. Islamic religious music plays an important role. Malay pop from Malaysia and Indonesia is widely listened to there.",
    regions: ['Bandar Seri Begawan'],
    artists: [],
    spotify: "https://open.spotify.com/search/brunei%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Bandar_Seri_Begawan_Skyline.jpg"
  },
  {
    name: 'Timor-Leste',
    descriptionFr: "Le Timor oriental a des traditions de chant et de danse communautaires, comme le tebe-dai, danse en cercle accompagnée de tambours. L'histoire portugaise y a laissé des influences, et la musique a accompagné la lutte pour l'indépendance. Dili a une jeune scène pop, reggae et rock.",
    descriptionEn: "Timor-Leste has traditions of communal song and dance, such as tebe-dai, a circle dance accompanied by drums. Portuguese history left its influence, and music accompanied the struggle for independence. Dili has a young pop, reggae and rock scene.",
    regions: ['Dili', 'Baucau'],
    artists: [],
    spotify: "https://open.spotify.com/search/timor%20leste%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Timor_Leste_Hills.jpg"
  },
  {
    name: 'Morocco',
    descriptionFr: "Le Maroc a une musique très diverse : le gnawa, musique spirituelle de transe jouée au guembri et aux qraqeb (crotales de fer), inscrite au patrimoine de l'UNESCO ; la musique andalouse des villes comme Fès ; et les chants amazighs de l'Atlas. Dans les années 1970, Nass El Ghiwane a modernisé le chaabi et été surnommé les « Rolling Stones de l'Afrique ». Le festival Gnaoua d'Essaouira et la scène rap marocaine attirent un public international.",
    descriptionEn: "Morocco has a very diverse music: gnawa, a spiritual trance music played on the guembri and iron qraqeb castanets and listed by UNESCO; the Andalusian music of cities such as Fez; and the Amazigh songs of the Atlas. In the 1970s Nass El Ghiwane modernised chaabi and were nicknamed the “Rolling Stones of Africa”. The Gnaoua Festival in Essaouira and the Moroccan rap scene draw an international crowd.",
    regions: ['Casablanca', 'Marrakesh', 'Fès'],
    artists: ['Maâlem Mahmoud Guinia', 'Nass El Ghiwane'],
    spotify: "https://open.spotify.com/search/morocco%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Casablanca_Skyline.jpg"
  },
  {
    name: 'Algeria',
    descriptionFr: "L'Algérie est le berceau du raï, né à Oran comme une musique populaire et rebelle, puis modernisé par Cheb Khaled, Cheb Mami et Rachid Taha. Alger a le chaabi, musique de la Casbah portée par Dahmane El Harrachi, l'auteur de « Ya Rayah ». La musique kabyle, avec Idir et Lounès Matoub, et la musique andalouse de Tlemcen et Constantine complètent un riche patrimoine.",
    descriptionEn: "Algeria is the birthplace of raï, born in Oran as a popular, rebellious music and later modernised by Cheb Khaled, Cheb Mami and Rachid Taha. Algiers has chaabi, the music of the Casbah carried by Dahmane El Harrachi, author of “Ya Rayah”. Kabyle music, with Idir and Lounès Matoub, and the Andalusian music of Tlemcen and Constantine complete a rich heritage.",
    regions: ['Oran', 'Algiers', 'Constantine'],
    artists: ['Cheb Khaled', 'Dahmane El Harrachi'],
    spotify: "https://open.spotify.com/search/algeria%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Algiers_Skyline.jpg"
  },
  {
    name: 'Tunisia',
    descriptionFr: "La Tunisie a une tradition de malouf, musique andalouse savante préservée par l'ensemble La Rachidia depuis les années 1930. Le mezoued, joué à la cornemuse, est la musique populaire des fêtes et des quartiers. Anouar Brahem a fait de l'oud un instrument de jazz reconnu, et Emel Mathlouthi a porté la voix de la révolution de 2011.",
    descriptionEn: "Tunisia has a tradition of malouf, an Andalusian art music preserved by the La Rachidia ensemble since the 1930s. Mezoued, played on bagpipes, is the popular music of celebrations and neighbourhoods. Anouar Brahem made the oud a recognised jazz instrument, and Emel Mathlouthi became a voice of the 2011 revolution.",
    regions: ['Tunis', 'Sfax'],
    artists: ['Rachidia Ensemble'],
    spotify: "https://open.spotify.com/search/tunisia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tunis_Skyline.jpg"
  },
  {
    name: 'Libya',
    descriptionFr: "La Libye a une tradition de malouf andalou, partagée avec la Tunisie, et des chants populaires bédouins. Le chanteur Ahmed Fakroun a mêlé dans les années 1980 musique libyenne, pop et sonorités occidentales. Les musiques touarègues du sud et la pop arabe sont aussi présentes.",
    descriptionEn: "Libya has a tradition of Andalusian malouf, shared with Tunisia, and Bedouin folk songs. In the 1980s singer Ahmed Fakroun blended Libyan music with pop and Western sounds. Tuareg music from the south and Arab pop are also present.",
    regions: ['Tripoli', 'Benghazi'],
    artists: [],
    spotify: "https://open.spotify.com/search/libya%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Tripoli_Skyline.jpg"
  },
  {
    name: 'Egypt',
    descriptionFr: "L'Égypte a été le centre de la musique arabe du XXe siècle : Oum Kalthoum, Mohammed Abdel Wahab et Abdel Halim Hafez ont porté le tarab, l'émotion musicale, dans tout le monde arabe. Le cinéma égyptien a diffusé cette musique, et Amr Diab est devenu la grande star de la pop arabe. Aujourd'hui, le mahraganat, électro-chaabi des quartiers populaires du Caire, domine les écoutes des jeunes.",
    descriptionEn: "Egypt was the centre of 20th-century Arab music: Umm Kulthum, Mohammed Abdel Wahab and Abdel Halim Hafez carried tarab, musical ecstasy, across the Arab world. Egyptian cinema spread this music, and Amr Diab became the great star of Arab pop. Today mahraganat, the electro-chaabi of Cairo's working-class neighbourhoods, dominates young people's listening.",
    regions: ['Cairo', 'Alexandria'],
    artists: ['Umm Kulthum', 'Amr Diab'],
    spotify: "https://open.spotify.com/search/egypt%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Cairo_Skyline.jpg"
  },
// ——— AFRIQUE DE L'OUEST ———
  {
    name: 'Nigeria',
    descriptionFr: "Le Nigeria est une superpuissance musicale africaine. Fela Kuti a inventé l'afrobeat dans les années 1970, mélange de highlife, de jazz, de funk et de chants politiques, tandis que King Sunny Adé popularisait le jùjú. Depuis les années 2010, les afrobeats de Lagos, avec Wizkid, Burna Boy et Davido, sont devenus un phénomène mondial.",
    descriptionEn: "Nigeria is an African musical superpower. Fela Kuti invented Afrobeat in the 1970s, a blend of highlife, jazz, funk and political lyrics, while King Sunny Adé popularised jùjú. Since the 2010s, Lagos Afrobeats, with Wizkid, Burna Boy and Davido, has become a global phenomenon.",
    regions: ['Lagos', 'Abuja', 'Ibadan'],
    artists: ['Fela Kuti', 'Wizkid', 'Burna Boy'],
    spotify: "https://open.spotify.com/search/nigeria%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Lagos_Island_skyline.jpg"
  },
  {
    name: 'Ghana',
    descriptionFr: "Le Ghana est le berceau du highlife, né au début du XXe siècle et modernisé par E. T. Mensah, qui a influencé toute l'Afrique de l'Ouest. Dans les années 1990, Reggie Rockstone a créé le hiplife, mélange de hip-hop et de highlife. Aujourd'hui, l'azonto et l'afrobeats ghanéen, avec Sarkodie et Stonebwoy, rayonnent à l'international.",
    descriptionEn: "Ghana is the birthplace of highlife, born in the early 20th century and modernised by E. T. Mensah, which influenced all of West Africa. In the 1990s Reggie Rockstone created hiplife, a mix of hip-hop and highlife. Today azonto and Ghanaian Afrobeats, with Sarkodie and Stonebwoy, reach international audiences.",
    regions: ['Accra', 'Kumasi'],
    artists: ['E.T. Mensah', 'Reggie Rockstone'],
    spotify: "https://open.spotify.com/search/ghana%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Accra_skyline.jpg"
  },
  {
    name: 'Senegal',
    descriptionFr: "Le mbalax, porté par les tambours sabar et la voix de Youssou N'Dour, est la grande musique populaire du Sénégal. Dans les années 1970, l'Orchestra Baobab a mêlé musiques cubaines et traditions wolof. Dakar a aussi l'une des scènes hip-hop les plus importantes d'Afrique, depuis Positive Black Soul et Daara J.",
    descriptionEn: "Mbalax, driven by sabar drums and the voice of Youssou N'Dour, is Senegal's great popular music. In the 1970s Orchestra Baobab blended Cuban music with Wolof traditions. Dakar also has one of Africa's most important hip-hop scenes, since Positive Black Soul and Daara J.",
    regions: ['Dakar', 'Saint-Louis'],
    artists: ['Youssou N\'Dour'],
    spotify: "https://open.spotify.com/search/senegal%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Dakar_Skyline.jpg"
  },
  {
    name: 'Mali',
    descriptionFr: "Le Mali est l'une des grandes terres musicales d'Afrique. Les griots mandingues y transmettent l'histoire par le chant et la kora, que Toumani Diabaté a portée au sommet. Ali Farka Touré a révélé le blues du désert, et des artistes comme Salif Keita, Oumou Sangaré et le groupe touareg Tinariwen sont connus dans le monde entier.",
    descriptionEn: "Mali is one of Africa's great musical lands. Mande griots pass on history through song and the kora, which Toumani Diabaté brought to its peak. Ali Farka Touré revealed desert blues, and artists such as Salif Keita, Oumou Sangaré and the Tuareg band Tinariwen are known worldwide.",
    regions: ['Bamako', 'Timbuktu'],
    artists: ['Ali Farka Touré', 'Toumani Diabaté'],
    spotify: "https://open.spotify.com/search/mali%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Bamako_skyline.jpg"
  },
  {
    name: 'Ivory Coast',
    descriptionFr: "La Côte d'Ivoire a inventé le zouglou dans les années 1990, chanson étudiante festive dont Magic System a fait un succès international avec « Premier Gaou ». Le coupé-décalé, né dans la diaspora à Paris au début des années 2000, a été porté par DJ Arafat. Abidjan est l'une des capitales musicales d'Afrique francophone, et Alpha Blondy y a popularisé le reggae africain.",
    descriptionEn: "Ivory Coast invented zouglou in the 1990s, a festive student song that Magic System turned into an international hit with “Premier Gaou”. Coupé-décalé, born in the Paris diaspora in the early 2000s, was carried by DJ Arafat. Abidjan is one of the musical capitals of French-speaking Africa, and Alpha Blondy popularised African reggae there.",
    regions: ['Abidjan', 'Bouaké'],
    artists: ['DJ Arafat', 'Magic System'],
    spotify: "https://open.spotify.com/search/ivory%20coast%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Abidjan_skyline.jpg"
  },
  {
    name: 'Guinea',
    descriptionFr: "La Guinée partage la tradition des griots mandingues, et ses percussions, notamment le djembé, sont parmi les plus réputées au monde. Après l'indépendance, l'État a soutenu des orchestres comme Bembeya Jazz National, qui a modernisé la musique mandingue. Mory Kanté a fait danser le monde avec « Yé ké yé ké » en 1987.",
    descriptionEn: "Guinea shares the Mande griot tradition, and its percussion, especially the djembe, is among the most renowned in the world. After independence, the state backed orchestras such as Bembeya Jazz National, which modernised Mande music. Mory Kanté set the world dancing with “Yé ké yé ké” in 1987.",
    regions: ['Conakry'],
    artists: [],
    spotify: "https://open.spotify.com/search/guinea%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Conakry.jpg"
  },
  {
    name: 'Gambia',
    descriptionFr: "La Gambie est l'une des terres de la kora et des griots mandingues, avec des familles de musiciens comme celle de Foday Musa Suso. Le pays partage le mbalax avec le Sénégal voisin. Le festival Roots, à Banjul, célèbre les liens entre l'Afrique et sa diaspora.",
    descriptionEn: "Gambia is one of the homelands of the kora and Mande griots, with musician families such as that of Foday Musa Suso. The country shares mbalax with neighbouring Senegal. The Roots festival in Banjul celebrates the ties between Africa and its diaspora.",
    regions: ['Banjul'],
    artists: [],
    spotify: "https://open.spotify.com/search/gambia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Banjul_Skyline.jpg"
  },
  {
    name: 'Benin',
    descriptionFr: "Le Bénin a une riche tradition de rythmes vodoun, que les orchestres des années 1970, comme le T.P. Orchestre Poly-Rythmo de Cotonou, ont mêlés au funk et à l'afrobeat. Ces enregistrements ont été redécouverts dans les années 2000. Angélique Kidjo, star internationale aux cinq Grammy Awards, est béninoise.",
    descriptionEn: "Benin has a rich tradition of Vodun rhythms, which 1970s orchestras such as Cotonou's T.P. Orchestre Poly-Rythmo blended with funk and Afrobeat. These recordings were rediscovered in the 2000s. Angélique Kidjo, an international star with five Grammy Awards, is from Benin.",
    regions: ['Cotonou'],
    artists: ["Angélique Kidjo"],
    spotify: "https://open.spotify.com/search/benin%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Cotonou.jpg"
  },
  {
    name: 'Togo',
    descriptionFr: "Le Togo a une tradition de rythmes ewe et de musique vodoun, partagée avec le Ghana et le Bénin voisins. Dans les années 1970, la chanteuse Bella Bellow a fait connaître la musique togolaise en Afrique. La scène actuelle mêle afropop, rap et coupé-décalé à Lomé.",
    descriptionEn: "Togo has a tradition of Ewe rhythms and Vodun music, shared with neighbouring Ghana and Benin. In the 1970s singer Bella Bellow made Togolese music known across Africa. Today's scene in Lomé blends Afropop, rap and coupé-décalé.",
    regions: ['Lomé'],
    artists: [],
    spotify: "https://open.spotify.com/search/togo%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Lome_Togo.jpg"
  },
  {
    name: 'Burkina Faso',
    descriptionFr: "Le Burkina Faso a une riche tradition de balafon, de djembé et de musiques mossi. Bobo-Dioulasso est un foyer des griots et des percussions. Ouagadougou accueille le FESPACO, grand festival de cinéma africain, et a une scène rap et reggae engagée, avec des artistes comme Smockey.",
    descriptionEn: "Burkina Faso has a rich tradition of balafon, djembe and Mossi music. Bobo-Dioulasso is a hub of griots and percussion. Ouagadougou hosts FESPACO, the great African film festival, and has an outspoken rap and reggae scene, with artists such as Smockey.",
    regions: ['Ouagadougou', 'Bobo-Dioulasso'],
    artists: [],
    spotify: "https://open.spotify.com/search/burkina%20faso%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ouagadougou_downtown.jpg"
  },
  {
    name: 'Niger',
    descriptionFr: "Le Niger est l'un des berceaux du blues touareg, aux guitares hypnotiques, que Bombino, originaire d'Agadez, a porté sur les scènes du monde entier. Les Peuls Wodaabe chantent des polyphonies lors de la fête du Guérewol. Le takamba, joué au luth, est la musique des fêtes du fleuve Niger.",
    descriptionEn: "Niger is one of the cradles of Tuareg blues, with its hypnotic guitars, which Bombino, from Agadez, took to stages around the world. The Wodaabe Fulani sing polyphonies during the Guérewol festival. Takamba, played on the lute, is the party music of the Niger river.",
    regions: ['Niamey', 'Agadez'],
    artists: ["Bombino"],
    spotify: "https://open.spotify.com/search/niger%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Niamey_skyline.jpg"
  },
  {
    name: 'Cape Verde',
    descriptionFr: "La morna, chanson mélancolique liée à la sodade (la nostalgie), est l'âme du Cap-Vert ; Cesária Évora, la « diva aux pieds nus », l'a fait connaître dans le monde entier. La coladeira est sa version plus rythmée, et le funaná, joué à l'accordéon, est une musique de danse énergique. Le Cap-Vert a une immense diaspora musicale, à Lisbonne, Paris et Boston.",
    descriptionEn: "Morna, a melancholic song tied to sodade (longing), is the soul of Cape Verde; Cesária Évora, the “barefoot diva”, made it known worldwide. Coladeira is its more rhythmic version, and funaná, played on accordion, is an energetic dance music. Cape Verde has a huge musical diaspora in Lisbon, Paris and Boston.",
    regions: ['Mindelo', 'Praia'],
    artists: ['Cesária Évora'],
    spotify: "https://open.spotify.com/search/cape%20verde%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Mindelo_Cape_Verde.jpg"
  },
// ——— AFRIQUE CENTRALE ———
  {
    name: 'DR Congo',
    descriptionFr: "La RD Congo est l'une des grandes puissances musicales d'Afrique. La rumba congolaise, née à Kinshasa dans les années 1950 avec Franco et Tabu Ley Rochereau, est inscrite au patrimoine de l'UNESCO et a influencé tout le continent. Elle a donné naissance au soukous puis au ndombolo, portés par Papa Wemba, Koffi Olomidé et aujourd'hui Fally Ipupa.",
    descriptionEn: "DR Congo is one of Africa's great musical powers. Congolese rumba, born in Kinshasa in the 1950s with Franco and Tabu Ley Rochereau, is listed by UNESCO and influenced the whole continent. It gave rise to soukous and later ndombolo, carried by Papa Wemba, Koffi Olomidé and today Fally Ipupa.",
    regions: ['Kinshasa', 'Goma'],
    artists: ['Franco', 'Fally Ipupa'],
    spotify: "https://open.spotify.com/search/congo%20rumba",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Kinshasa_Skyline.jpg"
  },
  {
    name: 'Republic of the Congo',
    descriptionFr: "Le Congo-Brazzaville partage avec Kinshasa, de l'autre côté du fleuve, la naissance de la rumba congolaise, inscrite au patrimoine de l'UNESCO au nom des deux pays. Des orchestres comme Les Bantous de la Capitale ont marqué l'âge d'or de la rumba. La scène actuelle mêle rumba, ndombolo et rap.",
    descriptionEn: "Congo-Brazzaville shares with Kinshasa, across the river, the birth of Congolese rumba, listed by UNESCO in the name of both countries. Orchestras such as Les Bantous de la Capitale marked rumba's golden age. Today's scene blends rumba, ndombolo and rap.",
    regions: ['Brazzaville', 'Pointe-Noire'],
    artists: [],
    spotify: "https://open.spotify.com/search/congo%20brazzaville%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Brazzaville_skyline.jpg"
  },
  {
    name: 'Cameroon',
    descriptionFr: "Le Cameroun a deux grands styles populaires : le makossa de Douala, que Manu Dibango a rendu mondial avec « Soul Makossa » en 1972, et le bikutsi de Yaoundé, rythme frénétique issu de la culture beti. Richard Bona, bassiste de jazz de renommée mondiale, est camerounais. La scène urbaine actuelle, avec Stanley Enow et Charlotte Dipanda, mêle afropop et rap.",
    descriptionEn: "Cameroon has two great popular styles: the makossa of Douala, which Manu Dibango made global with “Soul Makossa” in 1972, and the bikutsi of Yaoundé, a frenetic rhythm from Beti culture. Richard Bona, a world-famous jazz bassist, is Cameroonian. Today's urban scene, with Stanley Enow and Charlotte Dipanda, blends Afropop and rap.",
    regions: ['Douala', 'Yaoundé'],
    artists: ['Manu Dibango'],
    spotify: "https://open.spotify.com/search/cameroon%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Douala_Skyline.jpg"
  },
  {
    name: 'Gabon',
    descriptionFr: "Le Gabon a des traditions musicales liées aux rites bwiti, joués à la harpe ngombi et à l'arc musical. Pierre Akendengué a fait connaître la chanson gabonaise engagée, et Patience Dabany a été une grande star de la pop africaine. Libreville a une scène rap et afropop active.",
    descriptionEn: "Gabon has musical traditions tied to Bwiti rites, played on the ngombi harp and the musical bow. Pierre Akendengué brought socially engaged Gabonese song to wider audiences, and Patience Dabany was a big star of African pop. Libreville has an active rap and Afropop scene.",
    regions: ['Libreville'],
    artists: [],
    spotify: "https://open.spotify.com/search/gabon%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Libreville_skyline.jpg"
  },

  // ——— AFRIQUE AUSTRALE ———
  {
    name: 'South Africa',
    descriptionFr: "L'Afrique du Sud a une histoire musicale très riche : le chant choral isicathamiya de Ladysmith Black Mambazo, le jazz de Hugh Masekela et Miriam Makeba, liés à la lutte contre l'apartheid, et le mbaqanga des townships. Après 1994, le kwaito a été la bande-son de la jeunesse des townships. Aujourd'hui, l'amapiano, né à Johannesburg avec Kabza De Small, et le gqom de Durban s'exportent dans le monde entier.",
    descriptionEn: "South Africa has a very rich musical history: the isicathamiya choral singing of Ladysmith Black Mambazo, the jazz of Hugh Masekela and Miriam Makeba, tied to the struggle against apartheid, and township mbaqanga. After 1994, kwaito was the soundtrack of township youth. Today amapiano, born in Johannesburg with Kabza De Small, and Durban's gqom are exported worldwide.",
    regions: ['Johannesburg', 'Cape Town', 'Durban'],
    artists: ['Kabza De Small', 'Hugh Masekela'],
    spotify: "https://open.spotify.com/search/south%20africa%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Johannesburg_Skyline.jpg"
  },
  {
    name: 'Zimbabwe',
    descriptionFr: "Le mbira, un piano à pouces aux lames métalliques, est l'instrument sacré du peuple shona. Thomas Mapfumo a créé le chimurenga, une musique de résistance qui transpose le mbira à la guitare électrique, devenue la bande-son de la lutte pour l'indépendance. Oliver Mtukudzi et la sungura, aux guitares rapides, sont d'autres piliers de la musique zimbabwéenne.",
    descriptionEn: "The mbira, a thumb piano with metal keys, is the sacred instrument of the Shona people. Thomas Mapfumo created chimurenga, a resistance music that transposes the mbira to electric guitar and became the soundtrack of the independence struggle. Oliver Mtukudzi and sungura, with its fast guitars, are other pillars of Zimbabwean music.",
    regions: ['Harare', 'Bulawayo'],
    artists: ["Thomas Mapfumo"],
    spotify: "https://open.spotify.com/search/zimbabwe%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Harare_skyline.jpg"
  },
  {
    name: 'Zambia',
    descriptionFr: "Dans les années 1970, la Zambie a vu naître le zamrock, un rock psychédélique et garage porté par des groupes comme WITCH, redécouvert récemment. La kalindula, musique populaire basée sur la basse, est le grand style national. Lusaka a aujourd'hui une scène afropop et hip-hop dynamique.",
    descriptionEn: "In the 1970s Zambia gave birth to Zamrock, a psychedelic and garage rock carried by bands such as WITCH and recently rediscovered. Kalindula, a bass-driven popular music, is the great national style. Lusaka now has a dynamic Afropop and hip-hop scene.",
    regions: ['Lusaka'],
    artists: [],
    spotify: "https://open.spotify.com/search/zambia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Lusaka_skyline.jpg"
  },
  {
    name: 'Namibia',
    descriptionFr: "La Namibie a des traditions musicales variées selon ses peuples : chants des Ovambo, polyphonies des San, musique des Herero. Le shambo, musique de danse locale, est très populaire. La scène actuelle de Windhoek est marquée par l'afropop, la house et le kwaito sud-africains.",
    descriptionEn: "Namibia has musical traditions that vary among its peoples: Ovambo songs, San polyphonies and Herero music. Shambo, a local dance music, is very popular. Today's scene in Windhoek is shaped by Afropop, house and South African kwaito.",
    regions: ['Windhoek'],
    artists: [],
    spotify: "https://open.spotify.com/search/namibia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Windhoek_skyline.jpg"
  },
  {
    name: 'Botswana',
    descriptionFr: "Le Botswana a des traditions de chants setswana et de polyphonies san, ainsi que la musique d'accordéon et de guitare des fêtes populaires. La house et le kwaito, venus d'Afrique du Sud, dominent la scène urbaine de Gaborone. Le pays a aussi une petite scène metal, connue pour ses fans vêtus de cuir.",
    descriptionEn: "Botswana has traditions of Setswana songs and San polyphonies, as well as the accordion and guitar music of popular celebrations. House and kwaito from South Africa dominate the urban scene in Gaborone. The country also has a small metal scene known for its leather-clad fans.",
    regions: ['Gaborone'],
    artists: [],
    spotify: "https://open.spotify.com/search/botswana%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Gaborone_skyline.jpg"
  },
  {
    name: 'Mozambique',
    descriptionFr: "La marrabenta, née à Maputo dans les années 1930-1950, est la grande musique populaire du Mozambique : un mélange de rythmes locaux et de guitares influencées par la musique portugaise. Fany Pfumo en a été l'une des figures majeures. Le timbila, un orchestre de xylophones du peuple chopi, est inscrit au patrimoine de l'UNESCO.",
    descriptionEn: "Marrabenta, born in Maputo between the 1930s and 1950s, is Mozambique's great popular music: a blend of local rhythms and guitars influenced by Portuguese music. Fany Pfumo was one of its major figures. Timbila, a xylophone orchestra of the Chopi people, is listed by UNESCO.",
    regions: ['Maputo'],
    artists: ['Fany Pfumo'],
    spotify: "https://open.spotify.com/search/mozambique%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Maputo_skyline.jpg"
  },
  {
    name: 'Angola',
    descriptionFr: "L'Angola a donné le semba, ancêtre de la samba brésilienne, dont Bonga est la grande voix. La kizomba, plus lente et sensuelle, est devenue une danse populaire dans le monde entier. Le kuduro, électro rapide et énergique né dans les quartiers de Luanda dans les années 1990, a été exporté jusqu'à Lisbonne.",
    descriptionEn: "Angola gave us semba, an ancestor of Brazilian samba, whose great voice is Bonga. Kizomba, slower and more sensual, has become a popular dance worldwide. Kuduro, a fast, energetic electronic music born in the neighbourhoods of Luanda in the 1990s, has spread as far as Lisbon.",
    regions: ['Luanda'],
    artists: ['Bonga'],
    spotify: "https://open.spotify.com/search/angola%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Luanda_skyline.jpg"
  },
  {
    name: 'Madagascar',
    descriptionFr: "Madagascar a une musique très originale, entre influences africaines et austronésiennes. Le valiha, une cithare en bambou, est l'instrument national. Le salegy, musique de danse rapide du nord popularisée par Jaojoby, et le tsapiky du sud-ouest, aux guitares nerveuses, sont les grands styles populaires ; D'Gary est un guitariste de renommée mondiale.",
    descriptionEn: "Madagascar has a very original music, between African and Austronesian influences. The valiha, a bamboo zither, is the national instrument. Salegy, a fast dance music from the north popularised by Jaojoby, and tsapiky from the southwest, with its edgy guitars, are the great popular styles; D'Gary is a world-renowned guitarist.",
    regions: ['Antananarivo', 'Toliara'],
    artists: ['Jaojoby', "D'Gary"],
    spotify: "https://open.spotify.com/search/madagascar%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Antananarivo_skyline.jpg"
  },
  {
    name: 'Mauritius',
    descriptionFr: "Le séga, né chez les esclaves venus d'Afrique et de Madagascar, est la musique emblématique de l'île Maurice ; il est inscrit au patrimoine de l'UNESCO. Il se joue au ravanne, un grand tambour, et Ti Frère en a été le grand chanteur. Dans les années 1980, Kaya a inventé le seggae, fusion de séga et de reggae.",
    descriptionEn: "Sega, born among people enslaved and brought from Africa and Madagascar, is the emblematic music of Mauritius and is listed by UNESCO. It is played on the ravanne, a large drum, and Ti Frère was its great singer. In the 1980s, Kaya invented seggae, a fusion of sega and reggae.",
    regions: ['Port Louis'],
    artists: ['Ti Frère'],
    spotify: "https://open.spotify.com/search/mauritius%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Port_Louis_Skyline.jpg"
  },
// ——— AFRIQUE DE L'EST ———
  {
    name: 'Tanzania',
    descriptionFr: "La Tanzanie est le pays du bongo flava, le hip-hop et la pop en swahili nés à Dar es Salaam dans les années 1990, dont Diamond Platnumz est la plus grande star. Zanzibar a le taarab, musique de chant aux influences arabes, indiennes et africaines. Le singeli, électro très rapide des quartiers de Dar es Salaam, est la dernière invention de la scène locale.",
    descriptionEn: "Tanzania is the home of bongo flava, the Swahili-language hip-hop and pop born in Dar es Salaam in the 1990s, whose biggest star is Diamond Platnumz. Zanzibar has taarab, a sung music with Arab, Indian and African influences. Singeli, a very fast electronic music from Dar es Salaam's neighbourhoods, is the latest invention of the local scene.",
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
    descriptionFr: "Le Kenya a le benga, musique de guitare rapide née chez les Luo dans les années 1960, qui a influencé toute l'Afrique de l'Est. Dans les années 2000, le genge de Nairobi a mêlé hip-hop et sheng, l'argot local, puis le gengetone l'a radicalisé. Le groupe Sauti Sol a porté une afropop kenyane élégante sur les scènes internationales.",
    descriptionEn: "Kenya has benga, a fast guitar music born among the Luo in the 1960s that influenced all of East Africa. In the 2000s Nairobi's genge blended hip-hop with Sheng, the local slang, and later gengetone made it rawer. The band Sauti Sol took an elegant Kenyan Afropop to international stages.",
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
    descriptionFr: "L'Ouganda a le kadongo kamu, une chanson narrative à la guitare acoustique, et des traditions royales du Buganda jouées aux tambours et aux xylophones. La scène afropop et dancehall de Kampala, avec Eddy Kenzo et Sheebah, est très dynamique. Le festival Nyege Nyege, près de Jinja, et son label sont devenus une référence mondiale des musiques électroniques africaines.",
    descriptionEn: "Uganda has kadongo kamu, narrative songs on acoustic guitar, and royal Buganda traditions played on drums and xylophones. Kampala's Afropop and dancehall scene, with Eddy Kenzo and Sheebah, is very dynamic. The Nyege Nyege festival near Jinja and its label have become a global reference for African electronic music.",
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
    descriptionFr: "Le Rwanda a des traditions de chant et de danse royales, comme l'intore, danse des guerriers accompagnée de tambours. La pop et le R&B rwandais, avec Meddy et The Ben, sont très écoutés dans la région des Grands Lacs, et le gospel tient une place importante. Kigali accueille des festivals et une scène musicale en plein essor.",
    descriptionEn: "Rwanda has royal song and dance traditions such as intore, the warriors' dance accompanied by drums. Rwandan pop and R&B, with Meddy and The Ben, are widely heard across the Great Lakes region, and gospel plays an important role. Kigali hosts festivals and a booming music scene.",
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
    descriptionFr: "Les États-Unis sont le berceau d'une grande partie de la musique populaire du XXe siècle : le blues du Delta, le jazz de La Nouvelle-Orléans, la country de Nashville, le rock'n'roll de Memphis, la soul de Detroit et le hip-hop du Bronx. Chaque ville a sa scène, de la house de Chicago à la techno de Detroit en passant par le grunge de Seattle. De Miles Davis à Elvis Presley et Beyoncé, ses artistes ont façonné la musique du monde entier.",
    descriptionEn: "The United States is the birthplace of much of 20th-century popular music: Delta blues, New Orleans jazz, Nashville country, Memphis rock'n'roll, Detroit soul and Bronx hip-hop. Every city has its scene, from Chicago house and Detroit techno to Seattle grunge. From Miles Davis to Elvis Presley and Beyoncé, its artists have shaped music worldwide.",
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
    descriptionFr: "Le Brésil a l'une des cultures musicales les plus riches au monde : la samba de Rio, la bossa nova inventée par João Gilberto et Tom Jobim, et la MPB de Caetano Veloso et Gilberto Gil, nés du mouvement Tropicália. Bahia est le berceau de l'axé et des percussions afro-brésiliennes, le Nordeste celui du forró. Aujourd'hui, le funk carioca et le sertanejo dominent les écoutes, avec des stars comme Anitta.",
    descriptionEn: "Brazil has one of the richest musical cultures in the world: Rio's samba, the bossa nova invented by João Gilberto and Tom Jobim, and the MPB of Caetano Veloso and Gilberto Gil, who emerged from the Tropicália movement. Bahia is the cradle of axé and Afro-Brazilian percussion, the Northeast of forró. Today funk carioca and sertanejo dominate streaming, with stars like Anitta.",
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
    descriptionFr: "Le Canada a deux grandes traditions : la chanson québécoise, de Félix Leclerc à Gilles Vigneault et Harmonium, et une scène anglophone qui a donné Leonard Cohen, Joni Mitchell et Neil Young. Montréal est une capitale de l'indie rock depuis Arcade Fire, et Toronto une place forte du R&B et du hip-hop avec Drake et The Weeknd. Les artistes autochtones, comme A Tribe Called Red et le chant de gorge inuit, y occupent une place croissante.",
    descriptionEn: "Canada has two great traditions: Quebec chanson, from Félix Leclerc to Gilles Vigneault and Harmonium, and an English-language scene that produced Leonard Cohen, Joni Mitchell and Neil Young. Montreal has been an indie-rock capital since Arcade Fire, and Toronto a stronghold of R&B and hip-hop with Drake and The Weeknd. Indigenous artists, such as A Tribe Called Red and Inuit throat singers, have an ever larger place.",
    regions: ['Montréal', 'Toronto', 'Vancouver', 'Québec', 'Halifax'],
    artists: ['Leonard Cohen', 'Céline Dion', 'Drake', 'The Weeknd', 'Arcade Fire'],
    spotify: "https://open.spotify.com/search/canada%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Montreal_skyline_from_Mt._Royal.jpg"
  },

  // ——— OCÉANIE ———
  {
    name: 'Australia',
    descriptionFr: "L'Australie a une scène rock puissante, d'AC/DC et INXS à Tame Impala et King Gizzard & the Lizard Wizard. Les peuples aborigènes ont des traditions musicales parmi les plus anciennes au monde, avec le didgeridoo, et des groupes comme Yothu Yindi les ont portées dans la pop. Melbourne et Sydney ont des scènes indie et électroniques très actives, d'où vient aussi Sia.",
    descriptionEn: "Australia has a powerful rock scene, from AC/DC and INXS to Tame Impala and King Gizzard & the Lizard Wizard. Aboriginal peoples have some of the oldest musical traditions in the world, with the didgeridoo, and bands such as Yothu Yindi carried them into pop. Melbourne and Sydney have very active indie and electronic scenes, home also to Sia.",
    regions: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
    artists: ['AC/DC', 'Tame Impala'],
    spotify: "https://open.spotify.com/search/australia%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sydney_skyline_from_the_north.jpg"
  },
  {
    name: 'New Zealand',
    descriptionFr: "La Nouvelle-Zélande a les waiata, chants maoris, et le haka, danse rituelle chantée. Dunedin a vu naître dans les années 1980 le « Dunedin sound », un indie rock influent porté par le label Flying Nun. Lorde est devenue une star mondiale, et Fat Freddy's Drop a créé un mélange de reggae, soul et dub typiquement néo-zélandais.",
    descriptionEn: "New Zealand has Māori waiata songs and the haka, a ritual chanted dance. Dunedin gave birth in the 1980s to the “Dunedin sound”, an influential indie rock carried by the Flying Nun label. Lorde became a global star, and Fat Freddy's Drop created a typically Kiwi blend of reggae, soul and dub.",
    regions: ['Auckland', 'Wellington', 'Christchurch'],
    artists: ['Lorde', 'Fat Freddy\'s Drop'],
    spotify: "https://open.spotify.com/search/new%20zealand%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Auckland_skyline.jpg"
  },
  {
    name: 'Papua New Guinea',
    descriptionFr: "La Papouasie-Nouvelle-Guinée compte plus de 800 langues et autant de traditions musicales : chants polyphoniques, tambours kundu et garamut, flûtes sacrées. Le stringband, joué à la guitare et à l'ukulélé, est la grande musique populaire. La pop locale mêle reggae, chants insulaires et électronique.",
    descriptionEn: "Papua New Guinea has more than 800 languages and as many musical traditions: polyphonic songs, kundu and garamut drums, sacred flutes. Stringband, played on guitar and ukulele, is the great popular music. Local pop blends reggae, island songs and electronic music.",
    regions: ['Port Moresby'],
    artists: [],
    spotify: "https://open.spotify.com/search/papua%20new%20guinea%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Port_Moresby_skyline.jpg"
  },
  {
    name: 'Fiji',
    descriptionFr: "Les Fidji ont des traditions de chant choral et de meke, danse chantée accompagnée de tambours lali. L'island reggae, aux rythmes détendus, domine la musique populaire. La communauté indo-fidjienne apporte aussi ses chants et la musique de Bollywood.",
    descriptionEn: "Fiji has traditions of choral singing and meke, a sung dance accompanied by lali drums. Island reggae, with its laid-back rhythms, dominates popular music. The Indo-Fijian community also brings its songs and Bollywood music.",
    regions: ['Suva', 'Nadi'],
    artists: [],
    spotify: "https://open.spotify.com/search/fiji%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Suva_skyline.jpg"
  },
  {
    name: 'Samoa',
    descriptionFr: "Les Samoa ont une forte tradition de chant choral, très présente dans les églises, et la siva, danse accompagnée de chants. Le fa'ataupati, danse des claques, est une tradition masculine spectaculaire. La pop samoane mêle reggae insulaire et R&B, avec une grande diaspora en Nouvelle-Zélande.",
    descriptionEn: "Samoa has a strong choral-singing tradition, very present in its churches, and the siva, a dance accompanied by song. Fa'ataupati, the slap dance, is a spectacular men's tradition. Samoan pop blends island reggae and R&B, with a large diaspora in New Zealand.",
    regions: ['Apia'],
    artists: [],
    spotify: "https://open.spotify.com/search/samoa%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Apia_Samoa.jpg"
  },
  {
    name: 'Tonga',
    descriptionFr: "Les Tonga ont des chants polyphoniques et des danses comme le lakalaka, danse chantée inscrite au patrimoine de l'UNESCO. Les chœurs d'église et les fanfares tiennent une grande place dans la vie musicale. La pop tongienne est influencée par le reggae et le R&B, avec une diaspora active en Nouvelle-Zélande et en Australie.",
    descriptionEn: "Tonga has polyphonic songs and dances such as the lakalaka, a sung dance listed by UNESCO. Church choirs and brass bands play a large role in musical life. Tongan pop is influenced by reggae and R&B, with an active diaspora in New Zealand and Australia.",
    regions: ["Nuku'alofa"],
    artists: [],
    spotify: "https://open.spotify.com/search/tonga%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Nukualofa.jpg"
  },
  {
    name: 'Solomon Islands',
    descriptionFr: "Les Îles Salomon sont célèbres pour leurs orchestres de flûtes de Pan en bambou, notamment à Malaita. Le stringband et l'island reggae dominent la musique populaire. Une berceuse de Malaita, « Rorogwela », a été reprise dans le tube « Sweet Lullaby » de Deep Forest.",
    descriptionEn: "The Solomon Islands are famous for their bamboo panpipe ensembles, especially on Malaita. Stringband and island reggae dominate popular music. A Malaita lullaby, “Rorogwela”, was sampled in Deep Forest's hit “Sweet Lullaby”.",
    regions: ['Honiara'],
    artists: [],
    spotify: "https://open.spotify.com/search/solomon%20islands%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Honiara_Skyline.jpg"
  },
  {
    name: 'Vanuatu',
    descriptionFr: "Le Vanuatu a des traditions musicales très variées selon les îles, avec des tambours à fente monumentaux et des chants de cérémonie. Les femmes de l'île de Gaua pratiquent la « water music », une percussion jouée en frappant l'eau. Le stringband, joué à la guitare et à l'ukulélé, est la grande musique populaire.",
    descriptionEn: "Vanuatu has musical traditions that vary greatly by island, with monumental slit drums and ceremonial songs. Women on Gaua island perform “water music”, a percussion played by striking the water. Stringband, played on guitar and ukulele, is the great popular music.",
    regions: ['Port Vila'],
    artists: [],
    spotify: "https://open.spotify.com/search/vanuatu%20music",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Port_Vila.jpg"
  }
];
