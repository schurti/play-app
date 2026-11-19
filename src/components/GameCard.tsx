import type { CSSProperties } from 'react'
import { CATEGORIES } from '../games/categories'
import type { Game } from '../games/types'
import { useGameNav } from '../hooks/useGameNav'
import { useProgress } from '../store/progress'
import styles from './GameCard.module.css'

export default function GameCard({ game }: { game: Game }) {
  const { openGame } = useGameNav()
  const fav = useProgress((s) => s.fav[game.id])
  const done = useProgress((s) => s.done[game.id])
  const items = game.items.slice(0, 3)
  return (
    <button
      className={styles.card}
      style={{ '--c': CATEGORIES[game.category].color } as CSSProperties}
      onClick={() => openGame(game.id)}
    >
      <span className={styles.badges}>
        {fav ? '❤️' : ''}
        {done ? '✅' : ''}
      </span>
      <span className={styles.e}>{game.emoji}</span>
      <b>{game.title}</b>
      <span className="meta">
        ab {game.minAge} J. · {game.minutes} Min.
      </span>
      <span className={styles.need}>
        {game.items.length ? (
          <>
            {items.map((i) => (
              <span key={i}>{i}</span>
            ))}
            {game.items.length > 3 && <span>+{game.items.length - 3}</span>}
          </>
        ) : (
          <span>nichts nötig</span>
        )}
      </span>
    </button>
  )
}
