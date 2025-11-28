// src/lib/supabase.ts - VERSION AVEC TIMEOUT
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.REACT_APP_SUPABASE_ANON_KEY || ''

console.log('🔧 Init Supabase client');
console.log('URL:', supabaseUrl);
console.log('Key existe?', !!supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('⚠️ ERREUR : Variables Supabase manquantes')
  throw new Error('Missing Supabase credentials');
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
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
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