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
