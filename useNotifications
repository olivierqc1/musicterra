import { useState } from 'react';
import { Notification } from '../types/types';

export const useNotifications = () => {
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
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, duration);
  };

  return {
    notifications,
    addNotification
  };
};
