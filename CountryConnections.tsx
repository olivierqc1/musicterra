import React from 'react';
import { Link } from 'react-router-dom';
import './CountryConnections.css';

interface CountryConnectionsProps {
  country: string;
  countryDetails: {
    related: string[];
    genres: string[];
    popularArtists: string[];
    musicTraditions: string[];
    flag: string;
  };
  onRate: (rating: number) => void;
  onShare: () => void;
  currentRating: number;
  shareButtonText: string;
  relatedCountriesTitle: string;
  genresTitle: string;
  popularArtistsTitle: string;
  traditionalMusicTitle: string;
}

const CountryConnections: React.FC<CountryConnectionsProps> = ({
  country,
  countryDetails,
  onRate,
  onShare,
  currentRating,
  shareButtonText,
  relatedCountriesTitle,
  genresTitle,
  popularArtistsTitle,
  traditionalMusicTitle
}) => {
  return (
    <div className="country-connections-container">
      <div className="country-connections-header">
        <h2>Connexions Musicales</h2>
        <button
          className="button button-small share-button"
          onClick={onShare}
        >
          {shareButtonText}
        </button>
      </div>
      
      <div className="country-card">
        <h3 className="country-title">
          {countryDetails.flag} {country}
        </h3>
        
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= currentRating ? 'active' : ''}`}
              onClick={() => onRate(star)}
            >
              ★
            </span>
          ))}
        </div>
        
        <div className="country-section">
          <h4>{relatedCountriesTitle}</h4>
          <div className="country-tags">
            {countryDetails.related.map((relatedCountry, idx) => (
              <Link 
                key={idx}
                to={`/country/${encodeURIComponent(relatedCountry)}`}
                className="country-tag"
              >
                {relatedCountry}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="country-section">
          <h4>{genresTitle}</h4>
          <div className="country-tags">
            {countryDetails.genres.map((genre, idx) => (
              <Link 
                key={idx} 
                to={`/genre/${encodeURIComponent(genre)}`}
                className="country-tag"
              >
                {genre}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="country-section">
          <h4>{popularArtistsTitle}</h4>
          <ul className="country-list">
            {countryDetails.popularArtists.map((artist, idx) => (
              <li key={idx}>{artist}</li>
            ))}
          </ul>
        </div>
        
        <div className="country-section">
          <h4>{traditionalMusicTitle}</h4>
          <ul className="country-list">
            {countryDetails.musicTraditions.map((tradition, idx) => (
              <li key={idx}>{tradition}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryConnections;
