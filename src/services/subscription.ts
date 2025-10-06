import { supabase } from '../lib/supabase';

export interface Subscription {
  id: string;
  user_id: string;
  plan: 'free' | 'premium' | 'premium_annual';
  status: 'active' | 'cancelled' | 'expired';
  started_at: string;
  expires_at?: string;
}

export interface Usage {
  concert_marks: number;
}

const LIMITS = {
  free: {
    concertMarks: 3,
    features: {
      basicSearch: true,
      markConcerts: true,
      viewFeed: true,
      advancedStats: false,
      unlimitedMarks: false,
      artistAlerts: false,
      exportHistory: false
    }
  },
  premium: {
    concertMarks: Infinity,
    features: {
      basicSearch: true,
      markConcerts: true,
      viewFeed: true,
      advancedStats: true,
      unlimitedMarks: true,
      artistAlerts: true,
      exportHistory: true
    }
  }
};

export async function getUserSubscription(): Promise<Subscription | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) {
    console.error('Error fetching subscription:', error);
    return null;
  }

  return data;
}

export async function getMonthlyUsage(): Promise<Usage> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { concert_marks: 0 };

  const currentMonth = new Date().toISOString().slice(0, 7); // '2025-01'

  const { data, error } = await supabase
    .from('usage_tracking')
    .select('*')
    .eq('user_id', user.id)
    .eq('month', currentMonth)
    .maybeSingle();

  if (error || !data) {
    return { concert_marks: 0 };
  }

  return {
    concert_marks: data.concert_marks
  };
}

export async function incrementConcertMark(): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const currentMonth = new Date().toISOString().slice(0, 7);

  const { error } = await supabase.rpc('increment_concert_mark', {
    p_user_id: user.id,
    p_month: currentMonth
  });

  if (error) {
    console.error('Error incrementing mark:', error);
    return false;
  }

  return true;
}

export async function canMarkConcert(): Promise<{ allowed: boolean; reason?: string }> {
  const subscription = await getUserSubscription();
  
  if (!subscription) {
    return { allowed: false, reason: 'no_subscription' };
  }

  // Premium users = unlimited
  if (subscription.plan === 'premium' || subscription.plan === 'premium_annual') {
    if (subscription.status !== 'active') {
      return { allowed: false, reason: 'subscription_expired' };
    }
    return { allowed: true };
  }

  // Free users = check monthly limit
  const usage = await getMonthlyUsage();
  const limit = LIMITS.free.concertMarks;

  if (usage.concert_marks >= limit) {
    return { allowed: false, reason: 'limit_reached' };
  }

  return { allowed: true };
}

export function getFeatureAccess(plan: 'free' | 'premium' | 'premium_annual') {
  return plan === 'free' ? LIMITS.free.features : LIMITS.premium.features;
}

export const PRICING = {
  monthly: {
    price: 4.99,
    currency: 'USD',
    features: [
      'Marquage illimité de concerts',
      'Statistiques avancées',
      'Alertes pour artistes favoris',
      'Export de l\'historique',
      'Badge Premium'
    ]
  },
  annual: {
    price: 49.99,
    currency: 'USD',
    savings: '17%',
    features: [
      'Marquage illimité de concerts',
      'Statistiques avancées',
      'Alertes pour artistes favoris',
      'Export de l\'historique',
      'Badge Premium',
      '2 mois gratuits!'
    ]
  }
};
