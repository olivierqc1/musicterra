import { useEffect, useState } from 'react';
import { getUserSubscription, getMonthlyUsage, Subscription, Usage } from '../services/subscription';
import { useAuth } from '../context/AuthContext';

export function useSubscription() {
  const { session } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [usage, setUsage] = useState<Usage>({ concert_marks: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session) {
      loadData();
    } else {
      setLoading(false);
    }
  }, [session]);

  const loadData = async () => {
    setLoading(true);
    const [sub, use] = await Promise.all([
      getUserSubscription(),
      getMonthlyUsage()
    ]);
    setSubscription(sub);
    setUsage(use);
    setLoading(false);
  };

  const isPremium = subscription?.plan === 'premium' || subscription?.plan === 'premium_annual';
  const isActive = subscription?.status === 'active';

  return {
    subscription,
    usage,
    loading,
    isPremium: isPremium && isActive,
    refresh: loadData
  };
}
