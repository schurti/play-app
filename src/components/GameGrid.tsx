import type { ReactNode } from 'react'
import type { Game } from '../games/types'
import { useProgressive } from '../hooks/useProgressive'
import GameCard from './GameCard'
import styles from './GameGrid.module.css'
import MoreButton from './MoreButton'

export default function GameGrid({
  games,
  empty,
  paged = true,
}: {
  games: readonly Game[]
  empty: ReactNode
  /** Lange Listen schrittweise anzeigen (aus, wenn der Aufrufer das schon tut) */
  paged?: boolean
}) {
  const p = useProgressive(games)
  const { shown, more, rest, showMore, sentinel } = paged
    ? p
    : { ...p, shown: games, more: false }
  return (
    <>
      <div className={styles.grid}>
        {games.length ? (
          shown.map((g) => <GameCard key={g.id} game={g} />)
        ) : (
          <div className={styles.empty}>{empty}</div>
        )}
      </div>
      {more && <MoreButton rest={rest} onMore={showMore} sentinel={sentinel} />}
    </>
  )
}
