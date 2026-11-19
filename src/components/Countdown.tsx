import { useEffect, useState } from 'react'
import { tone } from '../lib/audio'
import styles from './GameSheet.module.css'

function format(t: number): string {
  if (t <= 0) return 'Zeit um! 🎉'
  const r = t % 60
  return Math.floor(t / 60) + ':' + (r < 10 ? '0' : '') + r
}

/** Zählt von `seconds` herunter; stoppt beim Unmount. Neu starten über `key`. */
export default function Countdown({ seconds }: { seconds: number }) {
  const [left, setLeft] = useState(seconds)

  useEffect(() => {
    let t = seconds
    const id = setInterval(() => {
      t--
      setLeft(t)
      if (t <= 0) {
        clearInterval(id)
        ;[0, 0.3, 0.6].forEach((w) => tone(880, 0.2, 'square', 0.12, w))
        try {
          navigator.vibrate?.([200, 100, 200])
        } catch {
          /* kein Vibrations-Support */
        }
      }
    }, 1000)
    return () => clearInterval(id)
  }, [seconds])

  return <span className={styles.timer}>{format(left)}</span>
}
