import type { ReactNode } from 'react'
import type { Game } from '../games/types'
import GameCard from './GameCard'
import styles from './GameGrid.module.css'

export default function GameGrid({
  games,
  empty,
}: {
  games: readonly Game[]
  empty: ReactNode
}) {
  return (
    <div className={styles.grid}>
      {games.length ? (
        games.map((g) => <GameCard key={g.id} game={g} />)
      ) : (
        <div className={styles.empty}>{empty}</div>
      )}
    </div>
  )
}
