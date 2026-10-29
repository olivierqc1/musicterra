// src/components/Rating.tsx - VERSION AVEC TIMEOUT QUI MARCHE
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import { C, R } from "../theme";
import { notifyRatingsChanged } from "../services/ratedItems";
import { makeT, type Lang } from "../i18n";

interface RatingProps {
  itemType: "genre" | "country" | "year";
  itemName: string;
  max?: number;
  language?: Lang;
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

  const t = makeT(language);

  const getStorageKey = () => {
    const userId = session?.user?.id || 'anonymous';
    return `rating_${userId}_${itemType}_${itemName}`;
  };

  useEffect(() => {
    if (session) {
      loadRating();
    }
  }, [session, itemType, itemName]);

  const loadRating = async () => {
    if (!session) return;

    const localKey = getStorageKey();
    
    try {
      // 1. Charger depuis localStorage (instantané)
      const localValue = localStorage.getItem(localKey);
      if (localValue) {
        const rating = parseInt(localValue);
        console.log("📦 Note locale trouvée:", rating);
        setSavedValue(rating);
        setValue(rating);
        setSyncStatus('local');
      }

      // 2. Essayer Supabase avec VRAI timeout
      console.log("☁️ Chargement depuis Supabase...");
      
      const supabasePromise = supabase
        .from('ratings')
        .select('rating')
        .eq('user_id', session.user.id)
        .eq('item_type', itemType)
        .eq('item_name', itemName)
        .maybeSingle();

      // Timeout de 3 secondes
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 3000)
      );

      const { data, error } = await Promise.race([
        supabasePromise,
        timeoutPromise
      ]) as any;

      if (!error && data) {
        console.log("✅ Note cloud trouvée:", data.rating);
        setSavedValue(data.rating);
        setValue(data.rating);
        setSyncStatus('cloud');
        localStorage.setItem(localKey, String(data.rating));
      }
    } catch (err: any) {
      console.log("⚠️ Supabase indisponible:", err.message);
      // Continuer avec la valeur locale
    }
  };

  const syncToSupabase = async (ratingValue: number): Promise<boolean> => {
    if (!session) return false;

    try {
      console.log("☁️ Sync Supabase...");
      
      // Créer les deux promesses
      const supabasePromise = supabase
        .from('ratings')
        .upsert({
          user_id: session.user.id,
          item_type: itemType,
          item_name: itemName,
          rating: ratingValue,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,item_type,item_name'
        });

      // Timeout de 3 secondes
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Sync timeout')), 3000)
      );

      // Race entre sync et timeout
      const { error } = await Promise.race([
        supabasePromise,
        timeoutPromise
      ]) as any;

      if (!error) {
        console.log("✅ Sync Supabase réussie !");
        setSyncStatus('cloud');
        return true;
      } else {
        console.warn("⚠️ Erreur sync:", error.message);
        return false;
      }
    } catch (err: any) {
      if (err.message === 'Sync timeout') {
        console.warn("⏱️ Timeout sync après 3s");
      } else {
        console.warn("⚠️ Sync échouée:", err.message);
      }
      return false;
    }
  };

  const handleRate = async () => {
    if (!session) {
      setError(t(
        "Connecte-toi (bouton en haut) pour enregistrer ta note.",
        "Sign in (button at the top) to save your rating."
      ));
      setTimeout(() => setError(""), 8000);
      return;
    }

    if (value === 0) {
      setError(t("Choisis une note de 1 à 10.", "Pick a rating from 1 to 10."));
      setTimeout(() => setError(""), 30000);
      return;
    }

    setLoading(true);
    setError("");
    setSyncStatus('syncing');

    try {
      const localKey = getStorageKey();
      
      // 1. Sauvegarder IMMÉDIATEMENT en local
      localStorage.setItem(localKey, String(value));
      notifyRatingsChanged();
      console.log("✅ Sauvegardé localement:", value);
      setSavedValue(value);
      if (onRated) onRated(value);

      // 2. Essayer sync cloud avec timeout
      const synced = await syncToSupabase(value);
      
      if (!synced) {
        setSyncStatus('local');
        setError(t(
          "💾 Sauvegardé localement",
          "💾 Saved locally"
        ));
        setTimeout(() => setError(""), 3000);
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

  const isSaved = value === savedValue && savedValue !== null;

  return (
    <div style={styles.container}>
      <div style={styles.headRow}>
        <span style={styles.heading}>{t("Ta note", "Your rating")}</span>
        {savedValue !== null && !error && (
          <span style={styles.savedText}>
            {t("Enregistrée", "Saved")} · {getStatusText()}
            {getStatusBadge()}
          </span>
        )}
      </div>

      {error && <div style={styles.errorBadge}>{error}</div>}

      <div style={styles.scale} role="radiogroup" aria-label={t("Note sur 10", "Rating out of 10")}>
        {Array.from({ length: max }, (_, k) => k + 1).map((n) => {
          const on = n <= value;
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={value === n}
              onClick={() => setValue(n)}
              disabled={loading}
              style={{
                ...styles.step,
                ...(on ? styles.stepOn : {}),
                ...(value === n ? styles.stepCurrent : {}),
              }}
            >
              {n}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleRate}
        disabled={loading || value === 0 || isSaved}
        style={{
          ...styles.button,
          ...(!isSaved && value > 0 ? styles.buttonChanged : {}),
          ...(loading ? styles.buttonLoading : {}),
        }}
      >
        {loading
          ? t("Enregistrement…", "Saving…")
          : isSaved
          ? t(`✓ Noté ${savedValue}/${max}`, `✓ Rated ${savedValue}/${max}`,
          `✓ Puntuado ${savedValue}/${max}`,
          `✓ Puntuat ${savedValue}/${max}`)
          : value === 0
          ? t("Choisis une note", "Pick a rating")
          : t(`Enregistrer ${value}/${max}`, `Save ${value}/${max}`,
          `Guardar ${value}/${max}`,
          `Desar ${value}/${max}`)}
      </button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "grid",
    gap: 10,
    padding: 14,
    background: C.soft,
    borderRadius: R.control + 4,
  },
  headRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 8,
    flexWrap: "wrap",
  },
  heading: { fontWeight: 700, color: C.ink, fontSize: 15 },
  savedText: { fontSize: 12, color: C.jade, fontWeight: 600 },
  errorBadge: {
    padding: "8px 12px",
    background: C.roseSoft,
    color: "#A3283A",
    borderRadius: R.small,
    fontSize: 13,
    fontWeight: 500,
  },
  scale: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gap: 4,
  },
  step: {
    height: 40,
    padding: 0,
    borderRadius: R.small,
    border: `1px solid ${C.line}`,
    background: C.surface,
    color: C.muted,
    fontSize: 14,
    fontWeight: 600,
  },
  stepOn: {
    background: C.marigoldSoft,
    borderColor: C.marigold,
    color: C.ink,
  },
  stepCurrent: {
    background: C.marigold,
    borderColor: C.ink,
    color: C.ink,
    fontWeight: 800,
  },
  button: {
    padding: "11px 14px",
    border: `1px solid ${C.line}`,
    borderRadius: R.pill,
    background: C.surface,
    color: C.inkSoft,
    fontSize: 15,
    fontWeight: 600,
  },
  buttonChanged: {
    background: C.cobalt,
    color: "#fff",
    borderColor: C.cobalt,
  },
  buttonLoading: {
    opacity: 0.7,
  },
};

export default Rating;
