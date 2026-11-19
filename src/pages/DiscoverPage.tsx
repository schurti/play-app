import { Link } from 'react-router'
import Art from '../components/Art'
import CategoryTile from '../components/CategoryTile'
import TodayCard from '../components/TodayCard'
import { GAMES } from '../games'
import { WORLDS, type CategoryId } from '../games/categories'
import styles from './pages.module.css'

const COUNT = new Map<CategoryId, number>()
for (const g of GAMES) COUNT.set(g.category, (COUNT.get(g.category) ?? 0) + 1)

export default function DiscoverPage() {
  return (
    <>
      <div className={styles.bar}>
        <Link to="/suche" state={{ focus: true }} className={styles.fakeSearch}>
          <Art emoji="🔍" size={20} />
          Spiel suchen …
        </Link>
      </div>
      <TodayCard />
      <Link to="/zufall" className={styles.wish}>
        <Art emoji="🪄" size={40} />
        <span>
          <b>Keine Idee?</b>
          <span className="meta">
            Drei Fragen – und ihr bekommt ein passendes Spiel.
          </span>
        </span>
        <span className={styles.arrow} aria-hidden="true">
          ›
        </span>
      </Link>
      {WORLDS.map((w) => (
        <section key={w.id} aria-labelledby={'welt-' + w.id}>
          <h2 id={'welt-' + w.id} className={styles.world}>
            <Art emoji={w.emoji} size={26} />
            {w.name}
          </h2>
          <div className={styles.tiles}>
            {w.cats.map((id) => (
              <CategoryTile key={id} id={id} count={COUNT.get(id) ?? 0} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
