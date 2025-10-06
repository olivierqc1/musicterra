import { canMarkConcert, incrementConcertMark } from '../services/subscription';
import { useSubscription } from '../hooks/useSubscription';
import UpgradePrompt from './UpgradePrompt';

// Dans le composant, ajoutez:
const { isPremium, usage } = useSubscription();
const [showUpgrade, setShowUpgrade] = useState<'limit_reached' | 'feature_locked' | null>(null);

// Modifiez handleMarkStatus:
const handleMarkStatus = async (event: SongkickEvent, status: 'going' | 'interested' | 'attended') => {
  if (!session) {
    alert(t('Connectez-vous pour utiliser cette fonctionnalité', 'Please sign in to use this feature'));
    return;
  }

  // Check limits
  const { allowed, reason } = await canMarkConcert();
  
  if (!allowed) {
    if (reason === 'limit_reached') {
      setShowUpgrade('limit_reached');
    } else if (reason === 'subscription_expired') {
      alert(t('Votre abonnement a expiré', 'Your subscription has expired'));
    }
    return;
  }

  if (status === 'attended') {
    setReviewingEvent(event);
    return;
  }

  try {
    await markConcertStatus(
      event.id.toString(),
      event.displayName,
      event.start.date,
      event.venue.displayName,
      event.location.city,
      status
    );
    
    // Increment usage for free users
    if (!isPremium) {
      await incrementConcertMark();
    }
    
    loadUserStatuses();
  } catch (error) {
    console.error(error);
    alert(t('Erreur', 'Error'));
  }
};

// Ajoutez un indicateur d'usage en haut si free user:
{!isPremium && (
  <div style={styles.usageBanner}>
    {t(
      `${usage.concert_marks}/3 concerts marqués ce mois`,
      `${usage.concert_marks}/3 concerts marked this month`
    )}
    {usage.concert_marks >= 3 && (
      <button 
        onClick={() => setShowUpgrade('limit_reached')}
        style={styles.upgradeLinkBtn}
      >
        {t('Passer Premium', 'Upgrade to Premium')}
      </button>
    )}
  </div>
)}

// Et le modal:
{showUpgrade && (
  <UpgradePrompt
    reason={showUpgrade}
    onClose={() => setShowUpgrade(null)}
    language={language}
  />
)}

// Ajoutez les styles:
usageBanner: {
  background: '#fef3c7',
  border: '1px solid #fbbf24',
  borderRadius: 8,
  padding: 12,
  marginBottom: 16,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 14
},
upgradeLinkBtn: {
  background: '#667eea',
  color: '#fff',
  border: 'none',
  padding: '6px 12px',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 600
}
