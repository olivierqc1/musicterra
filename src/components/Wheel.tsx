import React, { useState } from "react";

type Props = { items: string[]; onSelect: (name: string) => void; language: "fr" | "en" };

export const Wheel: React.FC<Props> = ({ items, onSelect, language }) => {
  const [spinning, setSpinning] = useState(false);
  const spin = () => {
    if (!items.length) return;
    setSpinning(true);
    const pick = items[Math.floor(Math.random() * items.length)];
    setTimeout(() => { onSelect(pick); setSpinning(false); }, 600);
  };
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <button onClick={spin} disabled={spinning} style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }}>
        {spinning ? (language === "fr" ? "…ça tourne" : "…spinning") : "🎡 " + (language === "fr" ? "Lancer" : "Spin")}
      </button>
      <div style={{ fontSize: 12, color: "#666" }}>
        {language === "fr" ? `${items.length} possibilités` : `${items.length} options`}
      </div>
    </div>
  );
};
