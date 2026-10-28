// src/components/ProfileSearch.tsx
// Recherche d'utilisateurs MusicTerra + fiche détail (Dialog/Drawer).
// Extrait de Profile.tsx pour garder les fichiers légers.

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { supabase } from "@/lib/supabase";
import { makeT, type Lang, type T } from "../i18n";

interface Props {
  onApply: (p: any) => void;
  language?: Lang;
}

export default function ProfileSearch({ onApply, language = "fr" }: Props) {
  const t = makeT(language);
  
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

  return (
    <>
      {/* Recherche de profils RÉELLE */}
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>🔍 {t("Recherche d'utilisateurs", "Find users", "Buscar usuarios", "Cerca usuaris")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("Rechercher par nom, username, pays ou genre…", "Search by name, username, country or genre…", "Busca por nombre, usuario, país o género…", "Cerca per nom, usuari, país o gènere…")}
            className="mb-4"
          />

          <div className="grid md:grid-cols-2 gap-4">
            {searching && (
              <p className="text-sm text-muted-foreground col-span-2 text-center">
                🔍 {t("Recherche en cours...", "Searching...", "Buscando...", "Cercant...")}
              </p>
            )}
            
            {!searching && searchResults.length === 0 && search.trim() && (
              <p className="text-muted-foreground text-sm text-center col-span-2">
                {t("Aucun utilisateur trouvé.", "No users found.", "No se encontró ningún usuario.", "No s'ha trobat cap usuari.")}
              </p>
            )}
            
            {!searching && searchResults.length === 0 && !search.trim() && (
              <p className="text-muted-foreground text-sm text-center col-span-2">
                {t("Tape pour chercher des utilisateurs MusicTerra...", "Type to search MusicTerra users...", "Escribe para buscar usuarios de MusicTerra...", "Escriu per cercar usuaris de MusicTerra...")}
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
        onApply={onApply}
        t={t}
      />
    </>
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
  t,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: any;
  onApply: (p: any) => void;
  t: T;
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
      
      <Button onClick={() => onApply(profile)} className="mt-2">
        {t("Appliquer à mon profil", "Apply to my profile", "Aplicar a mi perfil", "Aplica al meu perfil")}
      </Button>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("Profil utilisateur", "User profile", "Perfil de usuario", "Perfil d'usuari")}</DialogTitle>
            <DialogDescription>
              {t("Voir les détails et appliquer à ton profil.", "See the details and apply them to your profile.", "Ver los detalles y aplicarlos a tu perfil.", "Veure els detalls i aplicar-los al teu perfil.")}
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
          <DrawerTitle>{t("Profil utilisateur", "User profile", "Perfil de usuario", "Perfil d'usuari")}</DrawerTitle>
          <DrawerDescription>
            {t("Voir les détails et appliquer à ton profil.", "See the details and apply them to your profile.", "Ver los detalles y aplicarlos a tu perfil.", "Veure els detalls i aplicar-los al teu perfil.")}
          </DrawerDescription>
        </DrawerHeader>
        <DetailContent />
      </DrawerContent>
    </Drawer>
  );
}
