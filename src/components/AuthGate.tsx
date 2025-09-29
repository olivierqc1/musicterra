// src/components/AuthGate.tsx
import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

type Props = { children: React.ReactNode };

/**
 * Affiche les enfants si l'utilisateur est connecté.
 * Sinon, montre un petit formulaire pour entrer l'email et recevoir
 * un lien magique Supabase (passwordless).
 */
const AuthGate: React.FC<Props> = ({ children }) => {
  const { session } = useAuth();
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Si déjà connecté => on laisse passer l'app
  if (session) {
    return <>{children}</>;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setMessage(null);
    setErrorMsg(null);

    // Redirection après clic sur le lien dans l'email.
    // Assure-toi que cette origin est bien autorisée dans Supabase > Auth > URL Configuration.
    const emailRedirectTo = `${window.location.origin}`;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo },
    });

    setSending(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }
    setMessage(
      `Un lien de connexion a été envoyé à ${email}. Ouvre l'email et clique sur le lien pour terminer la connexion.`
    );
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={{ margin: "0 0 8px" }}>Connexion requise</h2>
        <p style={styles.muted}>
          Entre ton email pour recevoir un lien magique et accéder aux pages
          protégées (Groupes, Concerts, Profil).
        </p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            required
            placeholder="ton.email@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" disabled={sending} style={styles.button}>
            {sending ? "Envoi en cours…" : "Envoyer le lien magique"}
          </button>
        </form>

        {message && <p style={{ ...styles.info, marginTop: 8 }}>{message}</p>}
        {errorMsg && <p style={{ ...styles.error, marginTop: 8 }}>{errorMsg}</p>}

        <details style={{ marginTop: 12 }}>
          <summary style={styles.muted}>Aide</summary>
          <ul style={{ marginTop: 6, paddingLeft: 18 }}>
            <li>
              Vérifie que l’adresse affichée est bien la tienne et regarde aussi
              dans les spams.
            </li>
            <li>
              Dans Supabase → <em>Auth → URL Configuration</em>, ajoute ton
              domaine Vercel (<code>{typeof window !== "undefined" ? window.location.origin : "https://…vercel.app"}</code>)
              dans <em>Redirect URLs</em>.
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "grid",
    placeItems: "center",
    minHeight: "40vh",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 480,
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fff",
    padding: 16,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 8,
    marginTop: 10,
  },
  input: {
    padding: "10px 12px",
    border: "1px solid #d5d5d5",
    borderRadius: 8,
    fontSize: 14,
  },
  button: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #111",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  muted: { color: "#666" },
  info: { color: "#0a7", fontSize: 14 },
  error: { color: "#c00", fontSize: 14 },
};

export default AuthGate;
