import { useRef, useState } from 'react'
import { tone } from '../../lib/audio'
import { useTimers } from '../../hooks/useTimers'
import t from '../tool.module.css'

const ROUNDS = 5

interface View {
  big: boolean
  ball: string
  text: string
}

const IDLE: View = { big: false, ball: 'Bereit?', text: 'Tippe auf Start' }
const DONE: View = { big: false, ball: '✨', text: 'Super entspannt! 🌟' }

export default function BreathTool() {
  const timers = useTimers()
  const [view, setView] = useState<View>(IDLE)
  const [on, setOn] = useState(false)
  const [finished, setFinished] = useState(false)
  const loop = useRef<number | null>(null)
  const round = useRef(0)
  const inhale = useRef(false)

  const stop = () => {
    if (loop.current !== null) timers.clear(loop.current)
    loop.current = null
    setOn(false)
  }

  const step = () => {
    inhale.current = !inhale.current
    if (inhale.current) {
      round.current++
      if (round.current > ROUNDS) {
        stop()
        setFinished(true)
        setView(DONE)
        return
      }
    }
    const inh = inhale.current
    setView({
      big: inh,
      ball: inh ? 'einatmen' : 'ausatmen',
      text: `${inh ? 'Einatmen' : 'Ausatmen'} … (${round.current}/${ROUNDS})`,
    })
    tone(inh ? 392 : 294, 1.2, 'sine', 0.05)
  }

  const toggle = () => {
    if (on) {
      stop()
      return
    }
    setOn(true)
    setFinished(false)
    round.current = 0
    inhale.current = false
    step()
    loop.current = timers.every(step, 4000)
  }

  return (
    <>
      <div
        className={t.breath}
        style={view.big ? { transform: 'scale(1)' } : undefined}
      >
        {view.ball}
      </div>
      <div className={t.big}>{view.text}</div>
      <div className={t.btns}>
        <button className={t.btn} onClick={toggle}>
          {on ? '⏸ Stopp' : finished ? '▶ Nochmal' : '▶ Start'}
        </button>
      </div>
    </>
  )
}
