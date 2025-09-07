import React, { useMemo, useState } from "react";
import { genres } from "./data/genres";
import { countries } from "./data/countries";
import { similarityMatrix } from "./data/matrix";

import { Wheel } from "./components/Wheel";
import { Rating } from "./components/Rating";

// Contexte préférences (si tu l’as déjà)
import { useUserPreferences } from "./context/UserPreferencesContext";
// Auth (déjà branché dans main.tsx avec AuthProvider + AuthGate)
import { useAuth } from "./context/AuthContext";

// SUPABASE-READY PAGES (si déjà créées)
import { Concerts } from "./components/Concerts";
// Si tu as un composant Groups connecté à Supabase, importe-le :
import Groups from "./components/Groups"; // sinon commente cette ligne
// Si tu as une page Profile, importe-la :
import Profile from "./components/Profile"; // sinon commente cette ligne

// ---------- Types ----------
type GenreItem = {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  subgenres?: string[];
  artists: string[];
  spotify?: string;
  image?: string;
  cityStyles?: { city: string; noteFr?: string; noteEn?: string }[]; // optionnel
};

type CountryItem = {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  regions?: string[];
  artists: string[];
  spotify?: string;
  image?: string;
  cityStyles?: { city: string; noteFr?: string; noteEn?: string }[]; // optionnel
};

type Item = GenreItem | CountryItem;

const isGenre = (i: Item): i is GenreItem => "subgenres" in i;
const isCountry = (i: Item): i is CountryItem => "regions" in i;

