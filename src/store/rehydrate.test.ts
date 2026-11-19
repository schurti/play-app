const P = './progress'
describe('rehydrate', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.resetModules()
  })
  it('übernimmt die Favoriten aus hs2 beim ersten Laden', async () => {
    localStorage.setItem(
      'hs2',
      '{"stars":7,"done":{"farben":2},"fav":{"kim":1},"hist":[{"id":"farben","t":5}]}',
    )
    const { useProgress } = await import(P)
    expect(useProgress.getState().fav).toEqual({ kim: true })
    expect(useProgress.getState().stars).toBeUndefined()
    expect(localStorage.getItem('play-app:progress')).toBeNull()
  })
  it('reset holt Legacy nicht zurück', async () => {
    localStorage.setItem('hs2', '{"fav":{"kim":1}}')
    let { useProgress } = await import(P)
    useProgress.getState().reset()
    vi.resetModules()
    ;({ useProgress } = await import(P))
    expect(useProgress.getState().fav).toEqual({})
  })
  it('migriert gespeicherte Version 1 auf nur Favoriten', async () => {
    localStorage.setItem(
      'play-app:progress',
      JSON.stringify({
        version: 1,
        state: { stars: 9, done: { farben: 3 }, fav: { lava: true }, hist: [] },
      }),
    )
    const { useProgress } = await import(P)
    const s = useProgress.getState()
    expect(s.fav).toEqual({ lava: true })
    expect(s.stars).toBeUndefined()
    expect(s.done).toBeUndefined()
    expect(s.recent).toEqual([])
  })
  it('migriert Version 2 und behält die Favoriten', async () => {
    localStorage.setItem(
      'play-app:progress',
      JSON.stringify({ version: 2, state: { fav: { kim: true } } }),
    )
    const { useProgress } = await import(P)
    expect(useProgress.getState().fav).toEqual({ kim: true })
    expect(useProgress.getState().recent).toEqual([])
  })
  it('hs2 mit kaputten Feldern', async () => {
    localStorage.setItem('hs2', '{"stars":"x","done":null,"fav":null}')
    const { useProgress } = await import(P)
    expect(useProgress.getState().fav).toEqual({})
  })
})
