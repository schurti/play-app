import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react'
import { useSearchParams } from 'react-router'
import { CATEGORIES, catVars } from '../games/categories'
import { getGame } from '../games'
import type { Game } from '../games/types'
import { useGameNav } from '../hooks/useGameNav'
import { useTimers } from '../hooks/useTimers'
import { fanfare, stopSpeech } from '../lib/audio'
import { useProgress } from '../store/progress'
import { TOOLS } from '../tools/registry'
import Art from './Art'
import Burst from './Burst'
import styles from './GameSheet.module.css'
import Scene from './Scene'
import { useToast } from './Toast'

interface BodyProps {
  game: Game
  onBurst: (x: number, y: number) => void
}

function SheetBody({ game, onBurst }: BodyProps) {
  const { closeGame: navigateClose } = useGameNav()
  const closing = useRef(false)
  const closeGame = useCallback(() => {
    if (closing.current) return
    closing.current = true
    navigateClose()
  }, [navigateClose])
  const toast = useToast()
  const timers = useTimers()
  const fav = useProgress((s) => Boolean(s.fav[game.id]))
  const doneCount = useProgress((s) => s.done[game.id] ?? 0)
  const [finished, setFinished] = useState(false)
  const cat = CATEGORIES[game.category]
  const Tool = game.tool ? TOOLS[game.tool] : undefined

  useEffect(() => {
    document.body.classList.add('lock')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGame()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('lock')
      document.removeEventListener('keydown', onKey)
    }
  }, [closeGame])

  useEffect(() => stopSpeech, [])

  const onFav = () => {
    const now = useProgress.getState().toggleFav(game.id)
    toast(now ? '❤️ Zu Favoriten hinzugefügt' : 'Aus Favoriten entfernt')
  }

  const onDone = (e: MouseEvent<HTMLButtonElement>) => {
    if (finished) return
    setFinished(true)
    useProgress.getState().markDone(game.id)
    const r = e.currentTarget.getBoundingClientRect()
    onBurst(r.left + r.width / 2, r.top)
    fanfare()
    toast('⭐ Super gemacht! +1 Stern')
    timers.later(closeGame, 650)
  }

  return (
    <div
      className={styles.bg}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeGame()
      }}
    >
      <div
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        style={catVars(game.category)}
      >
        <div className={styles.art}>
          <Scene category={game.category} className={styles.scene} />
          <Art emoji={game.emoji} size={112} className={styles.emoji} />
          <div className={styles.icons}>
            <button className={styles.ico} aria-label="Favorit" onClick={onFav}>
              {fav ? '❤️' : '🤍'}
            </button>
            <button
              className={styles.ico}
              aria-label="Schliessen"
              onClick={closeGame}
            >
              ✕
            </button>
          </div>
        </div>
        <h2 id="sheet-title">{game.title}</h2>
        <div className="meta">
          {cat.emoji} {cat.name} · ab {game.minAge} J. · ca. {game.minutes} Min.
          {game.tags.includes('allein') && ' · allein spielbar'}
          {game.tags.includes('gruppe') && ' · gut für Gruppen'}
        </div>
        <div className={styles.need}>
          {game.items.length ? (
            <>
              <b>Ihr braucht:</b>
              {game.items.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </>
          ) : (
            <span>Kein Material nötig</span>
          )}
        </div>
        {game.adultNote && (
          <div className={`${styles.box} ${styles.hint}`}>
            👩‍👧 {game.adultNote}
          </div>
        )}
        {game.tool && (
          <div className={styles.tool}>
            {Tool && <Tool key={game.id} game={game} color={cat.color} />}
          </div>
        )}
        <ol className={styles.steps}>
          {game.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        {game.variants && (
          <div className={`${styles.box} ${styles.vary}`}>
            🔀 <b>Varianten:</b> {game.variants}
          </div>
        )}
        <div className={`${styles.box} ${styles.learn}`}>
          💡 <b>Das lernt ihr:</b> {game.learn}
        </div>
        <div className={styles.btns}>
          <button
            className={`${styles.btn} ${styles.done}`}
            onClick={onDone}
            disabled={finished}
          >
            Geschafft! ⭐
          </button>
          {doneCount > 0 && (
            <span className="meta">schon {doneCount}× gespielt</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function GameSheet() {
  const [params, setParams] = useSearchParams()
  const [burst, setBurst] = useState<{
    x: number
    y: number
    run: number
  } | null>(null)
  const id = params.get('spiel')
  const game = id ? getGame(id) : undefined

  useEffect(() => {
    if (id && !game) {
      setParams(
        (p) => {
          const next = new URLSearchParams(p)
          next.delete('spiel')
          return next
        },
        { replace: true },
      )
    }
  }, [id, game, setParams])

  const onBurst = useCallback(
    (x: number, y: number) =>
      setBurst((b) => ({ x, y, run: (b?.run ?? 0) + 1 })),
    [],
  )
  const endBurst = useCallback(() => setBurst(null), [])

  return (
    <>
      {game && <SheetBody key={game.id} game={game} onBurst={onBurst} />}
      {burst && (
        <Burst key={burst.run} x={burst.x} y={burst.y} onDone={endBurst} />
      )}
    </>
  )
}
