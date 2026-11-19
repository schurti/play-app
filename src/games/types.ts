import type { ToolId } from '../tools/ids'
import type { CategoryId } from './categories'
import type { Item } from './items'

export type Tag = 'allein' | 'gruppe' | 'leise'

export interface Game {
  id: string
  title: string
  emoji: string
  category: CategoryId
  minAge: 3 | 4 | 5 | 6
  minutes: number
  items: Item[]
  tags: Tag[]
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
