import { CATEGORIES, type CategoryId } from '../games/categories'
import { badges, type StickerKey } from './progress'

/** Toast-Text für einen neu erreichten Sticker oder ein Abzeichen. */
export function rewardMessage(key: StickerKey, total: number): string {
  if (/^b\d+$/.test(key)) {
    const min = Number(key.slice(1))
    const b = badges(total).find((x) => x.min === min)
    if (b) return `🎖️ Neues Abzeichen: ${b.emoji} ${b.name}!`
    return '⭐ Super gemacht! +1 Stern'
  }
  const golden = key.endsWith('*')
  const cat = CATEGORIES[key.replace('*', '') as CategoryId]
  return `${golden ? '✨ Goldener Sticker: ' : '🏆 Neuer Sticker: '}${cat.emoji} ${cat.name}!`
}
