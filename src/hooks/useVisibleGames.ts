import { useMemo } from 'react'
import { GAMES } from '../games'
import type { Game } from '../games/types'
import { matchGame, type Filters } from '../lib/filter'
import { useFilters } from '../store/filters'

/** Filter-State ohne Store-Aktionen, Suchtext getrimmt wie im Original. */
export function useActiveFilters(): Filters {
  const cat = useFilters((s) => s.cat)
  const age = useFilters((s) => s.age)
  const dur = useFilters((s) => s.dur)
  const sit = useFilters((s) => s.sit)
  const have = useFilters((s) => s.have)
  const q = useFilters((s) => s.q)
  return useMemo(
    () => ({ cat, age, dur, sit, have, q: q.trim() }),
    [cat, age, dur, sit, have, q],
  )
}

export function useVisibleGames(): Game[] {
  const filters = useActiveFilters()
  return useMemo(() => GAMES.filter((g) => matchGame(g, filters)), [filters])
}
