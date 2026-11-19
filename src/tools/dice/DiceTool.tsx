import { useRef, useState } from 'react'
import { tone } from '../../lib/audio'
import { useTimers } from '../../hooks/useTimers'
import t from '../tool.module.css'
import Die from './Die'

const roll1 = () => 1 + Math.floor(Math.random() * 6)

export default function DiceTool() {
  const timers = useTimers()
  const [two, setTwo] = useState(false)
  const [[a, b], setValues] = useState<[number, number]>([1, 1])
  const rolling = useRef<number | null>(null)

  const stop = () => {
    if (rolling.current !== null) timers.clear(rolling.current)
    rolling.current = null
  }

  const roll = () => {
    stop()
    let k = 0
    rolling.current = timers.every(() => {
      k++
      tone(300 + Math.random() * 300, 0.04, 'square', 0.06)
      setValues([roll1(), roll1()])
      if (k >= 9) {
        stop()
        tone(660, 0.15)
      }
    }, 70)
  }

  const toggle = () => {
    stop()
    setTwo((v) => !v)
    setValues([roll1(), roll1()])
  }

  return (
    <>
      <div className={t.dice}>
        <Die n={a} />
        {two && <Die n={b} />}
      </div>
      <div className={t.big} data-testid="sum">
        {two ? `${a} + ${b} = ${a + b}` : a}
      </div>
      <div className={t.btns}>
        <button className={t.btn} onClick={roll}>
          🎲 Würfeln
        </button>
        <button className={`${t.btn} ${t.alt} ${t.sm}`} onClick={toggle}>
          {two ? '1 Würfel' : '2 Würfel'}
        </button>
      </div>
    </>
  )
}
