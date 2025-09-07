import React from 'react';
import type { Item } from '../types';
import { logEvent } from '../utils/analytics';

interface WheelProps {
  items: Item[];
  onSpinResult: (item: Item) => void;
  pool?: 'all' | 'genres' | 'countries' | 'cities';
}

export const Wheel: React.FC<WheelProps> = ({ items, onSpinResult, pool = 'all' }) => {
  const spinWheel = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    logEvent({ type: 'spin', pool, picked: randomItem.name });
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

