import { beforeEach, describe, expect, it } from 'vitest'
import { loadLegacy } from './legacy'
import { useProgress } from './progress'

const initialProgress = useProgress.getState()

beforeEach(() => {
  localStorage.clear()
  useProgress.setState(initialProgress, true)
  useProgress.getState().reset()
})

describe('useProgress', () => {
  it('kennt Favoriten und zuletzt angesehene Spiele', () => {
    expect(Object.keys(useProgress.getState()).sort()).toEqual([
      'addRecent',
      'fav',
      'recent',
      'reset',
      'toggleFav',
    ])
  })

  it('addRecent setzt das neueste nach vorne, ohne Doppelte, höchstens 12', () => {
    const { addRecent } = useProgress.getState()
    addRecent('a')
    addRecent('b')
    addRecent('a')
    expect(useProgress.getState().recent).toEqual(['a', 'b'])
    for (let i = 0; i < 20; i++) addRecent('x' + i)
    expect(useProgress.getState().recent).toHaveLength(12)
    expect(useProgress.getState().recent[0]).toBe('x19')
  })

  it('toggleFav schaltet um', () => {
    expect(useProgress.getState().toggleFav('kim')).toBe(true)
    expect(useProgress.getState().fav).toEqual({ kim: true })
    expect(useProgress.getState().toggleFav('kim')).toBe(false)
    expect(useProgress.getState().fav).toEqual({})
  })

  it('reset leert die Favoriten', () => {
    useProgress.getState().toggleFav('farben')
    useProgress.getState().reset()
    expect(useProgress.getState().fav).toEqual({})
  })

  it('speichert Favoriten und Verlauf unter play-app:progress (Version 3)', () => {
    useProgress.getState().toggleFav('farben')
    useProgress.getState().addRecent('kim')
    const raw = JSON.parse(localStorage.getItem('play-app:progress') ?? 'null')
    expect(raw.version).toBe(3)
    expect(raw.state).toEqual({ fav: { farben: true }, recent: ['kim'] })
  })
})

describe('loadLegacy', () => {
  const store = (data: Record<string, string>) => ({
    getItem: (k: string) => data[k] ?? null,
  })

  it('übernimmt aus hs2 nur die Favoriten', () => {
    const p = loadLegacy(
      store({
        hs2: '{"stars":7,"done":{"farben":2},"fav":{"kim":1},"hist":[]}',
      }),
    )
    expect(p).toEqual({ fav: { kim: true } })
  })

  it('ignoriert alte Sterne aus hs_stars', () => {
    expect(loadLegacy(store({ hs_stars: '4' }))).toBeNull()
  })

  it('gibt bei kaputtem JSON null zurück', () => {
    expect(loadLegacy(store({ hs2: '{kaputt' }))).toBeNull()
  })

  it('gibt ohne Daten null zurück', () => {
    expect(loadLegacy(store({}))).toBeNull()
  })

  it('gibt null zurück, wenn der Zugriff wirft', () => {
    expect(
      loadLegacy({
        getItem: () => {
          throw new Error('privat')
        },
      }),
    ).toBeNull()
  })
})
