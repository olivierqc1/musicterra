// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Session = Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"];

type Profile = {
  id: string;
  display_name: string | null;
  bio: string | null;
  location_city: string | null;
  location_country: string | null;
  genres: string[] | null;
};

type AuthCtx = {
  session: Session | null;
  profile: Profile | null;
  signInWithMagicLink: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const Ctx = createContext<AuthCtx>({
  session: null,
  profile: null,
  signInWithMagicLink: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(Ctx);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  // Suivre la session
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  // Charger/créer le profil minimal
  useEffect(() => {
    (async () => {
      const uid = session?.user?.id;
      if (!uid) { setProfile(null); return; }
      const { data } = await supabase
        .from("profiles")
        .select("id, display_name, bio, location_city, location_country, genres")
        .eq("id", uid)
        .maybeSingle();

      if (data) {
        setProfile(data as Profile);
      } else {
        await supabase.from("profiles").insert({ id: uid, display_name: session!.user!.email });
        const { data: d2 } = await supabase
          .from("profiles")
          .select("id, display_name, bio, location_city, location_country, genres")
          .eq("id", uid)
          .maybeSingle();
        setProfile(d2 as Profile);
      }
    })();
  }, [session?.user?.id]);

  const signInWithMagicLink = async (email: string) => {
    // IMPORTANT : dans Supabase → Authentication → Settings → Site URL = ton domaine Vercel
    await supabase.auth.signInWithOtp({ email });
    alert("Lien magique envoyé. Vérifie ta boîte mail ✉️");
  };

  const signOut = async () => { await supabase.auth.signOut(); };

  return (
    <Ctx.Provider value={{ session, profile, signInWithMagicLink, signOut }}>
      {children}
    </Ctx.Provider>
  );
};
