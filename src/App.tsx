import React, { useState } from 'react';
import { Wheel } from './components/Wheel';
import { Rating } from './components/Rating';
import { genres } from './data/genres';
import { countries } from './data/countries';
import { useUserPreferences } from './context/UserPreferencesContext';

const items = [...genres, ...countries];

function App() {
  const [selectedItem, setSelectedItem] = useState<null | typeof items[0]>(null);
  const { ratings, addRating } = useUserPreferences();
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎵 Musicterra 🎵</h1>

      <button 
        onClick={() => setLanguage(lang => lang === 'fr' ? 'en' : 'fr')}
        style={{ marginBottom: '1rem', cursor: 'pointer' }}
      >
        🌐 {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
      </button>

      <Wheel items={items} onSpinResult={setSelectedItem} />

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
              style={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: '12px',
                margin: '1rem 0'
              }}
            />
          )}

          {selectedItem.subgenres && (
            <p>
              <em>
                {language === 'fr'
                  ? `Ce genre se décline en plusieurs styles comme ${selectedItem.subgenres.join(', ')}.`
                  : `This genre includes styles like ${selectedItem.subgenres.join(', ')}.`}
              </em>
            </p>
          )}
          {selectedItem.regions && (
            <p>
              <em>
                {language === 'fr'
                  ? `Ce pays offre des variations musicales selon les régions : ${selectedItem.regions.join(', ')}.`
                  : `This country has musical variations by region: ${selectedItem.regions.join(', ')}.`}
              </em>
            </p>
          )}
          {selectedItem.artists && (
            <p>
              <strong>
                {language === 'fr'
                  ? 'Groupes ou artistes emblématiques :'
                  : 'Key bands or artists:'}
              </strong> {selectedItem.artists.join(', ')}.
            </p>
          )}

          {selectedItem.spotify && (
            <p style={{ marginTop: '1rem' }}>
              <a 
                href={selectedItem.spotify} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#1DB954', textDecoration: 'none', fontWeight: 'bold' }}
              >
                🎧 {language === 'fr' ? 'Écouter sur Spotify' : 'Listen on Spotify'}
              </a>
            </p>
          )}

          <Rating 
            itemName={selectedItem.name}
            onRate={(note) => {
              addRating(selectedItem.name, note);
              alert(language === 'fr' 
                ? `⭐ Tu as noté ${selectedItem.name} : ${note}/10`
                : `⭐ You rated ${selectedItem.name}: ${note}/10`
              );
            }} 
          />
        </div>
      )}

      <div style={{ marginTop: '3rem' }}>
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
    </div>
  );
}

const styles: {[key:string]: React.CSSProperties} = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Georgia, serif'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem'
  },
  card: {
    marginTop: '2rem',
    display: 'inline-block',
    padding: '1.5rem',
    border: '2px solid #ccc',
    borderRadius: '12px',
    maxWidth: '400px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left'
  }
};

export default App;

