// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.REACT_APP_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('⚠️ ERREUR : Variables Supabase manquantes')
  console.log('Ajoute dans ton .env :')
  console.log('VITE_SUPABASE_URL=https://xxx.supabase.co')
  console.log('VITE_SUPABASE_ANON_KEY=eyJxxx...')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce' // Meilleure sécurité
  }
})

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
