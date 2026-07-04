// src/components/Passport.tsx
// Passeport Musical : stats d'exploration + carte partageable en image.
// Données : ratings (Supabase + localStorage), spins (user_behavior), streaks (user_streaks).

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { genres } from "../data/genres";
import { countries } from "../data/countries";

interface Props {
  language?: "fr" | "en";
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

export default function Passport({ language = "fr" }: Props) {
  const { session } = useAuth();
  const [stats, setStats] = useState<PassportStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [sharing, setSharing] = useState(false);
  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  useEffect(() => {
    loadStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  async function loadStats() {
    setLoading(true);
    const exploredGenres = new Set<string>();
    const exploredCountries = new Set<string>();
    let totalSpins = 0;
    let currentStreak = 0;
    let longestStreak = 0;
    let favoriteGenre: string | null = null;
    let favoriteRating = 0;

    const userId = session?.user?.id;

    // 1) Ratings localStorage (fonctionne même sans connexion)
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

    // 2) Données Supabase si connecté
    if (userId) {
      try {
        const [ratingsRes, behaviorRes, streakRes] = await Promise.all([
          supabase
            .from("ratings")
            .select("item_type, item_name, rating")
            .eq("user_id", userId),
          supabase
            .from("user_behavior")
            .select("action_type, item_type, item_name")
            .eq("user_id", userId),
          supabase
            .from("user_streaks")
            .select("current_streak, longest_streak")
            .eq("user_id", userId)
            .single(),
        ]);

        (ratingsRes.data || []).forEach((r: any) => {
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

        (behaviorRes.data || []).forEach((a: any) => {
          if (a.action_type === "spin") {
            totalSpins++;
            if (a.item_type === "genre") exploredGenres.add(a.item_name);
            if (a.item_type === "country") exploredCountries.add(a.item_name);
          }
        });

        if (streakRes.data) {
          currentStreak = streakRes.data.current_streak || 0;
          longestStreak = streakRes.data.longest_streak || 0;
        }
      } catch {
        /* on affiche ce qu'on a */
      }
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
    setLoading(false);
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
      const grad = ctx.createLinearGradient(0, 0, 0, S);
      grad.addColorStop(0, "#1a1a2e");
      grad.addColorStop(1, "#0f0f1e");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, S, S);

      // arc de progression (mini roue)
      const cx = S / 2, cy = 330, R = 170;
      const pct = Math.min(stats.genresExplored / TOTAL_GENRES, 1);
      const segColors = ["#e94560", "#ff9f43", "#feca57", "#1db954", "#48dbfb", "#54a0ff", "#5f27cd", "#f368e0"];
      const n = segColors.length;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, R, (i / n) * 2 * Math.PI - Math.PI / 2, ((i + 1) / n) * 2 * Math.PI - Math.PI / 2);
        ctx.closePath();
        ctx.fillStyle = segColors[i];
        ctx.globalAlpha = i / n < pct ? 1 : 0.18;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      // moyeu
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.55, 0, 2 * Math.PI);
      ctx.fillStyle = "#1a1a2e";
      ctx.fill();
      ctx.strokeStyle = "#e94560";
      ctx.lineWidth = 6;
      ctx.stroke();
      // nombre au centre
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.font = "bold 84px system-ui, sans-serif";
      ctx.fillText(String(stats.genresExplored), cx, cy + 14);
      ctx.font = "28px system-ui, sans-serif";
      ctx.fillStyle = "#a6a6c1";
      ctx.fillText(t("genres explorés", "genres explored"), cx, cy + 58);

      // titre
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 56px system-ui, sans-serif";
      ctx.fillText(t("Mon Passeport Musical", "My Musical Passport"), cx, 100);

      // niveau
      const level = getLevel(stats.genresExplored);
      ctx.font = "bold 44px system-ui, sans-serif";
      ctx.fillStyle = "#e94560";
      ctx.fillText(`${level.emoji} ${language === "fr" ? level.fr : level.en}`, cx, 590);

      // stats en ligne
      const rows: [string, string][] = [
        [String(stats.countriesExplored), t("pays", "countries")],
        [`${stats.longestStreak}${t(" j", "d")}`, t("meilleure série", "best streak")],
        [`${Math.round(pct * 1000) / 10}%`, t("de la carte", "of the map")],
      ];
      const colW = S / 3;
      rows.forEach(([val, label], i) => {
        const x = colW * i + colW / 2;
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 64px system-ui, sans-serif";
        ctx.fillText(val, x, 720);
        ctx.fillStyle = "#a6a6c1";
        ctx.font = "26px system-ui, sans-serif";
        ctx.fillText(label, x, 762);
      });

      // genre favori
      if (stats.favoriteGenre) {
        ctx.fillStyle = "#a6a6c1";
        ctx.font = "28px system-ui, sans-serif";
        ctx.fillText(t("Coup de cœur :", "Favorite genre:"), cx, 850);
        ctx.fillStyle = "#feca57";
        ctx.font = "bold 44px system-ui, sans-serif";
        const name = stats.favoriteGenre.length > 28 ? stats.favoriteGenre.slice(0, 27) + "…" : stats.favoriteGenre;
        ctx.fillText(name, cx, 902);
      }

      // footer
      ctx.fillStyle = "#e94560";
      ctx.font = "bold 34px system-ui, sans-serif";
      ctx.fillText("musicterra.xyz", cx, 1010);

      const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), "image/png"));
      const file = new File([blob], "mon-passeport-musical.png", { type: "image/png" });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "MusicTerra",
          text: t(
            `J'ai exploré ${stats.genresExplored} genres musicaux sur MusicTerra 🎡 musicterra.xyz`,
            `I've explored ${stats.genresExplored} music genres on MusicTerra 🎡 musicterra.xyz`
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
    return <div style={styles.card}>{t("Chargement du passeport…", "Loading passport…")}</div>;
  }
  if (!stats) return null;

  const level = getLevel(stats.genresExplored);
  const pct = Math.min((stats.genresExplored / TOTAL_GENRES) * 100, 100);

  return (
    <div style={styles.card}>
      <div style={styles.headerRow}>
        <div>
          <div style={styles.title}>🎫 {t("Passeport Musical", "Musical Passport")}</div>
          <div style={styles.level}>
            {level.emoji} {language === "fr" ? level.fr : level.en}
            {level.nextAt && (
              <span style={styles.levelNext}>
                {" · "}
                {t(`prochain niveau à ${level.nextAt} genres`, `next level at ${level.nextAt} genres`)}
              </span>
            )}
          </div>
        </div>
        <button style={styles.shareBtn} onClick={shareCard} disabled={sharing}>
          {sharing ? "…" : t("📤 Partager", "📤 Share")}
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
          {t("Coup de cœur :", "Favorite:")} <strong style={{ color: "#feca57" }}>{stats.favoriteGenre}</strong>{" "}
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
    background: "linear-gradient(160deg, #23233d 0%, #1a1a2e 100%)",
    border: "1px solid #2a2a45",
    borderRadius: 16,
    padding: 20,
    color: "#eaeaf2",
    marginBottom: 24,
  },
  headerRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" },
  title: { fontSize: 20, fontWeight: 700 },
  level: { color: "#e94560", fontWeight: 600, marginTop: 4, fontSize: 15 },
  levelNext: { color: "#a6a6c1", fontWeight: 400, fontSize: 13 },
  shareBtn: {
    background: "#e94560",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "10px 16px",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
  },
  progressWrap: { background: "#12121f", borderRadius: 999, height: 12, marginTop: 16, overflow: "hidden" },
  progressBar: {
    height: "100%",
    borderRadius: 999,
    background: "linear-gradient(90deg, #e94560, #ff9f43, #feca57)",
    transition: "width .6s ease",
  },
  progressLabel: { color: "#a6a6c1", fontSize: 13, marginTop: 6 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 10, marginTop: 16 },
  stat: { background: "#12121f", borderRadius: 12, padding: "12px 8px", textAlign: "center" },
  statValue: { fontSize: 24, fontWeight: 800, color: "#fff" },
  statSub: { fontSize: 12, color: "#a6a6c1", fontWeight: 400, marginLeft: 3 },
  statLabel: { fontSize: 12, color: "#a6a6c1", marginTop: 2 },
  favorite: { marginTop: 14, fontSize: 15 },
  hint: { marginTop: 14, fontSize: 13, color: "#a6a6c1", fontStyle: "italic" },
};
