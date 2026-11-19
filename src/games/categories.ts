import type { CSSProperties } from 'react'

export type CategoryId =
  | 'lernen'
  | 'malen'
  | 'papier'
  | 'bewegung'
  | 'basteln'
  | 'musik'
  | 'forschen'
  | 'ruhe'
  | 'rollen'

export interface Category {
  name: string
  emoji: string
  /** Kräftige Akzentfarbe (Text, Knöpfe, Fortschritt). */
  color: string
  /** Pastellfläche (Kachel-Hintergründe). */
  soft: string
}

export const CATEGORIES: Record<CategoryId, Category> = {
  lernen: { name: 'Lernen', emoji: '🧠', color: '#4C6EF5', soft: '#E2E8FF' },
  malen: { name: 'Malen', emoji: '🎨', color: '#D9488F', soft: '#FCE0EC' },
  papier: {
    name: 'Stift & Papier',
    emoji: '✏️',
    color: '#13897F',
    soft: '#D3F1EC',
  },
  bewegung: {
    name: 'Bewegung',
    emoji: '🏃',
    color: '#2F9E5B',
    soft: '#DCF2D9',
  },
  basteln: { name: 'Basteln', emoji: '✂️', color: '#C47A00', soft: '#FDEBB5' },
  musik: { name: 'Musik', emoji: '🎵', color: '#8B5CF6', soft: '#EDE4FF' },
  forschen: {
    name: 'Forschen & Küche',
    emoji: '🔬',
    color: '#1F8FC4',
    soft: '#D6EEF9',
  },
  ruhe: { name: 'Ruhe', emoji: '🌙', color: '#5B6B8C', soft: '#E5E9F2' },
  rollen: {
    name: 'Rollenspiel',
    emoji: '🎭',
    color: '#E5583A',
    soft: '#FDDDD0',
  },
}

export const CATEGORY_IDS: readonly CategoryId[] = [
  'lernen',
  'malen',
  'papier',
  'bewegung',
  'basteln',
  'musik',
  'forschen',
  'ruhe',
  'rollen',
]

/** CSS-Variablen --c (Akzent) und --soft (Pastell) für eine Kategorie. */
export function catVars(id: CategoryId): CSSProperties {
  const c = CATEGORIES[id]
  return { '--c': c.color, '--soft': c.soft } as CSSProperties
}
