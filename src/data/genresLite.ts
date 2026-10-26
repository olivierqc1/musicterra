// src/data/genresLite.ts
// Liste des genres à utiliser dans l'app. Identique à genres.ts, sauf que
// descriptionFr / descriptionEn sont vides : elles se chargent à la demande
// avec useItemDescription. Ça garde le bundle principal léger (genres.ts
// fait environ 10 Mo, dont 9,5 Mo de descriptions).

export { genres } from 'virtual:genres-lite';
