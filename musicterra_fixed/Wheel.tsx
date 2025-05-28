import React from 'react';
import { useTheme } from '../hooks/useTheme';
import './Wheel.css';

interface WheelItem {
  name: string;
  [key: string]: any;
}

interface WheelProps {
  type: 'genre' | 'country';
  items: WheelItem[];
  rotation: number;
  onSpin: () => void;
  title: string;
  spinButtonText: string;
}

const Wheel: React.FC<WheelProps> = ({
  type,
  items,
  rotation,
  onSpin,
  title,
  spinButtonText
}) => {
  const { theme } = useTheme();
  const isMobile = window.innerWidth < 768;

  return (
    <div className={`wheel-container ${isMobile ? 'mobile' : ''}`}>
      <h3 className="wheel-title">{title}</h3>
      
      <div 
        className="wheel"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="wheel-item"
            style={{
              transform: `rotate(${(360 / items.length) * index}deg) translateX(120px)`,
              backgroundColor: `hsl(${(360 / items.length) * index}, 70%, 50%)`,
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      
      <button 
        className="spin-button"
        onClick={onSpin}
      >
        {spinButtonText}
      </button>
    </div>
  );
};

export default Wheel;
