import { CATEGORY_IDS } from './categories'
import { GAMES, getGame } from './index'
import { TOOL_IDS } from '../tools/ids'
import type { Game } from './types'

const files = import.meta.glob<{ default: Game }>('./*/*.ts', { eager: true })
const gameFiles = Object.entries(files).filter(
  ([path]) => !path.endsWith('.test.ts'),
)

describe('Spiele', () => {
  it('hat 483 Spiele', () => {
    expect(GAMES).toHaveLength(483)
    expect(gameFiles).toHaveLength(483)
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
      sprache: 19,
      knobeln: 14,
      malen: 28,
      papier: 32,
      bewegung: 45,
      draussen: 29,
      wasser: 15,
      basteln: 33,
      kochen: 18,
      musik: 27,
      forschen: 32,
      haushalt: 17,
      karten: 13,
      party: 13,
      gefuehle: 15,
      ruhe: 33,
      unterwegs: 16,
      rollen: 28,
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
    expect(GAMES[28].id).toBe('luftzahlen')
  })

  it('findet Spiele über getGame', () => {
    expect(getGame('farben')?.title).toBe('Farben-Jagd')
    expect(getGame('gibtsnicht')).toBeUndefined()
  })
})
