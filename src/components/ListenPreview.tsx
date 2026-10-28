// src/components/ListenPreview.tsx
// Écoute directement dans la fiche, sans quitter l'app :
// - si l'élément a une vraie playlist Spotify, on affiche le lecteur Spotify ;
// - sinon, extraits de 30 s via l'API publique de Deezer (sans clé), à partir
//   des artistes de la fiche. L'API Deezer n'autorise pas les appels fetch
//   depuis un autre site (CORS) : on passe par JSONP (balise <script>).
// En cas d'échec (réseau, aucun résultat), le composant ne s'affiche pas.

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { makeT, type Lang } from "../i18n";

interface Props {
  name: string;
  artists?: string[];
  spotify?: string;
  language: Lang;
}

interface Track {
  title: string;
  artist: string;
  preview: string;
  cover?: string;
  link?: string;
}

interface DeezerTrack {
  title?: string;
  preview?: string;
  link?: string;
  artist?: { name?: string };
  album?: { cover_medium?: string };
}

// URL d'intégration Spotify pour une playlist / un album / un artiste
function spotifyEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const m = url.match(/open\.spotify\.com\/(playlist|album|artist|track)\/([A-Za-z0-9]+)/);
  return m ? `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator` : null;
}

let jsonpCounter = 0;

function deezerSearch(query: string, timeoutMs = 8000): Promise<DeezerTrack[]> {
  return new Promise((resolve, reject) => {
    const callbackName = `__mtDeezer${Date.now()}_${jsonpCounter++}`;
    const script = document.createElement("script");
    const w = window as unknown as Record<string, unknown>;

    const cleanup = () => {
      delete w[callbackName];
      script.remove();
      window.clearTimeout(timer);
    };
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error("timeout"));
    }, timeoutMs);

    w[callbackName] = (response: { data?: DeezerTrack[] }) => {
      cleanup();
      resolve(Array.isArray(response?.data) ? response.data : []);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error("network"));
    };
    script.src =
      `https://api.deezer.com/search?q=${encodeURIComponent(query)}` +
      `&limit=5&output=jsonp&callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

// Cherche un extrait par artiste (les 4 premiers), en ne gardant que les
// morceaux dont l'artiste correspond vraiment.
async function findTracks(artists: string[]): Promise<Track[]> {
  const picks = artists.filter(Boolean).slice(0, 4);
  const results = await Promise.allSettled(
    picks.map((artist) => deezerSearch(`artist:"${artist}"`))
  );
  const tracks: Track[] = [];
  results.forEach((res, i) => {
    if (res.status !== "fulfilled") return;
    const wanted = picks[i].toLowerCase();
    const hit =
      res.value.find((t) => t.preview && t.artist?.name?.toLowerCase() === wanted) ||
      res.value.find((t) => t.preview);
    if (hit?.preview) {
      tracks.push({
        title: hit.title || "",
        artist: hit.artist?.name || picks[i],
        preview: hit.preview,
        cover: hit.album?.cover_medium,
        link: hit.link,
      });
    }
  });
  return tracks;
}

export default function ListenPreview({ name, artists = [], spotify, language }: Props) {
  const t = makeT(language);
  const embed = spotifyEmbedUrl(spotify);

  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "empty">("idle");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [index, setIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const artistsKey = artists.join("|");

  // Nouvelle fiche : on repart de zéro (le chargement se fait au clic)
  useEffect(() => {
    setStatus("idle");
    setTracks([]);
    setIndex(0);
  }, [name, artistsKey]);

  if (embed) {
    return (
      <iframe
        title={t(`Écouter ${name} sur Spotify`, `Listen to ${name} on Spotify`,
          `Escuchar ${name} en Spotify`,
          `Escoltar ${name} a Spotify`)}
        src={embed}
        width="100%"
        height="152"
        style={{ border: 0, borderRadius: 12, marginTop: 12 }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    );
  }

  if (!artists.length || status === "empty") return null;

  const load = async () => {
    setStatus("loading");
    try {
      const found = await findTracks(artists);
      setTracks(found);
      setIndex(0);
      setStatus(found.length ? "ready" : "empty");
    } catch {
      setStatus("empty");
    }
  };

  if (status !== "ready") {
    return (
      <button
        onClick={load}
        disabled={status === "loading"}
        style={{ ...styles.listenBtn, ...(status === "loading" ? { opacity: 0.7 } : {}) }}
      >
        {status === "loading"
          ? t("Recherche d'extraits…", "Finding previews…")
          : t("▶ Écouter des extraits", "▶ Listen to previews")}
      </button>
    );
  }

  const track = tracks[index];
  const next = () => setIndex((i) => (i + 1) % tracks.length);

  return (
    <div style={styles.player}>
      {track.cover ? (
        <img src={track.cover} alt="" width={56} height={56} style={styles.cover} />
      ) : null}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={styles.trackTitle}>{track.title}</div>
        <div style={styles.trackArtist}>{track.artist}</div>
        <audio
          key={track.preview}
          ref={audioRef}
          src={track.preview}
          controls
          autoPlay
          onEnded={tracks.length > 1 ? next : undefined}
          style={{ width: "100%", height: 36, marginTop: 6 }}
        />
        <div style={styles.playerFooter}>
          <span>{t("Extrait de 30 s · Deezer", "30 s preview · Deezer")}</span>
          {tracks.length > 1 && (
            <button onClick={next} style={styles.nextBtn}>
              {t("Suivant", "Next")} ({index + 1}/{tracks.length}) ⏭
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  listenBtn: {
    marginTop: 12,
    padding: "10px 16px",
    borderRadius: 999,
    border: "none",
    background: "#1f1f2e",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  player: {
    marginTop: 12,
    display: "flex",
    gap: 12,
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    background: "#F4F6FB",
    border: "1px solid rgba(44, 63, 209, 0.2)",
  },
  cover: {
    borderRadius: 8,
    objectFit: "cover",
    flexShrink: 0,
  },
  trackTitle: {
    fontWeight: 600,
    fontSize: 14,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  trackArtist: {
    fontSize: 13,
    color: "#5A6183",
  },
  playerFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
    fontSize: 11,
    color: "#8A90AD",
  },
  nextBtn: {
    border: "none",
    background: "none",
    color: "#2C3FD1",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    padding: 0,
  },
};
