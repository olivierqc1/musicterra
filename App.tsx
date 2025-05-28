import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';
import AppRoutes from './routes';
import './App.css';
import { User, Genre, Artist, UserPreferences } from './types/types';
import { useAuth } from './AuthContext';
import { useNotifications } from './hooks/useNotifications';
import genreData from './data/genreData';
import countriesData from './data/countriesData';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout, signup } = useAuth();
  const { notifications, addNotification } = useNotifications();

  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
  const [selectedCountry, setSelectedCountry] = useState<{ name: string } | null>(null);
  const [wheelRotation, setWheelRotation] = useState({ genre: 0, country: 0 });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState({ genres: [], countries: [] });
  const [recommendations, setRecommendations] = useState({ genres: [], countries: [], related: [], artists: [] });
  const [spotifyData, setSpotifyData] = useState({ topTracks: [], topArtists: [], recommendations: [] });

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({ email: '', password: '', username: '' });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const initializeApp = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const savedUser = localStorage.getItem("musicExplorerUser");
      if (savedUser) await loadUserPreferences(JSON.parse(savedUser).id);
      else {
        const savedPreferences = localStorage.getItem("musicExplorerPreferences");
        if (savedPreferences) setUserPreferences(JSON.parse(savedPreferences));
      }
      setIsLoading(false);
    };
    initializeApp();
  }, []);

  useEffect(() => {
    if (user) saveUserPreferencesToCloud(user.id, userPreferences);
    else localStorage.setItem("musicExplorerPreferences", JSON.stringify(userPreferences));
  }, [userPreferences, user]);

  useEffect(() => {
    generateRecommendations();
  }, [userPreferences.favoriteGenres, userPreferences.favoriteCountries]);

  const loadUserPreferences = async (userId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const savedPreferences = localStorage.getItem(`musicExplorerPreferences_${userId}`);
    if (savedPreferences) setUserPreferences(JSON.parse(savedPreferences));
  };

  const saveUserPreferencesToCloud = (userId: string, preferences: UserPreferences) => {
    localStorage.setItem(`musicExplorerPreferences_${userId}`, JSON.stringify(preferences));
  };

  const connectToSpotify = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const mockSpotifyData = {
      topTracks: [],
      topArtists: [],
      recommendations: []
    };
    setSpotifyData(mockSpotifyData);
    setUserPreferences(prev => ({ ...prev, spotifyConnected: true }));
    setIsLoading(false);
    addNotification("Connexion à Spotify réussie!", "success");
  };

  const generateRecommendations = () => {
    // ... (garde ta logique d'origine ici — pour ne pas saturer ce message)
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const rateItem = (itemType: 'genre' | 'country', itemName: string, rating: number) => {
    setUserPreferences(prev => ({
      ...prev,
      ratings: {
        ...prev.ratings,
        [`${itemType}:${itemName}`]: rating
      }
    }));
    addNotification(`${itemType} noté ${rating}/5`, "success");
  };

  const shareItem = (itemType: 'genre' | 'country', itemName: string) => {
    const shareText = `Je viens de découvrir ${itemType} ${itemName} sur Music Explorer!`;
    const shareUrl = `https://musicexplorer.example.com/share/${itemType}/${encodeURIComponent(itemName)}`;
    console.log("Partage:", shareText, shareUrl);
    addNotification("Lien de partage copié!", "success");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await login(formData.email, formData.password);
    setIsAuthModalOpen(false);
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signup(formData.email, formData.password, formData.username);
    setIsAuthModalOpen(false);
    setIsLoading(false);
  };

  const handleLogout = () => {
    logout();
    addNotification("Déconnecté", "info");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // ... ta logique de recherche
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectSearchHistoryTerm = (term: string) => {
    setSearchTerm(term);
    setTimeout(() => handleSearch({ preventDefault: () => {} } as React.FormEvent), 0);
  };

  const handleSpin = (type: 'genre' | 'country') => {
    // ... ta logique de roue
  };

  return (
    <div className={`App ${theme}`}>
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
        isLoading={isLoading}
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
        spotifyData={spotifyData}
        recommendations={recommendations}
        connectToSpotify={connectToSpotify}
        notifications={notifications}
      />
    </div>
  );
}

export default App;
