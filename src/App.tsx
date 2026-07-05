// src/App.tsx - COPIE PARTIE 1/2
// Copie d'abord ce code, puis copie la partie 2 juste en dessous

import React, { useMemo, useState, useEffect } from "react";
import { genres } from "./data/genres";
import { countries } from "./data/countries";
import { years } from "./data/years";

import { Wheel } from "./components/Wheel";
import Profile from "./components/Profile";
import AuthGate from "./components/AuthGate";
import Concerts from "./components/Concerts";
import { styles } from "./appStyles";
import ResultCard from "./components/ResultCard";
import { Analytics } from "@vercel/analytics/react";
import EmergingArtists from "./components/EmergingArtists";
import Welcome from "./components/Welcome";
import ResetPassword from "./components/ResetPassword";
import SEO from "./components/SEO";

import { useAuth } from "./context/AuthContext";
import { trackAction } from "./services/userBehavior";
import { updateStreak } from "./services/gamification";
import { syncRatings } from "./services/ratingsStore";

import { type Item, isGenre, isCountry, isYear } from "./itemTypes";

// Artistes des genres les mieux notés (fallback pour les suggestions de concerts)
function artistsFromTopRatedGenres(max = 8): string[] {
  try {
    const rated: { name: string; rating: number }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith("rating_")) continue;
      const parts = key.split("_");
      if (parts[2] !== "genre") continue;
      const rating = parseInt(localStorage.getItem(key) || "0", 10);
      if (rating >= 6) rated.push({ name: parts.slice(3).join("_"), rating });
    }
    rated.sort((a, b) => b.rating - a.rating);
    const out: string[] = [];
    for (const r of rated) {
      const g = genres.find((x) => x.name === r.name);
      for (const a of g?.artists || []) {
        if (!out.includes(a)) out.push(a);
        if (out.length >= max) return out;
      }
    }
    return out;
  } catch {
    return [];
  }
}

// Restaure l'état sauvegardé (Chrome mobile décharge les onglets en arrière-plan)
function loadSavedState() {
  try {
    return JSON.parse(sessionStorage.getItem("mt_state") || "{}");
  } catch {
    return {};
  }
}

const App: React.FC = () => {
  const saved = useMemo(loadSavedState, []);
  const [language, setLanguage] = useState<"fr" | "en">(saved.language === "en" ? "en" : "fr");
  const [tab, setTab] = useState<
    "discover" | "emerging" | "concerts" | "profile"
  >(["discover", "emerging", "concerts", "profile"].includes(saved.tab) ? saved.tab : "discover");
  const [pool, setPool] = useState<"genres" | "countries" | "years">(
    ["genres", "countries", "years"].includes(saved.pool) ? saved.pool : "genres"
  );
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

  // Restaure le dernier item découvert après un rechargement de page
  useEffect(() => {
    if (saved.selectedName && !selectedItem) {
      const found = items.find((i) => i.name === saved.selectedName);
      if (found) setSelectedItem(found);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sauvegarde l'état de navigation (survit au déchargement de l'onglet)
  useEffect(() => {
    try {
      sessionStorage.setItem(
        "mt_state",
        JSON.stringify({ tab, pool, language, selectedName: selectedItem?.name || null })
      );
    } catch {
      /* sessionStorage indisponible */
    }
  }, [tab, pool, language, selectedItem]);

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
    // migrations locales tout de suite; sync cloud dès qu'on est connecté
    syncRatings(session?.user?.id);
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
                <ResultCard item={selectedItem} pool={pool} language={language} />
              )}
            </section>
          )}

          {tab === "emerging" && <EmergingArtists language={language} />}
          {tab === "concerts" && (
            <Concerts
              language={language}
              suggestedArtists={
                selectedItem && !isYear(selectedItem) && selectedItem.artists?.length
                  ? selectedItem.artists
                  : artistsFromTopRatedGenres()
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
