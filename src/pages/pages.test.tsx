import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider, useLocation } from 'react-router'
import { GAMES, getGame } from '../games'
import { LONG_PRESS } from '../components/BottomNav'
import { EMPTY_FILTERS, matchGame, searchGames } from '../lib/filter'
import { routes } from '../router'
import { useProgress } from '../store/progress'
import { useGameNav } from '../hooks/useGameNav'
import { swipe } from '../test/touch'

function renderAt(path: string | { pathname: string; state: unknown }) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  render(<RouterProvider router={router} />)
  return router
}
const params = (router: ReturnType<typeof renderAt>) =>
  new URLSearchParams(router.state.location.search)
const nav = () => within(screen.getByRole('navigation', { name: 'Hauptmenü' }))

beforeEach(() => {
  localStorage.clear()
  useProgress.getState().reset()
})

describe('Entdecken', () => {
  it('zeigt keinen sichtbaren Titel, nur einen für Screenreader', () => {
    renderAt('/')
    expect(
      screen.getByRole('heading', { level: 1, name: 'Pömpgeck' }),
    ).toHaveClass('sr-only')
  })

  it('zeigt Tageskarte, Wunsch-Karte und alle Kategorien in vier Welten', () => {
    renderAt('/')
    expect(screen.getByText('⭐ Spiel des Tages')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Keine Idee\?/ })).toHaveAttribute(
      'href',
      '/zufall',
    )
    for (const w of [
      'Bewegen & Draussen',
      'Kreativ',
      'Lernen & Denken',
      'Alltag & Familie',
    ])
      expect(screen.getByRole('heading', { level: 2, name: w })).toBeVisible()
    const tiles = screen
      .getAllByRole('link')
      .filter((a) => a.getAttribute('href')?.startsWith('/k/'))
    expect(tiles).toHaveLength(19)
    expect(screen.getByRole('link', { name: /Ruhe\s*33 Spiele/ })).toBeVisible()
  })

  it('führt über das Suchfeld zur Suche', async () => {
    const router = renderAt('/')
    await userEvent.click(screen.getByRole('link', { name: /Spiel suchen/ }))
    expect(router.state.location.pathname).toBe('/suche')
    expect(
      screen.getByRole('searchbox', { name: 'Spiele suchen' }),
    ).toHaveFocus()
  })

  it('fokussiert schon beim Tippen ein Feld, damit iOS die Tastatur öffnet', async () => {
    renderAt('/')
    // Echter Klick ohne act(), sonst rendert die Suchseite sofort mit
    screen
      .getByRole('link', { name: /Spiel suchen/ })
      .dispatchEvent(
        new MouseEvent('click', { bubbles: true, cancelable: true }),
      )
    // noch im Klick, bevor die Suchseite gerendert ist
    expect(screen.queryByRole('searchbox')).toBeNull()
    expect(document.activeElement?.tagName).toBe('INPUT')
    expect(
      await screen.findByRole('searchbox', { name: 'Spiele suchen' }),
    ).toHaveFocus()
    await waitFor(
      () => expect(document.querySelectorAll('input')).toHaveLength(1),
      { timeout: 1500 },
    )
  })
})

