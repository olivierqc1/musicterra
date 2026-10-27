// src/components/Concerts.tsx
import { useState, useEffect } from 'react';
import { searchConcertsByArtist } from '../services/ticketmaster';
import { markConcertStatus, getUserConcertStatus } from '../services/concerts';
import { useAuth } from '../context/AuthContext';
import ConcertReview from './ConcertReview';
import ConcertFeed from './ConcertFeed';
import SEO from './SEO';
import { toast } from "../lib/toast";
import Loader from "./Loader";
import ConcertsForYou from "./ConcertsForYou";

interface Props {
  language: 'fr' | 'en';
  suggestedArtists?: string[];
  /** Retour à la roue (bloc « Pour toi » quand il manque des notes). */
  onSpin?: () => void;
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

export default function Concerts({ language, suggestedArtists = [], onSpin }: Props) {
  const [artistQuery, setArtistQuery] = useState('');
  const [events, setEvents] = useState<CombinedEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [userStatuses, setUserStatuses] = useState<Record<string, any>>({});
  const [reviewingEvent, setReviewingEvent] = useState<CombinedEvent | null>(null);
  const [view, setView] = useState<'search' | 'feed'>('search');

  const { session } = useAuth();
  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  const loadUserStatuses = async () => {
    if (!session || events.length === 0) return;

    try {
      const ids = events.map((e) => e.id);
      const cached: Record<string, any> = {};

      ids.forEach((id) => {
        const local = localStorage.getItem(`concert_status_${id}`);
        if (local) cached[id] = JSON.parse(local);
      });

      setUserStatuses((prev) => ({ ...prev, ...cached }));

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

  const handleArtistSearch = async () => {
    if (!artistQuery.trim()) return;
    setLoading(true);

    try {
      const ticketmasterEvents = await searchConcertsByArtist(artistQuery);

      if (!ticketmasterEvents?.length) {
        toast(
          t(
            `Aucun concert trouvé pour "${artistQuery}". Essayez un artiste plus connu comme Coldplay, The Weeknd, etc.`,
            `No concerts found for "${artistQuery}". Try a more popular artist like Coldplay, The Weeknd, etc.`
          ), "info");
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
      toast(t('Erreur lors de la recherche', 'Error searching'), "error");
    }
    setLoading(false);
  };

  const handleMarkStatus = async (
    event: CombinedEvent,
    status: 'going' | 'interested' | 'attended'
  ) => {
    if (!session) {
      toast(
        t(
          'Connectez-vous pour utiliser cette fonctionnalité',
          'Please sign in to use this feature'
        ), "info");
      return;
    }

    if (status === 'attended') {
      setReviewingEvent(event);
      return;
    }

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
      loadUserStatuses();
    } catch (error) {
      console.error(error);
      toast(t('Erreur', 'Error'), "error");
    }
  };

  const isEventPast = (event: CombinedEvent) => new Date(event.date) < new Date();

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <SEO 
        title="Concerts et Événements Musicaux"
        description="Trouvez les concerts près de chez vous. Recherchez par artiste, marquez vos présences et partagez vos avis. Billetterie Ticketmaster intégrée."
        keywords="concerts, événements musicaux, festivals, spectacles, billets concerts, ticketmaster, sortie concert, live music"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EventSearchPage",
          "name": "Recherche de Concerts MusicTerra",
          "description": "Trouvez et suivez les concerts et événements musicaux",
          "url": "https://musicterra.xyz/concerts"
        }}
      />

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
          <ConcertsForYou language={language} onSpin={onSpin} />

          <div style={styles.card}>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>
              {t('Chercher un artiste', 'Search an artist')}
            </h2>
            <p style={{ fontSize: 14, color: '#5A6183', margin: '4px 0 14px' }}>
              {t('Toutes ses dates à venir, partout (Ticketmaster)', 'All upcoming dates, anywhere (Ticketmaster)')}
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

            {suggestedArtists.length > 0 && events.length === 0 && (
              <div style={{ marginTop: 12 }}>
                <p style={{ fontSize: 14, color: '#3A4166', marginBottom: 8 }}>
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

          {loading && (
            <Loader label={t('Recherche des concerts…', 'Looking for concerts…')} />
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
                        <p style={{ margin: '4px 0', fontSize: 14, color: '#3A4166' }}>
                          📍 {event.venueName}, {event.city}
                        </p>
                        <p style={{ margin: '4px 0', fontSize: 14, color: '#3A4166' }}>
                          📅 {new Date(event.date).toLocaleDateString(language)}
                          {event.time && ` • ${event.time}`}
                        </p>

                        {userStatus && (
                          <div style={{ marginTop: 6 }}>
                            {userStatus.status === 'going' && (
                              <span
                                style={{
                                  ...styles.statusBadge,
                                  background: '#DDF5EC',
                                  color: '#0B6E52',
                                }}
                              >
                                ✓ {t("J'y vais", 'Going')}
                              </span>
                            )}
                            {userStatus.status === 'interested' && (
                              <span
                                style={{
                                  ...styles.statusBadge,
                                  background: '#FFF3D6',
                                  color: '#151B3B',
                                }}
                              >
                                ⭐ {t('Intéressé', 'Interested')}
                              </span>
                            )}
                            {userStatus.status === 'attended' && (
                              <span
                                style={{
                                  ...styles.statusBadge,
                                  background: '#E8EBFC',
                                  color: '#2C3FD1',
                                }}
                              >
                                ✓ {t('Vu', 'Attended')}{' '}
                                {userStatus.rating && `• ${userStatus.rating}/10`}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

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

                        
                          href={event.url}
                          target="_blank"
                          rel="noreferrer"
                          style={styles.linkBtn}
                       <a>
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
  card: { border: '1px solid #DFE3EF', borderRadius: 14, padding: 14, background: '#fff' },
  tabBtn: { padding: '8px 12px', borderRadius: 999, border: '1px solid #DFE3EF', background: '#fff', cursor: 'pointer', fontSize: 14, fontWeight: 500 },
  tabActive: { borderColor: '#2C3FD1', background: '#2C3FD1', color: '#fff' },
  input: { flex: 1, padding: '8px 12px', border: '1px solid #DFE3EF', borderRadius: 8, fontSize: 14 },
  primaryBtn: { padding: '8px 16px', background: '#2C3FD1', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 500 },
  suggestionBtn: { padding: '6px 12px', background: '#EEF1F8', border: '1px solid #DFE3EF', borderRadius: 999, cursor: 'pointer', fontSize: 13 },
  eventCard: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: 12, border: '1px solid #EEF1F8', borderRadius: 8, gap: 12 },
  actionBtn: { padding: '6px 12px', background: '#fff', border: '1px solid #DFE3EF', borderRadius: 6, cursor: 'pointer', fontSize: 13, whiteSpace: 'nowrap' },
  actionBtnActive: { background: '#2C3FD1', color: '#fff', borderColor: '#2C3FD1' },
  linkBtn: { padding: '6px 12px', background: '#2C3FD1', color: '#fff', textDecoration: 'none', borderRadius: 6, fontSize: 13, textAlign: 'center', display: 'block' },
  statusBadge: { padding: '4px 8px', borderRadius: 6, fontSize: 12, fontWeight: 600, display: 'inline-block' },
};
