import React from 'react';
import { Genre, Artist } from '../types/types';
import './Recommendations.css';

interface RecommendationsProps {
  recommendations: {
    genres: Genre[];
    countries: string[];
    related: Genre[];
    artists: Artist[];
  };
  onSelectGenre: (genre: Genre) => void;
  onSelectCountry: (country: string) => void;
  recommendedTitle: string;
  recommendedGenresTitle: string;
  recommendedCountriesTitle: string;
  relatedGenresTitle: string;
  artistsToDiscoverTitle: string;
  isMobile: boolean;
}

const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
  onSelectGenre,
  onSelectCountry,
  recommendedTitle,
  recommendedGenresTitle,
  recommendedCountriesTitle,
  relatedGenresTitle,
  artistsToDiscoverTitle,
  isMobile
}) => {
  if (
    recommendations.genres.length === 0 &&
    recommendations.countries.length === 0 &&
    recommendations.related.length === 0 &&
    recommendations.artists.length === 0
  ) {
    return null;
  }

  return (
    <div className="recommendations-container">
      <h2 className="section-title">{recommendedTitle}</h2>

      {recommendations.genres.length > 0 && (
        <div className="recommendation-section">
          <h3>{recommendedGenresTitle}</h3>
          <div className={`recommendation-grid ${isMobile ? 'mobile' : ''}`}>
            {recommendations.genres.map((genre, index) => (
              <div
                key={`rec-genre-${index}`}
                className="recommendation-item"
                onClick={() => onSelectGenre(genre)}
              >
                <h4>{genre.name}</h4>
                <p>{genre.period}</p>
                {genre.tags && (
                  <div className="tags-container">
                    {genre.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {recommendations.related.length > 0 && (
        <div className="recommendation-section">
          <h3>{relatedGenresTitle}</h3>
          <div className={`recommendation-grid ${isMobile ? 'mobile' : ''}`}>
            {recommendations.related.map((genre, index) => (
              <div
                key={`related-genre-${index}`}
                className="recommendation-item"
                onClick={() => onSelectGenre(genre)}
              >
                <h4>{genre.name}</h4>
                <p>{genre.period}</p>
                {genre.tags && (
                  <div className="tags-container">
                    {genre.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {recommendations.countries.length > 0 && (
        <div className="recommendation-section">
          <h3>{recommendedCountriesTitle}</h3>
          <div className={`recommendation-grid ${isMobile ? 'mobile' : ''}`}>
            {recommendations.countries.map((country, index) => (
              <div
                key={`rec-country-${index}`}
                className="recommendation-item"
                onClick={() => onSelectCountry(country)}
              >
                <h4>{country}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {recommendations.artists.length > 0 && (
        <div className="recommendation-section">
          <h3>{artistsToDiscoverTitle}</h3>
          <div className={`recommendation-grid ${isMobile ? 'mobile' : ''}`}>
            {recommendations.artists.map((artist, index) => (
              <div key={`rec-artist-${index}`} className="recommendation-item">
                <h4>{artist.name}</h4>
                {artist.spotifyId && (
                  <a
                    href={`https://open.spotify.com/artist/${artist.spotifyId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotify-link"
                  >
                    🎵 Spotify
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
