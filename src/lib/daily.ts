import type { Game, Season } from '../games/types'

const MS_PER_DAY = 864e5

export const SEASON_LABEL: Record<Season, { name: string; emoji: string }> = {
  fruehling: { name: 'Frühling', emoji: '🌷' },
  sommer: { name: 'Sommer', emoji: '☀️' },
  herbst: { name: 'Herbst', emoji: '🍂' },
  winter: { name: 'Winter', emoji: '❄️' },
}

/** Meteorologische Jahreszeit: März–Mai Frühling, Juni–August Sommer usw. */
export function seasonOf(date: Date): Season {
  const m = date.getMonth()
  if (m >= 2 && m <= 4) return 'fruehling'
  if (m >= 5 && m <= 7) return 'sommer'
  if (m >= 8 && m <= 10) return 'herbst'
  return 'winter'
}

export const fitsSeason = (g: Game, s: Season) => !!g.seasons?.includes(s)

/**
 * Spiel des Tages: gleiches Spiel für den ganzen lokalen Kalendertag.
 * Jeden zweiten Tag kommt ein Spiel zur aktuellen Jahreszeit, sonst ein
 * ganzjähriges. Spiele, die nur zu einer anderen Jahreszeit passen, kommen nie.
 */
export function gameOfTheDay(games: readonly Game[], date: Date): Game {
  const day = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / MS_PER_DAY,
  )
  const season = seasonOf(date)
  const seasonal = games.filter((g) => fitsSeason(g, season))
  const yearRound = games.filter((g) => !g.seasons?.length)
  const pool = day % 2 === 0 && seasonal.length ? seasonal : yearRound
  return pool[Math.floor(day / 2) % pool.length]
}
