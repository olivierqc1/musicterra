import { supabase } from '../lib/supabase';

/*
CREATE TABLE user_streaks (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_activity_date DATE,
  total_points INTEGER DEFAULT 0
);

CREATE TABLE daily_challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  challenge_type TEXT CHECK (challenge_type IN (
    'rate_5_items', 'discover_3_genres', 'share_discovery', 
    'attend_concert', 'complete_profile'
  )),
  reward_points INTEGER,
  active_date DATE,
  UNIQUE(challenge_type, active_date)
);

CREATE TABLE user_challenge_completions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  challenge_id UUID REFERENCES daily_challenges(id) ON DELETE CASCADE,
  completed_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, challenge_id)
);
*/

export async function updateStreak(userId: string) {
  const today = new Date().toISOString().split('T')[0];
  
  const { data: streak } = await supabase
    .from('user_streaks')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (!streak) {
    // Première visite
    await supabase.from('user_streaks').insert({
      user_id: userId,
      current_streak: 1,
      longest_streak: 1,
      last_activity_date: today,
      total_points: 0
    });
    return 1;
  }

  const lastDate = new Date(streak.last_activity_date);
  const todayDate = new Date(today);
  const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    // Déjà compté aujourd'hui
    return streak.current_streak;
  } else if (diffDays === 1) {
    // Jour consécutif
    const newStreak = streak.current_streak + 1;
    await supabase
      .from('user_streaks')
      .update({
        current_streak: newStreak,
        longest_streak: Math.max(newStreak, streak.longest_streak),
        last_activity_date: today
      })
      .eq('user_id', userId);
    return newStreak;
  } else {
    // Streak cassée
    await supabase
      .from('user_streaks')
      .update({
        current_streak: 1,
        last_activity_date: today
      })
      .eq('user_id', userId);
    return 1;
  }
}

export async function getTodayChallenges() {
  const today = new Date().toISOString().split('T')[0];
  
  const { data } = await supabase
    .from('daily_challenges')
    .select('*')
    .eq('active_date', today);

  if (!data || data.length === 0) {
    // Générer les défis du jour
    await generateDailyChallenges(today);
    return getTodayChallenges();
  }

  return data;
}

async function generateDailyChallenges(date: string) {
  const challenges = [
    { challenge_type: 'rate_5_items', reward_points: 50 },
    { challenge_type: 'discover_3_genres', reward_points: 30 },
    { challenge_type: 'share_discovery', reward_points: 40 }
  ];

  for (const challenge of challenges) {
    await supabase.from('daily_challenges').insert({
      ...challenge,
      active_date: date
    });
  }
}

export async function checkChallengeCompletion(
  userId: string,
  challengeType: string
): Promise<boolean> {
  // Logique pour vérifier si le défi est complété
  const today = new Date().toISOString().split('T')[0];
  
  const { data: challenge } = await supabase
    .from('daily_challenges')
    .select('id')
    .eq('challenge_type', challengeType)
    .eq('active_date', today)
    .single();

  if (!challenge) return false;

  // Vérifier selon le type
  if (challengeType === 'rate_5_items') {
    const { count } = await supabase
      .from('ratings')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .gte('created_at', today);
    
    return (count || 0) >= 5;
  }

  // Autres vérifications...
  return false;
}
