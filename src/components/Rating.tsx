import React, { useState } from "react";

type Props = { max: number; onRate: (score: number) => void; language: "fr" | "en" };

export const Rating: React.FC<Props> = ({ max, onRate, language }) => {
  const [v, setV] = useState<number>(0);
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <input type="range" min={0} max={max} value={v} onChange={(e) => setV(Number(e.target.value))} />
      <button onClick={() => onRate(v)} style={{ padding: "6px 10px", border: "1px solid #ccc", borderRadius: 8 }}>
        {language === "fr" ? `Noter (${v}/${max})` : `Rate (${v}/${max})`}
      </button>
    </div>
  );
};
