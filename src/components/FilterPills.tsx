import { activeFilters, EMPTY_FILTERS, type Filters } from '../lib/filter'
import styles from './FilterPills.module.css'

/** Aktive Filter als Pillen zum Entfernen, plus „Alle zurücksetzen“. */
export default function FilterPills({
  filters,
  onChange,
}: {
  filters: Filters
  onChange(next: Filters): void
}) {
  const active = activeFilters(filters)
  if (!active.length) return null
  return (
    <div className={styles.row} aria-label="Aktive Filter">
      {active.map((a) => (
        <button
          key={a.key}
          className={styles.pill}
          onClick={() => onChange(a.without)}
          aria-label={`Filter ${a.label} entfernen`}
        >
          {a.label} <span aria-hidden="true">✕</span>
        </button>
      ))}
      {active.length > 1 && (
        <button
          className={styles.reset}
          onClick={() =>
            onChange({ ...EMPTY_FILTERS, q: filters.q, sort: filters.sort })
          }
        >
          Alle zurücksetzen
        </button>
      )}
    </div>
  )
}
