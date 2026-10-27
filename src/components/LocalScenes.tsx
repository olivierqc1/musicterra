// src/components/LocalScenes.tsx
// « Scènes locales » d'un pays : une puce par région ou ville, un bouton
// « Au hasard » qui en tire une, et un panneau qui montre ce qu'on sait de la
// scène choisie (note, styles, artistes) avec des liens pour l'écouter.

import { useMemo, useState, type CSSProperties } from "react";
import type { City, CityStyle } from "../types";
import { getLocalScenes } from "../lib/localScenes";
import { getListenLinks } from "../listenLinks";
import ListenPreview from "./ListenPreview";

interface Props {
  country: {
    name: string;
    regions?: string[];
    cities?: City[];
    cityStyles?: CityStyle[];
  };
  language: "fr" | "en";
}

export default function LocalScenes({ country, language }: Props) {
  const t = (fr: string, en: string) => (language === "fr" ? fr : en);
  const scenes = useMemo(() => getLocalScenes(country), [country]);
  const [selected, setSelected] = useState<string | null>(null);

  if (scenes.length === 0) return null;

  const scene = scenes.find((s) => s.name === selected) || null;
  const note = scene ? (language === "fr" ? scene.noteFr : scene.noteEn) : undefined;
  // Nom de ville sans la précision entre parenthèses, pour les recherches
  const searchName = scene ? `${scene.name.split("(")[0].trim()} ${country.name}` : "";

  const pickRandom = () => {
    const others = scenes.filter((s) => s.name !== selected);
    const pool = others.length ? others : scenes;
    setSelected(pool[Math.floor(Math.random() * pool.length)].name);
  };

  return (
    <div style={styles.wrap}>
      <div style={styles.header}>
        <strong>{t("Scènes locales", "Local scenes")}</strong>
        {scenes.length > 1 && (
          <button onClick={pickRandom} style={styles.randomBtn}>
            🎲 {t("Au hasard", "Surprise me")}
          </button>
        )}
      </div>

      <div style={styles.chips}>
        {scenes.map((s) => (
          <button
            key={s.name}
            onClick={() => setSelected(s.name === selected ? null : s.name)}
            style={{ ...styles.chip, ...(s.name === selected ? styles.chipActive : {}) }}
            aria-pressed={s.name === selected}
          >
            📍 {s.name}
          </button>
        ))}
      </div>

      {scene && (
        <div style={styles.panel}>
          <div style={styles.panelTitle}>{scene.name}</div>
          {note && <p style={styles.note}>{note}</p>}
          {scene.styles?.length ? (
            <p style={styles.meta}>
              <strong>{t("Styles", "Styles")} :</strong> {scene.styles.join(", ")}
            </p>
          ) : null}
          {scene.artists?.length ? (
            <p style={styles.meta}>
              <strong>{t("Artistes", "Artists")} :</strong> {scene.artists.join(", ")}
            </p>
          ) : null}
          {!note && !scene.styles?.length && !scene.artists?.length && (
            <p style={styles.meta}>
              {t(
                `Pas encore de fiche détaillée pour ${scene.name}, mais tu peux écouter sa scène :`,
                `No detailed notes for ${scene.name} yet, but you can listen to its scene:`
              )}
            </p>
          )}

          <div style={styles.links}>
            {getListenLinks(searchName, scene.spotify)
              .filter((l) => l.label === "Spotify" || l.label === "YouTube" || l.label === "Bandcamp")
              .map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer" style={styles.link}>
                  {l.emoji} {l.label}
                </a>
              ))}
          </div>

          {(scene.spotify || scene.artists?.length) && (
            <ListenPreview
              key={scene.name}
              name={scene.name}
              artists={scene.artists}
              spotify={scene.spotify}
              language={language}
            />
          )}
        </div>
      )}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrap: {
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    background: "rgba(44, 63, 209, 0.06)",
    border: "1px solid rgba(44, 63, 209, 0.18)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  randomBtn: {
    border: "none",
    borderRadius: 999,
    padding: "6px 12px",
    background: "#2C3FD1",
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
  },
  chip: {
    border: "1px solid rgba(44, 63, 209, 0.3)",
    borderRadius: 999,
    padding: "6px 12px",
    background: "#fff",
    color: "#151B3B",
    fontSize: 13,
    cursor: "pointer",
  },
  chipActive: {
    background: "#2C3FD1",
    borderColor: "#2C3FD1",
    color: "#fff",
  },
  panel: {
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
    background: "#fff",
  },
  panelTitle: {
    fontWeight: 700,
    fontSize: 15,
    marginBottom: 4,
  },
  note: {
    margin: "4px 0",
    fontSize: 14,
  },
  meta: {
    margin: "4px 0",
    fontSize: 13,
    color: "#3A4166",
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 8,
  },
  link: {
    padding: "6px 12px",
    borderRadius: 999,
    background: "#1f1f2e",
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    textDecoration: "none",
  },
};
