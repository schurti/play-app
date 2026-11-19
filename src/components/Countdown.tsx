import { useEffect, useState } from 'react'
import { useTimers } from '../hooks/useTimers'
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
  const timers = useTimers()

  useEffect(() => {
    let t = seconds
    const id = timers.every(() => {
      t--
      setLeft(t)
      if (t <= 0) {
        timers.clear(id)
        ;[0, 0.3, 0.6].forEach((w) => tone(880, 0.2, 'square', 0.12, w))
        try {
          navigator.vibrate?.([200, 100, 200])
        } catch {
          /* kein Vibrations-Support */
        }
      }
    }, 1000)
    return () => timers.clear(id)
  }, [seconds, timers])

  return <span className={styles.timer}>{format(left)}</span>
}
