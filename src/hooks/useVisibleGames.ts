import { useMemo } from 'react'
import { matchPath, useLocation } from 'react-router'
import { GAMES } from '../games'
import { isCategoryId } from '../games/categories'
import type { Game } from '../games/types'
import { parseFilters, searchGames } from '../lib/filter'
import { useProgress } from '../store/progress'

/**
 * Die Spiele, die auf der aktuellen Seite zu sehen sind – für Zufall und
 * zum Blättern im Spiel-Dialog. Leitet alles aus der URL ab.
 */
export function useVisibleGames(): readonly Game[] {
  const { pathname, search } = useLocation()
  const fav = useProgress((s) => s.fav)
  return useMemo(() => {
    const cat = matchPath('/k/:cat', pathname)?.params.cat
    if (isCategoryId(cat)) return GAMES.filter((g) => g.category === cat)
    if (pathname === '/suche')
      return searchGames(GAMES, parseFilters(new URLSearchParams(search)))
    if (pathname === '/favoriten') return GAMES.filter((g) => fav[g.id])
    return GAMES
  }, [pathname, search, fav])
}
