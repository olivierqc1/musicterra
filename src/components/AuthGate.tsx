// src/components/AuthGate.tsx
import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

const AuthGate: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { session } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) {
        alert("Erreur de connexion : " + error.message);
      } else {
        alert("Un lien magique a été envoyé à " + email);
      }
    } catch (err: any) {
      alert("Erreur inconnue : " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (session) {
    return (
      <div style={styles.card}>
        <p>✅ Connecté avec {session.user.email}</p>
        <button style={styles.button} onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <h2>Connexion</h2>
      <p>Entre ton email pour recevoir un lien magique :</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ton.email@example.com"
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button} disabled={loading}>
        {loading ? "Envoi..." : "Se connecter"}
      </button>
    </div>
  );
};

// ---------- Styles ----------
const styles: Record<string, React.CSSProperties> = {
  card: {
    maxWidth: 400,
    margin: "40px auto",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 12,
    background: "#fff",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 12,
    border: "1px solid #ccc",
    borderRadius: 6,
    fontSize: 14,
  },
  button: {
    padding: "10px 14px",
    borderRadius: 6,
    border: "none",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
  },
};

export default AuthGate;
