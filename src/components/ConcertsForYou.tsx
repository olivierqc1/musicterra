// src/components/ConcertsForYou.tsx
// « Pour toi, près de chez toi » : 5 concerts à venir autour du lieu choisi,
// triés selon les goûts (src/lib/concertPicks.ts). Il faut d'abord avoir
// noté MIN_RATED_FOR_CONCERTS genres.

import { useCallback, useEffect, useMemo, useState } from "react";
import type React from "react";
import { MapPin } from "lucide-react";
import { buildTasteProfile } from "../lib/tasteProfile";
import {
  MIN_RATED_FOR_CONCERTS,
  classificationsToQuery,
  pickConcerts,
  type ConcertPick,
} from "../lib/concertPicks";
import { searchNearbyEvents, type NearbyEvent, type Place } from "../services/ticketmaster";
import { RATINGS_CHANGED_EVENT } from "../services/ratedItems";
import { toast } from "../lib/toast";
import { C, R } from "../theme";
import Loader from "./Loader";

interface Props {
  language: "fr" | "en";
  onSpin?: () => void;
}

const PLACE_KEY = "mt_concert_place";

function loadPlace(): Place | null {
  try {
    const raw = localStorage.getItem(PLACE_KEY);
    return raw ? (JSON.parse(raw) as Place) : null;
  } catch {
    return null;
  }
}

function savePlace(p: Place | null) {
  try {
    if (p) localStorage.setItem(PLACE_KEY, JSON.stringify(p));
    else localStorage.removeItem(PLACE_KEY);
  } catch {
    /* ignore */
  }
}

