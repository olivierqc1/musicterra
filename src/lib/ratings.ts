import { supabase } from "./supabase";

export type RatingRow = {
  id: string;
  user_id: string;
  item_type: "genre" | "country";
  item_name: string;
  score: number; // 0..10
  created_at: string;
};

export async function upsertRating(
  itemType: "genre" | "country",
  itemName: string,
  score: number
): Promise<RatingRow | null> {
  const { data, error } = await supabase
    .from("ratings")
    .upsert(
      [{ item_type: itemType, item_name: itemName, score }],
      { onConflict: "user_id,item_type,item_name" }
    )
    .select()
    .maybeSingle();

  if (error) {
    console.error("upsertRating error:", error);
    throw error;
  }
  return data as RatingRow | null;
}

export async function getUserRating(
  itemType: "genre" | "country",
  itemName: string
): Promise<RatingRow | null> {
  const { data, error } = await supabase
    .from("ratings")
    .select("*")
    .eq("item_type", itemType)
    .eq("item_name", itemName)
    .maybeSingle();

  if (error) {
    console.error("getUserRating error:", error);
    throw error;
  }
  return data as RatingRow | null;
}

export async function listMyRatings(): Promise<RatingRow[]> {
  const { data, error } = await supabase
    .from("ratings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("listMyRatings error:", error);
    throw error;
  }
  return (data || []) as RatingRow[];
}
