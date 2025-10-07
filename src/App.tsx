// src/App.tsx
import React, { useMemo, useState } from "react";
import { genres } from "./data/genres";
import { countries } from "./data/countries";
import { similarityMatrix } from "./data/matrix";

import { Wheel } from "./components/Wheel";
import Rating from "./components/Rating";
import Profile from "./components/Profile";
import AuthGate from "./components/AuthGate";
import Groups from "./components/Groups";
import Concerts from "./components/Concerts";

import { useAuth } from "./context/AuthContext";

// Types
type GenreItem = {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  subgenres?: string[];
  artists: string[];
  spotify?: string;
  image?: string;
};

type CountryItem = {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  regions?: string[];
  artists: string[];
  spotify?: string;
  image?: string;
  cities?: any[];
};

type Item = GenreItem | CountryItem;

const isGenre = (i: Item): i is GenreItem => "subgenres" in i;
const isCountry = (i: Item): i is CountryItem => "regions" in i;

const App: React.FC = () => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [tab, setTab] = useState<"discover" | "groups" | "concerts" | "profile">(
    "discover"
  );
  const [pool, setPool] = useState<"genres" | "countries">("genres");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const { session, profile } = useAuth();

  // Items selon le pool
  const items: Item[] = useMemo(
    () => (pool === "genres" ? (genres as Item[]) : (countries as Item[])),
    [pool]
  );

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  // Sélection d'un item via la roue
  const onSpin = (name: string) => {
    const found = items.find((i) => i.name === name) || null;
    setSelectedItem(found);
  };

  // Calcul d'affinité via matrice
  const similarityBoost = useMemo(() => {
    if (!selectedItem) return [];
    const name = selectedItem.name;
    const row = similarityMatrix[name] || {};
    return Object.entries(row).sort((a, b) => b[1] - a[1]);
  }, [selectedItem]);

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🎵</span>
          <h1 style={{ margin: 0 }}>Musicterra</h1>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            onClick={() => setLanguage((l) => (l === "fr" ? "en" : "fr"))}
            style={styles.secondaryBtn}
          >
            {t("🇬🇧 EN", "🇫🇷 FR")}
          </button>
          {session && profile && (
            <span style={{ fontSize: 12, color: "#555" }}>
              {profile.display_name || profile.email}
            </span>
          )}
        </div>
      </header>

      {/* Tabs */}
      <nav style={styles.tabsBar}>
        <button
          style={{
            ...styles.tabBtn,
            ...(tab === "discover" ? styles.tabActive : {}),
          }}
          onClick={() => setTab("discover")}
        >
          {t("🔍 Découvrir", "🔍 Discover")}
        </button>
        <button
          style={{
            ...styles.tabBtn,
            ...(tab === "groups" ? styles.tabActive : {}),
          }}
          onClick={() => setTab("groups")}
        >
          {t("👥 Groupes", "👥 Groups")}
        </button>
        <button
          style={{
            ...styles.tabBtn,
            ...(tab === "concerts" ? styles.tabActive : {}),
          }}
          onClick={() => setTab("concerts")}
        >
          {t("🎤 Concerts", "🎤 Concerts")}
        </button>
        <button
          style={{
            ...styles.tabBtn,
            ...(tab === "profile" ? styles.tabActive : {}),
          }}
          onClick={() => setTab("profile")}
        >
          {t("👤 Profil", "👤 Profile")}
        </button>
      </nav>

      {/* Content */}
      <main style={styles.main}>
        {/* DISCOVER */}
        {tab === "discover" && (
          <section style={{ display: "grid", gap: 16 }}>
            {/* Pool selector */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <label style={styles.chipLabel}>
                <input
                  type="radio"
                  name="pool"
                  checked={pool === "genres"}
                  onChange={() => setPool("genres")}
                />{" "}
                {t("🎸 Genres", "🎸 Genres")}
              </label>
              <label style={styles.chipLabel}>
                <input
                  type="radio"
                  name="pool"
                  checked={pool === "countries"}
                  onChange={() => setPool("countries")}
                />{" "}
                {t("🌍 Pays", "🌍 Countries")}
              </label>
            </div>

            {/* Wheel */}
            <div style={styles.card}>
              <h3 style={{ marginTop: 0 }}>
                {t("🎡 Tourne la roue", "🎡 Spin the wheel")}
              </h3>
              <Wheel
                items={items.map((i) => i.name)}
                onSelect={onSpin}
                language={language}
              />
            </div>

            {/* Result */}
            {selectedItem && (
              <div style={styles.card}>
                <div style={styles.resultGrid}>
                  {/* Image */}
                  <div>
                    {selectedItem.image ? (
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        style={styles.resultImage}
                      />
                    ) : (
                      <div style={styles.noImage}>
                        {t("Aucune image", "No image")}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div>
                    <h2 style={{ margin: "4px 0 6px" }}>{selectedItem.name}</h2>
                    <p style={{ marginTop: 0 }}>
                      {language === "fr"
                        ? selectedItem.descriptionFr
                        : selectedItem.descriptionEn}
                    </p>

                    {/* Subgenres/Regions */}
                    {isGenre(selectedItem) && selectedItem.subgenres?.length ? (
                      <p style={styles.lightText}>
                        <strong>{t("Sous-genres", "Subgenres")}:</strong>{" "}
                        {selectedItem.subgenres.join(", ")}
                      </p>
                    ) : null}

                    {isCountry(selectedItem) && selectedItem.regions?.length ? (
                      <p style={styles.lightText}>
                        <strong>{t("Régions", "Regions")}:</strong>{" "}
                        {selectedItem.regions.join(", ")}
                      </p>
                    ) : null}

                    {/* Cities */}
                    {isCountry(selectedItem) && selectedItem.cities?.length ? (
                      <div style={{ marginTop: 8 }}>
                        <strong>{t("Villes", "Cities")}:</strong>
                        <ul style={{ margin: "6px 0 0 16px" }}>
                          {selectedItem.cities.map((c: any) => (
                            <li key={c.name}>
                              <em>{c.name}</em>
                              {c.styles ? ` — ${c.styles.join(", ")}` : ""}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {/* Artists */}
                    {selectedItem.artists?.length ? (
                      <p style={styles.lightText}>
                        <strong>{t("Artistes", "Artists")}:</strong>{" "}
                        {selectedItem.artists.join(", ")}
                      </p>
                    ) : null}

                    {/* Spotify */}
                    {selectedItem.spotify && (
                      <p style={{ marginTop: 8 }}>
                        
                          href={selectedItem.spotify}
                          target="_blank"
                          rel="noreferrer"
                          style={styles.primaryLink}
                        >
                          🎧 {t("Playlist Spotify", "Spotify playlist")}
                        </a>
                      </p>
                    )}

                    {/* Rating Component */}
                    <div style={{ marginTop: 14 }}>
                      <Rating
                        itemType={pool === "genres" ? "genre" : "country"}
                        itemName={selectedItem.name}
                        max={10}
                        language={language}
                      />
                    </div>

                    {/* Similarities */}
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
            )}
          </section>
        )}

        {/* GROUPS */}
        {tab === "groups" && (
          <AuthGate mode="inline" language={language}>
            <Groups language={language} />
          </AuthGate>
        )}

        {/* CONCERTS */}
        {tab === "concerts" && (
          <AuthGate mode="inline" language={language}>
            <Concerts 
              language={language}
              suggestedArtists={selectedItem?.artists || []}
            />
          </AuthGate>
        )}

        {/* PROFILE */}
        {tab === "profile" && (
          <AuthGate mode="inline" language={language}>
            <Profile language={language} />
          </AuthGate>
        )}
      </main>

      <footer style={styles.footer}>
        <small>© {new Date().getFullYear()} Musicterra</small>
      </footer>
    </div>
  );
};

// Styles
const styles: Record<string, React.CSSProperties> = {
  app: { maxWidth: 1080, margin: "0 auto", padding: "12px 16px" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    flexWrap: "wrap",
    gap: 12,
  },
  tabsBar: {
    display: "flex",
    gap: 8,
    borderBottom: "1px solid #eee",
    paddingBottom: 8,
    marginBottom: 12,
    flexWrap: "wrap",
  },
  tabBtn: {
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
  },
  tabActive: { borderColor: "#667eea", background: "#667eea", color: "#fff" },
  main: { display: "grid", gap: 12, alignItems: "start" },
  card: {
    border: "1px solid #e7e7e7",
    borderRadius: 14,
    padding: 14,
    background: "#fff",
  },
  resultGrid: {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: 16,
    alignItems: "flex-start",
  },
  resultImage: {
    width: "100%",
    borderRadius: 12,
    objectFit: "cover",
    aspectRatio: "1/1",
  },
  noImage: {
    width: "100%",
    aspectRatio: "1/1",
    borderRadius: 12,
    background: "#f2f2f2",
    display: "grid",
    placeItems: "center",
    color: "#888",
    fontSize: 12,
  },
  lightText: { color: "#444", marginTop: 4, fontSize: 14 },
  chipLabel: {
    padding: "6px 10px",
    border: "1px solid #ddd",
    borderRadius: 999,
    background: "#fff",
    cursor: "pointer",
    fontSize: 14,
  },
  primaryLink: {
    textDecoration: "none",
    border: "1px solid #667eea",
    color: "#fff",
    background: "#667eea",
    padding: "8px 10px",
    borderRadius: 10,
    display: "inline-block",
  },
  badgeContainer: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 6,
  },
  badge: {
    padding: "4px 8px",
    border: "1px solid #ddd",
    borderRadius: 999,
    fontSize: 12,
    background: "#fafafa",
  },
  secondaryBtn: {
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid #bbb",
    background: "#fff",
    cursor: "pointer",
    fontSize: 13,
  },
  footer: { marginTop: 18, textAlign: "center", color: "#777" },
};

export default App;
