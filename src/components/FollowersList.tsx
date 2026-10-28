// src/components/FollowersList.tsx
import { useState, useEffect } from 'react';
import { getFollowers, getFollowing } from '../services/social';
import FollowButton from './FollowButton';
import { makeT, type Lang } from "../i18n";

interface Props {
  userId: string;
  type: 'followers' | 'following';
  language?: Lang;
}

export default function FollowersList({ userId, type, language = 'fr' }: Props) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const t = makeT(language);

  useEffect(() => {
    loadUsers();
  }, [userId, type]);

  const loadUsers = async () => {
    setLoading(true);
    const data = type === 'followers' 
      ? await getFollowers(userId)
      : await getFollowing(userId);
    
    setUsers(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner}></div>
        <p>{t('Chargement...', 'Loading...')}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div style={styles.empty}>
        <p style={styles.emptyText}>
          {type === 'followers'
            ? t('Aucun abonné pour le moment', 'No followers yet')
            : t('Aucun abonnement pour le moment', 'Not following anyone yet')}
        </p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>
        {type === 'followers'
          ? t(`${users.length} Abonné(s)`, `${users.length} Follower(s)`,
          `${users.length} seguidor(es)`,
          `${users.length} seguidor(s)`)
          : t(`${users.length} Abonnement(s)`, `${users.length} Following`,
          `${users.length} siguiendo`,
          `${users.length} seguint`)}
      </h3>

      <div style={styles.list}>
        {users.map((item) => {
          const user = type === 'followers' ? item.follower : item.following;
          if (!user) return null;

          return (
            <div key={item.id} style={styles.userCard}>
              <img
                src={user.avatar_url || 'https://via.placeholder.com/50'}
                alt={user.display_name}
                style={styles.avatar}
              />
              
              <div style={styles.userInfo}>
                <strong style={styles.userName}>{user.display_name}</strong>
                {user.username && (
                  <p style={styles.username}>@{user.username}</p>
                )}
                <p style={styles.stats}>
                  {user.followers_count || 0} {t('abonnés', 'followers')} • {user.following_count || 0} {t('abonnements', 'following')}
                </p>
              </div>

              <FollowButton
                userId={user.id}
                size="sm"
                language={language}
                onFollowChange={loadUsers}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: 16,
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #DFE3EF',
  },
  title: {
    marginTop: 0,
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 600,
  },
  list: {
    display: 'grid',
    gap: 12,
  },
  userCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    border: '1px solid #EEF1F8',
    borderRadius: 10,
    background: '#F4F6FB',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #2C3FD1',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    display: 'block',
    fontSize: 15,
    marginBottom: 2,
  },
  username: {
    fontSize: 13,
    color: '#5A6183',
    margin: '2px 0',
  },
  stats: {
    fontSize: 12,
    color: '#8A90AD',
    margin: '4px 0 0',
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
  emptyText: {
    color: '#5A6183',
    fontSize: 14,
  },
};