describe('Kategorie-Seite', () => {
  it('zeigt Kopf, Spiele und die Kategorien derselben Welt', async () => {
    const router = renderAt('/')
    await userEvent.click(screen.getByRole('link', { name: /Ruhe\s*33/ }))
    expect(router.state.location.pathname).toBe('/k/ruhe')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Ruhe' }),
    ).toBeVisible()
    expect(screen.getByText('33 Spiele')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ruhe' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    // nur die fünf Kategorien von „Alltag & Familie“
    expect(screen.getByRole('link', { name: 'Kochen & Backen' })).toBeVisible()
    expect(screen.queryByRole('link', { name: 'Bewegung' })).toBeNull()
  })

  it('wechselt per Wisch zur nächsten Kategorie der Welt, mit Umlauf', () => {
    const router = renderAt('/k/ruhe')
    const liste = screen.getByTestId('spiele-liste')
    swipe(liste, 300, 400, 80, 410)
    expect(router.state.location.pathname).toBe('/k/kochen')
    swipe(liste, 80, 400, 300, 395)
    expect(router.state.location.pathname).toBe('/k/ruhe')
    swipe(liste, 200, 500, 230, 100)
    expect(router.state.location.pathname).toBe('/k/ruhe')
  })

  it('leitet unbekannte Kategorien auf Entdecken um und hat einen Zurück-Link', () => {
    const router = renderAt('/k/gibtsnicht')
    expect(router.state.location.pathname).toBe('/')
    renderAt('/k/lernen')
    expect(
      screen.getByRole('link', { name: 'Zurück zu Entdecken' }),
    ).toHaveAttribute('href', '/')
  })

  it('öffnet ein Spiel per Kartenklick als ?spiel=', async () => {
    const router = renderAt('/k/lernen')
    await userEvent.click(screen.getByRole('button', { name: /Farben-Jagd/ }))
    expect(router.state.location.search).toBe('?spiel=farben')
    expect(router.state.location.state).toEqual({ fromApp: true })
  })
})

