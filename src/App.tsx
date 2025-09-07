import React, { useMemo, useState } from 'react';
import { Wheel } from './components/Wheel';
import { Rating } from './components/Rating';
import { genres } from './data/genres';
import { countries } from './data/countries';
import { useUserPreferences } from './context/UserPreferencesContext';
import type { Item } from './types';
import { Profile } from './components/Profile';
import { Groups } from './components/Groups';
import { logEvent } from './utils/analytics';

function buildCityItems(): Item[] {
  return countries.flatMap((country) =>
    (country.cities ?? []).map((c) => ({
      name: `${c.name} — ${country.name}`,
      descriptionFr:
        `${c.name} est une scène clé de ${country.name}. Styles: ${(c.styles ?? []).join(', ') || '—'}.`,
      descriptionEn:
        `${c.name} is a key scene in ${country.name}. Styles: ${(c.styles ?? []).join(', ') || '—'}.`,
      artists: c.artists,
      spotify: c.spotify,
      image: c.image,
      subgenres: c.styles
    }))
  );
}

const allGenres: Item[] = genres;
const allCountries: Item[] = countries;

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [pool, setPool] = useState<'all' | 'genres' | 'countries' | 'cities'>('all');
  const [tab, setTab] = useState<'discover' | 'profile' | 'groups'>('discover');

  const { ratings, addRating } = useUserPreferences();

  const cityItems = useMemo(buildCityItems, []);
  const items: Item[] = useMemo(() => {
    if (pool === 'genres') return allGenres;
    if (pool === 'countries') return allCountries;
    if (pool === 'cities') return cityItems;
    return [...allGenres, ...allCountries, ...cityItems];
  }, [pool, cityItems]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎵 Musicterra</h1>

      <div style={{ marginBottom: 12 }}>
        <button
          onClick={() => {
            setLanguage((l) => {
              const next = l === 'fr' ? 'en' : 'fr';
              logEvent({ type: 'change_language', to: next });
              return next;
            });
          }}
          style={styles.btn}
        >
          🌐 {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
        </button>
      </div>

      {/* Onglets */}
      <div style={styles.tabs}>
        <button
          style={{ ...styles.tabBtn, ...(tab === 'discover' ? styles.tabActive : {}) }}
          onClick={() => { setTab('discover'); logEvent({ type: 'change_tab', to: 'discover' }); }}
        >
          {language === 'fr' ? 'Découvrir' : 'Discover'}
        </button>
        <button
          style={{ ...styles.tabBtn, ...(tab === 'profile' ? styles.tabActive : {}) }}
          onClick={() => { setTab('profile'); logEvent({ type: 'change_tab', to: 'profile' }); }}
        >
          {language === 'fr' ? 'Profil' : 'Profile'}
        </button>
        <button
          style={{ ...styles.tabBtn, ...(tab === 'groups' ? styles.tabActive : {}) }}
          onClick={() => { setTab('groups'); logEvent({ type: 'change_tab', to: 'groups' }); }}
        >
          {language === 'fr' ? 'Groupes' : 'Groups'}
        </button>
      </div>

      {tab === 'discover' && (
        <>
          {/* Sélecteur d’ensemble */}
          <div style={{ marginTop: 10 }}>
            <label style={{ marginRight: 8 }}>
              {language === 'fr' ? 'Tirer :' : 'Draw from:'}
            </label>
            <select
              value={pool}
              onChange={(e) => {
                const to = e.target.value as typeof pool;
                setPool(to);
                logEvent({ type: 'change_pool', to });
              }}
              style={styles.select}
            >
              <option value="all">{language === 'fr' ? 'Tous' : 'All'}</option>
              <option value="genres">{language === 'fr' ? 'Genres' : 'Genres'}</option>
              <option value="countries">{language === 'fr' ? 'Pays' : 'Countries'}</option>
              <option value="cities">{language === 'fr' ? 'Villes' : 'Cities'}</option>
            </select>
          </div>

          <div style={{ marginTop: 16 }}>
            <Wheel items={items} onSpinResult={(item) => setSelectedItem(item)} pool={pool} />
          </div>

          {selectedItem && (
            <div style={styles.card}>
              <h2>{selectedItem.name}</h2>

              <p>
                {language === 'fr' ? selectedItem.descriptionFr : selectedItem.descriptionEn}
              </p>

              {selectedItem.image && (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  style={{ width: '100%', maxWidth: 320, borderRadius: 12, margin: '12px 0' }}
                />
              )}

              {selectedItem.subgenres?.length ? (
                <p>
                  <em>
                    {language === 'fr'
                      ? `Sous-styles: ${selectedItem.subgenres.join(', ')}.`
                      : `Sub-styles: ${selectedItem.subgenres.join(', ')}.`}
                  </em>
                </p>
              ) : null}

              {selectedItem.artists?.length ? (
                <p>
                  <strong>
                    {language === 'fr' ? 'Artistes clés:' : 'Key artists:'}
                  </strong>{' '}
                  {selectedItem.artists.join(', ')}
                </p>
              ) : null}

              {selectedItem.spotify && (
                <p style={{ marginTop: 8 }}>
                  <a
                    href={selectedItem.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => logEvent({ type: 'open_spotify', item: selectedItem.name })}
                    style={{ color: '#1DB954', textDecoration: 'none', fontWeight: 600 }}
                  >
                    🎧 {language === 'fr' ? 'Écouter sur Spotify' : 'Listen on Spotify'}
                  </a>
                </p>
              )}

              <Rating
                itemName={selectedItem.name}
                onRate={(note) => {
                  addRating(selectedItem.name, note);
                  logEvent({ type: 'rate', item: selectedItem.name, value: note });
                  alert(
                    language === 'fr'
                      ? `⭐ Tu as noté ${selectedItem.name} : ${note}/10`
                      : `⭐ You rated ${selectedItem.name}: ${note}/10`
                  );
                }}
              />
            </div>
          )}

          <div style={{ marginTop: 28 }}>
            <h3>📝 {language === 'fr' ? 'Tes notes :' : 'Your ratings:'}</h3>
            {Object.keys(ratings).length === 0 ? (
              <p>{language === 'fr' ? 'Pas encore de notes données.' : 'No ratings yet.'}</p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {Object.entries(ratings).map(([item, note]) => (
                  <li key={item}>{item} : {note}/10</li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}

      {tab === 'profile' && <Profile language={language} />}
      {tab === 'groups' && <Groups language={language} />}
    </div>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  container: { textAlign: 'center', marginTop: 40, fontFamily: 'Inter, system-ui, sans-serif' },
  title: { fontSize: '2.2rem', marginBottom: 10 },
  btn: { padding: '8px 12px', borderRadius: 10, border: '1px solid #ccc', background: '#fff', cursor: 'pointer' },
  tabs: { display: 'inline-flex', gap: 6, margin: '10px 0 18px' },
  tabBtn: { padding: '8px 12px', borderRadius: 999, border: '1px solid #ddd', background: '#f7f7f7', cursor: 'pointer' },
  tabActive: { background: '#111', color: '#fff', borderColor: '#111' },
  select: { padding: 8, borderRadius: 8, border: '1px solid #ccc' },
  card: { margin: '16px auto 0', maxWidth: 480, textAlign: 'left', padding: 16, border: '1px solid #ddd', borderRadius: 12, background: '#fafafa' }
};

export default App;


