// src/components/Wheel.tsx
// Roue de découverte. Avec des milliers de genres, dessiner un segment par
// genre donne un nuage illisible : la roue affiche donc un échantillon de
// SEGMENTS éléments tirés au hasard, renouvelé à chaque lancer. Le gagnant est
// tiré au hasard parmi l'échantillon, donc chaque élément du pool complet garde
// la même chance de sortir.

import React, { useState, useRef, useEffect, useCallback } from "react";

type Props = {
  items: string[];
  onSelect: (name: string) => void;
  language: "fr" | "en";
};

const SEGMENTS = 16;
const SIZE = 400; // taille logique du canvas, en pixels CSS

const COLORS = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A",
  "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E2",
  "#F8B739", "#52B788", "#E63946", "#457B9D",
  "#F1C40F", "#9B59B6", "#3498DB", "#E74C3C",
];

// Tire jusqu'à n éléments distincts au hasard (Fisher-Yates partiel)
function sample(items: string[], n: number): string[] {
  const unique = Array.from(new Set(items));
  if (unique.length <= n) return unique;
  const copy = unique.slice();
  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(Math.random() * (copy.length - i));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

// Coupe un libellé trop long pour tenir dans un segment
function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let out = text;
  while (out.length > 1 && ctx.measureText(out + "…").width > maxWidth) {
    out = out.slice(0, -1);
  }
  return out.trimEnd() + "…";
}

export const Wheel: React.FC<Props> = ({ items, onSelect, language }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [visible, setVisible] = useState<string[]>(() => sample(items, SEGMENTS));
  const animationRef = useRef<number | undefined>(undefined);
  const hasSpunRef = useRef(false);

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  // Nouveau pool (genres / pays / années, ou mode personnalisé) : nouvel échantillon
  useEffect(() => {
    setVisible(sample(items, SEGMENTS));
    hasSpunRef.current = false;
  }, [items]);

  const drawWheel = useCallback(
    (currentRotation: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Netteté sur les écrans haute densité (téléphones)
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      if (canvas.width !== SIZE * dpr) {
        canvas.width = SIZE * dpr;
        canvas.height = SIZE * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const center = SIZE / 2;
      const radius = center - 20;
      ctx.clearRect(0, 0, SIZE, SIZE);

      if (visible.length === 0) return;
      const segmentAngle = (2 * Math.PI) / visible.length;
      const fontSize = visible.length > 12 ? 13 : 15;

      visible.forEach((label, index) => {
        const startAngle = index * segmentAngle + currentRotation;
        const endAngle = startAngle + segmentAngle;

        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = COLORS[index % COLORS.length];
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(startAngle + segmentAngle / 2);
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#fff";
        ctx.font = `600 ${fontSize}px system-ui, -apple-system, sans-serif`;
        ctx.shadowColor = "rgba(0,0,0,0.45)";
        ctx.shadowBlur = 3;
        ctx.fillText(fitText(ctx, label, radius - 60), radius - 14, 0);
        ctx.restore();
      });

      // Cercle central
      ctx.beginPath();
      ctx.arc(center, center, 30, 0, 2 * Math.PI);
      ctx.fillStyle = "#667eea";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 16px system-ui";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("🎵", center, center);

      // Pointeur en haut
      ctx.save();
      ctx.translate(center, 22);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-14, -18);
      ctx.lineTo(14, -18);
      ctx.closePath();
      ctx.fillStyle = "#FF6B6B";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    },
    [visible]
  );

  useEffect(() => {
    drawWheel(rotation);
  }, [rotation, drawWheel]);

  // Redessine au redimensionnement et au retour au premier plan : sur mobile,
  // le navigateur peut vider le <canvas> quand l'app passe en arrière-plan.
  useEffect(() => {
    const redraw = () => requestAnimationFrame(() => drawWheel(rotation));
    const handleVisibility = () => {
      if (document.visibilityState === "visible") redraw();
    };
    window.addEventListener("resize", redraw);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pageshow", redraw);
    window.addEventListener("focus", redraw);
    return () => {
      window.removeEventListener("resize", redraw);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pageshow", redraw);
      window.removeEventListener("focus", redraw);
    };
  }, [rotation, drawWheel]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const spin = () => {
    if (!items.length || spinning) return;

    // À partir du 2e lancer, on renouvelle les segments : au fil des lancers,
    // tout le pool défile sur la roue.
    const segments = hasSpunRef.current ? sample(items, SEGMENTS) : visible;
    hasSpunRef.current = true;
    if (segments !== visible) setVisible(segments);

    setSpinning(true);

    const winningIndex = Math.floor(Math.random() * segments.length);
    const segmentAngle = (2 * Math.PI) / segments.length;

    // Le pointeur est en haut (angle -π/2) : on veut y amener le centre du
    // segment gagnant, avec un petit décalage aléatoire pour le réalisme.
    const jitter = (Math.random() - 0.5) * segmentAngle * 0.7;
    const target = -Math.PI / 2 - (winningIndex * segmentAngle + segmentAngle / 2) + jitter;

    const startRotation = rotation;
    const fullTurns = 5 + Math.floor(Math.random() * 3); // nombre entier de tours
    const twoPi = 2 * Math.PI;
    // Distance positive jusqu'à la cible, plus les tours complets
    const delta = (((target - startRotation) % twoPi) + twoPi) % twoPi + fullTurns * twoPi;
    const finalRotation = startRotation + delta;

    const duration = 4000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setRotation(startRotation + delta * easeOut);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Garde l'angle dans [0, 2π) pour éviter qu'il grandisse sans fin
        setRotation(finalRotation % twoPi);
        setSpinning(false);
        onSelect(segments[winningIndex]);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div style={{ display: "grid", gap: 16, justifyItems: "center" }}>
      <div style={styles.wheelContainer}>
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          style={styles.canvas}
          role="img"
          aria-label={visible.join(", ")}
          data-rotation={rotation}
        />
      </div>

      <button
        onClick={spin}
        disabled={spinning}
        style={{
          ...styles.spinButton,
          ...(spinning ? styles.spinButtonDisabled : {}),
        }}
      >
        {spinning ? t("🎡 Ça tourne...", "🎡 Spinning...") : t("🎡 Lancer la roue", "🎡 Spin the wheel")}
      </button>

      <div style={styles.itemCount}>
        {t(
          `${items.length} possibilité${items.length > 1 ? "s" : ""} · ${visible.length} sur la roue`,
          `${items.length} option${items.length > 1 ? "s" : ""} · ${visible.length} on the wheel`
        )}
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  wheelContainer: {
    position: "relative",
    width: "100%",
    maxWidth: 400,
    aspectRatio: "1/1",
    borderRadius: "50%",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    background: "#fff",
    padding: 10,
  },
  canvas: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  spinButton: {
    padding: "12px 24px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    transition: "all 0.3s ease",
  },
  spinButtonDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
    transform: "scale(0.98)",
  },
  itemCount: {
    fontSize: 13,
    color: "#666",
    fontWeight: 500,
  },
};
