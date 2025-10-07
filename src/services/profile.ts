import { supabase } from '../lib/supabase';

export interface Profile {
  id: string;
  email: string;
  display_name: string;
  avatar_url?: string;
  bio?: string;
  location?: string;
  instagram_handle?: string;
  facebook_url?: string;
  favorite_genres?: string[];
  created_at: string;
  updated_at: string;
}

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
}

export async function updateProfile(
  userId: string,
  updates: Partial<Profile>
): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating profile:', error);
    throw error;
  }

  return data;
}

export async function uploadAvatar(userId: string, file: File): Promise<string> {
  // Générer un nom de fichier unique
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}-${Date.now()}.${fileExt}`;
  const filePath = `avatars/${fileName}`;

  // Upload le fichier
  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, {
      upsert: true
    });

  if (uploadError) {
    throw uploadError;
  }

  // Obtenir l'URL publique
  const { data } = supabase.storage
    .from('avatars')
    .getPublicUrl(filePath);

  // Mettre à jour le profil avec la nouvelle URL
  await updateProfile(userId, { avatar_url: data.publicUrl });

  return data.publicUrl;
}

export async function searchProfiles(query: string): Promise<Profile[]> {
  if (!query.trim()) return [];

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .or(`display_name.ilike.%${query}%,email.ilike.%${query}%`)
    .limit(20);

  if (error) {
    console.error('Error searching profiles:', error);
    return [];
  }

  return data || [];
}

export async function getUserGroups(userId: string) {
  const { data, error } = await supabase
    .from('group_members')
    .select(`
      group_id,
      role,
      groups:group_id (
        id,
        name,
        description,
        created_at
      )
    `)
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching user groups:', error);
    return [];
  }

  return data || [];
}
