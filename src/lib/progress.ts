import { CATEGORY_IDS, type CategoryId } from '../games/categories'
import type { Game } from '../games/types'

export type StickerKey = CategoryId | `${CategoryId}*` | `b${number}`

export function badges(
  total: number,
): { min: number; emoji: string; name: string }[] {
  return [
    { min: 5, emoji: '🥉', name: 'Entdecker' },
    { min: 15, emoji: '🥈', name: 'Spiel-Profi' },
    { min: 30, emoji: '🥇', name: 'Spiel-Meister' },
    { min: total, emoji: '🏆', name: 'Legende' },
  ]
}

export function catProgress(
  games: readonly Game[],
  done: Record<string, number>,
  cat: CategoryId,
): { done: number; all: number } {
  const all = games.filter((g) => g.category === cat)
  return { done: all.filter((g) => done[g.id]).length, all: all.length }
}

export function stickerSet(
  games: readonly Game[],
  done: Record<string, number>,
): StickerKey[] {
  const keys: StickerKey[] = []
  for (const cat of CATEGORY_IDS) {
    const p = catProgress(games, done, cat)
    if (p.done >= 3) keys.push(cat)
    if (p.done === p.all) keys.push(`${cat}*`)
  }
  const distinct = Object.keys(done).length
  for (const b of badges(games.length))
    if (distinct >= b.min) keys.push(`b${b.min}`)
  return keys
}
