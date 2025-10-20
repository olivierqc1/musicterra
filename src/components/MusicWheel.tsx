// ─────────────── MusicWheel.tsx ───────────────
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { genres } from "@/data/genres"

export default function MusicWheel() {
  const [rotation, setRotation] = useState(0)

  // Animation continue
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const radius = 140
  const displayedGenres = genres.slice(0, 10) // tu peux en afficher plus

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h2 className="text-2xl font-bold mb-6">Roue musicale</h2>
      <div className="relative w-[340px] h-[340px]">
        {/* Cercle central */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ ease: "linear", duration: 0.5 }}
          className="absolute inset-0"
        >
          {displayedGenres.map((genre, index) => {
            const angle = (index / displayedGenres.length) * 2 * Math.PI
            const x = Math.cos(angle) * radius + 150
            const y = Math.sin(angle) * radius + 150
            return (
              <motion.div
                key={genre.name}
                className="absolute text-sm font-medium text-primary cursor-pointer"
                style={{
                  top: y,
                  left: x,
                  transform: `translate(-50%, -50%)`,
                }}
                whileHover={{ scale: 1.2, color: "#f97316" }}
              >
                {genre.name}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Centre de la roue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-semibold shadow-lg">
          🎧
        </div>
      </div>
      <p className="text-muted-foreground text-sm mt-3">
        Survolez un genre pour le mettre en valeur.
      </p>
    </div>
  )
}
