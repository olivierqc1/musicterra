// src/components/GroupDetail.tsx — version optimisée ⚡
import { useState, useEffect } from 'react';
import {
  getGroupDiscoveries,
  getGroupEvents,
  getGroupChallenges,
  rsvpToEvent,
  GroupDiscovery,
  GroupEvent,
  GroupChallenge
} from '../services/groups';
import { useAuth } from '../context/AuthContext';

interface Props {
  groupId: string;
  language: 'fr' | 'en';
}

export default function GroupDetail({ groupId, language }: Props) {
  const [tab, setTab] = useState<'feed' | 'events' | 'challenges'>('feed');
  const [discoveries, setDiscoveries] = useState<GroupDiscovery[]>([]);
  const [events, setEvents] = useState<GroupEvent[]>([]);
  const [challenges, setChallenges] = useState<GroupChallenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  const { session } = useAuth();
  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  // ⚡ Optimisation : cache local + rafraîchissement intelligent
  useEffect(() => {
    loadData();
  }, [groupId, tab]);

  const loadData = async () => {
    setLoading(true);
    const cacheKey = `group_${groupId}_${tab}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.data?.length) {
        if (tab === 'feed') setDiscoveries(parsed.data);
        if (tab === 'events') setEvents(parsed.data);
        if (tab === 'challenges') setChallenges(parsed.data);
        setLastUpdated(parsed.timestamp);
        setLoading(false);
      }
    }

    try {
      let data: any[] = [];
      if (tab === 'feed') data = await getGroupDiscoveries(groupId);
      if (tab === 'events') data = await getGroupEvents(groupId);
      if (tab === 'challenges') data = await getGroupChallenges(groupId);

      if (data?.length) {
        if (tab === 'feed') setDiscoveries(data);
        if (tab === 'events') setEvents(data);
        if (tab === 'challenges') setChallenges(data);
        localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
      }
    } catch (e) {
      console.error('Erreur chargement', tab, e);
    }

    setLoading(false);
  };

  const handleRSVP = async (eventId: string) => {
    if (!session) return alert(t('Connectez-vous pour participer', 'Please sign in to RSVP'));
    try {
      await rsvpToEvent(eventId, session.user.id);
      loadData();
    } catch (e) {
      console.error('RSVP erreur', e);
    }
  };

  if (loading && (discoveries.length === 0 && events.length === 0 && challenges.length === 0)) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p>{t('Chargement des données...', 'Loading data...')}</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {/* Tabs */}
      <div style={styles.tabsContainer}>
        {['feed', 'events', 'challenges'].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key as any)}
            style={{
              ...styles.tabBtn,
              ...(tab === key ? styles.tabActive : {})
            }}
          >
            {key === 'feed' && t('📰 Découvertes', '📰 Feed')}
            {key === 'events' && t('📅 Événements', '📅 Events')}
            {key === 'challenges' && t('🏆 Défis', '🏆 Challenges')}
          </button>
        ))}
      </div>

      {lastUpdated && (
        <p style={styles.timestamp}>
          {t('Dernière mise à jour :', 'Last updated:')}{' '}
          {new Date(lastUpdated).toLocaleTimeString(language)}
        </p>
      )}

      {/* Content */}
      {tab === 'feed' && (
        <div style={styles.card}>
          <h3>{t('Découvertes du groupe', 'Group discoveries')}</h3>
          {discoveries.length === 0 ? (
            <p style={styles.emptyText}>
              {t('Aucune découverte partagée', 'No shared discoveries yet')}
            </p>
          ) : (
            <div style={{ display: 'grid', gap: 12 }}>
              {discoveries.map((disc) => (
                <div key={disc.id} style={styles.discoveryCard}>
                  <img
                    src={disc.profiles?.avatar_url || 'https://via.placeholder.com/40'}
                    alt=""
                    style={styles.smallAvatar}
                    loading="lazy"
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: 14 }}>
                      <strong>{disc.profiles?.display_name}</strong>{' '}
                      {t('a partagé', 'shared')}{' '}
                      <span style={styles.itemBadge}>
                        {disc.item_type === 'genre' && '🎸'}
                        {disc.item_type === 'country' && '🌍'}
                        {disc.item_type === 'artist' && '🎤'} {disc.item_name}
                      </span>
                    </p>
                    {disc.comment && (
                      <p style={styles.commentText}>"{disc.comment}"</p>
                    )}
                    <p style={styles.metaText}>
                      {new Date(disc.created_at).toLocaleDateString(language)}
                    </p>
                  </div>
                  <div style={styles.likeCount}>❤️ {disc.likes}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'events' && (
        <div style={styles.card}>
          <h3>{t('Événements à venir', 'Upcoming events')}</h3>
          {events.length === 0 ? (
            <p style={styles.emptyText}>{t('Aucun événement planifié', 'No events planned')}</p>
          ) : (
            <div style={{ display: 'grid', gap: 12 }}>
              {events.map((event) => (
                <div key={event.id} style={styles.eventCard}>
                  <div style={{ flex: 1 }}>
                    <strong>{event.title}</strong>
                    {event.description && (
                      <p style={styles.textLine}>{event.description}</p>
                    )}
                    {event.location && (
                      <p style={styles.textLine}>📍 {event.location}</p>
                    )}
                    {event.event_date && (
                      <p style={styles.textLine}>
                        📅 {new Date(event.event_date).toLocaleDateString(language)}
                      </p>
                    )}
                    <p style={styles.metaText}>
                      👥 {event.attendees.length} {t('participant(s)', 'attendee(s)')}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRSVP(event.id)}
                    style={{
                      ...styles.rsvpBtn,
                      ...(event.attendees.includes(session?.user.id || '')
                        ? styles.rsvpBtnActive
                        : {})
                    }}
                    disabled={!session}
                  >
                    {event.attendees.includes(session?.user.id || '')
                      ? t('✓ Inscrit', '✓ Going')
                      : t('Participer', 'RSVP')}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'challenges' && (
        <div style={styles.card}>
          <h3>{t('Défis actifs', 'Active challenges')}</h3>
          {challenges.length === 0 ? (
            <p style={styles.emptyText}>{t('Aucun défi en cours', 'No active challenges')}</p>
          ) : (
            <div style={{ display: 'grid', gap: 12 }}>
              {challenges.map((challenge) => (
                <div key={challenge.id} style={styles.challengeCard}>
                  <div style={{ flex: 1 }}>
                    <strong>🏆 {challenge.title}</strong>
                    <p style={styles.textLine}>{challenge.description}</p>
                    <p style={styles.textLine}>
                      {t('Objectif:', 'Goal:')} {challenge.goal_count}{' '}
                      {challenge.challenge_type === 'discover_genres' && t('genres', 'genres')}
                      {challenge.challenge_type === 'attend_concerts' && t('concerts', 'concerts')}
                      {challenge.challenge_type === 'share_discoveries' && t('partages', 'shares')}
                    </p>
                    {challenge.end_date && (
                      <p style={styles.metaText}>
                        {t('Fin:', 'Ends:')}{' '}
                        {new Date(challenge.end_date).toLocaleDateString(language)}
                      </p>
                    )}
                  </div>
                  <div style={styles.progressCircle}>
                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>
                      {challenge.participants.length}
                    </span>
                    <span style={{ fontSize: 11 }}>
                      {t('participants', 'participants')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 🎨 Styles allégés et uniformisés
const styles: Record<string, React.CSSProperties> = {
  card: { padding: 16, background: '#fff', borderRadius: 12, border: '1px solid #e7e7e7' },
  tabsContainer: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  tabBtn: {
    padding: '8px 14px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: 999,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500
  },
  tabActive: { background: '#667eea', color: '#fff', borderColor: '#667eea' },
  timestamp: { fontSize: 12, color: '#999', textAlign: 'center' },
  emptyText: { color: '#777', textAlign: 'center' },
  textLine: { fontSize: 13, color: '#555', margin: '4px 0' },
  metaText: { fontSize: 12, color: '#999', margin: '4px 0' },
  commentText: { margin: '4px 0', fontSize: 13, color: '#555', fontStyle: 'italic' },
  likeCount: { fontSize: 13, color: '#667eea' },
  discoveryCard: {
    display: 'flex',
    gap: 12,
    padding: 12,
    background: '#f9fafb',
    borderRadius: 8,
    alignItems: 'flex-start'
  },
  smallAvatar: { width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' },
  itemBadge: {
    padding: '2px 8px',
    background: '#e0e7ff',
    color: '#3730a3',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600
  },
  eventCard: { display: 'flex', gap: 12, padding: 12, border: '1px solid #eee', borderRadius: 8 },
  rsvpBtn: {
    padding: '8px 14px',
    background: '#fff',
    border: '1px solid #667eea',
    color: '#667eea',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 13
  },
  rsvpBtnActive: { background: '#667eea', color: '#fff' },
  challengeCard: {
    display: 'flex',
    gap: 12,
    padding: 14,
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    borderRadius: 10,
    border: '2px solid #fbbf24'
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #fbbf24'
  },
  loadingContainer: {
    textAlign: 'center',
    padding: 40,
    color: '#555',
    display: 'grid',
    gap: 12,
    placeItems: 'center'
  },
  spinner: {
    width: 40,
    height: 40,
    border: '4px solid #f0f0f0',
    borderTop: '4px solid #667eea',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }
};
