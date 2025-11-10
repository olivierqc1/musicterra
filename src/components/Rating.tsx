// src/components/Rating.tsx - VERSION ULTRA SIMPLE
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

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
  const [error, setError] = useState<string>("");
  const { session, supabase } = useAuth();

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  // Charger la note existante
  useEffect(() => {
    if (session) {
      loadExistingRating();
    }
  }, [session, itemType, itemName]);

  const loadExistingRating = async () => {
    if (!session) return;

    try {
      console.log("📖 Chargement note existante...");
      
      const { data, error } = await supabase
        .from('ratings')
        .select('rating')
        .eq('user_id', session.user.id)
        .eq('item_type', itemType)
        .eq('item_name', itemName)
        .maybeSingle();

      if (error) {
        console.error("❌ Erreur chargement:", error);
        return;
      }

      if (data) {
        console.log("✅ Note trouvée:", data.rating);
        setSavedValue(data.rating);
        setValue(data.rating);
      } else {
        console.log("ℹ️ Pas de note existante");
      }
    } catch (err) {
      console.error("❌ Catch loadExistingRating:", err);
    }
  };

  const handleRate = async () => {
    if (!session) {
      setError(t("⚠️ Connecte-toi d'abord", "⚠️ Sign in first"));
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (value === 0) {
      setError(t("⚠️ Sélectionne une note", "⚠️ Select a rating"));
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log("💾 DÉBUT SAUVEGARDE");
      console.log("User:", session.user.id);
      console.log("Type:", itemType);
      console.log("Item:", itemName);
      console.log("Note:", value);

      const { data, error: saveError } = await supabase
        .from('ratings')
        .upsert({
          user_id: session.user.id,
          item_type: itemType,
          item_name: itemName,
          rating: value,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,item_type,item_name'
        })
        .select();

      console.log("📥 RÉSULTAT:", { data, error: saveError });

      if (saveError) {
        console.error("❌ ERREUR SUPABASE:", saveError);
        throw saveError;
      }

      // Succès !
      console.log("✅ SAUVEGARDÉ !");
      setSavedValue(value);
      if (onRated) onRated(value);
      
    } catch (err: any) {
      console.error("❌ CATCH ERROR:", err);
      
      let errorMsg = t("❌ Erreur : ", "❌ Error: ") + (err.message || "Inconnue");
      setError(errorMsg);
      setTimeout(() => setError(""), 8000);
      
    } finally {
      setLoading(false);
      console.log("🏁 FIN (loading=false)");
    }
  };

  return (
    <div style={styles.container}>
      {savedValue !== null && !error && (
        <div style={styles.savedBadge}>
          {t("Note enregistrée : ", "Saved rating: ")}
          <strong>{savedValue}/{max}</strong>
        </div>
      )}

      {error && (
        <div style={styles.errorBadge}>
          {error}
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
          ...(loading ? styles.buttonLoading : {}),
        }}
      >
        {loading
          ? t("⏳ Sauvegarde...", "⏳ Saving...")
          : value === savedValue && savedValue !== null
          ? t("✅ Noté", "✅ Rated")
          : t("💾 Noter", "💾 Rate")}
      </button>

      {!session && (
        <div style={styles.loginHint}>
          <small>
            {t(
              "💡 Connecte-toi pour sauvegarder",
              "💡 Sign in to save"
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
  errorBadge: {
    padding: "8px 12px",
    background: "#fee2e2",
    color: "#991b1b",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    wordBreak: 'break-word',
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
  buttonLoading: {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
  loginHint: {
    textAlign: "center",
    color: "#666",
  },
};

export default Rating;
