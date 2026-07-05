// src/services/ratingsStore.ts
// Couche de durabilité des notes. Garantit que les données locales survivent
// aux évolutions du code (migrations versionnées), à la connexion tardive
// (adoption des notes anonymes) et au nettoyage du navigateur (sync cloud).
//
// À l'avenir : tout changement de format des notes = nouvelle migration ici,
// et on incrémente SCHEMA_VERSION. Ne JAMAIS changer le format sans migration.

import { supabase } from "../lib/supabase";
import { genres } from "../data/genres";

const SCHEMA_KEY = "mt_ratings_schema";
const SCHEMA_VERSION = 2;
const PREFIX = "rating_";

interface LocalRating {
  key: string;
  userId: string;
  itemType: string;
  itemName: string;
  rating: number;
}

// ── Lecture de toutes les notes locales ──────────────────
function readAll(): LocalRating[] {
  const out: LocalRating[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(PREFIX)) continue;
      const parts = key.split("_");
      if (parts.length < 4) continue;
      const rating = parseInt(localStorage.getItem(key) || "0", 10);
      if (!rating) continue;
      out.push({
        key,
        userId: parts[1],
        itemType: parts[2],
        itemName: parts.slice(3).join("_"),
        rating,
      });
    }
  } catch {
    /* localStorage indisponible */
  }
  return out;
}

function write(userId: string, itemType: string, itemName: string, rating: number) {
  try {
    const key = `${PREFIX}${userId}_${itemType}_${itemName}`;
    const existing = parseInt(localStorage.getItem(key) || "0", 10);
    // en cas de conflit on garde la meilleure note (jamais de perte)
    if (rating > existing) localStorage.setItem(key, String(rating));
  } catch {
    /* plein ou indisponible */
  }
}

// ── Migrations versionnées ───────────────────────────────
// v1 -> v2 : réaligne les noms de genres sur le catalogue actuel
// (utile après le dédoublonnage : 'Punk' supprimé -> 'punk' conservé).
function migrateGenreNames() {
  const canonical = new Map<string, string>();
  for (const g of genres) canonical.set(g.name.toLowerCase(), g.name);

  for (const r of readAll()) {
    if (r.itemType !== "genre") continue;
    const canon = canonical.get(r.itemName.toLowerCase());
    if (!canon || canon === r.itemName) continue; // déjà bon ou genre inconnu : on n'y touche pas
    write(r.userId, "genre", canon, r.rating);
    try {
      localStorage.removeItem(r.key);
    } catch {
      /* ignore */
    }
  }
}

export function migrateRatings() {
  let current = 0;
  try {
    current = parseInt(localStorage.getItem(SCHEMA_KEY) || "1", 10);
  } catch {
    return;
  }
  if (current >= SCHEMA_VERSION) return;

  if (current < 2) migrateGenreNames();
  // if (current < 3) migrateXxx();  <- futures migrations ici

  try {
    localStorage.setItem(SCHEMA_KEY, String(SCHEMA_VERSION));
  } catch {
    /* ignore */
  }
}

// ── Adoption des notes anonymes à la connexion ───────────
// L'utilisateur a noté sans compte, puis se connecte : ses notes le suivent.
function adoptAnonymousRatings(userId: string) {
  for (const r of readAll()) {
    if (r.userId !== "anonymous") continue;
    write(userId, r.itemType, r.itemName, r.rating);
    try {
      localStorage.removeItem(r.key);
    } catch {
      /* ignore */
    }
  }
}

// ── Sync cloud bidirectionnelle ──────────────────────────
async function backupToSupabase(userId: string) {
  const mine = readAll().filter((r) => r.userId === userId);
  if (mine.length === 0) return;
  const rows = mine.map((r) => ({
    user_id: userId,
    item_type: r.itemType,
    item_name: r.itemName,
    rating: r.rating,
    updated_at: new Date().toISOString(),
  }));
  // upsert par lots de 100
  for (let i = 0; i < rows.length; i += 100) {
    await supabase
      .from("ratings")
      .upsert(rows.slice(i, i + 100), { onConflict: "user_id,item_type,item_name" });
  }
}

async function restoreFromSupabase(userId: string) {
  const { data } = await supabase
    .from("ratings")
    .select("item_type, item_name, rating")
    .eq("user_id", userId);
  for (const row of data || []) {
    write(userId, row.item_type, row.item_name, row.rating);
  }
}

// ── Orchestrateur : à appeler au démarrage de l'app ──────
export async function syncRatings(userId?: string) {
  migrateRatings();
  if (!userId) return;
  try {
    adoptAnonymousRatings(userId);
    await restoreFromSupabase(userId); // le cloud comble les trous locaux
    await backupToSupabase(userId); // le local comble les trous cloud
  } catch {
    /* hors-ligne : on réessaiera à la prochaine session */
  }
}
