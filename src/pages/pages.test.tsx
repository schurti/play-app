import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider, useLocation } from 'react-router'
import { GAMES } from '../games'
import { EMPTY_FILTERS, matchGame } from '../lib/filter'
import { routes } from '../router'
import { useFilters } from '../store/filters'
import { useProgress } from '../store/progress'
import { useGameNav } from '../hooks/useGameNav'
import { swipe } from '../test/touch'

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
  it('zeigt keinen sichtbaren Titel, nur einen für Screenreader', () => {
    renderAt('/')
    expect(screen.queryByText('Spielideen')).toBeNull()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Pömpgeck' }),
    ).toHaveClass('sr-only')
  })

  it('wechselt die Kategorie per Wisch über die Liste', () => {
    renderAt('/')
    const liste = screen.getByTestId('spiele-liste')
    swipe(liste, 300, 400, 80, 410)
    expect(useFilters.getState().cat).toBe('lernen')
    swipe(liste, 80, 400, 300, 395)
    swipe(liste, 80, 400, 300, 395)
    expect(useFilters.getState().cat).toBe('rollen')
    expect(screen.getByRole('button', { name: 'Rollenspiel' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('reagiert nicht auf senkrechtes Scrollen', () => {
    renderAt('/')
    swipe(screen.getByTestId('spiele-liste'), 200, 500, 230, 100)
    expect(useFilters.getState().cat).toBe('alle')
  })

  it('zeigt alle Spiele und die Tageskarte', () => {
    renderAt('/')
    expect(screen.getByText('483 Spiele')).toBeInTheDocument()
    expect(screen.getByText('⭐ Spiel des Tages')).toBeInTheDocument()
  })

  it('filtert per Kategorie-Chip und blendet die Tageskarte aus', async () => {
    renderAt('/')
    await userEvent.click(screen.getByRole('button', { name: 'Ruhe' }))
    expect(screen.getByText('33 Spiele')).toBeInTheDocument()
    expect(screen.queryByText('⭐ Spiel des Tages')).not.toBeInTheDocument()
  })

  it('sucht im Suchtext und zeigt bei Nichttreffer eine Meldung', async () => {
    renderAt('/')
    const input = screen.getByPlaceholderText('Suchen: Socken, Farben, leise …')
    await userEvent.type(input, 'socken')
    const expected = GAMES.filter((g) =>
      matchGame(g, { ...EMPTY_FILTERS, q: 'socken' }),
    )
    expect(expected.length).toBeGreaterThan(0)
    expect(expected.length).toBeLessThan(483)
    expect(
      screen.getByText(
        `${expected.length} Spiel${expected.length === 1 ? '' : 'e'}`,
      ),
    ).toBeInTheDocument()
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
    expect(
      screen.getByRole('button', { name: '⚙️ Filter (2)' }),
    ).toBeInTheDocument()
    await userEvent.click(
      screen.getByRole('button', { name: '✕ Alle Filter zurücksetzen' }),
    )
    expect(
      screen.getByRole('button', { name: '⚙️ Filter' }),
    ).toBeInTheDocument()
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

describe('Navigation', () => {
  it('hat keinen Sticker-Tab mehr und leitet /sticker auf / um', () => {
    const router = renderAt('/sticker')
    expect(router.state.location.pathname).toBe('/')
    expect(screen.queryByRole('link', { name: /Sticker/ })).toBeNull()
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
    createMemoryRouter([{ path: '*', element: <Probe /> }], {
      initialEntries: [entry],
    })

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
