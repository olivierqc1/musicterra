import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { genres } from "../data/genres";

type ProfileRow = {
  id: string;
  display_name: string | null;
  bio: string | null;
  location_city: string | null;
  location_country: string | null;
  genres: string[] | null;
};

const chip: React.CSSProperties = {
  padding: "6px 10px",
  border: "1px solid #ddd",
  borderRadius: 999,
  background: "#fff",
  cursor: "pointer",
  userSelect: "none",
};
const chipActive: React.CSSProperties = {
  ...chip,
  background: "#111",
  color: "#fff",
  borderColor: "#111",
};
const input: React.CSSProperties = {
  width: "100%",
  padding: 10,
  borderRadius: 10,
  border: "1px solid #ccc",
  background: "#fff",
  color: "#111",
};
const label: React.CSSProperties = { fontWeight: 600, marginTop: 10, marginBottom: 6 };

const Profile: React.FC = () => {
  const { session } = useAuth();
  const uid = session?.user?.id;

  const [loading, setLoading] = useState(true);
  const [p, setP] = useState<ProfileRow | null>(null);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      if (!uid) return;
      setLoading(true);
      // on récupère juste les colonnes utiles
      const { data } = await supabase
        .from("profiles")
        .select("id, display_name, bio, location_city, location_country, genres")
        .eq("id", uid)
        .maybeSingle();
      if (data) {
        const row = data as ProfileRow;
        setP(row);
        setSelectedGenres(row.genres ?? []);
      } else {
        // si le profil n'existe pas encore, on initialise localement
        setP({
          id: uid,
          display_name: "",
          bio: "",
          location_city: "",
          location_country: "",
          genres: [],
        });
      }
      setLoading(false);
    })();
  }, [uid]);

  const toggleGenre = (name: string) => {
    setSelectedGenres((prev) =>
      prev.includes(name) ? prev.filter((g) => g !== name) : [...prev, name]
    );
  };

  const save = async () => {
    if (!uid || !p) return;
    const payload = {
      id: uid,
      display_name: p.display_name?.trim() || null,
      bio: p.bio?.trim() || null,
      location_city: p.location_city?.trim() || null,
      location_country: p.location_country?.trim() || null,
      genres: selectedGenres,
    };
    await supabase.from("profiles").upsert(payload);
    alert("Profil enregistré ✅");
  };

  if (!uid) return <p style={{ padding: 16 }}>Connecte-toi pour voir ton profil.</p>;
  if (loading) return <p style={{ padding: 16 }}>Chargement…</p>;
  if (!p) return <p style={{ padding: 16 }}>Profil introuvable.</p>;

  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <div style={{ display: "grid", gap: 12 }}>
        <h2 style={{ margin: 0 }}>Ton profil</h2>

        {/* Nom */}
        <div>
          <div style={label}>Nom affiché</div>
          <input
            style={input}
            value={p.display_name ?? ""}
            onChange={(e) => setP({ ...p, display_name: e.target.value })}
            placeholder="Ton nom…"
          />
        </div>

        {/* Bio */}
        <div>
          <div style={label}>Description</div>
          <textarea
            style={{ ...input, minHeight: 100 }}
            value={p.bio ?? ""}
            onChange={(e) => setP({ ...p, bio: e.target.value })}
            placeholder="Parle un peu de toi…"
          />
        </div>

        {/* Ville / pays */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <div style={label}>Ville</div>
            <input
              style={input}
              value={p.location_city ?? ""}
              onChange={(e) => setP({ ...p, location_city: e.target.value })}
              placeholder="Montréal…"
            />
          </div>
          <div>
            <div style={label}>Pays</div>
            <input
              style={input}
              value={p.location_country ?? ""}
              onChange={(e) => setP({ ...p, location_country: e.target.value })}
              placeholder="Canada…"
            />
          </div>
        </div>

        {/* Genres favoris */}
        <div>
          <div style={label}>Tes genres favoris</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {genres.map((g) => {
              const on = selectedGenres.includes(g.name);
              return (
                <span
                  key={g.name}
                  style={on ? chipActive : chip}
                  onClick={() => toggleGenre(g.name)}
                >
                  {g.name}
                </span>
              );
            })}
          </div>
        </div>

        <div>
          <button
            onClick={save}
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #111",
              background: "#111",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

