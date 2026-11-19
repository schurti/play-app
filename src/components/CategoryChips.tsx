import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { CATEGORIES, CATEGORY_IDS, catVars } from '../games/categories'
import { useFilters } from '../store/filters'
import Art from './Art'
import styles from './CategoryChips.module.css'

export default function CategoryChips() {
  const cat = useFilters((s) => s.cat)
  const set = useFilters((s) => s.set)
  const rowRef = useRef<HTMLDivElement>(null)

  // Aktiven Chip sichtbar halten (z. B. nach einem Wisch über die Liste).
  useEffect(() => {
    const active = rowRef.current?.querySelector<HTMLElement>(
      '[aria-pressed="true"]',
    )
    active?.scrollIntoView?.({ inline: 'center', block: 'nearest' })
  }, [cat])
  const chip = (
    id: 'alle' | (typeof CATEGORY_IDS)[number],
    label: ReactNode,
    vars: CSSProperties,
  ) => (
    <button
      key={id}
      className={cat === id ? `${styles.chip} ${styles.on}` : styles.chip}
      aria-pressed={cat === id}
      style={vars}
      onClick={() => set({ cat: id })}
    >
      {label}
    </button>
  )
  return (
    <div className={styles.row} ref={rowRef}>
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
