// src/App.tsx - PARTIE 1/2
// ========================================
// IMPORTS, TYPES, ÉTATS ET LOGIQUE
// ========================================

import React, { useMemo, useState, useEffect } from "react";
import { genres } from "./data/genres";
import { countries } from "./data/countries";
import { years } from "./data/years";
import { matrix } from "./data/matrix";

import { Wheel } from "./components/Wheel";
import Rating from "./components/Rating";
import Profile from "./components/Profile";
import AuthGate from "./components/AuthGate";
import Groups from "./components/Groups";
import Concerts from "./components/Concerts";
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
  // ============================================
  // 🎯 ÉTATS
  // ============================================
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [tab, setTab] = useState<
    "discover" | "emerging" | "groups" | "concerts" | "profile"
  >("discover");
  const [pool, setPool] = useState<"genres" | "countries" | "years">("genres");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const { session, profile } = useAuth();

  // ============================================
  // 🔧 LOGIQUE ET EFFETS
  // ============================================

  // Détecter si l'URL contient un token de reset password
  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    if (hashParams.get('type') === 'recovery') {
      setIsResetPassword(true);
    }
  }, []);

  // Items selon le pool
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

  // Afficher le Welcome à la première visite (seulement si connecté)
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

  // Mettre à jour le streak à la connexion
  useEffect(() => {
    if (session) {
      updateStreak(session.user.id).then(streak => {
        setCurrentStreak(streak);
      });
    }
  }, [session]);

  // Sélection d'un item via la roue
  const onSpin = (name: string) => {
    const found = items.find((i) => i.name === name) || null;
    setSelectedItem(found);

    if (found && session) {
      trackAction("spin", pool, found.name);
    }
  };

  // Calcul d'affinité via matrice
  const similarityBoost = useMemo(() => {
    if (!selectedItem) return [];
    const name = selectedItem.name;
    const row = matrix[name] || {};
    return Object.entries(row).sort((a, b) => b[1] - a[1]);
  }, [selectedItem]);

  // Handler pour clic Spotify
  const handleSpotifyClick = () => {
    if (selectedItem && session) {
      trackAction("click_spotify", pool, selectedItem.name);
    }
  };

  // ============================================
  // 📊 GÉNÉRATION SEO DYNAMIQUE
  // ============================================
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
      } else if (tab === "groups") {
        title = language === "fr" ? "Groupes Musicaux" : "Music Groups";
        description = language === "fr"
          ? "Rejoignez des groupes de passionnés et partagez vos découvertes musicales."
          : "Join groups of enthusiasts and share your music discoveries.";
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

  // ============================================
  // 🔐 MODES SPÉCIAUX (Reset Password / Login)
  // ============================================
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

  // ============================================
  // ➡️ SUITE DANS APP_PART2.tsx
  // ============================================
  // La suite du rendu JSX est dans la partie 2
  
  return null; // Temporaire - voir partie 2 pour le JSX complet
};

export default App;// src/App.tsx - PARTIE 2/2
// ========================================
// RENDU JSX ET INTERFACE UTILISATEUR
// ========================================

// NOTE: Cette partie montre le JSX complet
// Elle doit être combinée avec Part1 pour former App.tsx complet

// Le return commence ici (après les conditions de Part1):

