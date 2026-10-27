// src/lib/supabase.ts - VERSION AVEC TIMEOUT
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Sans les variables Supabase (oubliées dans Vercel, par exemple), on ne
// fait plus planter toute l'app : la roue et les fiches marchent quand même,
// seules la connexion et la sauvegarde dans le cloud échouent.
export const supabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)
if (!supabaseConfigured) {
  console.error('⚠️ Variables VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY manquantes : connexion désactivée')
}

// Helper pour timeout de 10 secondes
const fetchWithTimeout = async (url: string, options: any = {}) => {
  const timeout = 10000; // 10 secondes
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error: any) {
    clearTimeout(id);
    if (error.name === 'AbortError') {
      console.error('⏱️ TIMEOUT: Request took more than 10 seconds');
      throw new Error('Request timeout after 10 seconds');
    }
    throw error;
  }
};

// CLIENT avec timeout
export const supabase = createClient(
  supabaseUrl || "https://not-configured.supabase.co",
  supabaseAnonKey || "not-configured",
  {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  },
  db: {
    schema: 'public',
  },
  global: {
    fetch: fetchWithTimeout,
  },
});

console.log('✅ Supabase client créé avec timeout de 10s');

// Helper pour récupérer la session
export const getSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

// Helper pour récupérer l'utilisateur
export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}