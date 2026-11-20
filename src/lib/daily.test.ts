import { GAMES } from '../games'
import type { Game } from '../games/types'
import { fitsSeason, gameOfTheDay, seasonOf } from './daily'

const game = (id: string, seasons?: Game['seasons']) =>
  ({ id, seasons }) as Game

describe('seasonOf', () => {
  it('nimmt die meteorologischen Jahreszeiten', () => {
    expect(seasonOf(new Date(2026, 1, 28))).toBe('winter')
    expect(seasonOf(new Date(2026, 2, 1))).toBe('fruehling')
    expect(seasonOf(new Date(2026, 5, 1))).toBe('sommer')
    expect(seasonOf(new Date(2026, 8, 1))).toBe('herbst')
    expect(seasonOf(new Date(2026, 11, 1))).toBe('winter')
  })
})

describe('gameOfTheDay', () => {
  const games = [
    game('a'),
    game('b'),
    game('schnee', ['winter']),
    game('laub', ['herbst']),
    game('glace', ['sommer']),
  ]

  it('wechselt täglich zwischen Jahreszeit und ganzjährig', () => {
    // 20.11.2026 ist Tag 20777 seit 1970 (ungerade) → ganzjährig, am 21. Herbst
    expect(['a', 'b']).toContain(gameOfTheDay(games, new Date(2026, 10, 20)).id)
    expect(gameOfTheDay(games, new Date(2026, 10, 21)).id).toBe('laub')
  })

  it('zeigt nie ein Spiel einer anderen Jahreszeit', () => {
    for (let d = 0; d < 400; d++) {
      const date = new Date(2026, 0, 1 + d)
      const g = gameOfTheDay(games, date)
      if (g.seasons)
        expect(g.seasons, date.toDateString()).toContain(seasonOf(date))
    }
  })

  it('ist an einem Tag stabil, unabhängig von der Uhrzeit', () => {
    const a = gameOfTheDay(GAMES, new Date(2026, 10, 19, 0, 1))
    expect(gameOfTheDay(GAMES, new Date(2026, 10, 19, 23, 59))).toBe(a)
  })

  it('hat für jede Jahreszeit genug passende Spiele', () => {
    for (const s of ['fruehling', 'sommer', 'herbst', 'winter'] as const) {
      expect(
        GAMES.filter((g) => fitsSeason(g, s)).length,
        s,
      ).toBeGreaterThanOrEqual(8)
    }
  })
})
