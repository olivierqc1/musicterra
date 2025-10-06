import { useState } from 'react';
import { searchArtistEvents, BandsintownEvent, formatEventDate, getEventCity } from '../services/bandsintown';
import { markConcertStatus, getUserConcertStatus } from '../services/concerts';
import { useAuth } from '../context/AuthContext';
import ConcertReview from './ConcertReview';
import ConcertFeed from './ConcertFeed';

interface Props {
  language: 'fr' | 'en';
  suggestedArtists?: string[];
}

export default function Concerts({ language, suggestedArtists = [] }: Props) {
  const [query, setQuery] = useState('');
  const [events, setEvents] = useState<BandsintownEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [userStatuses, setUserStatuses] = useState<Record<string, any>>({});
  const [reviewingEvent, setReviewingEvent] = useState<BandsintownEvent | null>(null);
  const [view, setView] = useState<'search' | 'feed'>('search');

  const { session } = useAuth();
  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  const loadUserStatuses = async () => {
    if (!session) return;
    
    const statuses: Record<string, any> = {};
    for (const event of events) {
      const status = await getUserConcertStatus(event.id);
      if (status) {
        statuses[event.id] = status;
      }
    }
    setUserStatuses(statuses);
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      const results = await searchArtistEvents(query);
      setEvents(results);
      if (results.length > 0) {
        await loadUserStatuses();
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleMarkStatus = async (
    event: BandsintownEvent, 
    status: 'going' | 'interested' | 'attended'
  ) => {
    if (!session) {
      alert(t('Connectez-vous pour utiliser cette fonctionnalité', 'Please sign in to use this feature'));
      return;
    }

    if (status === 'attended') {
      setReviewingEvent(event);
      return;
    }

    try {
      const city = getEventCity(event);
      await markConcertStatus(
        event.id,
        event.lineup[0] || 'Concert',
        event.datetime,
        event.venue.name,
        city,
        status
      );
      await loadUserStatuses();
    } catch (error) {
      console.error(error);
      alert(t('Erreur', 'Error'));
    }
  };

  const isEventPast = (event: BandsintownEvent) => {
    return new Date(event.datetime) < new Date();
  };

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {/* View toggle */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => setView('search')}
          style={{
            ...styles.tabBtn,
            ...(view === 'search' ? styles.tabActive : {})
          }}
        >
          {t('🔍 Recherche', '🔍 Search')}
        </button>
        <button
          onClick={() => setView('feed')}
          style={{
            ...styles.tabBtn,
            ...(view === 'feed' ? styles.tabActive : {})
          }}
        >
          {t('📰 Fil d\'activité', '📰 Activity Feed')}
        </button>
      </div>

      {view === 'search' ? (
        <>
          <div style={styles.card}>
            <h2>{t('🎤 Concerts à venir', '🎤 Upcoming concerts')}</h2>
            
            {/* Recherche par artiste seulement */}
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('Nom d\'artiste...', 'Artist name...')}
                style={styles.input}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button onClick={handleSearch} style={styles.primaryBtn} disabled={loading}>
                {loading ? '...' : t('Chercher', 'Search')}
              </button>
            </div>

            {/* Suggestions basées sur découverte */}
            {suggestedArtists.length > 0 && events.length === 0 && (
              <div style={{ marginTop: 12 }}>
                <p style={{ fontSize: 14, color: '#555', marginBottom: 8 }}>
                  {t('Suggestions basées sur ta découverte:', 'Suggestions based on your discovery:')}
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {suggestedArtists.slice(0, 5).map(artist => (
                    <button
                      key={artist}
                      onClick={() => {
                        setQuery(artist);
                        setTimeout(() => handleSearch(), 100);
                      }}
                      style={styles.suggestionBtn}
                    >
                      {artist}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Résultats */}
          {events.length > 0 && (
            <div style={styles.card}>
              <h3>
                {events.length} {t('concert(s) à venir', 'upcoming concert(s)')}
              </h3>
              <div style={{ display: 'grid', gap: 12 }}>
                {events.map((event) => {
                  const userStatus = userStatuses[event.id];
                  const isPast = isEventPast(event);
                  const city = getEventCity(event);

                  return (
                    <div key={event.id} style={styles.eventCard}>
                      <div style={{ flex: 1 }}>
                        <strong>{event.lineup.join(', ')}</strong>
                        <p style={{ margin: '4px 0', fontSize: 14, color: '#555' }}>
                          📍 {event.venue.name}, {city}
                        </p>
                        <p style={{ margin: '4px 0', fontSize: 14, color: '#555' }}>
                          📅 {formatEventDate(event.datetime, language)}
                        </p>

                        {/* Status badge */}
                        {userStatus && (
                          <div style={{ marginTop: 6 }}>
                            {userStatus.status === 'going' && (
                              <span style={{ ...styles.statusBadge, background: '#d1fae5', color: '#065f46' }}>
                                ✓ {t('J\'y vais', 'Going')}
                              </span>
                            )}
                            {userStatus.status === 'interested' && (
                              <span style={{ ...styles.statusBadge, background: '#fef3c7', color: '#92400e' }}>
                                ⭐ {t('Intéressé', 'Interested')}
                              </span>
                            )}
                            {userStatus.status === 'attended' && (
                              <span style={{ ...styles.statusBadge, background: '#e0e7ff', color: '#3730a3' }}>
                                ✓ {t('Vu', 'Attended')} {userStatus.rating && `• ${userStatus.rating}/10`}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 120 }}>
                        {!userStatus || userStatus.status !== 'attended' ? (
                          <>
                            {!isPast && (
                              <>
                                <button
                                  onClick={() => handleMarkStatus(event, 'going')}
                                  style={{
                                    ...styles.actionBtn,
                                    ...(userStatus?.status === 'going' ? styles.actionBtnActive : {})
                                  }}
                                  disabled={!session}
                                >
                                  {t('J\'y vais', 'Going')}
                                </button>
                                <button
                                  onClick={() => handleMarkStatus(event, 'interested')}
                                  style={{
                                    ...styles.actionBtn,
                                    ...(userStatus?.status === 'interested' ? styles.actionBtnActive : {})
                                  }}
                                  disabled={!session}
                                >
                                  {t('Intéressé', 'Interested')}
                                </button>
                              </>
                            )}
                            {isPast && (
                              <button
                                onClick={() => handleMarkStatus(event, 'attended')}
                                style={styles.actionBtn}
                                disabled={!session}
                              >
                                {t('J\'y étais', 'I was there')}
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            onClick={() => setReviewingEvent(event)}
                            style={styles.actionBtn}
                          >
                            {t('Modifier avis', 'Edit review')}
                          </button>
                        )}

                        {/* Lien billets */}
                        {event.offers?.[0]?.url && (
                          <a 
                            href={event.offers[0].url} 
                            target="_blank" 
                            rel="noreferrer"
                            style={styles.linkBtn}
                          >
                            {t('Billets', 'Tickets')} →
                          </a>
                        )}
                        {!event.offers?.[0]?.url && event.url && (
                          <a 
                            href={event.url} 
                            target="_blank" 
                            rel="noreferrer"
                            style={styles.linkBtn}
                          >
                            {t('Infos', 'Info')} →
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {events.length === 0 && !loading && query && (
            <p style={{ textAlign: 'center', color: '#777' }}>
              {t('Aucun concert trouvé pour cet artiste', 'No concerts found for this artist')}
            </p>
          )}
        </>
      ) : (
        <div style={styles.card}>
          <h2>{t('📰 Activité concerts', '📰 Concert activity')}</h2>
          <ConcertFeed language={language} />
        </div>
      )}

      {/* Review Modal */}
      {reviewingEvent && (
        <ConcertReview
          eventId={reviewingEvent.id}
          eventName={reviewingEvent.lineup.join(', ')}
          onClose={() => setReviewingEvent(null)}
          onSuccess={async () => {
            await loadUserStatuses();
            setReviewingEvent(null);
          }}
          language={language}
        />
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    border: '1px solid #e7e7e7',
    borderRadius: 14,
    padding: 14,
    background: '#fff'
  },
  tabBtn: {
    padding: '8px 12px',
    borderRadius: 999,
    border: '1px solid #ddd',
    background: '#fff',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500
  },
  tabActive: { 
    borderColor: '#667eea', 
    background: '#667eea', 
    color: '#fff' 
  },
  input: { 
    flex: 1, 
    padding: '8px 12px', 
    border: '1px solid #ddd', 
    borderRadius: 8,
    fontSize: 14
  },
  primaryBtn: {
    padding: '8px 16px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 500
  },
  suggestionBtn: {
    padding: '6px 12px',
    background: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: 999,
    cursor: 'pointer',
    fontSize: 13
  },
  eventCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 12,
    border: '1px solid #eee',
    borderRadius: 8,
    gap: 12
  },
  actionBtn: {
    padding: '6px 12px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 13,
    whiteSpace: 'nowrap'
  },
  actionBtnActive: {
    background: '#667eea',
    color: '#fff',
    borderColor: '#667eea'
  },
  linkBtn: {
    padding: '6px 12px',
    background: '#667eea',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: 6,
    fontSize: 13,
    textAlign: 'center',
    display: 'block'
  },
  statusBadge: {
    padding: '4px 8px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    display: 'inline-block'
  }
};
