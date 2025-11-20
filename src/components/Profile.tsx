// ———————————————————————————
// Profile.tsx — MusicTerra (version fusionnée)
// Profil perso + Instagram + Genres + Recherche + Export JSON + RATINGS HISTORY
// ———————————————————————————

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, LogOut, MapPin, Trash2, Download, Music, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

// ───────────────────────────────
// Types & storage
// ───────────────────────────────
interface Profile {
  fullName: string;
  username: string;
  bio: string;
  country: string;
  genres: string[];
  email?: string;
  instagram?: { connected: boolean; handle: string };
  avatarDataUrl?: string;
}

interface Rating {
  id: string;
  item_type: 'genre' | 'country';
  item_name: string;
  rating: number;
  updated_at: string;
}

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
    console.error("Erreur sauvegarde profil", e);
  }
}

// ───────────────────────────────
// Genre tags input
// ───────────────────────────────
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
          <p className="text-sm text-muted-foreground">Aucun genre ajouté.</p>
        )}
        {value.map((g) => (
          <Badge key={g} variant="secondary" className="px-2 py-1 rounded-xl text-sm">
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

// ───────────────────────────────
// Page principale
// ───────────────────────────────
export default function ProfilePage() {
  const { session, profile: authProfile } = useAuth();
  
  const [profile, setProfile] = useState<Profile>(
    () =>
      loadProfile() ?? {
        fullName: authProfile?.display_name || "",
        username: "",
        bio: "",
        country: "",
        genres: [],
        email: session?.user?.email || "",
        instagram: { connected: false, handle: "" },
      }
  );

  // ──────── NOUVEAU : RATINGS ────────
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [loadingRatings, setLoadingRatings] = useState(false);
  const [filter, setFilter] = useState<'all' | 'genre' | 'country'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'rating' | 'name'>('date');

  // Charger les ratings
  useEffect(() => {
    if (session) {
      loadRatings();
    }
  }, [session]);

  const loadRatings = async () => {
    if (!session) return;

    try {
      setLoadingRatings(true);
      console.log("📥 Chargement des ratings...");

      const { data, error } = await supabase
        .from('ratings')
        .select('*')
        .eq('user_id', session.user.id)
        .order('updated_at', { ascending: false });

      if (error) {
        console.error("Erreur Supabase:", error);
        loadFromLocalStorage();
      } else if (data) {
        console.log(`✅ ${data.length} ratings chargés`);
        setRatings(data);
      }
    } catch (err) {
      console.error("Erreur:", err);
      loadFromLocalStorage();
    } finally {
      setLoadingRatings(false);
    }
  };

  const loadFromLocalStorage = () => {
    const userId = session?.user?.id;
    if (!userId) return;

    const localRatings: Rating[] = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(`rating_${userId}_`)) {
        const parts = key.split('_');
        const itemType = parts[2] as 'genre' | 'country';
        const itemName = parts.slice(3).join('_');
        const rating = parseInt(localStorage.getItem(key) || '0');

        if (rating > 0) {
          localRatings.push({
            id: key,
            item_type: itemType,
            item_name: itemName,
            rating: rating,
            updated_at: new Date().toISOString(),
          });
        }
      }
    }

    console.log(`📦 ${localRatings.length} ratings locaux`);
    setRatings(localRatings);
  };

  // Filtrer et trier les ratings
  const filteredRatings = ratings
    .filter(r => filter === 'all' || r.item_type === filter)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else {
        return a.item_name.localeCompare(b.item_name);
      }
    });

  // Stats
  const stats = {
    total: ratings.length,
    genres: ratings.filter(r => r.item_type === 'genre').length,
    countries: ratings.filter(r => r.item_type === 'country').length,
    average: ratings.length > 0 
      ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
      : '0',
  };
  // ──────── FIN NOUVEAU ────────

  const fileRef = useRef<HTMLInputElement | null>(null);
  const onPickAvatar = () => fileRef.current?.click();

  const onAvatarSelected: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
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

  const isInstaConnected = profile.instagram?.connected && profile.instagram?.handle;

  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  // Export JSON (inclut maintenant les ratings)
  const exportProfile = () => {
    const exportData = {
      ...profile,
      ratings: ratings,
      stats: stats,
      exportedAt: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "musicterra_profile.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // ——— Recherche de profils (mock) ———
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailProfile, setDetailProfile] = useState<any | null>(null);
  const [search, setSearch] = useState("");

  const mockProfiles = [
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
  ];

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

  const applyProfileFromResult = (p: any) => {
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

  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-3xl font-semibold tracking-tight text-center"
      >
        Mon profil
      </motion.h1>

      {/* ──────── NOUVEAU : STATS RATINGS ────────  */}
      {ratings.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="rounded-2xl text-center p-4">
            <p className="text-3xl font-bold text-primary">{stats.total}</p>
            <p className="text-sm text-muted-foreground">Notes</p>
          </Card>
          <Card className="rounded-2xl text-center p-4">
            <p className="text-3xl font-bold text-primary">{stats.average}</p>
            <p className="text-sm text-muted-foreground">Moyenne</p>
          </Card>
          <Card className="rounded-2xl text-center p-4">
            <p className="text-3xl font-bold text-primary">{stats.genres}</p>
            <p className="text-sm text-muted-foreground">Genres</p>
          </Card>
          <Card className="rounded-2xl text-center p-4">
            <p className="text-3xl font-bold text-primary">{stats.countries}</p>
            <p className="text-sm text-muted-foreground">Pays</p>
          </Card>
        </div>
      )}

      {/* Avatar, genres et Instagram */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Photo et genres</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20 border">
                {profile.avatarDataUrl ? (
                  <AvatarImage
                    src={profile.avatarDataUrl}
                    alt={profile.fullName || "Avatar"}
                  />
                ) : (
                  <AvatarFallback>
                    {(profile.fullName || "?").slice(0, 2).toUpperCase()}
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
            <GenreTags
              value={profile.genres}
              onChange={(v) => setProfile((p) => ({ ...p, genres: v }))}
            />
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Instagram</CardTitle>
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
          </CardContent>
        </Card>
      </div>

      {/* ──────── NOUVEAU : HISTORIQUE RATINGS ────────  */}
      {ratings.length > 0 && (
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Mon historique de notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Filtres */}
            <div className="flex flex-wrap gap-2 justify-between">
              <div className="flex gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  Tout ({ratings.length})
                </Button>
                <Button
                  variant={filter === 'genre' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('genre')}
                >
                  <Music className="w-4 h-4 mr-1" /> Genres ({stats.genres})
                </Button>
                <Button
                  variant={filter === 'country' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('country')}
                >
                  <Globe className="w-4 h-4 mr-1" /> Pays ({stats.countries})
                </Button>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1.5 border rounded-lg text-sm"
              >
                <option value="date">Récents</option>
                <option value="rating">Note</option>
                <option value="name">Nom</option>
              </select>
            </div>

            {/* Liste */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredRatings.map((rating) => (
                <div
                  key={rating.id}
                  className="flex justify-between items-center p-3 border rounded-lg hover:bg-accent transition"
                >
                  <div className="flex-1">
                    <div className="font-medium">
                      {rating.item_type === 'genre' ? '🎸' : '🌍'} {rating.item_name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(rating.updated_at).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg font-bold">
                    {rating.rating}/10
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Export profil */}
      <Card className="rounded-2xl border-dashed border-2">
        <CardHeader>
          <CardTitle>Exporter mon profil</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Télécharge ton profil MusicTerra en JSON {ratings.length > 0 && '(inclut tes notes)'}.
          </p>
          <Button onClick={exportProfile}>
            <Download className="mr-2 h-4 w-4" /> Télécharger mon profil
          </Button>
        </CardContent>
      </Card>

      {/* Recherche de profils */}
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>Recherche de profils</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom, pays ou genre…"
            className="mb-4"
          />

          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((p) => (
              <Card
                key={p.id}
                className="cursor-pointer hover:bg-accent transition"
                onClick={() => {
                  setDetailProfile(p);
                  setDetailOpen(true);
                }}
              >
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold">{p.fullName}</h4>
                  <p className="text-sm text-muted-foreground">{p.country}</p>
                  <div className="flex flex-wrap justify-center gap-1 mt-1">
                    {p.genres.map((g) => (
                      <Badge key={g} variant="secondary" className="rounded-xl">
                        {g}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            {filtered.length === 0 && (
              <p className="text-muted-foreground text-sm text-center">
                Aucun profil trouvé.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <ResponsiveProfileDetail
        open={detailOpen}
        onOpenChange={setDetailOpen}
        profile={detailProfile}
        onApply={applyProfileFromResult}
      />
    </div>
  );
}

// ───────────────────────────────
// Drawer / Dialog detail
// ───────────────────────────────
function ResponsiveProfileDetail({
  open,
  onOpenChange,
  profile,
  onApply,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: any;
  onApply: (p: any) => void;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (!profile) return null;

  const DetailContent = () => (
    <div className="flex flex-col items-center gap-3 text-center p-4">
      <h3 className="text-lg font-semibold">{profile.fullName}</h3>
      {profile.bio && <p className="text-sm text-muted-foreground">{profile.bio}</p>}
      {profile.instagram && (
        <a
          href={`https://instagram.com/${profile.instagram.replace("@", "")}`}
      