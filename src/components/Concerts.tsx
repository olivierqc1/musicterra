// src/components/Concerts.tsx
import { useState, useEffect } from 'react';
import { searchConcertsByArtist } from '../services/ticketmaster';
import { markConcertStatus, getUserConcertStatus } from '../services/concerts';
import { useAuth } from '../context/AuthContext';
import ConcertReview from './ConcertReview';
import ConcertFeed from './ConcertFeed';

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
  source: 'ticketmaster';
  raw: any;
};

export default function Concerts({ language, suggestedArtists = [] }: Props) {
  const [artistQuery, setArtistQuery] = useState('');
  const [events, setEvents] = useState<CombinedEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [userStatuses, setUserStatuses] = useState<Record<string, any>>({});
  const [reviewingEvent, setReviewingEvent] = useState<CombinedEvent | null>(null);
  const [view, setView] = useState<'search' | 'feed'>('search');

  const { session } = useAuth();
  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  // ⚡ Grouper les appels en une seule requête
  const loadUserStatuses = async () => {
    if (!session || events.length === 0) return;

    try {
      // 🔥 Optimisation : éviter une boucle de requêtes
      const ids = events.map((e) => e.id);
      const cached: Record<string, any> = {};

      // Lecture des statuts déjà stockés localement
      ids.forEach((id) => {
        const local = localStorage.getItem(`concert_status_${id}`);
        if (local) cached[id] = JSON.parse(local);
      });

      setUserStatuses((prev) => ({ ...prev, ...cached }));

      // Appel Supabase pour actualiser
      const statusesArray = await Promise.all(ids.map((id) => getUserConcertStatus(id)));
      const fresh: Record<string, any> = {};
      statusesArray.forEach((s, i) => {
        if (s) fresh[ids[i]] = s;
      });

      setUserStatuses((prev) => ({ ...prev, ...fresh }));
    } catch (err) {
      console.error('Erreur loadUserStatuses', err);
    }
  };

  useEffect(() => {
    if (events.length > 0 && session) loadUserStatuses();
  }, [events, session]);

  // 🔍 Recherche Ticketmaster rapide
  const handleArtistSearch = async () => {
    if (!artistQuery.trim()) return;
    setLoading(true);

    try {
      const ticketmasterEvents = await searchConcertsByArtist(artistQuery);

      if (!ticketmasterEvents?.length) {
        alert(
          t(
            `Aucun concert trouvé pour "${artistQuery}". Essayez un artiste plus connu comme Coldplay, The Weeknd, etc.`,
            `No concerts found for "${artistQuery}". Try a more popular artist like Coldplay, The Weeknd, etc.`
          )
        );
        setEvents([]);
        setLoading(false);
        return;
      }

      const combined = ticketmasterEvents.map((e: any) => {
        const venue = e._embedded?.venues?.[0];
        const artist = e._embedded?.attractions?.[0]?.name || artistQuery;
        return {
          id: e.id,
          name: e.name,
          artistName: artist,
          venueName: venue?.name || 'Lieu inconnu',
          city: venue?.city?.name || '',
          date: e.dates?.start?.localDate || '',
          time: e.dates?.start?.localTime,
          url: e.url,
          source: 'ticketmaster' as const,
          raw: e,
        };
      });

      setEvents(combined);
    } catch (err) {
      console.error('❌ Erreur recherche:', err);
      alert(t('Erreur lors de la recherche', 'Error searching'));
    }
    setLoading(false);
  };

  // ⚡ Optimistic UI : réagit instantanément sans attendre Supabase
  const handleMarkStatus = async (
    event: CombinedEvent,
    status: 'going' | 'interested' | 'attended'
  ) => {
    if (!session) {
      alert(
        t(
          'Connectez-vous pour utiliser cette fonctionnalité',
          'Please sign in to use this feature'
        )
      );
      return;
    }

    if (status === 'attended') {
      setReviewingEvent(event);
      return;
    }

    // ✅ UI immédiate
    setUserStatuses((prev) => ({
      ...prev,
      [event.id]: { status, optimistic: true },
    }));

    try {
      await markConcertStatus(
        event.id,
        event.artistName,
        event.date,
        event.venueName,
        event.city,
        status
      );
      // Actualise plus tard
      loadUserStatuses();
    } catch (error) {
      console.error(error);
      alert(t('Erreur', 'Error'));
    }
  };

  const isEventPast = (event: CombinedEvent) => new Date(event.date) < new Date();

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {/* View toggle */}
      <div style={{ display: 'flex', gap: 8 }}>
        {['search', 'feed'].map((v) => (
          <button
            key={v}
            onClick={() => setView(v as 'search' | 'feed')}
            style={{
              ...styles.tabBtn,
              ...(view === v ? styles.tabActive : {}),
            }}
          >
            {v === 'search' ? t('🔍 Recherche', '🔍 Search') : t('📰 Fil d\'activité', '📰 Activity Feed')}
          </button>
        ))}
      </div>

      {view === 'search' ? (
        <>
          <div style={styles.card}>
            <h2>{t('🎤 Concerts à venir', '🎤 Upcoming concerts')}</h2>
            <p style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>
              {t('Recherche par artiste (Ticketmaster)', 'Search by artist (Ticketmaster)')}
            </p>

            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="text"
                value={artistQuery}
                onChange={(e) => setArtistQuery(e.target.value)}
                placeholder={t("Nom d'artiste...", 'Artist name...')}
                style={styles.input}
                onKeyDown={(e) => e.key === 'Enter' && handleArtistSearch()}
              />
              <button
                onClick={handleArtistSearch}
                style={styles.primaryBtn}
                disabled={loading}
              >
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
                  {suggestedArtists.slice(0, 5).map((artist) => (
                    <button
                      key={artist}
                      onClick={() => {
                        setArtistQuery(artist);
                        setTimeout(() => handleArtistSearch(), 80);
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
                              <span
                                style={{
                                  ...styles.statusBadge,
                                  background: '#d1fae5',
                                  color: '#065f46',
                                }}
                              >
                                ✓ {t("J'y vais", 'Going')}
                              </span>
                            )}
                            {userStatus.status === 'interested' && (
                              <span
                                style={{
                                  ...styles.statusBadge,
                                  background: '#fef3c7',
                                  color: '#92400e',
                                }}
                              >
                                ⭐ {t('Intéressé', 'Interested')}
                              </span>
                            )}
                            {userStatus.status === 'attended' && (
                              <span
                                style={{
                                  ...styles.statusBadge,
                                  background: '#e0e7ff',
                                  color: '#3730a3',
                                }}
                              >
                                ✓ {t('Vu', 'Attended')}{' '}
                                {userStatus.rating && `• ${userStatus.rating}/10`}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 6,
                          minWidth: 120,
                        }}
                      >
                        {!userStatus || userStatus.status !== 'attended' ? (
                          <>
                            {!isPast && (
                              <>
                                <button
                                  onClick={() =>
                                    handleMarkStatus(event, 'going')
                                  }
                                  style={{
                                    ...styles.actionBtn,
                                    ...(userStatus?.status === 'going'
                                      ? styles.actionBtnActive
                                      : {}),
                                  }}
                                  disabled={!session}
                                >
                                  {t("J'y vais", 'Going')}
                                </button>
                                <button
                                  onClick={() =>
                                    handleMarkStatus(event, 'interested')
                                  }
                                  style={{
                                    ...styles.actionBtn,
                                    ...(userStatus?.status === 'interested'
                                      ? styles.actionBtnActive
                                      : {}),
                                  }}
                                  disabled={!session}
                                >
                                  {t('Intéressé', 'Interested')}
                                </button>
                              </>
                            )}
                            {isPast && (
                              <button
                                onClick={() =>
                                  handleMarkStatus(event, 'attended')
                                }
                                style={styles.actionBtn}
                                disabled={!session}
                              >
                                {t("J'y étais", 'I was there')}
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
        </>
      ) : (
        <div style={styles.card}>
          <h2>{t('📰 Activité concerts', '📰 Concert activity')}</h2>
          <ConcertFeed language={language} />
        </div>
      )}

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
  card: { border: '1px solid #e7e7e7', borderRadius: 14, padding: 14, background: '#fff' },
  tabBtn: { padding: '8px 12px', borderRadius: 999, border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontSize: 14, fontWeight: 500 },
  tabActive: { borderColor: '#667eea', background: '#667eea', color: '#fff' },
  input: { flex: 1, padding: '8px 12px', border: '1px solid #ddd', borderRadius: 8, fontSize: 14 },
  primaryBtn: { padding: '8px 16px', background: '#667eea', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 500 },
  suggestionBtn: { padding: '6px 12px', background: '#f0f0f0', border: '1px solid #ddd', borderRadius: 999, cursor: 'pointer', fontSize: 13 },
  eventCard: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: 12, border: '1px solid #eee', borderRadius: 8, gap: 12 },
  actionBtn: { padding: '6px 12px', background: '#fff', border: '1px solid #ddd', borderRadius: 6, cursor: 'pointer', fontSize: 13, whiteSpace: 'nowrap' },
  actionBtnActive: { background: '#667eea', color: '#fff', borderColor: '#667eea' },
  linkBtn: { padding: '6px 12px', background: '#667eea', color: '#fff', textDecoration: 'none', borderRadius: 6, fontSize: 13, textAlign: 'center', display: 'block' },
  statusBadge: { padding: '4px 8px', borderRadius: 6, fontSize: 12, fontWeight: 600, display: 'inline-block' },
};
