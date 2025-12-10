// src/services/social.ts
import { supabase } from '../lib/supabase';

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

export interface Follow {
  id: string;
  follower_id: string;
  following_id: string;
  created_at: string;
}

export interface ActivityFeedItem {
  id: string;
  user_id: string;
  action_type: 'rated_genre' | 'saved_artist' | 'going_concert' | 'attended_concert';
  action_data: any;
  created_at: string;
  profiles?: {
    display_name: string;
    username: string;
    avatar_url?: string;
  };
}

// ═══════════════════════════════════════════════════════════
// FOLLOW / UNFOLLOW
// ═══════════════════════════════════════════════════════════

/**
 * Suivre un utilisateur
 */
export async function followUser(followingId: string): Promise<boolean> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { error } = await supabase
      .from('follows')
      .insert({
        follower_id: user.id,
        following_id: followingId,
      });

    if (error) {
      console.error('Erreur follow:', error);
      return false;
    }

    console.log('✅ Utilisateur suivi');
    return true;
  } catch (err) {
    console.error('Exception follow:', err);
    return false;
  }
}

/**
 * Ne plus suivre un utilisateur
 */
export async function unfollowUser(followingId: string): Promise<boolean> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { error } = await supabase
      .from('follows')
      .delete()
      .eq('follower_id', user.id)
      .eq('following_id', followingId);

    if (error) {
      console.error('Erreur unfollow:', error);
      return false;
    }

    console.log('✅ Utilisateur unfollow');
    return true;
  } catch (err) {
    console.error('Exception unfollow:', err);
    return false;
  }
}

/**
 * Vérifier si on suit un utilisateur
 */
export async function isFollowing(followingId: string): Promise<boolean> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { data, error } = await supabase
      .from('follows')
      .select('id')
      .eq('follower_id', user.id)
      .eq('following_id', followingId)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Erreur isFollowing:', error);
      return false;
    }

    return !!data;
  } catch (err) {
    console.error('Exception isFollowing:', err);
    return false;
  }
}

// ═══════════════════════════════════════════════════════════
// LISTES FOLLOWERS / FOLLOWING
// ═══════════════════════════════════════════════════════════

/**
 * Récupérer les abonnés d'un utilisateur
 */
export async function getFollowers(userId: string): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('follows')
      .select(`
        id,
        created_at,
        follower:profiles!follows_follower_id_fkey(
          id,
          display_name,
          username,
          avatar_url,
          followers_count,
          following_count
        )
      `)
      .eq('following_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur getFollowers:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Exception getFollowers:', err);
    return [];
  }
}

/**
 * Récupérer les abonnements d'un utilisateur
 */
export async function getFollowing(userId: string): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('follows')
      .select(`
        id,
        created_at,
        following:profiles!follows_following_id_fkey(
          id,
          display_name,
          username,
          avatar_url,
          followers_count,
          following_count
        )
      `)
      .eq('follower_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur getFollowing:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Exception getFollowing:', err);
    return [];
  }
}

// ═══════════════════════════════════════════════════════════
// ACTIVITY FEED
// ═══════════════════════════════════════════════════════════

/**
 * Créer une activité
 */
export async function createActivity(
  actionType: ActivityFeedItem['action_type'],
  actionData: any
): Promise<boolean> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase
      .from('activity_feed')
      .insert({
        user_id: user.id,
        action_type: actionType,
        action_data: actionData,
      });

    if (error) {
      console.error('Erreur createActivity:', error);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Exception createActivity:', err);
    return false;
  }
}

/**
 * Récupérer le feed d'activité des utilisateurs suivis
 */
export async function getFriendsFeed(limit: number = 20): Promise<ActivityFeedItem[]> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    // Récupérer les IDs des utilisateurs suivis
    const { data: followingData } = await supabase
      .from('follows')
      .select('following_id')
      .eq('follower_id', user.id);

    if (!followingData || followingData.length === 0) return [];

    const followingIds = followingData.map(f => f.following_id);

    // Récupérer les activités
    const { data, error } = await supabase
      .from('activity_feed')
      .select(`
        *,
        profiles!activity_feed_user_id_fkey(
          display_name,
          username,
          avatar_url
        )
      `)
      .in('user_id', followingIds)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Erreur getFriendsFeed:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Exception getFriendsFeed:', err);
    return [];
  }
}

/**
 * Récupérer le feed d'activité d'un utilisateur spécifique
 */
export async function getUserActivity(userId: string, limit: number = 10): Promise<ActivityFeedItem[]> {
  try {
    const { data, error } = await supabase
      .from('activity_feed')
      .select(`
        *,
        profiles!activity_feed_user_id_fkey(
          display_name,
          username,
          avatar_url
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Erreur getUserActivity:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Exception getUserActivity:', err);
    return [];
  }
}