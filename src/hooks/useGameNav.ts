import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'

/** Ein offenes Spiel ist der Such-Parameter `?spiel=<id>` auf jeder Route. */
export function useGameNav(): {
  openGame(id: string): void
  closeGame(): void
} {
  const navigate = useNavigate()
  const location = useLocation()
  const fromApp = Boolean(
    (location.state as { fromApp?: boolean } | null)?.fromApp,
  )

  // Andere Parameter (Suche, Filter) bleiben erhalten.
  const openGame = useCallback(
    (id: string) => {
      const params = new URLSearchParams(location.search)
      params.set('spiel', id)
      navigate({ search: '?' + params }, { state: { fromApp: true } })
    },
    [navigate, location.search],
  )

  const closeGame = useCallback(() => {
    if (fromApp) {
      navigate(-1)
      return
    }
    const params = new URLSearchParams(location.search)
    params.delete('spiel')
    const search = params.toString()
    navigate({ search: search ? '?' + search : '' }, { replace: true })
  }, [navigate, fromApp, location.search])

  return { openGame, closeGame }
}
