import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { routes } from '../router'
import { tone } from '../lib/audio'
import { GAMES } from '../games'
import type { CategoryId } from '../games/categories'
import { useProgress } from '../store/progress'

vi.mock('../lib/audio', async (orig) => ({
  ...(await orig<typeof import('../lib/audio')>()),
  tone: vi.fn(),
  fanfare: vi.fn(),
}))

function renderAt(path: string, state?: unknown) {
  const router = createMemoryRouter(routes, {
    initialEntries: state === undefined ? [path] : [{ pathname: '/' }, { pathname: '/', search: path.slice(1), state }],
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

function seedAndFinish(cat: CategoryId, n: number) {
  const ids = GAMES.filter((g) => g.category === cat).map((g) => g.id)
  const done = Object.fromEntries(ids.slice(0, n).map((id) => [id, 1]))
  useProgress.setState({ done, stars: n })
  return ids[n]
}

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

  it('doppeltes „Geschafft!“ zählt nur einmal und schliesst nur einmal', async () => {
    const router = renderAt('/?spiel=farben', { fromApp: true })
    const back = vi.spyOn(router, 'navigate')
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const btn = screen.getByRole('button', { name: 'Geschafft! ⭐' })
    await user.click(btn)
    await user.click(btn)
    expect(useProgress.getState().stars).toBe(1)
    expect(useProgress.getState().done.farben).toBe(1)
    expect(useProgress.getState().hist).toHaveLength(1)
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1500)
    })
    expect(back.mock.calls.filter(([to]) => to === -1)).toHaveLength(1)
    expect(router.state.location.pathname).toBe('/')
    expect(router.state.location.search).toBe('')
    expect(router.state.historyAction).toBe('POP')
  })

  it('✕ und Escape zusammen schliessen nur einmal', async () => {
    const router = renderAt('/?spiel=farben', { fromApp: true })
    const nav = vi.spyOn(router, 'navigate')
    await userEvent.keyboard('{Escape}')
    await userEvent.keyboard('{Escape}')
    expect(nav.mock.calls.filter(([to]) => to === -1)).toHaveLength(1)
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

  it.each([
    ['lernen', '🏆 Neuer Sticker: 🧠 Lernen!'],
    ['bewegung', '🏆 Neuer Sticker: 🏃 Bewegung!'],
  ] as const)('zeigt den Sticker-Toast für %s', async (cat, text) => {
    const id = seedAndFinish(cat, 2)
    renderAt('/?spiel=' + id)
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    await user.click(screen.getByRole('button', { name: 'Geschafft! ⭐' }))
    await act(async () => {
      await vi.advanceTimersByTimeAsync(300)
    })
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('zeigt den goldenen Sticker, wenn alle Spiele einer Kategorie geschafft sind', async () => {
    const all = GAMES.filter((g) => g.category === 'ruhe').map((g) => g.id)
    const id = seedAndFinish('ruhe', all.length - 1)
    renderAt('/?spiel=' + id)
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    await user.click(screen.getByRole('button', { name: 'Geschafft! ⭐' }))
    await act(async () => {
      await vi.advanceTimersByTimeAsync(300)
    })
    expect(screen.getByText('✨ Goldener Sticker: 🌙 Ruhe!')).toBeInTheDocument()
  })

  it('zeigt das Abzeichen beim fünften verschiedenen Spiel', async () => {
    const [a, b, c, d, e] = ['ruhe', 'malen'].flatMap((cat) => GAMES.filter((g) => g.category === cat).map((g) => g.id)).slice(0, 5).concat()
    useProgress.setState({ done: { [a]: 1, [b]: 1, [c]: 1, [d]: 1 }, stars: 4 })
    renderAt('/?spiel=' + e)
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    await user.click(screen.getByRole('button', { name: 'Geschafft! ⭐' }))
    await act(async () => {
      await vi.advanceTimersByTimeAsync(300)
    })
    expect(screen.getByText('🎖️ Neues Abzeichen: 🥉 Entdecker!')).toBeInTheDocument()
  })
})
