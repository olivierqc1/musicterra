import React, { useEffect, useState } from 'react';
import { genres } from '../data/genres';
import { logEvent } from '../utils/analytics';

type Props = { language: 'fr' | 'en' };

type ProfileData = {
  displayName: string;
  bio: string;
  favoriteGenres: string[];
  photoDataUrl?: string;
};

const STORAGE_KEY = 'musicterra_profile_v1';

export const Profile: React.FC<Props> = ({ language }) => {
  const [data, setData] = useState<ProfileData>({ displayName: '', bio: '', favoriteGenres: [] });

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setData(JSON.parse(raw));
  }, []);

  const save = (next: ProfileData) => {
    const changed: string[] = [];
    if (next.displayName !== data.displayName) changed.push('displayName');
    if (next.bio !== data.bio) changed.push('bio');
    if (JSON.stringify(next.favoriteGenres) !== JSON.stringify(data.favoriteGenres)) changed.push('favoriteGenres');
    if (next.photoDataUrl !== data.photoDataUrl) changed.push('photo');

    setData(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    if (changed.length) logEvent({ type: 'profile_update', fields: changed });
  };

  const onPhoto = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => save({ ...data, photoDataUrl: reader.result as string });
    reader.readAsDataURL(file);
  };

  const toggleGenre = (g: string) => {
    const fav = new Set(data.favoriteGenres);
    fav.has(g) ? fav.delete(g) : fav.add(g);
    save({ ...data, favoriteGenres: Array.from(fav) });
  };

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'left' }}>
      <h2>{language === 'fr' ? 'Ton profil' : 'Your profile'}</h2>

      <div style={{ display: 'flex', gap: 16 }}>
        <div>
          <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', background: '#eee' }}>
            {data.photoDataUrl ? (
              <img src={data.photoDataUrl} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : null}
          </div>
          <label style={{ display: 'block', marginTop: 8 }}>
            <input type="file" accept="image/*" onChange={(e) => onPhoto(e.target.files?.[0])} />
          </label>
        </div>

        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            {language === 'fr' ? 'Nom affiché' : 'Display name'}
            <input
              style={styles.input}
              value={data.displayName}
              onChange={(e) => save({ ...data, displayName: e.target.value })}
              placeholder={language === 'fr' ? 'Ex: Aya' : 'e.g., Aya'}
            />
          </label>

          <label style={{ display: 'block' }}>
            {language === 'fr' ? 'Description' : 'Bio'}
            <textarea
              style={{ ...styles.input, minHeight: 80 }}
              value={data.bio}
              onChange={(e) => save({ ...data, bio: e.target.value })}
              placeholder={language === 'fr' ? 'Parle un peu de toi…' : 'Tell us about yourself…'}
            />
          </label>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <strong>{language === 'fr' ? 'Tes genres favoris' : 'Your favourite genres'}</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
          {genres.map((g) => (
            <label key={g.name} style={styles.tag}>
              <input
                type="checkbox"
                checked={data.favoriteGenres.includes(g.name)}
                onChange={() => toggleGenre(g.name)}
              />{' '}
              {g.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles: { [k: string]: React.CSSProperties } = {
  input: { width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid #ccc', marginTop: 6 },
  tag: { border: '1px solid #ddd', borderRadius: 999, padding: '6px 10px', background: '#fff' }
};

export default Profile;
