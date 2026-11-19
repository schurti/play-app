import { useRef, useState } from 'react'
import { speak, tone } from '../../lib/audio'
import { useTimers } from '../../hooks/useTimers'
import { pick } from '../../lib/random'
import t from '../tool.module.css'
import { COMMANDS } from './commands'

interface Command {
  withCommand: boolean
  text: string
}

export default function CommandsTool() {
  const timers = useTimers()
  const [cmd, setCmd] = useState<Command | null>(null)
  const [auto, setAuto] = useState(false)
  const [voice, setVoice] = useState(false)
  const autoId = useRef<number | null>(null)
  const voiceRef = useRef(false)

  const next = () => {
    const withCommand = Math.random() < 0.65
    const text = pick(COMMANDS) + '!'
    setCmd({ withCommand, text })
    if (voiceRef.current) speak((withCommand ? 'Kommando: ' : '') + text)
    else tone(withCommand ? 880 : 330, 0.12)
  }

  const toggleAuto = () => {
    if (autoId.current !== null) {
      timers.clear(autoId.current)
      autoId.current = null
      setAuto(false)
    } else {
      next()
      autoId.current = timers.every(next, 4500)
      setAuto(true)
    }
  }

  const toggleVoice = () => {
    voiceRef.current = !voiceRef.current
    setVoice(voiceRef.current)
    if (voiceRef.current) speak('Los geht’s!')
  }

  return (
    <>
      <div className={`${t.stage} ${t.cmd}`}>
        {cmd ? (
          <>
            {cmd.withCommand ? (
              <span className={t.ok}>✅ Kommando:</span>
            ) : (
              <span className={t.no}>❌ (ohne Kommando)</span>
            )}
            <br />
            {cmd.text}
          </>
        ) : (
          'Bereit? 🫡'
        )}
      </div>
      <div className={t.btns}>
        <button className={t.btn} onClick={next}>
          ➡️ Nächster Befehl
        </button>
        <button className={`${t.btn} ${t.alt} ${t.sm}`} onClick={toggleAuto}>
          {auto ? '⏸ Pause' : '▶ Automatisch'}
        </button>
        <button className={`${t.btn} ${t.alt} ${t.sm}`} onClick={toggleVoice}>
          {voice ? '🔊 Vorlesen an' : '🔇 Vorlesen aus'}
        </button>
      </div>
    </>
  )
}
