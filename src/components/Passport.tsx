// src/components/Passport.tsx
// Passeport Musical : stats d'exploration + carte partageable en image.
// Données : ratings (Supabase + localStorage), spins (user_behavior), streaks (user_streaks).

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { genres } from "../data/genresLite";
import { countries } from "../data/countries";
import { C, FONT, R, WHEEL_SEGMENTS } from "../theme";
import { makeT, type Lang } from "../i18n";

interface Props {
  language?: Lang;
}

interface PassportStats {
  genresExplored: number;
  countriesExplored: number;
  totalSpins: number;
  currentStreak: number;
  longestStreak: number;
  favoriteGenre: string | null;
  favoriteRating: number;
}

const TOTAL_GENRES = genres.length;
const TOTAL_COUNTRIES = countries.length;

// Niveaux d'exploration (le fun de remplir la carte)
const LEVELS: { min: number; fr: string; en: string; emoji: string }[] = [
  { min: 0, fr: "Curieux", en: "Curious", emoji: "🌱" },
  { min: 5, fr: "Explorateur", en: "Explorer", emoji: "🧭" },
  { min: 15, fr: "Aventurier sonore", en: "Sound Adventurer", emoji: "🎒" },
  { min: 40, fr: "Globe-trotter musical", en: "Music Globetrotter", emoji: "🌍" },
  { min: 100, fr: "Ethnomusicologue", en: "Ethnomusicologist", emoji: "🎓" },
  { min: 250, fr: "Légende de la roue", en: "Wheel Legend", emoji: "👑" },
];

function getLevel(explored: number) {
  let lvl = LEVELS[0];
  for (const l of LEVELS) if (explored >= l.min) lvl = l;
  const next = LEVELS.find((l) => l.min > explored);
  return { ...lvl, nextAt: next ? next.min : null };
}

// Empêche un appel Supabase lent (mauvais réseau mobile, cold start, etc.)
// de bloquer l'affichage indéfiniment. Après `ms`, on abandonne cet appel
// précis et on continue avec ce qu'on a déjà (localStorage).
function withTimeout<T>(promise: PromiseLike<T>, ms = 6000): Promise<T | null> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), ms);
    Promise.resolve(promise)
      .then((val) => {
        clearTimeout(timer);
        resolve(val);
      })
      .catch(() => {
        clearTimeout(timer);
        resolve(null);
      });
  });
}

