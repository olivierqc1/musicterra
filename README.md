# Music Explorer

Une application web pour explorer des genres musicaux et des connexions culturelles entre pays.

## Fonctionnalités

- Exploration des genres musicaux via une roue aléatoire
- Découverte des connexions musicales entre pays
- Recherche de genres et pays
- Gestion des préférences utilisateur
- Intégration avec Spotify (simulation)
- Mode clair/sombre
- Support multilingue (FR/EN)
- Responsive design pour mobile et desktop

## Installation

1. Clonez ce dépôt
```bash
git clone https://github.com/votre-utilisateur/music-explorer.git
cd music-explorer
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez Firebase
   - Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
   - Obtenez vos clés d'API
   - Créez un fichier `.env.local` à la racine du projet avec les variables suivantes:
   ```
   REACT_APP_FIREBASE_API_KEY=votre_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=votre_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=votre_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=votre_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=votre_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=votre_app_id
   ```

4. Démarrez l'application en mode développement
```bash
npm start
```

## Déploiement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com/) si vous n'en avez pas déjà un
2. Connectez votre compte GitHub à Vercel
3. Importez votre projet depuis GitHub
4. Configurez les variables d'environnement (identiques à celles du fichier `.env.local`)
5. Déployez!

## Structure du projet

```
src/
 ├── components/         # Composants React
 │   ├── UI/             # Composants d'interface utilisateur
 │   └── ...
 ├── context/            # Contextes React (thème, authentification)
 ├── data/               # Données statiques
 ├── hooks/              # Hooks personnalisés
 ├── pages/              # Pages de l'application
 ├── services/           # Services (Firebase, API)
 ├── types/              # Types TypeScript
 ├── App.tsx             # Composant principal
 ├── index.tsx           # Point d'entrée
 └── ...
```

## Technologie utilisées

- React 18
- TypeScript
- Firebase (Auth, Firestore)
- React Router
- CSS Modules

## Fonctionnalités à venir

- Intégration réelle avec l'API Spotify
- Plus de genres et pays
- Visualisations de données musicales
- Support pour plus de langues
- Mode hors-ligne

## Licence

MIT
