import { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { GAMES } from '../games'
import { useGameNav } from '../hooks/useGameNav'
import { useVisibleGames } from '../hooks/useVisibleGames'
import { pick } from '../lib/random'
import Art from './Art'
import styles from './BottomNav.module.css'

/** So lange gedrückt halten, um den Zufalls-Assistenten zu öffnen (ms). */
export const LONG_PRESS = 550

const TABS = [
  {
    to: '/',
    emoji: '🧭',
    label: 'Entdecken',
    match: (p: string) => p === '/' || p.startsWith('/k/'),
  },
  {
    to: '/suche',
    emoji: '🔍',
    label: 'Suchen',
    match: (p: string) => p === '/suche',
  },
  {
    to: '/zufall',
    emoji: '🪄',
    label: 'Wunsch',
    match: (p: string) => p === '/zufall',
  },
  {
    to: '/favoriten',
    emoji: '❤️',
    label: 'Favoriten',
    match: (p: string) => p === '/favoriten',
  },
] as const

export default function BottomNav() {
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const { openGame } = useGameNav()
  const visible = useVisibleGames()
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const longFired = useRef(false)

  // Kurz tippen: Zufallsspiel aus der aktuellen Liste.
  // Gedrückt halten: Assistent „Was spielen wir?“.
  const startPress = () => {
    longFired.current = false
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      longFired.current = true
      navigator.vibrate?.(15)
      navigate('/zufall')
    }, LONG_PRESS)
  }
  const endPress = () => clearTimeout(timer.current)
  const onClick = () => {
    if (longFired.current) {
      longFired.current = false
      return
    }
    openGame(pick(visible.length ? visible : GAMES).id)
  }

  const tab = (t: (typeof TABS)[number]) => {
    const on = t.match(pathname)
    return (
      <Link
        key={t.to}
        to={t.to}
        onClick={(e) => {
          // Schon auf der Suche: Suchfeld fokussieren statt neu laden (Suche bleibt)
          if (t.to !== '/suche' || pathname !== '/suche') return
          e.preventDefault()
          const p = new URLSearchParams(search)
          if (p.has('spiel')) {
            p.delete('spiel')
            navigate({ search: p.size ? '?' + p : '' }, { replace: true })
          }
          window.scrollTo({ top: 0 })
          document.getElementById('suche-eingabe')?.focus()
        }}
        aria-current={on ? 'page' : undefined}
        className={on ? `${styles.btn} ${styles.on}` : styles.btn}
      >
        <Art emoji={t.emoji} size={28} className={styles.icon} />
        {t.label}
      </Link>
    )
  }

  return (
    <nav className={styles.nav} aria-label="Hauptmenü">
      <div className={styles.in}>
        {tab(TABS[0])}
        {tab(TABS[1])}
        <button
          className={`${styles.btn} ${styles.dice}`}
          onClick={onClick}
          onPointerDown={startPress}
          onPointerUp={endPress}
          onPointerLeave={endPress}
          onPointerCancel={endPress}
          onContextMenu={(e) => e.preventDefault()}
          title="Gedrückt halten: Was spielen wir?"
        >
          <span className={styles.ball}>
            <Art emoji="🎲" size={34} />
          </span>
          Zufall
        </button>
        {tab(TABS[2])}
        {tab(TABS[3])}
      </div>
    </nav>
  )
}
