import { GAMES, getGame } from '../games'
import {
  EMPTY_FILTERS,
  QUICK,
  activeFilterCount,
  activeFilters,
  itemsByFrequency,
  matchGame,
  parseFilters,
  searchGames,
  writeFilters,
  type Filters,
} from './filter'

const g = (id: string) => {
  const game = getGame(id)
  if (!game) throw new Error(`Spiel fehlt: ${id}`)
  return game
}
const f = (patch: Partial<Filters>): Filters => ({ ...EMPTY_FILTERS, ...patch })
const count = (patch: Partial<Filters>) =>
  GAMES.filter((x) => matchGame(x, f(patch))).length

describe('itemsByFrequency', () => {
  it('liefert alle 80 Gegenstände, häufigste zuerst', () => {
    const items = itemsByFrequency(GAMES)
    expect(items).toHaveLength(80)
    expect(items.slice(0, 6)).toEqual([
      'Papier',
      'Stifte',
      'Klebeband',
      'Wasser',
      'Karton',
      'Becher',
    ])
  })
})

describe('matchGame', () => {
  it('leerer Filter trifft alles', () => {
    expect(GAMES.every((x) => matchGame(x, EMPTY_FILTERS))).toBe(true)
  })
  it('Alter mit Höchstalter für Kleinkind-Spiele', () => {
    expect(matchGame(g('buchstabe'), f({ age: 3 }))).toBe(false)
    expect(matchGame(g('kniereiter'), f({ age: 1 }))).toBe(true)
    expect(matchGame(g('kniereiter'), f({ age: 4 }))).toBe(true)
    expect(matchGame(g('kniereiter'), f({ age: 5 }))).toBe(false)
    expect(matchGame(g('farben'), f({ age: 1 }))).toBe(false)
    expect(count({ age: 2 })).toBe(32)
    expect(count({ age: 6 })).toBe(GAMES.length - 27)
  })
  it('Dauer', () => {
    expect(matchGame(g('collage'), f({ dur: 10 }))).toBe(false)
    expect(matchGame(g('karton'), f({ dur: 99 }))).toBe(true)
    expect(matchGame(g('farben'), f({ dur: 99 }))).toBe(false)
  })
  it('Mitspieler', () => {
    expect(count({ who: 'allein' })).toBe(277)
    expect(count({ who: 'gruppe' })).toBe(236)
  })
  it('Ort: „beides“ zählt für drinnen und draussen', () => {
    expect(matchGame(g('stabfangen'), f({ place: 'drinnen' }))).toBe(true)
    expect(matchGame(g('stabfangen'), f({ place: 'draussen' }))).toBe(true)
    expect(matchGame(g('kim'), f({ place: 'draussen' }))).toBe(false)
    expect(matchGame(g('schattenuhr'), f({ place: 'drinnen' }))).toBe(false)
    const draussen = GAMES.filter((x) => matchGame(x, f({ place: 'draussen' })))
    expect(draussen.every((x) => x.category === 'draussen' || x.place)).toBe(
      true,
    )
  })
  it('Stimmung ruhig / wild', () => {
    expect(count({ mood: 'ruhig' })).toBe(160)
    expect(matchGame(g('lava'), f({ mood: 'wild' }))).toBe(true)
    expect(matchGame(g('kim'), f({ mood: 'wild' }))).toBe(false)
  })
  it('Sofort: ohne Material und höchstens 10 Minuten', () => {
    expect(matchGame(g('farben'), f({ sofort: true }))).toBe(true)
    expect(matchGame(g('kim'), f({ sofort: true }))).toBe(false)
    expect(count({ sofort: true })).toBe(91)
  })
  it('Mit App und Stift & Papier', () => {
    expect(count({ app: true })).toBe(GAMES.filter((x) => x.tool).length)
    expect(count({ stift: true })).toBe(73)
    expect(matchGame(g('farben'), f({ stift: true }))).toBe(false)
  })
  it('Vorhandenes: alle Gegenstände müssen gewählt sein', () => {
    const have = f({ have: ['Papier', 'Stifte'] })
    expect(matchGame(g('faltmonster'), have)).toBe(true)
    expect(matchGame(g('collage'), have)).toBe(false)
  })
})

