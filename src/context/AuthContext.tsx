// src/components/AuthGate.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ForgotPassword from "../components/ForgotPassword";

interface AuthGateProps {
  children?: React.ReactNode;
  mode?: "inline" | "fullpage";
  language?: "fr" | "en";
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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { session, supabase } = useAuth();

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

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
        // INSCRIPTION
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

        setMessage(t(
          "✅ Compte créé ! Vérifie ton email pour confirmer.",
          "✅ Account created! Check your email to confirm."
        ));
        setIsSignUp(false);
        setPassword("");
      } else {
        // CONNEXION
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
      console.error("Erreur auth:", err);
      
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

  // ============ CONNEXION INSTAGRAM ============
  const handleInstagramLogin = async () => {
    try {
      setLoading(true);
      setMessage("");

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'instagram',
        options: {
          redirectTo: window.location.origin,
        }
      });

      if (error) throw error;
      
    } catch (err: any) {
      console.error("Erreur Instagram:", err);
      setMessage(t(
        "❌ Connexion Instagram indisponible pour le moment",
        "❌ Instagram login unavailable at the moment"
      ));
      setLoading(false);
    }
  };

  if (session) {
    return <>{children}</>;
  }

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} language={language} />;
  }

  const formContent = (
    <>
      <div style={{ marginBottom: 20, textAlign: 'center' }}>
        <span style={{ fontSize: 40 }}>🎵</span>
        <h2 style={{ margin: "8px 0 4px" }}>
          {isSignUp 
            ? t("Créer un compte", "Create account")
            : t("Connexion à MusicTerra", "Sign in to MusicTerra")
          }
        </h2>
        <p style={{ color: "#666", margin: 0, fontSize: 14 }}>
          {isSignUp
            ? t(
                "Rejoins la communauté musicale mondiale",
                "Join the global music community"
              )
            : t(
                "Retrouve tes goûts musicaux et tes découvertes",
                "Access your musical tastes and discoveries"
              )
          }
        </p>
      </div>

      <button
        onClick={handleInstagramLogin}
        disabled={loading}
        style={styles.instagramButton}
        type="button"
      >
        <span style={{ fontSize: 20 }}>📸</span>
        {t("Continuer avec Instagram", "Continue with Instagram")}
      </button>

      <div style={styles.divider}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: '#ddd', top: '50%' }} />
        <span style={{ position: 'relative', padding: '0 12px', background: '#fff', color: '#999', fontSize: 13 }}>
          {t('ou', 'or')}
        </span>
      </div>

      <form onSubmit={handleAuth} style={{ display: "grid", gap: 12 }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("ton.email@exemple.com", "your.email@example.com")}
          style={styles.input}
          required
          disabled={loading}
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
        />

        <button type="submit" style={styles.submitButton} disabled={loading}>
          {loading 
            ? t("⏳ Chargement...", "⏳ Loading...") 
            : isSignUp
              ? t("📝 Créer mon compte", "📝 Create account")
              : t("🔑 Se connecter", "🔑 Sign in")
          }
        </button>
      </form>

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

      {message && (
        <div style={{
          ...styles.message,
          ...(message.includes("❌") ? styles.messageError : styles.messageSuccess)
        }}>
          {message}
        </div>
      )}

      <div style={styles.footer}>
        <small style={{ color: "#888", fontSize: 12 }}>
          {t(
            "En te connectant, tu acceptes nos conditions d'utilisation",
            "By signing in, you agree to our terms of service"
          )}
        </small>
      </div>
    </>
  );

  if (mode === "fullpage") {
    return (
      <div style={styles.fullpageContainer}>
        <div style={styles.fullpageCard}>{formContent}</div>
      </div>
    );
  }

  return <div style={styles.inlineCard}>{formContent}</div>;
};

const styles: Record<string, React.CSSProperties> = {
  fullpageContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
    maxWidth: 420,
    margin: "20px auto",
    padding: 24,
    border: "1px solid #e7e7e7",
    borderRadius: 12,
    background: "#fff",
  },
  instagramButton: {
    width: "100%",
    padding: "14px 16px",
    border: "none",
    borderRadius: 10,
    background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
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
    border: "1px solid #ddd",
    borderRadius: 8,
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
  },
  submitButton: {
    width: "100%",
    padding: "12px 14px",
    border: "none",
    borderRadius: 8,
    background: "#667eea",
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s",
  },
  toggleButton: {
    background: "none",
    border: "none",
    color: "#667eea",
    fontSize: 14,
    cursor: "pointer",
    textDecoration: "underline",
    padding: "8px",
  },
  forgotPasswordLink: {
    background: "none",
    border: "none",
    color: "#999",
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
    background: "#fee",
    color: "#c00",
  },
  messageSuccess: {
    background: "#efe",
    color: "#060",
  },
  footer: {
    marginTop: 16,
    textAlign: "center" as const,
  },
};

export default AuthGate;
