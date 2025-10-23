import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
  language: 'fr' | 'en';
}

export default function Welcome({ onClose, language }: Props) {
  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.logo}>🌍🎵</div>
            <div>
              <h1 style={styles.title}>
                {t('Bienvenue sur MusicTerra', 'Welcome to MusicTerra')}
              </h1>
              <p style={styles.subtitle}>
                {t(
                  'Votre carte personnalisée de découverte musicale mondiale',
                  'Your personalized map of global music discovery'
                )}
              </p>
            </div>
          </div>
          <button onClick={onClose} style={styles.closeBtn}>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {/* Section 1 */}
          <div style={styles.section}>
            <div style={styles.iconCircle}>🎯</div>
            <div>
              <h3 style={styles.sectionTitle}>
                {t('Comment ça fonctionne ?', 'How does it work?')}
              </h3>
              <p style={styles.text}>
                {t(
                  'Explorez des milliers de genres musicaux du monde entier. Notez ceux que vous aimez pour créer votre profil musical unique.',
                  'Explore thousands of music genres from around the world. Rate the ones you like to create your unique music profile.'
                )}
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div style={styles.section}>
            <div style={styles.iconCircle}>⭐</div>
            <div>
              <h3 style={styles.sectionTitle}>
                {t('Plus vous notez, meilleur c\'est !', 'The more you rate, the better!')}
              </h3>
              <p style={styles.text}>
                {t(
                  'Chaque note améliore votre profil. Notre algorithme apprend vos goûts et vous recommande des genres similaires que vous allez adorer.',
                  'Every rating improves your profile. Our algorithm learns your taste and recommends similar genres you\'ll love.'
                )}
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div style={styles.section}>
            <div style={styles.iconCircle}>🌱</div>
            <div>
              <h3 style={styles.sectionTitle}>
                {t('Découvrez des artistes émergents', 'Discover emerging artists')}
              </h3>
              <p style={styles.text}>
                {t(
                  'Basé sur votre profil, nous vous proposons des artistes émergents à découvrir avant tout le monde. Soyez un découvreur !',
                  'Based on your profile, we suggest emerging artists to discover before everyone else. Be a discoverer!'
                )}
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div style={styles.section}>
            <div style={styles.iconCircle}>🎤</div>
            <div>
              <h3 style={styles.sectionTitle}>
                {t('Trouvez des concerts près de chez vous', 'Find concerts near you')}
              </h3>
              <p style={styles.text}>
                {t(
                  'Consultez l\'onglet Concerts pour voir les événements musicaux à venir dans votre région et ceux correspondant à vos goûts.',
                  'Check the Concerts tab to see upcoming music events in your area that match your taste.'
                )}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={styles.cta}>
            <button onClick={onClose} style={styles.ctaButton}>
              {t('🚀 Commencer l\'exploration', '🚀 Start exploring')}
            </button>
            <p style={styles.ctaText}>
              💡 {t(
                'Astuce : Notez au moins 5-10 genres pour des recommandations optimales',
                'Tip: Rate at least 5-10 genres for optimal recommendations'
              )}
            </p>
          </div>
        </div>
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
    background: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: 20,
    backdropFilter: 'blur(4px)'
  },
  modal: {
    background: '#fff',
    borderRadius: 20,
    maxWidth: 700,
    width: '100%',
    maxHeight: '90vh',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    padding: '24px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  headerContent: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flex: 1
  },
  logo: {
    fontSize: 40,
    lineHeight: 1
  },
  title: {
    margin: 0,
    fontSize: 24,
    fontWeight: 700
  },
  subtitle: {
    margin: '6px 0 0',
    fontSize: 14,
    opacity: 0.95
  },
  closeBtn: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    borderRadius: 8,
    color: '#fff',
    cursor: 'pointer',
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s'
  },
  content: {
    padding: '24px 30px 30px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  section: {
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start'
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    flexShrink: 0
  },
  sectionTitle: {
    margin: '0 0 6px 0',
    fontSize: 16,
    fontWeight: 600,
    color: '#1f2937'
  },
  text: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.6,
    color: '#6b7280'
  },
  cta: {
    marginTop: 12,
    padding: '20px',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    borderRadius: 12,
    textAlign: 'center'
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    padding: '14px 28px',
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    width: '100%'
  },
  ctaText: {
    margin: '14px 0 0',
    fontSize: 13,
    color: '#92400e',
    fontWeight: 500
  }
};