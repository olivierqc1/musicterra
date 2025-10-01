// src/components/AuthGate.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface AuthGateProps {
  mode?: "inline" | "fullpage";
  language?: "fr" | "en";
}

const AuthGate: React.FC<AuthGateProps> = ({ 
  mode = "inline", 
  language = "fr" 
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { session, signInWithEmail, signOut } = useAuth();

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      alert(t("❌ Email invalide", "❌ Invalid email"));
      return;
    }

    try {
      setLoading(true);
      await signInWithEmail(email);
      setEmail("");
    } catch (err: any) {
      alert(t("❌ Erreur : ", "❌ Error: ") + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  // Si connecté, afficher le bouton de déconnexion
  if (session) {
    return (
      <div style={mode === "fullpage" ? styles.fullpageCard : styles.inlineCard}>
        <p style={{ margin: "0 0 12px" }}>
          ✅ {t("Connecté avec", "Signed in as")} <strong>{session.user.email}</strong>
        </p>
        <button style={styles.logoutButton} onClick={handleLogout}>
          {t("Se déconnecter", "Sign out")}
        </button>
      </div>
    );
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

      <div style={styles.footer}>
        <small style={{ color: "#888" }}>
          {t(
            "Le lien sera valide pendant 1 heure",
            "The link will be valid for 1 hour"
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

// ============================================
// Service pour gérer les notes (ratings.ts)
// ============================================

import { supabase } from "../lib/supabase";
import type { Rating } from "../context/AuthContext";

// Sauvegarder ou mettre à jour une note
export async function saveRating(
  itemType: "genre" | "country",
  itemName: string,
  score: number
): Promise<Rating | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Non connecté");

  const { data, error } = await supabase
    .from("ratings")
    .upsert(
      {
        user_id: user.id,
        item_type: itemType,
        item_name: itemName,
        score,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,item_type,item_name" }
    )
    .select()
    .single();

  if (error) {
    console.error("Erreur sauvegarde note:", error);
    throw error;
  }

  return data as Rating;
}

// Récupérer une note spécifique
export async function getRating(
  itemType: "genre" | "country",
  itemName: string
): Promise<Rating | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("ratings")
    .select("*")
    .eq("user_id", user.id)
    .eq("item_type", itemType)
    .eq("item_name", itemName)
    .maybeSingle();

  if (error) {
    console.error("Erreur récupération note:", error);
    return null;
  }

  return data as Rating | null;
}

// Récupérer toutes les notes de l'utilisateur
export async function getAllRatings(): Promise<Rating[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("ratings")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Erreur récupération notes:", error);
    return [];
  }

  return (data || []) as Rating[];
}

// Supprimer une note
export async function deleteRating(
  itemType: "genre" | "country",
  itemName: string
): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { error } = await supabase
    .from("ratings")
    .delete()
    .eq("user_id", user.id)
    .eq("item_type", itemType)
    .eq("item_name", itemName);

  if (error) {
    console.error("Erreur suppression note:", error);
    return false;
  }

  return true;
}
