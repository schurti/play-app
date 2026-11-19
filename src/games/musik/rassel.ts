import { defineGame } from '../types'

export default defineGame({
  id: 'rassel',
  title: 'Reis-Rassel',
  emoji: '🎊',
  category: 'musik',
  minAge: 3,
  minutes: 15,
  items: ['Becher', 'Reis', 'Klebeband'],
  tags: ['allein'],
  order: 30,
  steps: [
    'Füllt etwas Reis in einen Becher.',
    'Stülpt einen zweiten Becher darüber und klebt alles gut zu.',
    'Baut mehrere Rasseln mit Reis, Nudeln oder Linsen.',
    'Wie klingen sie unterschiedlich?',
  ],
  learn: 'Klänge vergleichen.',
})
