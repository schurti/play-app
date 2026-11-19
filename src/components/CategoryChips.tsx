import type { CSSProperties, ReactNode } from 'react'
import { CATEGORIES, CATEGORY_IDS, catVars } from '../games/categories'
import { useFilters } from '../store/filters'
import Art from './Art'
import styles from './CategoryChips.module.css'

export default function CategoryChips() {
  const cat = useFilters((s) => s.cat)
  const set = useFilters((s) => s.set)
  const chip = (
    id: 'alle' | (typeof CATEGORY_IDS)[number],
    label: ReactNode,
    vars: CSSProperties,
  ) => (
    <button
      key={id}
      className={cat === id ? `${styles.chip} ${styles.on}` : styles.chip}
      style={vars}
      onClick={() => set({ cat: id })}
    >
      {label}
    </button>
  )
  return (
    <div className={styles.row}>
      {chip('alle', 'Alle', {
        '--c': 'var(--ink)',
        '--soft': 'var(--lavender)',
      } as CSSProperties)}
      {CATEGORY_IDS.map((id) =>
        chip(
          id,
          <>
            <Art
              emoji={CATEGORIES[id].emoji}
              size={22}
              className={styles.icon}
            />
            {CATEGORIES[id].name}
          </>,
          catVars(id),
        ),
      )}
    </div>
  )
}
