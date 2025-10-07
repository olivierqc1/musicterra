import { useState, useEffect } from 'react';
import { getPersonalizedEmergingArtists, EmergingArtist, saveEmergingDiscovery } from '../services/emergingArtists';
import { useAuth } from '../context/AuthContext';
import { trackAction } from '../services/userBehavior';

interface Props {
  language: 'fr' | 'en';
}

export default function EmergingArtists({ language }: Props) {
  const [artists, setArtists] = useState<EmergingArtist[]>([]);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState<Set<string>>(new Set());

  const { session } = useAuth();
  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  useEffect(() => {
    loadArtists();
  }, [session]);

  const loadArtists = async () => {
    if (!session) return;
    
    setLoading(true);
    const data = await getPersonalizedEmergingArtists(session.user.id);
    setArtists(data);
    setLoading(false);
  };

  const handleSave = async (artist: EmergingArtist) => {
    if (!session) return;

    await saveEmergingDiscovery(artist.name, artist.mbid, artist.genres);
    setSaved(new Set([...saved, artist.name]));
    
    // Track l'action
    await trackAction('save_emerging', 'artist', artist.name, { genres: artist.genres });
  };

  if (!session) {
    return (
      <div style={styles.card}>
        <p>{t('Connectez-vous pour découvrir des artistes émergents', 'Sign in to discover emerging artists')}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p>{t('Recherche d\'artistes émergents basée sur vos goûts...', 'Finding emerging artists based on your taste...')}</p>
      </div>
    );
  }

  if (artists.length === 0) {
    return (
      <div style={styles.card}>
        <h3>{t('🌱 Artistes émergents', '🌱 Emerging artists')}</h3>
        <p style={{ color: '#777' }}>
          {t(
            'Explorez plus de genres et notez-les pour obtenir des recommandations personnalisées!',
            'Explore and rate more genres to get personalized recommendations!'
          )}
        </p>
        <p style={{ fontSize: 13, color: '#999', marginTop: 12 }}>
          💡 {t('Astuce: Notez au moins 5 genres différents', 'Tip: Rate at least 5 different genres')}
        </p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h3 style={{ margin: 0 }}>
            {t('🌱 Artistes émergents pour vous', '🌱 Emerging artists for you')}
          </h3>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', margin: '4px 0 0' }}>
            {t('Découvrez-les avant tout le monde', 'Discover them before everyone else')}
          </p>
        </div>
        <button onClick={loadArtists} style={styles.refreshBtn} disabled={loading}>
          {loading ? '...' : '🔄'}
        </button>
      </div>

      {/* Info banner */}
      <div style={styles.infoBanner}>
        <span style={{ fontSize: 20 }}>💡</span>
        <div style={{ fontSize: 13 }}>
          {t(
            'Ces artistes ont débuté récemment et ont peu d\'auditeurs. Parfait pour être un découvreur!',
            'These artists started recently and have few listeners. Perfect for being an early discoverer!'
          )}
        </div>
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {artists.map(artist => (
          <div key={artist.name} style={styles.artistCard}>
            {/* Image */}
            <div style={styles.imageContainer}>
              {artist.imageUrl ? (
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  style={styles.artistImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(artist.name);
                  }}
                />
              ) : (
                <div style={styles.noImage}>
                  <span style={{ fontSize: 48 }}>🎵</span>
                  <p style={{ margin: '8px 0 0', fontSize: 12 }}>{artist.name}</p>
                </div>
              )}
              
              {/* Badge émergence */}
              <div style={styles.emergenceBadge}>
                🌱 {Math.round(artist.emergenceScore)}%
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: 12 }}>
              <strong style={{ fontSize: 15, display: 'block', marginBottom: 6 }}>
                {artist.name}
              </strong>
              
              {/* Genres */}
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 8 }}>
                {artist.genres.slice(0, 3).map(genre => (
                  <span key={genre} style={styles.genreTag}>
                    {genre}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
                {artist.country && (
                  <div>📍 {artist.country}</div>
                )}
                {artist.listeners !== undefined && (
                  <div>👥 {artist.listeners.toLocaleString(language)} {t('auditeurs', 'listeners')}</div>
                )}
                {artist.lifeSpan?.begin && (
                  <div>🎂 {t('Depuis', 'Since')} {artist.lifeSpan.begin.split('-')[0]}</div>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 6 }}>
                {artist.lastfmUrl && (
                  
                    href={artist.lastfmUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.lastfmBtn}
                    onClick={() => session && trackAction('click_lastfm', 'artist', artist.name)}
                  >
                    🎧 Last.fm
                  </a>
                )}
                <button
                  onClick={() => handleSave(artist)}
                  disabled={saved.has(artist.name)}
                  style={{
                    ...styles.saveBtn,
                    ...(saved.has(artist.name) ? styles.saveBtnSaved : {})
                  }}
                >
                  {saved.has(artist.name) 
                    ? t('✓ Sauvegardé', '✓ Saved')
                    : t('Sauvegarder', 'Save')
                  }
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load more hint */}
      {artists.length >= 20 && (
        <p style={{ textAlign: 'center', fontSize: 13, color: '#777' }}>
          {t('Notez plus de genres pour découvrir encore plus d\'artistes', 'Rate more genres to discover even more artists')}
        </p>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'grid',
    gap: 16
  },
  card: {
    padding: 20,
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #e7e7e7',
    textAlign: 'center'
  },
  loadingContainer: {
    padding: 40,
    textAlign: 'center',
    display: 'grid',
    gap: 16,
    placeItems: 'center'
  },
  spinner: {
    width: 40,
    height: 40,
    border: '4px solid #f0f0f0',
    borderTop: '4px solid #667eea',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  header: {
    padding: 20,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  refreshBtn: {
    padding: '8px 12px',
    background: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: 8,
    color: '#fff',
    cursor: 'pointer',
    fontSize: 18
  },
  infoBanner: {
    padding: 12,
    background: '#fef3c7',
    border: '1px solid #fbbf24',
    borderRadius: 8,
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 16
  },
  artistCard: {
    border: '1px solid #e7e7e7',
    borderRadius: 12,
    overflow: 'hidden',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: '1/1'
  },
  artistImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  noImage: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999'
  },
  emergenceBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: '4px 8px',
    background: 'rgba(16, 185, 129, 0.9)',
    color: '#fff',
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 600,
    backdropFilter: 'blur(4px)'
  },
  genreTag: {
    padding: '2px 8px',
    background: '#e0e7ff',
    color: '#3730a3',
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 500
  },
  lastfmBtn: {
    flex: 1,
    padding: '8px 12px',
    background: '#d51007',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 500,
    textAlign: 'center',
    display: 'block'
  },
  saveBtn: {
    flex: 1,
    padding: '8px 12px',
    background: '#fff',
    border: '1px solid #667eea',
    color: '#667eea',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 500
  },
  saveBtnSaved: {
    background: '#667eea',
    color: '#fff'
  }
};
