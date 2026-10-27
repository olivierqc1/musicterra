// src/components/TasteProfile.tsx
// « Ton portrait musical » : ce que tes notes disent de tes goûts, et où
// aller ensuite. Chaque genre ou pays se touche pour ouvrir sa fiche.
// Calculs dans src/lib/tasteProfile.ts.

import { useEffect, useMemo, useState } from "react";
import type React from "react";
import { ChevronRight } from "lucide-react";
import { buildTasteProfile, type TasteProfile as Portrait } from "../lib/tasteProfile";
import { RATINGS_CHANGED_EVENT } from "../services/ratedItems";
import { C, R, WHEEL_SEGMENTS } from "../theme";

export type OpenItem = (pool: "genres" | "countries" | "years", name: string) => void;

interface Props {
  language: "fr" | "en";
  onOpen?: OpenItem;
  /** Bouton de l'état vide : retour à la roue. */
  onSpin?: () => void;
}

const MIN_GENRES = 3;

const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const shortLabel = (fr: string) => capitalize(fr.replace(/^(le |la |les |l')/, ""));

export default function TasteProfile({ language, onOpen, onSpin }: Props) {
  const t = (fr: string, en: string) => (language === "fr" ? fr : en);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const bump = () => setVersion((v) => v + 1);
    window.addEventListener(RATINGS_CHANGED_EVENT, bump);
    return () => window.removeEventListener(RATINGS_CHANGED_EVENT, bump);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const p: Portrait = useMemo(() => buildTasteProfile(), [version]);

  if (p.genresRated < MIN_GENRES) {
    const left = MIN_GENRES - p.genresRated;
    return (
      <section style={s.card} aria-labelledby="portrait-title">
        <h2 id="portrait-title" style={s.title}>
          {t("Ton portrait musical", "Your music portrait")}
        </h2>
        <p style={s.lead}>
          {t(
            `Note encore ${left} genre${left > 1 ? "s" : ""} et on te montre ce que tes goûts disent de toi, avec des genres et des pays à explorer ensuite.`,
            `Rate ${left} more genre${left > 1 ? "s" : ""} and we'll show you what your taste says about you, plus genres and countries to explore next.`
          )}
        </p>
        {onSpin && (
          <button style={s.primary} onClick={onSpin}>
            {t("Tourner la roue", "Spin the wheel")}
          </button>
        )}
      </section>
    );
  }

  const [first, ...others] = p.families;
  const label = (f: { fr: string; en: string }) => (language === "fr" ? f.fr : f.en);
  const restText = others.slice(0, 2).map(label);
  const avg = p.average.toFixed(1).replace(".", language === "fr" ? "," : ".");

  return (
    <section style={s.card} aria-labelledby="portrait-title">
      <span style={s.kicker}>{t("Ton portrait musical", "Your music portrait")}</span>

      {first ? (
        <>
          <h2 id="portrait-title" style={s.headline}>
            {t(`Toi, c'est surtout ${first.fr}`, `You're mostly into ${first.en}`)}
          </h2>
          {restText.length > 0 && (
            <p style={s.lead}>
              {t("Et aussi ", "Also ")}
              {restText.join(t(" et ", " and "))}.
            </p>
          )}
        </>
      ) : (
        <h2 id="portrait-title" style={s.headline}>
          {t("Tes goûts sont inclassables", "Your taste defies categories")}
        </h2>
      )}

      <p style={s.meta}>
        {t(
          `${p.genresRated} genres notés, ${avg}/10 en moyenne`,
          `${p.genresRated} genres rated, ${avg}/10 on average`
        )}
      </p>

      {p.families.length > 0 && (
        <div style={s.bars} aria-label={t("Tes familles de styles", "Your style families")}>
          {p.families.map((f, i) => (
            <div key={f.key}>
              <div style={s.barHead}>
                <span style={s.barLabel}>{language === "fr" ? shortLabel(f.fr) : capitalize(f.en)}</span>
                <span style={s.barPct}>{Math.round(f.share * 100)} %</span>
              </div>
              <div style={s.track}>
                <div
                  style={{
                    ...s.fill,
                    width: `${Math.max(f.share * 100, 4)}%`,
                    background: WHEEL_SEGMENTS[(i * 2) % WHEEL_SEGMENTS.length].bg,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {p.top.length > 0 && (
        <Block title={t("Tes coups de cœur", "Your favorites")}>
          {p.top.map((r) => (
            <Row
              key={r.name}
              onClick={onOpen ? () => onOpen("genres", r.name) : undefined}
              title={capitalize(r.name)}
              right={<span style={s.score}>{r.rating}/10</span>}
            />
          ))}
        </Block>
      )}

      {p.suggestions.length > 0 && (
        <Block
          title={t("À écouter ensuite", "Listen to next")}
          hint={t("Proches de ce que tu as aimé, pas encore notés.", "Close to what you liked, not rated yet.")}
        >
          {p.suggestions.map((sg) => (
            <Row
              key={sg.name}
              onClick={onOpen ? () => onOpen("genres", sg.name) : undefined}
              title={capitalize(sg.name)}
              sub={t(
                `Parce que tu as aimé ${sg.because} (${sg.becauseRating}/10)`,
                `Because you liked ${sg.because} (${sg.becauseRating}/10)`
              )}
            />
          ))}
        </Block>
      )}

      {p.countriesToExplore.length > 0 && (
        <Block
          title={t("Pays à approfondir", "Countries to dig into")}
          hint={t(
            "Leurs scènes reviennent dans tes genres préférés.",
            "Their scenes keep coming up in your favorite genres."
          )}
        >
          {p.countriesToExplore.map((c) => (
            <Row
              key={c.country}
              onClick={onOpen ? () => onOpen("countries", c.country) : undefined}
              title={c.country}
              sub={
                c.examples.length
                  ? t("Vu dans ", "Seen in ") + c.examples.slice(0, 2).join(", ")
                  : undefined
              }
            />
          ))}
        </Block>
      )}
    </section>
  );
}

function Block({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 26 }}>
      <h3 style={s.blockTitle}>{title}</h3>
      {hint && <p style={s.blockHint}>{hint}</p>}
      <div style={s.list}>{children}</div>
    </div>
  );
}

function Row({
  title,
  sub,
  right,
  onClick,
}: {
  title: string;
  sub?: string;
  right?: React.ReactNode;
  onClick?: () => void;
}) {
  const content = (
    <>
      <span style={{ minWidth: 0, flex: 1 }}>
        <span style={s.rowTitle}>{title}</span>
        {sub && <span style={s.rowSub}>{sub}</span>}
      </span>
      {right}
      {onClick && <ChevronRight size={18} color={C.faint} aria-hidden style={{ flexShrink: 0 }} />}
    </>
  );
  return onClick ? (
    <button type="button" onClick={onClick} style={s.row}>
      {content}
    </button>
  ) : (
    <div style={s.row}>{content}</div>
  );
}

const s: Record<string, React.CSSProperties> = {
  card: {
    background: C.surface,
    border: `1px solid ${C.line}`,
    borderRadius: R.panel,
    padding: "22px 18px",
    color: C.ink,
    textAlign: "left",
  },
  kicker: {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: R.pill,
    background: C.marigoldSoft,
    fontSize: 13,
    fontWeight: 600,
  },
  title: { margin: "0 0 8px", fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em" },
  headline: {
    margin: "12px 0 6px",
    fontSize: "clamp(28px, 8vw, 38px)",
    fontWeight: 800,
    letterSpacing: "-0.035em",
    lineHeight: 1.05,
  },
  lead: { margin: "0 0 4px", fontSize: 17, color: C.inkSoft, lineHeight: 1.45 },
  meta: { margin: "8px 0 0", fontSize: 14, color: C.muted },
  bars: { display: "grid", gap: 12, marginTop: 20 },
  barHead: { display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 5 },
  barLabel: { fontWeight: 600 },
  barPct: { color: C.muted, fontVariantNumeric: "tabular-nums" },
  track: { height: 10, borderRadius: R.pill, background: C.soft, overflow: "hidden" },
  fill: { height: "100%", borderRadius: R.pill },
  blockTitle: { margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: "-0.02em" },
  blockHint: { margin: "2px 0 0", fontSize: 14, color: C.muted },
  list: { marginTop: 10, borderTop: `1px solid ${C.line}` },
  row: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 2px",
    border: "none",
    borderBottom: `1px solid ${C.line}`,
    background: "transparent",
    color: C.ink,
    textAlign: "left",
  },
  rowTitle: { display: "block", fontSize: 16, fontWeight: 600, overflowWrap: "anywhere" },
  rowSub: { display: "block", fontSize: 13, color: C.muted, marginTop: 1 },
  score: {
    flexShrink: 0,
    padding: "3px 9px",
    borderRadius: R.pill,
    background: C.marigoldSoft,
    fontSize: 14,
    fontWeight: 700,
    fontVariantNumeric: "tabular-nums",
  },
  primary: {
    marginTop: 12,
    padding: "11px 20px",
    borderRadius: R.pill,
    border: "none",
    background: C.cobalt,
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
  },
};
