// ———————————————————————————
// Profile.tsx — MusicTerra (version fusionnée)
// Profil perso + Instagram + Genres + Recherche RÉELLE + Export JSON + RATINGS + LOCALISATION + SEO + SOCIAL
// ———————————————————————————

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, LogOut, Trash2, Download, Music, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import SEO from "@/components/SEO";
import Passport from "@/components/Passport";
import ProfileSearch from "@/components/ProfileSearch";
import TasteProfile, { type OpenItem } from "./TasteProfile";
import { makeT, localeOf, type Lang, type T } from "../i18n";
import { countryLabel } from "../i18n/countryNames";

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

// Anciennes notes d'années enregistrées avec le type "genre"
// (avant la migration) : on les affiche quand même comme des années.
const normalizeRating = (r: Rating): Rating =>
  r.item_type === 'genre' && /^\d{1,4}$/.test(r.item_name)
    ? { ...r, item_type: 'year' }
    : r;

interface Rating {
  id: string;
  item_type: 'genre' | 'country' | 'year';
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
  t,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  t: T;
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
            {t("Aucun genre ajouté.", "No genres added.", "Ningún género añadido.", "Cap gènere afegit.")}
          </p>
        )}
        {value.map((g) => (
          <Badge key={g} variant="secondary" className="px-2 py-1 rounded-xl text-sm">
            {g}
            <button
              className="ml-2 opacity-60 hover:opacity-100"
              onClick={() => remove(g)}
              aria-label={t(`Retirer ${g}`, `Remove ${g}`, `Quitar ${g}`, `Treure ${g}`)}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          placeholder={t("Ajouter un genre (Entrée)", "Add a genre (Enter)", "Añadir un género (Intro)", "Afegeix un gènere (Retorn)")}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
        />
        <Button onClick={add}>{t("Ajouter", "Add")}</Button>
      </div>
    </div>
  );
}

// ───────────────────────────────
// Page principale
// ───────────────────────────────
interface ProfilePageProps {
  language?: Lang;
  /** Ouvre la fiche d'un genre, d'un pays ou d'une année dans « Découvrir ». */
  onOpen?: OpenItem;
  onSpin?: () => void;
}

export default function ProfilePage({ language = "fr", onOpen, onSpin }: ProfilePageProps) {
  const t = makeT(language);
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
  const [filter, setFilter] = useState<'all' | 'genre' | 'country' | 'year'>('all');
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
        setRatings(data.map(normalizeRating));
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
        const itemType = parts[2] as 'genre' | 'country' | 'year';
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
    setRatings(localRatings.map(normalizeRating));
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
    years: ratings.filter(r => r.item_type === 'year').length,
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
  };return (
    <div className="mx-auto max-w-5xl p-4 md:p-8 space-y-8">
      <SEO 
        title={t("Mon Profil Musical", "My Music Profile", "Mi perfil musical", "El meu perfil musical")}
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
        {t("Mon profil", "My profile", "Mi perfil", "El meu perfil")}
      </motion.h1>

      {/* PASSEPORT MUSICAL */}
      <Passport language={language} />

      {/* PORTRAIT MUSICAL */}
      <TasteProfile language={language} onOpen={onOpen} onSpin={onSpin} />

      {/* Avatar, Instagram et Localisation */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>{t("Photo et genres", "Photo and genres", "Foto y géneros", "Foto i gèneres")}</CardTitle>
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
                  {t("Choisir…", "Choose…", "Elegir…", "Tria…")}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setProfile((p) => ({ ...p, avatarDataUrl: undefined }))
                  }
                >
                  {t("Réinitialiser", "Reset", "Restablecer", "Restableix")}
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
              t={t}
            />
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Instagram</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label htmlFor="insta">{t("Compte Instagram", "Instagram handle", "Cuenta de Instagram", "Compte d'Instagram")}</Label>
            <div className="flex gap-2">
              <Input
                id="insta"
                placeholder={t("ex. olivier.music", "e.g. olivier.music", "p. ej. olivier.music", "p. ex. olivier.music")}
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
                  <Instagram className="h-4 w-4 mr-2" /> {t("Connecter", "Connect", "Conectar", "Connecta")}
                </Button>
              ) : (
                <Button variant="destructive" size="sm" onClick={disconnectInstagram}>
                  <LogOut className="h-4 w-4 mr-2" /> {t("Déconnecter", "Disconnect", "Desconectar", "Desconnecta")}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* LOCALISATION */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>🌍 {t("Localisation", "Location")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="current">{t("Où je suis", "Where I live", "Dónde vivo", "On visc")}</Label>
              <Input
                id="current"
                placeholder={t("ex. Espagne", "e.g. Spain", "p. ej. España", "p. ex. Catalunya")}
                value={profile.current_country || ''}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, current_country: e.target.value }))
                }
              />
              <p className="text-xs text-muted-foreground mt-1">
                {t("Artistes émergents locaux", "Local emerging artists", "Artistas emergentes locales", "Artistes emergents locals")}
              </p>
            </div>
            
            <div>
              <Label htmlFor="origin">{t("D'où je viens", "Where I'm from", "De dónde soy", "D'on soc")}</Label>
              <Input
                id="origin"
                placeholder={t("ex. Canada", "e.g. Canada", "p. ej. Canadá", "p. ex. Canadà")}
                value={profile.origin_country || ''}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, origin_country: e.target.value }))
                }
              />
              <p className="text-xs text-muted-foreground mt-1">
                {t("Garde un lien avec ton pays d'origine", "Stay connected to your home country", "Mantén el vínculo con tu país de origen", "Mantén el vincle amb el teu país d'origen")}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* HISTORIQUE RATINGS */}
      {ratings.length > 0 && (
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>{t("Mon historique de notes", "My rating history", "Mi historial de puntuaciones", "El meu historial de puntuacions")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-between">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  {t("Tout", "All", "Todo", "Tot")} ({ratings.length})
                </Button>
                <Button
                  variant={filter === 'genre' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('genre')}
                >
                  <Music className="w-4 h-4 mr-1" /> {t("Genres", "Genres")} ({stats.genres})
                </Button>
                <Button
                  variant={filter === 'country' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('country')}
                >
                  <Globe className="w-4 h-4 mr-1" /> {t("Pays", "Countries")} ({stats.countries})
                </Button>
                {stats.years > 0 && (
                  <Button
                    variant={filter === 'year' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('year')}
                  >
                    📅 {t("Années", "Years")} ({stats.years})
                  </Button>
                )}
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1.5 border rounded-lg text-sm"
              >
                <option value="date">{t("Récents", "Recent", "Recientes", "Recents")}</option>
                <option value="rating">{t("Note", "Rating")}</option>
                <option value="name">{t("Nom", "Name", "Nombre", "Nom")}</option>
              </select>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredRatings.map((rating) => (
                <button
                  type="button"
                  key={rating.id}
                  onClick={() =>
                    onOpen?.(
                      rating.item_type === "country" ? "countries" : rating.item_type === "year" ? "years" : "genres",
                      rating.item_name
                    )
                  }
                  className="w-full text-left flex justify-between items-center gap-3 p-3 border rounded-xl hover:bg-accent transition"
                >
                  <div className="flex-1">
                    <div className="font-medium">
                      {rating.item_type === 'genre' ? '🎸' : rating.item_type === 'year' ? '📅' : '🌍'}{' '}
                      {rating.item_type === 'country' ? countryLabel(rating.item_name, language) : rating.item_name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(rating.updated_at).toLocaleDateString(localeOf(language))}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-base font-bold">
                    {rating.rating}/10
                  </Badge>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Export profil */}
      <Card className="rounded-2xl border-dashed border-2">
        <CardHeader>
          <CardTitle>{t("Exporter mon profil", "Export my profile", "Exportar mi perfil", "Exporta el meu perfil")}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground mb-3">
            {t("Télécharge ton profil MusicTerra en JSON", "Download your MusicTerra profile as JSON", "Descarga tu perfil de MusicTerra en JSON", "Descarrega el teu perfil de MusicTerra en JSON")}
            {ratings.length > 0 && ` ${t("(inclut tes notes)", "(includes your ratings)", "(incluye tus puntuaciones)", "(inclou les teves puntuacions)")}`}.
          </p>
          <Button onClick={exportProfile}>
            <Download className="mr-2 h-4 w-4" /> {t("Télécharger mon profil", "Download my profile", "Descargar mi perfil", "Descarrega el meu perfil")}
          </Button>
        </CardContent>
      </Card>

      {/* Recherche d'utilisateurs */}
      <ProfileSearch onApply={applyProfileFromResult} language={language} />
    </div>
  );
}
