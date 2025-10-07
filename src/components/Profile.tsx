import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { getProfile, getUserGroups, Profile as ProfileType } from '../services/profile';
import ProfileEdit from './ProfileEdit';
import ProfileSearch from './ProfileSearch';

interface Props {
  language: 'fr' | 'en';
}

export default function Profile({ language }: Props) {
  const { session } = useAuth();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [view, setView] = useState<'profile' | 'search'>('profile');

  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  useEffect(() => {
    if (session) {
      loadProfile();
      loadGroups();
    }
  }, [session]);

  const loadProfile = async () => {
    if (!session) return;
    setLoading(true);
    const data = await getProfile(session.user.id);
    setProfile(data);
    setLoading(false);
  };

  const loadGroups = async () => {
    if (!session) return;
    const data = await getUserGroups(session.user.id);
    setGroups(data);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return <p>{t('Chargement...', 'Loading...')}</p>;
  }

  if (!profile) {
    return <p>{t('Erreur de chargement du profil', 'Error loading profile')}</p>;
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {/* Toggle view */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => setView('profile')}
          style={{
            ...styles.tabBtn,
            ...(view === 'profile' ? styles.tabActive : {})
          }}
        >
          {t('Mon profil', 'My profile')}
        </button>
        <button
          onClick={() => setView('search')}
          style={{
            ...styles.tabBtn,
            ...(view === 'search' ? styles.tabActive : {})
          }}
        >
          {t('Rechercher', 'Search')}
        </button>
      </div>

      {view === 'profile' ? (
        <>
          {/* Profile Card */}
          <div style={styles.card}>
            <div style={styles.profileHeader}>
              <img
                src={profile.avatar_url || 'https://via.placeholder.com/100'}
                alt="Avatar"
                style={styles.avatar}
              />
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 8px' }}>{profile.display_name}</h2>
                {profile.location && (
                  <p style={{ margin: '4px 0', color: '#666', fontSize: 14 }}>
                    📍 {profile.location}
                  </p>
                )}
                {profile.bio && (
                  <p style={{ margin: '8px 0', fontSize: 14 }}>
                    {profile.bio}
                  </p>
                )}

                {/* Social Links */}
                {(profile.instagram_handle || profile.facebook_url) && (
                  <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                    {profile.instagram_handle && (
                      
                        href={`https://instagram.com/${profile.instagram_handle}`}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.socialLink}
                      >
                        📷 Instagram
                      </a>
                    )}
                    {profile.facebook_url && (
                      
                        href={profile.facebook_url}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.socialLink}
                      >
                        👥 Facebook
                      </a>
                    )}
                  </div>
                )}
              </div>
              <button onClick={() => setEditing(true)} style={styles.editBtn}>
                {t('✏️ Modifier', '✏️ Edit')}
              </button>
            </div>
          </div>

          {/* Groups */}
          <div style={styles.card}>
            <h3>{t('Mes groupes', 'My groups')} ({groups.length})</h3>
            {groups.length === 0 ? (
              <p style={{ color: '#777', fontSize: 14 }}>
                {t('Vous n\'êtes membre d\'aucun groupe', 'You are not in any groups yet')}
              </p>
            ) : (
              <div style={{ display: 'grid', gap: 10 }}>
                {groups.map((membership) => (
                  <div key={membership.group_id} style={styles.groupCard}>
                    <div style={{ flex: 1 }}>
                      <strong>{membership.groups.name}</strong>
                      {membership.groups.description && (
                        <p style={{ fontSize: 13, color: '#666', margin: '4px 0' }}>
                          {membership.groups.description}
                        </p>
                      )}
                    </div>
                    <span style={styles.roleBadge}>
                      {membership.role === 'owner' && t('👑 Admin', '👑 Admin')}
                      {membership.role === 'member' && t('Membre', 'Member')}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <button onClick={handleSignOut} style={styles.signOutBtn}>
            {t('Se déconnecter', 'Sign out')}
          </button>
        </>
      ) : (
        <ProfileSearch language={language} />
      )}

      {/* Edit Modal */}
      {editing && (
        <ProfileEdit
          currentProfile={profile}
          onSave={() => {
            setEditing(false);
            loadProfile();
          }}
          onCancel={() => setEditing(false)}
          language={language}
        />
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
  profileHeader: {
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #667eea'
  },
  editBtn: {
    padding: '8px 14px',
    background: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 14,
    whiteSpace: 'nowrap'
  },
  socialLink: {
    fontSize: 13,
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: 500
  },
  groupCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    background: '#f9fafb',
    borderRadius: 8,
    border: '1px solid #eee'
  },
  roleBadge: {
    padding: '4px 10px',
    background: '#e0e7ff',
    color: '#3730a3',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600
  },
  signOutBtn: {
    padding: 12,
    background: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 500
  }
};
