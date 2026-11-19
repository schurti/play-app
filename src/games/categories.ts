import type { CSSProperties } from 'react'

export type CategoryId =
  | 'lernen'
  | 'sprache'
  | 'knobeln'
  | 'malen'
  | 'papier'
  | 'bewegung'
  | 'draussen'
  | 'wasser'
  | 'basteln'
  | 'kochen'
  | 'musik'
  | 'forschen'
  | 'haushalt'
  | 'karten'
  | 'party'
  | 'gefuehle'
  | 'ruhe'
  | 'unterwegs'
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
  sprache: {
    name: 'Sprache & Erzählen',
    emoji: '💬',
    color: '#A0522D',
    soft: '#F7E4D8',
  },
  knobeln: {
    name: 'Knobeln & Denken',
    emoji: '🧩',
    color: '#8E3F9E',
    soft: '#F1E2F4',
  },
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
  draussen: {
    name: 'Draussen',
    emoji: '🌳',
    color: '#5F7F1F',
    soft: '#E8F1D4',
  },
  wasser: {
    name: 'Wasser & Baden',
    emoji: '🛁',
    color: '#0E7490',
    soft: '#D2F1F7',
  },
  basteln: { name: 'Basteln', emoji: '✂️', color: '#C47A00', soft: '#FDEBB5' },
  kochen: {
    name: 'Kochen & Backen',
    emoji: '🧁',
    color: '#C2410C',
    soft: '#FEE5D2',
  },
  musik: { name: 'Musik', emoji: '🎵', color: '#8B5CF6', soft: '#EDE4FF' },
  forschen: {
    name: 'Forschen',
    emoji: '🔬',
    color: '#1F8FC4',
    soft: '#D6EEF9',
  },
  haushalt: {
    name: 'Helfen im Haushalt',
    emoji: '🧺',
    color: '#A8546B',
    soft: '#F6E1E7',
  },
  karten: {
    name: 'Karten & Würfel',
    emoji: '🃏',
    color: '#B91C1C',
    soft: '#FBE2E2',
  },
  party: {
    name: 'Party & Geburtstag',
    emoji: '🎉',
    color: '#C026D3',
    soft: '#F8E1FA',
  },
  gefuehle: {
    name: 'Gefühle & Miteinander',
    emoji: '💛',
    color: '#B7791F',
    soft: '#FDF3C7',
  },
  ruhe: { name: 'Ruhe', emoji: '🌙', color: '#5B6B8C', soft: '#E5E9F2' },
  unterwegs: {
    name: 'Unterwegs',
    emoji: '🚗',
    color: '#2F6F8F',
    soft: '#DCEBF2',
  },
  rollen: {
    name: 'Rollenspiel',
    emoji: '🎭',
    color: '#E5583A',
    soft: '#FDDDD0',
  },
}

export const CATEGORY_IDS = Object.keys(CATEGORIES) as readonly CategoryId[]

/** CSS-Variablen --c (Akzent) und --soft (Pastell) für eine Kategorie. */
export function catVars(id: CategoryId): CSSProperties {
  const c = CATEGORIES[id]
  return { '--c': c.color, '--soft': c.soft } as CSSProperties
}
