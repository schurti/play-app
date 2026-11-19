import type { Game } from '../games/types'

const MS_PER_DAY = 864e5

/** Spiel des Tages: gleiches Spiel für den ganzen lokalen Kalendertag. */
export function gameOfTheDay(games: readonly Game[], date: Date): Game {
  const day = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / MS_PER_DAY,
  )
  return games[day % games.length]
}
