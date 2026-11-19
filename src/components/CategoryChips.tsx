import type { CSSProperties } from 'react'
import { CATEGORIES, CATEGORY_IDS } from '../games/categories'
import { useFilters } from '../store/filters'
import styles from './CategoryChips.module.css'

export default function CategoryChips() {
  const cat = useFilters((s) => s.cat)
  const set = useFilters((s) => s.set)
  const chip = (
    id: 'alle' | (typeof CATEGORY_IDS)[number],
    label: string,
    color: string,
  ) => (
    <button
      key={id}
      className={cat === id ? `${styles.chip} ${styles.on}` : styles.chip}
      style={{ '--c': color } as CSSProperties}
      onClick={() => set({ cat: id })}
    >
      {label}
    </button>
  )
  return (
    <div className={styles.row}>
      {chip('alle', 'Alle', '#2b2a33')}
      {CATEGORY_IDS.map((id) =>
        chip(
          id,
          `${CATEGORIES[id].emoji} ${CATEGORIES[id].name}`,
          CATEGORIES[id].color,
        ),
      )}
    </div>
  )
}
