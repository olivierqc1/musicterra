// src/components/FriendsFeed.tsx
import { useState, useEffect } from 'react';
import { getFriendsFeed, ActivityFeedItem } from '../services/social';
import { useAuth } from '../context/AuthContext';

interface Props {
  language?: 'fr' | 'en';
  limit?: number;
}

export default function FriendsFeed({ language = 'fr', limit = 20 }: Props) {
  const [activities, setActivities] = useState<ActivityFeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { session } = useAuth();

  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  useEffect(() => {
    if (session) {
      loadFeed();
    }
  }, [session]);

  const loadFeed = async () => {
    setLoading(true);
    const data = await getFriendsFeed(limit);
    setActivities(data);
    setLoading(false);
  };

  const renderActivityIcon = (type: ActivityFeedItem['action_type']) => {
    switch (type) {
      case 'rated_genre':
        return '🎸';
      case 'saved_artist':
        return '🌱';
      case 'going_concert':
        return '🎤';
      case 'attended_concert':
        return '✓';
      default:
        return '📌';
    }
  };

  const renderActivityText = (activity: ActivityFeedItem) => {
    const userName = activity.profiles?.display_name || 'Un utilisateur';
    const data = activity.action_data;

    switch (activity.action_type) {
      case 'rated_genre':
        return (
          <>
            <strong>{userName}</strong> {t('a noté', 'rated')} <strong>{data.genre}</strong> {data.rating}/10
          </>
        );
      case 'saved_artist':
        return (
          <>
            <strong>{userName}</strong> {t('a découvert', 'discovered')} <strong>{data.artist}</strong>
          </>
        );
      case 'going_concert':
        return (
          <>
            <strong>{userName}</strong> {t('ira au concert de', 'is going to')} <strong>{data.artist}</strong>
            {data.date && ` • ${new Date(data.date).toLocaleDateString(language)}`}
          </>
        );
      case 'attended_concert':
        return (
          <>
            <strong>{userName}</strong> {t('a vu', 'attended')} <strong>{data.artist}</strong> en concert
            {data.rating && ` • ${data.rating}/10`}
          </>
        );
      default:
        return (
          <>
            <strong>{userName}</strong> {t('a effectué une action', 'performed an action')}
          </>
        );
    }
  };

  const getTimeAgo = (date: string) => {
    const now = new Date();
    const activityDate = new Date(date);
    const diffMs = now.getTime() - activityDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return t('À l\'instant', 'Just now');
    if (diffMins < 60) return `${diffMins} ${t('min', 'min')}`;
    if (diffHours < 24) return `${diffHours} ${t('h', 'h')}`;
    if (diffDays < 7) return `${diffDays} ${t('j', 'd')}`;
    return activityDate.toLocaleDateString(language);
  };

  if (!session) {
    return (
      <div style={styles.empty}>
        <p>{t('Connectez-vous pour voir l\'activité de vos amis', 'Sign in to see your friends\' activity')}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner}></div>
        <p>{t('Chargement du fil d\'activité...', 'Loading activity feed...')}</p>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div style={styles.empty}>
        <h3 style={styles.emptyTitle}>📭 {t('Aucune activité', 'No activity yet')}</h3>
        <p style={styles.emptyText}>
          {t(
            'Suivez des utilisateurs pour voir leur activité musicale ici!',
            'Follow users to see their music activity here!'
          )}
        </p>
        <p style={styles.emptyHint}>
          💡 {t('Explorez les profils et cliquez sur "Suivre"', 'Explore profiles and click "Follow"')}
        </p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>
          📰 {t('Activité de vos amis', 'Friends\' activity')}
        </h3>
        <button onClick={loadFeed} style={styles.refreshBtn} title={t('Actualiser', 'Refresh')}>
          🔄
        </button>
      </div>

      <div style={styles.feed}>
        {activities.map((activity) => (
          <div key={activity.id} style={styles.activityCard}>
            <div style={styles.activityHeader}>
              <img
                src={activity.profiles?.avatar_url || 'https://via.placeholder.com/40'}
                alt={activity.profiles?.display_name}
                style={styles.avatar}
              />
              <div style={styles.activityContent}>
                <div style={styles.activityText}>
                  <span style={styles.icon}>{renderActivityIcon(activity.action_type)}</span>
                  {renderActivityText(activity)}
                </div>
                <p style={styles.timestamp}>{getTimeAgo(activity.created_at)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activities.length >= limit && (
        <p style={styles.hint}>
          {t('Suivez plus d\'utilisateurs pour voir plus d\'activité', 'Follow more users to see more activity')}
        </p>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'grid',
    gap: 16,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: 18,
    fontWeight: 600,
  },
  refreshBtn: {
    padding: '6px 10px',
    background: '#EEF1F8',
    border: '1px solid #DFE3EF',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 16,
    transition: '0.2s',
  },
  feed: {
    display: 'grid',
    gap: 12,
  },
  activityCard: {
    padding: 14,
    background: '#F4F6FB',
    border: '1px solid #EEF1F8',
    borderRadius: 10,
    transition: '0.2s',
  },
  activityHeader: {
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #2C3FD1',
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: 4,
  },
  icon: {
    fontSize: 16,
    marginRight: 6,
  },
  timestamp: {
    fontSize: 12,
    color: '#8A90AD',
    margin: 0,
  },
  loading: {
    padding: 40,
    textAlign: 'center',
    display: 'grid',
    gap: 12,
    placeItems: 'center',
  },
  spinner: {
    width: 40,
    height: 40,
    border: '4px solid #EEF1F8',
    borderTop: '4px solid #2C3FD1',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  empty: {
    padding: 40,
    textAlign: 'center',
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #DFE3EF',
  },
  emptyTitle: {
    marginTop: 0,
    fontSize: 20,
  },
  emptyText: {
    color: '#5A6183',
    fontSize: 14,
    marginBottom: 12,
  },
  emptyHint: {
    fontSize: 13,
    color: '#8A90AD',
    margin: 0,
  },
  hint: {
    textAlign: 'center',
    fontSize: 13,
    color: '#8A90AD',
    margin: 0,
  },
};