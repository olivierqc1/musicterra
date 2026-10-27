// src/components/ConcertFeed.tsx
import { useEffect, useState } from 'react';
import { getConcertFeed } from '../services/concerts';

interface Props {
  groupId?: string;
  language: 'fr' | 'en';
}

export default function ConcertFeed({ groupId, language }: Props) {
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  useEffect(() => {
    loadFeed();
  }, [groupId]);

  const loadFeed = async () => {
    setLoading(true);

    // 💾 1️⃣ Charger d’abord depuis le cache local (instantané)
    try {
      const cached = localStorage.getItem(`concert_feed_${groupId || 'global'}`);
      if (cached) {
        const parsed = JSON.parse(cached);
        setActivities(parsed.data);
        setLastUpdated(parsed.timestamp);
        setLoading(false); // UI visible avant Supabase
      }
    } catch {}

    // 🌐 2️⃣ Rafraîchir ensuite depuis Supabase (en arrière-plan)
    try {
      const data = await getConcertFeed(groupId);
      if (data?.length) {
        setActivities(data);
        localStorage.setItem(
          `concert_feed_${groupId || 'global'}`,
          JSON.stringify({ data, timestamp: Date.now() })
        );
      } else {
        setActivities([]);
      }
    } catch (error) {
      console.error('❌ Erreur chargement du feed', error);
    }

    setLoading(false);
  };

  // ⏱️ Rechargement auto toutes les 5 minutes (optionnel)
  useEffect(() => {
    const interval = setInterval(() => loadFeed(), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [groupId]);

  if (loading && activities.length === 0)
    return <p>{t('Chargement...', 'Loading...')}</p>;

  if (activities.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#5A6183' }}>
        {t('Aucune activité récente', 'No recent activity')}
      </p>
    );
  }

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {lastUpdated && (
        <p style={{ fontSize: 12, color: '#8A90AD', textAlign: 'center' }}>
          {t('Dernière mise à jour :', 'Last updated:')}{' '}
          {new Date(lastUpdated).toLocaleTimeString(language)}
        </p>
      )}

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
                <p style={styles.textLine}>
                  {t('va voir', 'is going to')}{' '}
                  <strong>{activity.event_name}</strong>
                </p>
              )}

              {activity.status === 'interested' && (
                <p style={styles.textLine}>
                  {t('est intéressé par', 'is interested in')}{' '}
                  <strong>{activity.event_name}</strong>
                </p>
              )}

              {activity.status === 'attended' && (
                <>
                  <p style={styles.textLine}>
                    {t('a vu', 'attended')}{' '}
                    <strong>{activity.event_name}</strong>
                  </p>
                  {activity.rating && (
                    <div style={{ marginTop: 4 }}>
                      <span style={styles.ratingBadge}>
                        ⭐ {activity.rating}/10
                      </span>
                    </div>
                  )}
                  {activity.review && (
                    <p style={styles.reviewText}>"{activity.review}"</p>
                  )}
                </>
              )}

              <p style={styles.footerText}>
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
    border: '1px solid #DFE3EF',
    borderRadius: 12,
    background: '#fff',
    transition: 'all 0.2s ease',
    animation: 'fadeIn 0.4s ease',
  },
  userInfo: { display: 'flex', gap: 12, alignItems: 'flex-start' },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
  },
  textLine: { margin: '2px 0', fontSize: 14, color: '#3A4166' },
  ratingBadge: {
    padding: '4px 8px',
    background: '#FFF3D6',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
  },
  reviewText: { marginTop: 6, fontSize: 14, fontStyle: 'italic', color: '#3A4166' },
  footerText: { fontSize: 12, color: '#8A90AD', marginTop: 4 },
};
