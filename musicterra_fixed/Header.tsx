import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/types';
import './Header.css';

interface HeaderProps {
  user: User | null;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  isMobile: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  setIsAuthModalOpen: (isOpen: boolean) => void;
  setIsLoginMode: (isLoginMode: boolean) => void;
  handleLogout: () => void;
  t: Record<string, string>;
}

const Header: React.FC<HeaderProps> = ({
  user,
  theme,
  toggleTheme,
  language,
  setLanguage,
  isMobile,
  setIsMobileMenuOpen,
  setIsAuthModalOpen,
  setIsLoginMode,
  handleLogout,
  t
}) => {
  return (
    <header className={`header ${isMobile ? 'header-mobile' : ''}`}>
      {isMobile ? (
        <>
          <div className="header-mobile-container">
            <button
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              ☰
            </button>
            <h1 className="title gradient-text">{t.title}</h1>
            <div className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="title gradient-text">
            <Link to="/">{t.title}</Link>
          </h1>
          <div className="header-controls">
            <div className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </div>
            <button
              className="language-button"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            >
              {language === "fr" ? "EN" : "FR"}
            </button>
            {user ? (
              <div className="user-container">
                <Link to="/profile" className="user-info">
                  <img
                    src={user.profilePicture}
                    alt={user.username}
                    className="user-avatar"
                  />
                  <span className="user-name">{user.username}</span>
                </Link>
                <button
                  className="button button-small logout-button"
                  onClick={handleLogout}
                >
                  {t.logout}
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <button
                  className="button button-small login-button"
                  onClick={() => {
                    setIsLoginMode(true);
                    setIsAuthModalOpen(true);
                  }}
                >
                  {t.login}
                </button>
                <button
                  className="button button-small signup-button"
                  onClick={() => {
                    setIsLoginMode(false);
                    setIsAuthModalOpen(true);
                  }}
                >
                  {t.signup}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
