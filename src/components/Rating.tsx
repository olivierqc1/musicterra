// src/components/Rating.tsx - VERSION AMÉLIORÉE
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
  const [syncStatus, setSyncStatus] = useState<'local' | 'cloud' | 'syncing'>('local');
  const { session } = useAuth();

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  // Clé localStorage unique
  const getStorageKey = () => {
    const userId = session?.user?.id || 'anonymous';
    return `rating_${userId}_${itemType}_${itemName}`;
  };

  // Charger la note au démarrage
  useEffect(() => {
    if (session) {
      loadRating();
    }
  }, [session, itemType, itemName]);

  const loadRating = async () => {
    if (!session) return;

    const localKey = getStorageKey();
    
    try {
      // 1. Essayer Supabase d'abord (source de vérité)
      console.log("☁️ Chargement depuis Supabase...");
      
      const { data, error } = await Promise.race([
        supabase
          .from('ratings')
          .select('rating')
          .eq('user_id', session.user.id)
          .eq('item_type', itemType)
          .eq('item_name', itemName)
          .maybeSingle(),
        new Promise<any>((_, reject) => 
          setTimeout(() => reject(new Error('timeout')), 5000)
        )
      ]);

      if (!error && data) {
        console.log("✅ Note cloud trouvée:", data.rating);
        setSavedValue(data.rating);
        setValue(data.rating);
        setSyncStatus('cloud');
        // Sync avec localStorage
        localStorage.setItem(localKey, String(data.rating));
        return;
      }
    } catch (err) {
      console.log("⚠️ Supabase timeout, utilisation cache local");
    }

    // 2. Fallback sur localStorage
    const localValue = localStorage.getItem(localKey);
    if (localValue) {
      const rating = parseInt(localValue);
      console.log("📦 Note locale trouvée:", rating);
      setSavedValue(rating);
      setValue(rating);
      setSyncStatus('local');
    }
  };

  const syncToSupabase = async (ratingValue: number, retries = 3): Promise<boolean> => {
    if (!session) return false;

    for (let i = 0; i < retries; i++) {
      try {
        console.log(`☁️ Tentative sync ${i + 1}/${retries}...`);
        
        const { error } = await Promise.race([
          supabase
            .from('ratings')
            .upsert({
              user_id: session.user.id,
              item_type: itemType,
              item_name: itemName,
              rating: ratingValue,
              updated_at: new Date().toISOString(),
            }, {
              onConflict: 'user_id,item_type,item_name'
            }),
          new Promise<any>((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), 8000)
          )
        ]);

        if (!error) {
          console.log("✅ Sync Supabase réussie !");
          setSyncStatus('cloud');
          return true;
        }

        console.warn(`⚠️ Tentative ${i + 1} échouée:`, error);
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Backoff
      } catch (err) {
        console.warn(`⚠️ Tentative ${i + 1} timeout`);
        if (i < retries - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
      }
    }

    console.error("❌ Toutes les tentatives de sync ont échoué");
    return false;
  };

  const handleRate = async () => {
    if (!session) {
      setError(t("⚠️ Connecte-toi", "⚠️ Sign in"));
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (value === 0) {
      setError(t("⚠️ Sélectionne une note", "⚠️ Select rating"));
      setTimeout(() => setError(""), 3000);
      return;
    }

    setLoading(true);
    setError("");
    setSyncStatus('syncing');

    try {
      const localKey = getStorageKey();
      
      // 1. Sauvegarder IMMÉDIATEMENT en local
      localStorage.setItem(localKey, String(value));
      console.log("✅ Sauvegardé localement:", value);
      setSavedValue(value);
      if (onRated) onRated(value);

      // 2. Essayer sync cloud avec retries
      const synced = await syncToSupabase(value);
      
      if (!synced) {
        setSyncStatus('local');
        setError(t(
          "⚠️ Sauvegardé localement (cloud indisponible)",
          "⚠️ Saved locally (cloud unavailable)"
        ));
        setTimeout(() => setError(""), 5000);
      }

    } catch (err: any) {
      console.error("❌ Erreur:", err);
      setError(t("Erreur: ", "Error: ") + err.message);
      setSyncStatus('local');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = () => {
    if (syncStatus === 'cloud') {
      return <span style={{ fontSize: 12, marginLeft: 6 }}>☁️</span>;
    } else if (syncStatus === 'local') {
      return <span style={{ fontSize: 12, marginLeft: 6 }}>📦</span>;
    } else if (syncStatus === 'syncing') {
      return <span style={{ fontSize: 12, marginLeft: 6 }}>⏳</span>;
    }
    return null;
  };

  const getStatusText = () => {
    if (syncStatus === 'cloud') {
      return t("Synchronisée", "Synced");
    } else if (syncStatus === 'local') {
      return t("Locale uniquement", "Local only");
    } else if (syncStatus === 'syncing') {
      return t("Synchronisation...", "Syncing...");
    }
    return "";
  };

  return (
    <div style={styles.container}>
      {savedValue !== null && !error && (
        <div style={{
          ...styles.savedBadge,
          ...(syncStatus === 'local' ? { background: '#fef3c7', color: '#92400e' } : {})
        }}>
          {t("Note enregistrée : ", "Saved: ")}
          <strong>{savedValue}/{max}</strong>
          {getStatusBadge()}
          <div style={{ fontSize: 10, marginTop: 2 }}>
            {getStatusText()}
          </div>
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
          ? t("⏳ Sauvegarde...", "⏳ Saving...")
          : value === savedValue && savedValue !== null
          ? t("✅ Noté", "✅ Rated")
          : t("💾 Noter", "💾 Rate")}
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
    padding: "8px 12px",
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
