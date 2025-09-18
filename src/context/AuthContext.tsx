// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

// Type de session Supabase
type Session = Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"];

// Schéma minimal du profil (table public.profiles)
export type Profile = {
  id: string;
  username: string | null;
  avatar_url: string | null;
  preferences: any | null; // tu pourras typer plus tard (e.g. {genres:string[]})
  updated_at: string | null;
};

type AuthCtx = {
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  signInWithMagicLink: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  saveProfile: (patch: Partial<Profile>) => Promise<void>;
};

const Ctx = createContext<AuthCtx | null>(null);
export const useAuth = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used within <AuthProvider>");
  return v;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  // 1) Monter la session existante + écouter les changements
  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  // 2) Charger / créer le profil quand on a une session
  useEffect(() => {
    (async () => {
      const uid = session?.user?.id;
      if (!uid) {
        setProfile(null);
        return;
      }
      // lire profil
      const { data, error } = await supabase
        .from("profiles")
        .select("id, username, avatar_url, preferences, updated_at")
        .eq("id", uid)
        .maybeSingle();

      if (error) {
        console.error("profiles select error:", error.message);
        return;
      }

      if (data) {
        setProfile(data as Profile);
        return;
      }

      // créer profil minimal s’il n’existe pas
      const fallbackName = session.user.email?.split("@")[0] ?? "User";
      const { data: ins, error: insErr } = await supabase
        .from("profiles")
        .insert([{ id: uid, username: fallbackName, avatar_url: null, preferences: null }])
        .select()
        .maybeSingle();

      if (insErr) {
        console.error("profiles insert error:", insErr.message);
        return;
      }
      setProfile(ins as Profile);
    })();
  }, [session?.user?.id]);

  // 3) Connexion par lien magique (IMPORTANT: redirection exacte)
  const signInWithMagicLink = async (email: string) => {
    const redirect = `${window.location.origin}/`; // ex: https://musicterra-xxx.vercel.app/
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirect,
        shouldCreateUser: true,
      },
    });
    if (error) {
      console.error("signInWithOtp error:", error.message);
      throw error;
    }
  };

  // 4) Déconnexion
  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setProfile(null);
  };

  // 5) Sauvegarde partielle du profil
  const saveProfile = async (patch: Partial<Profile>) => {
    if (!session?.user?.id) return;
    const uid = session.user.id;
    const { data, error } = await supabase
      .from("profiles")
      .update({ ...patch, updated_at: new Date().toISOString() })
      .eq("id", uid)
      .select()
      .maybeSingle();
    if (error) {
      console.error("profiles update error:", error.message);
      throw error;
    }
    setProfile(data as Profile);
  };

  return (
    <Ctx.Provider
      value={{
        session,
        profile,
        loading,
        signInWithMagicLink,
        signOut,
        saveProfile,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};
