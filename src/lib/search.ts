import { CATEGORIES, worldOf } from '../games/categories'
import { placeOf, type Game } from '../games/types'

/**
 * Vereinheitlicht Text für die Suche: klein, ohne Akzente, Umlaute und
 * ihre Umschreibung (ü / ue) werden gleich behandelt, ß = ss.
 */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ae/g, 'a')
    .replace(/oe/g, 'o')
    .replace(/ue/g, 'u')
}

export function tokenize(q: string): string[] {
  return normalize(q)
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 0)
}

/** Wenige, gezielte Synonyme (normalisiert): Suchwort → zusätzliche Treffer. */
const SYNONYMS: Record<string, string[]> = {
  luftballon: ['ballon'],
  ballone: ['ballon'],
  ballons: ['ballon'],
  buntstift: ['stift'],
  farbstift: ['stift'],
  filzstift: ['stift'],
  malstift: ['stift'],
  bleistift: ['stift'],
  schreiben: ['stift'],
  regen: ['drinnen'],
  regentag: ['drinnen'],
  regenwetter: ['drinnen'],
  garten: ['draussen'],
  park: ['draussen'],
  wald: ['draussen'],
  sommer: ['draussen', 'wasser'],
  auto: ['unterwegs'],
  autofahrt: ['unterwegs'],
  reise: ['unterwegs'],
  zug: ['unterwegs'],
  baby: ['kleinkind'],
  geburtstag: ['party'],
  kindergeburtstag: ['party'],
  fest: ['party'],
  ruhig: ['leise'],
  karten: ['spielkarten'],
  rechnen: ['zahlen', 'rechnen'],
  lesen: ['buchstaben', 'lesen'],
  backen: ['backen', 'kochen'],
  turnen: ['bewegung'],
  sport: ['bewegung'],
}

interface Field {
  text: string
  words: string[]
  weight: number
}

const WEIGHT = { title: 10, meta: 5, items: 4, learn: 2, text: 1 } as const

function field(text: string, weight: number): Field {
  const n = normalize(text)
  return { text: n, words: n.split(/[^a-z0-9]+/).filter(Boolean), weight }
}

const cache = new WeakMap<Game, Field[]>()

function fieldsOf(g: Game): Field[] {
  let f = cache.get(g)
  if (f) return f
  const place = placeOf(g)
  const meta = [
    CATEGORIES[g.category].name,
    worldOf(g.category).name,
    g.tags.includes('leise') ? 'leise ruhig' : '',
    g.tags.includes('gruppe') ? 'gruppe party mehrere' : '',
    g.tags.includes('allein') ? 'allein' : '',
    place === 'beides' ? 'drinnen draussen' : place,
    g.minAge <= 2 ? 'kleinkind kleinste' : '',
    g.tool ? 'app' : '',
    g.items.length ? '' : 'ohne material',
  ].join(' ')
  f = [
    field(g.title, WEIGHT.title),
    field(meta, WEIGHT.meta),
    field(g.items.join(' '), WEIGHT.items),
    field(g.learn, WEIGHT.learn),
    field(
      [...g.steps, g.variants ?? '', g.adultNote ?? ''].join(' '),
      WEIGHT.text,
    ),
  ]
  cache.set(g, f)
  return f
}

/** Höchstens eine Änderung (Einfügen, Löschen, Ersetzen, Vertauschen)? */
export function withinOneEdit(a: string, b: string): boolean {
  if (a === b) return true
  const la = a.length
  const lb = b.length
  if (Math.abs(la - lb) > 1) return false
  let i = 0
  while (i < la && i < lb && a[i] === b[i]) i++
  if (la === lb) {
    // Ersetzen oder zwei benachbarte Zeichen vertauscht
    if (a.slice(i + 1) === b.slice(i + 1)) return true
    return (
      a[i] === b[i + 1] &&
      a[i + 1] === b[i] &&
      a.slice(i + 2) === b.slice(i + 2)
    )
  }
  return la > lb ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1)
}

function tokenScore(fields: Field[], t: string): number {
  const alts = [t, ...(SYNONYMS[t] ?? [])]
  let best = 0
  for (const f of fields) {
    for (const a of alts) {
      if (!f.text.includes(a)) continue
      // Wortanfang zählt mehr als ein Treffer mitten im Wort
      const start = f.words.some((w) => w.startsWith(a))
      best = Math.max(best, f.weight * (start ? 1.2 : 1))
    }
  }
  if (best || t.length < 5) return best
  // Tippfehler-tolerant, nur bei längeren Wörtern und wichtigen Feldern
  for (const f of fields) {
    if (f.weight < WEIGHT.items) continue
    for (const w of f.words) {
      if (
        withinOneEdit(t, w) ||
        (w.length > t.length && withinOneEdit(t, w.slice(0, t.length)))
      ) {
        best = Math.max(best, f.weight * 0.5)
      }
    }
  }
  return best
}

/** Relevanz eines Spiels für die Suchanfrage; 0 = passt nicht. Alle Wörter müssen passen. */
export function searchScore(g: Game, q: string): number {
  const tokens = tokenize(q)
  if (!tokens.length) return 1
  const fields = fieldsOf(g)
  let sum = 0
  for (const t of tokens) {
    const s = tokenScore(fields, t)
    if (!s) return 0
    sum += s
  }
  return sum
}
