import { useState } from 'react';
import { submitConcertReview } from '../services/concerts';

interface Props {
  eventId: string;
  eventName: string;
  onClose: () => void;
  onSuccess: () => void;
  language: 'fr' | 'en';
}

export default function ConcertReview({ eventId, eventName, onClose, onSuccess, language }: Props) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [setlist, setSetlist] = useState('');
  const [loading, setLoading] = useState(false);

  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  const handleSubmit = async () => {
    if (rating === 0) {
      alert(t('Merci de donner une note', 'Please give a rating'));
      return;
    }

    setLoading(true);
    try {
      await submitConcertReview(eventId, rating, review, setlist);
      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      alert(t('Erreur lors de la soumission', 'Error submitting review'));
    }
    setLoading(false);
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ marginTop: 0 }}>
          {t('Comment était', 'How was')} {eventName}?
        </h3>

        {/* Rating */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
            {t('Note', 'Rating')} *
          </label>
          <div style={{ display: 'flex', gap: 4 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <button
                key={n}
                onClick={() => setRating(n)}
                style={{
                  ...styles.ratingBtn,
                  background: n <= rating ? '#667eea' : '#f0f0f0',
                  color: n <= rating ? '#fff' : '#333'
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Review */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
            {t('Ton avis', 'Your review')}
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder={t('Raconte ton expérience...', 'Share your experience...')}
            style={styles.textarea}
            rows={4}
          />
        </div>

        {/* Setlist */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
            {t('Morceaux joués (optionnel)', 'Setlist (optional)')}
          </label>
          <textarea
            value={setlist}
            onChange={(e) => setSetlist(e.target.value)}
            placeholder={t('Un morceau par ligne...', 'One song per line...')}
            style={styles.textarea}
            rows={3}
          />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={styles.cancelBtn} disabled={loading}>
            {t('Annuler', 'Cancel')}
          </button>
          <button onClick={handleSubmit} style={styles.submitBtn} disabled={loading}>
            {loading ? '...' : t('Publier', 'Submit')}
          </button>
        </div>
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
    background: 'rgba(0,0,0,0.5)',
    display: 'grid',
    placeItems: 'center',
    zIndex: 1000,
    padding: 16
  },
  modal: {
    background: '#fff',
    borderRadius: 12,
    padding: 24,
    maxWidth: 500,
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto'
  },
  ratingBtn: {
    width: 36,
    height: 36,
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
    transition: 'all 0.2s'
  },
  textarea: {
    width: '100%',
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'inherit',
    resize: 'vertical'
  },
  cancelBtn: {
    padding: '8px 16px',
    border: '1px solid #ddd',
    borderRadius: 8,
    background: '#fff',
    cursor: 'pointer'
  },
  submitBtn: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: 8,
    background: '#667eea',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 500
  }
};
