// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.REACT_APP_SUPABASE_ANON_KEY || ''

console.log('🔧 Init Supabase client');
console.log('URL:', supabaseUrl);
console.log('Key existe?', !!supabaseAnonKey);
console.log('Key length:', supabaseAnonKey.length);

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('⚠️ ERREUR : Variables Supabase manquantes')
  console.log('Ajoute dans ton .env :')
  console.log('VITE_SUPABASE_URL=https://xxx.supabase.co')
  console.log('VITE_SUPABASE_ANON_KEY=eyJxxx...')
  throw new Error('Missing Supabase credentials');
}

// Custom fetch avec timeout
const fetchWithTimeout = (url: RequestInfo | URL, options: RequestInit = {}) => {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => {
        console.error('⏰ Supabase fetch timeout after 15s');
        reject(new Error('Supabase request timeout'));
      }, 15000)
    ),
  ]);
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  },
  global: {
    fetch: fetchWithTimeout,
  },
  db: {
    schema: 'public',
  },
  // Log toutes les requêtes
  // @ts-ignore
  realtime: {
    log_level: 'info',
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