describe('searchGames', () => {
  it('sortiert nach Relevanz: Titeltreffer zuerst', () => {
    const hits = searchGames(GAMES, f({ q: 'ballon' }))
    expect(hits[0].title.toLowerCase()).toContain('ballon')
    expect(hits.length).toBeGreaterThan(5)
  })
  it('sortiert nach Dauer oder Titel', () => {
    const kurz = searchGames(GAMES, f({ sort: 'kurz' }))
    expect(kurz[0].minutes).toBeLessThanOrEqual(kurz.at(-1)!.minutes)
    const az = searchGames(GAMES, f({ sort: 'az' }))
    expect(az[0].title.localeCompare(az[1].title, 'de')).toBeLessThanOrEqual(0)
  })
  it('kombiniert Suche und Filter', () => {
    const hits = searchGames(GAMES, f({ q: 'ballon', mood: 'ruhig' }))
    expect(hits.every((x) => x.tags.includes('leise'))).toBe(true)
  })
})

describe('Schnellfilter', () => {
  it('schalten ihr Feld ein und wieder aus', () => {
    for (const q of QUICK) {
      const on = f(q.toggle(EMPTY_FILTERS))
      expect(q.on(on), q.id).toBe(true)
      expect(q.on(f(q.toggle(on))), q.id).toBe(false)
    }
  })
  it('Ruhig und Wild schliessen sich aus', () => {
    const ruhig = QUICK.find((q) => q.id === 'ruhig')!
    const wild = QUICK.find((q) => q.id === 'wild')!
    const both = f({ ...ruhig.toggle(EMPTY_FILTERS) })
    const next = f({ ...both, ...wild.toggle(both) })
    expect(ruhig.on(next)).toBe(false)
    expect(wild.on(next)).toBe(true)
  })
})

describe('activeFilters', () => {
  it('zählt alle Einschränkungen, nicht Suchtext und Sortierung', () => {
    expect(activeFilterCount(EMPTY_FILTERS)).toBe(0)
    expect(activeFilterCount(f({ q: 'x', sort: 'az' }))).toBe(0)
    expect(
      activeFilterCount(
        f({
          age: 4,
          dur: 10,
          who: 'allein',
          place: 'drinnen',
          mood: 'ruhig',
          sofort: true,
          app: true,
          stift: true,
          have: ['Papier', 'Stifte'],
        }),
      ),
    ).toBe(10)
  })
  it('liefert Pillen, die genau ihren Filter entfernen', () => {
    const a = activeFilters(f({ age: 4, have: ['Papier', 'Ball'] }))
    expect(a.map((x) => x.label)).toEqual(['4 J.', 'Papier', 'Ball'])
    expect(a[0].without.age).toBe(0)
    expect(a[0].without.have).toEqual(['Papier', 'Ball'])
    expect(a[1].without.have).toEqual(['Ball'])
  })
})

describe('URL', () => {
  it('schreibt und liest alle Filter verlustfrei', () => {
    const full = f({
      q: 'ball',
      age: 3,
      dur: 20,
      who: 'gruppe',
      place: 'draussen',
      mood: 'wild',
      sofort: true,
      app: true,
      stift: true,
      have: ['Papier', 'Essig & Natron'],
      sort: 'kurz',
    })
    const p = writeFilters(full)
    expect(parseFilters(new URLSearchParams(p.toString()))).toEqual(full)
  })
  it('lässt andere Parameter stehen und schreibt Standardwerte nicht', () => {
    const p = writeFilters(EMPTY_FILTERS, new URLSearchParams('spiel=kim&q=x'))
    expect(p.toString()).toBe('spiel=kim')
  })
  it('ignoriert ungültige Werte', () => {
    expect(
      parseFilters(
        new URLSearchParams(
          'alter=9&dauer=7&mit=x&ort=mond&hab=Papier,Gold&sort=?',
        ),
      ),
    ).toEqual(f({ have: ['Papier'] }))
  })
})
