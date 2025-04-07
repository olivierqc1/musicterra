import React from 'react';
import './SpotifyData.css';

interface SpotifyDataProps {
  isConnected: boolean;
  data: {
    topTracks: any[];
    topArtists: any[];
    recommendations: any[];
  };
  onConnect: () => Promise<void>;
  spotifyTitle: string;
  connectButtonText: string;
  tracksTitle: string;
  artistsTitle: string;
  recommendationsTitle: string;
}

const SpotifyData: React.FC<SpotifyDataProps> = ({
  isConnected,
  data,
  onConnect,
  spotifyTitle,
  connectButtonText,
  tracksTitle,
  artistsTitle,
  recommendationsTitle
}) => {
  if (!isConnected) {
    return (
      <div className="spotify-container">
        <h2 className="section-title">{spotifyTitle}</h2>
        <div className="spotify-connect">
          <p>Connectez-vous à Spotify pour accéder à vos données musicales</p>
          <button
            onClick={onConnect}
            className="spotify-connect-button"
          >
            {connectButtonText}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="spotify-container">
      <h2 className="section-title">{spotifyTitle}</h2>

      <div className="spotify-section">
        <h3>{tracksTitle}</h3>
        <ul className="spotify-track-list">
          {data.topTracks.map((track) => (
            <li key={track.id} className="spotify-track-item">
              <img src={track.image} alt={track.name} className="spotify-track-image" />
              <div className="spotify-track-info">
                <h4 className="spotify-track-name">{track.name}</h4>
                <p className="spotify-track-artist">{track.artist} - {track.album}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="spotify-section">
        <h3>{artistsTitle}</h3>
        <ul className="spotify-track-list">
          {data.topArtists.map((artist) => (
            <li key={artist.id} className="spotify-track-item">
              <img src={artist.image} alt={artist.name} className="spotify-track-image" />
              <div className="spotify-track-info">
                <h4 className="spotify-track-name">{artist.name}</h4>
                <p className="spotify-track-artist">{artist.genre}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="spotify-section">
        <h3>{recommendationsTitle}</h3>
        <ul className="spotify-track-list">
          {data.recommendations.map((track) => (
            <li key={track.id} className="spotify-track-item">
              <img src={track.image} alt={track.name} className="spotify-track-image" />
              <div className="spotify-track-info">
                <h4 className="spotify-track-name">{track.name}</h4>
                <p className="spotify-track-artist">{track.artist} - {track.album}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpotifyData;
