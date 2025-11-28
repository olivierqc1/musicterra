// ─────────────── RatingSystem.tsx (VERSION CORRIGÉE) ───────────────
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { supabase } from "@/lib/supabase"

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
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle')

  // Charger le rating existant au montage
  useEffect(() => {
    loadRating()
  }, [itemName, itemType, session])

  const loadRating = async () => {
    console.log(`🔍 Chargement rating pour: ${itemType} "${itemName}"`)
    
    if (!session) {
      console.log('❌ Pas de session, chargement depuis localStorage')
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
        .maybeSingle()

      if (error) {
        console.error('❌ Erreur Supabase:', error)
        loadFromLocalStorage()
        return
      }

      if (data) {
        console.log(`✅ Rating trouvé: ${data.rating}/10`)
        setCurrentRating(data.rating)
      } else {
        console.log('ℹ️ Pas de rating trouvé, vérification localStorage')
        loadFromLocalStorage()
      }
    } catch (err) {
      console.error('❌ Exception:', err)
      loadFromLocalStorage()
    }
  }

  const loadFromLocalStorage = () => {
    const userId = session?.user?.id || 'guest'
    const key = `rating_${userId}_${itemType}_${itemName}`
    const stored = localStorage.getItem(key)
    
    if (stored) {
      const rating = parseInt(stored)
      console.log(`📦 Rating local trouvé: ${rating}/10`)
      setCurrentRating(rating)
    } else {
      console.log('ℹ️ Pas de rating local')
    }
  }

  const saveRating = async (rating: number) => {
    console.log(`💾 Début sauvegarde: ${itemType} "${itemName}" = ${rating}/10`)
    setSaving(true)
    setSaveStatus('saving')
    
    // 1. TOUJOURS sauvegarder en local d'abord (fallback)
    const userId = session?.user?.id || 'guest'
    const key = `rating_${userId}_${itemType}_${itemName}`
    
    if (rating > 0) {
      localStorage.setItem(key, rating.toString())
      console.log(`📦 Sauvegardé en local: ${key} = ${rating}`)
    } else {
      localStorage.removeItem(key)
      console.log(`🗑️ Supprimé du local: ${key}`)
    }

    // 2. Sauvegarder dans Supabase si connecté
    if (!session) {
      console.log('⚠️ Pas de session, sauvegarde locale seulement')
      setSaving(false)
      setSaveStatus('success')
      setCurrentRating(rating)
      if (onRatingChange) onRatingChange(rating)
      return
    }

    try {
      console.log('☁️ Tentative sauvegarde Supabase...')
      console.log('User ID:', session.user.id)
      console.log('Item type:', itemType)
      console.log('Item name:', itemName)
      console.log('Rating:', rating)

      if (rating > 0) {
        // UPSERT (insert ou update)
        const { data, error } = await supabase
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
          .select()

        if (error) {
          console.error('❌ Erreur Supabase upsert:', error)
          console.error('Code:', error.code)
          console.error('Message:', error.message)
          console.error('Details:', error.details)
          setSaveStatus('error')
        } else {
          console.log('✅ Sauvegardé dans Supabase!')
          console.log('Data:', data)
          setSaveStatus('success')
        }
      } else {
        // DELETE si rating = 0
        const { error } = await supabase
          .from('ratings')
          .delete()
          .eq('user_id', session.user.id)
          .eq('item_type', itemType)
          .eq('item_name', itemName)

        if (error) {
          console.error('❌ Erreur Supabase delete:', error)
          setSaveStatus('error')
        } else {
          console.log('✅ Supprimé de Supabase!')
          setSaveStatus('success')
        }
      }
    } catch (err) {
      console.error('❌ Exception lors de la sauvegarde:', err)
      setSaveStatus('error')
    }

    setSaving(false)
    setCurrentRating(rating)
    
    if (onRatingChange) {
      onRatingChange(rating)
    }

    // Reset status après 2 secondes
    setTimeout(() => setSaveStatus('idle'), 2000)
  }

  const handleClick = (rating: number) => {
    // Si on clique sur la même note, on la retire (rating = 0)
    if (currentRating === rating) {
      console.log('🔄 Même note cliquée, suppression')
      saveRating(0)
    } else {
      saveRating(rating)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <button
            key={star}
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            disabled={saving}
            className="transition-transform hover:scale-110 disabled:opacity-50"
            type="button"
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
      
      {/* Indicateur de statut */}
      {saveStatus === 'saving' && (
        <div className="text-xs text-muted-foreground flex items-center gap-1">
          ⏳ Synchronisation...
        </div>
      )}
      {saveStatus === 'success' && (
        <div className="text-xs text-green-600 flex items-center gap-1">
          ✅ Sauvegardé
        </div>
      )}
      {saveStatus === 'error' && (
        <div className="text-xs text-red-600 flex items-center gap-1">
          ❌ Erreur (sauvegarde locale OK)
        </div>
      )}
    </div>
  )
}