import { defineGame } from '../types'

export default defineGame({
  id: 'blaetterkrone',
  title: 'Blätter-Krone',
  emoji: '🍁',
  category: 'basteln',
  minAge: 3,
  minutes: 20,
  items: ['Karton', 'Klebeband'],
  tags: ['allein'],
  seasons: ['herbst'],
  order: 370,
  steps: [
    'Sammelt draussen bunte Herbstblätter.',
    'Schneidet einen Kartonstreifen, der um den Kopf passt.',
    'Klebt die Blätter rundherum fest, die grossen nach oben.',
    'Krone aufsetzen: Du bist der Herbstkönig oder die Herbstkönigin!',
  ],
  learn: 'Farben, Formen und Natur entdecken.',
})