export default function Passport({ language = "fr" }: Props) {
  const { session } = useAuth();
  const [stats, setStats] = useState<PassportStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [sharing, setSharing] = useState(false);
  const t = makeT(language);

  useEffect(() => {
    loadStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  function readLocalStats() {
    const exploredGenres = new Set<string>();
    const exploredCountries = new Set<string>();
    let favoriteGenre: string | null = null;
    let favoriteRating = 0;

    // Ratings localStorage (fonctionne même sans connexion)
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith("rating_")) continue;
        const parts = key.split("_");
        // rating_{userId}_{type}_{name...}
        const itemType = parts[2];
        const itemName = parts.slice(3).join("_");
        const rating = parseInt(localStorage.getItem(key) || "0", 10);
        if (rating <= 0) continue;
        if (itemType === "genre") {
          exploredGenres.add(itemName);
          if (rating > favoriteRating) {
            favoriteRating = rating;
            favoriteGenre = itemName;
          }
        } else if (itemType === "country") {
          exploredCountries.add(itemName);
        }
      }
    } catch {
      /* localStorage indisponible */
    }

    return { exploredGenres, exploredCountries, favoriteGenre, favoriteRating };
  }

  async function loadStats() {
    setLoading(true);

    // 1) Stats locales : synchrone, instantané. On les affiche tout de
    // suite pour que le passeport apparaisse sans attendre le réseau.
    const local = readLocalStats();
    setStats({
      genresExplored: local.exploredGenres.size,
      countriesExplored: local.exploredCountries.size,
      totalSpins: 0,
      currentStreak: 0,
      longestStreak: 0,
      favoriteGenre: local.favoriteGenre,
      favoriteRating: local.favoriteRating,
    });
    setLoading(false);

    // 2) Données Supabase si connecté : en arrière-plan, sans bloquer
    // l'affichage. Chaque requête a un timeout pour éviter qu'un réseau
    // mobile capricieux ou un cold start Supabase laisse le passeport
    // "coincé" en chargement.
    const userId = session?.user?.id;
    if (!userId) return;

    const [ratingsRes, behaviorRes, streakRes] = await Promise.all([
      withTimeout(
        supabase.from("ratings").select("item_type, item_name, rating").eq("user_id", userId)
      ),
      withTimeout(
        supabase.from("user_behavior").select("action_type, item_type, item_name").eq("user_id", userId)
      ),
      withTimeout(
        supabase.from("user_streaks").select("current_streak, longest_streak").eq("user_id", userId).single()
      ),
    ]);

    const exploredGenres = new Set(local.exploredGenres);
    const exploredCountries = new Set(local.exploredCountries);
    let totalSpins = 0;
    let currentStreak = 0;
    let longestStreak = 0;
    let favoriteGenre = local.favoriteGenre;
    let favoriteRating = local.favoriteRating;

    (ratingsRes?.data || []).forEach((r: any) => {
      if (r.item_type === "genre") {
        exploredGenres.add(r.item_name);
        if (r.rating > favoriteRating) {
          favoriteRating = r.rating;
          favoriteGenre = r.item_name;
        }
      } else if (r.item_type === "country") {
        exploredCountries.add(r.item_name);
      }
    });

    (behaviorRes?.data || []).forEach((a: any) => {
      if (a.action_type === "spin") {
        totalSpins++;
        if (a.item_type === "genre") exploredGenres.add(a.item_name);
        if (a.item_type === "country") exploredCountries.add(a.item_name);
      }
    });

    if (streakRes?.data) {
      currentStreak = streakRes.data.current_streak || 0;
      longestStreak = streakRes.data.longest_streak || 0;
    }

    setStats({
      genresExplored: exploredGenres.size,
      countriesExplored: exploredCountries.size,
      totalSpins,
      currentStreak,
      longestStreak,
      favoriteGenre,
      favoriteRating,
    });
  }

  // ── Génération de la carte partageable (canvas 1080x1080) ──
  async function shareCard() {
    if (!stats) return;
    setSharing(true);
    try {
      const S = 1080;
      const canvas = document.createElement("canvas");
      canvas.width = S;
      canvas.height = S;
      const ctx = canvas.getContext("2d")!;

      // fond dégradé
      if (document.fonts) await document.fonts.ready;
      const F = (w: number, px: number) => `${w} ${px}px ${FONT}`;
      ctx.fillStyle = C.paper;
      ctx.fillRect(0, 0, S, S);

      // arc de progression (mini roue)
      const cx = S / 2, cy = 330, R = 170;
      const pct = Math.min(stats.genresExplored / TOTAL_GENRES, 1);
      const segColors = WHEEL_SEGMENTS.map((x) => x.bg);
      const n = segColors.length;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, R, (i / n) * 2 * Math.PI - Math.PI / 2, ((i + 1) / n) * 2 * Math.PI - Math.PI / 2);
        ctx.closePath();
        ctx.fillStyle = segColors[i];
        ctx.globalAlpha = i / n < Math.max(pct, 0.125) ? 1 : 0.2;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      // moyeu
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.55, 0, 2 * Math.PI);
      ctx.fillStyle = C.surface;
      ctx.fill();
      ctx.strokeStyle = C.ink;
      ctx.lineWidth = 8;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 2 * Math.PI);
      ctx.lineWidth = 10;
      ctx.stroke();
      // nombre au centre
      ctx.fillStyle = C.ink;
      ctx.textAlign = "center";
      ctx.font = F(800, 84);
      ctx.fillText(String(stats.genresExplored), cx, cy + 14);
      ctx.font = F(500, 26);
      ctx.fillStyle = C.muted;
      ctx.fillText(t("genres explorés", "genres explored"), cx, cy + 58);

      // titre
      ctx.fillStyle = C.ink;
      ctx.font = F(800, 58);
      ctx.fillText(t("Mon passeport musical", "My music passport"), cx, 100);

      // niveau
      const level = getLevel(stats.genresExplored);
      ctx.font = F(700, 44);
      ctx.fillStyle = C.cobalt;
      ctx.fillText(`${level.emoji} ${t(level.fr, level.en)}`, cx, 590);

      // stats en ligne
      const rows: [string, string][] = [
        [String(stats.countriesExplored), t("pays", "countries")],
        [`${stats.longestStreak}${t(" j", "d")}`, t("meilleure série", "best streak")],
        [`${Math.round(pct * 1000) / 10}%`, t("de la carte", "of the map")],
      ];
      const colW = S / 3;
      rows.forEach(([val, label], i) => {
        const x = colW * i + colW / 2;
        ctx.fillStyle = C.ink;
        ctx.font = F(800, 64);
        ctx.fillText(val, x, 720);
        ctx.fillStyle = C.muted;
        ctx.font = F(500, 26);
        ctx.fillText(label, x, 762);
      });

      // genre favori
      if (stats.favoriteGenre) {
        ctx.fillStyle = C.muted;
        ctx.font = F(500, 28);
        ctx.fillText(t("Coup de cœur :", "Favorite genre:"), cx, 850);
        ctx.fillStyle = C.ink;
        ctx.font = F(800, 46);
        const name = stats.favoriteGenre.length > 28 ? stats.favoriteGenre.slice(0, 27) + "…" : stats.favoriteGenre;
        ctx.fillText(name, cx, 902);
      }

      // footer
      ctx.fillStyle = C.cobalt;
      ctx.font = F(700, 34);
      ctx.fillText("musicterra.xyz", cx, 1010);

      const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), "image/png"));
      const file = new File([blob], "mon-passeport-musical.png", { type: "image/png" });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "MusicTerra",
          text: t(
            `J'ai exploré ${stats.genresExplored} genres musicaux sur MusicTerra 🎡 musicterra.xyz`,
            `I've explored ${stats.genresExplored} music genres on MusicTerra 🎡 musicterra.xyz`,
          `He explorado ${stats.genresExplored} géneros musicales en MusicTerra 🎡 musicterra.xyz`,
          `He explorat ${stats.genresExplored} gèneres musicals a MusicTerra 🎡 musicterra.xyz`
          ),
        });
      } else {
        // fallback : téléchargement
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "mon-passeport-musical.png";
        a.click();
        URL.revokeObjectURL(a.href);
      }
    } catch {
      /* partage annulé */
    }
    setSharing(false);
  }

  if (loading) {
    return (
      <div style={styles.card} aria-label={t("Chargement du passeport", "Loading passport")}>
        <div className="mt-skeleton" style={{ height: 24, width: "55%" }} />
        <div className="mt-skeleton" style={{ height: 10, marginTop: 20 }} />
        <div className="mt-skeleton" style={{ height: 64, marginTop: 20 }} />
      </div>
    );
  }
  if (!stats) return null;

  const level = getLevel(stats.genresExplored);
  const pct = Math.min((stats.genresExplored / TOTAL_GENRES) * 100, 100);

  return (
    <div style={styles.card}>
      <div style={styles.headerRow}>
        <div>
          <div style={styles.title}>{t("Passeport musical", "Music passport")}</div>
          <div style={styles.level}>
            {level.emoji} {t(level.fr, level.en)}
            {level.nextAt && (
              <span style={styles.levelNext}>
                {" · "}
                {t(`prochain niveau à ${level.nextAt} genres`, `next level at ${level.nextAt} genres`,
          `siguiente nivel a los ${level.nextAt} géneros`,
          `següent nivell als ${level.nextAt} gèneres`)}
              </span>
            )}
          </div>
        </div>
        <button style={styles.shareBtn} onClick={shareCard} disabled={sharing}>
          {sharing ? "…" : t("Partager", "Share")}
        </button>
      </div>

      {/* barre de progression de la carte */}
      <div style={styles.progressWrap}>
        <div style={{ ...styles.progressBar, width: `${Math.max(pct, 1.5)}%` }} />
      </div>
      <div style={styles.progressLabel}>
        {stats.genresExplored} / {TOTAL_GENRES} {t("genres explorés", "genres explored")} ({pct.toFixed(1)}%)
      </div>

      <div style={styles.grid}>
        <Stat value={stats.countriesExplored} label={t("pays", "countries")} sub={`/ ${TOTAL_COUNTRIES}`} />
        <Stat value={stats.totalSpins} label={t("spins", "spins")} />
        <Stat value={`${stats.currentStreak}${t(" j", "d")}`} label={t("série actuelle", "current streak")} />
        <Stat value={`${stats.longestStreak}${t(" j", "d")}`} label={t("record", "record")} />
      </div>

      {stats.favoriteGenre && (
        <div style={styles.favorite}>
          {t("Coup de cœur :", "Favorite:")} <strong style={{ color: C.ink }}>{stats.favoriteGenre}</strong>{" "}
          ({stats.favoriteRating}/10)
        </div>
      )}

      {!session && (
        <div style={styles.hint}>
          {t(
            "Connecte-toi pour sauvegarder ton passeport et suivre tes séries.",
            "Sign in to save your passport and track your streaks."
          )}
        </div>
      )}
    </div>
  );
}

