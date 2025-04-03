import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/types';
import './MobileMenu.css';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  toggleTheme: () => void;
  theme: 'dark' | 'light';
  user: User | null;
  handleLogout: () => void;
  setIsAuthModalOpen: (isOpen: boolean) => void;
  setIsLoginMode: (isLoginMode: boolean) => void;
  t: Record<string, string>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  mobileMenuRef,
  language,
  setLanguage,
  toggleTheme,
  theme,
  user,
  handleLogout,
  setIsAuthModalOpen,
  setIsLoginMode,
  t
}) => {
  return (
    <>
      {isMobileMenuOpen && <div className="menu-overlay" />}
      
      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}
      >
        <div className="mobile-menu-header">
          <h2>{t.menu}</h2>
          <button
            className="close-button"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>
        </div>
        
        <div className="mobile-menu-content">
          {user && (
            <div className="mobile-user-info">
              <img src={user.profilePicture} alt={user.username} className="mobile-user-avatar" />
              <span className="mobile-user-name">{user.username}</span>
            </div>
          )}
          
          <div
            className="mobile-menu-item"
            onClick={() => {
              setLanguage(language === 'fr' ? 'en' : 'fr');
              setIsMobileMenuOpen(false);
            }}
          >
            {t.changeLanguage}
          </div>
          
          <div
            className="mobile-menu-item"
            onClick={() => {
              toggleTheme();
              setIsMobileMenuOpen(false);
            }}
          >
            {theme === 'dark' ? t.lightMode : t.darkMode}
          </div>
          
          <Link to="/" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>
            {t.title}
          </Link>
          
          {user ? (
            <>
              <Link to="/profile" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>
                {t.myProfile}
              </Link>
              
              <div
                className="mobile-menu-item"
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
              >
                {t.logout}
              </div>
            </>
          ) : (
            <>
              <div
                className="mobile-menu-item"
                onClick={() => {
                  setIsLoginMode(true);
                  setIsAuthModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                {t.login}
              </div>
              
              <div
                className="mobile-menu-item"
                onClick={() => {
                  setIsLoginMode(false);
                  setIsAuthModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                {t.signup}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
