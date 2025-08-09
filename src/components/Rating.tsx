import React from 'react';

interface RatingProps {
  itemName: string;
  onRate: (rating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({ itemName, onRate }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <p>What rating would you give <strong>{itemName}</strong>? (out of 10)</p>
      {[...Array(10)].map((_, index) => (
        <button 
          key={index}
          onClick={() => onRate(index + 1)}
          style={{
            margin: '0.2rem',
            padding: '0.5rem 0.8rem',
            borderRadius: '8px',
            backgroundColor: '#eee',
            border: '1px solid #ccc',
            cursor: 'pointer'
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};