import React, { useEffect, useMemo, useRef, useState } from "react"; import { motion } from "framer-motion"; import { Instagram, UserRound, Globe, Music2, Link as LinkIcon, Trash2, Save, LogOut, Search, UserPlus, Loader2 } from "lucide-react"; import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Textarea } from "@/components/ui/textarea"; import { Label } from "@/components/ui/label"; import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; import { Badge } from "@/components/ui/badge";

// ------------------------------------------------------------ // Types // ------------------------------------------------------------

type PublicProfile = { id: string; fullName: string; username: string; country?: string; bio?: string; genres?: string[]; avatarUrl?: string; instagram?: string; // handle };

// Jeu de données fictif pour la recherche (peut être remplacé par un fetch API plus tard) const mockProfiles: PublicProfile[] = [ { id: 'u1', fullName: 'Amina F.', username: 'amina.fm', country: 'Maroc', bio: 'Exploratrice de musiques gnawa & jazz.', genres: ['Gnawa','Jazz','Afrobeat'], instagram: 'amina.fm' }, { id: 'u2', fullName: 'Diego Pérez', username: 'diegopz', country: 'Argentine', bio: 'Rock national, tango nuevo, indie.', genres: ['Rock Argentin','Tango','Indie Rock'], instagram: 'diegopz' }, { id: 'u3', fullName: 'Li Wei', username: 'li.wei', country: 'Chine', bio: 'City pop, C‑pop & ambient.', genres: ['City Pop','C‑Pop','Ambient'] }, { id: 'u4', fullName: 'Nora Hamdi', username: 'norah', country: 'France', bio: 'Hip‑hop FR, raï & électro.', genres: ['Hip‑Hop','Raï','Electro'], instagram: 'norah.music' }, ];

type Profile = { fullName: string; username: string; bio: string; country: string; age?: number | null; genres: string[]; email?: string; instagram?: { connected: boolean; handle: string; // e.g. "olivier.music" }; avatarDataUrl?: string; // persisted base64 preview };

// ------------------------------------------------------------ // Helpers – simple persistence (localStorage) // ------------------------------------------------------------

const STORAGE_KEY = "musicterra.profile";

function loadProfile(): Profile | null { try { const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return null; return JSON.parse(raw) as Profile; } catch { return null; } }

function saveProfile(p: Profile) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) { console.error("Failed to save profile", e); } }

// ------------------------------------------------------------ // Small reusable components // ------------------------------------------------------------

function SectionTitle({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) { return ( <div className="flex items-center gap-3"> <div className="p-2 rounded-2xl bg-muted"><Icon className="h-5 w-5" /></div> <div> <h3 className="text-base font-semibold leading-tight">{title}</h3> {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null} </div> </div> ); }

function GenreTags({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) { const [input, setInput] = useState(""); const add = () => { const v = input.trim(); if (!v) return; if (!value.includes(v)) onChange([...value, v]); setInput(""); }; const remove = (g: string) => onChange(value.filter((x) => x !== g)); return ( <div className="space-y-2"> <div className="flex flex-wrap gap-2"> {value.length === 0 && <p className="text-sm text-muted-foreground">Aucun genre ajouté pour l’instant.</p>} {value.map((g) => ( <Badge key={g} variant="secondary" className="px-2 py-1 rounded-xl text-sm"> {g} <button className="ml-2 opacity-60 hover:opacity-100" onClick={() => remove(g)} aria-label={Retirer ${g}}> <Trash2 className="h-3.5 w-3.5" /> </button> </Badge> ))} </div> <div className="flex gap-2"> <Input placeholder="Ajouter un genre (Entrée)" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add(); } }} /> <Button type="button" onClick={add}>Ajouter</Button> </div> </div> ); }

// ------------------------------------------------------------ // Main component // ------------------------------------------------------------

