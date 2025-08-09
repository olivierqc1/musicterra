import React, { createContext, useContext, useState } from 'react';
import { similarityMatrix } from '../data/matrix';

type UserPreferences = {
  ratings: { [itemName: string]: number }
  addRating: (itemName: string, rating: number) => void
}

const UserPreferencesContext = createContext<UserPreferences>({
  ratings: {},
  addRating: () => {}
});

export const useUserPreferences = () => useContext(UserPreferencesContext);

export const UserPreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ratings, setRatings] = useState<{ [itemName: string]: number }>({});

  const addRating = (itemName: string, rating: number) => {
    setRatings(prev => {
      const updated = { ...prev, [itemName]: rating };

      if (similarityMatrix[itemName]) {
        for (const [relatedItem, similarity] of Object.entries(similarityMatrix[itemName])) {
          const existing = updated[relatedItem] ?? 0;
          updated[relatedItem] = Math.min(10, existing + rating * similarity);
        }
      }
      return updated;
    });
  };

  return (
    <UserPreferencesContext.Provider value={{ ratings, addRating }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};
