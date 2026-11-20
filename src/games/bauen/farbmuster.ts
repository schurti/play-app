import { defineGame } from '../types'

export default defineGame({
  id: 'farbmuster',
  title: 'Farb-Muster-Turm',
  emoji: '🌈',
  category: 'bauen',
  minAge: 3,
  minutes: 10,
  items: ['Duplo'],
  tags: ['allein', 'leise'],
  order: 110,
  steps: [
    'Baut einen Turm mit einem Muster: rot, blau, rot, blau …',
    'Wie geht es weiter? Das Kind setzt den nächsten Stein.',
    'Schwieriger: rot, rot, gelb, rot, rot, gelb …',
    'Jetzt erfindet das Kind ein Muster für euch.',
  ],
  learn: 'Muster erkennen und fortsetzen, Vorstufe zum Rechnen.',
})
