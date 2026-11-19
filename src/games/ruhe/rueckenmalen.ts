import { defineGame } from '../types'

export default defineGame({
  id: 'rueckenmalen',
  title: 'Rücken-Malen',
  emoji: '✍️',
  category: 'ruhe',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 110,
  steps: [
    'Eine Person sitzt mit dem Rücken zur anderen.',
    'Malt mit dem Finger eine einfache Form auf den Rücken: Kreis, Herz, Sonne.',
    'Die andere spürt genau hin und rät.',
    'Dann tauschen.',
  ],
  learn: 'Spüren, Konzentration und Formen erkennen.',
  variants: 'Schwieriger: Buchstaben oder Zahlen malen.',
})
