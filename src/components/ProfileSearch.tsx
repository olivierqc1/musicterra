import { useState } from 'react';
import { searchProfiles, Profile } from '../services/profile';
import { useNavigate } from 'react-router-dom';

interface Props {
  language: 'fr' | 'en';
}

export default function ProfileSearch({ language }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false);

  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  const handleSearch = async () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    const profiles = await searchProfiles(query);
    setResults(profiles);
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h3>{t('🔍 Rechercher des profils', '🔍 Search profiles')}</h3>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.trim()) {
              handleSearch();
            } else {
              setResults([]);
            }
          }}
          placeholder={t('Nom ou email...', 'Name or email...')}
          style={styles.input}
        />
      </div>

      {loading && <p style={{ color: '#777' }}>{t('Recherche...', 'Searching...')}</p>}

      {results.length > 0 && (
        <div style={{ display: 'grid', gap: 12 }}>
          {results.map((profile) => (
            <div key={profile.id} style={styles.profileCard}>
              <img
                src={profile.avatar_url || 'https://via.placeholder.com/50'}
                alt={profile.display_name}
                style={styles.avatar}
              />
              <div style={{ flex: 1 }}>
                <strong>{profile.display_name}</strong>
                {profile.location && (
                  <p style={{ fontSize: 13, color: '#777', margin: '2px 0' }}>
                    📍 {profile.location}
                  </p>
                )}
                {profile.bio && (
                  <p style={{ fontSize: 13, color: '#555', margin: '4px 0' }}>
                    {profile.bio.substring(0, 100)}
                    {profile.bio.length > 100 ? '...' : ''}
                  </p>
                )}
              </div>
              <button style={styles.viewBtn}>
                {t('Voir', 'View')}
              </button>
            </div>
          ))}
        </div>
      )}

      {!loading && query && results.length === 0 && (
        <p style={{ textAlign: 'center', color: '#777' }}>
          {t('Aucun profil trouvé', 'No profiles found')}
        </p>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: 16,
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #e7e7e7'
  },
  input: {
    flex: 1,
    padding: '10px 12px',
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: 14
  },
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    border: '1px solid #eee',
    borderRadius: 10,
    background: '#fafafa'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    objectFit: 'cover'
  },
  viewBtn: {
    padding: '6px 14px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 13
  }
};
