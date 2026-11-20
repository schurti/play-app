import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ComponentType } from 'react'
import { GAMES } from '../games'
import { ANIMALS } from './animal/animals'
import { MONSTER_PARTS, MONSTER_SYLLABLES } from './monster/parts'
import { YOGA } from './yoga/poses'
import { FIGURES } from './yoga/figures'
import { TREASURE } from './treasure/riddles'
import { EXPLAIN } from './explain/cards'
import type { ToolId } from './ids'
import { TOOLS } from './registry'
import type { ToolProps } from './ToolProps'

vi.mock('../lib/audio', () => ({
  tone: vi.fn(),
  noise: vi.fn(),
  speak: vi.fn(),
  stopSpeech: vi.fn(),
}))

async function renderTool(id: ToolId, random = 0) {
  vi.spyOn(Math, 'random').mockReturnValue(random)
  const Tool = TOOLS[id] as ComponentType<ToolProps>
  expect(Tool).toBeDefined()
  render(<Tool game={GAMES[0]} color="#123456" />)
}

/** Erste Karte nach shuffle() mit Math.random = 0 (Fisher-Yates). */
function shuffleFirst<T>(arr: readonly T[]): T {
  return arr.length > 1 ? arr[1] : arr[0]
}

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

describe('einfache Werkzeuge', () => {
  it('color zeigt eine Farbaufgabe und eine Neu-Schaltfläche', async () => {
    await renderTool('color')
    expect(await screen.findByText('Finde etwas in Rot!')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: '🔄 Neue Aufgabe' }),
    ).toBeInTheDocument()
  })

  it('number zeigt Anzahl und Eigenschaft', async () => {
    await renderTool('number')
    expect(await screen.findByText(/Dinge, die rund sind!/)).toBeInTheDocument()
  })

  it('letter zeigt den ersten Buchstaben', async () => {
    await renderTool('letter')
    expect(await screen.findByText('A')).toBeInTheDocument()
  })

  it('shape nennt die Form und füllt mit der Kategorie-Farbe', async () => {
    await renderTool('shape')
    expect(
      await screen.findByText('Finde etwas mit der Form: Kreis!'),
    ).toBeInTheDocument()
    expect(document.querySelector('svg')).toHaveStyle({ fill: '#123456' })
  })

  it('animal benutzt den passenden Artikel', async () => {
    await renderTool('animal')
    expect(
      await screen.findByText('Bewegt euch wie ein Frosch!'),
    ).toBeInTheDocument()
  })

  it('animal: Krabbe bekommt „eine“', async () => {
    const i = ANIMALS.findIndex((a) => a.name === 'Krabbe')
    await renderTool('animal', (i + 0.5) / ANIMALS.length)
    expect(
      await screen.findByText('Bewegt euch wie eine Krabbe!'),
    ).toBeInTheDocument()
  })

  it('yoga und story haben ihre eigenen Beschriftungen', async () => {
    await renderTool('yoga')
    expect(
      await screen.findByRole('button', { name: '🔄 Neue Figur' }),
    ).toBeInTheDocument()
    expect(screen.getByText('5 Atemzüge halten')).toBeInTheDocument()
  })

  it('yoga zeigt für jede Figur eine gezeichnete Haltung', async () => {
    for (const y of YOGA) expect(FIGURES[y.name], y.name).toBeDefined()
    expect(Object.keys(FIGURES)).toHaveLength(YOGA.length)
    await renderTool('yoga')
    expect(
      await screen.findByRole('img', { name: /^So geht / }),
    ).toBeInTheDocument()
  })

  it('animal und yoga haben viele Varianten mit gültigem Artikel', () => {
    expect(ANIMALS.length).toBeGreaterThanOrEqual(30)
    expect(YOGA.length).toBeGreaterThanOrEqual(28)
    expect(new Set(ANIMALS.map((a) => a.name)).size).toBe(ANIMALS.length)
    expect(new Set(YOGA.map((y) => y.name)).size).toBe(YOGA.length)
    expect(ANIMALS.find((a) => a.name === 'Ente')?.article).toBe('eine')
    expect(ANIMALS.find((a) => a.name === 'Hase')?.article).toBe('ein')
  })

  it('monster würfelt alle Bauteile und einzelne Zeilen neu', async () => {
    await renderTool('monster')
    expect(await screen.findByText('Bobel')).toBeInTheDocument()
    for (const part of MONSTER_PARTS) {
      expect(screen.getByText(part.label)).toBeInTheDocument()
      expect(part.options.length).toBeGreaterThanOrEqual(25)
      expect(new Set(part.options).size).toBe(part.options.length)
    }
    expect(screen.getByText('rund wie ein Ball')).toBeInTheDocument()
    expect(screen.getByText('2 gebogene Hörner')).toBeInTheDocument()

    vi.spyOn(Math, 'random').mockReturnValue(0.99)
    await userEvent.click(
      screen.getByRole('button', { name: /^Schwanz: .* – neu würfeln$/ }),
    )
    expect(
      screen.getByText('ein Schwanz so lang wie das ganze Blatt'),
    ).toBeInTheDocument()
    // Die anderen Teile bleiben gleich
    expect(screen.getByText('rund wie ein Ball')).toBeInTheDocument()
    expect(screen.getByText('Bobel')).toBeInTheDocument()

    await userEvent.click(
      screen.getByRole('button', { name: '🔄 Neues Monster' }),
    )
    expect(screen.getByText('Zorzus')).toBeInTheDocument()
    expect(screen.queryByText('rund wie ein Ball')).not.toBeInTheDocument()
  })

  it('monster-Namen bestehen aus zwei Silben', () => {
    const { first, second } = MONSTER_SYLLABLES
    const vowelGroups = (s: string) =>
      (s.toLowerCase().match(/[aeiouäöü]+/g) ?? []).length
    for (const s of first) {
      expect(s).toMatch(/^[A-ZÄÖÜ]/)
      expect(vowelGroups(s)).toBe(1)
    }
    for (const s of second) {
      expect(s).toMatch(/^[^aeiouäöüA-Z]/)
      expect(vowelGroups(s)).toBe(1)
    }
    // Keine Doppel wie «Bobo»: die Listen überschneiden sich nicht
    const lower = new Set(first.map((s) => s.toLowerCase()))
    expect(second.filter((s) => lower.has(s))).toEqual([])
    expect(new Set(first).size).toBe(first.length)
    expect(new Set(second).size).toBe(second.length)
  })

  it('story zeigt Wer, Wo, Was', async () => {
    await renderTool('story')
    expect(
      await screen.findByRole('button', { name: '🔄 Neu würfeln' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/🦔 ein mutiger Igel/)).toBeInTheDocument()
  })

  it('Neu-Schaltfläche zieht eine neue Aufgabe', async () => {
    await renderTool('color')
    await screen.findByText('Finde etwas in Rot!')
    vi.spyOn(Math, 'random').mockReturnValue(0.99)
    await userEvent.click(
      screen.getByRole('button', { name: '🔄 Neue Aufgabe' }),
    )
    expect(screen.getByText('Finde etwas in Grau!')).toBeInTheDocument()
  })

  it('explain verbirgt die Karte und wechselt zwischen Bild und Wort', async () => {
    await renderTool('explain')
    const bild = shuffleFirst(EXPLAIN.bild)
    expect(screen.queryByText(bild.word)).not.toBeInTheDocument()
    await userEvent.click(
      screen.getByRole('button', { name: '🤫 Nur wer erklärt: hier tippen' }),
    )
    expect(screen.getByText(bild.word)).toBeInTheDocument()
    expect(screen.getByText(bild.kind)).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: '🎉 Erraten!' }))
    expect(screen.queryByText(bild.word)).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: '🤫 Nur wer erklärt: hier tippen' }),
    ).toBeInTheDocument()

    const wortBtn = screen.getByRole('button', { name: '🔤 Wort-Karten' })
    expect(wortBtn).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(wortBtn)
    expect(wortBtn).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(
      screen.getByRole('button', { name: '🤫 Nur wer erklärt: hier tippen' }),
    )
    expect(
      screen.getByText(shuffleFirst(EXPLAIN.wort).word),
    ).toBeInTheDocument()
  })

  it('dice: 2 Würfel zeigt Summe im Format a + b = s', async () => {
    await renderTool('dice')
    await userEvent.click(
      await screen.findByRole('button', { name: '2 Würfel' }),
    )
    expect(screen.getByTestId('sum')).toHaveTextContent(/^\d \+ \d = \d+$/)
    expect(screen.getAllByTestId('die')).toHaveLength(2)
    expect(screen.getByRole('button', { name: '1 Würfel' })).toBeInTheDocument()
  })

  it('dice: Würfeln läuft 9 Ticks und endet', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    await renderTool('dice', 0.99)
    const btn = await screen.findByRole('button', { name: '🎲 Würfeln' })
    expect(screen.getByTestId('sum')).toHaveTextContent('1')
    await act(async () => {
      btn.click()
      await vi.advanceTimersByTimeAsync(70 * 9)
    })
    expect(screen.getByTestId('sum')).toHaveTextContent('6')
    expect(vi.getTimerCount()).toBe(0)
  })

  it('treasure zeigt genau 5 Hinweise mit Lösung in details', async () => {
    await renderTool('treasure')
    const items = await screen.findAllByRole('listitem')
    expect(items).toHaveLength(5)
    for (const li of items) {
      expect(li.querySelector('details')).not.toBeNull()
      expect(within(li).getByText('Lösung für Erwachsene')).toBeInTheDocument()
    }
    expect(TREASURE).toHaveLength(17)
    expect(
      screen.getByRole('button', { name: '🔄 Neue Hinweise' }),
    ).toBeInTheDocument()
  })
})
