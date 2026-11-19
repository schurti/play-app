import { useRef } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router'
import Art from '../components/Art'
import CategoryChips from '../components/CategoryChips'
import GameGrid from '../components/GameGrid'
import Scene from '../components/Scene'
import { GAMES } from '../games'
import { CATEGORIES, catVars, isCategoryId, worldOf } from '../games/categories'
import { useTouchGestures } from '../hooks/useTouchGestures'
import styles from './CategoryPage.module.css'
import page from './pages.module.css'

export default function CategoryPage() {
  const { cat } = useParams()
  const navigate = useNavigate()
  const listRef = useRef<HTMLDivElement>(null)

  // Seitlich über die Liste wischen: nächste Kategorie derselben Welt.
  const step = (delta: 1 | -1) => {
    if (!isCategoryId(cat)) return
    const cats = worldOf(cat).cats
    const i = cats.indexOf(cat)
    const next = cats[(i + delta + cats.length) % cats.length]
    navigate('/k/' + next, { replace: true })
  }
  useTouchGestures(listRef, {
    onSwipeLeft: () => step(1),
    onSwipeRight: () => step(-1),
  })

  if (!isCategoryId(cat)) return <Navigate to="/" replace />
  const c = CATEGORIES[cat]
  const world = worldOf(cat)
  const games = GAMES.filter((g) => g.category === cat)

  return (
    <>
      <div className={`${page.bar} ${styles.bar}`}>
        <Link to="/" className={styles.back} aria-label="Zurück zu Entdecken">
          ‹
        </Link>
        <CategoryChips current={cat} />
      </div>
      <div ref={listRef} data-testid="spiele-liste">
        <header className={styles.head} style={catVars(cat)}>
          <Scene category={cat} className={styles.scene} />
          <Art emoji={c.emoji} size={72} className={styles.icon} />
          <div className={styles.text}>
            <small>
              {world.emoji} {world.name}
            </small>
            <h2>{c.name}</h2>
            <span className="meta">{games.length} Spiele</span>
          </div>
        </header>
        <GameGrid games={games} empty="Noch keine Spiele." />
      </div>
    </>
  )
}
