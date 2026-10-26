# MusicTerra — CLAUDE.md

Application web de découverte musicale (https://musicterra.xyz). L'utilisateur fait tourner une roue (genre, pays ou année), découvre une fiche détaillée, note ce qu'il écoute et remplit son « passeport ». S'y ajoutent des artistes émergents, des concerts, un profil social (abonnements, groupes, fil d'amis) et de la gamification (séries, succès, défis). Interface bilingue français / anglais.

## Stack
- React 19 + Vite 7, TypeScript (mode strict), SPA sans routeur : la navigation se fait par onglets (`discover`, `emerging`, `concerts`, `profile`) gérés dans `src/App.tsx`
- Styles : Tailwind CSS et objets de style dans `src/appStyles.ts`, animations `framer-motion`, icônes `lucide-react`
- Supabase : authentification et base de données (client dans `src/lib/supabase.ts`, contexte dans `src/context/AuthContext.tsx`)
- SEO : `react-helmet-async` (composant `src/components/SEO.tsx`) et pages statiques générées au build
- Alias d'import : `@/` → `src/`

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
  - `countries.ts`, `years.ts`, `cityStyleBoosts.ts`
  - Les fichiers `genres.v0.ts` à `genres.v13.ts`, `genres.vclaude.ts`, `genres-normalized.ts`, `genresv3.ts`, `matrix.v1.ts`, `years.v1.ts`, `countries.vo.ts` sont d'anciennes versions non importées. Ne pas les modifier et ne pas s'en servir comme référence.

## Règles de travail sur les données
- `genres.ts` et `matrix.ts` sont énormes : ne jamais les réécrire en entier. Les modifier par petites éditions ciblées ou par script.
- Un genre ajouté dans `genres.ts` doit avoir `descriptionFr` et `descriptionEn`, et son `name` doit rester unique, parce que le slug de sa page SEO en dépend.
- Le bundle JS fait près de 12 Mo, surtout à cause de `genres.ts`. Toute nouvelle grosse donnée doit être chargée avec `import()` dynamique plutôt qu'ajoutée au bundle principal.

## Supabase (sécurité)
- Seule la clé `anon` est utilisée côté client, via `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`. Aucune clé `service_role` ne doit jamais apparaître dans le frontend.
- Tables utilisées : `profiles`, `ratings`, `follows`, `groups`, `group_members`, `group_events`, `group_discoveries`, `group_challenges`, `concert_attendance`, `concert_photos`, `user_streaks`, `user_behavior`, `user_achievements`, `achievements`, `daily_challenges`, `activity_feed`, `artist_votes`, `user_artist_submissions`, `subscriptions`, `usage_tracking`, plus le bucket de stockage `avatars`.
- Chaque table qui contient des données d'utilisateur doit avoir la RLS activée, avec des policies basées sur `auth.uid()`. Quand une tâche touche la base, fournir le SQL (table, index, policies RLS) dans la même réponse.
- Les appels Supabase vont dans `src/services/`, jamais directement dans les composants. Toujours traiter le champ `error` retourné.

## Variables d'environnement
- Toutes les variables lues par l'app commencent par `VITE_` et se retrouvent donc en clair dans le JavaScript envoyé au navigateur. N'y mettre que des clés prévues pour être publiques.
- Les fichiers `.env` et `.env.local` ne doivent jamais être commités. Les valeurs de production se configurent dans les variables d'environnement de l'hébergeur.

## Conventions
- Composants fonctionnels et hooks uniquement, un composant par fichier, nom en PascalCase.
- Tout texte visible passe par la fonction `t(fr, en)` ou reçoit la prop `language` : pas de texte dans une seule langue.
- Respecter `noUnusedLocals` et `noUnusedParameters`.

## Façon de travailler
- Je code depuis mon téléphone avec l'éditeur web de GitHub : donne-moi toujours des fichiers complets, prêts à copier-coller, avec le chemin du fichier en en-tête. Pas de diffs partiels ni de « … reste inchangé ». Exception : `genres.ts` et `matrix.ts`, pour lesquels on donne seulement l'entrée à ajouter ou à modifier.
- Avant de déclarer une tâche terminée : `npm run build` doit passer, et `npx tsc -p tsconfig.app.json --noEmit` ne doit pas avoir de nouvelle erreur dans les fichiers modifiés.

## Points connus à corriger
- `src/lib/ratings.ts` contient des erreurs de syntaxe ; il n'est importé nulle part.
- `src/lib/firebaseConfig.ts` est un vestige : Firebase n'est pas installé et le fichier n'est pas importé.
- `src/components/Explore.tsx` importe `@/data/decades`, qui n'existe pas.
- `EmergingArtists.tsx` importe le type `EmergingArtist`, qui n'est pas exporté par `src/services/emergingArtists.ts`.
- `src/lib/supabase.ts` écrit l'URL Supabase dans la console au démarrage : à retirer.
- Le site n'est plus hébergé sur Vercel, mais `App.tsx` charge encore `@vercel/analytics`, qui ne fonctionne que sur Vercel : retirer l'import, le composant `<Analytics />` et la dépendance.
