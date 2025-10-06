import { useState, useEffect } from 'react';

interface Props {
  onLocationSelect: (city: string, coords?: { lat: number; lng: number }) => void;
  language: 'fr' | 'en';
}

export default function LocationSelector({ onLocationSelect, language }: Props) {
  const [inputCity, setInputCity] = useState('');
  const [useGPS, setUseGPS] = useState(false);
  const [loadingGPS, setLoadingGPS] = useState(false);

  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  const handleGetGPS = () => {
    if (!navigator.geolocation) {
      alert(t('Géolocalisation non supportée', 'Geolocation not supported'));
      return;
    }

    setLoadingGPS(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoadingGPS(false);
        setUseGPS(true);
        onLocationSelect('', {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        setLoadingGPS(false);
        alert(t('Erreur de géolocalisation', 'Geolocation error'));
        console.error(error);
      }
    );
  };

  const handleCitySubmit = () => {
    if (inputCity.trim()) {
      setUseGPS(false);
      onLocationSelect(inputCity.trim());
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder={t('Ville (ex: Montreal, Paris...)', 'City (e.g., Montreal, Paris...)')}
          style={styles.input}
          onKeyDown={(e) => e.key === 'Enter' && handleCitySubmit()}
        />
        <button onClick={handleCitySubmit} style={styles.btn}>
          {t('Chercher', 'Search')}
        </button>
      </div>

      <div style={styles.divider}>
        <span style={styles.dividerText}>{t('ou', 'or')}</span>
      </div>

      <button
        onClick={handleGetGPS}
        disabled={loadingGPS}
        style={{ ...styles.btn, ...styles.gpsBtn }}
      >
        {loadingGPS ? '...' : `📍 ${t('Utiliser ma position', 'Use my location')}`}
      </button>

      {useGPS && (
        <p style={{ fontSize: 13, color: '#667eea', marginTop: 8 }}>
          {t('📍 Concerts près de vous', '📍 Concerts near you')}
        </p>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    marginBottom: 16
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: 14
  },
  btn: {
    padding: '8px 16px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 500,
    whiteSpace: 'nowrap'
  },
  gpsBtn: {
    width: '100%',
    background: '#10b981'
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: '12px 0',
    color: '#999'
  },
  dividerText: {
    padding: '0 12px',
    background: '#fff',
    position: 'relative' as const,
    zIndex: 1
  }
};
