import { create } from 'zustand'
import type { Item } from '../games/items'
import type { Tag } from '../games/types'
import { EMPTY_FILTERS, type Filters } from '../lib/filter'

interface FilterActions {
  set(patch: Partial<Filters>): void
  toggleSit(k: Tag | 'ohne'): void
  toggleHave(i: Item): void
  resetFilters(): void
}

function toggled<K extends string>(rec: Partial<Record<K, true>>, k: K): Partial<Record<K, true>> {
  const next = { ...rec }
  if (next[k]) delete next[k]
  else next[k] = true
  return next
}

export const useFilters = create<Filters & FilterActions>()((set) => ({
  ...EMPTY_FILTERS,
  set: (patch) => set(patch),
  toggleSit: (k) => set((s) => ({ sit: toggled(s.sit, k) })),
  toggleHave: (i) => set((s) => ({ have: toggled(s.have, i) })),
  resetFilters: () => set({ ...EMPTY_FILTERS, sit: {}, have: {} }),
}))
