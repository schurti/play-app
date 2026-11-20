import { defineGame } from '../types'

export default defineGame({
  id: 'gefuehlsgesichter',
  title: 'Gefühle-Gesichter',
  emoji: '😊',
  category: 'gefuehle',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 10,
  steps: [
    'Zeichnet leere Kreise als Gesichter.',
    'Eine Person holt sich heimlich ein Gefühl aus der App und malt es in ein Gesicht.',
    'Die anderen raten das Gefühl.',
    'Erzählt: Wann habt ihr euch zuletzt so gefühlt?',
  ],
  learn: 'Gefühle erkennen, benennen und darüber reden.',
  tool: 'term',
})
