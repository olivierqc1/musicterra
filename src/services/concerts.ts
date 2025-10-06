import { supabase } from '../lib/supabase';

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

export async function markConcertStatus(
  eventId: string,
  eventName: string,
  eventDate: string,
  venueName: string,
  city: string,
  status: 'going' | 'interested' | 'attended'
) {
  const { data, error } = await supabase
    .from('concert_attendance')
    .upsert({
      event_id: eventId,
      event_name: eventName,
      event_date: eventDate,
      venue_name: venueName,
      city: city,
      status: status,
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'user_id,event_id'
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function submitConcertReview(
  eventId: string,
  rating: number,
  review: string,
  setlist?: string
) {
  const { data, error } = await supabase
    .from('concert_attendance')
    .update({
      status: 'attended',
      rating,
      review,
      setlist,
      updated_at: new Date().toISOString()
    })
    .eq('event_id', eventId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserConcertStatus(eventId: string) {
  const { data } = await supabase
    .from('concert_attendance')
    .select('*')
    .eq('event_id', eventId)
    .maybeSingle();

  return data;
}

export async function getUserConcerts(userId: string) {
  const { data, error } = await supabase
    .from('concert_attendance')
    .select('*')
    .eq('user_id', userId)
    .order('event_date', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getConcertFeed(groupId?: string) {
  // Si groupId fourni, récupérer les concerts des membres du groupe
  // Sinon, récupérer tous les concerts publics récents
  
  let query = supabase
    .from('concert_attendance')
    .select(`
      *,
      profiles:user_id (display_name, avatar_url)
    `)
    .order('created_at', { ascending: false })
    .limit(50);

  if (groupId) {
    // Récupérer les membres du groupe et filtrer
    const { data: members } = await supabase
      .from('group_members')
      .select('user_id')
      .eq('group_id', groupId);
    
    if (members) {
      const memberIds = members.map(m => m.user_id);
      query = query.in('user_id', memberIds);
    }
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

export async function uploadConcertPhoto(attendanceId: string, file: File) {
  // Upload to Supabase Storage
  const fileExt = file.name.split('.').pop();
  const fileName = `${attendanceId}-${Date.now()}.${fileExt}`;
  const filePath = `concert-photos/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('concert-photos')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  // Get public URL
  const { data } = supabase.storage
    .from('concert-photos')
    .getPublicUrl(filePath);

  // Save to database
  const { error: dbError } = await supabase
    .from('concert_photos')
    .insert({
      attendance_id: attendanceId,
      photo_url: data.publicUrl
    });

  if (dbError) throw dbError;
  return data.publicUrl;
}

export async function getConcertStats(userId: string) {
  const concerts = await getUserConcerts(userId);
  const attended = concerts.filter(c => c.status === 'attended');
  
  const uniqueArtists = new Set();
  const uniqueCities = new Set();
  
  attended.forEach(c => {
    uniqueCities.add(c.city);
    // Extraire les artistes du nom de l'événement (approximatif)
    const artists = c.event_name.split(/at|@/)[0].trim();
    uniqueArtists.add(artists);
  });

  const avgRating = attended.length > 0
    ? attended.reduce((sum, c) => sum + (c.rating || 0), 0) / attended.filter(c => c.rating).length
    : 0;

  return {
    totalConcerts: attended.length,
    uniqueArtists: uniqueArtists.size,
    uniqueCities: uniqueCities.size,
    averageRating: Math.round(avgRating * 10) / 10,
    topRated: attended
      .filter(c => c.rating)
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 3)
  };
}
