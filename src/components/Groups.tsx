// src/components/Groups.tsx — version optimisée
import { useState, useEffect } from 'react';
import CreateGroup from './CreateGroup';
import GroupSearch from './GroupSearch';
import GroupDetail from './GroupDetail';
import { Group } from '../services/groups';

interface Props {
  language: 'fr' | 'en';
}

export default function Groups({ language }: Props) {
  const [view, setView] = useState<'browse' | 'detail'>('browse');
  const [showCreate, setShowCreate] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [cachedGroups, setCachedGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  // 🧩 Chargement avec cache local pour réactivité immédiate
  useEffect(() => {
    const cache = localStorage.getItem('musicterra_groups_cache');
    if (cache) {
      setCachedGroups(JSON.parse(cache));
      setLoading(false);
    }
  }, []);

  // Rafraîchit le cache dès que la recherche est refaite
  const handleGroupSearchResult = (groups: Group[]) => {
    setCachedGroups(groups);
    localStorage.setItem('musicterra_groups_cache', JSON.stringify(groups));
  };

  const handleGroupSelect = (group: Group) => {
    setSelectedGroup(group);
    setView('detail');
    // Préchargement des détails pour instantanéité
    import('./GroupDetail');
  };

  const handleCreateSuccess = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {view === 'browse' ? (
        <>
          {/* Header */}
          <div style={styles.header}>
            <div>
              <h2 style={{ margin: 0 }}>{t('👥 Groupes', '👥 Groups')}</h2>
              {cachedGroups.length > 0 && (
                <p style={styles.subText}>
                  {cachedGroups.length} {t('groupes disponibles', 'groups available')}
                </p>
              )}
            </div>

            <button onClick={() => setShowCreate(true)} style={styles.createBtn}>
              {t('+ Créer un groupe', '+ Create group')}
            </button>
          </div>

          {/* Search */}
          <GroupSearch
            key={refreshKey}
            onGroupSelect={handleGroupSelect}
            onResults={handleGroupSearchResult}
            language={language}
          />

          {/* Cached display while loading */}
          {loading && cachedGroups.length === 0 ? (
            <div style={styles.loadingContainer}>
              <div style={styles.spinner}></div>
              <p>{t('Chargement des groupes...', 'Loading groups...')}</p>
            </div>
          ) : (
            cachedGroups.length > 0 && (
              <div style={styles.cacheCard}>
                <h4 style={{ marginTop: 0 }}>
                  {t('Groupes récents', 'Recent groups')}
                </h4>
                <div style={styles.groupList}>
                  {cachedGroups.slice(0, 4).map((g) => (
                    <button
                      key={g.id}
                      onClick={() => handleGroupSelect(g)}
                      style={styles.groupPreview}
                    >
                      <img
                        src={g.avatar_url || 'https://via.placeholder.com/60'}
                        alt={g.name}
                        style={styles.groupAvatarSmall}
                      />
                      <div>
                        <strong>{g.name}</strong>
                        <p style={{ margin: 0, fontSize: 12, color: '#666' }}>
                          {g.member_count} {t('membres', 'members')}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )
          )}

          {/* Info card */}
          <div style={styles.infoCard}>
            <h3 style={{ marginTop: 0 }}>
              {t('💡 Pourquoi rejoindre un groupe?', '💡 Why join a group?')}
            </h3>
            <ul style={{ margin: '8px 0', paddingLeft: 20 }}>
              <li>{t('Découvrez de la musique avec des passionnés', 'Discover music with enthusiasts')}</li>
              <li>{t('Partagez vos trouvailles', 'Share your findings')}</li>
              <li>{t('Organisez des sorties concerts', 'Organize concert outings')}</li>
              <li>{t('Participez à des défis musicaux', 'Join music challenges')}</li>
            </ul>
          </div>
        </>
      ) : (
        <>
          {/* Back button */}
          <button onClick={() => setView('browse')} style={styles.backBtn}>
            ← {t('Retour aux groupes', 'Back to groups')}
          </button>

          {/* Group header */}
          {selectedGroup && (
            <div style={styles.groupHeader}>
              <img
                src={selectedGroup.avatar_url || 'https://via.placeholder.com/80'}
                alt={selectedGroup.name}
                style={styles.groupAvatar}
                loading="lazy"
              />
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 4px' }}>{selectedGroup.name}</h2>
                <p style={{ margin: '0 0 8px', color: '#666' }}>
                  {selectedGroup.description}
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {selectedGroup.tags?.map((tag) => (
                    <span key={tag} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: '#999', marginTop: 8 }}>
                  👥 {selectedGroup.member_count} {t('membres', 'members')}
                </p>
              </div>
            </div>
          )}

          {/* Group content */}
          {selectedGroup && (
            <GroupDetail groupId={selectedGroup.id} language={language} />
          )}
        </>
      )}

      {/* Create Group Modal */}
      {showCreate && (
        <CreateGroup
          onClose={() => setShowCreate(false)}
          onSuccess={handleCreateSuccess}
          language={language}
        />
      )}
    </div>
  );
}

// 🎨 Styles allégés + spinner intégré
const styles: Record<string, React.CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #e7e7e7',
  },
  subText: { fontSize: 13, color: '#666', marginTop: 4 },
  createBtn: {
    padding: '10px 16px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: 14,
    whiteSpace: 'nowrap',
  },
  infoCard: {
    padding: 16,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    borderRadius: 12,
    fontSize: 14,
  },
  backBtn: {
    padding: '8px 16px',
    background: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  groupHeader: {
    display: 'flex',
    gap: 16,
    padding: 16,
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #e7e7e7',
    alignItems: 'flex-start',
  },
  groupAvatar: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #667eea',
  },
  tag: {
    padding: '4px 10px',
    background: '#e0e7ff',
    color: '#3730a3',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 500,
  },
  loadingContainer: {
    textAlign: 'center',
    padding: 40,
    color: '#555',
    display: 'grid',
    gap: 12,
    placeItems: 'center',
  },
  spinner: {
    width: 40,
    height: 40,
    border: '4px solid #f0f0f0',
    borderTop: '4px solid #667eea',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  cacheCard: {
    border: '1px solid #eee',
    borderRadius: 12,
    padding: 14,
    background: '#fff',
  },
  groupList: { display: 'flex', gap: 10, flexWrap: 'wrap' },
  groupPreview: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    border: '1px solid #ddd',
    borderRadius: 8,
    background: '#fafafa',
    padding: 8,
    cursor: 'pointer',
    transition: '0.2s',
  },
  groupAvatarSmall: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    objectFit: 'cover',
  },
};