return (
  <>
    {/* SEO dynamique */}
    <SEO {...seoData} />

    {/* Welcome Modal */}
    {showWelcome && <Welcome onClose={handleCloseWelcome} language={language} />}

    <div style={styles.app}>
      {/* ============================================ */}
      {/* HEADER */}
      {/* ============================================ */}
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🎵</span>
          <h1 style={{ margin: 0 }}>MusicTerra</h1>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {/* Info button */}
          <button
            onClick={() => setShowWelcome(true)}
            style={styles.infoBtn}
            title={t('À propos', 'About')}
          >
            ℹ️
          </button>

          {/* Streak indicator */}
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

      {/* ============================================ */}
      {/* NAVIGATION TABS */}
      {/* ============================================ */}
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

      {/* ============================================ */}
      {/* CONTENU PRINCIPAL */}
      {/* ============================================ */}
      <main style={styles.main}>
        
        {/* ===================================== */}
        {/* ONGLET DÉCOUVRIR */}
        {/* ===================================== */}
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

            {/* Wheel */}
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

                    {selectedItem.spotify && (
                      <p style={{ marginTop: 8 }}>
                        <a
                          href={selectedItem.spotify}
                          target="_blank"
                          rel="noreferrer"
                          style={styles.primaryLink}
                          onClick={handleSpotifyClick}
                        >
                          🎧 {t("Playlist Spotify", "Spotify playlist")}
                        </a>
                      </p>
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

        {/* ===================================== */}
        {/* AUTRES ONGLETS */}
        {/* ===================================== */}
        
        {/* EMERGING ARTISTS */}
        {tab === "emerging" && <EmergingArtists language={language} />}

        {/* GROUPS */}
        {tab === "groups" && <Groups language={language} />}

        {/* CONCERTS */}
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

        {/* PROFILE */}
        {tab === "profile" && <Profile language={language} />}
      </main>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer style={styles.footer}>
        <small>
          © {new Date().getFullYear()} MusicTerra •{" "}
          {t('Découvrez la musique du monde', 'Discover world music')}
        </small>
      </footer>
    </div>
  </>
);

// ============================================
// 🎨 STYLES
// ============================================
const styles: Record<string, React.CSSProperties> = {
  app: { 
    maxWidth: 1080, 
    margin: "0 auto", 
    padding: "12px 16px",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    flexWrap: "wrap",
    gap: 12,
    background: "rgba(255, 255, 255, 0.95)",
    padding: "16px 20px",
    borderRadius: 16,
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  },
  infoBtn: {
    padding: "6px 10px",
    borderRadius: 8,
    border: "1px solid rgba(255, 255, 255, 0.3)",
    background: "rgba(255, 255, 255, 0.9)",
    cursor: "pointer",
    fontSize: 16,
    backdropFilter: "blur(10px)",
    transition: "all 0.2s ease",
  },
  streakBadge: {
    padding: "4px 10px",
    background: "linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)",
    color: "#fff",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    boxShadow: "0 2px 8px rgba(255,107,107,0.3)",
  },
  tabsBar: {
    display: "flex",
    gap: 8,
    borderBottom: "none",
    paddingBottom: 8,
    marginBottom: 12,
    flexWrap: "wrap",
    background: "rgba(255, 255, 255, 0.9)",
    padding: "12px",
    borderRadius: 16,
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
  },
  tabBtn: {
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(102, 126, 234, 0.2)",
    background: "rgba(255, 255, 255, 0.8)",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    transition: "all 0.2s ease",
    backdropFilter: "blur(5px)",
  },
  tabActive: { 
    borderColor: "#667eea", 
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
    color: "#fff",
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
  },
  main: { 
    display: "grid", 
    gap: 12, 
    alignItems: "start",
  },
  card: {
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: 20,
    padding: 20,
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
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
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  noImage: {
    width: "100%",
    aspectRatio: "1/1",
    borderRadius: 12,
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    display: "grid",
    placeItems: "center",
    color: "#888",
    fontSize: 12,
  },
  lightText: { color: "#444", marginTop: 4, fontSize: 14 },
  chipLabel: {
    padding: "8px 14px",
    border: "1px solid rgba(102, 126, 234, 0.3)",
    borderRadius: 999,
    background: "rgba(255, 255, 255, 0.9)",
    cursor: "pointer",
    fontSize: 14,
    transition: "all 0.2s ease",
    backdropFilter: "blur(5px)",
  },
  primaryLink: {
    textDecoration: "none",
    border: "none",
    color: "#fff",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "10px 16px",
    borderRadius: 10,
    display: "inline-block",
    fontWeight: 500,
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
    transition: "all 0.2s ease",
  },
  badgeContainer: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 6,
  },
  badge: {
    padding: "6px 12px",
    border: "1px solid rgba(102, 126, 234, 0.2)",
    borderRadius: 999,
    fontSize: 12,
    background: "rgba(102, 126, 234, 0.05)",
    backdropFilter: "blur(5px)",
  },
  secondaryBtn: {
    padding: "8px 12px",
    borderRadius: 10,
    border: "1px solid rgba(187, 187, 187, 0.3)",
    background: "rgba(255, 255, 255, 0.9)",
    cursor: "pointer",
    fontSize: 13,
    backdropFilter: "blur(5px)",
    transition: "all 0.2s ease",
  },
  footer: { 
    marginTop: 32, 
    textAlign: "center", 
    color: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: 16,
    backdropFilter: "blur(10px)",
  },
};