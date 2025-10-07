import { useState, useEffect } from 'react';
import { searchGroups, POPULAR_TAGS, Group } from '../services/groups';

interface Props {
  onGroupSelect: (group: Group) => void;
  language: 'fr' | 'en';
}

export default function GroupSearch({ onGroupSelect, language }: Props) {
  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [results, setResults] = useState<Group[]>([]);
  const [loading, setLoading] = useState(false);

  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  useEffect(() => {
    handleSearch();
  }, [selectedTags]);

  const handleSearch = async () => {
    setLoading(true);
    const groups = await searchGroups(query, selectedTags);
    setResults(groups);
    setLoading(false);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div style={styles.container}>
      <h3>{t('🔍 Trouver un groupe', '🔍 Find a group')}</h3>

      {/* Search input */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('Rechercher...', 'Search...')}
          style={styles.input}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} style={styles.searchBtn}>
          {loading ? '...' : t('Chercher', 'Search')}
        </button>
      </div>

      {/* Tags */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
          {t('Filtrer par tags:', 'Filter by tags:')}
        </p>
        <div style={styles.tagsContainer}>
          {POPULAR_TAGS.slice(0, 15).map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                ...styles.tag,
                ...(selectedTags.includes(tag) ? styles.tagActive : {})
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div style={{ display: 'grid', gap: 12 }}>
          {results.map(group => (
            <div key={group.id} style={styles.groupCard}>
              <img
                src={group.avatar_url || 'https://via.placeholder.com/60'}
                alt={group.name}
                style={styles.avatar}
              />
              <div style={{ flex: 1 }}>
                <strong>{group.name}</strong>
                <p style={{ fontSize: 13, color: '#666', margin: '4px 0' }}>
                  {group.description}
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 6 }}>
                  {group.tags?.slice(0, 3).map(tag => (
                    <span key={tag} style={styles.miniTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: '#999', marginTop: 4 }}>
                  👥 {group.member_count} {t('membres', 'members')}
                </p>
              </div>
              <button
                onClick={() => onGroupSelect(group)}
                style={styles.joinBtn}
              >
                {t('Rejoindre', 'Join')}
              </button>
            </div>
          ))}
        </div>
      )}

      {!loading && results.length === 0 && (query || selectedTags.length > 0) && (
        <p style={{ textAlign: 'center', color: '#777' }}>
          {t('Aucun groupe trouvé', 'No groups found')}
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
  searchBtn: {
    padding: '10px 16px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 500
  },
  tagsContainer: {
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap'
  },
  tag: {
    padding: '6px 12px',
    background: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: 999,
    cursor: 'pointer',
    fontSize: 13
  },
  tagActive: {
    background: '#667eea',
    color: '#fff',
    borderColor: '#667eea'
  },
  groupCard: {
    display: 'flex',
    gap: 12,
    padding: 12,
    border: '1px solid #eee',
    borderRadius: 10,
    alignItems: 'flex-start'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    objectFit: 'cover'
  },
  miniTag: {
    padding: '2px 8px',
    background: '#e0e7ff',
    color: '#3730a3',
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 500
  },
  joinBtn: {
    padding: '8px 16px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 13,
    whiteSpace: 'nowrap'
  }
};
