import { defineGame } from '../types'

export default defineGame({
  id: 'becherkartenturm',
  title: 'Becher-Karten-Turm',
  emoji: '🏰',
  category: 'ruhe',
  minAge: 5,
  minutes: 15,
  items: ['Becher', 'Karton'],
  tags: ['allein', 'leise'],
  order: 320,
  steps: [
    'Schneidet Karton in gleich grosse Karten, etwas grösser als die Becheröffnung.',
    'Stellt einen Becher hin, legt eine Karte darauf, darauf den nächsten Becher …',
    'Wie hoch wird euer Turm?',
    'Schwieriger: drei Becher nebeneinander pro Stockwerk.',
  ],
  learn: 'Ruhige Hände, Gleichgewicht und Bauen.',
})
