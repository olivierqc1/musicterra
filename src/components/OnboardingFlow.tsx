import { useState } from 'react';
import { Wheel } from './Wheel';
import { makeT, type Lang } from "../i18n";

interface Props {
  onComplete: (ratings: any[]) => void;
  language: Lang;
}

export default function OnboardingFlow({ onComplete, language }: Props) {
  const [step, setStep] = useState(0);
  const [ratings, setRatings] = useState<any[]>([]);

  const t = makeT(language);

  const STEPS = [
    {
      title: t('🎵 Bienvenue sur Musicterra!', '🎵 Welcome to Musicterra!'),
      subtitle: t(
        'Découvre de la musique du monde entier en quelques clics',
        'Discover music from around the world in a few clicks'
      )
    },
    {
      title: t('🎡 Tourne la roue', '🎡 Spin the wheel'),
      subtitle: t(
        'Note 3 genres pour commencer ton aventure musicale',
        'Rate 3 genres to start your musical journey'
      )
    }
  ];

  const handleRating = (genre: string, rating: number) => {
    const newRatings = [...ratings, { genre, rating }];
    setRatings(newRatings);

    if (newRatings.length >= 3) {
      onComplete(newRatings);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.progress}>
          {STEPS.map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.progressDot,
                ...(i <= step ? styles.progressDotActive : {})
              }}
            />
          ))}
        </div>

        <h2>{STEPS[step].title}</h2>
        <p style={{ color: '#5A6183' }}>{STEPS[step].subtitle}</p>

        {step === 0 && (
          <button onClick={() => setStep(1)} style={styles.btn}>
            {t('Commencer', 'Get Started')} →
          </button>
        )}

        {step === 1 && (
          <div>
            <p style={{ fontSize: 14, marginBottom: 12 }}>
              {t(`Notes données: ${ratings.length}/3`, `Ratings given: ${ratings.length}/3`,
          `Puntuaciones: ${ratings.length}/3`,
          `Puntuacions: ${ratings.length}/3`)}
            </p>
            {/* Afficher la roue et le système de notation ici */}
          </div>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.8)',
    display: 'grid',
    placeItems: 'center',
    zIndex: 10000
  },
  modal: {
    background: '#fff',
    borderRadius: 16,
    padding: 32,
    maxWidth: 500,
    width: '90%'
  },
  progress: {
    display: 'flex',
    gap: 8,
    marginBottom: 20,
    justifyContent: 'center'
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: '#DFE3EF'
  },
  progressDotActive: {
    background: '#2C3FD1'
  },
  btn: {
    padding: '12px 24px',
    background: '#2C3FD1',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 600,
    marginTop: 16
  }
};
