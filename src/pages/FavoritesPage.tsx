import GameGrid from '../components/GameGrid'
import { getGame, GAMES } from '../games'
import type { Game } from '../games/types'
import { useProgress } from '../store/progress'
import styles from './FavoritesPage.module.css'

export default function FavoritesPage() {
  const fav = useProgress((s) => s.fav)
  const recentIds = useProgress((s) => s.recent)
  const games = GAMES.filter((g) => fav[g.id])
  const recent = recentIds
    .map((id) => getGame(id))
    .filter((g): g is Game => !!g)
    .slice(0, 6)
  return (
    <>
      <h3 className={`title ${styles.top}`}>❤️ Eure Lieblingsspiele</h3>
      <GameGrid
        games={games}
        empty={
          <>
            Noch keine Favoriten.
            <br />
            Tippt bei einem Spiel auf 🤍, um es hier zu speichern.
          </>
        }
      />
      {recent.length > 0 && (
        <>
          <h3 className="title">🕘 Zuletzt angesehen</h3>
          <GameGrid games={recent} empty={null} />
        </>
      )}
    </>
  )
}
