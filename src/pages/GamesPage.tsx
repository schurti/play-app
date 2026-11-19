import { useRef, useState } from 'react'
import CategoryChips from '../components/CategoryChips'
import FilterPanel from '../components/FilterPanel'
import GameGrid from '../components/GameGrid'
import TodayCard from '../components/TodayCard'
import { CATEGORY_IDS } from '../games/categories'
import { useTouchGestures } from '../hooks/useTouchGestures'
import { activeFilterCount } from '../lib/filter'
import { useActiveFilters, useVisibleGames } from '../hooks/useVisibleGames'
import { useFilters } from '../store/filters'
import styles from './GamesPage.module.css'

export default function GamesPage() {
  const [panelOpen, setPanelOpen] = useState(false)
  const q = useFilters((s) => s.q)
  const set = useFilters((s) => s.set)
  const filters = useActiveFilters()
  const visible = useVisibleGames()
  const n = activeFilterCount(filters)
  const plain = !n && !filters.q && filters.cat === 'alle'

  // Seitlich über die Liste wischen wechselt die Kategorie.
  const listRef = useRef<HTMLDivElement>(null)
  const order = ['alle', ...CATEGORY_IDS] as const
  const stepCategory = (delta: 1 | -1) => {
    const i = order.indexOf(filters.cat)
    const next = order[(i + delta + order.length) % order.length]
    set({ cat: next })
    window.scrollTo({ top: 0 })
  }
  useTouchGestures(listRef, {
    onSwipeLeft: () => stepCategory(1),
    onSwipeRight: () => stepCategory(-1),
  })

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.search}>
          <input
            type="search"
            placeholder="Suchen: Socken, Farben, leise …"
            autoComplete="off"
            value={q}
            onChange={(e) => set({ q: e.target.value })}
          />
          <button
            className={n > 0 ? `${styles.fbtn} ${styles.act}` : styles.fbtn}
            aria-expanded={panelOpen}
            onClick={() => {
              if (!panelOpen) window.scrollTo({ top: 0 })
              setPanelOpen((o) => !o)
            }}
          >
            ⚙️ Filter{n ? ` (${n})` : ''}
          </button>
        </div>
        <CategoryChips />
      </div>
      {panelOpen && <FilterPanel />}
      <div ref={listRef} data-testid="spiele-liste">
        {plain && <TodayCard />}
        <div className={styles.count}>
          {visible.length} {visible.length === 1 ? 'Spiel' : 'Spiele'}
        </div>
        <GameGrid
          games={visible}
          empty={
            <>
              😮 Keine Spiele passen.
              <br />
              Wählt mehr Dinge aus, die ihr habt, oder setzt die Filter zurück.
            </>
          }
        />
      </div>
    </>
  )
}
