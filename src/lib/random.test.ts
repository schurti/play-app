import { pick } from './random'

describe('pick', () => {
  it('wählt per rng', () => {
    expect(pick(['a', 'b', 'c'], () => 0.99)).toBe('c')
    expect(pick(['a', 'b', 'c'], () => 0)).toBe('a')
  })
  it('funktioniert ohne rng', () => {
    expect(['a', 'b']).toContain(pick(['a', 'b']))
  })
})
