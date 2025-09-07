import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

type Group = {
  id: string;
  name: string;
  description: string | null;
  hashtags: string[] | null;
  cover_image: string | null;
  sponsored_playlist: string | null;
  creator: string | null;
  created_at: string;
};

type Member = { group_id: string; user_id: string };
type Message = { id: string; group_id: string; user_id: string; content: string; created_at: string };

const input: React.CSSProperties = {
  width: "100%",
  padding: 10,
  borderRadius: 10,
  border: "1px solid #ccc",
  background: "#fff",
  color: "#111",
};

const btn: React.CSSProperties = {
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #111",
  background: "#111",
  color: "#fff",
  cursor: "pointer",
};

const badge: React.CSSProperties = {
  padding: "4px 8px",
  borderRadius: 999,
  border: "1px solid #ddd",
  background: "#fafafa",
  fontSize: 12,
};

const Groups: React.FC<{ language: "fr" | "en" }> = ({ language }) => {
  const { session } = useAuth();
  const uid = session?.user?.id;
  const t = (fr: string, en: string) => (language === "fr" ? fr : en);

  const [groups, setGroups] = useState<Group[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"recent" | "popular">("recent");
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  // Creation form
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  // Load data
  useEffect(() => {
    (async () => {
      const { data: gs } = await supabase
        .from("groups")
        .select("*")
        .order("created_at", { ascending: false });
      setGroups((gs ?? []) as Group[]);

      const { data: ms } = await supabase.from("group_members").select("group_id, user_id");
      setMembers((ms ?? []) as Member[]);

      const { data: msgs } = await supabase
        .from("group_messages")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      setMessages((msgs ?? []) as Message[]);
    })();
  }, []);

  const myGroups = useMemo(() => {
    if (!uid) return new Set<string>();
    return new Set(members.filter((m) => m.user_id === uid).map((m) => m.group_id));
  }, [members, uid]);

  const msgCount = useMemo(() => {
    const m = new Map<string, number>();
    for (const msg of messages) m.set(msg.group_id, (m.get(msg.group_id) ?? 0) + 1);
    return m;
  }, [messages]);

  const filtered = useMemo(() => {
    let arr = [...groups];
    const norm = (s: string) => (s || "").normalize("NFKD").toLowerCase();
    const nq = norm(q);
    if (nq) {
      arr = arr.filter(
        (g) =>
          norm(g.name).includes(nq) ||
          norm(g.description || "").includes(nq) ||
          (g.hashtags ?? []).some((h) => norm(h).includes(nq))
      );
    }
    if (sort === "popular") {
      arr.sort((a, b) => (msgCount.get(b.id) ?? 0) - (msgCount.get(a.id) ?? 0));
    } else {
      arr.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
    }
    return arr;
  }, [groups, q, sort, msgCount]);

  const join = async (group_id: string) => {
    if (!uid) return;
    await supabase.from("group_members").upsert({ group_id, user_id: uid });
    const { data: ms } = await supabase.from("group_members").select("group_id, user_id");
    setMembers((ms ?? []) as Member[]);
  };

  const leave = async (group_id: string) => {
    if (!uid) return;
    await supabase.from("group_members").delete().eq("group_id", group_id).eq("user_id", uid);
    const { data: ms } = await supabase.from("group_members").select("group_id, user_id");
    setMembers((ms ?? []) as Member[]);
    if (activeGroup === group_id) setActiveGroup(null);
  };

  const createGroup = async () => {
    if (!uid || !name.trim()) return;
    const payload = {
      name: name.trim(),
      description: desc.trim() || null,
      hashtags: null,
      creator: uid,
    };
    const { data, error } = await supabase.from("groups").insert(payload).select("*").single();
    if (!error && data) {
      setGroups([data as Group, ...groups]);
      setName("");
      setDesc("");
    }
  };

  const sendMessage = async (content: string) => {
    if (!uid || !activeGroup || !content.trim()) return;
    await supabase
      .from("group_messages")
      .insert({ group_id: activeGroup, user_id: uid, content: content.trim() });
    const { data: msgs } = await supabase
      .from("group_messages")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    setMessages((msgs ?? []) as Message[]);
  };

  const [draft, setDraft] = useState("");

  return (
    <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 12 }}>
      {/* LEFT: create + list */}
      <div style={{ border: "1px solid #e7e7e7", borderRadius: 14, padding: 12, background: "#fff" }}>
        <h3 style={{ marginTop: 0 }}>{t("Créer un groupe", "Create a group")}</h3>
        <input
          style={input}
          placeholder={t("Nom du groupe", "Group name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          style={{ ...input, minHeight: 70, marginTop: 8 }}
          placeholder={t("Description (optionnel)", "Description (optional)")}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button style={{ ...btn, marginTop: 8 }} onClick={createGroup}>
          {t("Créer", "Create")}
        </button>

        <h3 style={{ marginTop: 16 }}>{t("Tes groupes", "Your groups")}</h3>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {filtered
            .filter((g) => myGroups.has(g.id))
            .map((g) => (
              <button
                key={g.id}
                style={{
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: "1px solid #ddd",
                  background: activeGroup === g.id ? "#111" : "#fff",
                  color: activeGroup === g.id ? "#fff" : "#111",
                  cursor: "pointer",
                }}
                onClick={() => setActiveGroup(g.id)}
              >
                {g.name}
              </button>
            ))}
        </div>
      </div>

      {/* RIGHT: search + list + discussion */}
      <div style={{ display: "grid", gap: 12 }}>
        {/* Tools */}
        <div style={{ border: "1px solid #e7e7e7", borderRadius: 14, padding: 12, background: "#fff" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input
              style={{ ...input, maxWidth: 300 }}
              placeholder={t("Rechercher groupe ou #hashtag…", "Search group or #hashtag…")}
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              style={{ ...input, maxWidth: 180 }}
            >
              <option value="recent">{t("Plus récents", "Most recent")}</option>
              <option value="popular">{t("Plus populaires", "Most popular")}</option>
            </select>
          </div>
        </div>

        {/* List */}
        <div style={{ border: "1px solid #e7e7e7", borderRadius: 14, padding: 12, background: "#fff" }}>
          <h3 style={{ marginTop: 0 }}>{t("Groupes", "Groups")}</h3>
          <div style={{ display: "grid", gap: 10 }}>
            {filtered.map((g) => {
              const joined = myGroups.has(g.id);
              const count = msgCount.get(g.id) ?? 0;
              return (
                <div
                  key={g.id}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 12,
                    padding: 10,
                    background: "#fafafa",
                    display: "grid",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong>{g.name}</strong>
                    <div style={{ display: "flex", gap: 6 }}>
                      {!joined ? (
                        <button style={btn} onClick={() => join(g.id)}>
                          {t("Rejoindre", "Join")}
                        </button>
                      ) : (
                        <>
                          <button style={btn} onClick={() => setActiveGroup(g.id)}>
                            {t("Ouvrir", "Open")}
                          </button>
                          <button
                            style={{ ...btn, background: "#fff", color: "#111" }}
                            onClick={() => leave(g.id)}
                          >
                            {t("Quitter", "Leave")}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {g.description && <div style={{ color: "#444" }}>{g.description}</div>}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {(g.hashtags ?? []).map((h) => (
                      <span key={h} style={badge}>#{h}</span>
                    ))}
                    <span style={{ ...badge, borderColor: "#ccc" }}>
                      {t("messages", "messages")}: {count}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Discussion */}
        {activeGroup && (
          <div style={{ border: "1px solid #e7e7e7", borderRadius: 14, padding: 12, background: "#fff" }}>
            <h3 style={{ marginTop: 0 }}>{t("Discussion", "Discussion")}</h3>
            <div style={{ display: "grid", gap: 8, maxHeight: 300, overflow: "auto", paddingRight: 6 }}>
              {messages
                .filter((m) => m.group_id === activeGroup)
                .sort((a, b) => +new Date(a.created_at) - +new Date(b.created_at))
                .map((m) => (
                  <div key={m.id} style={{ fontSize: 14 }}>
                    <span style={{ color: "#666" }}>
                      {new Date(m.created_at).toLocaleString()} •{" "}
                    </span>
                    <span>{m.content}</span>
                  </div>
                ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <input
                style={input}
                placeholder={t("Écrire un message…", "Write a message…")}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage(draft);
                    setDraft("");
                  }
                }}
              />
              <button style={btn} onClick={() => { sendMessage(draft); setDraft(""); }}>
                {t("Envoyer", "Send")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Groups;

