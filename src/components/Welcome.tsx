// src/components/Welcome.tsx
// Fenêtre « À propos » : ce que fait l'app, en quatre étapes.
// S'ouvre à la première visite et avec le bouton « ? » de l'en-tête.

import { useEffect } from "react";
import { motion } from "framer-motion";
import { C, R } from "../theme";

interface Props {
  onClose: () => void;
  language: "fr" | "en";
}

export default function Welcome({ onClose, language }: Props) {
  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const steps: [string, string][] = [
    [
      t("Tourne la roue", "Spin the wheel"),
      t(
        "Elle tombe sur un genre, un pays ou une année parmi des milliers, du plus connu au plus obscur.",
        "It lands on a genre, a country or a year out of thousands, from the famous to the obscure."
      ),
    ],
    [
      t("Écoute et lis son histoire", "Listen and read its story"),
      t(
        "Chaque fiche raconte d'où vient la musique et propose des extraits à écouter tout de suite.",
        "Each page tells where the music comes from and lets you play samples right away."
      ),
    ],
    [
      t("Note ce que tu entends", "Rate what you hear"),
      t(
        "Tes notes remplissent ton passeport musical. Ce que tu as déjà noté ne revient plus sur la roue.",
        "Your ratings fill your music passport. Anything you've rated won't come back on the wheel."
      ),
    ],
    [
      t("Laisse-toi guider", "Let it guide you"),
      t(
        "Avec « Propose-moi un truc », la roue penche vers ce qui ressemble à tes coups de cœur. Tes notes servent aussi à te proposer des artistes émergents et des concerts.",
        "With “Suggest something”, the wheel leans toward what's close to your favorites. Your ratings also bring you emerging artists and concerts."
      ),
    ],
  ];

  return (
    <div style={styles.overlay} onClick={onClose}>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        style={styles.sheet}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
      >
        <button onClick={onClose} style={styles.closeBtn} aria-label={t("Fermer", "Close")}>
          ✕
        </button>

        <img src="/favicon.svg" alt="" width={48} height={48} />
        <h2 id="welcome-title" style={styles.title}>
          {t("La musique du monde, une roue à la fois", "World music, one spin at a time")}
        </h2>

        <ol style={styles.list}>
          {steps.map(([title, text], i) => (
            <li key={title} style={styles.step}>
              <span style={styles.num} aria-hidden>
                {i + 1}
              </span>
              <div>
                <div style={styles.stepTitle}>{title}</div>
                <p style={styles.stepText}>{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <button onClick={onClose} style={styles.cta}>
          {t("Tourner la roue", "Spin the wheel")}
        </button>
        <p style={styles.note}>
          {t(
            "Pas besoin de compte pour tourner la roue. Un compte sert à garder tes notes.",
            "No account needed to spin. An account keeps your ratings."
          )}
        </p>
      </motion.div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(21, 27, 59, 0.45)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    zIndex: 9999,
  },
  sheet: {
    position: "relative",
    width: "100%",
    maxWidth: 520,
    maxHeight: "92vh",
    overflowY: "auto",
    background: C.surface,
    borderRadius: `${R.panel + 4}px ${R.panel + 4}px 0 0`,
    padding: "28px 22px max(24px, env(safe-area-inset-bottom))",
  },
  closeBtn: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 34,
    height: 34,
    border: "none",
    borderRadius: R.pill,
    background: C.soft,
    color: C.ink,
    fontSize: 14,
  },
  title: {
    margin: "12px 0 20px",
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-0.035em",
    lineHeight: 1.05,
    color: C.ink,
    maxWidth: "16ch",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gap: 16,
  },
  step: {
    display: "grid",
    gridTemplateColumns: "32px 1fr",
    gap: 12,
    alignItems: "start",
  },
  num: {
    width: 32,
    height: 32,
    borderRadius: R.pill,
    background: C.marigold,
    color: C.ink,
    display: "grid",
    placeItems: "center",
    fontWeight: 800,
    fontSize: 15,
  },
  stepTitle: {
    fontWeight: 700,
    color: C.ink,
    fontSize: 17,
    marginTop: 4,
  },
  stepText: {
    margin: "2px 0 0",
    color: C.muted,
    fontSize: 15,
    lineHeight: 1.5,
  },
  cta: {
    width: "100%",
    marginTop: 24,
    padding: "14px 20px",
    border: "none",
    borderRadius: R.pill,
    background: C.cobalt,
    color: "#fff",
    fontSize: 17,
    fontWeight: 700,
    boxShadow: `0 3px 0 ${C.ink}`,
  },
  note: {
    margin: "12px 0 0",
    textAlign: "center",
    color: C.muted,
    fontSize: 13,
  },
};
