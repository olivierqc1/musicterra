// src/components/Profile.tsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getAllRatings } from "../lib/ratings";
import { runFullDiagnostic } from "../lib/setupHelper";
import type { Rating } from "../lib/ratings";

interface ProfileProps {
  language?: "fr" | "en";
}

const Profile: React.FC<ProfileProps> = ({ language = "fr" }) => {
  const { profile, updateProfile, signOut, session, refreshProfile } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [diagnostic, setDiagnostic] = useState<any>(null);
  const [showDiagnostic, setShowDiagnostic] = useState(false);

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

  const handleDiagnostic = async () => {
    setLoading(true);
    try {
      const result = await runFullDiagnostic();
      setDiagnostic(result);
      setShowDiagnostic(true);
      
      // Si profil créé, rafraîchir
      if (result.canProceed && result.recommendation.includes("créé")) {
        await refreshProfile();
      }
    } catch (error) {
      console.error("Erreur diagnostic:", error);
    } finally {
      setLoading(false);
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
      // Si erreur, lancer le diagnostic
      console.error("Erreur mise à jour:", error);
      alert(
        t(
          "❌ Erreur de sauvegarde. Clique sur 'Diagnostic' pour plus d'infos.",
          "❌ Save error. Click 'Diagnostic' for more info."
        )
      );
      await handleDiagnostic();
    } finally {
      setLoading(false);
    }
  };

  if (!profile) {
    return (
      <div style={styles.card}>
        <p>{t("Chargement du profil...", "Loading profile...")}</p>
        <button onClick={handleDiagnostic} style={styles.diagnosticButton}>
          {t("🔍 Lancer le diagnostic", "🔍 Run diagnostic")}
        </button>
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
      {/* Panneau de diagnostic */}
      {showDiagnostic && diagnostic && (
        <div
          style={{
            ...styles.card,
            border: diagnostic.canProceed
              ? "2px solid #10b981"
              : "2px solid #f59e0b",
            background: diagnostic.canProceed ? "#ecfdf5" : "#fffbeb",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <h4 style={{ margin: 0 }}>
              {t("🔍 Résultat du diagnostic", "🔍 Diagnostic result")}
            </h4>
            <button
              onClick={() => setShowDiagnostic(false)}
              style={styles.closeButton}
            >
              ✕
            </button>
          </div>

          <div style={{ marginBottom: 12, fontWeight: 600 }}>
            {diagnostic.recommendation}
          </div>

          <details>
            <summary style={{ cursor: "pointer", fontSize: 13 }}>
              {t("Détails techniques", "Technical details")}
            </summary>
            <div style={{ marginTop: 8, fontSize: 12, fontFamily: "monospace" }}>
              {diagnostic.results.map((r: any, i: number) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <strong>
                    {r.status === "ok" ? "✅" : r.status === "warning" ? "⚠️" : "❌"}{" "}
                    {r.message}
                  </strong>
                  {r.details && (
                    <pre
                      style={{
                        fontSize: 10,
                        overflow: "auto",
                        background: "#f9fafb",
                        padding: 8,
                        borderRadius: 6,
                        marginTop: 4,
                      }}
                    >
                      {JSON.stringify(r.details, null, 2)}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </details>

          {!diagnostic.canProceed && (
            <div style={{ marginTop: 12, fontSize: 13 }}>
              <strong>
                {t("📝 Action requise:", "📝 Action required:")}
              </strong>
              <p style={{ margin: "6px 0 0" }}>
                {t(
                  "Va sur le dashboard Supabase et crée la table 'profiles' avec le script SQL fourni dans la documentation.",
                  "Go to Supabase dashboard and create the 'profiles' table with the SQL script from the documentation."
                )}
              </p>
            </div>
          )}

          <button
            onClick={handleDiagnostic}
            style={styles.diagnosticButton}
            disabled={loading}
          >
            {loading
              ? t("⏳ Analyse...", "⏳ Analyzing...")
              : t("🔄 Re-diagnostiquer", "🔄 Re-diagnose")}
          </button>
        </div>
      )}

      {/* Carte profil */}
      <div style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>
            {t("👤 Mon profil", "👤 My profile")}
          </h3>
          <button
            onClick={handleDiagnostic}
            style={{ ...styles.diagnosticButton, padding: "6px 12px", fontSize: 12 }}
            disabled={loading}
          >
            {t("🔍 Diagnostic", "🔍 Diagnostic")}
          </button>
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          <div>
            <label style={styles.label}>{t("Email", "Email")}</label>
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
                <button onClick={() => setEditMode(true)} style={styles.primaryButton}>
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
            <div style={styles.statLabel}>{t("Notes totales", "Total ratings")}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{genreRatings.length}</div>
            <div style={styles.statLabel}>{t("Genres notés", "Genres rated")}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{countryRatings.length}</div>
            <div style={styles.statLabel}>{t("Pays notés", "Countries rated")}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{avgScore}/10</div>
            <div style={styles.statLabel}>{t("Note moyenne", "Average score")}</div>
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
  diagnosticButton: {
    padding: "10px 16px",
    border: "1px solid #667eea",
    borderRadius: 8,
    background: "#fff",
    color: "#667eea",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: 18,
    cursor: "pointer",
    padding: 4,
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
