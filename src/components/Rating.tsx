import React, { useEffect, useState } from "react";
import { getUserRating, upsertRating } from "../lib/ratings";

type Props = {
  itemType: "genre" | "country";
  itemName: string;
  onSaved?: (score: number) => void; // callback optionnel
};

/**
 * Rating sur 0..10
 * - charge la note existante
 * - sauvegarde à la volée
 */
export const Rating: React.FC<Props> = ({ itemType, itemName, onSaved }) => {
  const [score, setScore] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Charger la note existante
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const existing = await getUserRating(itemType, itemName);
        if (mounted) setScore(existing?.score ?? null);
      } catch (e) {
        console.error(e);
      }
    })();
    return () => { mounted = false; };
  }, [itemType, itemName]);

  // Sauvegarde
  const save = async (val: number) => {
    setSaving(true);
    setError(null);
    try {
      await upsertRating(itemType, itemName, val);
      setScore(val);
      onSaved?.(val);
    } catch (e: any) {
      setError("Erreur de sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  // UI simple : 11 boutons (0..10)
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
      <span style={{ minWidth: 80, fontWeight: 600 }}>
        Note /10 :
      </span>
      <div role="radiogroup" aria-label={`Note pour ${itemName}`}>
        {Array.from({ length: 11 }).map((_, i) => {
          const active = score === i;
          return (
            <button
              key={i}
              type="button"
              aria-checked={active}
              role="radio"
              onClick={() => save(i)}
              className={`chip ${active ? "chip--on" : ""}`}
              style={{ marginRight: 6 }}
              disabled={saving}
              title={`${i}/10`}
            >
              {i}
            </button>
          );
        })}
      </div>
      {saving && <span className="badge">Sauvegarde…</span>}
      {error && <span className="badge" style={{ color: "#b00020" }}>{error}</span>}
    </div>
  );
};
