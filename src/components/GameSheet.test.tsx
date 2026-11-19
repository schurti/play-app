import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { routes } from '../router'
import { tone } from '../lib/audio'
import { useProgress } from '../store/progress'

vi.mock('../lib/audio', async (orig) => ({
  ...(await orig<typeof import('../lib/audio')>()),
  tone: vi.fn(),
  fanfare: vi.fn(),
}))

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
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
    expect(screen.getByRole('heading', { name: 'Farben-Jagd' })).toBeInTheDocument()
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
    await userEvent.click(screen.getByRole('dialog').parentElement as HTMLElement)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('schaltet Favoriten um und meldet es', async () => {
    renderAt('/?spiel=farben')
    await userEvent.click(screen.getByRole('button', { name: 'Favorit' }))
    expect(screen.getByText('❤️ Zu Favoriten hinzugefügt')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Favorit' })).toHaveTextContent('❤️')
  })

  it('„Geschafft!“ vergibt einen Stern, zeigt den Toast und schliesst', async () => {
    renderAt('/?spiel=farben')
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    await user.click(screen.getByRole('button', { name: 'Geschafft! ⭐' }))
    expect(screen.getByText('⭐ Super gemacht! +1 Stern')).toBeInTheDocument()
    expect(screen.getByText('⭐ 1')).toBeInTheDocument()
    await act(async () => {
      await vi.advanceTimersByTimeAsync(700)
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('zählt den Countdown herunter bis „Zeit um!“ und piept', async () => {
    renderAt('/?spiel=farben')
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    await user.click(screen.getByRole('button', { name: '⏱ 1 Min.' }))
    expect(screen.getByText('1:00')).toBeInTheDocument()
    await act(async () => {
      await vi.advanceTimersByTimeAsync(60_000)
    })
    expect(screen.getByText('Zeit um! 🎉')).toBeInTheDocument()
    expect(tone).toHaveBeenCalledTimes(3)
    expect(tone).toHaveBeenCalledWith(880, 0.2, 'square', 0.12, 0.6)
  })

  it('stoppt den Countdown beim Schliessen', async () => {
    renderAt('/?spiel=farben')
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    await user.click(screen.getByRole('button', { name: '⏱ 1 Min.' }))
    await user.click(screen.getByRole('button', { name: 'Schliessen' }))
    await act(async () => {
      await vi.advanceTimersByTimeAsync(70_000)
    })
    expect(tone).not.toHaveBeenCalled()
    expect(cancel).toHaveBeenCalled()
  })
})
