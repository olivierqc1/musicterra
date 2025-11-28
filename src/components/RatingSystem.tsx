// ─────────────── RatingSystem.tsx ───────────────
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

interface RatingSystemProps {
  itemName: string
  itemType: "genre" | "country"
  onRatingChange?: (rating: number) => void
}

export function RatingSystem({ itemName, itemType, onRatingChange }: RatingSystemProps) {
  const { session } = useAuth()
  const [currentRating, setCurrentRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [saving, setSaving] = useState(false)

  // Charger le rating existant
  useEffect(() => {
    loadRating()
  }, [itemName, itemType, session])

  const loadRating = async () => {
    if (!session) {
      loadFromLocalStorage()
      return
    }

    try {
      const { data, error } = await supabase
        .from('ratings')
        .select('rating')
        .eq('user_id', session.user.id)
        .eq('item_type', itemType)
        .eq('item_name', itemName)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Erreur chargement rating:', error)
        loadFromLocalStorage()
      } else if (data) {
        setCurrentRating(data.rating)
      } else {
        loadFromLocalStorage()
      }
    } catch (err) {
      console.error('Erreur:', err)
      loadFromLocalStorage()
    }
  }

  const loadFromLocalStorage = () => {
    const userId = session?.user?.id || 'guest'
    const key = `rating_${userId}_${itemType}_${itemName}`
    const stored = localStorage.getItem(key)
    if (stored) {
      setCurrentRating(parseInt(stored))
    }
  }

  const saveRating = async (rating: number) => {
    setSaving(true)
    
    // Sauvegarder dans localStorage d'abord
    const userId = session?.user?.id || 'guest'
    const key = `rating_${userId}_${itemType}_${itemName}`
    
    if (rating > 0) {
      localStorage.setItem(key, rating.toString())
    } else {
      localStorage.removeItem(key)
    }

    // Sauvegarder dans Supabase si connecté
    if (session) {
      try {
        if (rating > 0) {
          const { error } = await supabase
            .from('ratings')
            .upsert({
              user_id: session.user.id,
              item_type: itemType,
              item_name: itemName,
              rating: rating,
              updated_at: new Date().toISOString()
            }, {
              onConflict: 'user_id,item_type,item_name'
            })

          if (error) {
            console.error('Erreur sauvegarde Supabase:', error)
          } else {
            console.log(`✅ Rating sauvegardé: ${itemName} = ${rating}/10`)
          }
        } else {
          // Supprimer si rating = 0
          await supabase
            .from('ratings')
            .delete()
            .eq('user_id', session.user.id)
            .eq('item_type', itemType)
            .eq('item_name', itemName)
        }
      } catch (err) {
        console.error('Erreur:', err)
      }
    }

    setCurrentRating(rating)
    setSaving(false)
    
    if (onRatingChange) {
      onRatingChange(rating)
    }
  }

  const handleClick = (rating: number) => {
    // Si on clique sur la même note, on la retire (rating = 0)
    if (currentRating === rating) {
      saveRating(0)
    } else {
      saveRating(rating)
    }
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
        <button
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          disabled={saving}
          className="transition-transform hover:scale-110 disabled:opacity-50"
        >
          <Star
            className={`w-5 h-5 ${
              (hoverRating || currentRating) >= star
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
      {currentRating > 0 && (
        <span className="ml-2 text-sm font-semibold text-primary">
          {currentRating}/10
        </span>
      )}
    </div>
  )
}