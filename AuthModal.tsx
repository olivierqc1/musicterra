import React from 'react';
import './AuthModal.css';

interface AuthModalProps {
  isLoginMode: boolean;
  setIsLoginMode: (isLoginMode: boolean) => void;
  authError: string | null;
  formData: {
    email: string;
    password: string;
    username: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.FormEvent) => void;
  handleSignUp: (e: React.FormEvent) => void;
  setIsAuthModalOpen: (isOpen: boolean) => void;
  isLoading: boolean;
  t: Record<string, string>;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isLoginMode,
  setIsLoginMode,
  authError,
  formData,
  handleInputChange,
  handleLogin,
  handleSignUp,
  setIsAuthModalOpen,
  isLoading,
  t
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{isLoginMode ? t.loginTitle : t.signupTitle}</h2>
          <button
            className="close-button"
            onClick={() => setIsAuthModalOpen(false)}
          >
            ×
          </button>
        </div>
        
        <form onSubmit={isLoginMode ? handleLogin : handleSignUp}>
          {!isLoginMode && (
            <div className="form-group">
              <label className="label">{t.username}</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="input"
              />
            </div>
          )}
          
          <div className="form-group">
            <label className="label">{t.email}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="label">{t.password}</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input"
              required
            />
          </div>
          
          {authError && <p className="error-message">{authError}</p>}
          
          <button
            type="submit"
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? t.loading : isLoginMode ? t.login : t.signup}
          </button>
        </form>
        
        <div className="switch-container">
          <p
            className="switch-text"
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode ? t.orSignup : t.orLogin}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
