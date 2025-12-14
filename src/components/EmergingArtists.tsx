// src/components/EmergingArtists.tsx
import { useState, useEffect } from 'react';
import { getPersonalizedEmergingArtists, EmergingArtist, saveEmergingDiscovery } from '../services/emergingArtists';
import { useAuth } from '../context/AuthContext';
import { trackAction } from '../services/userBehavior';
import SEO from './SEO';

interface Props {
  language: 'fr' | 'en';
}

// Fonction pour extraire les 10 genres les plus populaires
const getTopGenres = (artists: EmergingArtist[]): string[] => {
  // Créer un objet pour compter les occurrences des genres
  const genreCounts: Record<string, number> = {};
  
  // Parcourir tous les artistes et compter les genres
  artists.forEach(artist => {
    artist.genres.forEach(genre => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });
  
  // Convertir en tableau trié par nombre d'occurrences
  return Object.entries(genreCounts)
    .sort((a, b) => b[1] - a[1])  // Trier par nombre décroissant
    .slice(0, 10)  // Prendre les 10 premiers
    .map(([genre]) => genre);  // Ne garder que les noms des genres
};

export default function EmergingArtists({ language }: Props) {
  const [artists, setArtists] = useState<EmergingArtist[]>([]);
  const [filteredArtists, setFilteredArtists] = useState<EmergingArtist[]>([]);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [topGenres, setTopGenres] = useState<string[]>([]);

  const { session } = useAuth();
  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  useEffect(() => {
    loadArtists();
  }, [session]);

  useEffect(() => {
    // Filtrer les artistes par genre sélectionné
    if (selectedGenre) {
      const filtered = artists.filter(artist => 
        artist.genres.some(genre => 
          genre.toLowerCase() === selectedGenre.toLowerCase()
        )
      );
      setFilteredArtists(filtered);
    } else {
      setFilteredArtists(artists);
    }
  }, [selectedGenre, artists]);

  useEffect(() => {
    // Mettre à jour les genres les plus populaires quand les artistes changent
    if (artists.length > 0) {
      const topGenresList = getTopGenres(artists);
      setTopGenres(topGenresList);
    }
  }, [artists]);

  const loadArtists = async () => {
    if (!session) return;
    setLoading(true);

    const cacheKey = `emerging_artists_${session.user.id}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        setArtists(parsed.data);
        setLastUpdated(parsed.timestamp);
        setLoading(false);
      }
    } catch {}

    try {
      const data = await getPersonalizedEmergingArtists(session.user.id);
      if (data?.length) {
        setArtists(data);
        localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
      }
    } catch (err) {
      console.error('Erreur chargement artistes émergents:', err);
    }

    setLoading(false);
  };

  const handleSave = async (artist: EmergingArtist) => {
    if (!session) return;

    setSaved((prev) => new Set([...prev, artist.name]));
    try {
      await saveEmergingDiscovery(artist.name, artist.mbid, artist.genres);
      localStorage.setItem(`emerging_saved_${artist.name}`, 'true');
      await trackAction('save_emerging', 'artist', artist.name, { genres: artist.genres });
    } catch (err) {
      console.error('Erreur saveEmergingDiscovery', err);
    }
  };

  if (!session)
    return (
      <div style={styles.card}>
        <SEO 
          title="Artistes Émergents"
          description="Découvrez les artistes émergents dans vos genres favoris. Connectez-vous pour obtenir des recommandations personnalisées."
          keywords="artistes émergents, nouveaux artistes, découverte musicale, talents musicaux"
        />
        <p>
          {t('Connectez-vous pour découvrir des artistes émergents', 'Sign in to discover emerging artists')}
        </p>
      </div>
    );

  if (loading && artists.length === 0)
    return (
      <div style={styles.loadingContainer}>
        <SEO 
          title="Artistes Émergents"
          description="Découvrez les artistes émergents dans vos genres favoris. Nouveaux talents à suivre avec statistiques Last.fm."
          keywords="artistes émergents, nouveaux artistes, découverte musicale, talents musicaux, last.fm"
        />
        <div style={styles.spinner}></div>
        <p>{t("Recherche d'artistes émergents basée sur vos goûts...", 'Finding emerging artists based on your taste...')}</p>
      </div>
    );

  if (artists.length === 0)
    return (
      <div style={styles.card}>
        <SEO 
          title="Artistes Émergents"
          description="Découvrez les artistes émergents. Notez plus de genres pour obtenir des recommandations personnalisées."
          keywords="artistes émergents, nouveaux artistes, découverte musicale"
        />
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

  return (
    <div style={styles.container}>
      <SEO 
        title="Artistes Émergents"
        description="Découvrez les artistes émergents dans vos genres favoris. Nouveaux talents à suivre avec statistiques Last.fm en temps réel. Soyez parmi les premiers à les découvrir!"
        keywords="artistes émergents, nouveaux artistes, découverte musicale, talents musicaux, last.fm, indie, rock, pop, jazz, metal, underground"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Artistes Émergents MusicTerra",
          "description": "Collection d'artistes émergents personnalisée par genre musical",
          "url": "https://musicterra.xyz/emerging",
          "about": {
            "@type": "MusicGroup",
            "genre": "Various"
          }
        }}
      />

      <div style={styles.header}>
        <div>
          <h3 style={{ margin: 0 }}>{t('🌱 Artistes émergents pour vous', '🌱 Emerging artists for you')}</h3>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', margin: '4px 0 0' }}>
            {t('Découvrez-les avant tout le monde', 'Discover them before everyone else')}
          </p>
        </div>
        <button onClick={loadArtists} style={styles.refreshBtn} disabled={loading}>
          {loading ? '...' : '🔄'}
        </button>
      </div>

      {/* Filtre de genres dynamiques */}
      <div style={styles.genreFilterContainer}>
        <button 
          onClick={() => setSelectedGenre(null)} 
          style={{
            ...styles.genreFilterButton, 
            ...(selectedGenre === null ? styles.genreFilterButtonActive : {})
          }}
        >
          {t('Tous les genres', 'All Genres')}
        </button>
        {topGenres.map(genre => (
          <button 
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            style={{
              ...styles.genreFilterButton, 
              ...(selectedGenre === genre ? styles.genreFilterButtonActive : {})
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      {lastUpdated && (
        <p style={{ textAlign: 'center', fontSize: 12, color: '#999' }}>
          {t('Dernière mise à jour :', 'Last updated:')} {new Date(lastUpdated).toLocaleTimeString(language)}
        </p>
      )}

      <div style={styles.infoBanner}>
        <span style={{ fontSize: 20 }}>💡</span>
        <div style={{ fontSize: 13 }}>
          {t(
            "Ces artistes ont débuté récemment et ont peu d'auditeurs. Parfait pour être un découvreur!",
            'These artists started recently and have few listeners. Perfect for being an early discoverer!'
          )}
        </div>
      </div>

      <div style={styles.grid}>
        {filteredArtists.length === 0 ? (
          <div style={styles.noArtistsFound}>
            <p>{t('Aucun artiste trouvé dans ce genre', 'No artists found in this genre')}</p>
          </div>
        ) : (
          filteredArtists.map((artist) => (
            <div key={artist.name} style={styles.artistCard}>
              <div style={styles.imageContainer}>
                {artist.imageUrl ? (
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    style={styles.artistImage}
                    loading="lazy"
                    onError={(e) =>
                      ((e.target as HTMLImageElement).src =
                        'https://via.placeholder.com/300x300?text=' + encodeURIComponent(artist.name))
                    }
                  />
                ) : (
                  <div style={styles.noImage}>
                    <span style={{ fontSize: 48 }}>🎵</span>
                    <p style={{ margin: '8px 0 0', fontSize: 12 }}>{artist.name}</p>
                  </div>
                )}

                <div style={styles.emergenceBadge}>🌱 {Math.round(artist.emergenceScore)}%</div>
              </div>

              <div style={{ padding: 12 }}>
                <strong style={{ fontSize: 15, display: 'block', marginBottom: 6 }}>{artist.name}</strong>

                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 8 }}>
                  {artist.genres.slice(0, 3).map((genre) => (
                    <span key={genre} style={styles.genreTag}>
                      {genre}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
                  {artist.country && <div>📍 {artist.country}</div>}
                  {artist.listeners !== undefined && (
                    <div>👥 {artist.listeners.toLocaleString(language)} {t('auditeurs', 'listeners')}</div>
                  )}
                  {artist.lifeSpan?.begin && (
                    <div>🎂 {t('Depuis', 'Since')} {artist.lifeSpan.begin.split('-')[0]}</div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: 6 }}>
                  {artist.lastfmUrl && (
                    <a
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
                      ...(saved.has(artist.name) ? styles.saveBtnSaved : {}),
                    }}
                  >
                    {saved.has(artist.name)
                      ? t('✓ Sauvegardé', '✓ Saved')
                      : t('Sauvegarder', 'Save')}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {filteredArtists.length >= 20 && (
        <p style={{ textAlign: 'center', fontSize: 13, color: '#777' }}>
          {t(
            "Notez plus de genres pour découvrir encore plus d'artistes",
            'Rate more genres to discover even more artists'
          )}
        </p>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: { display: 'grid', gap: 16 },
  card: {
    padding: 20,
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #e7e7e7',
    textAlign: 'center',
  },
  loadingContainer: {
    padding: 40,
    textAlign: 'center',
    display: 'grid',
    gap: 16,
    placeItems: 'center',
  },
  spinner: {
    width: 40,
    height: 40,
    border: '4px solid #f0f0f0',
    borderTop: '4px solid #667eea',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  header: {
    padding: 20,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  refreshBtn: {
    padding: '8px 12px',
    background: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: 8,
    color: '#fff',
    cursor: 'pointer',
    fontSize: 18,
  },
  genreFilterContainer: {
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: 8, 
    justifyContent: 'center', 
    marginBottom: 16,
    padding: '0 16px'
  },
  genreFilterButton: {
    padding: '6px 12px',
    background: '#f0f0f0', 
    border: '1px solid #ddd',
    borderRadius: 999,
    fontSize: 12,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  genreFilterButtonActive: {
    background: '#667eea', 
    color: 'white', 
    borderColor: '#667eea'
  },
  noArtistsFound: {
    width: '100%', 
    textAlign: 'center', 
    padding: 20, 
    color: '#777'
  },
  imageContainer: { position: 'relative', width: '100%', aspectRatio: '1/1' },
  artistImage: { width: '100%', height: '100%', objectFit: 'cover' },
  noImage: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999',
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
    backdropFilter: 'blur(4px)',
  },
  genreTag: {
    padding: '2px 8px',
    background: '#e0e7ff',
    color: '#3730a3',
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 500,
  },
  artistCard: {
    border: '1px solid #e7e7e7',
    borderRadius: 12,
    overflow: 'hidden',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  infoBanner: {
    padding: 12,
    background: '#fef3c7',
    border: '1px solid #fbbf24',
    borderRadius: 8,
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 16,
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
    fontWeight: 500,
    transition: 'all 0.2s ease',
  },
  saveBtnSaved: {
    background: '#667eea',
    color: '#fff',
    borderColor: '#667eea',
  },
};