export default function ProfilePage() { const [profile, setProfile] = useState<Profile>(() => loadProfile() ?? { fullName: "", username: "", bio: "", country: "", age: null, genres: [], email: "", instagram: { connected: false, handle: "" }, avatarDataUrl: undefined, } );

// ———————————————— Recherche de profils (mock local) ———————————————— const [search, setSearch] = useState(""); const [searching, setSearching] = useState(false); const filtered = useMemo(() => { const q = search.trim().toLowerCase(); if (!q) return mockProfiles; return mockProfiles.filter((p) => (p.fullName && p.fullName.toLowerCase().includes(q)) || (p.username && p.username.toLowerCase().includes(q)) || (p.country && p.country.toLowerCase().includes(q)) || (p.genres && p.genres.some((g) => g.toLowerCase().includes(q))) ); }, [search]);

const applyProfileFromResult = (p: PublicProfile) => { setProfile((prev) => ({ ...prev, fullName: p.fullName || prev.fullName, username: p.username || prev.username, country: p.country || prev.country, bio: p.bio || prev.bio, genres: p.genres?.length ? Array.from(new Set([...(prev.genres||[]), ...p.genres])) : prev.genres, instagram: p.instagram ? { connected: true, handle: p.instagram } : prev.instagram, })); };

// Persist every change (debounced feel via useEffect) useEffect(() => { saveProfile(profile); }, [profile]);

// Avatar upload handler const fileRef = useRef<HTMLInputElement | null>(null); const onPickAvatar = () => fileRef.current?.click(); const onAvatarSelected: React.ChangeEventHandler<HTMLInputElement> = async (e) => { const file = e.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => setProfile((p) => ({ ...p, avatarDataUrl: String(reader.result) })); reader.readAsDataURL(file); };

// Mock Instagram connect const isInstaConnected = profile.instagram?.connected && profile.instagram?.handle; const connectInstagram = () => { if (!profile.instagram?.handle) return; setProfile((p) => ({ ...p, instagram: { connected: true, handle: p.instagram?.handle ?? "" } })); }; const disconnectInstagram = () => { setProfile((p) => ({ ...p, instagram: { connected: false, handle: "" } })); };

return ( <div className="mx-auto max-w-5xl p-4 md:p-8"> <motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" > Mon profil </motion.h1>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Barre de recherche profils */}
    <Card className="rounded-2xl lg:col-span-3 order-first">
      <CardHeader>
        <SectionTitle icon={Search} title="Recherche de profils" subtitle="Tape un nom, un @handle, un pays ou un genre" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
            <Input
              className="pl-9"
              placeholder="Rechercher… (ex. jazz, @amina.fm, Maroc)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') setSearching(true); }}
            />
          </div>
          <Button type="button" onClick={() => setSearching(true)}>
            {searching ? (<Loader2 className="h-4 w-4 mr-2 animate-spin" />) : (<Search className="h-4 w-4 mr-2" />)}
            Rechercher
          </Button>
        </div>

        {/* Résultats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <Card key={p.id} className="rounded-2xl">
              <CardContent className="p-4 flex items-start gap-3">
                <Avatar className="h-12 w-12 border">
                  <AvatarFallback>{(p.fullName || p.username || '?').slice(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="font-medium truncate">{p.fullName}</div>
                  <div className="text-sm text-muted-foreground truncate">@{p.username} {p.country ? `• ${p.country}` : ''}</div>
                  {p.genres?.length ? (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {p.genres.slice(0,4).map((g) => (
                        <Badge key={`${p.id}-${g}`} variant="secondary" className="rounded-xl">{g}</Badge>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => applyProfileFromResult(p)}>Remplir mon profil</Button>
                    {p.instagram ? (
                      <Button size="sm" asChild>
                        <a href={`https://instagram.com/${p.instagram}`} target="_blank" rel="noreferrer">Voir Instagram</a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground">Aucun résultat. Essaie un autre terme (genre, pays, @handle)…</p>
          )}
        </div>
      </CardContent>
    </Card>
    {/* Left column – avatar & Instagram */}
    <div className="space-y-6">
      <Card className="rounded-2xl">
        <CardHeader>
          <SectionTitle icon={UserRound} title="Photo de profil" subtitle="PNG/JPG, ~2 Mo max" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border">
              {profile.avatarDataUrl ? (
                <AvatarImage src={profile.avatarDataUrl} alt={profile.fullName || "Avatar"} />
              ) : (
                <AvatarFallback>{(profile.fullName || "?").slice(0, 2).toUpperCase()}</AvatarFallback>
              )}
            </Avatar>
            <div className="flex gap-2">
              <Button type="button" variant="secondary" onClick={onPickAvatar}>Choisir…</Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setProfile((p) => ({ ...p, avatarDataUrl: undefined }))}
              >
                Réinitialiser
              </Button>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onAvatarSelected} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardHeader>
          <SectionTitle icon={Instagram} title="Instagram" subtitle="Connexion symbolique (mock)" />
        </CardHeader>
        <CardContent className="space-y-3">
          <Label htmlFor="insta">@handle Instagram</Label>
          <div className="flex gap-2">
            <Input
              id="insta"
              placeholder="ex. olivier.music"
              value={profile.instagram?.handle ?? ""}
              onChange={(e) => setProfile((p) => ({ ...p, instagram: { connected: false, handle: e.target.value } }))}
            />
            {!isInstaConnected ? (
              <Button type="button" onClick={connectInstagram}>
                <Instagram className="h-4 w-4 mr-2" /> Connecter
              </Button>
            ) : (
              <Button type="button" variant="destructive" onClick={disconnectInstagram}>
                <LogOut className="h-4 w-4 mr-2" /> Déconnecter
              </Button>
            )}
          </div>
          {isInstaConnected ? (
            <p className="text-sm text-muted-foreground">Connecté comme <span className="font-medium">@{profile.instagram?.handle}</span></p>
          ) : (
            <p className="text-sm text-muted-foreground">Entrez un handle puis cliquez sur « Connecter ». (Aucune authentification réelle ici.)</p>
          )}
        </CardContent>
      </Card>
    </div>

    {/* Right column – personal info */}
    <div className="lg:col-span-2 space-y-6">
      <Card className="rounded-2xl">
        <CardHeader>
          <SectionTitle icon={Globe} title="Informations personnelles" subtitle="Ces infos sont stockées localement (localStorage)" />
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nom complet</Label>
            <Input id="fullName" value={profile.fullName} onChange={(e) => setProfile({ ...profile, fullName: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Nom d’utilisateur</Label>
            <Input id="username" value={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" rows={4} value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Pays</Label>
            <Select value={profile.country} onValueChange={(v) => setProfile({ ...profile, country: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Choisir un pays" />
              </SelectTrigger>
              <SelectContent className="max-h-64">
                {[
                  "Canada","France","Belgique","Suisse","Portugal","Espagne","États-Unis","Royaume-Uni","Allemagne","Suède","Mexique","Brésil","Argentine","Maroc","Tunisie","Sénégal","Côte d’Ivoire","Cameroun","Kenya","Japon","Corée du Sud","Chine","Inde","Australie"
                ].map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Âge (optionnel)</Label>
            <Input
              id="age"
              type="number"
              min={0}
              value={profile.age ?? ""}
              onChange={(e) => setProfile({ ...profile, age: e.target.value ? Number(e.target.value) : null })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email (optionnel)</Label>
            <Input id="email" type="email" value={profile.email ?? ""} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label><span className="inline-flex items-center gap-1"><Music2 className="h-4 w-4"/>Genres préférés</span></Label>
            <GenreTags value={profile.genres} onChange={(genres) => setProfile({ ...profile, genres })} />
          </div>
          <div className="md:col-span-2 flex justify-end gap-2 pt-2">
            <Button variant="secondary" onClick={() => setProfile(loadProfile() ?? profile)}>
              Annuler
            </Button>
            <Button onClick={() => saveProfile(profile)}>
              <Save className="h-4 w-4 mr-2"/> Sauvegarder
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardHeader>
          <SectionTitle icon={LinkIcon} title="Aperçu du profil public" subtitle="Ce que pourrait voir la communauté" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 border">
              {profile.avatarDataUrl ? (
                <AvatarImage src={profile.avatarDataUrl} alt={profile.fullName || "Avatar"} />
              ) : (
                <AvatarFallback>{(profile.fullName || "?").slice(0, 2).toUpperCase()}</AvatarFallback>
              )}
            </Avatar>
            <div className="min-w-0">
              <div className="font-semibold truncate">{profile.fullName || profile.username || "Utilisateur·rice"}</div>
              <div className="text-sm text-muted-foreground truncate">
                {profile.username ? `@${profile.username}` : "@handle"}
                {profile.country ? ` • ${profile.country}` : ""}
              </div>
              {isInstaConnected && (
                <div className="text-sm mt-1 flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  <span>@{profile.instagram?.handle}</span>
                </div>
              )}
            </div>
          </div>
          {profile.bio && <p className="mt-3 text-sm leading-relaxed whitespace-pre-wrap">{profile.bio}</p>}
          {profile.genres.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.genres.map((g) => (
                <Badge key={`pub-${g}`} variant="outline" className="rounded-xl">{g}</Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  </div>
</div>

); }

// Dialog Détails profil // (Placée à la fin pour éviter les collisions d’insertions.) // Si vous préférez, déplacez ce bloc à côté de la grille principale.

return ( <> {/* ...le JSX principal déjà présent au-dessus... */}

<Dialog open={detailOpen} onOpenChange={setDetailOpen}>
  <DialogContent className="max-w-lg">
    <DialogHeader>
      <DialogTitle>Détails du profil</DialogTitle>
      <DialogDescription>Informations publiques du profil sélectionné</DialogDescription>
    </DialogHeader>
    {detailProfile && (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border">
            <AvatarFallback>{(detailProfile.fullName || detailProfile.username || '?').slice(0,2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <div className="font-medium truncate">{detailProfile.fullName}</div>
            <div className="text-sm text-muted-foreground truncate">@{detailProfile.username} {detailProfile.country ? `• ${detailProfile.country}` : ''}</div>
          </div>
        </div>
        {detailProfile.bio && <p className="text-sm leading-relaxed whitespace-pre-wrap">{detailProfile.bio}</p>}
        {detailProfile.genres?.length ? (
          <div className="flex flex-wrap gap-1">
            {detailProfile.genres.map((g) => (
              <Badge key={`detail-${g}`} variant="secondary" className="rounded-xl">{g}</Badge>
            ))}
          </div>
        ) : null}
        <div className="flex gap-2 justify-end pt-2">
          <Button variant="outline" onClick={() => setDetailOpen(false)}>Fermer</Button>
          <Button onClick={() => { if (detailProfile) applyProfileFromResult(detailProfile); setDetailOpen(false); }}>
            Remplir mon profil
          </Button>
          {detailProfile.instagram ? (
            <Button asChild>
              <a href={`https://instagram.com/${detailProfile.instagram}`} target="_blank" rel="noreferrer">Voir Instagram</a>
            </Button>
          ) : null}
        </div>
      </div>
    )}
  </DialogContent>
</Dialog>

</> );

