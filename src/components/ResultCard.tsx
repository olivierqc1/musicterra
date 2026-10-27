// src/components/ResultCard.tsx
// Carte de résultat après un spin : image, description, liens d'écoute,
// notation et affinités. Extrait de App.tsx pour garder les fichiers légers.

import { useEffect, useMemo, useRef, useState } from "react";
import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { C, R } from "../theme";
import { type Item, isGenre, isCountry, isYear } from "../itemTypes";
import { matrix } from "../data/matrix";
import { genres } from "../data/genresLite";
import { styles } from "../appStyles";
import { getListenLinks } from "../listenLinks";
import Rating from "./Rating";
import { useAuth } from "../context/AuthContext";
import { trackAction } from "../services/userBehavior";
import { useItemDescription } from "../hooks/useItemDescription";
import ListenPreview from "./ListenPreview";
import LocalScenes from "./LocalScenes";
import { shareUrl } from "../lib/share";

interface Props {
  item: Item;
  pool: "genres" | "countries" | "years";
  language: "fr" | "en";
  /** Fiche arrivée par un lancer de roue : animation et défilement. */
  justSpun?: boolean;
  /** Ouvre un genre proche (puces « Si tu aimes, essaie aussi »). */
  onOpenGenre?: (name: string) => void;
}

const PLATFORM_COLORS: Record<string, string> = {
  Spotify: "#1db954",
  YouTube: "#c4302b",
  "YT Music": "#282828",
  Bandcamp: "#1da0c3",
  Deezer: "#7c3aed",
};

