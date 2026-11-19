import { Link } from 'react-router'
import { CATEGORIES, catVars, type CategoryId } from '../games/categories'
import Art from './Art'
import styles from './CategoryTile.module.css'

export default function CategoryTile({
  id,
  count,
}: {
  id: CategoryId
  count: number
}) {
  const c = CATEGORIES[id]
  return (
    <Link to={'/k/' + id} className={styles.tile} style={catVars(id)}>
      <Art emoji={c.emoji} size={46} className={styles.icon} />
      <span className={styles.name}>{c.name}</span>
      <span className={styles.count}>{count} Spiele</span>
    </Link>
  )
}