// ---------- App ----------
const App: React.FC = () => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [tab, setTab] = useState<"discover" | "groups" | "concerts" | "profile">(
    "discover"
  );

  const [pool, setPool] = useState<"genres" | "countries">("genres");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const { addRatingFor } = useUserPreferences?.() ?? {
    addRatingFor: (_name: string, _score: number) => {},
  };

  const { session } = useAuth();

  // Liste des items selon le pool
  const items: Item[] = useMemo(
    () => (pool === "genres" ? (genres as Item[]) : (countries as Item[])),
    [pool]
  );

  // Texte utilitaire multi-langue
  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  // Quand la roue sélectionne un item
  const onSpin = (name: string) => {
    const found = items.find((i) => i.name === name) || null;
    setSelectedItem(found);
  };

  // Calcul d’affinité (boost) via la matrice
  const similarityBoost = useMemo(() => {
    if (!selectedItem) return [];
    const name = selectedItem.name;
    const row = similarityMatrix[name] || {};
    // Retourne un tableau [label, score] trié desc
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

        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setLanguage((l) => (l === "fr" ? "en" : "fr"))}
            style={styles.secondaryBtn}
          >
            {t("Basculer en anglais", "Switch to French")}
          </button>
        </div>
      </header>

      {/* Tabs */}
      <nav style={styles.tabsBar}>
        <button
          style={{ ...styles.tabBtn, ...(tab === "discover" ? styles.tabActive : {}) }}
          onClick={() => setTab("discover")}
        >
          {t("Découvrir", "Discover")}
        </button>
        <button
          style={{ ...styles.tabBtn, ...(tab === "groups" ? styles.tabActive : {}) }}
          onClick={() => setTab("groups")}
        >
          {t("Groupes", "Groups")}
        </button>
        <button
          style={{
            ...styles.tabBtn,
            ...(tab === "concerts" ? styles.tabActive : {}),
          }}
          onClick={() => setTab("concerts")}
        >
          {t("Concerts", "Concerts")}
        </button>
        <button
          style={{ ...styles.tabBtn, ...(tab === "profile" ? styles.tabActive : {}) }}
          onClick={() => setTab("profile")}
        >
          {t("Profil", "Profile")}
        </button>
      </nav>

      {/* Content */}
      <main style={styles.main}>
        {/* DISCOVER */}
        {tab === "discover" && (
          <section style={{ display: "grid", gap: 16 }}>
            {/* Choix du pool */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <label style={styles.chipLabel}>
                <input
                  type="radio"
                  name="pool"
                  checked={pool === "genres"}
                  onChange={() => setPool("genres")}
                />{" "}
                {t("Genres", "Genres")}
              </label>
              <label style={styles.chipLabel}>
                <input
                  type="radio"
                  name="pool"
                  checked={pool === "countries"}
                  onChange={() => setPool("countries")}
                />{" "}
                {t("Pays / Villes", "Countries / Cities")}
              </label>
            </div>

            {/* Wheel */}
            <div style={styles.card}>
              <h3 style={{ marginTop: 0 }}>{t("Tourne la roue", "Spin the wheel")}</h3>
              <Wheel
                items={items.map((i) => i.name)}
                onSelect={onSpin}
                language={language}
              />
            </div>

            {/* Résultat */}
            {selectedItem && (
              <div style={styles.card}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  {/* Image */}
                  <div>
                    {selectedItem.image ? (
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        style={{ width: "100%", borderRadius: 12, objectFit: "cover" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "1/1",
                          borderRadius: 12,
                          background: "#f2f2f2",
                          display: "grid",
                          placeItems: "center",
                          color: "#888",
                        }}
                      >
                        {t("Aucune image", "No image")}
                      </div>
                    )}
                  </div>

                  {/* Infos */}
                  <div>
                    <h2 style={{ margin: "4px 0 6px" }}>{selectedItem.name}</h2>
                    <p style={{ marginTop: 0 }}>
                      {language === "fr"
                        ? selectedItem.descriptionFr
                        : selectedItem.descriptionEn}
                    </p>

                    {/* Sous-genres / Régions */}
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

                    {/* Villes typiques (optionnel) */}
                    {selectedItem.cityStyles?.length ? (
                      <div style={{ marginTop: 8 }}>
                        <strong>{t("Villes & styles", "Cities & styles")}:</strong>
                        <ul style={{ margin: "6px 0 0 16px" }}>
                          {selectedItem.cityStyles.map((c) => (
                            <li key={c.city}>
                              <em>{c.city}</em>
                              {": "}
                              {language === "fr" ? c.noteFr ?? "" : c.noteEn ?? ""}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {/* Artistes */}
                    {selectedItem.artists?.length ? (
                      <p style={styles.lightText}>
                        <strong>{t("Artistes clés", "Key artists")}:</strong>{" "}
                        {selectedItem.artists.join(", ")}
                      </p>
                    ) : null}

                    {/* Spotify */}
                    {selectedItem.spotify && (
                      <p style={{ marginTop: 8 }}>
                        <a
                          href={selectedItem.spotify}
                          target="_blank"
                          rel="noreferrer"
                          style={styles.primaryLink}
                        >
                          🎧 {t("Playlist Spotify", "Spotify playlist")}
                        </a>
                      </p>
                    )}

                    {/* Rating */}
                    <div style={{ marginTop: 14 }}>
                      <Rating
                        max={10}
                        onRate={(score) => {
                          addRatingFor?.(selectedItem.name, score);
                          alert(
                            t(
                              `Note enregistrée: ${score}/10`,
                              `Rating saved: ${score}/10`
                            )
                          );
                        }}
                        language={language}
                      />
                    </div>

                    {/* Affinités (matrice) */}
                    {similarityBoost.length > 0 && (
                      <div style={{ marginTop: 12 }}>
                        <strong>{t("Affinités", "Similarities")}:</strong>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
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

        {/* GROUPS (protégé) */}
        {tab === "groups" && (
          session ? (
            <Groups language={language} />
          ) : (
            <Locked language={language} what="groupes" />
          )
        )}

        {/* CONCERTS (protégé) */}
        {tab === "concerts" && (
          session ? (
            <Concerts language={language} />
          ) : (
            <Locked language={language} what="concerts" />
          )
        )}

        {/* PROFILE (protégé) */}
        {tab === "profile" && (
          session ? (
            <Profile />
          ) : (
            <Locked language={language} what="profil" />
          )
        )}
      </main>

      <footer style={styles.footer}>
        <small>© {new Date().getFullYear()} Musicterra</small>
      </footer>
    </div>
  );
};

// ---------- Petits composants ----------
const Locked: React.FC<{ language: "fr" | "en"; what: string }> = ({
  language,
  what,
}) => (
  <div style={styles.card}>
    {language === "fr"
      ? `Connecte-toi pour accéder aux ${what}.`
      : `Sign in to access ${what}.`}
  </div>
);

// ---------- Styles ----------
const styles: Record<string, React.CSSProperties> = {
  app: { maxWidth: 1080, margin: "0 auto", padding: "12px 16px" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
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
  },
  tabActive: { borderColor: "#111", background: "#111", color: "#fff" },
  main: { display: "grid", gap: 12, alignItems: "start" },
  card: {
    border: "1px solid #e7e7e7",
    borderRadius: 14,
    padding: 14,
    background: "#fff",
  },
  lightText: { color: "#444", marginTop: 4 },
  chipLabel: {
    padding: "6px 10px",
    border: "1px solid #ddd",
    borderRadius: 999,
    background: "#fff",
    cursor: "pointer",
  },
  primaryLink: {
    textDecoration: "none",
    border: "1px solid #111",
    color: "#fff",
    background: "#111",
    padding: "8px 10px",
    borderRadius: 10,
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
  },
  footer: { marginTop: 18, textAlign: "center", color: "#777" },
};

export default App;



