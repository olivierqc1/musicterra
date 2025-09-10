import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const box: React.CSSProperties = {
  maxWidth: 420,
  margin: "48px auto",
  padding: 24,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 16,
  backdropFilter: "blur(6px)",
};

const label: React.CSSProperties = { display: "block", marginBottom: 8, fontWeight: 600 };
const input: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(0,0,0,0.25)",
  color: "#fff",
  outline: "none",
};
const btn: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "none",
  background: "#22c55e",
  color: "#0b1419",
  fontWeight: 700,
  cursor: "pointer",
  marginTop: 12,
};

export const AuthGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { session, signInWithMagicLink } = useAuth();
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // Si session présente, on montre directement l'app
  if (session) return <>{children}</>;

  // Form submit
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setMsg(null);

    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) {
      setErr("Entre une adresse courriel valide.");
      return;
    }

    try {
      setSending(true);
      await signInWithMagicLink(email.trim());
      setMsg("Lien magique envoyé ! Consulte ta boîte courriel 📬");
    } catch (e: any) {
      setErr("Échec de l’envoi. Réessaie.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", padding: "40px 16px" }}>
      <div style={box}>
        <h1 style={{ marginTop: 0, marginBottom: 6 }}>🎵 Musicterra</h1>
        <p style={{ marginTop: 0, color: "rgba(255,255,255,0.8)" }}>
          Connecte-toi pour sauvegarder ton profil, tes notes et tes groupes.
        </p>

        <form onSubmit={onSubmit}>
          <label style={label} htmlFor="email">Adresse courriel</label>
          <input
            id="email"
            type="email"
            placeholder="toi@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
            disabled={sending}
            autoComplete="email"
            required
          />
          <button type="submit" style={btn} disabled={sending}>
            {sending ? "Envoi du lien…" : "Recevoir un lien magique"}
          </button>
        </form>

        {msg && <p style={{ marginTop: 12, color: "#86efac" }}>{msg}</p>}
        {err && <p style={{ marginTop: 12, color: "#fca5a5" }}>{err}</p>}

        <div style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
          Conseil : ouvre le lien depuis le <strong>même navigateur</strong>.
        </div>
      </div>
    </div>
  );
};

export default AuthGate;