function Stat({ value, label, sub }: { value: number | string; label: string; sub?: string }) {
  return (
    <div style={styles.stat}>
      <div style={styles.statValue}>
        {value}
        {sub && <span style={styles.statSub}>{sub}</span>}
      </div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: C.surface,
    border: `1px solid ${C.line}`,
    borderRadius: R.panel,
    padding: 20,
    color: C.ink,
  },
  headerRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" },
  title: { fontSize: 26, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 },
  level: {
    display: "inline-block",
    marginTop: 8,
    padding: "3px 10px",
    borderRadius: R.pill,
    background: C.marigoldSoft,
    color: C.ink,
    fontWeight: 600,
    fontSize: 14,
  },
  levelNext: { color: C.muted, fontWeight: 400, fontSize: 13 },
  shareBtn: {
    background: C.surface,
    color: C.cobalt,
    border: `1px solid ${C.line}`,
    borderRadius: R.pill,
    padding: "8px 14px",
    fontWeight: 600,
    fontSize: 14,
  },
  progressWrap: { background: C.soft, borderRadius: R.pill, height: 10, marginTop: 18, overflow: "hidden" },
  progressBar: {
    height: "100%",
    borderRadius: R.pill,
    background: C.cobalt,
    transition: "width .6s ease",
  },
  progressLabel: { color: C.muted, fontSize: 13, marginTop: 6 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    marginTop: 16,
    borderTop: `1px solid ${C.line}`,
  },
  stat: { padding: "14px 4px 10px", borderBottom: `1px solid ${C.line}` },
  statValue: { fontSize: 28, fontWeight: 800, color: C.ink, letterSpacing: "-0.03em" },
  statSub: { fontSize: 13, color: C.faint, fontWeight: 500, marginLeft: 3 },
  statLabel: { fontSize: 13, color: C.muted, marginTop: 0 },
  favorite: { marginTop: 14, fontSize: 15, color: C.inkSoft },
  hint: { marginTop: 14, fontSize: 13, color: C.muted },};
