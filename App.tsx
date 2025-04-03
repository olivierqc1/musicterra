import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './context/ThemeContext';
import AppRoutes from './routes';
import './App.css';
import { User, Genre, Variant, Artist, Notification, UserPreferences } from './types/types';
import { useAuth } from './context/AuthContext';
import { useNotifications } from './hooks/useNotifications';
import genreData from './data/genreData';
import countriesData from './data/countriesData';

function App() {
  // Use theme hook from context
  const { theme, toggleTheme } = useTheme();
  
  // Use authentication hook
  const { 
    user, 
    login, 
    logout, 
    signup, 
    isLoading: authLoading 
  } = useAuth();

  // Use notifications hook
  const { 
    notifications, 
    addNotification 
  } = useNotifications();

  // État pour gérer les préférences utilisateur
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    favoriteGenres: [],
    favoriteCountries: [],
    ratings: {},
    location: null,
    searchHistory: [],
    theme: 'dark',
    spotifyConnected: false
  });
  const [lastSpinDate, setLastSpinDate] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<{name: string} | null>(null);
  const [wheelRotation, setWheelRotation] = useState({ genre: 0, country: 0 });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<{
    genres: Genre[],
    countries: string[]
  }>({
    genres: [],
    countries: []
  });
  const [recommendations, setRecommendations] = useState<{
    genres: Genre[],
    countries: string[],
    related: Genre[],
    artists: Artist[]
  }>({
    genres: [],
    countries: [],
    related: [],
    artists: []
  });

  // État pour les données de l'API Spotify
  const [spotifyData, setSpotifyData] = useState<{
    topTracks: any[],
    topArtists: any[],
    recommendations: any[]
  }>({
    topTracks: [],
    topArtists: [],
    recommendations: []
  });

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  // Vérification si l'écran est en mode mobile
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  // Écouter les changements de taille d'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Détecter les clics à l'extérieur du menu mobile
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sauvegarde des préférences utilisateur
  useEffect(() => {
    const initializeApp = async () => {
      setIsLoading(true);
      
      // Simuler l'initialisation de Firebase
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Vérifier si un utilisateur est déjà connecté
      const savedUser = localStorage.getItem("musicExplorerUser");
      if (savedUser) {
        // Charger les préférences depuis Firestore (simulé)
        await loadUserPreferences(JSON.parse(savedUser).id);
      } else {
        // Charger les préférences depuis le localStorage
        const savedPreferences = localStorage.getItem("musicExplorerPreferences");
        if (savedPreferences) {
          setUserPreferences(JSON.parse(savedPreferences));
        }
      }
      
      setIsLoading(false);
    };

    initializeApp();
  }, []);

  // Effet pour sauvegarder les préférences
  useEffect(() => {
    if (user) {
      // Sauvegarder dans Firestore (simulé)
      saveUserPreferencesToCloud(user.id, userPreferences);
    } else {
      // Sauvegarder en local
      localStorage.setItem(
        "musicExplorerPreferences",
        JSON.stringify(userPreferences)
      );
    }
  }, [userPreferences, user]);

  // Générer des recommandations basées sur les préférences de l'utilisateur
  useEffect(() => {
    generateRecommendations();
  }, [userPreferences.favoriteGenres, userPreferences.favoriteCountries]);

  // Simuler le chargement des préférences utilisateur depuis Firestore
  const loadUserPreferences = async (userId: string) => {
    // Simuler un délai de chargement
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Pour la démo, charger depuis localStorage mais en pratique, ce serait depuis Firestore
    const savedPreferences = localStorage.getItem(`musicExplorerPreferences_${userId}`);
    if (savedPreferences) {
      setUserPreferences(JSON.parse(savedPreferences));
    }
  };

  // Simuler la sauvegarde des préférences utilisateur dans Firestore
  const saveUserPreferencesToCloud = (userId: string, preferences: UserPreferences) => {
    // Sauvegarder dans localStorage avec un préfixe spécifique à l'utilisateur
    localStorage.setItem(
      `musicExplorerPreferences_${userId}`,
      JSON.stringify(preferences)
    );
  };

  // Simuler une connexion à Spotify
  const connectToSpotify = async () => {
    // Simuler un délai d'authentification
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simuler la récupération de données depuis l'API Spotify
    const mockSpotifyData = {
      topTracks: [
        { id: "t1", name: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", image: "https://via.placeholder.com/50" },
        { id: "t2", name: "Billie Jean", artist: "Michael Jackson", album: "Thriller", image: "https://via.placeholder.com/50" },
        { id: "t3", name: "Imagine", artist: "John Lennon", album: "Imagine", image: "https://via.placeholder.com/50" }
      ],
      topArtists: [
        { id: "a1", name: "Queen", genre: "Rock", image: "https://via.placeholder.com/50" },
        { id: "a2", name: "Michael Jackson", genre: "Pop", image: "https://via.placeholder.com/50" },
        { id: "a3", name: "The Beatles", genre: "Rock", image: "https://via.placeholder.com/50" }
      ],
      recommendations: [
        { id: "r1", name: "Stairway to Heaven", artist: "Led Zeppelin", album: "Led Zeppelin IV", image: "https://via.placeholder.com/50" },
        { id: "r2", name: "Hotel California", artist: "Eagles", album: "Hotel California", image: "https://via.placeholder.com/50" },
        { id: "r3", name: "November Rain", artist: "Guns N' Roses", album: "Use Your Illusion I", image: "https://via.placeholder.com/50" }
      ]
    };
    
    setSpotifyData(mockSpotifyData);
    
    // Mettre à jour les préférences de l'utilisateur
    setUserPreferences(prev => ({
      ...prev,
      spotifyConnected: true
    }));
    
    setIsLoading(false);
    addNotification("Connexion à Spotify réussie!", "success");
  };

  // Algorithme de recommandation complet
  const generateRecommendations = () => {
    // Recommandations de genres
    let recommendedGenres: Genre[] = [];
    let relatedGenres: Genre[] = [];
    let recommendedArtists: Artist[] = [];
    
    // Si l'utilisateur a des genres favoris
    if (userPreferences.favoriteGenres.length > 0) {
      // Obtenir les genres liés aux favoris
      const relatedGenreNames = new Set<string>();
      const artistsFromFavorites = new Set<Artist>();
      
      userPreferences.favoriteGenres.forEach(favGenre => {
        const genre = genreData.genres.find(g => g.name === favGenre);
        if (genre) {
          genre.variants.forEach(variant => {
            if (variant.relatedGenres) {
              variant.relatedGenres.forEach(rg => relatedGenreNames.add(rg));
            }
            
            // Collecter des artistes pour les recommandations
            if (variant.artists) {
              variant.artists.forEach(artist => artistsFromFavorites.add(artist));
            }
          });
        }
      });
      
      // Ajouter des genres recommandés qui ne sont pas déjà dans les favoris
      genreData.genres.forEach(genre => {
        if (!userPreferences.favoriteGenres.includes(genre.name)) {
          // Si ce genre est lié à un favori ou partage des tags avec des favoris
          const isRelated = Array.from(relatedGenreNames).some(rg =>
            genre.name.includes(rg) ||
            genre.variants.some(v => v.name.includes(rg))
          );
          
          if (isRelated) {
            relatedGenres.push(genre);
          } else if (genre.popularity && genre.popularity > 75) {
            // Sinon, suggérer des genres populaires
            recommendedGenres.push(genre);
          }
        }
      });
      
      // Limiter les artistes recommandés à un maximum de 6
      recommendedArtists = Array.from(artistsFromFavorites).slice(0, 6);
    } else {
      // Si aucun favori, recommander les genres les plus populaires
      recommendedGenres = genreData.genres
        .filter(g => g.popularity && g.popularity > 70)
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, 3);
      
      // Recommander quelques artistes populaires
      genreData.genres.forEach(genre => {
        genre.variants.forEach(variant => {
          if (variant.artists) {
            recommendedArtists = [...recommendedArtists, ...variant.artists].slice(0, 6);
          }
        });
      });
    }
    
    // Recommandations de pays
    let recommendedCountries: string[] = [];
    
    // Si l'utilisateur a des pays favoris
    if (userPreferences.favoriteCountries.length > 0) {
      const countrySuggestions = new Set<string>();
      
      userPreferences.favoriteCountries.forEach(favCountry => {
        if (countriesData[favCountry] && countriesData[favCountry].related) {
          countriesData[favCountry].related.forEach((country: string) => {
            if (!userPreferences.favoriteCountries.includes(country)) {
              countrySuggestions.add(country);
            }
          });
        }
      });
      
      recommendedCountries = Array.from(countrySuggestions).slice(0, 3);
    } else {
      // Si aucun pays favori, suggérer quelques pays avec des scènes musicales diverses
      recommendedCountries = Object.keys(countriesData).slice(0, 3);
    }
    
    // Mélanger légèrement les recommandations pour plus de variété
    recommendedGenres = shuffleArray(recommendedGenres).slice(0, 3);
    relatedGenres = shuffleArray(relatedGenres).slice(0, 3);
    
    setRecommendations({
      genres: recommendedGenres,
      countries: recommendedCountries,
      related: relatedGenres,
      artists: recommendedArtists
    });
  };

  // Fonction pour mélanger un tableau
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Noter un genre ou un pays
  const rateItem = (itemType: 'genre' | 'country', itemName: string, rating: number) => {
    setUserPreferences(prev => ({
      ...prev,
      ratings: {
        ...prev.ratings,
        [`${itemType}:${itemName}`]: rating
      },
      interactionHistory: [
        ...(prev.interactionHistory || []),
        {
          timestamp: Date.now(),
          type: rating >= 4 ? 'like' : 'view',
          itemType,
          itemName
        }
      ]
    }));
    
    addNotification(`${itemType === 'genre' ? 'Genre' : 'Pays'} noté ${rating}/5`, "success");
  };

  // Partager sur les réseaux sociaux
  const shareItem = (itemType: 'genre' | 'country', itemName: string) => {
    // Dans une vraie application, vous utiliseriez les API des médias sociaux
    const shareText = `Je viens de découvrir ${itemType === 'genre' ? 'le genre' : 'la musique de'} ${itemName} sur Music Explorer!`;
    const shareUrl = `https://musicexplorer.example.com/share/${itemType}/${encodeURIComponent(itemName)}`;
    
    // Simuler le partage
    console.log("Partage:", shareText, shareUrl);
    // Dans une vraie application:
    // window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    
    addNotification("Lien de partage copié!", "success");
  };

  // Simuler l'inscription d'un utilisateur
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setIsLoading(true);
    
    const { email, password, username } = formData;
    
    // Validation simple
    if (!email || !password || !username) {
      setAuthError("Tous les champs sont requis");
      setIsLoading(false);
      return;
    }
    
    if (password.length < 6) {
      setAuthError("Le mot de passe doit contenir au moins 6 caractères");
      setIsLoading(false);
      return;
    }
    
    try {
      await signup(email, password, username);
      setIsAuthModalOpen(false);
      addNotification("Inscription réussie! Bienvenue!", "success");
    } catch (error) {
      setAuthError("Erreur lors de l'inscription");
    } finally {
      setIsLoading(false);
    }
  };

  // Simuler la connexion d'un utilisateur
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setIsLoading(true);
    
    const { email, password } = formData;
    
    // Validation simple
    if (!email || !password) {
      setAuthError("L'email et le mot de passe sont requis");
      setIsLoading(false);
      return;
    }
    
    try {
      await login(email, password);
      setIsAuthModalOpen(false);
      addNotification("Connexion réussie!", "success");
    } catch (error) {
      setAuthError("Email ou mot de passe incorrect");
    } finally {
      setIsLoading(false);
    }
  };

  // Déconnexion de l'utilisateur
  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    
    // Réinitialiser les préférences à celles en local
    const savedPreferences = localStorage.getItem("musicExplorerPreferences");
    if (savedPreferences) {
      setUserPreferences(JSON.parse(savedPreferences));
    } else {
      setUserPreferences({
        favoriteGenres: [],
        favoriteCountries: [],
        ratings: {},
        location: null,
        searchHistory: [],
        theme: theme,
        spotifyConnected: false
      });
    }
    
    addNotification("Vous avez été déconnecté", "info");
  };

  // Gérer la rotation de la roue
  const handleSpin = (type: 'genre' | 'country') => {
    const today = new Date().toDateString();
    
    if (lastSpinDate === today) {
      addNotification(translations[language].dailyLimit, "info");
      return;
    }
    
    const newRotation = Math.floor(Math.random() * 360) + 1440;
    
    if (type === "genre") {
      setWheelRotation((prev) => ({
        ...prev,
        genre: prev.genre + newRotation,
      }));
      
      const selection = genreData.genres[Math.floor(Math.random() * genreData.genres.length)];
      
      setTimeout(() => {
        setSelectedGenre(selection);
        addNotification(`${selection.name} sélectionné!`, "success");
      }, 4000);
    } else {
      setWheelRotation((prev) => ({
        ...prev,
        country: prev.country + newRotation,
      }));
      
      const countries = Object.keys(countriesData);
      const selection = {
        name: countries[Math.floor(Math.random() * countries.length)],
      };
      
      setTimeout(() => {
        setSelectedCountry(selection);
        addNotification(`${selection.name} sélectionné!`, "success");
      }, 4000);
    }
    
    setLastSpinDate(today);
    updatePreferences();
  };

  // Mettre à jour les préférences
  const updatePreferences = () => {
    if (selectedGenre) {
      setUserPreferences((prev) => ({
        ...prev,
        favoriteGenres: [
          ...new Set([...prev.favoriteGenres, selectedGenre.name]),
        ],
      }));
    }
    
    if (selectedCountry) {
      setUserPreferences((prev) => ({
        ...prev,
        favoriteCountries: [
          ...new Set([...prev.favoriteCountries, selectedCountry.name]),
        ],
      }));
    }
  };

  // Fonction de recherche
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    // Sauvegarder dans l'historique de recherche
    setUserPreferences(prev => ({
      ...prev,
      searchHistory: [...new Set([searchTerm, ...(prev.searchHistory || [])])].slice(0, 10)
    }));
    
    // Rechercher dans les genres
    const foundGenres = genreData.genres.filter(genre =>
      genre.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      genre.variants.some(variant =>
        variant.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    
    // Rechercher dans les pays
    const foundCountries = Object.keys(countriesData).filter(country =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults({
      genres: foundGenres,
      countries: foundCountries
    });
    
    // Ajouter une interaction
    setUserPreferences(prev => ({
      ...prev,
      interactionHistory: [
        ...(prev.interactionHistory || []),
        {
          timestamp: Date.now(),
          type: 'search',
          itemType: 'genre',
          itemName: searchTerm
        }
      ]
    }));
    
    if (foundGenres.length === 0 && foundCountries.length === 0) {
      addNotification(`Aucun résultat pour "${searchTerm}"`, "info");
    } else {
      addNotification(`${foundGenres.length + foundCountries.length} résultats trouvés`, "success");
    }
  };

  // Gérer les changements de champs de formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Sélectionner un terme de recherche depuis l'historique
  const selectSearchHistoryTerm = (term: string) => {
    setSearchTerm(term);
    
    setTimeout(() => {
      const event = { preventDefault: () => {} } as React.FormEvent;
      handleSearch(event);
    }, 0);
  };

  // Translations
  const translations = {
    fr: {
      title: "Explorateur Musical",
      spin: "Tourner la Roue",
      nextSpin: "Prochaine rotation disponible dans",
      preferences: "Préférences",
      recommended: "Recommandé pour vous",
      profile: "Profil",
      location: "Localisation",
      genreWheel: "Roue des Genres",
      countryWheel: "Roue des Pays",
      dailyLimit: "Revenez demain pour une nouvelle rotation !",
      search: "Rechercher",
      searchPlaceholder: "Genres, pays, artistes...",
      searchResults: "Résultats de recherche",
      noResults: "Aucun résultat trouvé",
      recentSearches: "Recherches récentes",
      clearSearch: "Effacer",
      genres: "Genres",
      countries: "Pays",
      recommendedGenres: "Genres recommandés",
      recommendedCountries: "Pays recommandés",
      relatedGenres: "Genres connexes que vous pourriez aimer",
      popularTrends: "Tendances populaires",
      basedOnPreferences: "Basé sur vos préférences",
      rateThis: "Évaluez",
      artistsToDiscover: "Artistes à découvrir",
      seeMore: "Voir plus",
      connectSpotify: "Connecter Spotify",
      musicianCorner: "Coin des musiciens",
      login: "Connexion",
      signup: "Inscription",
      email: "Email",
      password: "Mot de passe",
      username: "Nom d'utilisateur",
      logout: "Déconnexion",
      welcome: "Bienvenue",
      loginTitle: "Connexion à votre compte",
      signupTitle: "Créer un compte",
      orSignup: "Ou inscrivez-vous",
      orLogin: "Ou connectez-vous",
      spotifyTracks: "Vos titres Spotify",
      spotifyArtists: "Vos artistes Spotify",
      spotifyRecommendations: "Recommandations Spotify",
      loading: "Chargement...",
      menu: "Menu",
      close: "Fermer",
      changeLanguage: "Changer de langue",
      myProfile: "Mon profil",
      myPreferences: "Mes préférences",
      spotifyData: "Données Spotify",
      shareProfile: "Partager mon profil",
      darkMode: "Mode sombre",
      lightMode: "Mode clair",
      switchTheme: "Changer de thème",
      share: "Partager",
      relatedCountries: "Pays avec des liens culturels",
      popularArtists: "Artistes populaires",
      traditionalMusic: "Musique traditionnelle",
    },
    en: {
      title: "Music Explorer",
      spin: "Spin the Wheel",
      nextSpin: "Next spin available in",
      preferences: "Preferences",
      recommended: "Recommended for you",
      profile: "Profile",
      location: "Location",
      genreWheel: "Genre Wheel",
      countryWheel: "Country Wheel",
      dailyLimit: "Come back tomorrow for a new spin!",
      search: "Search",
      searchPlaceholder: "Genres, countries, artists...",
      searchResults: "Search Results",
      noResults: "No results found",
      recentSearches: "Recent searches",
      clearSearch: "Clear",
      genres: "Genres",
      countries: "Countries",
      recommendedGenres: "Recommended Genres",
      recommendedCountries: "Recommended Countries",
      relatedGenres: "Related Genres You Might Like",
      popularTrends: "Popular Trends",
      basedOnPreferences: "Based on your preferences",
      rateThis: "Rate this",
      artistsToDiscover: "Artists to Discover",
      seeMore: "See more",
      connectSpotify: "Connect Spotify",
      musicianCorner: "Musician's Corner",
      login: "Login",
      signup: "Sign Up",
      email: "Email",
      password: "Password",
      username: "Username",
      logout: "Logout",
      welcome: "Welcome",
      loginTitle: "Login to your account",
      signupTitle: "Create an account",
      orSignup: "Or sign up",
      orLogin: "Or login",
      spotifyTracks: "Your Spotify Tracks",
      spotifyArtists: "Your Spotify Artists",
      spotifyRecommendations: "Spotify Recommendations",
      loading: "Loading...",
      menu: "Menu",
      close: "Close",
      changeLanguage: "Change language",
      myProfile: "My profile",
      myPreferences: "My preferences",
      spotifyData: "Spotify data",
      shareProfile: "Share my profile",
      darkMode: "Dark mode",
      lightMode: "Light mode",
      switchTheme: "Switch theme",
      share: "Share",
      relatedCountries: "Countries with cultural ties",
      popularArtists: "Popular artists",
      traditionalMusic: "Traditional music",
    },
  };

  const t = translations[language];

  // Rendu de l'application avec AppRoutes
  return (
    <AppRoutes 
      theme={theme}
      toggleTheme={toggleTheme}
      user={user}
      language={language}
      setLanguage={setLanguage}
      isAuthModalOpen={isAuthModalOpen}
      setIsAuthModalOpen={setIsAuthModalOpen}
      isLoginMode={isLoginMode}
      setIsLoginMode={setIsLoginMode}
      authError={authError}
      formData={formData}
      handleInputChange={handleInputChange}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      handleLogout={handleLogout}
      isLoading={isLoading || authLoading}
      isMobileMenuOpen={isMobileMenuOpen}
      setIsMobileMenuOpen={setIsMobileMenuOpen}
      mobileMenuRef={mobileMenuRef}
      isMobile={isMobile}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
      searchResults={searchResults}
      userPreferences={userPreferences}
      selectSearchHistoryTerm={selectSearchHistoryTerm}
      handleSpin={handleSpin}
      wheelRotation={wheelRotation}
      selectedGenre={selectedGenre}
      selectedCountry={selectedCountry}
      rateItem={rateItem}
      shareItem={shareItem}
      connectToSpotify={connectToSpotify}
      spotifyData={spotifyData}
      recommendations={recommendations}
      translations={translations}
      notifications={notifications}
    />
  );
}

export default App;
