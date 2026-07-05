// src/App.tsx - COPIE PARTIE 1/2
// Copie d'abord ce code, puis copie la partie 2 juste en dessous

import React, { useMemo, useState, useEffect } from "react";
import { genres } from "./data/genres";
import { countries } from "./data/countries";
import { years } from "./data/years";
import { matrix } from "./data/matrix";

import { Wheel } from "./components/Wheel";
import Rating from "./components/Rating";
import Profile from "./components/Profile";
import AuthGate from "./components/AuthGate";
import Concerts from "./components/Concerts";
import { styles } from "./appStyles";
import { getListenLinks } from "./listenLinks";
import { Analytics } from "@vercel/analytics/react";
import EmergingArtists from "./components/EmergingArtists";
import Welcome from "./components/Welcome";
import ResetPassword from "./components/ResetPassword";
import SEO from "./components/SEO";

import { useAuth } from "./context/AuthContext";
import { trackAction } from "./services/userBehavior";
import { updateStreak } from "./services/gamification";

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

type YearItem = {
  name: string;
  year: number;
  descriptionFr: string;
  descriptionEn: string;
  spotify?: string;
  image?: string;
};

type Item = GenreItem | CountryItem | YearItem;

const isGenre = (i: Item): i is GenreItem => "subgenres" in i;
const isCountry = (i: Item): i is CountryItem => "regions" in i;
const isYear = (i: Item): i is YearItem => "year" in i;

