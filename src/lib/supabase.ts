// src/lib/supabase.ts - VERSION SIMPLE
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

// CLIENT SIMPLE - Sans custom fetch qui peut bloquer
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
});

console.log('✅ Supabase client créé');

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
