import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ComponentType } from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { GAMES } from '../games'
import { routes } from '../router'
import { noise, speak, tone } from '../lib/audio'
import type { ToolId } from './ids'
import { TOOLS } from './registry'
import type { ToolProps } from './ToolProps'

vi.mock('../lib/audio', () => ({
  tone: vi.fn(),
  noise: vi.fn(),
  speak: vi.fn(),
  stopSpeech: vi.fn(),
  audioContext: vi.fn(),
}))

function renderTool(id: ToolId, random = 0) {
  vi.spyOn(Math, 'random').mockReturnValue(random)
  const Tool = TOOLS[id] as ComponentType<ToolProps>
  expect(Tool).toBeDefined()
  render(<Tool game={GAMES[0]} color="#123456" />)
}

const user = () => userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
  vi.mocked(tone).mockClear()
  vi.mocked(noise).mockClear()
  vi.mocked(speak).mockClear()
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

describe('commands', () => {
  it('nächster Befehl zeigt Kommando und Befehl', async () => {
    renderTool('commands')
    expect(await screen.findByText('Bereit? 🫡')).toBeInTheDocument()
    await user().click(
      screen.getByRole('button', { name: '➡️ Nächster Befehl' }),
    )
    expect(screen.getByText('✅ Kommando:')).toBeInTheDocument()
    expect(screen.getByText(/Hüpf auf einem Bein!/)).toBeInTheDocument()
  })

  it('ohne Kommando bei Zufall ab 0.65', async () => {
    renderTool('commands', 0.7)
    await user().click(
      await screen.findByRole('button', { name: '➡️ Nächster Befehl' }),
    )
    expect(screen.getByText('❌ (ohne Kommando)')).toBeInTheDocument()
  })

  it('automatisch wechselt alle 4500 ms und pausiert', async () => {
    const u = user()
    renderTool('commands')
    await u.click(await screen.findByRole('button', { name: '▶ Automatisch' }))
    expect(screen.getByRole('button', { name: '⏸ Pause' })).toBeInTheDocument()
    const before = vi.mocked(tone).mock.calls.length
    await act(async () => {
      await vi.advanceTimersByTimeAsync(4500)
    })
    expect(vi.mocked(tone).mock.calls.length).toBe(before + 1)
    await u.click(screen.getByRole('button', { name: '⏸ Pause' }))
    expect(
      screen.getByRole('button', { name: '▶ Automatisch' }),
    ).toBeInTheDocument()
    await act(async () => {
      await vi.advanceTimersByTimeAsync(9000)
    })
    expect(vi.mocked(tone).mock.calls.length).toBe(before + 1)
  })

  it('Vorlesen schaltet um und spricht', async () => {
    const u = user()
    renderTool('commands')
    await u.click(
      await screen.findByRole('button', { name: '🔇 Vorlesen aus' }),
    )
    expect(
      screen.getByRole('button', { name: '🔊 Vorlesen an' }),
    ).toBeInTheDocument()
    expect(speak).toHaveBeenCalledWith('Los geht’s!')
  })
})

