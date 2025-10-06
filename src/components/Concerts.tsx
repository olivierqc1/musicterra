import { useState, useEffect } from 'react';
import { searchArtistEvents, BandsintownEvent, formatEventDate, getEventCity } from '../services/bandsintown';
import { searchEventsByCity, searchEventsByLocation, filterMusicEvents, TicketmasterEvent } from '../services/ticketmaster';
import { markConcertStatus, getUserConcertStatus } from '../services/concerts';
import { useAuth } from '../context/AuthContext';
import ConcertReview from './ConcertReview';
import ConcertFeed from './ConcertFeed';
import LocationSelector from './LocationSelector';

interface Props {
  language: 'fr' | 'en';
  suggestedArtists?: string[];
}

type CombinedEvent = {
  id: string;
  name: string;
  artistName: string;
  venueName: string;
  city: string;
  date: string;
  time?: string;
  url: string;
  source: 'bandsintown' | 'ticketmaster';
  raw: BandsintownEvent | TicketmasterEvent;
};

export default function Concerts({ language, suggestedArtists = [] }: Props) {
  const [searchMode, setSearchMode] = useState<'artist' | 'location'>('artist');
  const [artistQuery, setArtistQuery] = useState('');
  const [events, setEvents] = useState<CombinedEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [userStatuses, setUserStatuses] = useState<Record<string, any>>({});
  const [reviewingEvent, setReviewingEvent] = useState<CombinedEvent | null>(null);
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

  useEffect(() => {
    if (events.length > 0 && session) {
      loadUserStatuses();
    }
  }, [events, session]);

  const handleArtistSearch = async () => {
    if (!artistQuery.trim()) return;
    
    setLoading(true);
    try {
      const bandsintownEvents = await searchArtistEvents(artistQuery);
      const combined = bandsintownEvents.map(e => ({
        id: e.id,
        name: e.lineup.join(', '),
        artistName: e.lineup[0] || artistQuery,
        venueName: e.venue.name,
        city: getEventCity(e),
        date: e.datetime,
        url: e.url,
        source: 'bandsintown' as const,
        raw: e
      }));
      setEvents(combined);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleLocationSearch = async (city: string, coords?: { lat: number; lng: number }) => {
    setLoading(true);
    try {
      let ticketmasterEvents: TicketmasterEvent[] = [];
      
      if (coords) {
        ticketmasterEvents = await searchEventsByLocation(coords.lat, coords.lng, 50);
      } else {
        ticketmasterEvents = await searchEventsByCity(city);
      }

      const musicEvents = filterMusicEvents(ticketmasterEvents);
      
      const combined = musicEvents.map(e => ({
        id: e.id,
        name: e.name,
        artistName: e._embedded?.attractions?.[0]?.name || e.name,
        venueName: e._embedded?.venues?.[0]?.name || 'Venue',
        city: e._embedded?.venues?.[0]?.city?.name || city,
        date: e.dates.start.localDate,
        time: e.dates.start.localTime,
        url: e.url,
        source: 'ticketmaster' as const,
        raw: e
      }));

      setEvents(combined);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleMarkStatus = async (
    event: CombinedEvent,
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
      await markConcertStatus(
        event.id,
        event.artistName,
        event.date,
        event.venueName,
        event.city,
        status
      );
      await loadUserStatuses();
    } catch (error) {
      console.error(error);
      alert(t('Erreur', 'Error'));
    }
  };

  const isEventPast = (event: CombinedEvent) => {
    return new Date(event.date) < new Date();
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
            
            {/* Search mode toggle */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  checked={searchMode === 'artist'}
                  onChange={() => setSearchMode('artist')}
                />
                {t('Par artiste', 'By artist')}
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  checked={searchMode === 'location'}
                  onChange={() => setSearchMode('location')}
                />
                {t('Par localisation', 'By location')}
              </label>
            </div>

            {/* Artist search */}
            {searchMode === 'artist' && (
              <>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="text"
                    value={artistQuery}
                    onChange={(e) => setArtistQuery(e.target.value)}
                    placeholder={t('Nom d\'artiste...', 'Artist name...')}
                    style={styles.input}
                    onKeyDown={(e) => e.key === 'Enter' && handleArtistSearch()}
                  />
                  <button onClick={handleArtistSearch} style={styles.primaryBtn} disabled={loading}>
                    {loading ? '...' : t('Chercher', 'Search')}
                  </button>
                </div>

                {/* Suggestions */}
                {suggestedArtists.length > 0 && events.length === 0 && (
                  <div style={{ marginTop: 12 }}>
                    <p style={{ fontSize: 14, color: '#555', marginBottom: 8 }}>
                      {t('Suggestions:', 'Suggestions:')}
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {suggestedArtists.slice(0, 5).map(artist => (
                        <button
                          key={artist}
                          onClick={() => {
                            setArtistQuery(artist);
                            setTimeout(() => handleArtistSearch(), 100);
                          }}
                          style={styles.suggestionBtn}
                        >
                          {artist}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Location search */}
            {searchMode === 'location' && (
              <LocationSelector
                onLocationSelect={handleLocationSearch}
                language={language}
              />
            )}
          </div>

          {/* Results */}
          {loading && (
            <div style={{ textAlign: 'center', padding: 20 }}>
              <p>{t('Recherche en cours...', 'Searching...')}</p>
            </div>
          )}

          {events.length > 0 && !loading && (
            <div style={styles.card}>
              <h3>
                {events.length} {t('concert(s) trouvé(s)', 'concert(s) found')}
              </h3>
              <div style={{ display: 'grid', gap: 12 }}>
                {events.map((event) => {
                  const userStatus = userStatuses[event.id];
                  const isPast = isEventPast(event);

                  return (
                    <div key={event.id} style={styles.eventCard}>
                      <div style={{ flex: 1 }}>
                        <strong>{event.artistName}</strong>
                        <p style={{ margin: '4px 0', fontSize: 14, color: '#555' }}>
                          📍 {event.venueName}, {event.city}
                        </p>
                        <p style={{ margin: '4px 0', fontSize: 14, color: '#555' }}>
                          📅 {new Date(event.date).toLocaleDateString(language)}
                          {event.time && ` • ${event.time}`}
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
                            {t('Modifier', 'Edit')}
                          </button>
                        )}

                        <a 
                          href={event.url} 
                          target="_blank" 
                          rel="noreferrer"
                          style={styles.linkBtn}
                        >
                          {t('Billets', 'Tickets')} →
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {events.length === 0 && !loading && (artistQuery || searchMode === 'location') && (
            <p style={{ textAlign: 'center', color: '#777' }}>
              {t('Aucun concert trouvé', 'No concerts found')}
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
          eventName={reviewingEvent.artistName}
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
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    cursor: 'pointer'
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
