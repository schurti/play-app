import { ITEM_NAMES, type Item } from '../games/items'
import { placeOf, type Game } from '../games/types'
import { searchScore } from './search'

export type Age = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type Dur = 0 | 10 | 20 | 99
export type Sort = 'passend' | 'kurz' | 'az'

export interface Filters {
  q: string
  /** Alter des Kindes (0 = egal) */
  age: Age
  /** 10 / 20 = höchstens so viele Minuten, 99 = länger als 20 */
  dur: Dur
  who: '' | 'allein' | 'gruppe'
  place: '' | 'drinnen' | 'draussen'
  mood: '' | 'ruhig' | 'wild'
  /** Ohne Material und höchstens 10 Minuten */
  sofort: boolean
  /** Mit Werkzeug in der App (Würfel, Musik …) */
  app: boolean
  /** Nur Papier und Stifte */
  stift: boolean
  /** Nur Spiele, für die alle Sachen vorhanden sind */
  have: readonly Item[]
  sort: Sort
}

export const EMPTY_FILTERS: Filters = {
  q: '',
  age: 0,
  dur: 0,
  who: '',
  place: '',
  mood: '',
  sofort: false,
  app: false,
  stift: false,
  have: [],
  sort: 'passend',
}

const WILD_CATS = new Set(['bewegung', 'party', 'draussen'])

export const isWild = (g: Game) =>
  !g.tags.includes('leise') && WILD_CATS.has(g.category)

export function matchGame(g: Game, f: Filters): boolean {
  if (f.age && (g.minAge > f.age || (g.maxAge ?? 99) < f.age)) return false
  if (f.dur === 10 && g.minutes > 10) return false
  if (f.dur === 20 && g.minutes > 20) return false
  if (f.dur === 99 && g.minutes <= 20) return false
  if (f.who && !g.tags.includes(f.who)) return false
  if (f.place) {
    const p = placeOf(g)
    if (p !== 'beides' && p !== f.place) return false
  }
  if (f.mood === 'ruhig' && !g.tags.includes('leise')) return false
  if (f.mood === 'wild' && !isWild(g)) return false
  if (f.sofort && (g.items.length > 0 || g.minutes > 10)) return false
  if (f.app && !g.tool) return false
  if (
    f.stift &&
    (!g.items.length || g.items.some((i) => i !== 'Papier' && i !== 'Stifte'))
  )
    return false
  if (f.have.length && !g.items.every((i) => f.have.includes(i))) return false
  return true
}

/** Passende Spiele, nach Relevanz bzw. gewählter Sortierung. */
export function searchGames(games: readonly Game[], f: Filters): Game[] {
  const scored: { g: Game; s: number; i: number }[] = []
  games.forEach((g, i) => {
    if (!matchGame(g, f)) return
    const s = searchScore(g, f.q)
    if (s > 0) scored.push({ g, s, i })
  })
  const cmp =
    f.sort === 'kurz'
      ? (a: (typeof scored)[0], b: (typeof scored)[0]) =>
          a.g.minutes - b.g.minutes || a.i - b.i
      : f.sort === 'az'
        ? (a: (typeof scored)[0], b: (typeof scored)[0]) =>
            a.g.title.localeCompare(b.g.title, 'de')
        : (a: (typeof scored)[0], b: (typeof scored)[0]) =>
            b.s - a.s || a.i - b.i
  return scored.sort(cmp).map((x) => x.g)
}

export interface QuickFilter {
  id: string
  emoji: string
  label: string
  on(f: Filters): boolean
  toggle(f: Filters): Partial<Filters>
}

/** Schnellfilter: Abkürzungen auf die Felder der Filter. */
export const QUICK: readonly QuickFilter[] = [
  {
    id: 'sofort',
    emoji: '⚡',
    label: 'Sofort',
    on: (f) => f.sofort,
    toggle: (f) => ({ sofort: !f.sofort }),
  },
  {
    id: 'kurz',
    emoji: '⏱️',
    label: 'Bis 10 Min.',
    on: (f) => f.dur === 10,
    toggle: (f) => ({ dur: f.dur === 10 ? 0 : 10 }),
  },
  {
    id: 'ruhig',
    emoji: '🤫',
    label: 'Ruhig',
    on: (f) => f.mood === 'ruhig',
    toggle: (f) => ({ mood: f.mood === 'ruhig' ? '' : 'ruhig' }),
  },
  {
    id: 'wild',
    emoji: '🤸',
    label: 'Wild',
    on: (f) => f.mood === 'wild',
    toggle: (f) => ({ mood: f.mood === 'wild' ? '' : 'wild' }),
  },
  {
    id: 'drinnen',
    emoji: '🏠',
    label: 'Drinnen',
    on: (f) => f.place === 'drinnen',
    toggle: (f) => ({ place: f.place === 'drinnen' ? '' : 'drinnen' }),
  },
  {
    id: 'draussen',
    emoji: '🌳',
    label: 'Draussen',
    on: (f) => f.place === 'draussen',
    toggle: (f) => ({ place: f.place === 'draussen' ? '' : 'draussen' }),
  },
  {
    id: 'app',
    emoji: '📱',
    label: 'Mit App',
    on: (f) => f.app,
    toggle: (f) => ({ app: !f.app }),
  },
  {
    id: 'stift',
    emoji: '✏️',
    label: 'Stift & Papier',
    on: (f) => f.stift,
    toggle: (f) => ({ stift: !f.stift }),
  },
]

