import { defineGame } from '../types'

export default defineGame({
  id: 'kartenhaus',
  title: 'Kartenhaus',
  emoji: '🏠',
  category: 'karten',
  minAge: 6,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['allein', 'leise'],
  order: 30,
  steps: [
    'Lehnt zwei Karten oben gegeneinander – ein Dach.',
    'Baut daneben ein zweites Dach und legt eine Karte flach darüber.',
    'Darauf das nächste Stockwerk.',
    'Wie hoch wird euer Kartenhaus?',
  ],
  learn: 'Ruhige Hände und Geduld.',
})
