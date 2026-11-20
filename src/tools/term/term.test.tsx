import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GAMES, getGame } from '../../games'
import TermTool from './TermTool'
import { TERM_DECKS } from './decks'

vi.mock('../../lib/audio', () => ({ tone: vi.fn() }))

/** Erste Karte nach shuffle() mit Math.random = 0 (Fisher-Yates). */
const first = <T,>(arr: readonly T[]) => (arr.length > 1 ? arr[1] : arr[0])

function renderFor(id: string) {
  vi.spyOn(Math, 'random').mockReturnValue(0)
  render(<TermTool game={getGame(id)!} color="#123456" />)
}

afterEach(() => vi.restoreAllMocks())

describe('Begriff-Stapel', () => {
  it('jedes Spiel mit Werkzeug «term» hat einen Stapel und umgekehrt', () => {
    const withTool = GAMES.filter((g) => g.tool === 'term').map((g) => g.id)
    expect(withTool.sort()).toEqual(Object.keys(TERM_DECKS).sort())
  })

  it('hat zusammen einen grossen Katalog ohne leere oder doppelte Karten', () => {
    const all = new Set<string>()
    for (const [id, deck] of Object.entries(TERM_DECKS)) {
      for (const level of deck.levels) {
        expect(level.cards.length, `${id} ${level.label}`).toBeGreaterThan(20)
        const words = level.cards.map((c) => c.word)
        expect(new Set(words).size, `${id} ${level.label}`).toBe(words.length)
        for (const c of level.cards) {
          expect(c.word.trim(), id).toBe(c.word)
          expect(c.word, id).not.toMatch(/ß/)
          all.add(c.word)
        }
      }
      if (deck.hint)
        for (const l of deck.levels)
          for (const c of l.cards)
            expect(c.hint, `${id} ${c.word}`).toBeTruthy()
    }
    expect(all.size).toBeGreaterThan(8000)
  })

  it('Pantomime: verdeckt, aufdecken, Stufe wechseln', async () => {
    renderFor('pantomime')
    const leicht = first(TERM_DECKS.pantomime.levels[0].cards)
    expect(screen.queryByText(leicht.word)).not.toBeInTheDocument()
    await userEvent.click(
      screen.getByRole('button', { name: '🤫 Nur wer dran ist: hier tippen' }),
    )
    expect(screen.getByText(leicht.word)).toBeInTheDocument()
    expect(
      screen.getByText('Spiele es vor, ohne zu sprechen!'),
    ).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: '🎉 Erraten!' }))
    expect(screen.queryByText(leicht.word)).not.toBeInTheDocument()

    const schwer = screen.getByRole('button', { name: 'Schwer' })
    await userEvent.click(schwer)
    expect(schwer).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(
      screen.getByRole('button', { name: '🤫 Nur wer dran ist: hier tippen' }),
    )
    expect(
      screen.getByText(first(TERM_DECKS.pantomime.levels[1].cards).word),
    ).toBeInTheDocument()
  })

  it('Gegenteil: offen, Lösung erst auf Tipp, dann neues Wort', async () => {
    renderFor('gegenteil')
    const card = first(TERM_DECKS.gegenteil.levels[0].cards)
    expect(screen.getByText(card.word)).toBeInTheDocument()
    expect(screen.queryByText(card.hint!)).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: '💡 Lösung' }))
    expect(screen.getByText(card.hint!)).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: '🔄 Neues Wort' }))
    expect(screen.queryByText(card.word)).not.toBeInTheDocument()
    expect(screen.queryByText(card.hint!)).not.toBeInTheDocument()
  })

  it('Teekesselchen zeigt beide Bedeutungen zusammen mit dem Wort', async () => {
    renderFor('teekesselchen')
    const card = first(TERM_DECKS.teekesselchen.levels[0].cards)
    await userEvent.click(
      screen.getByRole('button', { name: '🤫 Nur wer dran ist: hier tippen' }),
    )
    expect(screen.getByText(card.word)).toBeInTheDocument()
    expect(screen.getByText(card.hint!)).toBeInTheDocument()
  })
})
