import { useState } from 'react'
import { audioContext, noise, tone } from '../../lib/audio'
import { useTimers } from '../../hooks/useTimers'
import { pick } from '../../lib/random'
import t from '../tool.module.css'

const SOUNDS = {
  '👏': () => noise(0.09, 0.6),
  '🦶': () => tone(70, 0.25, 'sine', 0.5),
  '🥁': () => tone(180, 0.12, 'triangle', 0.35),
}
type Beat = keyof typeof SOUNDS
const SYMBOLS = Object.keys(SOUNDS) as Beat[]

const makePattern = (): Beat[] =>
  Array.from({ length: 3 + Math.floor(Math.random() * 4) }, () => pick(SYMBOLS))

export default function RhythmTool() {
  const timers = useTimers()
  const [pattern, setPattern] = useState<Beat[]>(makePattern)
  const [hit, setHit] = useState<number | null>(null)

  const play = (pat: Beat[]) => {
    audioContext()
    timers.clearAll()
    setHit(null)
    pat.forEach((p, i) =>
      timers.later(() => {
        SOUNDS[p]()
        setHit(i)
        timers.later(() => setHit((h) => (h === i ? null : h)), 250)
      }, i * 520),
    )
  }

  const renew = () => {
    const pat = makePattern()
    setPattern(pat)
    play(pat)
  }

  return (
    <>
      <div style={{ margin: '6px 0' }}>
        {pattern.map((p, i) => (
          <span
            key={i}
            data-testid="beat"
            className={`${t.beat}${hit === i ? ` ${t.hit}` : ''}`}
          >
            {p}
          </span>
        ))}
      </div>
      <div className={t.btns}>
        <button className={t.btn} onClick={() => play(pattern)}>
          ▶ Vorspielen
        </button>
        <button className={`${t.btn} ${t.alt} ${t.sm}`} onClick={renew}>
          🔄 Neues Muster
        </button>
      </div>
      <div className="meta" style={{ marginTop: 6 }}>
        👏 klatschen · 🦶 stampfen · 🥁 auf den Tisch klopfen
      </div>
    </>
  )
}