describe('Suchen', () => {
  const input = () => screen.getByRole('searchbox', { name: 'Spiele suchen' })

  it('zeigt ohne Eingabe nur die Startansicht, keine Spieleliste', () => {
    renderAt('/suche')
    expect(screen.getByText('Spiele mit …')).toBeVisible()
    expect(screen.queryByTestId('treffer')).toBeNull()
    expect(screen.queryByRole('button', { name: /Farben-Jagd/ })).toBeNull()
  })

  it('gruppiert Filter-Treffer nach Kategorie und lädt schrittweise nach', async () => {
    renderAt('/suche?ort=drinnen')
    const total = GAMES.filter((g) =>
      matchGame(g, { ...EMPTY_FILTERS, place: 'drinnen' }),
    ).length
    expect(screen.getByTestId('treffer')).toHaveTextContent(`${total} Spiele`)
    expect(
      screen.getByRole('heading', { level: 2, name: /Bewegung/ }),
    ).toBeVisible()
    const cards = () =>
      screen.getAllByRole('button').filter((b) => b.closest('section'))
    expect(cards()).toHaveLength(30)
    await userEvent.click(
      screen.getByRole('button', {
        name: `Weitere Spiele anzeigen (${total - 30})`,
      }),
    )
    expect(cards()).toHaveLength(60)
  })

  it('erneutes Tippen auf „Suchen“ fokussiert das Suchfeld und behält die Suche', async () => {
    const router = renderAt('/suche?q=ballon&spiel=ballonhoch')
    await userEvent.click(nav().getByRole('link', { name: /Suchen/ }))
    expect(input()).toHaveFocus()
    expect(router.state.location.search).toBe('?q=ballon')
  })

  it('sucht tolerant, schreibt die Suche in die URL und schlägt Kategorien vor', async () => {
    const router = renderAt('/suche')
    await userEvent.type(input(), 'knobeln')
    expect(params(router).get('q')).toBe('knobeln')
    const expected = searchGames(GAMES, { ...EMPTY_FILTERS, q: 'knobeln' })
    expect(screen.getByTestId('treffer')).toHaveTextContent(
      `${expected.length} Spiele`,
    )
    expect(
      screen.getByRole('link', { name: 'Knobeln & Denken' }),
    ).toHaveAttribute('href', '/k/knobeln')
  })

  it('liest Suche und Filter aus der URL', () => {
    renderAt('/suche?q=ballon&stimmung=ruhig')
    expect(input()).toHaveValue('ballon')
    const expected = searchGames(GAMES, {
      ...EMPTY_FILTERS,
      q: 'ballon',
      mood: 'ruhig',
    })
    expect(screen.getByTestId('treffer')).toHaveTextContent(
      `${expected.length} Spiel`,
    )
    expect(
      screen.getByRole('button', { name: 'Filter Ruhig entfernen' }),
    ).toBeVisible()
  })

  it('Schnellfilter, Pillen und „Alle zurücksetzen“', async () => {
    const router = renderAt('/suche')
    await userEvent.click(screen.getByRole('button', { name: 'Sofort' }))
    await userEvent.click(screen.getByRole('button', { name: 'Drinnen' }))
    expect(params(router).get('sofort')).toBe('1')
    expect(params(router).get('ort')).toBe('drinnen')
    expect(screen.getByRole('button', { name: 'Sofort' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: '⚙️ Filter (2)' })).toBeVisible()
    await userEvent.click(
      screen.getByRole('button', { name: 'Filter Drinnen entfernen' }),
    )
    expect(params(router).get('ort')).toBeNull()
    await userEvent.click(screen.getByRole('button', { name: 'Wild' }))
    await userEvent.click(
      screen.getByRole('button', { name: 'Alle zurücksetzen' }),
    )
    expect(router.state.location.search).toBe('')
  })

  it('schlägt bei null Treffern vor, was man lockern kann', async () => {
    const router = renderAt('/suche?q=xyzxyz&sofort=1')
    expect(screen.getByText(/Keine Spiele passen zu „xyzxyz“/)).toBeVisible()
    const n = GAMES.filter((g) =>
      matchGame(g, { ...EMPTY_FILTERS, sofort: true }),
    ).length
    await userEvent.click(
      screen.getByRole('button', {
        name: `Ohne Suchwort „xyzxyz“: ${n} Spiele`,
      }),
    )
    expect(router.state.location.search).toBe('?sofort=1')
  })

  it('Filter-Sheet: wirkt sofort, zeigt die Anzahl und schliesst', async () => {
    const router = renderAt('/suche')
    await userEvent.click(screen.getByRole('button', { name: '⚙️ Filter' }))
    const sheet = screen.getByRole('dialog', { name: 'Filter' })
    await userEvent.click(within(sheet).getByRole('button', { name: '3 J.' }))
    await userEvent.click(
      within(sheet).getByRole('button', { name: 'Bis 10 Min.' }),
    )
    expect(params(router).get('alter')).toBe('3')
    expect(params(router).get('dauer')).toBe('10')
    const n = GAMES.filter((g) =>
      matchGame(g, { ...EMPTY_FILTERS, age: 3, dur: 10 }),
    ).length
    await userEvent.click(
      within(sheet).getByRole('button', { name: `${n} Spiele anzeigen` }),
    )
    expect(screen.queryByRole('dialog', { name: 'Filter' })).toBeNull()
    expect(screen.getByRole('button', { name: '⚙️ Filter (2)' })).toBeVisible()
  })

  it('Filter-Sheet: Material gruppiert und durchsuchbar, Escape schliesst', async () => {
    const router = renderAt('/suche')
    await userEvent.click(screen.getByRole('button', { name: '⚙️ Filter' }))
    const sheet = screen.getByRole('dialog', { name: 'Filter' })
    expect(within(sheet).getByText('Küche & Essen')).toBeVisible()
    await userEvent.type(
      within(sheet).getByRole('searchbox', { name: 'Material suchen' }),
      'kuche',
    )
    expect(within(sheet).queryByRole('button', { name: 'Ball' })).toBeNull()
    await userEvent.click(
      within(sheet).getByRole('button', { name: 'Küchenwaage' }),
    )
    expect(params(router).get('hab')).toBe('Küchenwaage')
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Filter' })).toBeNull()
  })

  it('sortiert nach Dauer', async () => {
    const router = renderAt('/suche?q=ball')
    await userEvent.selectOptions(
      screen.getByRole('combobox', { name: 'Sortierung' }),
      'kurz',
    )
    expect(params(router).get('sort')).toBe('kurz')
  })

  it('merkt sich Suchbegriffe und behält die Suche beim Öffnen eines Spiels', async () => {
    const router = renderAt('/suche')
    await userEvent.type(input(), 'ballon{Enter}')
    await userEvent.click(screen.getAllByRole('button', { name: /Ballon/ })[0])
    expect(params(router).get('q')).toBe('ballon')
    expect(params(router).get('spiel')).toBeTruthy()
    await act(() => router.navigate('/'))
    await act(() => router.navigate('/suche'))
    await userEvent.click(screen.getByRole('button', { name: '🕘 ballon' }))
    expect(params(router).get('q')).toBe('ballon')
  })
})

