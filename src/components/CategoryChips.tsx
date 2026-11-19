import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import {
  CATEGORIES,
  catVars,
  worldOf,
  type CategoryId,
} from '../games/categories'
import Art from './Art'
import styles from './CategoryChips.module.css'

/** Die Kategorien derselben Themenwelt als Chips (aktive hervorgehoben). */
export default function CategoryChips({ current }: { current: CategoryId }) {
  const rowRef = useRef<HTMLDivElement>(null)
  const world = worldOf(current)

  // Aktiven Chip sichtbar halten (z. B. nach einem Wisch über die Liste).
  useEffect(() => {
    rowRef.current
      ?.querySelector<HTMLElement>('[aria-current="page"]')
      ?.scrollIntoView?.({ inline: 'center', block: 'nearest' })
  }, [current])

  return (
    <div className={styles.row} ref={rowRef}>
      {world.cats.map((id) => (
        <Link
          key={id}
          to={'/k/' + id}
          replace
          aria-current={id === current ? 'page' : undefined}
          className={
            id === current ? `${styles.chip} ${styles.on}` : styles.chip
          }
          style={catVars(id)}
        >
          <Art emoji={CATEGORIES[id].emoji} size={22} className={styles.icon} />
          {CATEGORIES[id].name}
        </Link>
      ))}
    </div>
  )
}
