import { EXPLAIN } from './cards'

describe('Erklär-Karten', () => {
  const all = [...EXPLAIN.bild, ...EXPLAIN.wort]

  it('hat eine grosse Auswahl auf beiden Stufen', () => {
    expect(EXPLAIN.bild.length).toBeGreaterThanOrEqual(400)
    expect(EXPLAIN.wort.length).toBeGreaterThanOrEqual(250)
  })

  it('hat jedes Wort nur einmal', () => {
    const words = all.map((c) => c.word.toLowerCase())
    const dupes = words.filter((w, i) => words.indexOf(w) !== i)
    expect(dupes).toEqual([])
  })

  it('Bild-Karten haben ein Emoji, Wort-Karten keines', () => {
    for (const c of EXPLAIN.bild) {
      expect(c.emoji, c.word).toMatch(/\p{Extended_Pictographic}/u)
      expect(c.word.trim(), c.emoji).toBe(c.word)
      expect(c.word, c.emoji).not.toBe('')
    }
    for (const c of EXPLAIN.wort) expect(c.emoji, c.word).toBeUndefined()
  })

  it('verwendet kein Eszett', () => {
    expect(all.filter((c) => c.word.includes('ß'))).toEqual([])
  })
})
