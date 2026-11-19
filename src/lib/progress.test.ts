import { GAMES, getGame } from '../games'
import { defineGame, type Game } from '../games/types'
import { badges, catProgress, stickerSet } from './progress'

const doneOf = (ids: string[]) => Object.fromEntries(ids.map((id) => [id, 1]))
const idsOf = (cat: Game['category']) =>
  GAMES.filter((x) => x.category === cat).map((x) => x.id)

const mk = (id: string): Game =>
  defineGame({
    id,
    title: id,
    emoji: '🎲',
    category: 'lernen',
    minAge: 3,
    minutes: 5,
    items: [],
    tags: [],
    order: 1,
    steps: [],
    learn: '',
  })

describe('badges', () => {
  it('liefert vier Abzeichen, das letzte mit total', () => {
    expect(badges(78)).toEqual([
      { min: 5, emoji: '🥉', name: 'Entdecker' },
      { min: 15, emoji: '🥈', name: 'Spiel-Profi' },
      { min: 30, emoji: '🥇', name: 'Spiel-Meister' },
      { min: 78, emoji: '🏆', name: 'Legende' },
    ])
  })
})

describe('catProgress', () => {
  it('zählt erledigte und alle Spiele der Kategorie', () => {
    const ids = idsOf('lernen')
    expect(catProgress(GAMES, doneOf(ids.slice(0, 2)), 'lernen')).toEqual({
      done: 2,
      all: ids.length,
    })
    expect(getGame(ids[0])).toBeDefined()
  })
})

describe('stickerSet', () => {
  it('3 Lernspiele -> lernen, nicht lernen*', () => {
    const s = stickerSet(GAMES, doneOf(idsOf('lernen').slice(0, 3)))
    expect(s).toContain('lernen')
    expect(s).not.toContain('lernen*')
  })
  it('alle Ruhe-Spiele -> ruhe und ruhe*', () => {
    const ids = idsOf('ruhe')
    expect(ids).toHaveLength(25)
    const s = stickerSet(GAMES, doneOf(ids))
    expect(s).toContain('ruhe')
    expect(s).toContain('ruhe*')
  })
  it('5 beliebige Spiele -> b5', () => {
    expect(
      stickerSet(GAMES, doneOf(GAMES.slice(0, 5).map((x) => x.id))),
    ).toContain('b5')
    expect(
      stickerSet(GAMES, doneOf(GAMES.slice(0, 4).map((x) => x.id))),
    ).not.toContain('b5')
  })
  it('kleine Fixture: Legende-Abzeichen entspricht der Spielzahl', () => {
    const games = ['a', 'b', 'c', 'd'].map(mk)
    expect(badges(games.length).at(-1)?.min).toBe(4)
    expect(stickerSet(games, doneOf(['a', 'b', 'c', 'd']))).toContain('b4')
  })
})
