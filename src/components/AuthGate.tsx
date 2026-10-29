// src/components/AuthGate.tsx - AVEC GOOGLE + DISCORD + CRÉATION PROFIL MANUELLE
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ForgotPassword from "./ForgotPassword";
import { makeT, type Lang } from "../i18n";

interface AuthGateProps {
  children?: React.ReactNode;
  /** "sheet" : sans cadre, pour la fenêtre de connexion de l'en-tête. */
  mode?: "inline" | "fullpage" | "sheet";
  language?: Lang;
}

const AuthGate: React.FC<AuthGateProps> = ({ 
  children,
  mode = "inline", 
  language = "fr" 
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { session, supabase } = useAuth();

  const t = makeT(language);

  // ============ CONNEXION EMAIL/PASSWORD ============
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setMessage(t("❌ Email invalide", "❌ Invalid email"));
      return;
    }

    if (!password || password.length < 6) {
      setMessage(t(
        "❌ Le mot de passe doit contenir au moins 6 caractères",
        "❌ Password must be at least 6 characters"
      ));
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      if (isSignUp) {
        // ============ INSCRIPTION ============
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: {
              display_name: email.split('@')[0],
            }
          }
        });

        if (error) throw error;

        // ✨ CRÉER LE PROFIL MANUELLEMENT (FIX pour trigger Supabase qui ne marche pas)
        if (data.user) {
          try {
            console.log('📝 Création du profil pour:', data.user.id);
            
            const { error: profileError } = await supabase
              .from('profiles')
              .insert({
                id: data.user.id,
                email: data.user.email || email,
                display_name: email.split('@')[0],
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
              });

            if (profileError) {
              console.error('⚠️ Erreur création profil:', profileError);
              // Ne pas bloquer l'inscription si le profil échoue
            } else {
              console.log('✅ Profil créé avec succès');
            }
          } catch (err) {
            console.error('⚠️ Exception profil:', err);
            // Ne pas bloquer l'inscription
          }
        }

        setMessage(t(
          "✅ Compte créé ! Vérifie ton email pour confirmer ton compte.",
          "✅ Account created! Check your email to confirm your account."
        ));
        setIsSignUp(false);
        setPassword("");
      } else {
        // ============ CONNEXION ============
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        setMessage(t("✅ Connexion réussie !", "✅ Signed in successfully!"));
        setEmail("");
        setPassword("");
      }
    } catch (err: any) {
      console.error("❌ Erreur auth:", err);
      
      // Messages d'erreur personnalisés
      if (err.message?.includes("Invalid login credentials")) {
        setMessage(t(
          "❌ Email ou mot de passe incorrect",
          "❌ Invalid email or password"
        ));
      } else if (err.message?.includes("User already registered")) {
        setMessage(t(
          "❌ Cet email est déjà utilisé. Essaie de te connecter.",
          "❌ This email is already registered. Try signing in."
        ));
      } else if (err.message?.includes("Email not confirmed")) {
        setMessage(t(
          "❌ Vérifie ton email pour confirmer ton compte",
          "❌ Check your email to confirm your account"
        ));
      } else {
        setMessage(t("❌ Erreur : ", "❌ Error: ") + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // ============ CONNEXION OAUTH ============
  const handleOAuthLogin = async (provider: 'google' | 'discord') => {
    try {
      setLoading(true);
      setMessage("");

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: window.location.origin,
        }
      });

      if (error) throw error;
      
      // L'utilisateur sera redirigé
    } catch (err: any) {
      console.error(`❌ Erreur ${provider}:`, err);
      setMessage(t(
        `❌ Connexion ${provider} indisponible.`,
        `❌ ${provider} login unavailable.`,
          `❌ Inicio de sesión con ${provider} no disponible.`,
          `❌ Inici de sessió amb ${provider} no disponible.`
      ));
      setLoading(false);
    }
  };

  // ============ SI CONNECTÉ ============
  if (session) {
    return <>{children}</>;
  }

  // ============ MODE MOT DE PASSE OUBLIÉ ============
  if (showForgotPassword) {
    return (
      <ForgotPassword 
        onBack={() => setShowForgotPassword(false)} 
        language={language} 
      />
    );
  }

  // ============ FORMULAIRE ============
  const formContent = (
    <>
      {/* HEADER */}
      <div style={{ marginBottom: 20, textAlign: 'center' }}>
        <img src="/favicon.svg" alt="" width={44} height={44} style={{ display: "block", margin: "0 auto" }} />
        <h2 style={{ margin: "10px 0 4px", fontSize: 24, fontWeight: 800 }}>
          {t("Connexion à MusicTerra", "Sign in to MusicTerra")}
        </h2>
        <p style={{ color: "#5A6183", margin: 0, fontSize: 14 }}>
          {t(
            "Retrouve tes goûts musicaux et tes découvertes",
            "Access your musical tastes and discoveries"
          )}
        </p>
      </div>

      {!showEmailForm ? (
        <>
          {/* OAUTH BUTTONS */}
          <div style={{ display: "grid", gap: 12 }}>
            {/* GOOGLE */}
            <button
              onClick={() => handleOAuthLogin('google')}
              disabled={loading}
              style={{
                ...styles.oauthButton,
                ...styles.googleButton,
                opacity: loading ? 0.6 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
              type="button"
            >
              {t("Continuer avec Google", "Continue with Google")}
            </button>

            {/* DISCORD */}
            <button
              onClick={() => handleOAuthLogin('discord')}
              disabled={loading}
              style={{
                ...styles.oauthButton,
                ...styles.discordButton,
                opacity: loading ? 0.6 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
              type="button"
            >
              {t("Continuer avec Discord", "Continue with Discord")}
            </button>
          </div>

          {/* DIVIDER */}
          <div style={styles.divider}>
            <div style={{ 
              position: 'absolute', 
              left: 0, 
              right: 0, 
              height: 1, 
              background: '#DFE3EF', 
              top: '50%' 
            }} />
            <span style={{ 
              position: 'relative', 
              padding: '0 12px', 
              background: '#fff', 
              color: '#8A90AD', 
              fontSize: 13 
            }}>
              {t('ou', 'or')}
            </span>
          </div>

          {/* EMAIL BUTTON */}
          <button
            onClick={() => setShowEmailForm(true)}
            style={styles.emailToggleButton}
            type="button"
          >
            {t("Continuer avec un email", "Continue with email")}
          </button>
        </>
      ) : (
        <>
          {/* BACK BUTTON */}
          <button
            onClick={() => {
              setShowEmailForm(false);
              setMessage("");
            }}
            style={styles.backButton}
            type="button"
          >
            ← {t("Retour", "Back")}
          </button>

          {/* EMAIL FORM HEADER */}
          <div style={{ marginTop: 16, marginBottom: 16, textAlign: 'center' }}>
            <h3 style={{ margin: "0 0 4px" }}>
              {isSignUp 
                ? t("Créer un compte", "Create account")
                : t("Connexion par email", "Sign in with email")
              }
            </h3>
          </div>

          {/* EMAIL/PASSWORD FORM */}
          <form onSubmit={handleAuth} style={{ display: "grid", gap: 12 }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("ton.email@exemple.com", "your.email@example.com")}
              style={styles.input}
              required
              disabled={loading}
              autoComplete="email"
            />
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("Mot de passe (min. 6 caractères)", "Password (min. 6 chars)")}
              style={styles.input}
              required
              disabled={loading}
              minLength={6}
              autoComplete={isSignUp ? "new-password" : "current-password"}
            />

            <button 
              type="submit" 
              style={{
                ...styles.submitButton,
                opacity: loading ? 0.6 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }} 
              disabled={loading}
            >
              {loading 
                ? t("Un instant…", "One moment…")
                : isSignUp
                  ? t("Créer mon compte", "Create account")
                  : t("Se connecter", "Sign in")
              }
            </button>
          </form>

          {/* FORGOT PASSWORD */}
          {!isSignUp && (
            <div style={{ marginTop: 10, textAlign: 'center' }}>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                style={styles.forgotPasswordLink}
                disabled={loading}
              >
                {t('Mot de passe oublié ?', 'Forgot password?')}
              </button>
            </div>
          )}

          {/* TOGGLE SIGNUP/SIGNIN */}
          <div style={{ marginTop: 12, textAlign: "center" }}>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setMessage("");
              }}
              style={styles.toggleButton}
              disabled={loading}
            >
              {isSignUp
                ? t("Déjà un compte ? Se connecter", "Already have an account? Sign in")
                : t("Pas de compte ? S'inscrire", "No account? Sign up")
              }
            </button>
          </div>
        </>
      )}

      {/* MESSAGE */}
      {message && (
        <div style={{
          ...styles.message,
          ...(message.includes("❌") ? styles.messageError : styles.messageSuccess)
        }}>
          {message}
        </div>
      )}

      {/* FOOTER */}
      <div style={styles.footer}>
        <small style={{ color: "#8A90AD", fontSize: 12 }}>
          {t(
            "En te connectant, tu acceptes nos conditions d'utilisation",
            "By signing in, you agree to our terms of service"
          )}
        </small>
      </div>
    </>
  );

  // ============ RENDER ============
  if (mode === "fullpage") {
    return (
      <div style={styles.fullpageContainer}>
        <div style={styles.fullpageCard}>{formContent}</div>
      </div>
    );
  }

  if (mode === "sheet") {
    return <div style={{ padding: "0 16px 8px" }}>{formContent}</div>;
  }

  return <div style={styles.inlineCard}>{formContent}</div>;
};

