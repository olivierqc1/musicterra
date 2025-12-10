// ———————————————————————————
// Profile.tsx — MusicTerra (version fusionnée)
// Profil perso + Instagram + Genres + Recherche RÉELLE + Export JSON + RATINGS + LOCALISATION + SEO
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
import SEO from "@/components/SEO";

// ───────────────────────────────
// Types & storage
// ───────────────────────────────
interface Profile {
  fullName: string;
  username: string;
  bio: string;
  country: string;
  current_country?: string;
  origin_country?: string;
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

// Sauvegarder dans Supabase
async function saveProfileToSupabase(userId: string, profile: Profile) {
  try {
    const { error } = await supabase
      .from('profiles')
      .update({
        display_name: profile.fullName,
        username: profile.username,
        bio: profile.bio,
        country: profile.country,
        current_country: profile.current_country,
        origin_country: profile.origin_country,
        genres: profile.genres,
        instagram_handle: profile.instagram?.handle,
      })
      .eq('id', userId);

    if (error) {
      console.error('Erreur sauvegarde profil:', error);
    } else {
      console.log('✅ Profil sauvegardé dans Supabase');
    }
  } catch (e) {
    console.error('Exception sauvegarde:', e);
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
        current_country: "",
        origin_country: "",
        genres: [],
        email: session?.user?.email || "",
        instagram: { connected: false, handle: "" },
      }
  );

