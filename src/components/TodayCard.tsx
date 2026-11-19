import { GAMES } from '../games'
import { CATEGORIES } from '../games/categories'
import { useGameNav } from '../hooks/useGameNav'
import { gameOfTheDay } from '../lib/daily'
import styles from './TodayCard.module.css'

export default function TodayCard() {
  const { openGame } = useGameNav()
  const g = gameOfTheDay(GAMES, new Date())
  return (
    <button className={styles.today} onClick={() => openGame(g.id)}>
      <span className={styles.e}>{g.emoji}</span>
      <span>
        <small>⭐ Spiel des Tages</small>
        <b>{g.title}</b>
        <br />
        <span className="meta">
          {CATEGORIES[g.category].name} · ab {g.minAge} J. · {g.minutes} Min.
        </span>
      </span>
    </button>
  )
}
