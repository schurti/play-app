import { GAMES, getGame } from '../games'
import { normalize, searchScore, tokenize, withinOneEdit } from './search'

const g = (id: string) => getGame(id)!
const hits = (q: string) => GAMES.filter((x) => searchScore(x, q) > 0)

describe('normalize', () => {
  it('behandelt Umlaute und ihre Umschreibung gleich', () => {
    expect(normalize('Küche')).toBe(normalize('Kueche'))
    expect(normalize('Küche')).toBe(normalize('kuche'))
    expect(normalize('Strasse')).toBe(normalize('Straße'))
  })
  it('zerlegt in Wörter', () => {
    expect(tokenize('  Ballon, LEISE! ')).toEqual(['ballon', 'leise'])
  })
})

describe('withinOneEdit', () => {
  it('erkennt einen Tippfehler', () => {
    expect(withinOneEdit('balon', 'ballon')).toBe(true)
    expect(withinOneEdit('blalon', 'ballon')).toBe(true)
    expect(withinOneEdit('ballxn', 'ballon')).toBe(true)
    expect(withinOneEdit('bxllxn', 'ballon')).toBe(false)
  })
})

describe('searchScore', () => {
  it('leere Suche trifft alles', () => {
    expect(hits('')).toHaveLength(GAMES.length)
  })
  it('alle Wörter müssen passen', () => {
    const both = hits('ballon leise')
    expect(both.length).toBeGreaterThan(0)
    expect(both.length).toBeLessThan(hits('ballon').length)
  })
  it('findet Umlaut-Umschreibungen und Tippfehler', () => {
    expect(hits('wuerfel').length).toBe(hits('würfel').length)
    expect(hits('ballonn').length).toBeGreaterThan(0)
    expect(searchScore(g('ballonhoch'), 'ballom')).toBeGreaterThan(0)
  })
  it('kennt Synonyme', () => {
    expect(searchScore(g('ballonhoch'), 'luftballon')).toBeGreaterThan(0)
    expect(hits('regentag').length).toBeGreaterThan(100)
    expect(searchScore(g('nummernschild'), 'auto')).toBeGreaterThan(0)
  })
  it('sucht auch in Anleitung und Varianten, aber gewichtet den Titel höher', () => {
    const inSteps = GAMES.find(
      (x) =>
        !normalize(x.title).includes('zitrone') &&
        x.steps.some((s) => normalize(s).includes('zitrone')),
    )!
    expect(searchScore(inSteps, 'zitrone')).toBeGreaterThan(0)
    expect(searchScore(g('ballonhoch'), 'ballon')).toBeGreaterThan(
      searchScore(inSteps, 'zitrone'),
    )
  })
  it('kennt leise, Kleinkind und ohne Material', () => {
    expect(searchScore(g('kim'), 'leise')).toBeGreaterThan(0)
    expect(searchScore(g('kniereiter'), 'kleinkind')).toBeGreaterThan(0)
    expect(searchScore(g('farben'), 'ohne material')).toBeGreaterThan(0)
  })
})
