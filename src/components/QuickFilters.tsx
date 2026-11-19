import { QUICK, type Filters } from '../lib/filter'
import Art from './Art'
import styles from './QuickFilters.module.css'

export default function QuickFilters({
  filters,
  onChange,
}: {
  filters: Filters
  onChange(patch: Partial<Filters>): void
}) {
  return (
    <div className={styles.row} role="group" aria-label="Schnellfilter">
      {QUICK.map((q) => {
        const on = q.on(filters)
        return (
          <button
            key={q.id}
            className={on ? `${styles.chip} ${styles.on}` : styles.chip}
            aria-pressed={on}
            onClick={() => onChange(q.toggle(filters))}
          >
            <Art emoji={q.emoji} size={20} className={styles.icon} />
            {q.label}
          </button>
        )
      })}
    </div>
  )
}
