import { useState, useRef } from 'react';
import { updateProfile, uploadAvatar, Profile } from '../services/profile';
import { useAuth } from '../context/AuthContext';

interface Props {
  currentProfile: Profile;
  onSave: () => void;
  onCancel: () => void;
  language: 'fr' | 'en';
}

export default function ProfileEdit({ currentProfile, onSave, onCancel, language }: Props) {
  const [displayName, setDisplayName] = useState(currentProfile.display_name || '');
  const [bio, setBio] = useState(currentProfile.bio || '');
  const [location, setLocation] = useState(currentProfile.location || '');
  const [instagram, setInstagram] = useState(currentProfile.instagram_handle || '');
  const [facebook, setFacebook] = useState(currentProfile.facebook_url || '');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { session } = useAuth();
  const t = (fr: string, en: string) => language === 'fr' ? fr : en;

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !session) return;

    // Vérifier la taille (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert(t('Fichier trop volumineux (max 2MB)', 'File too large (max 2MB)'));
      return;
    }

    // Vérifier le type
    if (!file.type.startsWith('image/')) {
      alert(t('Veuillez choisir une image', 'Please choose an image'));
      return;
    }

    setUploading(true);
    try {
      await uploadAvatar(session.user.id, file);
      alert(t('Photo mise à jour!', 'Photo updated!'));
      onSave(); // Recharger le profil
    } catch (error) {
      console.error(error);
      alert(t('Erreur lors de l\'upload', 'Upload error'));
    }
    setUploading(false);
  };

  const handleSave = async () => {
    if (!session) return;

    setSaving(true);
    try {
      await updateProfile(session.user.id, {
        display_name: displayName,
        bio,
        location,
        instagram_handle: instagram,
        facebook_url: facebook
      });
      onSave();
    } catch (error) {
      console.error(error);
      alert(t('Erreur lors de la sauvegarde', 'Error saving'));
    }
    setSaving(false);
  };

  return (
    <div style={styles.overlay} onClick={onCancel}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginTop: 0 }}>
          {t('Modifier mon profil', 'Edit my profile')}
        </h2>

        {/* Avatar */}
        <div style={styles.avatarSection}>
          <img
            src={currentProfile.avatar_url || 'https://via.placeholder.com/100'}
            alt="Avatar"
            style={styles.avatar}
          />
          <div>
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              style={styles.uploadBtn}
            >
              {uploading ? '...' : t('Changer la photo', 'Change photo')}
            </button>
            <p style={{ fontSize: 12, color: '#777', margin: '4px 0 0' }}>
              {t('JPG, PNG max 2MB', 'JPG, PNG max 2MB')}
            </p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
          />
        </div>

        {/* Display Name */}
        <div style={styles.field}>
          <label style={styles.label}>{t('Nom d\'affichage', 'Display name')}</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            style={styles.input}
            maxLength={50}
          />
        </div>

        {/* Bio */}
        <div style={styles.field}>
          <label style={styles.label}>{t('Bio', 'Bio')}</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder={t('Parlez de vous, vos goûts musicaux...', 'Tell about yourself, your music taste...')}
            style={styles.textarea}
            maxLength={300}
            rows={4}
          />
          <div style={{ fontSize: 12, color: '#777', textAlign: 'right' }}>
            {bio.length}/300
          </div>
        </div>

        {/* Location */}
        <div style={styles.field}>
          <label style={styles.label}>{t('Localisation', 'Location')}</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={t('Montréal, Canada', 'Montreal, Canada')}
            style={styles.input}
          />
        </div>

        {/* Social Media */}
        <div style={styles.field}>
          <label style={styles.label}>Instagram</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#777' }}>@</span>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="username"
              style={{ ...styles.input, flex: 1 }}
            />
          </div>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Facebook</label>
          <input
            type="url"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            placeholder="https://facebook.com/..."
            style={styles.input}
          />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 20 }}>
          <button onClick={onCancel} style={styles.cancelBtn}>
            {t('Annuler', 'Cancel')}
          </button>
          <button onClick={handleSave} disabled={saving} style={styles.saveBtn}>
            {saving ? '...' : t('Enregistrer', 'Save')}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'grid',
    placeItems: 'center',
    zIndex: 1000,
    padding: 16
  },
  modal: {
    background: '#fff',
    borderRadius: 16,
    padding: 24,
    maxWidth: 500,
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto'
  },
  avatarSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
    padding: 16,
    background: '#f9fafb',
    borderRadius: 12
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #667eea'
  },
  uploadBtn: {
    padding: '8px 12px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500
  },
  field: {
    marginBottom: 16
  },
  label: {
    display: 'block',
    marginBottom: 6,
    fontWeight: 500,
    fontSize: 14
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'inherit'
  },
  textarea: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'inherit',
    resize: 'vertical'
  },
  cancelBtn: {
    padding: '10px 20px',
    border: '1px solid #ddd',
    borderRadius: 8,
    background: '#fff',
    cursor: 'pointer'
  },
  saveBtn: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: 8,
    background: '#667eea',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 500
  }
};
