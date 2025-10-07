// src/services/leaderboard.ts
import { supabase } from '../lib/supabase';

export async function getGlobalLeaderboard(
  period: 'week' | 'month' | 'all' = 'week',
  limit: number = 20
) {
  const since = period === 'week' 
    ? new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    : period === 'month'
    ? new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    : new Date(0);

  const { data } = await supabase
    .from('user_behavior')
    .select(`
      user_id,
      profiles:user_id (display_name, avatar_url)
    `)
    .gte('created_at', since.toISOString())
    .order('created_at', { ascending: false });

  if (!data) return [];

  // Compter les actions par utilisateur
  const userCounts: Record<string, number> = {};
  data.forEach(action => {
    userCounts[action.user_id] = (userCounts[action.user_id] || 0) + 1;
  });

  // Trier et formater
  return Object.entries(userCounts)
    .map(([userId, count]) => ({
      userId,
      actionCount: count,
      profile: data.find(d => d.user_id === userId)?.profiles
    }))
    .sort((a, b) => b.actionCount - a.actionCount)
    .slice(0, limit);
}
