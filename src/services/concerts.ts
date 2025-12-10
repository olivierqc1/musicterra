// src/services/concerts.ts
import { supabase } from '../lib/supabase';
import { createActivity } from './social'; // ✨ NOUVEAU

// ✅ Types
export interface ConcertAttendance {
  id: string;
  user_id: string;
  event_id: string;
  event_name: string;
  event_date: string;
  venue_name: string;
  city: string;
  status: 'going' | 'interested' | 'attended';
  rating?: number;
  review?: string;
  setlist?: string;
  created_at: string;
  updated_at: string;
}

const isDev = import.meta.env.DEV;

async function handleQuery<T>(promise: Promise<{ data: T | null; error: any }>): Promise<T | null> {
  const { data, error } = await promise;
  if (error) {
    if (isDev) console.error('💥 Supabase error:', error);
    return null;
  }
  return data;
}

// ✅ 1. Marquer un statut (Going / Interested / Attended)
export async function markConcertStatus(
  eventId: string,
  eventName: string,
  eventDate: string,
  venueName: string,
  city: string,
  status: 'going' | 'interested' | 'attended',
  rating?: number,
  review?: string
) {
  if (!supabase) {
    if (isDev) console.warn('⚠️ Supabase non initialisé');
    return null;
  }

  const { error } = await supabase.from('concert_attendance').upsert(
    {
      event_id: eventId,
      event_name: eventName,
      event_date: eventDate,
      venue_name: venueName,
      city: city,
      status: status,
      rating: rating,
      review: review,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,event_id' }
  );

  if (error && isDev) console.error('❌ markConcertStatus', error);

  // ✨ NOUVEAU: Créer une activité
  if (!error) {
    if (status === 'going') {
      await createActivity('going_concert', {
        artist: eventName,
        date: eventDate,
        venue: venueName,
        city: city,
      });
    } else if (status === 'attended') {
      await createActivity('attended_concert', {
        artist: eventName,
        date: eventDate,
        venue: venueName,
        city: city,
        rating: rating,
      });
    }
  }

  // Cache local pour réaction immédiate
  try {
    localStorage.setItem(
      `concert_status_${eventId}`,
      JSON.stringify({ status, rating, updated_at: Date.now() })
    );
  } catch {}

  return !error;
}

// ✅ 2. Soumettre une review rapide
export async function submitConcertReview(
  eventId: string,
  rating: number,
  review: string,
  setlist?: string
) {
  if (!supabase) return null;

  const { error } = await supabase
    .from('concert_attendance')
    .update({
      status: 'attended',
      rating,
      review,
      setlist,
      updated_at: new Date().toISOString(),
    })
    .eq('event_id', eventId);

  if (error && isDev) console.error('❌ submitConcertReview', error);

  // ✨ NOUVEAU: Créer une activité
  if (!error) {
    await createActivity('attended_concert', {
      artist: eventId, // Tu peux améliorer ça en passant le nom de l'artiste
      rating: rating,
    });
  }

  try {
    localStorage.setItem(
      `concert_review_${eventId}`,
      JSON.stringify({ rating, review, setlist })
    );
  } catch {}

  return !error;
}

// ✅ 3. Statut d'un utilisateur pour un concert donné
export async function getUserConcertStatus(eventId: string) {
  if (!supabase) return null;

  try {
    const cached = localStorage.getItem(`concert_status_${eventId}`);
    if (cached) return JSON.parse(cached);
  } catch {}

  const data = await handleQuery(
    supabase.from('concert_attendance').select('*').eq('event_id', eventId).maybeSingle()
  );

  return data;
}

// ✅ 4. Tous les concerts d'un utilisateur
export async function getUserConcerts(userId: string) {
  if (!supabase) return [];

  const data = await handleQuery(
    supabase
      .from('concert_attendance')
      .select('*')
      .eq('user_id', userId)
      .order('event_date', { ascending: false })
  );

  return data || [];
}

// ✅ 5. Feed global ou de groupe
export async function getConcertFeed(groupId?: string) {
  if (!supabase) return [];

  let query = supabase
    .from('concert_attendance')
    .select(
      `
      *,
      profiles:user_id (display_name, avatar_url)
    `
    )
    .order('created_at', { ascending: false })
    .limit(50);

  if (groupId) {
    const { data: members } = await supabase
      .from('group_members')
      .select('user_id')
      .eq('group_id', groupId);

    if (members?.length) {
      const memberIds = members.map((m) => m.user_id);
      query = query.in('user_id', memberIds);
    }
  }

  const data = await handleQuery(query);
  return data || [];
}

// ✅ 6. Upload de photo rapide + URL publique directe
export async function uploadConcertPhoto(attendanceId: string, file: File) {
  if (!supabase) return null;

  const fileExt = file.name.split('.').pop();
  const fileName = `${attendanceId}-${Date.now()}.${fileExt}`;
  const filePath = `concert-photos/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('concert-photos')
    .upload(filePath, file);

  if (uploadError) {
    if (isDev) console.error('❌ uploadConcertPhoto', uploadError);
    return null;
  }

  const { data } = supabase.storage.from('concert-photos').getPublicUrl(filePath);
  const publicUrl = data?.publicUrl || '';

  const { error: dbError } = await supabase
    .from('concert_photos')
    .insert({ attendance_id: attendanceId, photo_url: publicUrl });

  if (dbError && isDev) console.error('❌ insert photo_url', dbError);

  return publicUrl;
}

// ✅ 7. Statistiques utilisateur (optimisées)
export async function getConcertStats(userId: string) {
  const concerts = await getUserConcerts(userId);
  if (!concerts?.length) {
    return {
      totalConcerts: 0,
      uniqueArtists: 0,
      uniqueCities: 0,
      averageRating: 0,
      topRated: [],
    };
  }

  const attended = concerts.filter((c) => c.status === 'attended');
  const uniqueArtists = new Set<string>();
  const uniqueCities = new Set<string>();

  for (const c of attended) {
    uniqueCities.add(c.city);
    const artist = c.event_name.split(/at|@/)[0].trim();
    uniqueArtists.add(artist);
  }

  const ratings = attended.filter((c) => c.rating);
  const avgRating =
    ratings.length > 0
      ? ratings.reduce((sum, c) => sum + (c.rating || 0), 0) / ratings.length
      : 0;

  const topRated = [...attended]
    .filter((c) => c.rating)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);

  return {
    totalConcerts: attended.length,
    uniqueArtists: uniqueArtists.size,
    uniqueCities: uniqueCities.size,
    averageRating: Math.round(avgRating * 10) / 10,
    topRated,
  };
}