export default function ConcertsForYou({ language, onSpin }: Props) {
  const t = (fr: string, en: string) => (language === "fr" ? fr : en);
  const [version, setVersion] = useState(0);
  const [place, setPlace] = useState<Place | null>(loadPlace);
  const [cityInput, setCityInput] = useState("");
  const [locating, setLocating] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [picks, setPicks] = useState<ConcertPick[]>([]);

  useEffect(() => {
    const bump = () => setVersion((v) => v + 1);
    window.addEventListener(RATINGS_CHANGED_EVENT, bump);
    return () => window.removeEventListener(RATINGS_CHANGED_EVENT, bump);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const profile = useMemo(() => buildTasteProfile(), [version]);
  const enough = profile.genresRated >= MIN_RATED_FOR_CONCERTS;

  const load = useCallback(
    async (where: Place) => {
      setStatus("loading");
      const styles = classificationsToQuery(profile);
      const calls = (styles.length ? styles : [undefined]).map((s) => searchNearbyEvents(where, s, 50));
      let results = await Promise.all(calls);
      let events: NearbyEvent[] = results.flatMap((r) => r.events);
      // Peu de concerts dans ces styles : on regarde aussi tous les styles
      if (events.length < 10 && styles.length) {
        const all = await searchNearbyEvents(where, undefined, 100);
        results = [...results, all];
        events = [...events, ...all.events];
      }
      if (!results.some((r) => r.ok)) {
        setStatus("error");
        return;
      }
      setPicks(pickConcerts(events, profile));
      setStatus("ready");
    },
    [profile]
  );

  useEffect(() => {
    if (enough && place) load(place);
  }, [enough, place, load]);

  const pickMyPosition = () => {
    if (!navigator.geolocation) {
      toast(t("Ton navigateur ne donne pas ta position. Entre une ville.", "Your browser can't share your location. Enter a city."), "info");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        const p: Place = { kind: "gps", lat: pos.coords.latitude, lng: pos.coords.longitude };
        savePlace(p);
        setPlace(p);
      },
      () => {
        setLocating(false);
        toast(t("Position refusée ou introuvable. Entre une ville.", "Location denied or unavailable. Enter a city."), "error");
      },
      { timeout: 10000, maximumAge: 600000 }
    );
  };

  const pickCity = () => {
    const city = cityInput.trim();
    if (!city) return;
    const p: Place = { kind: "city", city };
    savePlace(p);
    setPlace(p);
  };

  const changePlace = () => {
    savePlace(null);
    setPlace(null);
    setPicks([]);
    setStatus("idle");
  };

  const placeLabel = place
    ? place.kind === "city"
      ? place.city
      : t("ta position", "your location")
    : "";

  // ── Pas assez de notes ──
  if (!enough) {
    const n = profile.genresRated;
    return (
      <section style={st.card}>
        <h2 style={st.title}>{t("Des concerts pour toi, près de chez toi", "Concerts for you, near you")}</h2>
        <p style={st.lead}>
          {t(
            `Note ${MIN_RATED_FOR_CONCERTS} genres sur la roue : on saura ce que tu aimes et on te proposera 5 concerts à venir autour de toi.`,
            `Rate ${MIN_RATED_FOR_CONCERTS} genres on the wheel so we know your taste, and we'll suggest 5 upcoming concerts near you.`
          )}
        </p>
        <div style={st.progressHead}>
          <span>{t("Genres notés", "Genres rated")}</span>
          <strong>
            {n} / {MIN_RATED_FOR_CONCERTS}
          </strong>
        </div>
        <div style={st.track}>
          <div style={{ ...st.fill, width: `${(n / MIN_RATED_FOR_CONCERTS) * 100}%` }} />
        </div>
        {onSpin && (
          <button style={st.primary} onClick={onSpin}>
            {t("Tourner la roue", "Spin the wheel")}
          </button>
        )}
      </section>
    );
  }

  // ── Choix du lieu ──
  if (!place) {
    return (
      <section style={st.card}>
        <h2 style={st.title}>{t("Des concerts pour toi, près de chez toi", "Concerts for you, near you")}</h2>
        <p style={st.lead}>{t("Où est-ce qu'on cherche ?", "Where should we look?")}</p>
        <button style={st.primary} onClick={pickMyPosition} disabled={locating}>
          <MapPin size={17} aria-hidden style={{ marginRight: 6, verticalAlign: "-3px" }} />
          {locating ? t("Localisation…", "Locating…") : t("Utiliser ma position", "Use my location")}
        </button>
        <div style={st.or}>{t("ou", "or")}</div>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && pickCity()}
            placeholder={t("Ville, ex. Barcelona", "City, e.g. Barcelona")}
            style={st.input}
            aria-label={t("Ville", "City")}
          />
          <button style={st.secondary} onClick={pickCity}>
            OK
          </button>
        </div>
      </section>
    );
  }

  // ── Résultats ──
  return (
    <section style={st.card}>
      <h2 style={st.title}>{t("Pour toi, près de chez toi", "For you, near you")}</h2>
      <p style={st.placeRow}>
        <MapPin size={15} aria-hidden style={{ flexShrink: 0 }} />
        <span>{t(`Autour de ${placeLabel}, d'ici 3 mois`, `Around ${placeLabel}, next 3 months`)}</span>
        <button style={st.link} onClick={changePlace}>
          {t("Changer", "Change")}
        </button>
      </p>

      {status === "loading" && <Loader label={t("On fouille l'agenda des salles…", "Checking venue calendars…")} />}

      {status === "error" && (
        <p style={st.lead}>
          {t(
            "La billetterie ne répond pas pour l'instant. Réessaie dans quelques minutes.",
            "The ticketing service isn't responding right now. Try again in a few minutes."
          )}
        </p>
      )}

      {status === "ready" && picks.length === 0 && (
        <p style={st.lead}>
          {t(
            `Aucun concert dans tes styles autour de ${placeLabel} pour l'instant. Essaie une grande ville voisine.`,
            `No concerts in your styles around ${placeLabel} right now. Try a nearby big city.`
          )}
        </p>
      )}

      {status === "ready" && picks.length > 0 && (
        <ol style={st.list}>
          {picks.map((p) => (
            <li key={p.event.id} style={st.item}>
              <DateBadge date={p.date} language={language} />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={st.artist}>{p.artist}</div>
                <div style={st.venue}>
                  {[p.venue, p.city].filter(Boolean).join(", ")}
                  {p.time ? ` · ${p.time.slice(0, 5)}` : ""}
                </div>
                <span style={st.reason}>{reasonText(p, profile.allFamilies, language)}</span>
              </div>
              <a href={p.url} target="_blank" rel="noreferrer" style={st.tickets}>
                {t("Billets", "Tickets")}
              </a>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function reasonText(
  p: ConcertPick,
  families: { key: string; fr: string; en: string }[],
  language: "fr" | "en"
): string {
  if (p.because) {
    return language === "fr"
      ? `Artiste de ${p.because.genre}, que tu as noté ${p.because.rating}/10`
      : `Artist from ${p.because.genre}, which you rated ${p.because.rating}/10`;
  }
  const idx = families.findIndex((f) => f.key === p.family);
  const f = families[idx];
  if (!f) return "";
  // « le folk et les musiques traditionnelles » → « le folk »
  const short = (s: string) => s.split(/,| et | and /)[0];
  const name = language === "fr" ? short(f.fr) : short(f.en);
  if (idx === 0) return language === "fr" ? `${cap(name)}, ton style n° 1` : `${cap(name)}, your top style`;
  return language === "fr" ? `Parce que tu aimes ${name}` : `Because you like ${name}`;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function DateBadge({ date, language }: { date: string; language: "fr" | "en" }) {
  const d = new Date(`${date}T12:00:00`);
  const locale = language === "fr" ? "fr-FR" : "en-GB";
  return (
    <div style={st.dateBadge} aria-label={d.toLocaleDateString(locale, { dateStyle: "full" })}>
      <span style={st.dateDay}>{d.getDate()}</span>
      <span style={st.dateMonth}>{d.toLocaleDateString(locale, { month: "short" }).replace(".", "")}</span>
      <span style={st.dateWeekday}>{d.toLocaleDateString(locale, { weekday: "short" }).replace(".", "")}</span>
    </div>
  );
}

const st: Record<string, React.CSSProperties> = {
  card: {
    background: C.surface,
    border: `1px solid ${C.line}`,
    borderRadius: R.panel,
    padding: "22px 18px",
    color: C.ink,
  },
  title: { margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08 },
  lead: { margin: "8px 0 0", fontSize: 16, color: C.inkSoft, lineHeight: 1.5 },
  progressHead: { display: "flex", justifyContent: "space-between", marginTop: 18, fontSize: 14, color: C.muted },
  track: { height: 10, borderRadius: R.pill, background: C.soft, overflow: "hidden", marginTop: 6 },
  fill: { height: "100%", borderRadius: R.pill, background: C.marigold, transition: "width .4s ease" },
  primary: {
    marginTop: 16,
    padding: "12px 20px",
    borderRadius: R.pill,
    border: "none",
    background: C.cobalt,
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
  },
  secondary: {
    padding: "0 18px",
    borderRadius: R.pill,
    border: `1px solid ${C.line}`,
    background: C.surface,
    color: C.ink,
    fontWeight: 700,
  },
  or: { margin: "14px 0 10px", fontSize: 13, color: C.faint },
  input: {
    flex: 1,
    minWidth: 0,
    height: 44,
    padding: "0 14px",
    borderRadius: R.control,
    border: `1px solid ${C.line}`,
    fontSize: 16,
    color: C.ink,
  },
  placeRow: {
    margin: "8px 0 0",
    fontSize: 14,
    color: C.muted,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
  },
  link: { border: "none", background: "none", padding: 0, color: C.cobalt, fontWeight: 600, fontSize: 14 },
  list: { listStyle: "none", margin: "14px 0 0", padding: 0, borderTop: `1px solid ${C.line}` },
  item: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 0",
    borderBottom: `1px solid ${C.line}`,
  },
  dateBadge: {
    flexShrink: 0,
    width: 54,
    padding: "6px 0",
    borderRadius: R.control,
    background: C.ink,
    color: "#fff",
    display: "grid",
    justifyItems: "center",
    lineHeight: 1.05,
  },
  dateDay: { fontSize: 22, fontWeight: 800 },
  dateMonth: { fontSize: 12, fontWeight: 600, textTransform: "lowercase" },
  dateWeekday: { fontSize: 11, color: C.marigold, marginTop: 2 },
  artist: { fontSize: 17, fontWeight: 700, overflowWrap: "anywhere" },
  venue: { fontSize: 13, color: C.muted, marginTop: 1 },
  reason: {
    display: "inline-block",
    marginTop: 6,
    padding: "2px 9px",
    borderRadius: R.pill,
    background: C.marigoldSoft,
    fontSize: 12,
    fontWeight: 600,
  },
  tickets: {
    flexShrink: 0,
    padding: "8px 14px",
    borderRadius: R.pill,
    border: `1px solid ${C.line}`,
    color: C.cobalt,
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
  },
};
