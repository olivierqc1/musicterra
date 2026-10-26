// src/components/ResultCard.tsx
// Carte de résultat après un spin : image, description, liens d'écoute,
// notation et affinités. Extrait de App.tsx pour garder les fichiers légers.

import { useMemo } from "react";
import { type Item, isGenre, isCountry, isYear } from "../itemTypes";
import { matrix } from "../data/matrix";
import { styles } from "../appStyles";
import { getListenLinks } from "../listenLinks";
import Rating from "./Rating";
import { useAuth } from "../context/AuthContext";
import { trackAction } from "../services/userBehavior";
import { useItemDescription } from "../hooks/useItemDescription";

interface Props {
  item: Item;
  pool: "genres" | "countries" | "years";
  language: "fr" | "en";
}

const PLATFORM_COLORS: Record<string, string> = {
  Spotify: "#1db954",
  YouTube: "#c4302b",
  "YT Music": "#282828",
  Bandcamp: "#1da0c3",
  Deezer: "#7c3aed",
};

export default function ResultCard({ item, pool, language }: Props) {
  const { session } = useAuth();
  const t = (fr: string, en: string) => (language === "fr" ? fr : en);
  const description = useItemDescription(item, language);

  const similarityBoost = useMemo(() => {
    const row = matrix[item.name] || {};
    return Object.entries(row).sort((a, b) => (b[1] as number) - (a[1] as number));
  }, [item]);

  const handleListenClick = (platform: string) => {
    if (session) {
      trackAction(`click_${platform.toLowerCase().replace(/\s/g, "_")}`, pool, item.name);
    }
  };

  return (
    <div style={styles.card}>
          <div style={styles.resultGrid}>
            <div>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.resultImage}
                />
              ) : (
                <div style={styles.noImage}>
                  {t("Aucune image", "No image")}
                </div>
              )}
            </div>

            <div>
              {isYear(item) ? (
                <h2 style={{ margin: "4px 0 6px" }}>
                  {item.year}
                </h2>
              ) : (
                <h2 style={{ margin: "4px 0 6px" }}>
                  {item.name}
                </h2>
              )}

              <p style={{ marginTop: 0, ...(description.loading ? { opacity: 0.6 } : {}) }}>
                {description.loading
                  ? t("Chargement de la description…", "Loading description…")
                  : description.text}
              </p>

              {isGenre(item) && item.subgenres?.length ? (
                <p style={styles.lightText}>
                  <strong>{t("Sous-genres", "Subgenres")}:</strong>{" "}
                  {item.subgenres.join(", ")}
                </p>
              ) : null}

              {isCountry(item) && item.regions?.length ? (
                <p style={styles.lightText}>
                  <strong>{t("Régions", "Regions")}:</strong>{" "}
                  {item.regions.join(", ")}
                </p>
              ) : null}

              {isCountry(item) && item.cities?.length ? (
                <div style={{ marginTop: 8 }}>
                  <strong>{t("Villes", "Cities")}:</strong>
                  <ul style={{ margin: "6px 0 0 16px" }}>
                    {item.cities.map((c: any) => (
                      <li key={c.name}>
                        <em>{c.name}</em>
                        {c.styles ? ` — ${c.styles.join(", ")}` : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {!isYear(item) && item.artists?.length ? (
                <p style={styles.lightText}>
                  <strong>{t("Artistes", "Artists")}:</strong>{" "}
                  {item.artists.join(", ")}
                </p>
              ) : null}

              {!isYear(item) && (
                <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {getListenLinks(item.name, item.spotify).map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => handleListenClick(l.label)}
                      style={{
                        background: PLATFORM_COLORS[l.label] || "#444",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "8px 14px",
                        borderRadius: 999,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {l.emoji} {l.label}
                    </a>
                  ))}
                </div>
              )}

              <div style={{ marginTop: 14 }}>
                <Rating
                  itemType={
                    pool === "genres" 
                      ? "genre" 
                      : pool === "countries"
                      ? "country"
                      : "genre"
                  }
                  itemName={item.name}
                  max={10}
                  language={language}
                />
              </div>

              {similarityBoost.length > 0 && (
                <div style={{ marginTop: 12 }}>
                  <strong>{t("Affinités", "Similarities")}:</strong>
                  <div style={styles.badgeContainer}>
                    {similarityBoost.slice(0, 8).map(([label, score]) => (
                      <span key={label} style={styles.badge}>
                        {label} • {Math.round(score * 100)}%
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
  );
}
