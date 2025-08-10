import React, { createContext, useContext, useState } from 'react';
import { similarityMatrix, cityStyleBoosts } from '../data/matrix'; // ⬅️ AJOUTE cityStyleBoosts

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

      // 1) Similarités (pays <-> genres, genres <-> genres)
      if (similarityMatrix[itemName]) {
        for (const [relatedItem, similarity] of Object.entries(similarityMatrix[itemName])) {
          const existing = updated[relatedItem] ?? 0;
          updated[relatedItem] = Math.min(10, existing + rating * similarity);
        }
      }

      // 2) Boosts ville->genre agrégés par pays (si on note un pays)
      if (cityStyleBoosts[itemName]) {
        for (const [genre, weight] of Object.entries(cityStyleBoosts[itemName])) {
          const existing = updated[genre] ?? 0;
          updated[genre] = Math.min(10, existing + rating * weight);
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