describe('Menüleiste', () => {
  it('hat Entdecken, Suchen, Zufall, Wunsch und Favoriten', () => {
    renderAt('/k/lernen')
    expect(nav().getByRole('link', { name: /Entdecken/ })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(nav().getByRole('link', { name: /Suchen/ })).toHaveAttribute(
      'href',
      '/suche',
    )
    expect(nav().getByRole('link', { name: /Wunsch/ })).toHaveAttribute(
      'href',
      '/zufall',
    )
    expect(nav().getByRole('link', { name: /Favoriten/ })).toBeVisible()
    expect(nav().getByRole('button', { name: /Zufall/ })).toBeVisible()
  })

  it('Zufall wählt aus der aktuellen Liste', async () => {
    const router = renderAt('/k/karten')
    await userEvent.click(nav().getByRole('button', { name: /Zufall/ }))
    expect(getGame(params(router).get('spiel')!)?.category).toBe('karten')
  })

  it('gedrückt halten öffnet „Was spielen wir?“', () => {
    vi.useFakeTimers()
    const router = renderAt('/')
    const dice = nav().getByRole('button', { name: /Zufall/ })
    fireEvent.pointerDown(dice)
    act(() => vi.advanceTimersByTime(LONG_PRESS + 10))
    fireEvent.pointerUp(dice)
    fireEvent.click(dice)
    vi.useRealTimers()
    expect(router.state.location.pathname).toBe('/zufall')
    expect(router.state.location.search).toBe('')
  })

  it('leitet unbekannte Pfade auf / um', () => {
    const router = renderAt('/sticker')
    expect(router.state.location.pathname).toBe('/')
  })
})

describe('Wunsch: Was spielen wir?', () => {
  it('findet ein passendes Spiel und öffnet es', async () => {
    const router = renderAt('/zufall')
    expect(
      screen.getByRole('button', { name: /Spiel finden/ }),
    ).toHaveTextContent(`${GAMES.length} passende Spiele`)
    await userEvent.click(
      screen.getByRole('button', { name: '⚡ Nein, sofort los' }),
    )
    await userEvent.click(
      screen.getByRole('button', { name: '🤫 Zur Ruhe kommen' }),
    )
    const pool = GAMES.filter((g) =>
      matchGame(g, { ...EMPTY_FILTERS, sofort: true, mood: 'ruhig' }),
    )
    expect(
      screen.getByRole('button', { name: /Spiel finden/ }),
    ).toHaveTextContent(`${pool.length} passende Spiele`)
    await userEvent.click(screen.getByRole('button', { name: /Spiel finden/ }))
    expect(
      screen.getByRole('button', { name: /Nochmal würfeln/ }),
    ).toBeVisible()
    await userEvent.click(screen.getByRole('button', { name: '▶ Los geht’s' }))
    const id = params(router).get('spiel')!
    expect(pool.map((g) => g.id)).toContain(id)
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
    await userEvent.click(nav().getByRole('button', { name: /Zufall/ }))
    expect(router.state.location.search).toBe('?spiel=kim')
  })

  it('zeigt zuletzt angesehene Spiele', () => {
    useProgress.getState().addRecent('farben')
    renderAt('/favoriten')
    expect(
      screen.getByRole('heading', { name: '🕘 Zuletzt angesehen' }),
    ).toBeVisible()
    expect(screen.getByRole('button', { name: /Farben-Jagd/ })).toBeVisible()
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

  it('behält beim Öffnen andere Parameter', async () => {
    const router = make('/suche?q=ball')
    render(<RouterProvider router={router} />)
    await userEvent.click(screen.getByText('open'))
    expect(router.state.location.search).toBe('?q=ball&spiel=kim')
  })

  it('entfernt bei Deep-Link nur den Parameter per replace', async () => {
    const router = make('/suche?q=ball&spiel=kim')
    render(<RouterProvider router={router} />)
    await userEvent.click(screen.getByText('close'))
    expect(screen.getByRole('status')).toHaveTextContent(/^\/suche\?q=ball$/)
    expect(router.state.historyAction).toBe('REPLACE')
  })
})
