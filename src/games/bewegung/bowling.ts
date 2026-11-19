import { defineGame } from '../types'

export default defineGame({
  id: 'bowling',
  title: 'Becher-Bowling',
  emoji: '🎳',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: ['Becher', 'Socken'],
  tags: ['allein', 'gruppe'],
  order: 100,
  steps: [
    'Stellt Becher als Pyramide oder Kegel auf.',
    'Rollt einen Socken-Ball darauf zu.',
    'Zählt, wie viele umfallen.',
  ],
  learn: 'Zielen und Zählen.',
})
