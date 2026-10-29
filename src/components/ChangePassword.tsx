import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { makeT, type Lang } from "../i18n";

interface Props {
  language: Lang;
}

export default function ChangePassword({ language }: Props) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const t = makeT(language);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // Validation
    if (newPassword.length < 6) {
      setMessage({ 
        type: 'error', 
        text: t('Le mot de passe doit contenir au moins 6 caractères', 'Password must be at least 6 characters') 
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ 
        type: 'error', 
        text: t('Les mots de passe ne correspondent pas', 'Passwords do not match') 
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ 
        type: 'success', 
        text: t('✅ Mot de passe changé avec succès !', '✅ Password changed successfully!') 
      });
      setNewPassword('');
      setConfirmPassword('');
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>
        {t('🔐 Changer mon mot de passe', '🔐 Change my password')}
      </h3>

      <form onSubmit={handleChangePassword} style={styles.form}>
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

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? '⏳' : t('💾 Sauvegarder', '💾 Save')}
        </button>

        {message && (
          <div style={{
            ...styles.message,
            ...(message.type === 'success' ? styles.success : styles.error)
          }}>
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 400,
    margin: '0 auto',
    padding: 20,
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #DFE3EF'
  },
  title: {
    margin: '0 0 20px 0',
    fontSize: 20,
    fontWeight: 600
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    color: '#151B3B'
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #DFE3EF',
    borderRadius: 8,
    fontSize: 14
  },
  button: {
    padding: '12px 20px',
    background: '#2C3FD1',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: 8
  },
  message: {
    padding: '12px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500
  },
  success: {
    background: '#DDF5EC',
    color: '#0B6E52',
    border: '1px solid #0E9F75'
  },
  error: {
    background: '#FCE4E7',
    color: '#A3283A',
    border: '1px solid #D9374B'
  }
};