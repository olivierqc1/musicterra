import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`px-4 py-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
