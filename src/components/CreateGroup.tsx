import { useState, useRef } from 'react';
import { createGroup, POPULAR_TAGS } from '../services/groups';
import { supabase } from '../lib/supabase';
import { toast } from "../lib/toast";
import { makeT, type Lang } from "../i18n";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
  language: Lang;
}

export default function CreateGroup({ onClose, onSuccess, language }: Props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = makeT(language);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      if (selectedTags.length < 5) {
        setSelectedTags([...selectedTags, tag]);
      } else {
        toast(t('Maximum 5 tags', 'Maximum 5 tags'), "info");
      }
    }
  };

  const addCustomTag = () => {
    const tag = customTag.trim();
    if (tag && !selectedTags.includes(tag)) {
      if (selectedTags.length < 5) {
        setSelectedTags([...selectedTags, tag]);
        setCustomTag('');
      } else {
        toast(t('Maximum 5 tags', 'Maximum 5 tags'), "info");
      }
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Vérifier la taille (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast(t('Fichier trop volumineux (max 2MB)', 'File too large (max 2MB)'), "info");
      return;
    }

    // Vérifier le type
    if (!file.type.startsWith('image/')) {
      toast(t('Veuillez choisir une image', 'Please choose an image'), "info");
      return;
    }

    setAvatarFile(file);

    // Créer preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const uploadGroupAvatar = async (groupId: string): Promise<string | null> => {
    if (!avatarFile) return null;

    const fileExt = avatarFile.name.split('.').pop();
    const fileName = `${groupId}-${Date.now()}.${fileExt}`;
    const filePath = `group-avatars/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, avatarFile);

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return null;
    }

    const { data } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleCreate = async () => {
    if (!name.trim()) {
      toast(t('Veuillez entrer un nom', 'Please enter a name'), "info");
      return;
    }

    if (selectedTags.length === 0) {
      toast(t('Veuillez sélectionner au moins un tag', 'Please select at least one tag'), "info");
      return;
    }

    setCreating(true);
    try {
      // Créer le groupe
      const group = await createGroup(name, description, selectedTags, isPublic);
      
      if (!group) {
        throw new Error('Failed to create group');
      }

      // Upload avatar si présent
      if (avatarFile) {
        const avatarUrl = await uploadGroupAvatar(group.id);
        if (avatarUrl) {
          await supabase
            .from('groups')
            .update({ avatar_url: avatarUrl })
            .eq('id', group.id);
        }
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      toast(t('Erreur lors de la création', 'Error creating group'), "error");
    }
    setCreating(false);
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginTop: 0 }}>
          {t('✨ Créer un nouveau groupe', '✨ Create a new group')}
        </h2>

        {/* Avatar */}
        <div style={styles.avatarSection}>
          <div
            onClick={() => fileInputRef.current?.click()}
            style={styles.avatarUpload}
          >
            {avatarPreview ? (
              <img src={avatarPreview} alt="Avatar" style={styles.avatarImg} />
            ) : (
              <div style={styles.avatarPlaceholder}>
                <span style={{ fontSize: 32 }}>📷</span>
                <p style={{ fontSize: 12, margin: '8px 0 0', color: '#5A6183' }}>
                  {t('Ajouter une photo', 'Add photo')}
                </p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </div>

        {/* Nom */}
        <div style={styles.field}>
          <label style={styles.label}>
            {t('Nom du groupe', 'Group name')} *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('Les mélomanes de Montréal', 'Montreal Music Lovers')}
            style={styles.input}
            maxLength={50}
          />
        </div>

        {/* Description */}
        <div style={styles.field}>
          <label style={styles.label}>
            {t('Description', 'Description')}
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t('Décrivez votre groupe...', 'Describe your group...')}
            style={styles.textarea}
            maxLength={200}
            rows={3}
          />
          <div style={{ fontSize: 12, color: '#5A6183', textAlign: 'right' }}>
            {description.length}/200
          </div>
        </div>

        {/* Tags prédéfinis */}
        <div style={styles.field}>
          <label style={styles.label}>
            {t('Tags', 'Tags')} * ({selectedTags.length}/5)
          </label>
          <div style={styles.tagsContainer}>
            {POPULAR_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                style={{
                  ...styles.tag,
                  ...(selectedTags.includes(tag) ? styles.tagActive : {})
                }}
                type="button"
              >
                {selectedTags.includes(tag) && '✓ '}
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Tag personnalisé */}
        <div style={styles.field}>
          <label style={styles.label}>
            {t('Ajouter un tag personnalisé', 'Add custom tag')}
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              placeholder={t('Votre tag...', 'Your tag...')}
              style={{ ...styles.input, flex: 1 }}
              maxLength={20}
              onKeyDown={(e) => e.key === 'Enter' && addCustomTag()}
            />
            <button onClick={addCustomTag} style={styles.addTagBtn} type="button">
              {t('Ajouter', 'Add')}
            </button>
          </div>
        </div>

        {/* Tags sélectionnés */}
        {selectedTags.length > 0 && (
          <div style={styles.selectedTags}>
            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
              {t('Tags sélectionnés:', 'Selected tags:')}
            </p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {selectedTags.map(tag => (
                <span key={tag} style={styles.selectedTag}>
                  {tag}
                  <button
                    onClick={() => toggleTag(tag)}
                    style={styles.removeTagBtn}
                    type="button"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Visibilité */}
        <div style={styles.field}>
          <label style={styles.label}>
            {t('Visibilité', 'Visibility')}
          </label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                checked={isPublic}
                onChange={() => setIsPublic(true)}
              />
              <div>
                <strong>{t('Public', 'Public')}</strong>
                <p style={{ fontSize: 12, color: '#5A6183', margin: '2px 0 0' }}>
                  {t('Tout le monde peut voir et rejoindre', 'Anyone can see and join')}
                </p>
              </div>
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                checked={!isPublic}
                onChange={() => setIsPublic(false)}
              />
              <div>
                <strong>{t('Privé', 'Private')}</strong>
                <p style={{ fontSize: 12, color: '#5A6183', margin: '2px 0 0' }}>
                  {t('Sur invitation uniquement', 'Invitation only')}
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 24 }}>
          <button onClick={onClose} style={styles.cancelBtn} disabled={creating}>
            {t('Annuler', 'Cancel')}
          </button>
          <button onClick={handleCreate} style={styles.createBtn} disabled={creating}>
            {creating ? '...' : t('✨ Créer le groupe', '✨ Create group')}
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
    padding: 16,
    overflowY: 'auto'
  },
  modal: {
    background: '#fff',
    borderRadius: 16,
    padding: 24,
    maxWidth: 600,
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    margin: '20px 0'
  },
  avatarSection: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20
  },
  avatarUpload: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    border: '3px dashed #DFE3EF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'border-color 0.2s',
    background: '#F4F6FB'
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  avatarPlaceholder: {
    textAlign: 'center',
    color: '#8A90AD'
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
    border: '1px solid #DFE3EF',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'inherit'
  },
  textarea: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #DFE3EF',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'inherit',
    resize: 'vertical'
  },
  tagsContainer: {
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap',
    maxHeight: 200,
    overflowY: 'auto',
    padding: 8,
    background: '#F4F6FB',
    borderRadius: 8
  },
  tag: {
    padding: '6px 12px',
    background: '#fff',
    border: '1px solid #DFE3EF',
    borderRadius: 999,
    cursor: 'pointer',
    fontSize: 13,
    transition: 'all 0.2s'
  },
  tagActive: {
    background: '#2C3FD1',
    color: '#fff',
    borderColor: '#2C3FD1'
  },
  addTagBtn: {
    padding: '10px 16px',
    background: '#EEF1F8',
    border: '1px solid #DFE3EF',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    whiteSpace: 'nowrap'
  },
  selectedTags: {
    marginBottom: 16,
    padding: 12,
    background: '#E8EBFC',
    borderRadius: 8,
    border: '1px solid #bfdbfe'
  },
  selectedTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 10px',
    background: '#2C3FD1',
    color: '#fff',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 500
  },
  removeTagBtn: {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 18,
    lineHeight: 1,
    padding: 0,
    marginLeft: 2
  },
  radioGroup: {
    display: 'grid',
    gap: 10
  },
  radioLabel: {
    display: 'flex',
    gap: 10,
    padding: 12,
    border: '1px solid #DFE3EF',
    borderRadius: 8,
    cursor: 'pointer',
    alignItems: 'flex-start',
    transition: 'border-color 0.2s'
  },
  cancelBtn: {
    padding: '10px 20px',
    border: '1px solid #DFE3EF',
    borderRadius: 8,
    background: '#fff',
    cursor: 'pointer',
    fontSize: 14
  },
  createBtn: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: 8,
    background: '#2C3FD1',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: 14
  }
};
