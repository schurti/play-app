import { GAMES } from '../games'
import { CATEGORIES, catVars } from '../games/categories'
import { useGameNav } from '../hooks/useGameNav'
import { ageLabel } from '../games/types'
import { fitsSeason, gameOfTheDay, SEASON_LABEL, seasonOf } from '../lib/daily'
import Art from './Art'
import Scene from './Scene'
import styles from './TodayCard.module.css'

const DATE = new Intl.DateTimeFormat('de-CH', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
})

export default function TodayCard() {
  const { openGame } = useGameNav()
  const today = new Date()
  const g = gameOfTheDay(GAMES, today)
  const season = seasonOf(today)
  const seasonal = fitsSeason(g, season)
  return (
    <button
      className={styles.today}
      style={catVars(g.category)}
      onClick={() => openGame(g.id)}
    >
      <span className={styles.scene}>
        <Scene category={g.category} className={styles.svg} />
        <Art emoji={g.emoji} size={96} className={styles.hero} />
      </span>
      <span className={styles.body}>
        <span className={styles.head}>
          <small>
            {seasonal
              ? `${SEASON_LABEL[season].emoji} Spiel des Tages · passt zum ${SEASON_LABEL[season].name}`
              : '⭐ Spiel des Tages'}
          </small>
          <span className={styles.date}>{DATE.format(today)}</span>
        </span>
        <span className={styles.row}>
          <span className={styles.text}>
            <b>{g.title}</b>
            <span className="meta">
              {CATEGORIES[g.category].name} · {ageLabel(g)} · {g.minutes} Min.
            </span>
          </span>
          <span className={styles.play} aria-hidden="true">
            ▶
          </span>
        </span>
      </span>
    </button>
  )
}
