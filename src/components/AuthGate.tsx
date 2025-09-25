import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AuthGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { session, signInWithMagicLink, signOut } = useAuth();
  const [email, setEmail] = useState("");

  if (!session) {
    return (
      <div style={{ padding: 16, display: "grid", gap: 10, background: "#0f172a", color: "#fff", borderRadius: 14 }}>
        <div style={{ fontWeight: 600 }}>🔒 Connexion par email (lien magique)</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ton.email@exemple.com"
          style={{ padding: 10, borderRadius: 10, border: "1px solid #334155", background: "#111827", color: "#fff" }}
        />
        <button
          onClick={() => email && signInWithMagicLink(email)}
          style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #94a3b8", background: "#fff", color: "#0f172a", fontWeight: 600 }}
        >
          Recevoir le lien
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
        <button onClick={signOut} style={{ padding: "6px 8px", borderRadius: 8, border: "1px solid #ddd" }}>
          Se déconnecter
        </button>
      </div>
      {children}
    </div>
  );
};

export default AuthGate;export default AuthGate;
