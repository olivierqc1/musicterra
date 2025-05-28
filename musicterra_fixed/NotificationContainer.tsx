import React from 'react';
import { Notification } from '../../types/types';
import './NotificationContainer.css';

interface NotificationContainerProps {
  notifications: Notification[];
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({ notifications }) => {
  if (notifications.length === 0) return null;

  return (
    <div className="notifications-container">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`notification notification-${notification.type}`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
