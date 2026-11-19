import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { routes } from '../router'
import { tone } from '../lib/audio'
import { useProgress } from '../store/progress'

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
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(cancel).toHaveBeenCalled()
    expect(document.body).not.toHaveClass('lock')
  })

  it('schliesst per ✕', async () => {
    renderAt('/?spiel=farben')
    await userEvent.click(screen.getByRole('button', { name: 'Schliessen' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('schliesst per Tipp auf den Hintergrund', async () => {
    renderAt('/?spiel=farben')
    await userEvent.click(
      screen.getByRole('dialog').parentElement as HTMLElement,
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
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
})
