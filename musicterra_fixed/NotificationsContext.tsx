import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Notification } from '../types/types';

interface NotificationsContextType {
  notifications: Notification[];
  addNotification: (message: string, type?: 'success' | 'error' | 'info', duration?: number) => void;
  removeNotification: (id: string) => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider: React.FC<NotificationsProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (
    message: string, 
    type: 'success' | 'error' | 'info' = 'info', 
    duration: number = 3000
  ) => {
    const newNotification: Notification = {
      id: `notif_${Date.now()}`,
      message,
      type,
      duration
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto-suppression après la durée spécifiée
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, duration);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NotificationsContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = (): NotificationsContextType => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
};
