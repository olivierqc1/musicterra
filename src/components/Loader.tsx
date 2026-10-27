// src/components/Loader.tsx
// Indicateur de chargement : un petit égaliseur aux couleurs de la roue,
// avec un texte facultatif à côté.

import { C } from "../theme";

interface Props {
  label?: string;
}

const BARS = [C.cobalt, C.marigold, C.jade, C.cobalt];

export default function Loader({ label }: Props) {
  return (
    <div
      role="status"
      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, padding: 24, color: C.muted }}
    >
      <span aria-hidden style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 22 }}>
        {BARS.map((color, i) => (
          <span
            key={i}
            style={{
              width: 5,
              height: "100%",
              borderRadius: 3,
              background: color,
              transformOrigin: "bottom",
              animation: `mt-eq 0.9s ease-in-out ${i * 0.12}s infinite`,
            }}
          />
        ))}
      </span>
      {label && <span style={{ fontSize: 15 }}>{label}</span>}
    </div>
  );
}
