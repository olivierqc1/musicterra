// ✅ Optimized Supabase services for group features
import { supabase } from '../lib/supabase';

// ----------------------
// 🔹 TYPES
// ----------------------
export interface Group {
  id: string;
  name: string;
  description?: string;
  avatar_url?: string;
  member_count: number;
  tags?: string[];
}

export interface GroupDiscovery {
  id: string;
  group_id: string;
  user_id: string;
  item_type: 'genre' | 'country' | 'artist';
  item_name: string;
  comment?: string;
  likes: number;
  created_at: string;
  profiles?: {
    display_name: string;
    avatar_url?: string;
  };
}

export interface GroupEvent {
  id: string;
  group_id: string;
  title: string;
  description?: string;
  location?: string;
  event_date?: string;
  attendees: string[];
  created_at: string;
}

export interface GroupChallenge {
  id: string;
  group_id: string;
  title: string;
  description: string;
  challenge_type: string;
  goal_count: number;
  participants: string[];
  end_date?: string;
}

// ----------------------
// 🔹 UTILS (cache & log)
// ----------------------
const log = (...args: any[]) => {
  if (import.meta.env.MODE === 'development') console.log('[Groups]', ...args);
};

const cache = {
  get: (key: string) => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      // Cache valide 15 minutes
      if (Date.now() - parsed.timestamp > 15 * 60 * 1000) return null;
      return parsed.data;
    } catch {
      return null;
    }
  },
  set: (key: string, data: any) => {
    try {
      localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
    } catch {}
  },
};

// ----------------------
// 🔹 MAIN QUERIES
// ----------------------

// 1️⃣ Rechercher des groupes
export async function searchGroups(query: string): Promise<Group[]> {
  if (!query.trim()) return [];
  const cacheKey = `search_groups_${query.toLowerCase()}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('groups')
    .select('id, name, description, avatar_url, tags, member_count')
    .ilike('name', `%${query}%`)
    .limit(25);

  if (error) {
    console.error('❌ searchGroups', error);
    return [];
  }

  cache.set(cacheKey, data);
  return data || [];
}

// 2️⃣ Créer un groupe
export async function createGroup(
  name: string,
  description: string,
  userId: string
): Promise<Group | null> {
  if (!userId) return null;

  const { data, error } = await supabase
    .from('groups')
    .insert({
      name,
      description,
      creator_id: userId,
      member_count: 1,
    })
    .select()
    .single();

  if (error) {
    console.error('❌ createGroup', error);
    return null;
  }

  // Ajouter le créateur comme membre
  await supabase.from('group_members').insert({
    group_id: data.id,
    user_id: userId,
  });

  // Invalide cache local
  localStorage.removeItem('musicterra_groups_cache');
  return data;
}

// 3️⃣ Récupérer les découvertes
export async function getGroupDiscoveries(groupId: string): Promise<GroupDiscovery[]> {
  const cacheKey = `group_discoveries_${groupId}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('group_discoveries')
    .select(`
      id, group_id, user_id, item_type, item_name, comment, likes, created_at,
      profiles:user_id (display_name, avatar_url)
    `)
    .eq('group_id', groupId)
    .order('created_at', { ascending: false })
    .limit(40);

  if (error) {
    console.error('❌ getGroupDiscoveries', error);
    return [];
  }

  cache.set(cacheKey, data);
  return data || [];
}

// 4️⃣ Récupérer les événements du groupe
export async function getGroupEvents(groupId: string): Promise<GroupEvent[]> {
  const cacheKey = `group_events_${groupId}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('group_events')
    .select('id, group_id, title, description, location, event_date, attendees, created_at')
    .eq('group_id', groupId)
    .order('event_date', { ascending: true })
    .limit(30);

  if (error) {
    console.error('❌ getGroupEvents', error);
    return [];
  }

  cache.set(cacheKey, data);
  return data || [];
}

// 5️⃣ RSVP à un événement
export async function rsvpToEvent(eventId: string, userId: string) {
  if (!userId || !eventId) return null;
  const { data, error } = await supabase.rpc('rsvp_to_event', { event_id: eventId, user_id: userId });
  if (error) console.error('❌ rsvpToEvent', error);
  return data;
}

// 6️⃣ Récupérer les défis du groupe
export async function getGroupChallenges(groupId: string): Promise<GroupChallenge[]> {
  const cacheKey = `group_challenges_${groupId}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('group_challenges')
    .select('id, group_id, title, description, challenge_type, goal_count, participants, end_date')
    .eq('group_id', groupId)
    .order('end_date', { ascending: true })
    .limit(20);

  if (error) {
    console.error('❌ getGroupChallenges', error);
    return [];
  }

  cache.set(cacheKey, data);
  return data || [];
}

// 7️⃣ Joindre un groupe
export async function joinGroup(groupId: string, userId: string) {
  if (!userId || !groupId) return;
  const { error } = await supabase.from('group_members').insert({
    group_id: groupId,
    user_id: userId,
  });

  if (error) {
    console.error('❌ joinGroup', error);
    return;
  }

  // Mise à jour locale immédiate
  const key = 'musicterra_groups_cache';
  const cacheData = localStorage.getItem(key);
  if (cacheData) {
    const parsed = JSON.parse(cacheData);
    parsed.data = parsed.data.map((g: Group) =>
      g.id === groupId ? { ...g, member_count: g.member_count + 1 } : g
    );
    localStorage.setItem(key, JSON.stringify(parsed));
  }
}

// 8️⃣ Quitter un groupe
export async function leaveGroup(groupId: string, userId: string) {
  if (!userId || !groupId) return;
  await supabase.from('group_members').delete().match({ group_id: groupId, user_id: userId });

  const key = 'musicterra_groups_cache';
  const cacheData = localStorage.getItem(key);
  if (cacheData) {
    const parsed = JSON.parse(cacheData);
    parsed.data = parsed.data.map((g: Group) =>
      g.id === groupId ? { ...g, member_count: g.member_count - 1 } : g
    );
    localStorage.setItem(key, JSON.stringify(parsed));
  }
    }
