# MusicTerra — CLAUDE.md

Application web de découverte musicale (https://musicterra.xyz). L'utilisateur fait tourner une roue (genre, pays ou année), découvre une fiche détaillée, note ce qu'il écoute et remplit son « passeport ». S'y ajoutent des artistes émergents, des concerts, un profil social (abonnements, groupes, fil d'amis) et de la gamification (séries, succès, défis). Interface bilingue français / anglais.

## Stack
- React 19 + Vite 7, TypeScript (mode strict), SPA sans routeur : la navigation se fait par onglets (`discover`, `emerging`, `concerts`, `profile`) gérés dans `src/App.tsx`
- Styles : thème clair. Toutes les couleurs, la police et les rayons viennent de `src/theme.ts` (`C`, `FONT`, `R`, `WHEEL_SEGMENTS`) ; les mêmes valeurs existent en variables CSS dans `src/index.css` pour les classes Tailwind (`bg-primary`, `text-muted-foreground`…). Ne pas écrire de couleur en dur ailleurs. Police : Bricolage Grotesque (Google Fonts, chargée dans `index.html`). Objets de style partagés dans `src/appStyles.ts`, animations `framer-motion`, icônes `lucide-react`
- Messages à l'utilisateur : `toast(texte, "info" | "success" | "error")` de `src/lib/toast.ts`, jamais `alert()` ni `confirm()`. Chargements : composant `Loader` ou classe CSS `mt-skeleton`.
- Supabase : authentification et base de données (client dans `src/lib/supabase.ts`, contexte dans `src/context/AuthContext.tsx`)
- SEO : `react-helmet-async` (composant `src/components/SEO.tsx`) et pages statiques générées au build
- Alias d'import : `@/` → `src/`
- Hébergement : Vercel (domaine musicterra.xyz), avec `@vercel/analytics`

## Déploiement
- Vercel est connecté au repo : chaque push sur `main` redéploie le site, et chaque PR reçoit une URL de prévisualisation.
- Les variables `VITE_*` se configurent dans Vercel (Project → Settings → Environment Variables). Toute nouvelle variable doit y être ajoutée, sinon elle sera vide en production.
- Pas de GitHub Pages ni de workflow GitHub Actions de déploiement : ne pas en ajouter.

## Commandes
- `npm run dev` : serveur local Vite
- `npm run build` : build Vite, puis `scripts/generate-genre-pages.mjs`, qui génère une page HTML statique par genre (`dist/genre/<slug>/`), un index A-Z (`dist/genres/`) et le `sitemap.xml`
- `npm run lint` : ESLint
- Vérifier les types pour de vrai : `npx tsc -p tsconfig.app.json --noEmit`. Le `tsc` du script de build ne vérifie rien, parce que `tsconfig.json` n'a que des `references` sans `-b`.

## Structure
- `src/App.tsx` : état global de l'app (onglet, langue, pool de la roue, élément sélectionné), sauvegardé dans localStorage
- `src/components/` : un composant par écran ou bloc (`Wheel`, `ResultCard`, `Passport`, `EmergingArtists`, `Concerts`, `Profile`, `Groups`…) ; primitives dans `src/components/ui/`
- `src/services/` : toute la logique d'accès aux données et aux API externes
  - Supabase : `profile`, `social`, `groups`, `ratingsStore`, `gamification`, `achievement`, `leaderboard`, `subscription`, `userBehavior`, `userSubmissions`, `emergingArtists`
  - API externes : `lastfm`, `musicbrainz`, `bandsintown`, `ticketmaster`, `concerts`
  - Personnalisation : `wheelPersonalization` (construit le pool de la roue à partir du comportement de l'utilisateur)
- `src/data/` : données statiques
  - `genres.ts` : la source de vérité, environ 2 900 genres (environ 10 Mo), type `Item` défini dans `src/types.ts` (`name`, `descriptionFr`, `descriptionEn`, `artists`, `subgenres`, `regions`, `cities`, `spotify`, `origin`, `relatedCountries`, `year`)
  - `matrix.ts` : matrice de similarité. Pour chaque genre, ses 8 genres les plus proches avec un score entre 0 et 1. Elle n'est pas symétrique. Incrémenter `MATRIX_VERSION` à chaque changement de logique.
  - `countries.ts`, `cityStyleBoosts.ts`
  - `years.ts` : une entrée par année, mais une description par période (par décennie depuis 1910). Toutes les années d'une même période partagent le même texte : vérifier que la période correspond bien à l'année (une erreur de décalage d'une décennie a déjà eu lieu). Ne mettre une playlist Spotify que si on a vérifié qu'elle correspond à la période ; sinon un lien de recherche.
  - `genresLite.ts` : ce que l'app importe. Mêmes genres que `genres.ts`, mais `descriptionFr` et `descriptionEn` vides et un champ `descSlug` en plus. Ne jamais importer `genres.ts` directement dans le code de l'app : ça remettrait 10 Mo dans le bundle.

## Comportements clés de l'app
- L'app est utilisable sans compte : la roue, les fiches et l'écoute marchent pour tout le monde. Le compte n'est demandé que pour sauvegarder (notes dans le cloud, passeport, profil, artistes émergents). Le bouton « Se connecter » de l'en-tête ouvre `AuthGate` dans une fenêtre ; ne pas remettre de mur de connexion plein écran.
- Liens partageables (`src/lib/share.ts`) : `?g=<slug>` ouvre un genre, `?c=<slug>` un pays, `?y=<année>` une année. L'adresse est mise à jour quand une fiche s'affiche. Le bouton « Partager » d'un genre partage la page statique `/genre/<slug>/` (meilleur aperçu sur Reddit et les messageries), qui renvoie vers `/?g=<slug>`.
- La roue (`Wheel.tsx`) affiche 16 segments tirés au hasard dans le pool et les renouvelle à chaque lancer. Le gagnant est tiré parmi ces segments, ce qui garde un tirage uniforme sur tout le pool. La liste passée à `Wheel` doit être mémoïsée (`useMemo`), sinon les segments changent en plein lancer.
- Scènes locales (`LocalScenes.tsx`, `src/lib/localScenes.ts`) : sur la fiche d'un pays, une puce par région ou ville, fusionnées depuis `regions`, `cities` et `cityStyles` de `countries.ts`. Pour enrichir une ville, ajouter une entrée `cityStyles` (`city`, `noteFr`, `noteEn`) ou `cities` (`name`, `styles`, `artists`, `spotify`).
- Écoute dans la fiche (`ListenPreview.tsx`) : lecteur Spotify intégré si l'élément a une vraie playlist, sinon extraits de 30 s via l'API publique de Deezer en JSONP (pas de clé, pas de CORS).

## Chargement des descriptions de genres
- Le plugin Vite `scripts/genres-split-plugin.mjs` lit `genres.ts` et produit le module `virtual:genres-lite` (exposé par `src/data/genresLite.ts`) ainsi qu'un fichier `/genre-desc/<slug>.json` par genre (`{ "fr": "...", "en": "..." }`). En dev, ces fichiers sont servis depuis la mémoire ; au build, ils sont écrits dans `dist/genre-desc/`.
- Pour afficher une description, utiliser le hook `useItemDescription(item, language)` (`src/hooks/useItemDescription.ts`), qui renvoie `{ text, loading }`. Il marche aussi pour les pays et les années, dont la description est déjà dans l'objet.
- Les slugs viennent de `scripts/genre-slugs.mjs`, partagé avec `generate-genre-pages.mjs`.

## Règles de travail sur les données
- `genres.ts` et `matrix.ts` sont énormes : ne jamais les réécrire en entier. Les modifier par petites éditions ciblées ou par script.
- Un genre ajouté dans `genres.ts` doit avoir `descriptionFr` et `descriptionEn`, et son `name` doit rester unique, parce que le slug de sa page SEO en dépend.
- Le bundle JS principal fait environ 2,2 Mo (450 Ko gzip). Toute nouvelle grosse donnée doit être chargée à la demande (`import()` dynamique ou fichier JSON) plutôt qu'ajoutée au bundle principal.

## Supabase (sécurité)
- Seule la clé `anon` est utilisée côté client, via `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`. Aucune clé `service_role` ne doit jamais apparaître dans le frontend.
- Tables utilisées : `profiles`, `ratings`, `follows`, `groups`, `group_members`, `group_events`, `group_discoveries`, `group_challenges`, `concert_attendance`, `concert_photos`, `user_streaks`, `user_behavior`, `user_achievements`, `achievements`, `daily_challenges`, `activity_feed`, `artist_votes`, `user_artist_submissions`, `subscriptions`, `usage_tracking`, plus le bucket de stockage `avatars`.
- Chaque table qui contient des données d'utilisateur doit avoir la RLS activée, avec des policies basées sur `auth.uid()`. Quand une tâche touche la base, fournir le SQL (table, index, policies RLS) dans la même réponse.
- Les appels Supabase vont dans `src/services/`, jamais directement dans les composants. Toujours traiter le champ `error` retourné.

## Icônes et images de partage
- `public/favicon.svg` est la source de l'icône ; `apple-touch-icon.png`, `icon-192.png` et `icon-512.png` en sont des rendus (manifest : `public/manifest.webmanifest`).
- `public/og-image.jpg` (1200×630) est l'aperçu des liens partagés, utilisé aussi par les pages de genre statiques.

## Variables d'environnement
- Toutes les variables lues par l'app commencent par `VITE_` et se retrouvent donc en clair dans le JavaScript envoyé au navigateur. N'y mettre que des clés prévues pour être publiques.
- Les fichiers `.env` et `.env.local` ne doivent jamais être commités. Les valeurs de production sont dans les variables d'environnement du projet Vercel.

## Conventions
- Composants fonctionnels et hooks uniquement, un composant par fichier, nom en PascalCase.
- Tout texte visible passe par la fonction `t(fr, en)` ou reçoit la prop `language` : pas de texte dans une seule langue.
- Respecter `noUnusedLocals` et `noUnusedParameters`.

## Façon de travailler
- Je code depuis mon téléphone avec l'éditeur web de GitHub : donne-moi toujours des fichiers complets, prêts à copier-coller, avec le chemin du fichier en en-tête. Pas de diffs partiels ni de « … reste inchangé ». Exception : `genres.ts` et `matrix.ts`, pour lesquels on donne seulement l'entrée à ajouter ou à modifier.
- Avant de déclarer une tâche terminée : `npm run build` doit passer, et `npx tsc -p tsconfig.app.json --noEmit` ne doit pas avoir de nouvelle erreur dans les fichiers modifiés.

## Points connus à corriger
- `src/components/Explore.tsx` et `src/components/MusicWheel.tsx` ne sont utilisés nulle part, et `Explore.tsx` importe `@/data/decades`, qui n'existe pas.
- `EmergingArtists.tsx` importe le type `EmergingArtist`, qui n'est pas exporté par `src/services/emergingArtists.ts`.
