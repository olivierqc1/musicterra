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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { session, signInWithEmail, signOut } = useAuth();

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setMessage(t("❌ Email invalide", "❌ Invalid email"));
      return;
    }

    try {
      setLoading(true);
      await signInWithEmail(email);
      setMessage(t(
        "✉️ Email envoyé ! Vérifie ta boîte de réception.",
        "✉️ Email sent! Check your inbox."
      ));
      setEmail("");
    } catch (err: any) {
      setMessage(t("❌ Erreur : ", "❌ Error: ") + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  // Si connecté, afficher les enfants
  if (session) {
    return <>{children}</>;
  }

  // Formulaire de connexion
  const formContent = (
    <>
      <div style={{ marginBottom: 20 }}>
        <span style={{ fontSize: 40 }}>🎵</span>
        <h2 style={{ margin: "8px 0 4px" }}>
          {t("Connexion à Musicterra", "Sign in to Musicterra")}
        </h2>
        <p style={{ color: "#666", margin: 0 }}>
          {t(
            "Entre ton email pour recevoir un lien de connexion magique",
            "Enter your email to receive a magic sign-in link"
          )}
        </p>
      </div>

      <form onSubmit={handleLogin} style={{ display: "grid", gap: 12 }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("ton.email@exemple.com", "your.email@example.com")}
          style={styles.input}
          required
          disabled={loading}
        />
        <button type="submit" style={styles.submitButton} disabled={loading}>
          {loading 
            ? t("⏳ Envoi...", "⏳ Sending...") 
            : t("📧 Envoyer le lien", "📧 Send link")}
        </button>
      </form>

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
            "Le lien sera valide pendant 1 heure. Vérifie tes spams si tu ne le reçois pas.",
            "The link will be valid for 1 hour. Check spam if you don't receive it."
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
  logoutButton: {
    padding: "10px 16px",
    border: "1px solid #dc2626",
    borderRadius: 8,
    background: "#fef2f2",
    color: "#dc2626",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  footer: {
    marginTop: 16,
    textAlign: "center",
  },
};

export default AuthGate;
