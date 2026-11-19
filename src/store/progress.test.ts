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
  it('markDone zählt Stern, Spiel und Verlauf', () => {
    useProgress.getState().markDone('farben', 1000)
    const s = useProgress.getState()
    expect(s.stars).toBe(1)
    expect(s.done.farben).toBe(1)
    expect(s.hist[0]).toEqual({ id: 'farben', t: 1000 })
  })

  it('kappt den Verlauf auf 30 Einträge', () => {
    for (let i = 0; i < 35; i++) useProgress.getState().markDone('farben', i)
    const { hist } = useProgress.getState()
    expect(hist).toHaveLength(30)
    expect(hist[0].t).toBe(34)
  })

  it('toggleFav schaltet um', () => {
    expect(useProgress.getState().toggleFav('kim')).toBe(true)
    expect(useProgress.getState().fav).toEqual({ kim: true })
    expect(useProgress.getState().toggleFav('kim')).toBe(false)
    expect(useProgress.getState().fav).toEqual({})
  })

  it('reset leert alles', () => {
    useProgress.getState().markDone('farben')
    useProgress.getState().reset()
    expect(useProgress.getState().stars).toBe(0)
    expect(useProgress.getState().done).toEqual({})
  })

  it('speichert unter play-app:progress', () => {
    useProgress.getState().markDone('farben', 5)
    const raw = JSON.parse(localStorage.getItem('play-app:progress') ?? 'null')
    expect(raw.version).toBe(1)
    expect(raw.state.stars).toBe(1)
  })
})

describe('loadLegacy', () => {
  const store = (data: Record<string, string>) => ({
    getItem: (k: string) => data[k] ?? null,
  })

  it('liest hs2 und normalisiert fav', () => {
    const p = loadLegacy(
      store({
        hs2: '{"stars":7,"done":{"farben":2},"fav":{"kim":1},"hist":[]}',
      }),
    )
    expect(p?.stars).toBe(7)
    expect(p?.done.farben).toBe(2)
    expect(p?.fav.kim).toBe(true)
  })

  it('fällt auf hs_stars zurück', () => {
    expect(loadLegacy(store({ hs_stars: '4' }))?.stars).toBe(4)
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
