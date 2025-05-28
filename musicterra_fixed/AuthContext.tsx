import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User } from '../types/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Vérifier si un utilisateur est déjà connecté depuis le localStorage
    const savedUser = localStorage.getItem("musicExplorerUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    
    try {
      // Simuler un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Créer un faux utilisateur pour la démonstration
      const loggedInUser: User = {
        id: `user_${Date.now()}`,
        username: email.split('@')[0],
        email,
        profilePicture: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`
      };
      
      // Enregistrer l'utilisateur
      localStorage.setItem("musicExplorerUser", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, username: string): Promise<void> => {
    setIsLoading(true);
    
    try {
      // Simuler un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Créer un nouvel utilisateur
      const newUser: User = {
        id: `user_${Date.now()}`,
        username,
        email,
        profilePicture: `https://ui-avatars.com/api/?name=${username}&background=random`
      };
      
      // Enregistrer l'utilisateur
      localStorage.setItem("musicExplorerUser", JSON.stringify(newUser));
      setUser(newUser);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("musicExplorerUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
