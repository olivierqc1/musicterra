// src/components/Toaster.tsx
// Affiche les messages envoyés par toast() (src/lib/toast.ts).
// Chaque message reste 3,5 s (5 s pour une erreur) ; un toucher le ferme.

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TOAST_EVENT, type ToastMessage } from "../lib/toast";
import { C, R } from "../theme";

const COLORS: Record<ToastMessage["kind"], { bg: string; fg: string; mark: string }> = {
  info: { bg: C.ink, fg: "#fff", mark: C.marigold },
  success: { bg: C.ink, fg: "#fff", mark: "#4FD1A5" },
  error: { bg: C.rose, fg: "#fff", mark: "#fff" },
};

export default function Toaster() {
  const [items, setItems] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const onToast = (e: Event) => {
      const msg = (e as CustomEvent<ToastMessage>).detail;
      setItems((list) => [...list.slice(-2), msg]);
      window.setTimeout(
        () => setItems((list) => list.filter((m) => m.id !== msg.id)),
        msg.kind === "error" ? 5000 : 3500
      );
    };
    window.addEventListener(TOAST_EVENT, onToast);
    return () => window.removeEventListener(TOAST_EVENT, onToast);
  }, []);

  const dismiss = (id: number) => setItems((list) => list.filter((m) => m.id !== id));

  return (
    <div
      aria-live="polite"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: "max(16px, env(safe-area-inset-bottom))",
        zIndex: 2000,
        display: "grid",
        gap: 8,
        justifyItems: "center",
        pointerEvents: "none",
      }}
    >
      <AnimatePresence initial={false}>
        {items.map((m) => {
          const c = COLORS[m.kind];
          return (
            <motion.button
              key={m.id}
              type="button"
              onClick={() => dismiss(m.id)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              role={m.kind === "error" ? "alert" : "status"}
              style={{
                pointerEvents: "auto",
                display: "flex",
                alignItems: "center",
                gap: 10,
                maxWidth: 440,
                padding: "12px 16px",
                border: "none",
                borderRadius: R.control + 2,
                background: c.bg,
                color: c.fg,
                fontSize: 15,
                fontWeight: 500,
                textAlign: "left",
                boxShadow: "0 10px 30px -10px rgba(21, 27, 59, 0.5)",
              }}
            >
              <span
                aria-hidden
                style={{ width: 8, height: 8, borderRadius: 99, background: c.mark, flexShrink: 0 }}
              />
              {m.text}
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
