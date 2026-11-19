import { CATEGORIES, type CategoryId } from '../games/categories'
import type { Item } from '../games/items'
import type { Game, Tag } from '../games/types'

export interface Filters {
  cat: 'alle' | CategoryId
  age: 0 | 1 | 2 | 3 | 4 | 5 | 6
  dur: 0 | 10 | 20 | 99
  sit: Partial<Record<Tag | 'ohne', true>>
  have: Partial<Record<Item, true>>
  q: string
}

export const EMPTY_FILTERS: Filters = {
  cat: 'alle',
  age: 0,
  dur: 0,
  sit: {},
  have: {},
  q: '',
}

export function activeFilterCount(f: Filters): number {
  return (
    (f.age ? 1 : 0) +
    (f.dur ? 1 : 0) +
    Object.keys(f.sit).length +
    Object.keys(f.have).length
  )
}

function searchText(g: Game): string {
  return [
    g.title,
    g.learn,
    g.items.join(' '),
    CATEGORIES[g.category].name,
    g.tags.includes('leise') ? 'leise ruhig' : '',
    g.tags.includes('gruppe') ? 'party gruppe' : '',
  ]
    .join(' ')
    .toLowerCase()
}

export function matchGame(g: Game, f: Filters): boolean {
  if (f.cat !== 'alle' && g.category !== f.cat) return false
  if (f.age && g.minAge > f.age) return false
  if (f.dur === 10 && g.minutes > 10) return false
  if (f.dur === 20 && g.minutes > 20) return false
  if (f.dur === 99 && g.minutes <= 20) return false
  for (const k of Object.keys(f.sit) as (Tag | 'ohne')[]) {
    if (k === 'ohne') {
      if (g.items.length) return false
    } else if (!g.tags.includes(k)) return false
  }
  if (Object.keys(f.have).length && !g.items.every((i) => f.have[i]))
    return false
  if (f.q && !searchText(g).includes(f.q.toLowerCase())) return false
  return true
}

/** Häufigste Gegenstände zuerst, bei Gleichstand alphabetisch. */
export function itemsByFrequency(games: readonly Game[]): Item[] {
  const n = new Map<Item, number>()
  for (const g of games) for (const i of g.items) n.set(i, (n.get(i) ?? 0) + 1)
  return [...n.keys()].sort(
    (a, b) => n.get(b)! - n.get(a)! || a.localeCompare(b),
  )
}
