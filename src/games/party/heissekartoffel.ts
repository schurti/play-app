import { defineGame } from '../types'

export default defineGame({
  id: 'heissekartoffel',
  title: 'Heisse Kartoffel',
  emoji: '🥔',
  category: 'party',
  minAge: 3,
  minutes: 10,
  items: ['Ball'],
  tags: ['gruppe'],
  order: 110,
  steps: [
    'Setzt euch in einen Kreis.',
    'Startet die Musik in der App und gebt den Ball schnell weiter – er ist heiss!',
    'Stoppt die Musik, wer den Ball hält, macht eine lustige Aufgabe.',
  ],
  learn: 'Reaktion und Gemeinschaft.',
  tool: 'dance',
})
