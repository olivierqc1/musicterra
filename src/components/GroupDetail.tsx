import { useState, useEffect } from 'react';
import { 
  getGroupDiscoveries, 
  getGroupEvents, 
  getGroupChallenges,
  shareDiscovery,
  createGroupEvent,
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

  const { session } = useAuth();
  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  useEffect(() => {
    loadData();
  }, [groupId, tab]);

  const loadData = async () => {
    setLoading(true);
    if (tab === 'feed') {
      const data = await getGroupDiscoveries(groupId);
      setDiscoveries(data);
    } else if (tab === 'events') {
      const data = await getGroupEvents(groupId);
      setEvents(data);
    } else if (tab === 'challenges') {
      const data = await getGroupChallenges(groupId);
      setChallenges(data);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => setTab('feed')}
          style={{
            ...styles.tabBtn,
            ...(tab === 'feed' ? styles.tabActive : {})
          }}
        >
          {t('📰 Découvertes', '📰 Feed')}
        </button>
        <button
          onClick={() => setTab('events')}
          style={{
            ...styles.tabBtn,
            ...(tab === 'events' ? styles.tabActive : {})
          }}
        >
          {t('📅 Événements', '📅 Events')}
        </button>
        <button
          onClick={() => setTab('challenges')}
          style={{
            ...styles.tabBtn,
            ...(tab === 'challenges' ? styles.tabActive : {})
          }}
        >
          {t('🏆 Défis', '🏆 Challenges')}
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <p>{t('Chargement...', 'Loading...')}</p>
      ) : (
        <>
          {tab === 'feed' && (
            <div style={styles.card}>
              <h3>{t('Découvertes du groupe', 'Group discoveries')}</h3>
              {discoveries.length === 0 ? (
                <p style={{ color: '#777' }}>
                  {t('Aucune découverte partagée', 'No shared discoveries yet')}
                </p>
              ) : (
                <div style={{ display: 'grid', gap: 12 }}>
                  {discoveries.map(disc => (
                    <div key={disc.id} style={styles.discoveryCard}>
                      <img
                        src={disc.profiles?.avatar_url || 'https://via.placeholder.com/40'}
                        alt=""
                        style={styles.smallAvatar}
                      />
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontSize: 14 }}>
                          <strong>{disc.profiles?.display_name}</strong>{' '}
                          {t('a partagé', 'shared')}{' '}
                          <span style={styles.itemBadge}>
                            {disc.item_type === 'genre' && '🎸'}
                            {disc.item_type === 'country' && '🌍'}
                            {disc.item_type === 'artist' && '🎤'}{' '}
                            {disc.item_name}
                          </span>
                        </p>
                        {disc.comment && (
                          <p style={{ margin: '4px 0', fontSize: 13, color: '#555' }}>
                            "{disc.comment}"
                          </p>
                        )}
                        <p style={{ fontSize: 12, color: '#999', margin: '4px 0' }}>
                          {new Date(disc.created_at).toLocaleDateString(language)}
                        </p>
                      </div>
                      <div style={{ fontSize: 13, color: '#667eea' }}>
                        ❤️ {disc.likes}
                      </div>
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
                <p style={{ color: '#777' }}>
                  {t('Aucun événement planifié', 'No events planned')}
                </p>
              ) : (
                <div style={{ display: 'grid', gap: 12 }}>
                  {events.map(event => (
                    <div key={event.id} style={styles.eventCard}>
                      <div style={{ flex: 1 }}>
                        <strong>{event.title}</strong>
                        <p style={{ fontSize: 13, color: '#555', margin: '4px 0' }}>
                          {event.description}
                        </p>
                        {event.location && (
                          <p style={{ fontSize: 13, color: '#666', margin: '4px 0' }}>
                            📍 {event.location}
                          </p>
                        )}
                        {event.event_date && (
                          <p style={{ fontSize: 13, color: '#666', margin: '4px 0' }}>
                            📅 {new Date(event.event_date).toLocaleDateString(language)}
                          </p>
                        )}
                        <p style={{ fontSize: 12, color: '#999', marginTop: 4 }}>
                          👥 {event.attendees.length} {t('participant(s)', 'attendee(s)')}
                        </p>
                      </div>
                      <button
                        onClick={() => session && rsvpToEvent(event.id, session.user.id).then(loadData)}
                        style={{
                          ...styles.rsvpBtn,
                          ...(event.attendees.includes(session?.user.id || '') ? styles.rsvpBtnActive : {})
                        }}
                        disabled={!session}
                      >
                        {event.attendees.includes(session?.user.id || '') 
                          ? t('✓ Inscrit', '✓ Going')
                          : t('Participer', 'RSVP')
                        }
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
                <p style={{ color: '#777' }}>
                  {t('Aucun défi en cours', 'No active challenges')}
                </p>
              ) : (
                <div style={{ display: 'grid', gap: 12 }}>
                  {challenges.map(challenge => (
                    <div key={challenge.id} style={styles.challengeCard}>
                      <div style={{ flex: 1 }}>
                        <strong>🏆 {challenge.title}</strong>
                        <p style={{ fontSize: 13, color: '#555', margin: '4px 0' }}>
                          {challenge.description}
                        </p>
                        <p style={{ fontSize: 13, color: '#666', margin: '4px 0' }}>
                          {t('Objectif:', 'Goal:')} {challenge.goal_count}{' '}
                          {challenge.challenge_type === 'discover_genres' && t('genres', 'genres')}
                          {challenge.challenge_type === 'attend_concerts' && t('concerts', 'concerts')}
                          {challenge.challenge_type === 'share_discoveries' && t('partages', 'shares')}
                        </p>
                        {challenge.end_date && (
                          <p style={{ fontSize: 12, color: '#999' }}>
                            {t('Fin:', 'Ends:')} {new Date(challenge.end_date).toLocaleDateString(language)}
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
        </>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    padding: 16,
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #e7e7e7'
  },
  tabBtn: {
    padding: '8px 14px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: 999,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500
  },
  tabActive: {
    background: '#667eea',
    color: '#fff',
    borderColor: '#667eea'
  },
  discoveryCard: {
    display: 'flex',
    gap: 12,
    padding: 12,
    background: '#f9fafb',
    borderRadius: 8,
    alignItems: 'flex-start'
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    objectFit: 'cover'
  },
  itemBadge: {
    padding: '2px 8px',
    background: '#e0e7ff',
    color: '#3730a3',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600
  },
  eventCard: {
    display: 'flex',
    gap: 12,
    padding: 12,
    border: '1px solid #eee',
    borderRadius: 8
  },
  rsvpBtn: {
    padding: '8px 14px',
    background: '#fff',
    border: '1px solid #667eea',
    color: '#667eea',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 13,
    whiteSpace: 'nowrap'
  },
  rsvpBtnActive: {
    background: '#667eea',
    color: '#fff'
  },
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
  }
};
