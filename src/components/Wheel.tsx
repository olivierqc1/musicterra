import React from 'react';

type Item = {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  subgenres?: string[];
  regions?: string[];
  artists?: string[];
  spotify?: string;
  image?: string;
};

interface WheelProps {
  items: Item[];
  onSpinResult: (item: Item) => void;
}

export const Wheel: React.FC<WheelProps> = ({ items, onSpinResult }) => {
  const spinWheel = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    onSpinResult(randomItem);
  };

  return (
    <div>
      <button 
        onClick={spinWheel}
        style={{
          fontSize: '1.5rem',
          padding: '1rem 2rem',
          borderRadius: '12px',
          border: 'none',
          background: '#4CAF50',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        🎡 Spin the wheel
      </button>
    </div>
  );
};