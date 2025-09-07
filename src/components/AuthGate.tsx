// src/components/AuthGate.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const AuthGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { session, signInWithMagicLink, signOut } = useAuth();
  const [email, setEmail] = useState("");

  if (!session) {
    return (
      <div style={{ maxWidth: 420, margin: "50px auto", textAlign: "center", background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
        <h2>Connexion</h2>
        <p>Entre ton e-mail pour recevoir un lien magique.</p>
        <input
          placeholder="toi@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, borderRadius: 10, border: "1px solid #ccc", marginBottom: 8 }}
        />
        <button
          onClick={() => email && signInWithMagicLink(email)}
          style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #111", background: "#111", color: "#fff", cursor: "pointer" }}
        >
          Envoyer le lien magique
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ textAlign: "right", padding: 8 }}>
        <button onClick={signOut} style={{ border: "1px solid #ddd", padding: "6px 10px", borderRadius: 8, background: "#fff" }}>
          Déconnexion
        </button>
      </div>
      {children}
    </div>
  );
};

export default AuthGate;
