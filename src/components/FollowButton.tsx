// src/components/FollowButton.tsx
import { useState, useEffect } from 'react';
import { followUser, unfollowUser, isFollowing } from '../services/social';
import { useAuth } from '../context/AuthContext';
import { toast } from "../lib/toast";

interface Props {
  userId: string;
  initialFollowing?: boolean;
  onFollowChange?: (isFollowing: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  language?: 'fr' | 'en';
}

export default function FollowButton({
  userId,
  initialFollowing = false,
  onFollowChange,
  size = 'md',
  language = 'fr',
}: Props) {
  const [following, setFollowing] = useState(initialFollowing);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const { session } = useAuth();

  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  // Vérifier le statut au chargement
  useEffect(() => {
    checkFollowStatus();
  }, [userId]);

  const checkFollowStatus = async () => {
    if (!session) {
      setChecking(false);
      return;
    }

    setChecking(true);
    const status = await isFollowing(userId);
    setFollowing(status);
    setChecking(false);
  };

  const handleClick = async () => {
    if (!session) {
      toast(t('Connectez-vous pour suivre des utilisateurs', 'Sign in to follow users'), "info");
      return;
    }

    setLoading(true);

    if (following) {
      const success = await unfollowUser(userId);
      if (success) {
        setFollowing(false);
        onFollowChange?.(false);
      }
    } else {
      const success = await followUser(userId);
      if (success) {
        setFollowing(true);
        onFollowChange?.(true);
      }
    }

    setLoading(false);
  };

  // Ne pas afficher le bouton pour soi-même
  if (session?.user?.id === userId) {
    return null;
  }

  if (checking) {
    return (
      <button
        disabled
        style={{
          ...styles.base,
          ...styles[size],
          ...styles.loading,
        }}
      >
        ...
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      style={{
        ...styles.base,
        ...styles[size],
        ...(following ? styles.following : styles.notFollowing),
        ...(loading ? styles.loading : {}),
      }}
    >
      {loading ? (
        '...'
      ) : following ? (
        <>
          <span style={styles.icon}>✓</span> {t('Abonné', 'Following')}
        </>
      ) : (
        <>
          <span style={styles.icon}>+</span> {t('Suivre', 'Follow')}
        </>
      )}
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  },
  sm: {
    padding: '6px 12px',
    fontSize: 13,
  },
  md: {
    padding: '8px 16px',
    fontSize: 14,
  },
  lg: {
    padding: '10px 20px',
    fontSize: 15,
  },
  notFollowing: {
    background: '#2C3FD1',
    color: '#fff',
    border: '1px solid #2C3FD1',
  },
  following: {
    background: '#fff',
    color: '#2C3FD1',
    border: '1px solid #2C3FD1',
  },
  loading: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  icon: {
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
};