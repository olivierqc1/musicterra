// src/components/Profile.tsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getAllRatings } from "../lib/ratings";
import type { Rating } from "../context/AuthContext";

interface ProfileProps {
  language?: "fr" | "en";
}

const Profile: React.FC<ProfileProps> = ({ language = "fr" }) => {
  const { profile, updateProfile, signOut } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.display_name || "");
      loadRatings();
    }
  }, [profile]);

  const loadRatings = async () => {
    try {
      const data = await getAllRatings();
      setRatings(data);
    } catch (error) {
      console.error("Erreur chargement notes:", error);
    }
  };

  const handleSaveProfile = async () => {
    if (!profile) return;

    try {
      setLoading(true);
      await updateProfile({
        display_name: displayName || undefined,
        preferred_language: language,
      });
      setEditMode(false);
      alert(t("✅ Profil mis à jour", "✅ Profile updated"));
    } catch (error: any) {
      alert(t("❌ Erreur : ", "❌ Error: ") + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!profile) {
    return (
      <div style={styles.card}>
        <p>{t("Chargement du profil...", "Loading profile...")}</p>
      </div>
    );
  }

  // Statistiques
  const genreRatings = ratings.filter((r) => r.item_type === "genre");
  const countryRatings = ratings.filter((r) => r.item_type === "country");
  const avgScore =
    ratings.length > 0
      ? Math.round(
          (ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length) * 10
        ) / 10
      : 0;

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {/* Carte profil */}
      <div style={styles.card}>
        <h3 style={{ marginTop: 0 }}>
          {t("👤 Mon profil", "👤 My profile")}
        </h3>

        <div style={{ display: "grid", gap: 12 }}>
          <div>
            <label style={styles.label}>
              {t("Email", "Email")}
            </label>
            <input
              type="text"
              value={profile.email}
              disabled
              style={{ ...styles.input, background: "#f5f5f5" }}
            />
          </div>

          <div>
            <label style={styles.label}>
              {t("Nom d'affichage", "Display name")}
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder={t("(optionnel)", "(optional)")}
              disabled={!editMode}
              style={styles.input}
            />
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            {!editMode ? (
              <>
                <button
                  onClick={() => setEditMode(true)}
                  style={styles.primaryButton}
                >
                  {t("✏️ Modifier", "✏️ Edit")}
                </button>
                <button onClick={signOut} style={styles.dangerButton}>
                  {t("🚪 Déconnexion", "🚪 Sign out")}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSaveProfile}
                  disabled={loading}
                  style={styles.primaryButton}
                >
                  {loading
                    ? t("⏳ Sauvegarde...", "⏳ Saving...")
                    : t("💾 Sauvegarder", "💾 Save")}
                </button>
                <button
                  onClick={() => {
                    setEditMode(false);
                    setDisplayName(profile.display_name || "");
                  }}
                  style={styles.secondaryButton}
                >
                  {t("❌ Annuler", "❌ Cancel")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div style={styles.card}>
        <h3 style={{ marginTop: 0 }}>
          {t("📊 Mes statistiques", "📊 My statistics")}
        </h3>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{ratings.length}</div>
            <div style={styles.statLabel}>
              {t("Notes totales", "Total ratings")}
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{genreRatings.length}</div>
            <div style={styles.statLabel}>
              {t("Genres notés", "Genres rated")}
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{countryRatings.length}</div>
            <div style={styles.statLabel}>
              {t("Pays notés", "Countries rated")}
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{avgScore}/10</div>
            <div style={styles.statLabel}>
              {t("Note moyenne", "Average score")}
            </div>
          </div>
        </div>
      </div>

      {/* Liste des notes */}
      <div style={styles.card}>
        <h3 style={{ marginTop: 0 }}>
          {t("⭐ Mes notes récentes", "⭐ My recent ratings")}
        </h3>

        {ratings.length === 0 ? (
          <p style={{ color: "#888" }}>
            {t(
              "Aucune note pour le moment. Explore des genres et pays dans l'onglet Découvrir !",
              "No ratings yet. Explore genres and countries in the Discover tab!"
            )}
          </p>
        ) : (
          <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
            {ratings.slice(0, 10).map((rating) => (
              <div key={rating.id} style={styles.ratingRow}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{rating.item_name}</div>
                  <div style={{ fontSize: 12, color: "#666" }}>
                    {t(
                      rating.item_type === "genre" ? "Genre" : "Pays",
                      rating.item_type === "genre" ? "Genre" : "Country"
                    )}
                  </div>
                </div>
                <div style={styles.scoreBox}>{rating.score}/10</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const styles: Record<string, React.CSSProperties> = {
  card: {
    border: "1px solid #e7e7e7",
    borderRadius: 14,
    padding: 20,
    background: "#fff",
  },
  label: {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 6,
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: 8,
    fontSize: 15,
    outline: "none",
  },
  primaryButton: {
    padding: "10px 16px",
    border: "none",
    borderRadius: 8,
    background: "#667eea",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "10px 16px",
    border: "1px solid #ddd",
    borderRadius: 8,
    background: "#fff",
    color: "#444",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  dangerButton: {
    padding: "10px 16px",
    border: "1px solid #dc2626",
    borderRadius: 8,
    background: "#fef2f2",
    color: "#dc2626",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: 12,
    marginTop: 12,
  },
  statCard: {
    padding: 16,
    background: "#f8f9fa",
    borderRadius: 10,
    textAlign: "center",
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 700,
    color: "#667eea",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: "#666",
  },
  ratingRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    background: "#f8f9fa",
    borderRadius: 8,
  },
  scoreBox: {
    padding: "6px 12px",
    background: "#667eea",
    color: "#fff",
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 600,
  },
};

export default Profile;
