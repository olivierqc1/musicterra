// src/components/AuthGate.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { session, supabase } = useAuth();

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

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
        });

        if (error) throw error;

        setMessage(t(
          "✅ Compte créé ! Tu peux maintenant te connecter.",
          "✅ Account created! You can now sign in."
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
      }

      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.error("Erreur auth:", err);
      
      // Messages d'erreur personnalisés
      if (err.message?.includes("Invalid login credentials")) {
        setMessage(t(
          "❌ Email ou mot de passe incorrect",
          "❌ Invalid email or password"
        ));
      } else if (err.message?.includes("User already registered")) {
        setMessage(t(
          "❌ Cet email est déjà utilisé",
          "❌ This email is already registered"
        ));
      } else {
        setMessage(t("❌ Erreur : ", "❌ Error: ") + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Si connecté, afficher les enfants
  if (session) {
    return <>{children}</>;
  }

  // Formulaire de connexion/inscription
  const formContent = (
    <>
      <div style={{ marginBottom: 20 }}>
        <span style={{ fontSize: 40 }}>🎵</span>
        <h2 style={{ margin: "8px 0 4px" }}>
          {isSignUp 
            ? t("Créer un compte", "Create account")
            : t("Connexion à Musicterra", "Sign in to Musicterra")
          }
        </h2>
        <p style={{ color: "#666", margin: 0 }}>
          {isSignUp
            ? t(
                "Entre ton email et choisis un mot de passe",
                "Enter your email and choose a password"
              )
            : t(
                "Entre ton email et ton mot de passe pour te connecter",
                "Enter your email and password to sign in"
              )
          }
        </p>
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
        <small style={{ color: "#888" }}>
          {t(
            "Ton mot de passe doit contenir au moins 6 caractères.",
            "Your password must be at least 6 characters long."
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

// Styles
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
    maxWidth: 400,
    margin: "20px auto",
    padding: 24,
    border: "1px solid #e7e7e7",
    borderRadius: 12,
    background: "#fff",
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
    textAlign: "center",
  },
};

export default AuthGate;
