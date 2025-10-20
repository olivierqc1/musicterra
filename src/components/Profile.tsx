import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  UserRound,
  Globe,
  Music2,
  Trash2,
  Save,
  LogOut,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

type Profile = {
  fullName: string;
  username: string;
  bio: string;
  country: string;
  age?: number | null;
  genres: string[];
  email?: string;
  instagram?: { connected: boolean; handle: string };
  avatarDataUrl?: string;
};

// ------------------------------------------------------------
// Helpers – LocalStorage
// ------------------------------------------------------------

const STORAGE_KEY = "musicterra.profile";

function loadProfile(): Profile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Profile) : null;
  } catch {
    return null;
  }
}

function saveProfile(p: Profile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch (e) {
    console.error("Failed to save profile", e);
  }
}

// ------------------------------------------------------------
// Sous-composants
// ------------------------------------------------------------

function SectionTitle({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-2xl bg-muted">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-semibold leading-tight">{title}</h3>
        {subtitle ? (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

function GenreTags({
  value,
  onChange,
}: {
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const [input, setInput] = useState("");
  const add = () => {
    const v = input.trim();
    if (!v) return;
    if (!value.includes(v)) onChange([...value, v]);
    setInput("");
  };
  const remove = (g: string) => onChange(value.filter((x) => x !== g));

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {value.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Aucun genre ajouté.
          </p>
        )}
        {value.map((g) => (
          <Badge
            key={g}
            variant="secondary"
            className="px-2 py-1 rounded-xl text-sm"
          >
            {g}
            <button
              className="ml-2 opacity-60 hover:opacity-100"
              onClick={() => remove(g)}
              aria-label={`Retirer ${g}`}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Ajouter un genre (Entrée)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
        />
        <Button onClick={add}>Ajouter</Button>
      </div>
    </div>
  );
}

// ------------------------------------------------------------
// Section : Mon profil personnel
// ------------------------------------------------------------

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>(
    () =>
      loadProfile() ?? {
        fullName: "",
        username: "",
        bio: "",
        country: "",
        age: null,
        genres: [],
        email: "",
        instagram: { connected: false, handle: "" },
        avatarDataUrl: undefined,
      }
  );

  const fileRef = useRef<HTMLInputElement | null>(null);
  const onPickAvatar = () => fileRef.current?.click();

  const onAvatarSelected: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setProfile((p) => ({ ...p, avatarDataUrl: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const connectInstagram = () => {
    if (!profile.instagram?.handle) return;
    setProfile((p) => ({
      ...p,
      instagram: { connected: true, handle: p.instagram?.handle ?? "" },
    }));
  };

  const disconnectInstagram = () =>
    setProfile((p) => ({ ...p, instagram: { connected: false, handle: "" } }));

  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  const isInstaConnected = profile.instagram?.connected && profile.instagram?.handle;

  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-2xl md:text-3xl font-semibold tracking-tight"
      >
        Mon profil
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Avatar et Instagram */}
        <div className="space-y-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <SectionTitle
                icon={UserRound}
                title="Photo de profil"
                subtitle="PNG/JPG, ~2 Mo max"
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border">
                  {profile.avatarDataUrl ? (
                    <AvatarImage
                      src={profile.avatarDataUrl}
                      alt={profile.fullName || \"Avatar\"}
                    />
                  ) : (
                    <AvatarFallback>
                      {(profile.fullName || \"?\").slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={onPickAvatar}>
                    Choisir…
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() =>
                      setProfile((p) => ({ ...p, avatarDataUrl: undefined }))
                    }
                  >
                    Réinitialiser
                  </Button>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onAvatarSelected}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <SectionTitle
                icon={Instagram}
                title="Instagram"
                subtitle="Connexion symbolique (mock)"
              />
            </CardHeader>
            <CardContent className="space-y-3">
              <Label htmlFor="insta">@handle Instagram</Label>
              <div className="flex gap-2">
                <Input
                  id="insta"
                  placeholder="ex. olivier.music"
                  value={profile.instagram?.handle ?? ""}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      instagram: { connected: false, handle: e.target.value },
                    }))
                  }
                />
                {!isInstaConnected ? (
                  <Button onClick={connectInstagram}>
                    <Instagram className="h-4 w-4 mr-2" /> Connecter
                  </Button>
                ) : (
                  <Button variant="destructive" onClick={disconnectInstagram}>
                    <LogOut className="h-4 w-4 mr-2" /> Déconnecter
                  </Button>
                )}
              </div>
              {isInstaConnected ? (
                <p className="text-sm text-muted-foreground">
                  Connecté comme{" "}
                  <span className="font-medium">@{profile.instagram?.handle}</span>
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Entrez un handle puis cliquez sur « Connecter ».  
                  (Aucune authentification réelle ici.)
                </p>
              )}
            </CardContent>
          </Card>
        </div>
            // ------------------ Recherche de profils publics ------------------
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailProfile, setDetailProfile] = useState<PublicProfile | null>(null);

  const mockProfiles: PublicProfile[] = [
    {
      id: "u1",
      fullName: "Amina F.",
      username: "amina.fm",
      country: "Maroc",
      bio: "Exploratrice de musiques gnawa & jazz.",
      genres: ["Gnawa", "Jazz", "Afrobeat"],
      instagram: "amina.fm",
    },
    {
      id: "u2",
      fullName: "Diego Pérez",
      username: "diegopz",
      country: "Argentine",
      bio: "Rock national, tango nuevo, indie.",
      genres: ["Rock Argentin", "Tango", "Indie Rock"],
      instagram: "diegopz",
    },
    {
      id: "u3",
      fullName: "Li Wei",
      username: "li.wei",
      country: "Chine",
      bio: "City pop, C-pop & ambient.",
      genres: ["City Pop", "C-Pop", "Ambient"],
    },
    {
      id: "u4",
      fullName: "Nora Hamdi",
      username: "norah",
      country: "France",
      bio: "Hip-hop FR, raï & électro.",
      genres: ["Hip-Hop", "Raï", "Electro"],
      instagram: "norah.music",
    },
  ];

  const [search, setSearch] = useState("");
  const filtered = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return mockProfiles;
    return mockProfiles.filter(
      (p) =>
        p.fullName.toLowerCase().includes(q) ||
        p.username.toLowerCase().includes(q) ||
        (p.genres && p.genres.some((g) => g.toLowerCase().includes(q))) ||
        (p.country && p.country.toLowerCase().includes(q))
    );
  }, [search]);

  const applyProfileFromResult = (p: PublicProfile) => {
    setProfile((prev) => ({
      ...prev,
      fullName: p.fullName || prev.fullName,
      username: p.username || prev.username,
      country: p.country || prev.country,
      bio: p.bio || prev.bio,
      genres: p.genres?.length
        ? Array.from(new Set([...(prev.genres || []), ...p.genres]))
        : prev.genres,
      instagram: p.instagram
        ? { connected: true, handle: p.instagram }
        : prev.instagram,
    }));
  };

  // Sauvegarde à chaque changement
  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  // ------------------------------------------------------------
  // Contenu principal de la page
  // ------------------------------------------------------------
  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8 space-y-6">
      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-2xl md:text-3xl font-semibold tracking-tight"
      >
        Mon profil
      </motion.h1>

      {/* --- Section : Recherche de profils --- */}
      <Card className="rounded-2xl mb-6">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-muted">
              <Search className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-tight">
                Recherche de profils
              </h3>
              <p className="text-sm text-muted-foreground">
                Tape un nom, un @handle, un pays ou un genre
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher… (ex. jazz, @amina.fm, Maroc)"
            />
            <Button>Rechercher</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <Card
                key={p.id}
                className="rounded-2xl hover:shadow-md transition"
                onClick={() => {
                  setDetailProfile(p);
                  setDetailOpen(true);
                }}
              >
                <CardContent className="p-4 flex gap-3 items-start">
                  <Avatar className="h-12 w-12 border">
                    <AvatarFallback>
                      {(p.fullName || p.username || "?")
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium truncate">{p.fullName}</div>
                    <div className="text-sm text-muted-foreground truncate">
                      @{p.username} {p.country ? `• ${p.country}` : ""}
                    </div>
                    {p.genres?.length ? (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {p.genres.slice(0, 4).map((g) => (
                          <Badge
                            key={`${p.id}-${g}`}
                            variant="secondary"
                            className="rounded-xl"
                          >
                            {g}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}

            {filtered.length === 0 && (
              <p className="text-sm text-muted-foreground">
                Aucun résultat. Essaie un autre terme (genre, pays, @handle)…
              </p>
            )}
          </div>
        </CardContent>
      </Card>
        
