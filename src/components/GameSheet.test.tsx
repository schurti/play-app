import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { routes } from '../router'
import { tone } from '../lib/audio'
import { useProgress } from '../store/progress'
import { useFilters } from '../store/filters'
import { GAMES } from '../games'
import { swipe } from '../test/touch'

vi.mock('../lib/audio', async (orig) => ({
  ...(await orig<typeof import('../lib/audio')>()),
  tone: vi.fn(),
}))

function renderAt(path: string, state?: unknown) {
  const router = createMemoryRouter(routes, {
    initialEntries:
      state === undefined
        ? [path]
        : [{ pathname: '/' }, { pathname: '/', search: path.slice(1), state }],
    initialIndex: state === undefined ? 0 : 1,
  })
  render(<RouterProvider router={router} />)
  return router
}

const cancel = vi.fn()

beforeEach(() => {
  localStorage.clear()
  useProgress.getState().reset()
  cancel.mockClear()
  vi.mocked(tone).mockClear()
  vi.stubGlobal('speechSynthesis', { cancel, speak: vi.fn() })
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('GameSheet', () => {
  it('zeigt das Spiel aus ?spiel und sperrt das Scrollen', () => {
    renderAt('/?spiel=farben')
    const dialog = screen.getByRole('dialog', { name: /Farben-Jagd/ })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(
      screen.getByRole('heading', { name: 'Farben-Jagd' }),
    ).toBeInTheDocument()
    expect(document.body).toHaveClass('lock')
  })

  it('rendert bei unbekannter ID nichts', () => {
    renderAt('/?spiel=gibtsnicht')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('schliesst mit Escape und stoppt die Sprachausgabe', async () => {
    renderAt('/?spiel=farben')
    await userEvent.keyboard('{Escape}')
    expect(cancel).toHaveBeenCalled()
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    expect(document.body).not.toHaveClass('lock')
  })

  it('schliesst per ✕', async () => {
    renderAt('/?spiel=farben')
    await userEvent.click(screen.getByRole('button', { name: 'Schliessen' }))
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
  })

  it('schliesst per Tipp auf den Hintergrund', async () => {
    renderAt('/?spiel=farben')
    await userEvent.click(
      screen.getByRole('dialog').parentElement as HTMLElement,
    )
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
  })

  it('schaltet Favoriten um und meldet es', async () => {
    renderAt('/?spiel=farben')
    await userEvent.click(screen.getByRole('button', { name: 'Favorit' }))
    expect(screen.getByText('❤️ Zu Favoriten hinzugefügt')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Favorit' })).toHaveTextContent(
      '❤️',
    )
  })

  it('✕ und Escape zusammen schliessen nur einmal', async () => {
    const router = renderAt('/?spiel=farben', { fromApp: true })
    const nav = vi.spyOn(router, 'navigate')
    await userEvent.keyboard('{Escape}')
    await userEvent.keyboard('{Escape}')
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    expect(
      nav.mock.calls.filter(([to]) => (to as unknown) === -1),
    ).toHaveLength(1)
  })

  it('zeigt weder „Geschafft!“ noch Sterne', () => {
    renderAt('/?spiel=farben')
    expect(screen.queryByRole('button', { name: /Geschafft/ })).toBeNull()
    expect(screen.queryByText(/⭐ \d/)).toBeNull()
    expect(screen.queryByText(/gespielt/)).toBeNull()
  })

  it('zeigt keine Timer-Knöpfe mehr', () => {
    renderAt('/?spiel=farben')
    expect(
      within(screen.getByRole('dialog')).queryByRole('button', {
        name: /Min\./,
      }),
    ).toBeNull()
  })

  it('setzt die Kategorie-Farben als Variablen auf den Dialog', () => {
    renderAt('/?spiel=sternenhimmel')
    const dialog = screen.getByRole('dialog')
    expect(dialog.style.getPropertyValue('--soft')).toBe('#E5E9F2')
  })

  describe('Gesten', () => {
    beforeEach(() => useFilters.getState().resetFilters())

    it('schliesst erst nach weitem Ziehen und gleitet dabei hinaus', async () => {
      renderAt('/?spiel=farben')
      const dialog = screen.getByRole('dialog')
      swipe(dialog, 150, 100, 152, 320)
      // Animation läuft: Dialog gleitet nach unten, ist aber noch da
      expect(dialog.style.transform).toBe('translateY(100%)')
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
    })

    it('federt bei mittlerem, langsamem Ziehen zurück', () => {
      renderAt('/?spiel=farben')
      const dialog = screen.getByRole('dialog')
      swipe(dialog, 150, 100, 150, 220, { slow: true })
      expect(dialog.style.transform).toBe('')
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('blendet beim Ziehen nur die Abdunkelung aus, nicht den Dialog', () => {
      renderAt('/?spiel=farben')
      const dialog = screen.getByRole('dialog')
      swipe(dialog, 150, 100, 150, 220, { slow: true, keepDown: true })
      expect(dialog.style.transform).toBe('translateY(120px)')
      expect(dialog.parentElement!.style.opacity).toBe('')
      expect(dialog.parentElement!.style.backgroundColor).toMatch(
        /^rgba\(42, 36, 83/,
      )
    })

    it('bleibt offen bei einem kurzen Zupfen nach unten', () => {
      renderAt('/?spiel=farben')
      swipe(screen.getByRole('dialog'), 150, 100, 150, 125)
      expect(screen.getByRole('dialog', { name: /Farben-Jagd/ })).toBeVisible()
    })

    it('blättert mit Wischen zum nächsten und vorherigen Spiel', () => {
      const router = renderAt('/?spiel=' + GAMES[0].id)
      swipe(screen.getByRole('dialog'), 300, 300, 100, 310)
      expect(router.state.location.search).toBe('?spiel=' + GAMES[1].id)
      swipe(screen.getByRole('dialog'), 100, 300, 300, 290)
      expect(router.state.location.search).toBe('?spiel=' + GAMES[0].id)
      // ersetzt den Verlaufseintrag statt neue anzulegen
      expect(router.state.historyAction).toBe('REPLACE')
    })

    it('blättert auch per Knopf und Pfeiltaste, mit Umlauf am Ende', async () => {
      const router = renderAt('/?spiel=' + GAMES[0].id)
      await userEvent.click(
        screen.getByRole('button', { name: 'Vorheriges Spiel' }),
      )
      expect(router.state.location.search).toBe('?spiel=' + GAMES.at(-1)!.id)
      await userEvent.keyboard('{ArrowRight}')
      expect(router.state.location.search).toBe('?spiel=' + GAMES[0].id)
    })

    it('ignoriert Wischen auf der Zeichenfläche', () => {
      const router = renderAt('/?spiel=maltafel')
      const target = document.querySelector('canvas')!
      swipe(target, 300, 300, 50, 300)
      expect(router.state.location.search).toBe('?spiel=maltafel')
    })
  })
})
