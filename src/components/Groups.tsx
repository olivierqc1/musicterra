import React, { useEffect, useState } from 'react';
import { logEvent } from '../utils/analytics';

type Props = { language: 'fr' | 'en' };

type Group = { id: string; name: string; description?: string };
type Message = { groupId: string; author: string; text: string; ts: number };

const GKEY = 'musicterra_groups_v1';
const MKEY = 'musicterra_messages_v1';

export const Groups: React.FC<Props> = ({ language }) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');

  useEffect(() => {
    const g = localStorage.getItem(GKEY);
    const m = localStorage.getItem(MKEY);
    if (g) setGroups(JSON.parse(g));
    if (m) setMessages(JSON.parse(m));
  }, []);

  const saveGroups = (g: Group[]) => {
    setGroups(g);
    localStorage.setItem(GKEY, JSON.stringify(g));
  };
  const saveMessages = (m: Message[]) => {
    setMessages(m);
    localStorage.setItem(MKEY, JSON.stringify(m));
  };

  const createGroup = () => {
    if (!newName.trim()) return;
    const g: Group = { id: crypto.randomUUID(), name: newName.trim(), description: newDesc.trim() || undefined };
    const next = [...groups, g];
    saveGroups(next);
    setNewName('');
    setNewDesc('');
    setCurrent(g.id);
    logEvent({ type: 'group_create', name: g.name });
  };

  const send = () => {
    if (!current || !author.trim() || !text.trim()) return;
    const msg: Message = { groupId: current, author: author.trim(), text: text.trim(), ts: Date.now() };
    saveMessages([...messages, msg]);
    setText('');
    logEvent({ type: 'message_send', groupId: current });
  };

  const visible = current ? messages.filter((m) => m.groupId === current) : [];

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'left' }}>
      <h2>{language === 'fr' ? 'Groupes' : 'Groups'}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 16 }}>
        <div>
          <h3 style={{ marginBottom: 8 }}>{language === 'fr' ? 'Créer un groupe' : 'Create a group'}</h3>
          <input
            placeholder={language === 'fr' ? 'Nom du groupe' : 'Group name'}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={styles.input}
          />
          <textarea
            placeholder={language === 'fr' ? 'Description (optionnel)' : 'Description (optional)'}
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            style={{ ...styles.input, minHeight: 60 }}
          />
          <button onClick={createGroup} style={styles.btn}>
            {language === 'fr' ? 'Créer' : 'Create'}
          </button>

          <h3 style={{ margin: '16px 0 8px' }}>{language === 'fr' ? 'Tes groupes' : 'Your groups'}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {groups.map((g) => (
              <li key={g.id}>
                <button
                  onClick={() => setCurrent(g.id)}
                  style={{
                    ...styles.groupBtn,
                    ...(current === g.id ? styles.groupActive : {})
                  }}
                  title={g.description}
                >
                  {g.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {current ? (
            <>
              <h3>{language === 'fr' ? 'Discussion' : 'Chat'}</h3>
              <div style={styles.chatBox}>
                {visible.length === 0 ? (
                  <p style={{ color: '#666' }}>
                    {language === 'fr' ? 'Aucun message.' : 'No messages yet.'}
                  </p>
                ) : (
                  visible
                    .sort((a, b) => a.ts - b.ts)
                    .map((m, i) => (
                      <div key={i} style={styles.msg}>
                        <strong>{m.author}</strong> —{' '}
                        <span style={{ color: '#666', fontSize: 12 }}>
                          {new Date(m.ts).toLocaleString()}
                        </span>
                        <div>{m.text}</div>
                      </div>
                    ))
                )}
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <input
                  placeholder={language === 'fr' ? 'Ton nom' : 'Your name'}
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  style={{ ...styles.input, flex: '0 0 200px' }}
                />
                <input
                  placeholder={language === 'fr' ? 'Ton message…' : 'Your message…'}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  style={{ ...styles.input, flex: 1 }}
                />
                <button onClick={send} style={styles.btn}>
                  {language === 'fr' ? 'Envoyer' : 'Send'}
                </button>
              </div>
            </>
          ) : (
            <p>{language === 'fr' ? 'Sélectionne un groupe à gauche.' : 'Select a group on the left.'}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles: { [k: string]: React.CSSProperties } = {
  input: { width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid #ccc', marginBottom: 8 },
  btn: { padding: '8px 12px', borderRadius: 8, border: '1px solid #111', background: '#111', color: '#fff', cursor: 'pointer' },
  groupBtn: { width: '100%', textAlign: 'left', padding: '8px 10px', borderRadius: 8, border: '1px solid #ddd', background: '#fff', cursor: 'pointer', marginBottom: 6 },
  groupActive: { background: '#111', color: '#fff', borderColor: '#111' },
  chatBox: { minHeight: 260, maxHeight: 380, overflowY: 'auto', border: '1px solid #ddd', borderRadius: 8, padding: 10, background: '#fafafa' },
  msg: { padding: '6px 8px', borderRadius: 8, background: '#fff', border: '1px solid #eee', marginBottom: 6 }
};

export default Groups;
