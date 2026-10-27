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
import Toaster from "./components/Toaster";
import TasteProfile from "./components/TasteProfile";
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
import { excludeRated, RATINGS_CHANGED_EVENT } from "./services/ratedItems";

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
  // Incrémenté à chaque nouvelle note pour retirer l'item de la roue.
  const [ratingsVersion, setRatingsVersion] = useState(0);
  // Vrai après un lancer : la fiche s'anime et défile à l'écran. Faux pour
  // une fiche restaurée au chargement ou ouverte par un lien.
  const [hasSpun, setHasSpun] = useState(false);
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
      artists: y.artists,
      spotify: y.spotify,
    })) as Item[];
  }, [pool]);

  // Pool réellement passé à la roue : le pool complet en mode "random",
  // ou un sous-ensemble pondéré vers les genres bien notés en mode
  // "personalized". Recalculé à chaque bascule de mode/pool pour lire
  // les notes les plus fraîches du localStorage.
  const wheelItems: Item[] = useMemo(() => {
    // Dans les deux modes, la roue ne tombe jamais sur un item déjà noté.
    if (wheelMode === "personalized" && pool === "genres") {
      return buildPersonalizedGenrePool(items);
    }
    return excludeRated(items, pool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wheelMode, items, pool, ratingsVersion]);

  useEffect(() => {
    const bump = () => setRatingsVersion((v) => v + 1);
    window.addEventListener(RATINGS_CHANGED_EVENT, bump);
    return () => window.removeEventListener(RATINGS_CHANGED_EVENT, bump);
  }, []);

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
  // Ouvre une fiche précise (depuis le profil) dans l'onglet « Découvrir »
  const openItem = (next: Pool, name: string) => {
    const lower = name.toLowerCase();
    const list: Item[] =
      next === "genres"
        ? (genres as Item[])
        : next === "countries"
        ? (countries as Item[])
        : years.map((y) => ({
            name: String(y.year),
            year: y.year,
            descriptionFr: y.descriptionFr,
            descriptionEn: y.descriptionEn,
            artists: y.artists,
            spotify: y.spotify,
          })) as Item[];
    const found = list.find((i) => i.name.toLowerCase() === lower);
    if (!found) return;
    setPool(next);
    setWheelMode("random");
    setHasSpun(true);
    setSelectedItem(found);
    setTab("discover");
  };

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
    syncRatings(session?.user?.id).then(() => setRatingsVersion((v) => v + 1));
    if (session) {
      updateStreak(session.user.id).then(streak => {
        setCurrentStreak(streak);
      });
    }
  }, [session]);

  const onSpin = (name: string) => {
    const found = items.find((i) => i.name === name) || null;
    setHasSpun(true);
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
        <Toaster />
        <header style={styles.header}>
          <div style={styles.brand}>
            <img src="/favicon.svg" alt="" width={28} height={28} />
            <h1 style={styles.wordmark} className="mt-wordmark">MusicTerra</h1>
          </div>

          <div style={styles.headerActions} className="mt-header-actions">
            {currentStreak > 0 && (
              <div style={styles.streakBadge} title={t("Série en cours", "Current streak")}>
                🔥 {currentStreak}
              </div>
            )}

            <button
              onClick={() => setLanguage((l) => (l === "fr" ? "en" : "fr"))}
              style={styles.iconBtn}
              className="mt-icon-btn"
              aria-label={t("Passer en anglais", "Switch to French")}
            >
              {t("EN", "FR")}
            </button>

            <button
              onClick={() => setShowWelcome(true)}
              style={styles.iconBtn}
              className="mt-icon-btn"
              aria-label={t("À propos", "About")}
            >
              ?
            </button>

            {profile && (
              <span style={styles.userName}>
                {profile.display_name || profile.email}
              </span>
            )}

            {!session && (
              <button onClick={() => setShowLogin(true)} style={styles.loginBtn} className="mt-login-btn">
                {t("Connexion", "Sign in")}
              </button>
            )}
          </div>
        </header>

        <nav style={styles.tabsBar} aria-label={t("Sections", "Sections")}>
          {(
            [
              ["discover", "🎡", t("Découvrir", "Discover")],
              ["emerging", "🌱", t("Émergents", "Emerging")],
              ["concerts", "🎤", t("Concerts", "Concerts")],
              ["profile", "🛂", t("Profil", "Profile")],
            ] as const
          ).map(([key, icon, label]) => (
            <button
              key={key}
              style={{ ...styles.tabBtn, ...(tab === key ? styles.tabActive : {}) }}
              onClick={() => setTab(key)}
              aria-current={tab === key ? "page" : undefined}
            >
              <span style={styles.tabIcon} aria-hidden>
                {icon}
              </span>
              {label}
            </button>
          ))}
        </nav>

        <main style={styles.main}>
          {tab === "discover" && (
            <section style={{ display: "grid", gap: 16 }}>
              <div style={styles.segRow} role="group" aria-label={t("Roue", "Wheel")}>
                {(
                  [
                    ["genres", "🎸", t("Genres", "Genres")],
                    ["countries", "🌍", t("Pays", "Countries")],
                    ["years", "📅", t("Années", "Years")],
                  ] as const
                ).map(([key, icon, label]) => (
                  <button
                    key={key}
                    style={{ ...styles.seg, ...(pool === key ? styles.segActive : {}) }}
                    onClick={() => changePool(key)}
                    aria-pressed={pool === key}
                  >
                    {icon} {label}
                  </button>
                ))}
              </div>

              <div style={styles.segRow} role="group" aria-label={t("Mode", "Mode")}>
                <button
                  style={{ ...styles.seg, ...(wheelMode === "random" ? styles.segActive : {}) }}
                  onClick={() => setWheelMode("random")}
                  aria-pressed={wheelMode === "random"}
                >
                  🎲 {t("Au hasard", "Random")}
                </button>
                <button
                  style={{
                    ...styles.seg,
                    ...(wheelMode === "personalized" ? styles.segActive : {}),
                    ...(pool !== "genres" ? styles.segDisabled : {}),
                  }}
                  onClick={() => setWheelMode("personalized")}
                  disabled={pool !== "genres"}
                  aria-pressed={wheelMode === "personalized"}
                >
                  ✨ {t("Propose-moi un truc", "Suggest something")}
                </button>
              </div>
              {pool !== "genres" && (
                <p style={styles.hint}>
                  {t(
                    "« Propose-moi un truc » marche seulement avec les genres pour l'instant.",
                    "“Suggest something” only works with genres for now."
                  )}
                </p>
              )}

              <div style={styles.wheelCard}>
                <Wheel
                  items={wheelNames}
                  onSelect={onSpin}
                  language={language}
                />
              </div>

              {selectedItem && (
                <ResultCard
                  key={selectedItem.name}
                  item={selectedItem}
                  pool={pool}
                  language={language}
                  justSpun={hasSpun}
                  onOpenGenre={(name) => openItem("genres", name)}
                />
              )}
            </section>
          )}

          {tab === "emerging" && (
            <EmergingArtists language={language} onSignIn={() => setShowLogin(true)} />
          )}
          {tab === "concerts" && (
            <Concerts
              language={language}
              onSpin={() => setTab("discover")}
              suggestedArtists={
                selectedItem && !isYear(selectedItem) && selectedItem.artists?.length
                  ? selectedItem.artists
                  : artistsFromTopRatedGenres()
              }
            />
          )}
          {tab === "profile" &&
            (session ? (
              <Profile
                language={language}
                onOpen={openItem}
                onSpin={() => setTab("discover")}
              />
            ) : (
              <section style={{ display: "grid", gap: 16 }}>
                <Passport language={language} />
                <TasteProfile language={language} onOpen={openItem} onSpin={() => setTab("discover")} />
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
              <AuthGate mode="sheet" language={language} />
            </div>
          </div>
        )}

        <footer style={styles.footer}>
          © {new Date().getFullYear()} MusicTerra · {t("La musique du monde, une roue à la fois", "World music, one spin at a time")}
        </footer>
      </div>
    </>
  );
};

export default App;
