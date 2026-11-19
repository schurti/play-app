import { defineGame } from '../types'

export default defineGame({
  id: 'gefuehlsgesichter',
  title: 'Gefühle-Gesichter',
  emoji: '😊',
  category: 'papier',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 170,
  steps: [
    'Zeichnet leere Kreise als Gesichter.',
    'Eine Person malt heimlich ein Gefühl hinein: fröhlich, traurig, wütend, überrascht, müde.',
    'Die anderen raten das Gefühl.',
    'Erzählt: Wann habt ihr euch zuletzt so gefühlt?',
  ],
  learn: 'Gefühle erkennen, benennen und darüber reden.',
})
