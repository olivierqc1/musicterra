// src/services/userSubmissions.ts
import { supabase } from '../lib/supabase';

/*
CREATE TABLE user_artist_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  artist_name TEXT NOT NULL,
  genres TEXT[],
  country TEXT,
  description TEXT,
  youtube_url TEXT,
  bandcamp_url TEXT,
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  votes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE artist_votes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  submission_id UUID REFERENCES user_artist_submissions(id) ON DELETE CASCADE,
  vote_type TEXT CHECK (vote_type IN ('up', 'down')),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, submission_id)
);
*/

export async function submitArtist(
  artistName: string,
  genres: string[],
  country: string,
  description: string,
  youtubeUrl?: string,
  bandcampUrl?: string
) {
  const { data, error } = await supabase
    .from('user_artist_submissions')
    .insert({
      artist_name: artistName,
      genres,
      country,
      description,
      youtube_url: youtubeUrl,
      bandcamp_url: bandcampUrl
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function voteOnSubmission(
  submissionId: string,
  voteType: 'up' | 'down'
) {
  // Enregistrer le vote
  const { error: voteError } = await supabase
    .from('artist_votes')
    .upsert({
      submission_id: submissionId,
      vote_type: voteType
    }, {
      onConflict: 'user_id,submission_id'
    });

  if (voteError) throw voteError;

  // Recalculer le score
  const { data: votes } = await supabase
    .from('artist_votes')
    .select('vote_type')
    .eq('submission_id', submissionId);

  const score = votes?.reduce((acc, v) => acc + (v.vote_type === 'up' ? 1 : -1), 0) || 0;

  await supabase
    .from('user_artist_submissions')
    .update({ votes: score })
    .eq('id', submissionId);
}

export async function getPendingSubmissions() {
  const { data } = await supabase
    .from('user_artist_submissions')
    .select('*')
    .eq('status', 'pending')
    .order('votes', { ascending: false })
    .limit(50);

  return data || [];
}
