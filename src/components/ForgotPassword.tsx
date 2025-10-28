import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface Props {
  onBack: () => void;
  language: 'fr' | 'en';
}

export default function ForgotPassword({ onBack, language }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }

    setLoading(false);
  };

  if (sent) {
    return (
      <div style={styles.container}>
        <div style={styles.successBox}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <h2 style={styles.title}>
            {t('Email envoyé !', 'Email sent!')}
          </h2>
          <p style={styles.text}>
            {t(
              'Un email de réinitialisation a été envoyé à',
              'A password reset email has been sent to'
            )}{' '}
            <strong>{email}</strong>
          </p>
          <p style={styles.subtext}>
            {t(
              'Clique sur le lien dans l\'email pour créer un nouveau mot de passe.',
              'Click the link in the email to create a new password.'
            )}
          </p>
          <button onClick={onBack} style={styles.backButton}>
            {t('← Retour à la connexion', '← Back to login')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          {t('🔑 Mot de passe oublié ?', '🔑 Forgot password?')}
        </h2>
        <p style={styles.text}>
          {t(
            'Entre ton email et nous t\'enverrons un lien pour réinitialiser ton mot de passe.',
            'Enter your email and we\'ll send you a link to reset your password.'
          )}
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('ton@email.com', 'your@email.com')}
            style={styles.input}
            required
          />

          {error && <div style={styles.error}>❌ {error}</div>}

          <button type="submit" disabled={loading} style={styles.submitButton}>
            {loading ? '⏳' : t('📧 Envoyer le lien', '📧 Send link')}
          </button>

          <button type="button" onClick={onBack} style={styles.cancelButton}>
            {t('← Retour', '← Back')}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    padding: 20,
  },
  card: {
    maxWidth: 400,
    width: '100%',
    padding: 30,
    background: '#fff',
    borderRadius: 16,
    border: '1px solid #e7e7e7',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  successBox: {
    maxWidth: 400,
    width: '100%',
    padding: 30,
    background: '#fff',
    borderRadius: 16,
    border: '2px solid #10b981',
    textAlign: 'center',
  },
  title: {
    margin: '0 0 12px 0',
    fontSize: 24,
    fontWeight: 700,
  },
  text: {
    margin: '0 0 20px 0',
    fontSize: 15,
    color: '#555',
    lineHeight: 1.6,
  },
  subtext: {
    margin: '12px 0 24px 0',
    fontSize: 13,
    color: '#777',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  input: {
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: 10,
    fontSize: 15,
  },
  submitButton: {
    padding: '14px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: 8,
  },
  cancelButton: {
    padding: '10px 20px',
    background: 'transparent',
    color: '#667eea',
    border: '1px solid #667eea',
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  },
  backButton: {
    padding: '12px 24px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
  },
  error: {
    padding: '10px 12px',
    background: '#fee2e2',
    color: '#991b1b',
    borderRadius: 8,
    fontSize: 14,
  },
};