import React from 'react';
import { Genre, UserPreferences } from '../types/types';
import { Artist } from '../types/types';

interface RecommendationsProps {
  recommendations: {
    genres: Genre[];
    countries: string[];
    related: Genre[];
    artists: Artist[];
  };
  rateItem: (itemType: 'genre' | 'country', itemName: string, rating: number) => void;
  shareItem: (itemType: 'genre' | 'country', itemName: string) => void;
}

const Recommendations: React.FC<RecommendationsProps> = ({ recommendations, rateItem, shareItem }) => {
  return (
    <div className="recommendations">
      <h2>🎧 Recommandations musicales</h2>

      <section>
        <h3>Genres recommandés</h3>
        {recommendations.genres.map((genre, index) => (
          <div key={index}>
            <strong>{genre.name}</strong>
            <button onClick={() => rateItem('genre', genre.name, 5)}>❤️ 5</button>
            <button onClick={() => rateItem('genre', genre.name, 3)}>👍 3</button>
            <button onClick={() => shareItem('genre', genre.name)}>🔗 Partager</button>
          </div>
        ))}
      </section>

      <section>
        <h3>Pays recommandés</h3>
        {recommendations.countries.map((country, index) => (
          <div key={index}>
            <strong>{country}</strong>
            <button onClick={() => rateItem('country', country, 5)}>❤️ 5</button>
            <button onClick={() => rateItem('country', country, 3)}>👍 3</button>
            <button onClick={() => shareItem('country', country)}>🔗 Partager</button>
          </div>
        ))}
      </section>

      <section>
        <h3>Genres connexes</h3>
        {recommendations.related.map((genre, index) => (
          <div key={index}>
            {genre.name}
          </div>
        ))}
      </section>

      <section>
        <h3>Artistes suggérés</h3>
        {recommendations.artists.map((artist, index) => (
          <div key={index}>
            {artist.name} ({artist.genre})
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recommendations;

