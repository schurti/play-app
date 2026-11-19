import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router'
import { CATEGORIES, catVars } from '../games/categories'
import { GAMES, getGame } from '../games'
import type { Game } from '../games/types'
import { useGameNav } from '../hooks/useGameNav'
import { useTimers } from '../hooks/useTimers'
import { useTouchGestures } from '../hooks/useTouchGestures'
import { useVisibleGames } from '../hooks/useVisibleGames'
import { stopSpeech } from '../lib/audio'
import { useProgress } from '../store/progress'
import { TOOLS } from '../tools/registry'
import Art from './Art'
import styles from './GameSheet.module.css'
import Scene from './Scene'
import { useToast } from './Toast'

const CLOSE_MS = 220
/** Zum Schliessen mindestens so weit ziehen (px) … */
const PULL_MIN = 180
/** … bzw. diesen Anteil der Dialoghöhe, je nachdem was grösser ist. */
const PULL_SHARE = 0.35
/** Ein schneller Wisch schliesst schon ab dieser Strecke (px) … */
const FLICK_MIN = 100
/** … wenn er mindestens so schnell ist (px/ms). */
const FLICK_SPEED = 0.9

/** Abdunkelung hinter dem Dialog (1 = voll, 0 = weg). */
const backdrop = (strength: number) =>
  `rgba(42, 36, 83, ${(0.4 * Math.max(0, strength)).toFixed(3)})`

interface BodyProps {
  game: Game
  /** Zum vorherigen / nächsten Spiel der aktuellen Liste (Wischen, Pfeiltasten). */
  onStep?: (delta: 1 | -1) => void
}

function SheetBody({ game, onStep }: BodyProps) {
  const { closeGame: navigateClose } = useGameNav()
  const timers = useTimers()
  const sheetRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const closing = useRef(false)

  /** Dialog nach unten hinausgleiten lassen, Hintergrund ausblenden, dann schliessen. */
  const closeGame = useCallback(() => {
    if (closing.current) return
    closing.current = true
    stopSpeech()
    const sheet = sheetRef.current
    const bg = bgRef.current
    const reduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (!sheet || !bg || reduced) {
      navigateClose()
      return
    }
    sheet.style.transition = `transform ${CLOSE_MS}ms cubic-bezier(0.4, 0, 1, 1)`
    sheet.style.transform = 'translateY(100%)'
    bg.style.transition = `background-color ${CLOSE_MS}ms ease-in`
    bg.style.backgroundColor = backdrop(0)
    timers.later(navigateClose, CLOSE_MS)
  }, [navigateClose, timers])

  const toast = useToast()
  const fav = useProgress((s) => Boolean(s.fav[game.id]))
  const cat = CATEGORIES[game.category]
  const Tool = game.tool ? TOOLS[game.tool] : undefined

  // Nach unten ziehen schliesst, seitlich wischen blättert zum nächsten Spiel.
  useTouchGestures(sheetRef, {
    onPull(dy) {
      const sheet = sheetRef.current
      const bg = bgRef.current
      if (!sheet || !bg) return
      // Dialog und Inhalt bewegen sich gemeinsam; nur das Abdunkeln wird schwächer.
      sheet.style.transition = 'none'
      sheet.style.transform = `translateY(${dy}px)`
      const h = sheet.offsetHeight || 600
      bg.style.transition = 'none'
      bg.style.backgroundColor = backdrop(1 - Math.min(1, dy / h))
    },
    onPullEnd(dy, velocity) {
      const sheet = sheetRef.current
      const bg = bgRef.current
      const h = sheet?.offsetHeight || 600
      const far = dy > Math.max(PULL_MIN, h * PULL_SHARE)
      const flick = dy > FLICK_MIN && velocity > FLICK_SPEED
      if (far || flick) {
        closeGame()
        return
      }
      if (sheet) {
        sheet.style.transition =
          'transform 0.25s cubic-bezier(0.2, 0.9, 0.3, 1)'
        sheet.style.transform = ''
      }
      if (bg) {
        bg.style.transition = 'background-color 0.25s ease-out'
        bg.style.backgroundColor = ''
      }
    },
    onSwipeLeft: () => onStep?.(1),
    onSwipeRight: () => onStep?.(-1),
  })

  // Layout-Effekt: Die Sperre fällt beim Schliessen im selben Commit wie der
  // Dialog weg, nicht erst danach (sonst bleibt das Scrollen kurz gesperrt).
  useLayoutEffect(() => {
    document.body.classList.add('lock')
    return () => document.body.classList.remove('lock')
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGame()
      if (e.key === 'ArrowRight') onStep?.(1)
      if (e.key === 'ArrowLeft') onStep?.(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeGame, onStep])

  useEffect(() => stopSpeech, [])

  const onFav = () => {
    const now = useProgress.getState().toggleFav(game.id)
    toast(now ? '❤️ Zu Favoriten hinzugefügt' : 'Aus Favoriten entfernt')
  }

  return (
    <div
      ref={bgRef}
      className={styles.bg}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeGame()
      }}
    >
      <div
        ref={sheetRef}
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        style={catVars(game.category)}
      >
        <div className={styles.art}>
          <Scene category={game.category} className={styles.scene} />
          <span className={styles.handle} aria-hidden="true" />
          <Art emoji={game.emoji} size={112} className={styles.emoji} />
          {onStep && (
            <>
              <button
                className={`${styles.ico} ${styles.prev}`}
                aria-label="Vorheriges Spiel"
                onClick={() => onStep(-1)}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  aria-hidden="true"
                >
                  <path
                    d="M15 5 L8 12 L15 19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className={`${styles.ico} ${styles.next}`}
                aria-label="Nächstes Spiel"
                onClick={() => onStep(1)}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  aria-hidden="true"
                >
                  <path
                    d="M9 5 L16 12 L9 19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}
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
      </div>
    </div>
  )
}

export default function GameSheet() {
  const [params, setParams] = useSearchParams()
  const id = params.get('spiel')
  const game = id ? getGame(id) : undefined
  const navigate = useNavigate()
  const location = useLocation()
  const fav = useProgress((s) => s.fav)
  const visible = useVisibleGames()

  // Blätter-Reihenfolge: Favoriten auf der Favoriten-Seite, sonst die gefilterte Liste.
  const list =
    location.pathname === '/favoriten'
      ? GAMES.filter((g) => fav[g.id])
      : visible
  const index = game ? list.findIndex((g) => g.id === game.id) : -1
  const step = useCallback(
    (delta: 1 | -1) => {
      if (index < 0 || list.length < 2) return
      const next = list[(index + delta + list.length) % list.length]
      navigate(
        { search: '?spiel=' + next.id },
        { replace: true, state: location.state },
      )
    },
    [index, list, navigate, location.state],
  )

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

  return game ? (
    <SheetBody
      key={game.id}
      game={game}
      onStep={index >= 0 && list.length > 1 ? step : undefined}
    />
  ) : null
}
