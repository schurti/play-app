export interface TermCard {
  word: string
  emoji?: string
  /** Zusatz: Lösung, Hinweise oder Beispiele */
  hint?: string
}

const PICTO = /^\p{Extended_Pictographic}/u

/**
 * Kompakte Schreibweise für Begriffs-Listen:
 * «Emoji Wort», «Wort» oder mit Zusatz «Emoji Wort | Hinweis».
 */
export function parse(lines: readonly string[]): TermCard[] {
  return lines.map((line) => {
    const [main, hint] = line.split(' | ')
    const sp = main.indexOf(' ')
    const first = sp > 0 ? main.slice(0, sp) : ''
    const card: TermCard = PICTO.test(first)
      ? { emoji: first, word: main.slice(sp + 1) }
      : { word: main }
    if (hint) card.hint = hint
    return card
  })
}
