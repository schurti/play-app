import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider, useLocation } from 'react-router'
import { GAMES } from '../games'
import { EMPTY_FILTERS, matchGame } from '../lib/filter'
import { routes } from '../router'
import { useFilters } from '../store/filters'
import { useProgress } from '../store/progress'
import { useGameNav } from '../hooks/useGameNav'

function renderAt(path: string | { pathname: string; state: unknown }) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  render(<RouterProvider router={router} />)
  return router
}

beforeEach(() => {
  localStorage.clear()
  useProgress.getState().reset()
  useFilters.getState().resetFilters()
})

describe('Spiele-Seite', () => {
  it('zeigt alle Spiele und die Tageskarte', () => {
    renderAt('/')
    expect(screen.getByText('78 Spiele')).toBeInTheDocument()
    expect(screen.getByText('⭐ Spiel des Tages')).toBeInTheDocument()
  })

  it('filtert per Kategorie-Chip und blendet die Tageskarte aus', async () => {
    renderAt('/')
    await userEvent.click(screen.getByRole('button', { name: '🌙 Ruhe' }))
    expect(screen.getByText('6 Spiele')).toBeInTheDocument()
    expect(screen.queryByText('⭐ Spiel des Tages')).not.toBeInTheDocument()
  })

  it('sucht im Suchtext und zeigt bei Nichttreffer eine Meldung', async () => {
    renderAt('/')
    const input = screen.getByPlaceholderText('Suchen: Socken, Farben, leise …')
    await userEvent.type(input, 'socken')
    const expected = GAMES.filter((g) => matchGame(g, { ...EMPTY_FILTERS, q: 'socken' }))
    expect(expected.length).toBeGreaterThan(0)
    expect(expected.length).toBeLessThan(78)
    expect(screen.getByText(`${expected.length} Spiel${expected.length === 1 ? '' : 'e'}`)).toBeInTheDocument()
    await userEvent.clear(input)
    await userEvent.type(input, 'xyzxyz')
    expect(screen.getByText('0 Spiele')).toBeInTheDocument()
    expect(screen.getByText(/Keine Spiele passen\./)).toBeInTheDocument()
  })

  it('zählt Filter und setzt sie zurück', async () => {
    renderAt('/')
    await userEvent.click(screen.getByRole('button', { name: '⚙️ Filter' }))
    await userEvent.click(screen.getByRole('button', { name: '3 J.' }))
    await userEvent.click(screen.getByRole('button', { name: 'bis 10 Min.' }))
    expect(screen.getByRole('button', { name: '⚙️ Filter (2)' })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: '✕ Alle Filter zurücksetzen' }))
    expect(screen.getByRole('button', { name: '⚙️ Filter' })).toBeInTheDocument()
  })

  it('öffnet ein Spiel per Kartenklick als ?spiel=', async () => {
    const router = renderAt('/')
    await userEvent.click(screen.getByRole('button', { name: /Farben-Jagd/ }))
    expect(router.state.location.search).toBe('?spiel=farben')
    expect(router.state.location.state).toEqual({ fromApp: true })
  })

  it('Zufall öffnet ein Spiel', async () => {
    const router = renderAt('/')
    await userEvent.click(screen.getByRole('button', { name: /Zufall/ }))
    expect(router.state.location.search).toMatch(/^\?spiel=/)
  })

  it('leitet unbekannte Pfade auf / um', () => {
    const router = renderAt('/gibtsnicht')
    expect(router.state.location.pathname).toBe('/')
  })
})

describe('Favoriten-Seite', () => {
  it('zeigt ohne Favoriten einen Hinweis', () => {
    renderAt('/favoriten')
    expect(screen.getByText(/Noch keine Favoriten\./)).toBeInTheDocument()
  })

  it('zeigt Favoriten und Zufall wählt daraus', async () => {
    useProgress.getState().toggleFav('kim')
    const router = renderAt('/favoriten')
    expect(screen.getByRole('button', { name: /❤️/ })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /Zufall/ }))
    expect(router.state.location.search).toBe('?spiel=kim')
  })
})

describe('Sticker-Seite', () => {
  it('zeigt Statistik und acht Kategorie-Sticker', () => {
    renderAt('/sticker')
    expect(screen.getByText('0/78')).toBeInTheDocument()
    const list = screen.getByRole('list', { name: 'Kategorie-Sticker' })
    expect(within(list).getAllByRole('listitem')).toHaveLength(8)
  })

  it('überspringt Verlaufseinträge mit unbekannter ID', () => {
    useProgress.setState({ hist: [{ id: 'gibtsnicht', t: 1 }, { id: 'farben', t: 2 }] })
    renderAt('/sticker')
    expect(screen.getByText(/Farben-Jagd/)).toBeInTheDocument()
    expect(screen.queryByText(/gibtsnicht/)).not.toBeInTheDocument()
  })

  it('löscht den Fortschritt erst beim zweiten Tippen', async () => {
    useProgress.getState().markDone('farben')
    renderAt('/sticker')
    await userEvent.click(screen.getByRole('button', { name: 'Fortschritt zurücksetzen' }))
    expect(useProgress.getState().stars).toBe(1)
    await userEvent.click(
      screen.getByRole('button', { name: 'Wirklich alles löschen? Nochmal tippen' }),
    )
    expect(useProgress.getState().stars).toBe(0)
    expect(screen.getByText('Fortschritt zurückgesetzt')).toBeInTheDocument()
  })
})

describe('useGameNav', () => {
  function Probe() {
    const { openGame, closeGame } = useGameNav()
    const loc = useLocation()
    return (
      <>
        <output>{loc.pathname + loc.search}</output>
        <button onClick={() => openGame('kim')}>open</button>
        <button onClick={closeGame}>close</button>
      </>
    )
  }
  const make = (entry: string) =>
    createMemoryRouter([{ path: '*', element: <Probe /> }], { initialEntries: [entry] })

  it('schliesst per Zurück, wenn in der App geöffnet', async () => {
    const router = make('/sticker')
    render(<RouterProvider router={router} />)
    await userEvent.click(screen.getByText('open'))
    expect(screen.getByRole('status')).toHaveTextContent('/sticker?spiel=kim')
    await userEvent.click(screen.getByText('close'))
    expect(screen.getByRole('status')).toHaveTextContent(/^\/sticker$/)
    expect(router.state.historyAction).toBe('POP')
  })

  it('entfernt bei Deep-Link nur den Parameter per replace', async () => {
    const router = make('/sticker?spiel=kim')
    render(<RouterProvider router={router} />)
    await userEvent.click(screen.getByText('close'))
    expect(screen.getByRole('status')).toHaveTextContent(/^\/sticker$/)
    expect(router.state.historyAction).toBe('REPLACE')
  })
})
