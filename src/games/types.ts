import type { ToolId } from '../tools/ids'
import type { CategoryId } from './categories'
import type { Item } from './items'

export type Tag = 'allein' | 'gruppe' | 'leise'

/** Wo gespielt wird. Ohne Angabe: drinnen (bzw. draussen bei der Kategorie „Draussen“). */
export type Place = 'drinnen' | 'draussen' | 'beides'

export interface Game {
  id: string
  title: string
  emoji: string
  category: CategoryId
  minAge: 1 | 2 | 3 | 4 | 5 | 6
  /** Nur für Kleinkind-Spiele: ab diesem Alter zu einfach */
  maxAge?: number
  minutes: number
  items: Item[]
  tags: Tag[]
  place?: Exclude<Place, 'drinnen'>
  order: number
  steps: string[]
  learn: string
  variants?: string
  adultNote?: string
  tool?: ToolId
}

/** Identität, dient nur der Typprüfung. */
export function defineGame(game: Game): Game {
  return game
}

export function placeOf(g: Game): Place {
  return g.place ?? (g.category === 'draussen' ? 'draussen' : 'drinnen')
}

/** „ab 4 J.“ bzw. „1–4 J.“ bei Kleinkind-Spielen */
export function ageLabel(g: Game): string {
  return g.maxAge ? `${g.minAge}–${g.maxAge} J.` : `ab ${g.minAge} J.`
}
