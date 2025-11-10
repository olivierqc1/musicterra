// src/components/Rating.tsx - VERSION AVEC LOCALSTORAGE
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";

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
  const { session } = useAuth();

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  // Clé localStorage unique par user/item
  const getStorageKey = () => {
    const userId = session?.user?.id || 'anonymous';
    return `rating_${userId}_${itemType}_${itemName}`;
  };

  // Charger la note (localStorage puis Supabase)
  useEffect(() => {
    if (session) {
      loadRating();
    }
  }, [session, itemType, itemName]);

  const loadRating = async () => {
    if (!session) return;

    try {
      // 1. Charger depuis localStorage (instantané)
      const localKey = getStorageKey();
      const localValue = localStorage.getItem(localKey);
      
      if (localValue) {
        const rating = parseInt(localValue);
        console.log("📦 Note chargée depuis localStorage:", rating);
        setSavedValue(rating);
        setValue(rating);
      }

      // 2. Essayer Supabase en arrière-plan
      try {
        const { data, error } = await supabase
          .from('ratings')
          .select('rating')
          .eq('user_id', session.user.id)
          .eq('item_type', itemType)
          .eq('item_name', itemName)
          .maybeSingle();

        if (!error && data) {
          console.log("☁️ Note chargée depuis Supabase:", data.rating);
          setSavedValue(data.rating);
          setValue(data.rating);
          // Sync avec localStorage
          localStorage.setItem(localKey, String(data.rating));
        }
      } catch (err) {
        console.log("⚠️ Supabase indisponible, utilisation du cache local");
      }
    } catch (err) {
      console.error("❌ Erreur loadRating:", err);
    }
  };

  const handleRate = async () => {
    console.log("🔵 handleRate appelé");
    
    if (!session) {
      setError(t("⚠️ Connecte-toi", "⚠️ Sign in"));
      return;
    }

    if (value === 0) {
      setError(t("⚠️ Sélectionne une note", "⚠️ Select rating"));
      return;
    }

    setLoading(true);
    setError("");

    try {
      const localKey = getStorageKey();
      
      // 1. Sauvegarder IMMÉDIATEMENT dans localStorage
      localStorage.setItem(localKey, String(value));
      console.log("✅ Sauvegardé dans localStorage:", value);
      setSavedValue(value);
      if (onRated) onRated(value);

      // 2. Essayer Supabase en arrière-plan (non bloquant)
      setTimeout(async () => {
        try {
          console.log("☁️ Tentative sync Supabase...");
          
          const { error: saveError } = await supabase
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

          if (saveError) {
            console.warn("⚠️ Supabase sync échoué (note locale conservée):", saveError.message);
          } else {
            console.log("✅ Sync Supabase réussie !");
          }
        } catch (err: any) {
          console.warn("⚠️ Supabase indisponible (note locale conservée)");
        }
      }, 100);

    } catch (err: any) {
      console.error("❌ Erreur:", err);
      setError("Erreur: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {savedValue !== null && !error && (
        <div style={styles.savedBadge}>
          {t("Note enregistrée : ", "Saved: ")}
          <strong>{savedValue}/{max}</strong>
          <span style={{ fontSize: 10, marginLeft: 4 }}>📦</span>
        </div>
      )}

      {error && (
        <div style={styles.errorBadge}>{error}</div>
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
          ? "⏳ Sauvegarde..."
          : value === savedValue && savedValue !== null
          ? "✅ Noté"
          : "💾 Noter"}
      </button>

      <div style={{ fontSize: 10, color: '#888', marginTop: 4, textAlign: 'center' }}>
        {t("Sauvegarde locale instantanée 📦", "Local save instant 📦")}
      </div>
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
};

export default Rating;
