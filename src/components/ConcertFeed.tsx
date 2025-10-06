import { useEffect, useState } from 'react';
import { getConcertFeed } from '../services/concerts';

interface Props {
  groupId?: string;
  language: 'fr' | 'en';
}

export default function ConcertFeed({ groupId, language }: Props) {
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  useEffect(() => {
    loadFeed();
  }, [groupId]);

  const loadFeed = async () => {
    setLoading(true);
    try {
      const data = await getConcertFeed(groupId);
      setActivities(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  if (loading) return <p>{t('Chargement...', 'Loading...')}</p>;

  if (activities.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#777' }}>
        {t('Aucune activité récente', 'No recent activity')}
      </p>
    );
  }

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {activities.map((activity) => (
        <div key={activity.id} style={styles.activityCard}>
          <div style={styles.userInfo}>
            {activity.profiles?.avatar_url && (
              <img
                src={activity.profiles.avatar_url}
                alt=""
                style={styles.avatar}
              />
            )}
            <div>
              <strong>{activity.profiles?.display_name || 'User'}</strong>
              {activity.status === 'going' && (
                <p style={{ margin: '2px 0', fontSize: 14, color: '#555' }}>
                  {t('va voir', 'is going to')} <strong>{activity.event_name}</strong>
                </p>
              )}
              {activity.status === 'interested' && (
                <p style={{ margin: '2px 0', fontSize: 14, color: '#555' }}>
                  {t('est intéressé par', 'is interested in')} <strong>{activity.event_name}</strong>
                </p>
              )}
              {activity.status === 'attended' && (
                <>
                  <p style={{ margin: '2px 0', fontSize: 14, color: '#555' }}>
                    {t('a vu', 'attended')} <strong>{activity.event_name}</strong>
                  </p>
                  {activity.rating && (
                    <div style={{ marginTop: 4 }}>
                      <span style={styles.ratingBadge}>⭐ {activity.rating}/10</span>
                    </div>
                  )}
                  {activity.review && (
                    <p style={{ marginTop: 6, fontSize: 14, fontStyle: 'italic' }}>
                      "{activity.review}"
                    </p>
                  )}
                </>
              )}
              <p style={{ fontSize: 12, color: '#999', marginTop: 4 }}>
                📍 {activity.venue_name}, {activity.city} •{' '}
                {new Date(activity.event_date).toLocaleDateString(language)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  activityCard: {
    padding: 12,
    border: '1px solid #e7e7e7',
    borderRadius: 12,
    background: '#fff'
  },
  userInfo: {
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    objectFit: 'cover'
  },
  ratingBadge: {
    padding: '4px 8px',
    background: '#fef3c7',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600
  }
};
