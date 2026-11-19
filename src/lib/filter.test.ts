import { GAMES, getGame } from '../games'
import {
  EMPTY_FILTERS,
  activeFilterCount,
  itemsByFrequency,
  matchGame,
  type Filters,
} from './filter'

const g = (id: string) => {
  const game = getGame(id)
  if (!game) throw new Error(`Spiel fehlt: ${id}`)
  return game
}
const f = (patch: Partial<Filters>): Filters => ({ ...EMPTY_FILTERS, ...patch })

describe('itemsByFrequency', () => {
  it('liefert alle 59 Gegenstände, häufigste zuerst', () => {
    const items = itemsByFrequency(GAMES)
    expect(items).toHaveLength(59)
    expect(items.slice(0, 6)).toEqual([
      'Papier',
      'Stifte',
      'Klebeband',
      'Karton',
      'Wasser',
      'Farbe',
    ])
  })
})

describe('activeFilterCount', () => {
  it('zählt age, dur, sit und have, nicht cat und q', () => {
    expect(activeFilterCount(EMPTY_FILTERS)).toBe(0)
    expect(activeFilterCount(f({ cat: 'ruhe', q: 'x' }))).toBe(0)
    expect(
      activeFilterCount(
        f({
          age: 4,
          dur: 10,
          sit: { leise: true, ohne: true },
          have: { Papier: true },
        }),
      ),
    ).toBe(5)
  })
})

describe('matchGame', () => {
  it('leerer Filter trifft alles', () => {
    expect(GAMES.every((x) => matchGame(x, EMPTY_FILTERS))).toBe(true)
  })
  it('Kategorie', () => {
    const ruhe = GAMES.filter((x) => matchGame(x, f({ cat: 'ruhe' })))
    expect(ruhe).toHaveLength(25)
  })
  it('Suche: leise und party', () => {
    expect(matchGame(g('kim'), f({ q: 'leise' }))).toBe(true)
    expect(matchGame(g('reime'), f({ q: 'party' }))).toBe(true)
  })
  it('Alter', () => {
    expect(matchGame(g('buchstabe'), f({ age: 3 }))).toBe(false)
  })
  it('Dauer', () => {
    expect(matchGame(g('collage'), f({ dur: 10 }))).toBe(false)
    expect(matchGame(g('karton'), f({ dur: 99 }))).toBe(true)
    expect(matchGame(g('farben'), f({ dur: 99 }))).toBe(false)
  })
  it('Situation ohne Material', () => {
    expect(matchGame(g('farben'), f({ sit: { ohne: true } }))).toBe(true)
    expect(matchGame(g('kim'), f({ sit: { ohne: true } }))).toBe(false)
    expect(
      GAMES.filter((x) => matchGame(x, f({ sit: { ohne: true } }))),
    ).toHaveLength(59)
  })
  it('Vorhandenes: alle Gegenstände müssen gewählt sein', () => {
    const have = f({ have: { Papier: true, Stifte: true } })
    expect(matchGame(g('faltmonster'), have)).toBe(true)
    expect(matchGame(g('collage'), have)).toBe(false)
  })
})
