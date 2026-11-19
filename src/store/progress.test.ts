import { beforeEach, describe, expect, it } from 'vitest'
import { loadLegacy } from './legacy'
import { useProgress } from './progress'
import { useFilters } from './filters'

const initialProgress = useProgress.getState()
const initialFilters = useFilters.getState()

beforeEach(() => {
  localStorage.clear()
  useProgress.setState(initialProgress, true)
  useProgress.getState().reset()
  useFilters.setState(initialFilters, true)
})

describe('useProgress', () => {
  it('kennt nur noch Favoriten', () => {
    expect(Object.keys(useProgress.getState()).sort()).toEqual([
      'fav',
      'reset',
      'toggleFav',
    ])
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

  it('speichert nur Favoriten unter play-app:progress (Version 2)', () => {
    useProgress.getState().toggleFav('farben')
    const raw = JSON.parse(localStorage.getItem('play-app:progress') ?? 'null')
    expect(raw.version).toBe(2)
    expect(raw.state).toEqual({ fav: { farben: true } })
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

describe('useFilters', () => {
  it('set, toggleSit, toggleHave und resetFilters', () => {
    const f = useFilters.getState()
    f.set({ age: 4, q: 'ball' })
    f.toggleSit('leise')
    f.toggleHave('Küchenpapier')
    expect(useFilters.getState()).toMatchObject({
      age: 4,
      q: 'ball',
      sit: { leise: true },
      have: { Küchenpapier: true },
    })
    useFilters.getState().toggleSit('leise')
    expect(useFilters.getState().sit).toEqual({})
    useFilters.getState().resetFilters()
    expect(useFilters.getState().age).toBe(0)
    expect(useFilters.getState().have).toEqual({})
  })
})
