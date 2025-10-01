// src/components/Rating.tsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { saveRating, getRating } from "../lib/ratings";

interface RatingProps {
  itemType: "genre" | "country";
  itemName: string;
  max?: number;
  language?: "fr" | "en";
  onRated?: (score: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  itemType,
  itemName,
  max = 10,
  language = "fr",
  onRated,
}) => {
  const [value, setValue] = useState<number>(0);
  const [savedValue, setSavedValue] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const { session } = useAuth();

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  // Charger la note existante
  useEffect(() => {
    if (session) {
      loadExistingRating();
    }
  }, [session, itemType, itemName]);

  const loadExistingRating = async () => {
    try {
      const rating = await getRating(itemType, itemName);
      if (rating) {
        setSavedValue(rating.score);
        setValue(rating.score);
      }
    } catch (error) {
      console.error("Erreur chargement note:", error);
    }
  };

  const handleRate = async () => {
    if (!session) {
      alert(t(
        "⚠️ Connecte-toi pour sauvegarder tes notes",
        "⚠️ Sign in to save your ratings"
      ));
      return;
    }

    if (value === 0) {
      alert(t(
        "⚠️ Sélectionne une note avant de sauvegarder",
        "⚠️ Select a rating before saving"
      ));
      return;
    }

    try {
      setLoading(true);
      await saveRating(itemType, itemName, value);
      setSavedValue(value);
      
      if (onRated) onRated(value);
      
      alert(t(
        `✅ Note sauvegardée : ${value}/${max}`,
        `✅ Rating saved: ${value}/${max}`
      ));
    } catch (error: any) {
      alert(t("❌ Erreur : ", "❌ Error: ") + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {savedValue !== null && (
        <div style={styles.savedBadge}>
          {t("Note enregistrée : ", "Saved rating: ")}
          <strong>{savedValue}/{max}</strong>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <input
          type="range"
          min={0}
          max={max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          style={styles.slider}
          disabled={loading}
        />
        <div style={styles.valueDisplay}>{value}/{max}</div>
      </div>

      <button
        onClick={handleRate}
        disabled={loading || value === 0}
        style={{
          ...styles.button,
          ...(value !== savedValue ? styles.buttonChanged : {}),
        }}
      >
        {loading
          ? t("⏳ Sauvegarde...", "⏳ Saving...")
          : value === savedValue
          ? t("✅ Noté", "✅ Rated")
          : t("💾 Noter", "💾 Rate")}
      </button>

      {!session && (
        <div style={styles.loginHint}>
          <small>
            {t(
              "💡 Connecte-toi pour sauvegarder tes notes",
              "💡 Sign in to save your ratings"
            )}
          </small>
        </div>
      )}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "grid",
    gap: 10,
    padding: 12,
    background: "#f8f9fa",
    borderRadius: 10,
    border: "1px solid #e7e7e7",
  },
  savedBadge: {
    padding: "6px 10px",
    background: "#d1fae5",
    color: "#065f46",
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 500,
  },
  slider: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    outline: "none",
    appearance: "none",
    background: "#ddd",
    cursor: "pointer",
  },
  valueDisplay: {
    minWidth: 50,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 700,
    color: "#667eea",
  },
  button: {
    padding: "10px 14px",
    border: "1px solid #ddd",
    borderRadius: 8,
    background: "#fff",
    color: "#444",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  buttonChanged: {
    background: "#667eea",
    color: "#fff",
    borderColor: "#667eea",
  },
  loginHint: {
    textAlign: "center",
    color: "#666",
  },
};

export default Rating;
