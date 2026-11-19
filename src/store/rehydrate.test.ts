const P = './progress'
describe('rehydrate', () => {
  beforeEach(() => { localStorage.clear(); vi.resetModules() })
  it('übernimmt hs2 beim ersten Laden', async () => {
    localStorage.setItem('hs2', '{"stars":7,"done":{"farben":2},"fav":{"kim":1},"hist":[{"id":"farben","t":5}]}')
    const { useProgress } = await import(P)
    const s = useProgress.getState()
    expect(s.stars).toBe(7); expect(s.fav).toEqual({ kim: true }); expect(s.done.farben).toBe(2)
    expect(localStorage.getItem('play-app:progress')).toBeNull()
    s.markDone('kim')
    expect(JSON.parse(localStorage.getItem('play-app:progress')!).state.stars).toBe(8)
  })
  it('reset holt Legacy nicht zurück', async () => {
    localStorage.setItem('hs2', '{"stars":7,"done":{},"fav":{},"hist":[]}')
    let { useProgress } = await import(P)
    useProgress.getState().reset()
    vi.resetModules()
    ;({ useProgress } = await import(P))
    expect(useProgress.getState().stars).toBe(0)
  })
  it('hs_stars', async () => {
    localStorage.setItem('hs_stars', '4')
    const { useProgress } = await import(P)
    expect(useProgress.getState().stars).toBe(4)
  })
  it('hs2 mit done als Array / null-Feldern', async () => {
    localStorage.setItem('hs2', '{"stars":"x","done":null,"fav":null}')
    const { useProgress } = await import(P)
    expect(useProgress.getState().stars).toBe(0)
  })
})