export default function ResultCard({ item, pool, language, justSpun = false, onOpenGenre }: Props) {
  const { session } = useAuth();
  const t = (fr: string, en: string) => (language === "fr" ? fr : en);
  const description = useItemDescription(item, language);
  const [shareStatus, setShareStatus] = useState<"idle" | "copied" | "error">("idle");
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const longText = (description.text || "").length > 420;
  const cardRef = useRef<HTMLElement>(null);

  // Nouveau résultat : on le fait défiler à l'écran (sur téléphone, il
  // apparaît sous la roue, hors de vue).
  useEffect(() => {
    if (!justSpun) return;
    cardRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [item, reduceMotion, justSpun]);

  const handleShare = async () => {
    const url = shareUrl(item, pool);
    const label = isYear(item) ? String(item.year) : item.name;
    const text = t(
      `J'ai découvert ${label} sur MusicTerra 🎡`,
      `I just discovered ${label} on MusicTerra 🎡`
    );
    if (session) trackAction("share", pool, item.name);
    try {
      if (navigator.share) {
        await navigator.share({ title: `${label} · MusicTerra`, text, url });
        return;
      }
      await navigator.clipboard.writeText(`${text} ${url}`);
      setShareStatus("copied");
    } catch (err) {
      // L'utilisateur a fermé la feuille de partage : rien à signaler
      if (err instanceof DOMException && err.name === "AbortError") return;
      setShareStatus("error");
    }
    window.setTimeout(() => setShareStatus("idle"), 2500);
  };

  const similarityBoost = useMemo(() => {
    const row = matrix[item.name] || {};
    return Object.entries(row).sort((a, b) => (b[1] as number) - (a[1] as number));
  }, [item]);

  const handleListenClick = (platform: string) => {
    if (session) {
      trackAction(`click_${platform.toLowerCase().replace(/\s/g, "_")}`, pool, item.name);
    }
  };

  const kicker = isGenre(item)
    ? t("🎸 Genre", "🎸 Genre")
    : isCountry(item)
    ? t("🌍 Pays", "🌍 Country")
    : t("📅 Année", "📅 Year");
  const title = isYear(item) ? String(item.year) : capitalize(item.name);

  return (
    <motion.article
      ref={cardRef}
      style={{ ...styles.card, padding: "20px 18px", scrollMarginTop: 12 }}
      initial={reduceMotion || !justSpun ? false : { opacity: 0, scale: 1.08, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      aria-live="polite"
    >
      <div style={styles.titleRow}>
        <span style={styles.resultKicker}>{kicker}</span>
        <button onClick={handleShare} style={styles.shareBtn}>
          {shareStatus === "copied"
            ? t("Lien copié", "Link copied")
            : shareStatus === "error"
            ? t("Impossible de partager", "Couldn't share")
            : t("Partager", "Share")}
        </button>
      </div>

      <h2 style={styles.resultTitle}>{title}</h2>

      <div style={styles.resultGrid}>
        {item.image && (
          <div style={styles.resultMedia}>
            <img src={item.image} alt="" style={styles.resultImage} />
          </div>
        )}

        <div style={styles.resultBody}>
          {description.loading ? (
            <div style={{ display: "grid", gap: 8, marginBottom: 16 }} aria-label={t("Chargement", "Loading")}>
              <div className="mt-skeleton" style={{ height: 14 }} />
              <div className="mt-skeleton" style={{ height: 14 }} />
              <div className="mt-skeleton" style={{ height: 14, width: "70%" }} />
            </div>
          ) : (
            <>
              <p
                style={{
                  ...styles.resultText,
                  ...(longText && !expanded ? clamped : {}),
                }}
              >
                {description.text}
              </p>
              {longText && (
                <button style={readMore} onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
                  {expanded ? t("Réduire", "Show less") : t("Lire la suite", "Read more")}
                </button>
              )}
            </>
          )}

          {isGenre(item) && item.subgenres?.length ? (
            <p style={styles.lightText}>
              <span style={styles.metaLabel}>{t("Sous-genres", "Subgenres")} :</span>{" "}
              {item.subgenres.join(", ")}
            </p>
          ) : null}

          {item.artists?.length ? (
            <p style={styles.lightText}>
              <span style={styles.metaLabel}>{t("Artistes", "Artists")} :</span>{" "}
              {item.artists.join(", ")}
            </p>
          ) : null}

          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
            {getListenLinks(item.name, item.spotify).map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleListenClick(l.label)}
                style={listenLink}
              >
                <span
                  aria-hidden
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 99,
                    background: PLATFORM_COLORS[l.label] || C.muted,
                  }}
                />
                {l.label}
              </a>
            ))}
          </div>

          <ListenPreview
            key={item.name}
            name={isYear(item) ? String(item.year) : item.name}
            artists={item.artists?.filter((a) => a !== "Anonymous")}
            spotify={item.spotify}
            language={language}
          />

          {isCountry(item) && (
            <LocalScenes key={item.name} country={item} language={language} />
          )}

          <div style={{ marginTop: 18 }}>
            <Rating
              itemType={pool === "genres" ? "genre" : pool === "countries" ? "country" : "year"}
              itemName={item.name}
              max={10}
              language={language}
            />
          </div>

          {similarityBoost.length > 0 && (
            <div style={{ marginTop: 18 }}>
              <span style={styles.metaLabel}>{t("Si tu aimes, essaie aussi", "If you like it, try")}</span>
              <div style={styles.badgeContainer}>
                {similarityBoost.slice(0, 8).map(([label, score]) => {
                  const known = genreNames.has(label.toLowerCase());
                  const inner = (
                    <>
                      {label} <span style={{ color: C.faint }}>{Math.round(score * 100)} %</span>
                    </>
                  );
                  return known && onOpenGenre ? (
                    <button
                      key={label}
                      type="button"
                      onClick={() => onOpenGenre(label)}
                      style={{ ...styles.badge, background: C.surface, color: C.ink, fontWeight: 600 }}
                    >
                      {inner}
                    </button>
                  ) : (
                    <span key={label} style={styles.badge}>
                      {inner}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// Noms de genres du catalogue, pour savoir quelles affinités ont une fiche
const genreNames = new Set(genres.map((g) => g.name.toLowerCase()));

const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

const clamped: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 6,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const readMore: React.CSSProperties = {
  margin: "-4px 0 14px",
  padding: 0,
  border: "none",
  background: "none",
  color: C.cobalt,
  fontSize: 15,
  fontWeight: 600,
};

const listenLink: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 7,
  padding: "8px 13px",
  borderRadius: R.pill,
  border: `1px solid ${C.line}`,
  background: C.surface,
  color: C.ink,
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 600,
};
