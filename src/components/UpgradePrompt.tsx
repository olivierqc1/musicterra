import { PRICING } from '../services/subscription';

interface Props {
  reason: 'limit_reached' | 'feature_locked';
  onClose: () => void;
  language: 'fr' | 'en';
}

export default function UpgradePrompt({ reason, onClose, language }: Props) {
  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={styles.icon}>🎫</div>
          <h2 style={{ margin: '10px 0' }}>
            {reason === 'limit_reached' 
              ? t('Limite atteinte', 'Limit reached')
              : t('Fonctionnalité Premium', 'Premium Feature')
            }
          </h2>
          <p style={{ color: '#5A6183', fontSize: 15 }}>
            {reason === 'limit_reached'
              ? t('Vous avez marqué 3 concerts ce mois-ci', 'You\'ve marked 3 concerts this month')
              : t('Cette fonctionnalité est réservée aux membres Premium', 'This feature is for Premium members')
            }
          </p>
        </div>

        <div style={styles.plansContainer}>
          {/* Plan Monthly */}
          <div style={styles.planCard}>
            <h3 style={{ margin: '0 0 8px' }}>
              {t('Mensuel', 'Monthly')}
            </h3>
            <div style={styles.price}>
              <span style={{ fontSize: 32, fontWeight: 'bold' }}>
                ${PRICING.monthly.price}
              </span>
              <span style={{ color: '#5A6183' }}>/{t('mois', 'month')}</span>
            </div>
            <ul style={styles.featureList}>
              {PRICING.monthly.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button style={styles.upgradeBtn}>
              {t('Passer Premium', 'Go Premium')}
            </button>
          </div>

          {/* Plan Annual */}
          <div style={{ ...styles.planCard, ...styles.planCardHighlight }}>
            <div style={styles.savingsBadge}>
              {t(`Économise ${PRICING.annual.savings}`, `Save ${PRICING.annual.savings}`)}
            </div>
            <h3 style={{ margin: '0 0 8px' }}>
              {t('Annuel', 'Annual')}
            </h3>
            <div style={styles.price}>
              <span style={{ fontSize: 32, fontWeight: 'bold' }}>
                ${PRICING.annual.price}
              </span>
              <span style={{ color: '#5A6183' }}>/{t('an', 'year')}</span>
            </div>
            <p style={{ fontSize: 13, color: '#2C3FD1', margin: '4px 0 12px' }}>
              ${(PRICING.annual.price / 12).toFixed(2)}/{t('mois', 'month')}
            </p>
            <ul style={styles.featureList}>
              {PRICING.annual.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button style={{ ...styles.upgradeBtn, ...styles.upgradeBtnPrimary }}>
              {t('Passer Premium', 'Go Premium')}
            </button>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#8A90AD', marginTop: 16 }}>
          {t('Annule à tout moment • Paiement sécurisé par Stripe', 'Cancel anytime • Secure payment by Stripe')}
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'grid',
    placeItems: 'center',
    zIndex: 2000,
    padding: 16
  },
  modal: {
    background: '#fff',
    borderRadius: 16,
    padding: 32,
    maxWidth: 800,
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative'
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'none',
    border: 'none',
    fontSize: 32,
    cursor: 'pointer',
    color: '#8A90AD',
    lineHeight: 1
  },
  icon: {
    fontSize: 48,
    marginBottom: 8
  },
  plansContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 16,
    marginTop: 24
  },
  planCard: {
    border: '2px solid #DFE3EF',
    borderRadius: 12,
    padding: 24,
    position: 'relative'
  },
  planCardHighlight: {
    borderColor: '#2C3FD1',
    background: '#F4F6FB'
  },
  savingsBadge: {
    position: 'absolute',
    top: -12,
    right: 16,
    background: '#2C3FD1',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600
  },
  price: {
    marginBottom: 16
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 20px',
    fontSize: 14,
    textAlign: 'left'
  },
  upgradeBtn: {
    width: '100%',
    padding: '12px',
    border: '2px solid #2C3FD1',
    borderRadius: 8,
    background: '#fff',
    color: '#2C3FD1',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: 15
  },
  upgradeBtnPrimary: {
    background: '#2C3FD1',
    color: '#fff'
  }
};
