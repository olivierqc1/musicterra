import React from 'react';
import { Link } from 'react-router-dom';
import { Genre } from '../types/types';
import countriesData from '../data/countriesData';
import './SearchResults.css';

interface SearchResultsProps {
  results: {
    genres: Genre[];
    countries: string[];
  };
  noResultsText: string;
  genresTitle: string;
  countriesTitle: string;
  searchResultsTitle: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  noResultsText,
  genresTitle,
  countriesTitle,
  searchResultsTitle
}) => {
  const hasResults = results.genres.length > 0 || results.countries.length > 0;

  if (!hasResults) {
    return (
      <div className="search-results-container">
        <h2>{searchResultsTitle}</h2>
        <p className="no-results">{noResultsText}</p>
      </div>
    );
  }

  return (
    <div className="search-results-container">
      <h2>{searchResultsTitle}</h2>
      
      {results.genres.length > 0 && (
        <>
          <h3>{genresTitle}</h3>
          <div className="search-results-grid">
            {results.genres.map((genre, index) => (
              <Link
                to={`/genre/${encodeURIComponent(genre.name)}`}
                key={`genre-result-${index}`}
                className="search-results-item"
              >
                <h4>{genre.name}</h4>
                <p>{genre.period}</p>
                {genre.tags && (
                  <div className="tags-container">
                    {genre.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </>
      )}
      
      {results.countries.length > 0 && (
        <>
          <h3>{countriesTitle}</h3>
          <div className="search-results-grid">
            {results.countries.map((country, index) => (
              <Link
                to={`/country/${encodeURIComponent(country)}`}
                key={`country-result-${index}`}
                className="search-results-item"
              >
                <h4>{countriesData[country]?.flag || ''} {country}</h4>
                {countriesData[country]?.genres && (
                  <div className="tags-container">
                    {countriesData[country].genres.slice(0, 3).map((genre: string, idx: number) => (
                      <span key={idx} className="tag">{genre}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
