import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GenreDetails from './pages/GenreDetails';
import CountryDetails from './pages/CountryDetails';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import NotificationContainer from './components/UI/NotificationContainer';
import AuthModal from './components/UI/AuthModal';
import MobileMenu from './components/UI/MobileMenu';
import LoadingOverlay from './components/UI/LoadingOverlay';
import { User, Genre, Notification, UserPreferences } from './types/types';
import { Artist } from './types/types';

interface AppRoutesProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  user: User | null;
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (isOpen: boolean) => void;
  isLoginMode: boolean;
  setIsLoginMode: (isLoginMode: boolean) => void;
  authError: string | null;
  formData: { email: string; password: string; username: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.FormEvent) => void;
  handleSignUp: (e: React.FormEvent) => void;
  handleLogout: () => void;
  isLoading: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  searchResults: { genres: Genre[]; countries: string[] };
  userPreferences: UserPreferences;
  selectSearchHistoryTerm: (term: string) => void;
  handleSpin: (type: 'genre' | 'country') => void;
  wheelRotation: { genre: number; country: number };
  selectedGenre: Genre | null;
  selectedCountry: { name: string } | null;
  rateItem: (itemType: 'genre' | 'country', itemName: string, rating: number) => void;
  shareItem: (itemType: 'genre' | 'country', itemName: string) => void;
  connectToSpotify: () => Promise<void>;
  spotifyData: {
    topTracks: any[];
    topArtists: any[];
    recommendations: any[];
  };
  recommendations: {
    genres: Genre[];
    countries: string[];
    related: Genre[];
    artists: Artist[];
  };
  translations: {
    fr: Record<string, string>;
    en: Record<string, string>;
  };
  notifications: Notification[];
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  theme,
  toggleTheme,
  user,
  language,
  setLanguage,
  isAuthModalOpen,
  setIsAuthModalOpen,
  isLoginMode,
  setIsLoginMode,
  authError,
  formData,
  handleInputChange,
  handleLogin,
  handleSignUp,
  handleLogout,
  isLoading,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  mobileMenuRef,
  isMobile,
  searchTerm,
  setSearchTerm,
  handleSearch,
  searchResults,
  userPreferences,
  selectSearchHistoryTerm,
  handleSpin,
  wheelRotation,
  selectedGenre,
  selectedCountry,
  rateItem,
  shareItem,
  connectToSpotify,
  spotifyData,
  recommendations,
  translations,
  notifications
}) => {
  const t = translations[language];

  return (
    <Router>
      {isLoading && <LoadingOverlay message={t.loading} />}
      
      <Header 
        user={user}
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={setLanguage}
        isMobile={isMobile}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
        setIsLoginMode={setIsLoginMode}
        handleLogout={handleLogout}
        t={t}
      />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
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
              language={language}
              translations={translations}
              isMobile={isMobile}
            />
          } 
        />
        <Route 
          path="/genre/:genreName" 
          element={<GenreDetails rateItem={rateItem} shareItem={shareItem} t={t} />} 
        />
        <Route 
          path="/country/:countryName" 
          element={<CountryDetails rateItem={rateItem} shareItem={shareItem} t={t} />} 
        />
        <Route 
          path="/profile" 
          element={
            <Profile 
              user={user}
              userPreferences={userPreferences}
              spotifyData={spotifyData}
              connectToSpotify={connectToSpotify}
              t={t}
            />
          } 
        />
        <Route path="*" element={<NotFound t={t} />} />
      </Routes>
      
      <Footer t={t} />
      
      {/* Modals and Overlays */}
      {isAuthModalOpen && (
        <AuthModal 
          isLoginMode={isLoginMode}
          setIsLoginMode={setIsLoginMode}
          authError={authError}
          formData={formData}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          setIsAuthModalOpen={setIsAuthModalOpen}
          isLoading={isLoading}
          t={t}
        />
      )}
      
      {isMobile && (
        <MobileMenu 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          mobileMenuRef={mobileMenuRef}
          language={language}
          setLanguage={setLanguage}
          toggleTheme={toggleTheme}
          theme={theme}
          user={user}
          handleLogout={handleLogout}
          setIsAuthModalOpen={setIsAuthModalOpen}
          setIsLoginMode={setIsLoginMode}
          t={t}
        />
      )}
      
      <NotificationContainer notifications={notifications} />
    </Router>
  );
};

export default AppRoutes;