describe('dance', () => {
  it('Musik starten spielt Töne, Stopp beendet sie', async () => {
    const u = user()
    renderTool('dance')
    expect(await screen.findByText('Bereit zum Tanzen?')).toBeInTheDocument()
    expect(
      screen.getByText('Ton am Handy einschalten! Die Musik stoppt zufällig.'),
    ).toBeInTheDocument()
    await u.click(screen.getByRole('button', { name: '▶ Musik starten' }))
    expect(screen.getByRole('button', { name: '■ Stopp' })).toBeInTheDocument()
    await act(async () => {
      await vi.advanceTimersByTimeAsync(230)
    })
    expect(tone).toHaveBeenCalled()
    expect(screen.getByText('💃 TANZEN! 🕺')).toBeInTheDocument()
    await u.click(screen.getByRole('button', { name: '■ Stopp' }))
    expect(
      screen.getByRole('button', { name: '▶ Musik starten' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Pause')).toBeInTheDocument()
    vi.mocked(tone).mockClear()
    await act(async () => {
      await vi.advanceTimersByTimeAsync(2000)
    })
    expect(tone).not.toHaveBeenCalled()
  })

  it('wechselt nach der Tanzphase zu STOPP', async () => {
    renderTool('dance')
    await user().click(
      await screen.findByRole('button', { name: '▶ Musik starten' }),
    )
    await act(async () => {
      await vi.advanceTimersByTimeAsync(230 + 3000 + 230)
    })
    expect(screen.getByText('🧊 STOPP! Einfrieren!')).toBeInTheDocument()
  })
})

describe('rhythm', () => {
  it('zeigt ein Muster aus 3 bis 6 Symbolen', async () => {
    renderTool('rhythm')
    const beats = await screen.findAllByTestId('beat')
    expect(beats).toHaveLength(3)
    beats.forEach((b) => expect(['👏', '🦶', '🥁']).toContain(b.textContent))
  })

  it('höchste Zufallszahl ergibt 6 Symbole', async () => {
    renderTool('rhythm', 0.99)
    expect(await screen.findAllByTestId('beat')).toHaveLength(6)
  })

  it('Vorspielen spielt die Schläge im Abstand von 520 ms', async () => {
    const u = user()
    renderTool('rhythm')
    await u.click(await screen.findByRole('button', { name: '▶ Vorspielen' }))
    expect(noise).toHaveBeenCalledTimes(1)
    expect(screen.getAllByTestId('beat')[0].className).toMatch(/hit/)
    await act(async () => {
      await vi.advanceTimersByTimeAsync(250)
    })
    expect(screen.getAllByTestId('beat')[0].className).not.toMatch(/hit/)
    await act(async () => {
      await vi.advanceTimersByTimeAsync(520)
    })
    expect(noise).toHaveBeenCalledTimes(2)
    expect(
      screen.getByRole('button', { name: '🔄 Neues Muster' }),
    ).toBeInTheDocument()
  })
})

describe('breath', () => {
  it('läuft 5 Runden und endet mit Nochmal', async () => {
    const u = user()
    renderTool('breath')
    expect(await screen.findByText('Tippe auf Start')).toBeInTheDocument()
    await u.click(screen.getByRole('button', { name: '▶ Start' }))
    expect(screen.getByText('Einatmen … (1/5)')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '⏸ Stopp' })).toBeInTheDocument()
    await act(async () => {
      await vi.advanceTimersByTimeAsync(4000)
    })
    expect(screen.getByText('Ausatmen … (1/5)')).toBeInTheDocument()
    await act(async () => {
      await vi.advanceTimersByTimeAsync(4000 * 9)
    })
    expect(screen.getByText('Super entspannt! 🌟')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: '▶ Nochmal' }),
    ).toBeInTheDocument()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('Stopp hält an', async () => {
    const u = user()
    renderTool('breath')
    await u.click(await screen.findByRole('button', { name: '▶ Start' }))
    await u.click(screen.getByRole('button', { name: '⏸ Stopp' }))
    expect(screen.getByRole('button', { name: '▶ Start' })).toBeInTheDocument()
    expect(vi.getTimerCount()).toBe(0)
  })
})

describe('draw', () => {
  it('hat Zeichenfläche, 10 Farben, Stärken und Neu', async () => {
    renderTool('draw')
    expect(await screen.findByTestId('canvas')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Farbe' })).toHaveLength(10)
    for (const n of ['dünn', 'mittel', 'dick', '🗑️ Neu']) {
      expect(screen.getByRole('button', { name: n })).toBeInTheDocument()
    }
    expect(screen.getByText('Weiss = Radiergummi')).toBeInTheDocument()
    await user().click(screen.getAllByRole('button', { name: 'Farbe' })[3])
    expect(
      screen.getAllByRole('button', { name: 'Farbe' })[3].className,
    ).toMatch(/on/)
  })
})

describe('Schliessen stoppt Ton und Sprache (Review Focus 2)', () => {
  function renderAt(path: string) {
    render(
      <RouterProvider
        router={createMemoryRouter(routes, { initialEntries: [path] })}
      />,
    )
  }

  it('stopptanz: nach dem Schliessen keine Töne mehr', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    const u = user()
    renderAt('/?spiel=stopptanz')
    await u.click(
      await screen.findByRole('button', { name: '▶ Musik starten' }),
    )
    await act(async () => {
      await vi.advanceTimersByTimeAsync(500)
    })
    expect(tone).toHaveBeenCalled()
    await u.click(screen.getByRole('button', { name: 'Schliessen' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    vi.mocked(tone).mockClear()
    await act(async () => {
      await vi.advanceTimersByTimeAsync(5000)
    })
    expect(tone).not.toHaveBeenCalled()
  })

  it('kommando: nach dem Schliessen keine Sprache mehr', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    const u = user()
    renderAt('/?spiel=kommando')
    await u.click(
      await screen.findByRole('button', { name: '🔇 Vorlesen aus' }),
    )
    await u.click(screen.getByRole('button', { name: '▶ Automatisch' }))
    expect(speak).toHaveBeenCalled()
    await u.click(screen.getByRole('button', { name: 'Schliessen' }))
    vi.mocked(speak).mockClear()
    vi.mocked(tone).mockClear()
    await act(async () => {
      await vi.advanceTimersByTimeAsync(5000)
    })
    expect(speak).not.toHaveBeenCalled()
    expect(tone).not.toHaveBeenCalled()
  })
})
