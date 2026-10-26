// src/App.tsx

import React, { useMemo, useState, useEffect } from "react";
import { genres } from "./data/genresLite";
import { countries } from "./data/countries";
import { years } from "./data/years";

import { Wheel } from "./components/Wheel";
import Profile from "./components/Profile";
import AuthGate from "./components/AuthGate";
import Passport from "./components/Passport";
import Concerts from "./components/Concerts";
import { styles } from "./appStyles";
import ResultCard from "./components/ResultCard";
import EmergingArtists from "./components/EmergingArtists";
import Welcome from "./components/Welcome";
import ResetPassword from "./components/ResetPassword";
import SEO from "./components/SEO";
import { Analytics } from "@vercel/analytics/react";
import { useItemDescription } from "./hooks/useItemDescription";
import { readDeepLink, findByDeepLink, syncUrl, type Pool } from "./lib/share";

import { useAuth } from "./context/AuthContext";
import { trackAction } from "./services/userBehavior";
import { updateStreak } from "./services/gamification";
import { syncRatings } from "./services/ratingsStore";
import { buildPersonalizedGenrePool } from "./services/wheelPersonalization";

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
  // Lien partagé (?g=, ?c=, ?y=) : prioritaire sur l'état sauvegardé
  const deepLink = useMemo(readDeepLink, []);
  const [language, setLanguage] = useState<"fr" | "en">(saved.language === "en" ? "en" : "fr");
  const [tab, setTab] = useState<
    "discover" | "emerging" | "concerts" | "profile"
  >(
    deepLink
      ? "discover"
      : ["discover", "emerging", "concerts", "profile"].includes(saved.tab)
      ? saved.tab
      : "discover"
  );
  const [pool, setPool] = useState<Pool>(
    deepLink
      ? deepLink.pool
      : ["genres", "countries", "years"].includes(saved.pool)
      ? saved.pool
      : "genres"
  );
  // Mode de la roue : "random" = pool complet, "personalized" = pondéré
  // vers les genres bien notés (voir services/wheelPersonalization.ts).
  const [wheelMode, setWheelMode] = useState<"random" | "personalized">("random");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  // Les genres arrivent sans description : elle se charge à la demande.
  const selectedDescription = useItemDescription(selectedItem, language).text;
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  // Fenêtre de connexion : l'app est utilisable sans compte, on ne
  // demande de se connecter que pour sauvegarder (notes, passeport, profil).
  const [showLogin, setShowLogin] = useState(false);

  const { session, profile } = useAuth();

  useEffect(() => {
    if (session) setShowLogin(false);
  }, [session]);

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

  // Pool réellement passé à la roue : le pool complet en mode "random",
  // ou un sous-ensemble pondéré vers les genres bien notés en mode
  // "personalized". Recalculé à chaque bascule de mode/pool pour lire
  // les notes les plus fraîches du localStorage.
  const wheelItems: Item[] = useMemo(() => {
    if (wheelMode === "personalized" && pool === "genres") {
      return buildPersonalizedGenrePool(items);
    }
    return items;
  }, [wheelMode, items, pool]);

  // Liste stable pour la roue : un nouveau tableau à chaque rendu ferait
  // retirer les segments au hasard en plein lancer.
  const wheelNames = useMemo(() => wheelItems.map((i) => i.name), [wheelItems]);

  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  // Ouvre l'élément d'un lien partagé, sinon restaure le dernier item
  // découvert après un rechargement de page
  useEffect(() => {
    if (deepLink) {
      const found = findByDeepLink(items, deepLink.pool, deepLink.key);
      if (found) {
        setSelectedItem(found);
        return;
      }
    }
    if (saved.selectedName && !selectedItem) {
      const found = items.find((i) => i.name === saved.selectedName);
      if (found) setSelectedItem(found);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Garde l'adresse de la page synchronisée avec l'élément affiché,
  // pour qu'on puisse copier le lien depuis la barre d'adresse.
  useEffect(() => {
    syncUrl(selectedItem, pool);
  }, [selectedItem, pool]);

  // Changer de catégorie ferme la fiche de l'ancienne catégorie
  const changePool = (next: Pool) => {
    setPool(next);
    setSelectedItem(null);
  };

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
      const itemDesc = selectedDescription;
      
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
          "description": selectedDescription,
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

            {!session && (
              <button onClick={() => setShowLogin(true)} style={styles.loginBtn}>
                {t("Se connecter", "Sign in")}
              </button>
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
                    onChange={() => changePool("genres")}
                  />{" "}
                  {t("🎸 Genres", "🎸 Genres")}
                </label>
                <label style={styles.chipLabel}>
                  <input
                    type="radio"
                    name="pool"
                    checked={pool === "countries"}
                    onChange={() => changePool("countries")}
                  />{" "}
                  {t("🌍 Pays", "🌍 Countries")}
                </label>
                <label style={styles.chipLabel}>
                  <input
                    type="radio"
                    name="pool"
                    checked={pool === "years"}
                    onChange={() => changePool("years")}
                  />{" "}
                  {t("📅 Années", "📅 Years")}
                </label>
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <label style={styles.chipLabel}>
                  <input
                    type="radio"
                    name="wheelMode"
                    checked={wheelMode === "random"}
                    onChange={() => setWheelMode("random")}
                  />{" "}
                  {t("🎲 Complètement aléatoire", "🎲 Fully random")}
                </label>
                <label style={styles.chipLabel}>
                  <input
                    type="radio"
                    name="wheelMode"
                    checked={wheelMode === "personalized"}
                    onChange={() => setWheelMode("personalized")}
                    disabled={pool !== "genres"}
                  />{" "}
                  {t("✨ Propose-moi un truc", "✨ Suggest something")}
                </label>
              </div>
              {wheelMode === "personalized" && pool !== "genres" && (
                <p style={{ fontSize: 13, opacity: 0.7, margin: "-8px 0 0" }}>
                  {t(
                    "Disponible seulement pour les genres pour l'instant.",
                    "Only available for genres for now."
                  )}
                </p>
              )}

              <div style={styles.card}>
                <h3 style={{ marginTop: 0, textAlign: "center" }}>
                  {t("🎡 Tourne la roue", "🎡 Spin the wheel")}
                </h3>
                <Wheel
                  items={wheelNames}
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
          {tab === "profile" &&
            (session ? (
              <Profile />
            ) : (
              <section style={{ display: "grid", gap: 16 }}>
                <Passport language={language} />
                <AuthGate mode="inline" language={language} />
              </section>
            ))}
        </main>

        {showLogin && !session && (
          <div style={styles.loginOverlay} onClick={() => setShowLogin(false)}>
            <div style={styles.loginSheet} onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowLogin(false)}
                style={styles.loginClose}
                aria-label={t("Fermer", "Close")}
              >
                ✕
              </button>
              <p style={{ margin: "0 0 4px", textAlign: "center", color: "#555", fontSize: 14 }}>
                {t(
                  "Crée un compte pour sauvegarder tes notes, ton passeport et tes séries.",
                  "Create an account to save your ratings, passport and streaks."
                )}
              </p>
              <AuthGate mode="inline" language={language} />
            </div>
          </div>
        )}

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

export default App;
