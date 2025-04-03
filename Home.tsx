import React from 'react';
import SearchBar from '../components/UI/SearchBar';
import SearchResults from '../components/SearchResults';
import SearchHistory from '../components/SearchHistory';
import Wheel from '../components/Wheel';
import GenreDetails from '../components/GenreDetails';
import CountryConnections from '../components/CountryConnections';
import Recommendations from '../components/Recommendations';
import SpotifyData from '../components/SpotifyData';
import { Genre, UserPreferences   return (
    <div className="home-container">
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        placeholder={t.searchPlaceholder}
        buttonText={t.search}
      />
      
      {userPreferences.searchHistory && userPreferences.searchHistory.length > 0 && (
        <SearchHistory 
          history={userPreferences.searchHistory}
          onSelectTerm={selectSearchHistoryTerm}
          title={t.recentSearches}
        />
      )}
      
      {searchTerm && (
        <SearchResults 
          results={searchResults}
          noResultsText={t.noResults}
          genresTitle={t.genres}
          countriesTitle={t.countries}
          searchResultsTitle={t.searchResults}
        />
      )}
      
      <div className={`wheels-section ${isMobile ? 'mobile' : ''}`}>
        <Wheel 
          type="genre"
          items={genreData.genres}
          rotation={wheelRotation.genre}
          onSpin={() => handleSpin('genre')}
          title={t.genreWheel}
          spinButtonText={t.spin}
        />
        
        <Wheel 
          type="country"
          items={Object.keys(countriesData).map(name => ({ name }))}
          rotation={wheelRotation.country}
          onSpin={() => handleSpin('country')}
          title={t.countryWheel}
          spinButtonText={t.spin}
        />
      </div>
      
      {selectedGenre && (
        <GenreDetails 
          genre={selectedGenre}
          onRate={(rating) => rateItem('genre', selectedGenre.name, rating)}
          onShare={() => shareItem('genre', selectedGenre.name)}
          currentRating={userPreferences.ratings[`genre:${selectedGenre.name}`] || 0}
          shareButtonText={t.share}
        />
      )}
      
      <Recommendations 
        recommendations={recommendations}
        onSelectGenre={(genre) => window.location.href = `/genre/${genre.name}`}
        onSelectCountry={(country) => window.location.href = `/country/${country}`}
        recommendedTitle={t.recommended}
        recommendedGenresTitle={t.recommendedGenres}
        recommendedCountriesTitle={t.recommendedCountries}
        relatedGenresTitle={t.relatedGenres}
        artistsToDiscoverTitle={t.artistsToDiscover}
        isMobile={isMobile}
      />
      
      <SpotifyData 
        isConnected={userPreferences.spotifyConnected}
        data={spotifyData}
        onConnect={connectToSpotify}
        spotifyTitle="Spotify"
        connectButtonText={t.connectSpotify}
        tracksTitle={t.spotifyTracks}
        artistsTitle={t.spotifyArtists}
        recommendationsTitle={t.spotifyRecommendations}
      />
      
      {selectedCountry && countriesData[selectedCountry.name] && (
        <CountryConnections 
          country={selectedCountry.name}
          countryDetails={countriesData[selectedCountry.name]}
          onRate={(rating) => rateItem('country', selectedCountry.name, rating)}
          onShare={() => shareItem('country', selectedCountry.name)}
          currentRating={userPreferences.ratings[`country:${selectedCountry.name}`] || 0}
          shareButtonText={t.share}
          relatedCountriesTitle={t.relatedCountries}
          genresTitle={t.genres}
          popularArtistsTitle={t.popularArtists}
          traditionalMusicTitle={t.traditionalMusic}
        />
      )}
    </div>
  );
} from '../types/types';
import { Artist } from '../types/types';
import genreData from '../data/genreData';
import countriesData from '../data/countriesData';

interface HomeProps {
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
  language: 'fr' | 'en';
  translations: {
    fr: Record<string, string>;
    en: Record<string, string>;
  };
  isMobile: boolean;
}

const Home: React.FC<HomeProps> = ({
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
  language,
  translations,
  isMobile
}) => {
  const t = translations[language];

  return (
    <div className="home-container">
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        placeholder={t.searchPlaceholder}
        buttonText={t.search}
      />
      
      {userPreferences.searchHistory && userPreferences.searchHistory.length > 0 && (
        <SearchHistory 
          history={userPreferences.searchHistory}
          onSelectTerm={selectSearchHistoryTerm}
          title={t.recentSearches}
        />
      )}
      
      {searchTerm && (
        <SearchResults 
          results={searchResults}
          noResultsText={t.noResults}
          genresTitle={t.genres}
          countriesTitle={t.countries}
          searchResultsTitle={t.searchResults}
        />
      )}
      
      <div className={`wheels-section ${isMobile ? 'mobile' : ''}`}>
        <Wheel 
          type="genre"
          items={genreData.genres}
          rotation={wheelRotation.genre}
          onSpin={() => handleSpin('genre')}
          title={t.genreWheel}
          spinButtonText={t.spin}
        />
        
        <Wheel 
          type="country"
          items={Object.keys(countriesData).map(name => ({ name }))}
          rotation={wheelRotation.country}
          onSpin={() => handleSpin('country')}
          title={t.countryWheel}
          spinButtonText={t.spin}
        />
      </div>
      
      {selectedGenre && (
        <GenreDetails 
          genre={selectedGenre}
          onRate={(rating) => rateItem('genre', selectedGenre.name, rating)}
          onShare={() => shareItem('genre', selectedGenre.name)}
          currentRating={userPreferences.ratings[`genre:${selectedGenre.name}`] || 0}
          shareButtonText={t.share}
        />
      )}
      
      {selectedCountry && (
        <CountryConnections 
          country={selectedCountry.name}
          countryDetails={countriesData[selectedCountry.name]}
          onRate={(rating) => rateItem('country', selectedCountry.name, rating)}
          onShare={() => shareItem('country', selectedCountry.name)}
          currentRating={userPreferences.ratings[`country:${selectedCountry.name}`] || 0}
          shareButtonText={t.share}
          relatedCountriesTitle={t.relatedCountries}
          genresTitle={t.genres}
          popularArtistsTitle={t.popularArtists}
          traditionalMusicTitle={t.traditionalMusic}
        />
