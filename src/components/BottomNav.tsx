import { NavLink, useLocation } from 'react-router'
import { GAMES } from '../games'
import { useGameNav } from '../hooks/useGameNav'
import { useVisibleGames } from '../hooks/useVisibleGames'
import { pick } from '../lib/random'
import { useProgress } from '../store/progress'
import Art from './Art'
import styles from './BottomNav.module.css'

const TABS = [
  { to: '/', emoji: '🏠', label: 'Spiele' },
  { to: '/favoriten', emoji: '❤️', label: 'Favoriten' },
] as const

export default function BottomNav() {
  const { pathname } = useLocation()
  const { openGame } = useGameNav()
  const visible = useVisibleGames()
  const fav = useProgress((s) => s.fav)

  function random() {
    const pool =
      pathname === '/favoriten' ? GAMES.filter((g) => fav[g.id]) : visible
    openGame(pick(pool.length ? pool : GAMES).id)
  }

  const tab = (t: (typeof TABS)[number]) => (
    <NavLink
      key={t.to}
      to={t.to}
      end
      className={({ isActive }) =>
        isActive ? `${styles.btn} ${styles.on}` : styles.btn
      }
    >
      <Art emoji={t.emoji} size={28} className={styles.icon} />
      {t.label}
    </NavLink>
  )

  return (
    <nav className={styles.nav}>
      <div className={styles.in}>
        {tab(TABS[0])}
        <button className={`${styles.btn} ${styles.dice}`} onClick={random}>
          <span className={styles.ball}>
            <Art emoji="🎲" size={34} />
          </span>
          Zufall
        </button>
        {tab(TABS[1])}
      </div>
    </nav>
  )
}
