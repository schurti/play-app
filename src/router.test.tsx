import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider, type RouteObject } from 'react-router'
import { routes } from './router'

function Boom(): never {
  throw new Error('kaputt')
}

describe('Fehleransicht', () => {
  it('zeigt bei einem Fehler im Kind die deutsche Fehlerseite statt der englischen', async () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const [layout] = routes
    const withBoom: RouteObject[] = [
      {
        element: layout.element,
        errorElement: layout.errorElement,
        children: [{ path: 'boom', element: <Boom /> }],
      },
    ]
    render(<RouterProvider router={createMemoryRouter(withBoom, { initialEntries: ['/boom'] })} />)
    expect(screen.getByText('Hoppla, da ist etwas schiefgelaufen.')).toBeInTheDocument()
    expect(screen.queryByText(/Unexpected Application Error/)).not.toBeInTheDocument()

    const reload = vi.fn()
    vi.stubGlobal('location', { ...window.location, reload })
    await userEvent.click(screen.getByRole('button', { name: '🔄 Neu laden' }))
    expect(reload).toHaveBeenCalled()
    vi.unstubAllGlobals()
    spy.mockRestore()
  })
})
