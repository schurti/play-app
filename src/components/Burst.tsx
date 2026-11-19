import { useEffect, useState, type CSSProperties } from 'react'
import styles from './GameSheet.module.css'

const EMOJIS = ['⭐', '✨', '🎉', '🌟', '💫']
const DURATION_MS = 1000

interface Particle {
  emoji: string
  x: number
  y: number
}

function makeParticles(): Particle[] {
  return Array.from({ length: 14 }, () => {
    const a = Math.random() * Math.PI * 2
    const d = 80 + Math.random() * 120
    return {
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      x: Math.cos(a) * d,
      y: Math.sin(a) * d - 60,
    }
  })
}

/** Konfetti-Funken an einer Bildschirmposition; entfernt sich nach 1 s selbst. */
export default function Burst({
  x,
  y,
  onDone,
}: {
  x: number
  y: number
  onDone: () => void
}) {
  const [particles] = useState(makeParticles)

  useEffect(() => {
    const id = setTimeout(onDone, DURATION_MS)
    return () => clearTimeout(id)
  }, [onDone])

  return (
    <>
      {particles.map((p, i) => (
        <span
          key={i}
          className={styles.burst}
          aria-hidden="true"
          style={
            {
              left: x,
              top: y,
              '--x': p.x + 'px',
              '--y': p.y + 'px',
            } as CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
    </>
  )
}
