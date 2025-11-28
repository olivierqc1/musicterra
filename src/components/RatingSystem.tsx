// ─────────────── RatingSystem.tsx (VERSION FINALE - SANS BOUCLES) ───────────────
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
  const [errorMessage, setErrorMessage] = useState<string>('')

  // Charger le rating existant SEULEMENT au montage initial
  useEffect(() => {
    let isMounted = true
    
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

        if (!isMounted) return

        if (error) {
          console.error('❌ Erreur Supabase load:', error)
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
        console.error('❌ Exception load:', err)
        if (isMounted) loadFromLocalStorage()
      }
    }

    const loadFromLocalStorage = () => {
      const userId = session?.user?.id || 'guest'
      const key = `rating_${userId}_${itemType}_${itemName}`
      const stored = localStorage.getItem(key)
      
      if (stored) {
        const rating = parseInt(stored)
        console.log(`📦 Note locale trouvée: ${rating}`)
        if (isMounted) setCurrentRating(rating)
      } else {
        console.log('ℹ️ Pas de rating local')
      }
    }

    loadRating()

    return () => {
      isMounted = false
    }
  }, [itemName, itemType]) // PAS de "session" ici pour éviter les re-renders!

  const saveRating = async (rating: number) => {
    console.log(`💾 Début sauvegarde: ${itemType} "${itemName}" = ${rating}/10`)
    setSaving(true)
    setSaveStatus('saving')
    setErrorMessage('')
    
    // 1. TOUJOURS sauvegarder en local d'abord
    const userId = session?.user?.id || 'guest'
    const key = `rating_${userId}_${itemType}_${itemName}`
    
    if (rating > 0) {
      localStorage.setItem(key, rating.toString())
      console.log(`📦 Sauvegardé en local: ${key} = ${rating}`)
    } else {
      localStorage.removeItem(key)
      console.log(`🗑️ Supprimé du local: ${key}`)
    }

    // 2. Mettre à jour l'UI immédiatement
    setCurrentRating(rating)
    if (onRatingChange) onRatingChange(rating)

    // 3. Sauvegarder dans Supabase si connecté
    if (!session) {
      console.log('⚠️ Pas de session, sauvegarde locale seulement')
      setSaving(false)
      setSaveStatus('success')
      setTimeout(() => setSaveStatus('idle'), 2000)
      return
    }

    if (!session.user || !session.user.id) {
      console.error('❌ session.user.id est null!')
      setSaving(false)
      setSaveStatus('error')
      setErrorMessage('Session invalide')
      setTimeout(() => {
        setSaveStatus('idle')
        setErrorMessage('')
      }, 3000)
      return
    }

    try {
      console.log('☁️ Tentative sauvegarde Supabase...')
      console.log('🔹 User ID:', session.user.id)
      console.log('🔹 Item type:', itemType)
      console.log('🔹 Item name:', itemName)
      console.log('🔹 Rating:', rating)
      console.log('🔹 supabase existe?', !!supabase)
      console.log('🔹 supabase.from existe?', !!(supabase && supabase.from))

      if (rating > 0) {
        console.log('🔹 Appel upsert...')
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

        console.log('🔹 Upsert terminé')

        if (error) {
          console.error('❌ Erreur Supabase upsert:', error)
          console.error('Code:', error.code)
          console.error('Message:', error.message)
          console.error('Details:', error.details)
          
          const errMsg = `${error.code}: ${error.message}`
          setErrorMessage(errMsg)
          setSaveStatus('error')
        } else {
          console.log('✅ Sauvegardé dans Supabase!')
          console.log('Data:', data)
          setSaveStatus('success')
        }
      } else {
        // DELETE si rating = 0
        console.log('🔹 Appel delete...')
        const { error } = await supabase
          .from('ratings')
          .delete()
          .eq('user_id', session.user.id)
          .eq('item_type', itemType)
          .eq('item_name', itemName)

        console.log('🔹 Delete terminé')

        if (error) {
          console.error('❌ Erreur Supabase delete:', error)
          const errMsg = `${error.code}: ${error.message}`
          setErrorMessage(errMsg)
          setSaveStatus('error')
        } else {
          console.log('✅ Supprimé de Supabase!')
          setSaveStatus('success')
        }
      }
    } catch (err: any) {
      console.error('❌ Exception lors de la sauvegarde:', err)
      const errMsg = err?.message || String(err)
      setErrorMessage(`Exception: ${errMsg}`)
      setSaveStatus('error')
    }

    setSaving(false)

    // Reset status après 3 secondes
    setTimeout(() => {
      setSaveStatus('idle')
      setErrorMessage('')
    }, 3000)
  }

  const handleClick = (rating: number) => {
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
          ⏳ Sauvegarde...
        </div>
      )}
      {saveStatus === 'success' && (
        <div className="text-xs text-green-600 flex items-center gap-1">
          ✅ Enregistré!
        </div>
      )}
      {saveStatus === 'error' && (
        <div className="text-xs text-red-600 flex flex-col gap-1">
          <div>❌ Erreur cloud:</div>
          {errorMessage && (
            <div className="font-mono text-[10px] bg-red-50 p-1 rounded max-w-full overflow-x-auto">
              {errorMessage}
            </div>
          )}
          <div className="text-green-600">✅ Sauvegarde locale OK</div>
        </div>
      )}
    </div>
  )
}