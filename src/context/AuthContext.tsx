// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { type Lang } from "../i18n";

// ----------------------
// TYPES
// ----------------------
export interface UserProfile {
  id: string;
  email: string;
  display_name?: string;
  avatar_url?: string;
  bio?: string;
  location?: string;
  instagram_username?: string;
  preferred_language?: Lang;
  created_at?: string;
  updated_at?: string;
}

interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  supabase: typeof supabase;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

// ----------------------
// CONTEXT
// ----------------------
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ----------------------
// PROVIDER
// ----------------------
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // ----------------------
  // CRÉER LE PROFIL SI INEXISTANT
  // ----------------------
  const ensureProfile = async (userId: string, email: string, metadata?: any) => {
    try {
      // Vérifier si le profil existe
      const { data: existing, error: selectError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", userId)
        .maybeSingle();

      if (selectError) {
        console.error("❌ Erreur vérification profil:", selectError);
        return;
      }

      // Si n'existe pas, le créer
      if (!existing) {
        console.log("📝 Création du profil pour:", email);
        
        const newProfile = {
          id: userId,
          email: email,
          display_name: metadata?.display_name || metadata?.full_name || email.split('@')[0],
          avatar_url: metadata?.avatar_url || metadata?.picture || '',
          instagram_username: metadata?.user_name || '',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };

        const { error: insertError } = await supabase
          .from("profiles")
          .insert(newProfile);

        if (insertError) {
          console.error("❌ Erreur création profil:", insertError);
          return;
        }
        
        console.log("✅ Profil créé pour", email);
      }
    } catch (error) {
      console.error("❌ Erreur ensureProfile:", error);
    }
  };

  // ----------------------
  // CHARGER LE PROFIL
  // ----------------------
  const loadProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("❌ Erreur chargement profil:", error);
        return;
      }
      
      setProfile(data as UserProfile);
      console.log("✅ Profil chargé:", data?.display_name);
    } catch (error) {
      console.error("❌ Erreur loadProfile:", error);
    }
  };

  // ----------------------
  // EFFET PRINCIPAL
  // ----------------------
  useEffect(() => {
    // Récupère la session existante
    supabase.auth.getSession().then(async ({ data }) => {
      console.log("🔐 Session initiale:", data.session ? "CONNECTÉ" : "NON CONNECTÉ");
      setSession(data.session);
      
      if (data.session?.user) {
        await ensureProfile(
          data.session.user.id, 
          data.session.user.email!,
          data.session.user.user_metadata
        );
        await loadProfile(data.session.user.id);
      }
      
      setLoading(false);
    });

    // Écoute les changements d'authentification
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("🔄 Auth event:", event, session?.user?.email || "NON CONNECTÉ");
      setSession(session);
      
      if (session?.user) {
        await ensureProfile(
          session.user.id, 
          session.user.email!,
          session.user.user_metadata
        );
        await loadProfile(session.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // ----------------------
  // DÉCONNEXION
  // ----------------------
  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      setProfile(null);
      console.log("👋 Déconnecté");
    } catch (error) {
      console.error("❌ Erreur déconnexion:", error);
    }
  };

  // ----------------------
  // METTRE À JOUR LE PROFIL
  // ----------------------
  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!session?.user) {
      throw new Error("Non connecté");
    }

    try {
      const { data, error } = await supabase
        .from("profiles")
        .update({ 
          ...updates, 
          updated_at: new Date().toISOString() 
        })
        .eq("id", session.user.id)
        .select()
        .single();

      if (error) throw error;
      
      setProfile(data as UserProfile);
      console.log("✅ Profil mis à jour");
    } catch (error) {
      console.error("❌ Erreur mise à jour profil:", error);
      throw error;
    }
  };

  // ----------------------
  // RAFRAÎCHIR LE PROFIL
  // ----------------------
  const refreshProfile = async () => {
    if (session?.user) {
      await loadProfile(session.user.id);
    }
  };

  // ----------------------
  // VALEUR DU CONTEXT
  // ----------------------
  const value: AuthContextType = {
    session,
    user: session?.user ?? null,
    profile,
    loading,
    supabase,
    signOut,
    updateProfile,
    refreshProfile,
  };

  // ----------------------
  // RENDER (PAS DE LOADER - on laisse App gérer)
  // ----------------------
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// ----------------------
// HOOK
// ----------------------
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth doit être utilisé dans AuthProvider");
  }
  return ctx;
};

export default AuthContext;
