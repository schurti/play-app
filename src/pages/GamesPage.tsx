import { useState } from 'react'
import CategoryChips from '../components/CategoryChips'
import FilterPanel from '../components/FilterPanel'
import GameGrid from '../components/GameGrid'
import TodayCard from '../components/TodayCard'
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

  return (
    <>
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
          onClick={() => setPanelOpen((o) => !o)}
        >
          ⚙️ Filter{n ? ` (${n})` : ''}
        </button>
      </div>
      <CategoryChips />
      {panelOpen && <FilterPanel />}
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
    </>
  )
}
