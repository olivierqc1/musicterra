import { supabase } from '../lib/supabase';

// Table SQL à créer:
/*
CREATE TABLE user_behavior (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  action_type TEXT CHECK (action_type IN (
    'spin', 'rate', 'click_artist', 'click_spotify', 
    'share_discovery', 'attend_concert', 'time_spent'
  )),
  item_type TEXT, -- 'genre', 'country', 'artist'
  item_name TEXT,
  metadata JSONB, -- données additionnelles (rating, durée, etc.)
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE INDEX idx_user_behavior_user ON user_behavior(user_id);
CREATE INDEX idx_user_behavior_action ON user_behavior(action_type);
*/

export async function trackAction(
  actionType: string,
  itemType: string,
  itemName: string,
  metadata?: any
) {
  const { error } = await supabase.from('user_behavior').insert({
    action_type: actionType,
    item_type: itemType,
    item_name: itemName,
    metadata
  });

  if (error) console.error('Tracking error:', error);
}

// Calculer le "profil de goûts" d'un utilisateur
export async function getUserTasteProfile(userId: string) {
  const { data } = await supabase
    .from('user_behavior')
    .select('*')
    .eq('user_id', userId)
    .gte('created_at', new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString()); // 90 jours

  if (!data) return null;

  // Calculer les scores par genre/pays
  const genreScores: Record<string, number> = {};
  const countryScores: Record<string, number> = {};

  data.forEach(action => {
    const weight = {
      'spin': 1,
      'rate': 3,
      'click_artist': 2,
      'click_spotify': 4,
      'share_discovery': 5,
      'attend_concert': 10
    }[action.action_type] || 1;

    // Multiplier par la note si c'est un rating
    const finalWeight = action.metadata?.rating 
      ? weight * (action.metadata.rating / 10)
      : weight;

    if (action.item_type === 'genre') {
      genreScores[action.item_name] = (genreScores[action.item_name] || 0) + finalWeight;
    } else if (action.item_type === 'country') {
      countryScores[action.item_name] = (countryScores[action.item_name] || 0) + finalWeight;
    }
  });

  return {
    topGenres: Object.entries(genreScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10),
    topCountries: Object.entries(countryScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10),
    totalActions: data.length
  };
}
