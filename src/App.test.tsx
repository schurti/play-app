import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { routes } from './router'

describe('App', () => {
  it('zeigt den Titel', () => {
    render(<RouterProvider router={createMemoryRouter(routes)} />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Haushalts-\s*Spielplatz/ }),
    ).toBeInTheDocument()
  })
})
