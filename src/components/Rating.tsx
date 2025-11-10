// src/components/Rating.tsx - VERSION ULTRA BASIQUE
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
  const { session } = useAuth();  // Seulement session, pas supabase

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
      }
    } catch (err) {
      console.error("❌ Catch loadExistingRating:", err);
    }
  };

  const handleRate = async () => {
    console.log("🔵 handleRate appelé");
    
    if (!session) {
      console.log("❌ Pas de session");
      setError(t("⚠️ Connecte-toi", "⚠️ Sign in"));
      return;
    }

    if (value === 0) {
      console.log("❌ Value = 0");
      setError(t("⚠️ Sélectionne une note", "⚠️ Select rating"));
      return;
    }

    setLoading(true);
    setError("");
    
    console.log("1️⃣ Début sauvegarde");
    console.log("2️⃣ User:", session.user.id);
    console.log("3️⃣ Supabase importé existe?", !!supabase);
    console.log("4️⃣ Supabase.from existe?", !!(supabase && supabase.from));
    console.log("5️⃣ Type de supabase:", typeof supabase);
    
    try {
      console.log("6️⃣ Avant INSERT");
      
      // Version ultra-simple sans .select()
      const { error: saveError } = await supabase
        .from('ratings')
        .insert({
          user_id: session.user.id,
          item_type: itemType,
          item_name: itemName,
          rating: value,
        });

      console.log("7️⃣ Après INSERT");
      console.log("8️⃣ Error?", saveError);

      if (saveError) {
        console.error("❌ Erreur:", saveError);
        setError("Erreur: " + saveError.message);
      } else {
        console.log("✅ SUCCÈS !");
        setSavedValue(value);
        if (onRated) onRated(value);
      }
      
    } catch (err: any) {
      console.error("❌ CATCH:", err);
      console.error("❌ Message:", err.message);
      console.error("❌ Stack:", err.stack);
      setError("Erreur: " + err.message);
    } finally {
      console.log("9️⃣ Finally - loading=false");
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {savedValue !== null && !error && (
        <div style={styles.savedBadge}>
          {t("Note enregistrée : ", "Saved: ")}
          <strong>{savedValue}/{max}</strong>
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