  // ──────── RATINGS ────────
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

      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout après 5 secondes')), 5000);
      });

      const queryPromise = supabase
        .from('ratings')
        .select('*')
        .eq('user_id', session.user.id)
        .order('updated_at', { ascending: false });

      const { data, error } = await Promise.race([queryPromise, timeoutPromise]) as any;

      if (error) {
        console.error("❌ Erreur Supabase:", error);
        console.log("📦 Fallback vers localStorage");
        loadFromLocalStorage();
      } else if (data) {
        console.log(`✅ ${data.length} ratings chargés depuis Supabase`);
        setRatings(data);
      }
    } catch (err: any) {
      console.error("❌ Exception:", err.message);
      console.log("📦 Fallback vers localStorage");
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

    console.log(`📦 ${localRatings.length} ratings locaux chargés`);
    setRatings(localRatings);
  };

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

  const stats = {
    total: ratings.length,
    genres: ratings.filter(r => r.item_type === 'genre').length,
    countries: ratings.filter(r => r.item_type === 'country').length,
    average: ratings.length > 0 
      ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
      : '0',
  };

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

  // Sauvegarder dans localStorage ET Supabase
  useEffect(() => {
    saveProfile(profile);
    if (session?.user?.id) {
      saveProfileToSupabase(session.user.id, profile);
    }
  }, [profile, session]);

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

  // ──────── RECHERCHE RÉELLE ────────
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailProfile, setDetailProfile] = useState<any | null>(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);

  const searchProfiles = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setSearching(true);
      const q = query.toLowerCase();

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .neq('id', session?.user?.id || '')
        .or(`display_name.ilike.%${q}%,username.ilike.%${q}%,country.ilike.%${q}%,bio.ilike.%${q}%`)
        .limit(20);

      if (error) {
        console.error('Erreur recherche:', error);
        setSearchResults([]);
      } else {
        console.log(`🔍 ${data?.length || 0} profils trouvés`);
        
        const filtered = data?.filter(p => {
          if (!p.genres || p.genres.length === 0) return true;
          return p.genres.some((g: string) => g.toLowerCase().includes(q));
        }) || [];
        
        setSearchResults(filtered);
      }
    } catch (e) {
      console.error('Exception recherche:', e);
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchProfiles(search);
    }, 500);

    return () => clearTimeout(timer);
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
      <SEO 
        title="Mon Profil Musical"
        description="Gérez votre profil MusicTerra : genres favoris, artistes émergents, notes et préférences musicales. Découvrez et partagez vos goûts musicaux avec la communauté."
        keywords="profil musical, genres favoris, découverte musicale, notes musique, communauté musique, préférences musicales"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "name": "Profil Utilisateur MusicTerra",
          "description": "Page de profil personnel pour gérer ses préférences musicales",
          "url": "https://musicterra.xyz/profile"
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-3xl font-semibold tracking-tight text-center"
      >
        Mon profil
      </motion.h1>

      {/* STATS RATINGS */}
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

      {/* Avatar, Instagram et Localisation */}
      <div className="grid md:grid-cols-3 gap-6">
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
              <div className="flex flex-col gap-2">
                <Button variant="secondary" size="sm" onClick={onPickAvatar}>
                  Choisir…
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
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
                <Button onClick={connectInstagram} size="sm">
                  <Instagram className="h-4 w-4 mr-2" /> Connecter
                </Button>
              ) : (
                <Button variant="destructive" size="sm" onClick={disconnectInstagram}>
                  <LogOut className="h-4 w-4 mr-2" /> Déconnecter
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* LOCALISATION */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>🌍 Localisation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="current">Où je suis</Label>
              <Input
                id="current"
                placeholder="ex. Espagne"
                value={profile.current_country || ''}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, current_country: e.target.value }))
                }
              />
              <p className="text-xs text-muted-foreground mt-1">
                Artistes émergents locaux
              </p>
            </div>
            
            <div>
              <Label htmlFor="origin">D'où je viens</Label>
              <Input
                id="origin"
                placeholder="ex. Canada"
                value={profile.origin_country || ''}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, origin_country: e.target.value }))
                }
              />
              <p className="text-xs text-muted-foreground mt-1">
                Garde un lien avec ton pays d'origine
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* HISTORIQUE RATINGS */}
      {ratings.length > 0 && (
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Mon historique de notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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

      {/* Recherche de profils RÉELLE */}
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>🔍 Recherche d'utilisateurs</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom, username, pays ou genre…"
            className="mb-4"
          />

          <div className="grid md:grid-cols-2 gap-4">
            {searching && (
              <p className="text-sm text-muted-foreground col-span-2 text-center">
                🔍 Recherche en cours...
              </p>
            )}
            
            {!searching && searchResults.length === 0 && search.trim() && (
              <p className="text-muted-foreground text-sm text-center col-span-2">
                Aucun utilisateur trouvé.
              </p>
            )}
            
            {!searching && searchResults.length === 0 && !search.trim() && (
              <p className="text-muted-foreground text-sm text-center col-span-2">
                Tape pour chercher des utilisateurs MusicTerra...
              </p>
            )}

            {searchResults.map((p) => (
              <Card
                key={p.id}
                className="cursor-pointer hover:bg-accent transition"
                onClick={() => {
                  setDetailProfile({
                    id: p.id,
                    fullName: p.display_name || 'Utilisateur',
                    username: p.username,
                    country: p.country,
                    bio: p.bio,
                    genres: p.genres || [],
                    instagram: p.instagram_handle,
                  });
                  setDetailOpen(true);
                }}
              >
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold">{p.display_name || 'Utilisateur'}</h4>
                  {p.username && (
                    <p className="text-xs text-muted-foreground">@{p.username}</p>
                  )}
                  {p.country && (
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {p.country}
                    </p>
                  )}
                  {p.genres && p.genres.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1 mt-2">
                      {p.genres.slice(0, 3).map((g: string) => (
                        <Badge key={g} variant="secondary" className="rounded-xl text-xs">
                          {g}
                        </Badge>
                      ))}
                      {p.genres.length > 3 && (
                        <Badge variant="secondary" className="rounded-xl text-xs">
                          +{p.genres.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
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
      {profile.username && (
        <p className="text-sm text-muted-foreground">@{profile.username}</p>
      )}
      {profile.bio && <p className="text-sm text-muted-foreground">{profile.bio}</p>}
      {profile.instagram && (
        <a  
          href={`https://instagram.com/${profile.instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <Instagram className="h-4 w-4" />
          @{profile.instagram}
        </a>
      )}
      {profile.country && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {profile.country}
        </div>
      )}
      {profile.genres && profile.genres.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {profile.genres.map((g: string) => (
            <Badge key={g} variant="secondary" className="rounded-xl">
              {g}
            </Badge>
          ))}
        </div>
      )}
      <Button onClick={() => onApply(profile)} className="mt-4">
        Appliquer à mon profil
      </Button>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profil utilisateur</DialogTitle>
            <DialogDescription>
              Voir les détails et appliquer à ton profil.
            </DialogDescription>
          </DialogHeader>
          <DetailContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Profil utilisateur</DrawerTitle>
          <DrawerDescription>
            Voir les détails et appliquer à ton profil.
          </DrawerDescription>
        </DrawerHeader>
        <DetailContent />
      </DrawerContent>
    </Drawer>
  );
}