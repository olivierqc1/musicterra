import { supabase } from '../lib/supabase';

export interface Group {
  id: string;
  name: string;
  description?: string;
  tags?: string[];
  avatar_url?: string;
  is_public: boolean;
  member_count: number;
  created_at: string;
}

export interface GroupDiscovery {
  id: string;
  group_id: string;
  user_id: string;
  item_type: 'genre' | 'country' | 'artist';
  item_name: string;
  comment?: string;
  likes: number;
  created_at: string;
  profiles?: any;
}

export interface GroupEvent {
  id: string;
  group_id: string;
  creator_id: string;
  title: string;
  description?: string;
  event_type: 'concert' | 'meetup' | 'listening_party' | 'other';
  location?: string;
  event_date?: string;
  attendees: string[];
  created_at: string;
}

export interface GroupChallenge {
  id: string;
  group_id: string;
  creator_id: string;
  title: string;
  description?: string;
  challenge_type: 'discover_genres' | 'attend_concerts' | 'share_discoveries';
  goal_count: number;
  end_date?: string;
  participants: string[];
  completions: any;
  created_at: string;
}

// Recherche de groupes par tags et nom
export async function searchGroups(query?: string, tags?: string[]): Promise<Group[]> {
  let queryBuilder = supabase
    .from('groups')
    .select('*')
    .eq('is_public', true)
    .order('member_count', { ascending: false });

  if (query) {
    queryBuilder = queryBuilder.or(`name.ilike.%${query}%,description.ilike.%${query}%`);
  }

  if (tags && tags.length > 0) {
    queryBuilder = queryBuilder.contains('tags', tags);
  }

  const { data, error } = await queryBuilder.limit(50);

  if (error) {
    console.error('Error searching groups:', error);
    return [];
  }

  return data || [];
}

// Créer un groupe
export async function createGroup(
  name: string,
  description: string,
  tags: string[],
  isPublic: boolean = true
): Promise<Group | null> {
  const { data, error } = await supabase
    .from('groups')
    .insert({
      name,
      description,
      tags,
      is_public: isPublic,
      member_count: 1
    })
    .select()
    .single();

  if (error) throw error;

  // Ajouter le créateur comme owner
  if (data) {
    await supabase.from('group_members').insert({
      group_id: data.id,
      role: 'owner'
    });
  }

  return data;
}

// Partager une découverte dans le groupe
export async function shareDiscovery(
  groupId: string,
  itemType: 'genre' | 'country' | 'artist',
  itemName: string,
  comment?: string
): Promise<void> {
  const { error } = await supabase.from('group_discoveries').insert({
    group_id: groupId,
    item_type: itemType,
    item_name: itemName,
    comment
  });

  if (error) throw error;

  // Log activity
  await supabase.from('group_activities').insert({
    group_id: groupId,
    activity_type: 'shared_discovery',
    content: { item_type: itemType, item_name: itemName }
  });
}

// Récupérer les découvertes du groupe
export async function getGroupDiscoveries(groupId: string): Promise<GroupDiscovery[]> {
  const { data, error } = await supabase
    .from('group_discoveries')
    .select(`
      *,
      profiles:user_id (display_name, avatar_url)
    `)
    .eq('group_id', groupId)
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) throw error;
  return data || [];
}

// Créer un événement
export async function createGroupEvent(
  groupId: string,
  title: string,
  description: string,
  eventType: 'concert' | 'meetup' | 'listening_party' | 'other',
  location?: string,
  eventDate?: string
): Promise<void> {
  const { error } = await supabase.from('group_events').insert({
    group_id: groupId,
    title,
    description,
    event_type: eventType,
    location,
    event_date: eventDate,
    attendees: []
  });

  if (error) throw error;
}

// Récupérer les événements du groupe
export async function getGroupEvents(groupId: string): Promise<GroupEvent[]> {
  const { data, error } = await supabase
    .from('group_events')
    .select('*')
    .eq('group_id', groupId)
    .order('event_date', { ascending: true });

  if (error) throw error;
  return data || [];
}

// RSVP à un événement
export async function rsvpToEvent(eventId: string, userId: string): Promise<void> {
  const { data: event } = await supabase
    .from('group_events')
    .select('attendees')
    .eq('id', eventId)
    .single();

  if (!event) return;

  const attendees = event.attendees || [];
  if (attendees.includes(userId)) {
    // Déjà inscrit, retirer
    await supabase
      .from('group_events')
      .update({ attendees: attendees.filter((id: string) => id !== userId) })
      .eq('id', eventId);
  } else {
    // Ajouter
    await supabase
      .from('group_events')
      .update({ attendees: [...attendees, userId] })
      .eq('id', eventId);
  }
}

// Créer un challenge
export async function createChallenge(
  groupId: string,
  title: string,
  description: string,
  challengeType: 'discover_genres' | 'attend_concerts' | 'share_discoveries',
  goalCount: number,
  endDate?: string
): Promise<void> {
  const { error } = await supabase.from('group_challenges').insert({
    group_id: groupId,
    title,
    description,
    challenge_type: challengeType,
    goal_count: goalCount,
    end_date: endDate,
    participants: [],
    completions: {}
  });

  if (error) throw error;
}

// Récupérer les challenges actifs
export async function getGroupChallenges(groupId: string): Promise<GroupChallenge[]> {
  const { data, error } = await supabase
    .from('group_challenges')
    .select('*')
    .eq('group_id', groupId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

// Créer un sondage
export async function createPoll(
  groupId: string,
  question: string,
  options: string[],
  expiresAt?: string
): Promise<void> {
  const formattedOptions = options.map(text => ({
    text,
    votes: 0,
    voters: []
  }));

  const { error } = await supabase.from('group_polls').insert({
    group_id: groupId,
    question,
    options: formattedOptions,
    expires_at: expiresAt
  });

  if (error) throw error;
}

// Voter dans un sondage
export async function voteInPoll(
  pollId: string,
  optionIndex: number,
  userId: string
): Promise<void> {
  const { data: poll } = await supabase
    .from('group_polls')
    .select('options')
    .eq('id', pollId)
    .single();

  if (!poll) return;

  const options = poll.options as any[];
  
  // Retirer vote précédent
  options.forEach(opt => {
    opt.voters = opt.voters.filter((id: string) => id !== userId);
  });

  // Ajouter nouveau vote
  if (options[optionIndex]) {
    options[optionIndex].votes += 1;
    options[optionIndex].voters.push(userId);
  }

  await supabase
    .from('group_polls')
    .update({ options })
    .eq('id', pollId);
}

// Tags prédéfinis populaires
export const POPULAR_TAGS = [
  'Rock', 'Hip-Hop', 'Electronic', 'Jazz', 'Reggae', 'Metal',
  'Pop', 'Classical', 'Country', 'R&B', 'Latin', 'Folk',
  'Indie', 'Blues', 'Punk', 'Soul', 'Funk', 'World Music',
  'Montreal', 'Toronto', 'Paris', 'London', 'New York',
  'Concerts', 'Festivals', 'Vinyl', 'Live Music', 'Discovery'
];
