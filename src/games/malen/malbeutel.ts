import { defineGame } from '../types'

export default defineGame({
  id: 'malbeutel',
  title: 'Malen im Beutel',
  emoji: '🛍️',
  category: 'malen',
  minAge: 1,
  minutes: 10,
  items: ['Farbe', 'Klebeband'],
  tags: ['allein', 'leise'],
  order: 260,
  steps: [
    'Gebt ein paar Kleckse Farbe in einen Gefrierbeutel und verschliesst ihn gut.',
    'Klebt ihn mit Klebeband auf den Tisch.',
    'Das Kind drückt und streicht mit den Fingern die Farben herum – ganz ohne Sauerei.',
  ],
  learn: 'Farben mischen und tasten, ganz sauber.',
})
