import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface Props {
  language: 'fr' | 'en';
}

export default function ResetPassword({ language }: Props) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword.length < 6) {
      setError(t('Le mot de passe doit contenir au moins 6 caractères', 'Password must be at least 6 characters'));
      return;
    }

    if (newPassword !== confirmPassword) {
      setError(t('Les mots de passe ne correspondent pas', 'Passwords do not match'));
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div style={styles.container}>
        <div style={styles.successBox}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
          <h2 style={styles.title}>
            {t('Mot de passe changé !', 'Password changed!')}
          </h2>
          <p style={styles.text}>
            {t('Redirection en cours...', 'Redirecting...')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          {t('🔐 Nouveau mot de passe', '🔐 New password')}
        </h2>
        <p style={styles.text}>
          {t('Choisis un nouveau mot de passe sécurisé.', 'Choose a new secure password.')}
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>
              {t('Nouveau mot de passe', 'New password')}
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={t('Au moins 6 caractères', 'At least 6 characters')}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>
              {t('Confirmer le mot de passe', 'Confirm password')}
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t('Retape le mot de passe', 'Retype password')}
              style={styles.input}
              required
            />
          </div>

          {error && <div style={styles.error}>❌ {error}</div>}

          <button type="submit" disabled={loading} style={styles.submitButton}>
            {loading ? '⏳' : t('💾 Changer le mot de passe', '💾 Change password')}
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
    minHeight: '100vh',
    padding: 20,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  card: {
    maxWidth: 400,
    width: '100%',
    padding: 30,
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
  },
  successBox: {
    maxWidth: 400,
    width: '100%',
    padding: 40,
    background: '#fff',
    borderRadius: 16,
    textAlign: 'center',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
  },
  title: {
    margin: '0 0 12px 0',
    fontSize: 24,
    fontWeight: 700,
  },
  text: {
    margin: '0 0 24px 0',
    fontSize: 15,
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    color: '#333',
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
  error: {
    padding: '10px 12px',
    background: '#fee2e2',
    color: '#991b1b',
    borderRadius: 8,
    fontSize: 14,
  },
};