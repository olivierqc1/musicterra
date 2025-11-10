// src/components/Rating.tsx
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
        setSavedValue(data.rating);
        setValue(data.rating);
      }
    } catch (err) {
      console.error("❌ Erreur loadExistingRating:", err);
    }
  };

  const handleRate = async () => {
    if (!session) {
      setError(t(
        "⚠️ Connecte-toi pour sauvegarder",
        "⚠️ Sign in to save"
      ));
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (value === 0) {
      setError(t(
        "⚠️ Sélectionne une note d'abord",
        "⚠️ Select a rating first"
      ));
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log("📝 Sauvegarde note:", { itemType, itemName, value });

      // Timeout de 8 secondes
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT')), 8000)
      );

      const savePromise = supabase
        .from('ratings')
        .upsert({
          user_id: session.user.id,
          item_type: itemType,
          item_name: itemName,
          rating: value,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,item_type,item_name'
        });

      const { error: saveError } = await Promise.race([
        savePromise,
        timeoutPromise
      ]) as any;

      if (saveError) {
        console.error("❌ Erreur Supabase:", saveError);
        
        // Messages d'erreur selon le code
        if (saveError.code === '42P01') {
          throw new Error(t(
            "Table 'ratings' manquante. Exécute setup_database.sql dans Supabase",
            "Table 'ratings' missing. Run setup_database.sql in Supabase"
          ));
        } else if (saveError.code === '42501') {
          throw new Error(t(
            "Permission refusée. Active RLS dans Supabase Dashboard",
            "Permission denied. Enable RLS in Supabase Dashboard"
          ));
        } else if (saveError.message?.includes('unique')) {
          throw new Error(t(
            "Conflit de clé unique. Réessaie.",
            "Unique key conflict. Try again."
          ));
        } else {
          throw new Error(saveError.message || "Erreur inconnue");
        }
      }

      // Succès !
      setSavedValue(value);
      if (onRated) onRated(value);
      
      console.log("✅ Note sauvegardée !");
      
    } catch (err: any) {
      console.error("❌ Catch error:", err);
      
      let errorMsg = "";
      
      if (err.message === 'TIMEOUT') {
        errorMsg = t(
          "❌ Timeout (8s). Vérifie ta connexion internet.",
          "❌ Timeout (8s). Check your internet connection."
        );
      } else if (err.message.includes('fetch')) {
        errorMsg = t(
          "❌ Erreur réseau. Vérifie ta connexion.",
          "❌ Network error. Check your connection."
        );
      } else {
        errorMsg = t("❌ Erreur : ", "❌ Error: ") + err.message;
      }
      
      setError(errorMsg);
      setTimeout(() => setError(""), 8000);
      
    } finally {
      setLoading(false);
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
              "💡 Connecte-toi pour sauvegarder tes notes",
              "💡 Sign in to save your ratings"
            )}
          </small>
        </div>
      )}

      {/* DEBUG INFO (retire ça en prod) */}
      {import.meta.env.DEV && (
        <div style={{ fontSize: 10, color: '#999', marginTop: 4 }}>
          Debug: user={session?.user.id.substring(0, 8)}, 
          type={itemType}, 
          item={itemName}
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
