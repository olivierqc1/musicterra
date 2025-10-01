// src/lib/ratings.ts
import { supabase } from "./supabase";

export type Rating = {
  id: string;
  user_id: string;
  item_type: "genre" | "country";
  item_name: string;
  score: number;
  created_at: string;
  updated_at: string;
};

/**
 * Sauvegarder ou mettre à jour une note
 */
export async function saveRating(
  itemType: "genre" | "country",
  itemName: string,
  score: number
): Promise<Rating | null> {
  // Vérifier l'authentification
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Non connecté");
  }

  // Valider le score
  if (score < 0 || score > 10) {
    throw new Error("Le score doit être entre 0 et 10");
  }

  try {
    const { data, error } = await supabase
      .from("ratings")
      .upsert(
        {
          user_id: user.id,
          item_type: itemType,
          item_name: itemName,
          score,
          updated_at: new Date().toISOString(),
        },
        { 
          onConflict: "user_id,item_type,item_name",
        }
      )
      .select()
      .single();

    if (error) throw error;
    return data as Rating;
  } catch (error) {
    console.error("Erreur sauvegarde note:", error);
    throw error;
  }
}

/**
 * Récupérer une note spécifique
 */
export async function getRating(
  itemType: "genre" | "country",
  itemName: string
): Promise<Rating | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  try {
    const { data, error } = await supabase
      .from("ratings")
      .select("*")
      .eq("user_id", user.id)
      .eq("item_type", itemType)
      .eq("item_name", itemName)
      .maybeSingle();

    if (error) throw error;
    return data as Rating | null;
  } catch (error) {
    console.error("Erreur récupération note:", error);
    return null;
  }
}

/**
 * Récupérer toutes les notes de l'utilisateur
 */
export async function getAllRatings(): Promise<Rating[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  try {
    const { data, error } = await supabase
      .from("ratings")
      .select("*")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false });

    if (error) throw error;
    return (data || []) as Rating[];
  } catch (error) {
    console.error("Erreur récupération notes:", error);
    return [];
  }
}

/**
 * Récupérer les notes par type
 */
export async function getRatingsByType(
  itemType: "genre" | "country"
): Promise<Rating[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  try {
    const { data, error } = await supabase
      .from("ratings")
      .select("*")
      .eq("user_id", user.id)
      .eq("item_type", itemType)
      .order("score", { ascending: false });

    if (error) throw error;
    return (data || []) as Rating[];
  } catch (error) {
    console.error("Erreur récupération notes par type:", error);
    return [];
  }
}

/**
 * Supprimer une note
 */
export async function deleteRating(
  itemType: "genre" | "country",
  itemName: string
): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  try {
    const { error } = await supabase
      .from("ratings")
      .delete()
      .eq("user_id", user.id)
      .eq("item_type", itemType)
      .eq("item_name", itemName);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Erreur suppression note:", error);
    return false;
  }
}

/**
 * Obtenir les statistiques de l'utilisateur
 */
export async function getRatingStats(): Promise<{
  total: number;
  genres: number;
  countries: number;
  average: number;
  topRated: Rating[];
}> {
  const ratings = await getAllRatings();

  const genres = ratings.filter((r) => r.item_type === "genre");
  const countries = ratings.filter((r) => r.item_type === "country");
  
  const average =
    ratings.length > 0
      ? ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length
      : 0;

  const topRated = [...ratings]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return {
    total: ratings.length,
    genres: genres.length,
    countries: countries.length,
    average: Math.round(average * 10) / 10,
    topRated,
  };
}
