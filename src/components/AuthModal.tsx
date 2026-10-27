// src/components/AuthModal.tsx - AVEC EMAIL + OAUTH
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'fr' | 'en';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  language = 'fr' 
}) => {
  const { supabase } = useAuth();
  const [mode, setMode] = useState<'oauth' | 'email'>('oauth');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  if (!isOpen) return null;

  const handleOAuthLogin = async (provider: 'google' | 'discord') => {
    try {
      setLoading(true);
      setError('');

      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) throw error;
    } catch (err: any) {
      console.error('OAuth error:', err);
      setError(err.message || t('Erreur de connexion', 'Login error'));
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignUp = async () => {
    if (!email || !password) {
      setError(t('Email et mot de passe requis', 'Email and password required'));
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSuccess('');

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) throw error;

      setSuccess(t(
        '✅ Inscription réussie ! Vérifiez votre email pour confirmer.',
        '✅ Sign up successful! Check your email to confirm.'
      ));
      setEmail('');
      setPassword('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async () => {
    if (!email || !password) {
      setError(t('Email et mot de passe requis', 'Email and password required'));
      return;
    }

    try {
      setLoading(true);
      setError('');

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 style={styles.title}>
          {t('Connexion', 'Sign In')}
        </h2>

        <p style={styles.subtitle}>
          {t(
            'Connecte-toi pour sauvegarder tes notes',
            'Sign in to save your ratings'
          )}
        </p>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            onClick={() => setMode('oauth')}
            style={{
              ...styles.tab,
              ...(mode === 'oauth' ? styles.tabActive : {}),
            }}
          >
            {t('Connexion rapide', 'Quick Sign In')}
          </button>
          <button
            onClick={() => setMode('email')}
            style={{
              ...styles.tab,
              ...(mode === 'email' ? styles.tabActive : {}),
            }}
          >
            {t('Email', 'Email')}
          </button>
        </div>

        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}

        {success && (
          <div style={styles.success}>
            {success}
          </div>
        )}

        {mode === 'oauth' ? (
          <div style={styles.buttonContainer}>
            {/* Google OAuth */}
            <button
              onClick={() => handleOAuthLogin('google')}
              disabled={loading}
              style={styles.googleButton}
            >
              <span style={{ fontSize: 20 }}>🔵</span>
              {t('Continuer avec Google', 'Continue with Google')}
            </button>

            {/* Discord OAuth */}
            <button
              onClick={() => handleOAuthLogin('discord')}
              disabled={loading}
              style={styles.discordButton}
            >
              <span style={{ fontSize: 20 }}>💜</span>
              {t('Continuer avec Discord', 'Continue with Discord')}
            </button>
          </div>
        ) : (
          <div style={styles.emailForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('ton@email.com', 'your@email.com')}
              style={styles.input}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('Mot de passe', 'Password')}
              style={styles.input}
            />
            
            <div style={styles.emailButtons}>
              <button
                onClick={handleEmailSignIn}
                disabled={loading}
                style={styles.emailButton}
              >
                {t('Se connecter', 'Sign In')}
              </button>
              <button
                onClick={handleEmailSignUp}
                disabled={loading}
                style={styles.emailButtonSecondary}
              >
                {t('Créer un compte', 'Sign Up')}
              </button>
            </div>
          </div>
        )}

        {loading && (
          <div style={styles.loadingText}>
            {t('Connexion en cours...', 'Signing in...')}
          </div>
        )}

        <p style={styles.disclaimer}>
          {t(
            'En te connectant, tu acceptes nos conditions d\'utilisation',
            'By signing in, you agree to our terms of service'
          )}
        </p>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: 20,
  },
  modal: {
    background: '#fff',
    borderRadius: 16,
    padding: 32,
    maxWidth: 440,
    width: '100%',
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'transparent',
    border: 'none',
    fontSize: 24,
    cursor: 'pointer',
    color: '#5A6183',
    padding: 8,
    lineHeight: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 8,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 15,
    color: '#5A6183',
    marginBottom: 24,
    lineHeight: 1.5,
  },
  tabs: {
    display: 'flex',
    gap: 8,
    marginBottom: 20,
    borderBottom: '2px solid #DFE3EF',
  },
  tab: {
    flex: 1,
    padding: '10px 16px',
    border: 'none',
    background: 'transparent',
    fontSize: 14,
    fontWeight: 600,
    color: '#5A6183',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    marginBottom: -2,
    transition: 'all 0.2s',
  },
  tabActive: {
    color: '#2C3FD1',
    borderBottom: '2px solid #2C3FD1',
  },
  error: {
    background: '#FCE4E7',
    color: '#A3283A',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 14,
  },
  success: {
    background: '#DDF5EC',
    color: '#0B6E52',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 14,
  },
  buttonContainer: {
    display: 'grid',
    gap: 12,
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: '14px 20px',
    border: '2px solid #DFE3EF',
    borderRadius: 10,
    background: '#fff',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    color: '#151B3B',
  },
  discordButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: '14px 20px',
    border: 'none',
    borderRadius: 10,
    background: '#5865F2',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    color: '#fff',
  },
  emailForm: {
    display: 'grid',
    gap: 12,
  },
  input: {
    padding: '14px 16px',
    border: '2px solid #DFE3EF',
    borderRadius: 10,
    fontSize: 15,
    outline: 'none',
    transition: 'border 0.2s',
  },
  emailButtons: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
  },
  emailButton: {
    padding: '14px 20px',
    border: 'none',
    borderRadius: 10,
    background: '#2C3FD1',
    color: '#fff',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
  },
  emailButtonSecondary: {
    padding: '14px 20px',
    border: '2px solid #2C3FD1',
    borderRadius: 10,
    background: '#fff',
    color: '#2C3FD1',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 16,
    color: '#5A6183',
    fontSize: 14,
  },
  disclaimer: {
    marginTop: 20,
    fontSize: 12,
    color: '#8A90AD',
    textAlign: 'center',
    lineHeight: 1.4,
  },
};

export default AuthModal;
