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
  party: {
    name: 'Party & Geburtstag',
    emoji: '🎉',
    color: '#C026D3',
    soft: '#F8E1FA',
  },
  malen: { name: 'Malen', emoji: '🎨', color: '#D9488F', soft: '#FCE0EC' },
  papier: {
    name: 'Stift & Papier',
    emoji: '✏️',
    color: '#13897F',
    soft: '#D3F1EC',
  },
  basteln: { name: 'Basteln', emoji: '✂️', color: '#C47A00', soft: '#FDEBB5' },
  musik: { name: 'Musik', emoji: '🎵', color: '#8B5CF6', soft: '#EDE4FF' },
  rollen: {
    name: 'Rollenspiel',
    emoji: '🎭',
    color: '#E5583A',
    soft: '#FDDDD0',
  },
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
  forschen: {
    name: 'Forschen',
    emoji: '🔬',
    color: '#1F8FC4',
    soft: '#D6EEF9',
  },
  karten: {
    name: 'Karten & Würfel',
    emoji: '🃏',
    color: '#B91C1C',
    soft: '#FBE2E2',
  },
  kochen: {
    name: 'Kochen & Backen',
    emoji: '🧁',
    color: '#C2410C',
    soft: '#FEE5D2',
  },
  haushalt: {
    name: 'Helfen im Haushalt',
    emoji: '🧺',
    color: '#A8546B',
    soft: '#F6E1E7',
  },
  unterwegs: {
    name: 'Unterwegs',
    emoji: '🚗',
    color: '#2F6F8F',
    soft: '#DCEBF2',
  },
  gefuehle: {
    name: 'Gefühle & Miteinander',
    emoji: '💛',
    color: '#B7791F',
    soft: '#FDF3C7',
  },
  ruhe: { name: 'Ruhe', emoji: '🌙', color: '#5B6B8C', soft: '#E5E9F2' },
}

export const CATEGORY_IDS = Object.keys(CATEGORIES) as readonly CategoryId[]

/** CSS-Variablen --c (Akzent) und --soft (Pastell) für eine Kategorie. */
export function catVars(id: CategoryId): CSSProperties {
  const c = CATEGORIES[id]
  return { '--c': c.color, '--soft': c.soft } as CSSProperties
}

export interface World {
  id: 'bewegen' | 'kreativ' | 'denken' | 'alltag'
  name: string
  emoji: string
  cats: readonly CategoryId[]
}

/** Themenwelten fassen die Kategorien für die Übersicht zusammen. */
export const WORLDS: readonly World[] = [
  {
    id: 'bewegen',
    name: 'Bewegen & Draussen',
    emoji: '🏃',
    cats: ['bewegung', 'draussen', 'wasser', 'party'],
  },
  {
    id: 'kreativ',
    name: 'Kreativ',
    emoji: '🖍️',
    cats: ['malen', 'papier', 'basteln', 'musik', 'rollen'],
  },
  {
    id: 'denken',
    name: 'Lernen & Denken',
    emoji: '💡',
    cats: ['lernen', 'sprache', 'knobeln', 'forschen', 'karten'],
  },
  {
    id: 'alltag',
    name: 'Alltag & Familie',
    emoji: '🏡',
    cats: ['kochen', 'haushalt', 'unterwegs', 'gefuehle', 'ruhe'],
  },
]

export function worldOf(id: CategoryId): World {
  return WORLDS.find((w) => w.cats.includes(id))!
}

export function isCategoryId(id: string | undefined): id is CategoryId {
  return !!id && Object.hasOwn(CATEGORIES, id)
}
