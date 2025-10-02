// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

// Type pour le profil utilisateur
export interface UserProfile {
  id: string;
  email: string;
  display_name?: string;
  preferred_language?: "fr" | "en";
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signInWithEmail: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Créer un profil si inexistant
  const ensureProfile = async (userId: string, email: string) => {
    try {
      // Vérifier si le profil existe
      const { data: existing, error: selectError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", userId)
        .maybeSingle();

      if (selectError) {
        console.error("Erreur vérification profil:", selectError);
        return;
      }

      // Si n'existe pas, le créer
      if (!existing) {
        console.log("Création du profil pour:", email);
        
        const { error: insertError } = await supabase
          .from("profiles")
          .insert({
            id: userId,
            email: email,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          });

        if (insertError) {
          console.error("Erreur création profil:", insertError);
          throw insertError;
        }
        
        console.log("✅ Profil créé automatiquement pour", email);
      } else {
        console.log("Profil existe déjà pour:", email);
      }
    } catch (error) {
      console.error("Erreur ensureProfile:", error);
    }
  };

  // Charger le profil depuis Supabase
  const loadProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Erreur chargement profil:", error);
        return;
      }
      
      setProfile(data as UserProfile);
      console.log("✅ Profil chargé:", data);
    } catch (error) {
      console.error("Erreur loadProfile:", error);
    }
  };

  useEffect(() => {
    // Récupère la session existante
    supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session);
      if (data.session?.user) {
        await ensureProfile(data.session.user.id, data.session.user.email!);
        await loadProfile(data.session.user.id);
      }
      setLoading(false);
    });

    // Écoute les changements d'authentification
    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log("Auth state changed:", _event, session?.user?.email);
      setSession(session);
      
      if (session?.user) {
        await ensureProfile(session.user.id, session.user.email!);
        await loadProfile(session.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Connexion avec email (magic link)
  const signInWithEmail = async (email: string) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({ 
        email,
        options: {
          emailRedirectTo: window.location.origin,
        }
      });

      if (error) throw error;
      console.log("✉️ Magic link envoyé à:", email);
    } catch (error: any) {
      console.error("Erreur connexion:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Déconnexion
  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setProfile(null);
    console.log("👋 Déconnecté");
  };

  // Mettre à jour le profil
  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!session?.user) {
      throw new Error("Non connecté");
    }

    try {
      const { data, error } = await supabase
        .from("profiles")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", session.user.id)
        .select()
        .single();

      if (error) throw error;
      setProfile(data as UserProfile);
      console.log("✅ Profil mis à jour:", data);
    } catch (error) {
      console.error("Erreur mise à jour profil:", error);
      throw error;
    }
  };

  // Rafraîchir le profil
  const refreshProfile = async () => {
    if (session?.user) {
      await loadProfile(session.user.id);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        profile,
        loading,
        signInWithEmail,
        signOut,
        updateProfile,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth doit être utilisé dans AuthProvider");
  return ctx;
};
