import React from 'react';
import { Genre } from '../types/types';
import './GenreDetails.css';

interface GenreDetailsProps {
  genre: Genre;
  onRate: (rating: number) => void;
  onShare: () => void;
  currentRating: number;
  shareButtonText: string;
}

const GenreDetails: React.FC<GenreDetailsProps> = ({
  genre,
  onRate,
  onShare,
  currentRating,
  shareButtonText
}) => {
  return (
    <div className="genre-details-container">
      <div className="genre-details-header">
        <h2>Détails du Genre</h2>
        <button
          className="button button-small share-button"
          onClick={onShare}
        >
          {shareButtonText}
        </button>
      </div>
      
      <div className="genre-details-grid">
        <div className="genre-details-card">
          {genre.image && (
            <div className="genre-image-container">
              <img
                src={genre.image}
                alt={genre.name}
                className="genre-image"
              />
            </div>
          )}
          
          <h3>{genre.name}</h3>
          
          <p>
            <strong>Période :</strong> {genre.period}
          </p>
          
          {genre.tags && (
            <div className="tags-container">
              {genre.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          )}
          
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
          
          <div className="genre-variants">
            <strong>Variantes :</strong>
            <ul className="variants-list">
              {genre.variants && genre.variants.map((variant, index) => (
                <li key={index} className="variant-item">
                  <strong>{variant.name}</strong> ({variant.period})
                  <p className="variant-description">{variant.description}</p>
                  {variant.spotifyLink && (
                    <a
                      href={variant.spotifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="spotify-link"
                    >
                      🎵 Écouter sur Spotify
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreDetails;
