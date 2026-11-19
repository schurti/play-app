import { CATEGORY_IDS } from './categories'
import type { Game } from './types'

const modules = import.meta.glob<{ default: Game }>(
  ['./*/*.ts', '!./*/*.test.ts'],
  {
    eager: true,
  },
)

export const GAMES: readonly Game[] = Object.values(modules)
  .map((m) => m.default)
  .sort(
    (a, b) =>
      CATEGORY_IDS.indexOf(a.category) - CATEGORY_IDS.indexOf(b.category) ||
      a.order - b.order,
  )

export function getGame(id: string): Game | undefined {
  return GAMES.find((g) => g.id === id)
}
