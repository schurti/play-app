import { CATEGORY_IDS } from './categories'
import { GAMES, getGame } from './index'
import { TOOL_IDS } from '../tools/ids'
import type { Game } from './types'

const files = import.meta.glob<{ default: Game }>('./*/*.ts', { eager: true })
const gameFiles = Object.entries(files).filter(
  ([path]) => !path.endsWith('.test.ts'),
)

describe('Spiele', () => {
  it('hat 287 Spiele', () => {
    expect(GAMES).toHaveLength(287)
    expect(gameFiles).toHaveLength(287)
  })

  it('hat die erwarteten Anzahlen je Kategorie', () => {
    const counts = Object.fromEntries(
      CATEGORY_IDS.map((c) => [
        c,
        GAMES.filter((g) => g.category === c).length,
      ]),
    )
    expect(counts).toEqual({
      lernen: 56,
      malen: 25,
      papier: 34,
      bewegung: 34,
      basteln: 31,
      musik: 25,
      forschen: 28,
      ruhe: 27,
      rollen: 27,
    })
  })

  it('hat eindeutige IDs', () => {
    expect(new Set(GAMES.map((g) => g.id)).size).toBe(GAMES.length)
  })

  it('Dateipfad entspricht Kategorie und ID', () => {
    for (const [path, mod] of gameFiles) {
      expect(path).toBe(`./${mod.default.category}/${mod.default.id}.ts`)
    }
  })

  it('hat vollständige Pflichtfelder', () => {
    for (const g of GAMES) {
      expect(g.steps.length, g.id).toBeGreaterThanOrEqual(1)
      expect(g.minutes, g.id).toBeGreaterThan(0)
      expect(g.title.trim(), g.id).not.toBe('')
      expect(g.learn.trim(), g.id).not.toBe('')
    }
  })

  it('verwendet jedes Werkzeug mindestens einmal', () => {
    for (const tool of TOOL_IDS) {
      expect(
        GAMES.filter((g) => g.tool === tool),
        tool,
      ).not.toHaveLength(0)
    }
  })

  it('behält die Reihenfolge (Spiel des Tages)', () => {
    expect(GAMES[28].id).toBe('aufraeumzaehlen')
  })

  it('findet Spiele über getGame', () => {
    expect(getGame('farben')?.title).toBe('Farben-Jagd')
    expect(getGame('gibtsnicht')).toBeUndefined()
  })
})
