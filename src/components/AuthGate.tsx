import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

/**
 * Affiche un formulaire d'email (magic link) si l'utilisateur n'est pas connecté.
 * Quand la session existe, rend simplement {children}.
 */
const AuthGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { session, signInWithMagicLink, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  if (session) {
    // Déjà connecté → on montre l’app (et un petit bouton de déconnexion)
    return (
      <div>
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 12px",
            border: "1px solid #eee",
            borderRadius: 12,
            marginBottom: 12,
          }}
        >
          <span>
            Connecté comme{" "}
            <strong>{session.user.email ?? session.user.id}</strong>
          </span>
          <button
            onClick={signOut}
            style={{
              padding: "6px 10px",
              borderRadius: 10,
              border: "1px solid #bbb",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Se déconnecter
          </button>
        </div>
        {children}
      </div>
    );
  }

  // Pas connecté → formulaire d’email
  return (
    <div
      style={{
        maxWidth: 440,
        margin: "40px auto",
        padding: 16,
        border: "1px solid #eee",
        borderRadius: 12,
        background: "#fff",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Connexion</h2>
      <p style={{ color: "#444" }}>
        Entre ton adresse courriel. On t’enverra un{" "}
        <strong>lien magique</strong> pour te connecter.
      </p>

      <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ton@email.com"
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 10,
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={async () => {
          setStatus("sending");
          setMessage("");
          try {
            await signInWithMagicLink(email);
            setStatus("sent");
            setMessage(
              "Lien envoyé ! Va cliquer le lien de connexion dans ta boîte mail."
            );
          } catch (e: any) {
            setStatus("error");
            setMessage(e?.message ?? "Erreur inattendue.");
          }
        }}
        disabled={!email || status === "sending"}
        style={{
          marginTop: 12,
          width: "100%",
          padding: "10px 12px",
          borderRadius: 10,
          border: "1px solid #111",
          background: "#111",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer le lien magique"}
      </button>

      {message && (
        <p
          style={{
            marginTop: 10,
            color: status === "error" ? "#b00020" : "#0a7",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default AuthGate;
