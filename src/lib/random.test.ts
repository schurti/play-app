import { pick, shuffle } from './random'

describe('pick', () => {
  it('wählt per rng', () => {
    expect(pick(['a', 'b', 'c'], () => 0.99)).toBe('c')
    expect(pick(['a', 'b', 'c'], () => 0)).toBe('a')
  })
  it('funktioniert ohne rng', () => {
    expect(['a', 'b']).toContain(pick(['a', 'b']))
  })
})

describe('shuffle', () => {
  it('behält alle Elemente und ändert das Original nicht', () => {
    const src = [1, 2, 3, 4, 5]
    const out = shuffle(src, () => 0)
    expect(out).not.toBe(src)
    expect([...out].sort()).toEqual(src)
    expect(src).toEqual([1, 2, 3, 4, 5])
  })
  it('mischt per rng', () => {
    expect(shuffle(['a', 'b', 'c'], () => 0)).toEqual(['b', 'c', 'a'])
  })
})
