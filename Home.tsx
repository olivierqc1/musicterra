
import React from 'react';
import SearchBar from '../components/UI/SearchBar';
import SearchResults from '../components/SearchResults';
import SearchHistory from '../components/SearchHistory';
import Wheel from '../components/Wheel';
import GenreDetails from '../components/GenreDetails';
import CountryConnections from '../components/CountryConnections';
import Recommendations from '../components/Recommendations';
import SpotifyData from '../components/SpotifyData';
import { Genre, UserPreferences } from '../types/types';
import { Artist } from '../types/types';
import genreData from '../data/genreData';
import countriesData from '../data/countriesData';
import { matrix } from '../data/matrix';

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
  recommendations
}) => {
  const currentDecade = "2010s"; // TODO: rendre dynamique

  const country = selectedCountry?.name;
  const matrixEntry = country && matrix[country] && matrix[country][currentDecade]
    ? matrix[country][currentDecade]
    : null;

  return (
    <div className="home">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      <SearchResults results={searchResults} />
      <SearchHistory
        history={userPreferences.searchHistory || []}
        onSelect={selectSearchHistoryTerm}
      />

      <Wheel
        wheelRotation={wheelRotation}
        handleSpin={handleSpin}
        selectedGenre={selectedGenre}
        selectedCountry={selectedCountry}
      />

      {matrixEntry && (
        <div className="matrix-recommendation">
          <h3>Genre dominant pour {country} dans les années {currentDecade} :</h3>
          <p>{matrixEntry.dominantGenre}</p>
          <p>Pays similaires : {matrixEntry.similarCountries.join(', ')}</p>
          <a href={matrixEntry.playlist} target="_blank" rel="noopener noreferrer">
            Écouter la playlist Spotify
          </a>
        </div>
      )}

      <Recommendations recommendations={recommendations} rateItem={rateItem} shareItem={shareItem} />
      <CountryConnections selectedCountry={selectedCountry} />
      <GenreDetails selectedGenre={selectedGenre} />
      <SpotifyData data={spotifyData} />
    </div>
  );
};

export default Home;
