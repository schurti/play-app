import { GAMES } from '../games'
import { gameOfTheDay } from './daily'

describe('gameOfTheDay', () => {
  it('wählt am 19.11.2026 «laser»', () => {
    expect(gameOfTheDay(GAMES, new Date(2026, 10, 19)).id).toBe('laser')
  })
  it('ist an einem Tag stabil, unabhängig von der Uhrzeit', () => {
    expect(gameOfTheDay(GAMES, new Date(2026, 10, 19, 23, 59)).id).toBe('laser')
  })
})
