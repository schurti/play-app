import { catVars } from '../games/categories'
import type { Game } from '../games/types'
import { useGameNav } from '../hooks/useGameNav'
import { useProgress } from '../store/progress'
import Art from './Art'
import styles from './GameCard.module.css'
import Scene from './Scene'

export default function GameCard({ game }: { game: Game }) {
  const { openGame } = useGameNav()
  const fav = useProgress((s) => s.fav[game.id])
  const done = useProgress((s) => s.done[game.id])
  const items = game.items.slice(0, 2).join(', ')
  const more = game.items.length > 2 ? ` +${game.items.length - 2}` : ''
  return (
    <button
      className={styles.card}
      style={catVars(game.category)}
      onClick={() => openGame(game.id)}
    >
      <span className={styles.art}>
        <Scene category={game.category} className={styles.scene} />
        <Art emoji={game.emoji} size={64} className={styles.e} />
        {(fav || done) && (
          <span className={styles.badges}>
            {fav ? '❤️' : ''}
            {done ? '✅' : ''}
          </span>
        )}
      </span>
      <span className={styles.body}>
        <b>{game.title}</b>
        <span className="meta">
          ab {game.minAge} J. · {game.minutes} Min.
        </span>
        <span className={styles.need}>
          {game.items.length ? items + more : 'nichts nötig'}
        </span>
      </span>
    </button>
  )
}