// ============ STYLES ============
const styles: Record<string, React.CSSProperties> = {
  fullpageContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#2C3FD1",
    padding: 16,
  },
  fullpageCard: {
    maxWidth: 420,
    width: "100%",
    padding: 32,
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  inlineCard: {
    width: "100%",
    boxSizing: "border-box",
    padding: 24,
    border: "1px solid #DFE3EF",
    borderRadius: 20,
    background: "#fff",
  },
  oauthButton: {
    width: "100%",
    padding: "14px 16px",
    border: "none",
    borderRadius: 999,
    fontSize: 15,
    fontWeight: 600,
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  googleButton: {
    border: "1px solid #DFE3EF",
    background: "#fff",
    color: "#151B3B",
  },
  discordButton: {
    background: "#5865F2",
    color: "#fff",
  },
  emailToggleButton: {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #DFE3EF",
    borderRadius: 999,
    background: "#fff",
    color: "#2C3FD1",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  backButton: {
    background: "none",
    border: "none",
    color: "#2C3FD1",
    fontSize: 14,
    cursor: "pointer",
    padding: "8px",
    textAlign: "left",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0",
    position: "relative" as const,
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid #DFE3EF",
    borderRadius: 12,
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
  },
  submitButton: {
    width: "100%",
    padding: "12px 14px",
    border: "none",
    borderRadius: 999,
    background: "#2C3FD1",
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    transition: "background 0.2s",
  },
  toggleButton: {
    background: "none",
    border: "none",
    color: "#2C3FD1",
    fontSize: 14,
    cursor: "pointer",
    textDecoration: "underline",
    padding: "8px",
  },
  forgotPasswordLink: {
    background: "none",
    border: "none",
    color: "#8A90AD",
    fontSize: 13,
    cursor: "pointer",
    textDecoration: "underline",
    padding: "4px 8px",
  },
  message: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
  },
  messageError: {
    background: "#FCE4E7",
    color: "#c00",
  },
  messageSuccess: {
    background: "#DDF5EC",
    color: "#060",
  },
  footer: {
    marginTop: 16,
    textAlign: "center" as const,
  },
};

export default AuthGate;