const App: React.FC = () => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [tab, setTab] = useState<
    "discover" | "emerging" | "concerts" | "profile"
  >("discover");
  const [pool, setPool] = useState<"genres" | "countries" | "years">("genres");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const { session, profile } = useAuth();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    if (hashParams.get('type') === 'recovery') {
      setIsResetPassword(true);
    }
  }, []);

  const items: Item[] = useMemo(() => {
    if (pool === "genres") return genres as Item[];
    if (pool === "countries") return countries as Item[];
    return years.map(y => ({
      name: String(y.year),
      year: y.year,
      descriptionFr: y.descriptionFr,
      descriptionEn: y.descriptionEn,
      spotify: y.spotify,
    })) as Item[];
  }, [pool]);

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  useEffect(() => {
    const hasVisited = localStorage.getItem('musicterra_visited');
    if (!hasVisited && !isResetPassword && session) {
      setShowWelcome(true);
    }
  }, [isResetPassword, session]);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('musicterra_visited', 'true');
  };

  useEffect(() => {
    if (session) {
      updateStreak(session.user.id).then(streak => {
        setCurrentStreak(streak);
      });
    }
  }, [session]);

  const onSpin = (name: string) => {
    const found = items.find((i) => i.name === name) || null;
    setSelectedItem(found);

    if (found && session) {
      trackAction("spin", pool, found.name);
    }
  };

  const similarityBoost = useMemo(() => {
    if (!selectedItem) return [];
    const name = selectedItem.name;
    const row = matrix[name] || {};
    return Object.entries(row).sort((a, b) => b[1] - a[1]);
  }, [selectedItem]);

  const handleListenClick = (platform: string) => {
    if (selectedItem && session) {
      trackAction(`click_${platform.toLowerCase().replace(/\s/g, "_")}`, pool, selectedItem.name);
    }
  };

  const getSEOData = () => {
    let title = language === "fr" 
      ? "Découvrez la musique du monde" 
      : "Discover world music";
    let description = language === "fr"
      ? "Explorez des genres musicaux, pays et artistes du monde entier. Découvrez de nouveaux styles et élargissez vos horizons musicaux."
      : "Explore music genres, countries and artists from around the world. Discover new styles and expand your musical horizons.";
    let keywords = language === "fr"
      ? "musique, genres musicaux, découverte musicale, artistes émergents, musique du monde"
      : "music, music genres, music discovery, emerging artists, world music";

    if (selectedItem) {
      const itemDesc = language === "fr" ? selectedItem.descriptionFr : selectedItem.descriptionEn;
      
      if (pool === "genres") {
        title = language === "fr" 
          ? `${selectedItem.name} - Genre Musical` 
          : `${selectedItem.name} - Music Genre`;
        description = `${itemDesc} ${language === "fr" 
          ? "Découvrez les artistes, sous-genres et playlists." 
          : "Discover artists, subgenres and playlists."}`;
        keywords = `${selectedItem.name}, ${language === "fr" ? "genre musical" : "music genre"}, ${
          isGenre(selectedItem) && selectedItem.subgenres 
            ? selectedItem.subgenres.join(", ") 
            : ""
        }`;
      } else if (pool === "countries") {
        title = language === "fr" 
          ? `Musique de ${selectedItem.name}` 
          : `Music from ${selectedItem.name}`;
        description = `${itemDesc} ${language === "fr"
          ? "Explorez la scène musicale et les artistes locaux."
          : "Explore the music scene and local artists."}`;
        keywords = `${selectedItem.name}, ${language === "fr" ? "musique" : "music"}, ${
          isCountry(selectedItem) && selectedItem.regions 
            ? selectedItem.regions.join(", ") 
            : ""
        }`;
      } else if (pool === "years") {
        title = language === "fr" 
          ? `Musique de ${selectedItem.name}` 
          : `Music from ${selectedItem.name}`;
        description = itemDesc;
        keywords = `${selectedItem.name}, ${language === "fr" ? "année, musique rétro" : "year, retro music"}`;
      }
    } else {
      if (tab === "emerging") {
        title = language === "fr" ? "Artistes Émergents" : "Emerging Artists";
        description = language === "fr"
          ? "Découvrez les nouveaux talents et artistes émergents de la scène musicale mondiale."
          : "Discover new talents and emerging artists from the global music scene.";
      } else if (tab === "concerts") {
        title = language === "fr" ? "Concerts et Événements" : "Concerts and Events";
        description = language === "fr"
          ? "Trouvez des concerts et événements musicaux près de chez vous."
          : "Find concerts and music events near you.";
      }
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "MusicTerra",
      "description": language === "fr"
        ? "Plateforme de découverte musicale mondiale"
        : "Global music discovery platform",
      "url": "https://musicterra.xyz",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web",
    };

    if (selectedItem && pool === "genres") {
      return {
        title,
        description,
        keywords,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "MusicGenre",
          "name": selectedItem.name,
          "description": language === "fr" ? selectedItem.descriptionFr : selectedItem.descriptionEn,
          ...(selectedItem.image && { "image": selectedItem.image }),
        }
      };
    }

    return { title, description, keywords, structuredData };
  };

  const seoData = getSEOData();

  if (isResetPassword) {
    return (
      <>
        <SEO
          title={language === "fr" ? "Réinitialiser le mot de passe" : "Reset Password"}
          description={language === "fr" 
            ? "Réinitialisez votre mot de passe MusicTerra" 
            : "Reset your MusicTerra password"}
        />
        <ResetPassword 
          language={language} 
          onComplete={() => {
            setIsResetPassword(false);
            window.location.hash = '';
          }} 
        />
      </>
    );
  }

  if (!session) {
    return (
      <>
        <SEO
          title={language === "fr" ? "Connexion" : "Sign In"}
          description={language === "fr"
            ? "Connectez-vous à MusicTerra pour découvrir la musique du monde"
            : "Sign in to MusicTerra to discover world music"}
        />
        <AuthGate mode="fullpage" language={language} />
      </>
    );
  }

  return (
    <>
      <SEO {...seoData} />
      {showWelcome && <Welcome onClose={handleCloseWelcome} language={language} />}

      <div style={styles.app}>
        <Analytics />
        <header style={styles.header}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22 }}>🎵</span>
            <h1 style={{ margin: 0 }}>MusicTerra</h1>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setShowWelcome(true)}
              style={styles.infoBtn}
              title={t('À propos', 'About')}
            >
              ℹ️
            </button>

            {currentStreak > 0 && (
              <div style={styles.streakBadge}>
                🔥 {currentStreak}
              </div>
            )}

            <button
              onClick={() => setLanguage((l) => (l === "fr" ? "en" : "fr"))}
              style={styles.secondaryBtn}
            >
              {t("🇬🇧 EN", "🇫🇷 FR")}
            </button>

            {profile && (
              <span style={{ fontSize: 12, color: "#555" }}>
                {profile.display_name || profile.email}
              </span>
            )}
          </div>
        </header>

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
              ...(tab === "emerging" ? styles.tabActive : {}),
            }}
            onClick={() => setTab("emerging")}
          >
            {t("🌱 Émergents", "🌱 Emerging")}
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

        <main style={styles.main}>
          {tab === "discover" && (
            <section style={{ display: "grid", gap: 16 }}>
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
                <label style={styles.chipLabel}>
                  <input
                    type="radio"
                    name="pool"
                    checked={pool === "years"}
                    onChange={() => setPool("years")}
                  />{" "}
                  {t("📅 Années", "📅 Years")}
                </label>
              </div>

              <div style={styles.card}>
                <h3 style={{ marginTop: 0, textAlign: "center" }}>
                  {t("🎡 Tourne la roue", "🎡 Spin the wheel")}
                </h3>
                <Wheel
                  items={items.map((i) => i.name)}
                  onSelect={onSpin}
                  language={language}
                />
              </div>

              {selectedItem && (
                <div style={styles.card}>
                  <div style={styles.resultGrid}>
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

                    <div>
                      {isYear(selectedItem) ? (
                        <h2 style={{ margin: "4px 0 6px" }}>
                          {selectedItem.year}
                        </h2>
                      ) : (
                        <h2 style={{ margin: "4px 0 6px" }}>
                          {selectedItem.name}
                        </h2>
                      )}

                      <p style={{ marginTop: 0 }}>
                        {language === "fr"
                          ? selectedItem.descriptionFr
                          : selectedItem.descriptionEn}
                      </p>

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

                      {!isYear(selectedItem) && selectedItem.artists?.length ? (
                        <p style={styles.lightText}>
                          <strong>{t("Artistes", "Artists")}:</strong>{" "}
                          {selectedItem.artists.join(", ")}
                        </p>
                      ) : null}

                      {!isYear(selectedItem) && (
                        <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {getListenLinks(selectedItem.name, selectedItem.spotify).map((l) => (
                            <a
                              key={l.label}
                              href={l.url}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => handleListenClick(l.label)}
                              style={{
                                background: l.label === "Spotify" ? "#1db954" : "rgba(255,255,255,0.12)",
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
                          itemName={selectedItem.name}
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
              )}
            </section>
          )}

          {tab === "emerging" && <EmergingArtists language={language} />}
          {tab === "concerts" && (
            <Concerts
              language={language}
              suggestedArtists={
                selectedItem && !isYear(selectedItem)
                  ? selectedItem.artists || []
                  : []
              }
            />
          )}
          {tab === "profile" && <Profile language={language} />}
        </main>

        <footer style={styles.footer}>
          <small>
            © {new Date().getFullYear()} MusicTerra •{" "}
            {t('Découvrez la musique du monde', 'Discover world music')}
          </small>
        </footer>
      </div>
    </>
  );
};

// ⬇️⬇️⬇️ CONTINUE AVEC LA PARTIE 2 CI-DESSOUS ⬇️⬇️⬇️// src/App.tsx - COPIE PARTIE 2/2
// ⬆️⬆️⬆️ Colle ce code JUSTE APRÈS la partie 1 ⬆️⬆️⬆️

export default App;
