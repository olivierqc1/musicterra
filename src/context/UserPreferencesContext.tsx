import React, { createContext, useContext } from "react";

type UserPreferences = { addRatingFor: (name: string, score: number) => void };
const Ctx = createContext<UserPreferences>({ addRatingFor: () => {} });

export const UserPreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const addRatingFor = (_name: string, _score: number) => {
    // plus tard: sauvegarde supabase
  };
  return <Ctx.Provider value={{ addRatingFor }}>{children}</Ctx.Provider>;
};

export const useUserPreferences = () => useContext(Ctx);
