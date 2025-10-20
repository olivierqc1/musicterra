// ─────────────── Explore.tsx ───────────────
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { countries } from "@/data/countries"
import { genres } from "@/data/genres"
import { decades } from "@/data/decades"
import { Button } from "@/components/ui/button"
import { Music, Search } from "lucide-react"

export default function Explore() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")
  const [selectedDecade, setSelectedDecade] = useState("")
  const [search, setSearch] = useState("")

  // Simulation d’une base combinée (à remplacer plus tard par ta vraie base)
  const combinedData = countries.flatMap((country) =>
    (country.cities || []).map((city) => ({
      country: country.name,
      image: country.image,
      city: city.name,
      styles: city.styles,
      artists: city.artists,
      spotify: city.spotify,
      decade: "2000s",
    }))
  )

  const filteredResults = combinedData.filter((item) => {
    const matchCountry = selectedCountry ? item.country === selectedCountry : true
    const matchGenre = selectedGenre
      ? item.styles.some((style) =>
          style.toLowerCase().includes(selectedGenre.toLowerCase())
        )
      : true
    const matchSearch = search
      ? item.city.toLowerCase().includes(search.toLowerCase()) ||
        item.artists.some((a) => a.toLowerCase().includes(search.toLowerCase()))
      : true
    const matchDecade = selectedDecade ? item.decade === selectedDecade : true

    return matchCountry && matchGenre && matchSearch && matchDecade
  })

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Explorer la musique mondiale 🌍</h1>
      <p className="text-center text-muted-foreground">
        Filtre par pays, genre ou décennie pour découvrir de nouvelles scènes musicales.
      </p>

      {/* Filtres */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <Select onValueChange={setSelectedCountry}>
          <SelectTrigger>
            <SelectValue placeholder="Pays" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((c, i) => (
              <SelectItem key={i} value={c.name}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedGenre}>
          <SelectTrigger>
            <SelectValue placeholder="Genre" />
          </SelectTrigger>
          <SelectContent>
            {genres.map((g, i) => (
              <SelectItem key={i} value={g.name}>
                {g.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedDecade}>
          <SelectTrigger>
            <SelectValue placeholder="Décennie" />
          </SelectTrigger>
          <SelectContent>
            {decades.map((d, i) => (
              <SelectItem key={i} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Rechercher un artiste ou une ville..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="secondary">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Résultats */}
      <div className="grid gap-6 md:grid-cols-3">
        {filteredResults.length > 0 ? (
          filteredResults.map((item, idx) => (
            <Card key={idx} className="hover:bg-accent transition-colors">
              <CardContent className="p-4 flex flex-col gap-2">
                <img
                  src={item.image}
                  alt={item.country}
                  className="rounded-xl h-40 w-full object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">{item.city}</h3>
                <p className="text-sm text-muted-foreground">{item.country}</p>
                <div className="flex flex-wrap gap-1 text-xs text-primary">
                  {item.styles.map((s, i) => (
                    <span key={i} className="px-2 py-1 border rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-sm">
                  <strong>Artistes : </strong>
                  {item.artists.join(", ")}
                </div>
                {item.spotify && (
                  <a
                    href={item.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm text-blue-500 hover:underline flex items-center gap-1"
                  >
                    <Music className="w-4 h-4" /> Écouter sur Spotify
                  </a>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-muted-foreground col-span-full">
            Aucun résultat ne correspond à vos filtres.
          </p>
        )}
      </div>
    </div>
  )
}
