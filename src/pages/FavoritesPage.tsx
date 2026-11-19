import GameGrid from '../components/GameGrid'
import { GAMES } from '../games'
import { useProgress } from '../store/progress'

export default function FavoritesPage() {
  const fav = useProgress((s) => s.fav)
  const games = GAMES.filter((g) => fav[g.id])
  return (
    <>
      <h3 style={{ margin: '16px 4px 8px', fontSize: 19 }}>❤️ Eure Lieblingsspiele</h3>
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
    </>
  )
}
