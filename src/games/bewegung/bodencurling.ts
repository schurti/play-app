import { defineGame } from '../types'

export default defineGame({
  id: 'bodencurling',
  title: 'Boden-Curling',
  emoji: '🥌',
  category: 'bewegung',
  minAge: 4,
  minutes: 15,
  items: ['Klebeband', 'Socken'],
  tags: ['gruppe'],
  order: 390,
  steps: [
    'Klebt ein Ziel-Quadrat oder drei Kreise ineinander auf den Boden.',
    'Rollt Socken zu Bällen oder nehmt Becher als „Steine“.',
    'Schiebt sie von einer Startlinie über den Boden ins Ziel.',
    'In der Mitte gibt es 3 Punkte, aussen 1. Wer hat am meisten?',
  ],
  learn: 'Kraft dosieren, zielen und zählen.',
})