export const DUR_LABEL: Record<Exclude<Dur, 0>, string> = {
  10: 'Bis 10 Min.',
  20: 'Bis 20 Min.',
  99: 'Länger',
}

export interface ActiveFilter {
  key: string
  label: string
  /** Filter ohne diese Einschränkung */
  without: Filters
}

/** Alle aktiven Einschränkungen (ohne Suchtext und Sortierung) als entfernbare Pillen. */
export function activeFilters(f: Filters): ActiveFilter[] {
  const out: ActiveFilter[] = []
  const add = (key: string, label: string, patch: Partial<Filters>) =>
    out.push({ key, label, without: { ...f, ...patch } })
  if (f.age) add('age', `${f.age === 6 ? '6+' : f.age} J.`, { age: 0 })
  if (f.dur) add('dur', DUR_LABEL[f.dur], { dur: 0 })
  if (f.who)
    add('who', f.who === 'allein' ? 'Allein spielbar' : 'Für Gruppen', {
      who: '',
    })
  if (f.place)
    add('place', f.place === 'drinnen' ? 'Drinnen' : 'Draussen', { place: '' })
  if (f.mood) add('mood', f.mood === 'ruhig' ? 'Ruhig' : 'Wild', { mood: '' })
  if (f.sofort) add('sofort', 'Sofort', { sofort: false })
  if (f.app) add('app', 'Mit App', { app: false })
  if (f.stift) add('stift', 'Stift & Papier', { stift: false })
  for (const i of f.have)
    add('have:' + i, i, { have: f.have.filter((x) => x !== i) })
  return out
}

export function activeFilterCount(f: Filters): number {
  return activeFilters(f).length
}

/** Häufigste Gegenstände zuerst, bei Gleichstand alphabetisch. */
export function itemsByFrequency(games: readonly Game[]): Item[] {
  const n = new Map<Item, number>()
  for (const g of games) for (const i of g.items) n.set(i, (n.get(i) ?? 0) + 1)
  return [...n.keys()].sort(
    (a, b) => n.get(b)! - n.get(a)! || a.localeCompare(b),
  )
}

// --- URL ---------------------------------------------------------------

const AGES = new Set([1, 2, 3, 4, 5, 6])
const DURS = new Set([10, 20, 99])
const ITEMS = new Set<string>(ITEM_NAMES)

/** Liest die Filter aus der URL; ungültige Werte werden ignoriert. */
export function parseFilters(p: URLSearchParams): Filters {
  const num = (k: string) => Number(p.get(k))
  const one = <T extends string>(k: string, ok: readonly T[]): T | '' => {
    const v = p.get(k) as T | null
    return v && ok.includes(v) ? v : ''
  }
  const age = num('alter')
  const dur = num('dauer')
  return {
    q: p.get('q') ?? '',
    age: (AGES.has(age) ? age : 0) as Age,
    dur: (DURS.has(dur) ? dur : 0) as Dur,
    who: one('mit', ['allein', 'gruppe'] as const),
    place: one('ort', ['drinnen', 'draussen'] as const),
    mood: one('stimmung', ['ruhig', 'wild'] as const),
    sofort: p.get('sofort') === '1',
    app: p.get('app') === '1',
    stift: p.get('stift') === '1',
    have: (p.get('hab') ?? '')
      .split(',')
      .filter((i): i is Item => ITEMS.has(i)),
    sort: one('sort', ['kurz', 'az'] as const) || 'passend',
  }
}

/** Schreibt die Filter in die URL-Parameter (andere Parameter bleiben erhalten). */
export function writeFilters(
  f: Filters,
  base = new URLSearchParams(),
): URLSearchParams {
  const p = new URLSearchParams(base)
  for (const k of [
    'q',
    'alter',
    'dauer',
    'mit',
    'ort',
    'stimmung',
    'sofort',
    'app',
    'stift',
    'hab',
    'sort',
  ])
    p.delete(k)
  if (f.q) p.set('q', f.q)
  if (f.age) p.set('alter', String(f.age))
  if (f.dur) p.set('dauer', String(f.dur))
  if (f.who) p.set('mit', f.who)
  if (f.place) p.set('ort', f.place)
  if (f.mood) p.set('stimmung', f.mood)
  if (f.sofort) p.set('sofort', '1')
  if (f.app) p.set('app', '1')
  if (f.stift) p.set('stift', '1')
  if (f.have.length) p.set('hab', f.have.join(','))
  if (f.sort !== 'passend') p.set('sort', f.sort)
  return p
}
