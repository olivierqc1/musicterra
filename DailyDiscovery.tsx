
import React from 'react';
import { useDailyDiscovery } from '../hooks/useDailyDiscovery';

const DailyDiscovery: React.FC = () => {
  const { dailyCountry, dailyDecade, discovery } = useDailyDiscovery();

  if (!dailyCountry || !dailyDecade || !discovery) {
    return <p>Chargement de la découverte du jour...</p>;
  }

  return (
    <div className="daily-discovery">
      <h2>🎲 Découverte du jour</h2>
      <p>
        <strong>{dailyCountry}</strong> — {dailyDecade}
      </p>
      <p>🎶 Genre dominant : {discovery.genre}</p>
      <p>🌍 Pays similaires : {discovery.similarCountries.join(', ')}</p>
      <a href={discovery.playlist} target="_blank" rel="noopener noreferrer">
        🎧 Écouter la playlist Spotify
      </a>
    </div>
  );
};

export default DailyDiscovery;
