// src/services/achievements.ts
import { supabase } from '../lib/supabase';

/*
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  name_fr TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_fr TEXT,
  description_en TEXT,
  icon TEXT,
  requirement_type TEXT,
  requirement_count INTEGER
);

CREATE TABLE user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);
*/

const ACHIEVEMENTS = [
  {
    code: 'first_rating',
    name_fr: '🎯 Première Note',
    name_en: '🎯 First Rating',
    description_fr: 'Note ton premier genre ou pays',
    requirement_type: 'ratings_count',
    requirement_count: 1
  },
  {
    code: 'music_explorer',
    name_fr: '🌍 Explorateur Musical',
    name_en: '🌍 Music Explorer',
    description_fr: 'Découvre 10 pays différents',
    requirement_type: 'countries_discovered',
    requirement_count: 10
  },
  {
    code: 'genre_master',
    name_fr: '🎸 Maître des Genres',
    name_en: '🎸 Genre Master',
    description_fr: 'Explore 20 genres différents',
    requirement_type: 'genres_discovered',
    requirement_count: 20
  },
  {
    code: 'concert_goer',
    name_fr: '🎤 Fan de Concert',
    name_en: '🎤 Concert Fan',
    description_fr: 'Assiste à 5 concerts',
    requirement_type: 'concerts_attended',
    requirement_count: 5
  },
  {
    code: 'week_streak',
    name_fr: '🔥 Semaine de Feu',
    name_en: '🔥 Week Streak',
    description_fr: 'Utilise l\'app 7 jours consécutifs',
    requirement_type: 'streak',
    requirement_count: 7
  },
  {
    code: 'social_butterfly',
    name_fr: '👥 Papillon Social',
    name_en: '👥 Social Butterfly',
    description_fr: 'Rejoins 3 groupes',
    requirement_type: 'groups_joined',
    requirement_count: 3
  }
];

export async function checkAndUnlockAchievements(userId: string) {
  const unlocked = [];

  for (const achievement of ACHIEVEMENTS) {
    const hasIt = await hasAchievement(userId, achievement.code);
    if (hasIt) continue;

    const qualified = await checkRequirement(userId, achievement);
    if (qualified) {
      await unlockAchievement(userId, achievement.code);
      unlocked.push(achievement);
    }
  }

  return unlocked;
}

async function checkRequirement(userId: string, achievement: any): Promise<boolean> {
  const { requirement_type, requirement_count } = achievement;

  switch (requirement_type) {
    case 'ratings_count': {
      const { count } = await supabase
        .from('ratings')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId);
      return (count || 0) >= requirement_count;
    }

    case 'countries_discovered': {
      const { data } = await supabase
        .from('user_behavior')
        .select('item_name')
        .eq('user_id', userId)
        .eq('item_type', 'country');
      const unique = new Set(data?.map(d => d.item_name) || []);
      return unique.size >= requirement_count;
    }

    case 'genres_discovered': {
      const { data } = await supabase
        .from('user_behavior')
        .select('item_name')
        .eq('user_id', userId)
        .eq('item_type', 'genre');
      const unique = new Set(data?.map(d => d.item_name) || []);
      return unique.size >= requirement_count;
    }

    case 'concerts_attended': {
      const { count } = await supabase
        .from('concert_attendance')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('status', 'attended');
      return (count || 0) >= requirement_count;
    }

    case 'streak': {
      const { data } = await supabase
        .from('user_streaks')
        .select('current_streak')
        .eq('user_id', userId)
        .single();
      return (data?.current_streak || 0) >= requirement_count;
    }

    case 'groups_joined': {
      const { count } = await supabase
        .from('group_members')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId);
      return (count || 0) >= requirement_count;
    }

    default:
      return false;
  }
}

async function hasAchievement(userId: string, code: string): Promise<boolean> {
  const { data } = await supabase
    .from('user_achievements')
    .select('id')
    .eq('user_id', userId)
    .eq('achievements.code', code)
    .maybeSingle();
  
  return !!data;
}

async function unlockAchievement(userId: string, code: string) {
  const { data: achievement } = await supabase
    .from('achievements')
    .select('id')
    .eq('code', code)
    .single();

  if (!achievement) return;

  await supabase.from('user_achievements').insert({
    user_id: userId,
    achievement_id: achievement.id
  });
}
