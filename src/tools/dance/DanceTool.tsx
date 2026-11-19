import { useRef, useState } from 'react'
import { audioContext, noise, tone } from '../../lib/audio'
import { useTimers } from '../../hooks/useTimers'
import { pick } from '../../lib/random'
import t from '../tool.module.css'

const NOTES = [392, 440, 523, 587, 659, 784, 880]

type Stage = 'ready' | 'dance' | 'freeze' | 'pause'

const STAGE_TEXT: Record<Stage, string> = {
  ready: 'Bereit zum Tanzen?',
  dance: '💃 TANZEN! 🕺',
  freeze: '🧊 STOPP! Einfrieren!',
  pause: 'Pause',
}

export default function DanceTool() {
  const timers = useTimers()
  const [stage, setStage] = useState<Stage>('ready')
  const [on, setOn] = useState(false)
  // Tick-Zustand liegt in Refs, damit nicht jeder Takt ein Re-Render auslöst.
  const beat = useRef<number | null>(null)
  const dancing = useRef(true)
  const phaseEnd = useRef(0)
  const idx = useRef(3)
  const step = useRef(0)

  const tick = () => {
    const now = Date.now()
    if (now > phaseEnd.current) {
      dancing.current = !dancing.current
      phaseEnd.current =
        now +
        (dancing.current
          ? 3000 + Math.random() * 6000
          : 2500 + Math.random() * 1500)
      setStage(dancing.current ? 'dance' : 'freeze')
      if (!dancing.current) tone(196, 0.4, 'sawtooth', 0.12)
    }
    if (dancing.current) {
      idx.current = Math.max(
        0,
        Math.min(NOTES.length - 1, idx.current + pick([-2, -1, 1, 1, 2])),
      )
      tone(NOTES[idx.current], 0.18, 'square', 0.07)
      if (step.current % 4 === 0) tone(NOTES[0] / 2, 0.25, 'triangle', 0.18)
      if (step.current % 2 === 1) noise(0.03, 0.15)
      step.current++
    }
  }

  const toggle = () => {
    if (beat.current !== null) {
      timers.clear(beat.current)
      beat.current = null
      setOn(false)
      setStage('pause')
    } else {
      audioContext()
      dancing.current = false
      phaseEnd.current = 0
      beat.current = timers.every(tick, 230)
      setOn(true)
    }
  }

  const cls =
    stage === 'dance' ? ` ${t.go}` : stage === 'freeze' ? ` ${t.stop}` : ''

  return (
    <>
      <div className={`${t.stage}${cls}`}>{STAGE_TEXT[stage]}</div>
      <div className={t.btns}>
        <button className={t.btn} onClick={toggle}>
          {on ? '■ Stopp' : '▶ Musik starten'}
        </button>
      </div>
      <div className="meta" style={{ marginTop: 6 }}>
        Ton am Handy einschalten! Die Musik stoppt zufällig.
      </div>
    </>
  )
}
