import { defineGame } from '../types'

export default defineGame({
  id: 'kissenberg',
  title: 'Kissenberg',
  emoji: '⛰️',
  category: 'bewegung',
  minAge: 1,
  minutes: 15,
  items: ['Kissen', 'Decke'],
  tags: ['allein'],
  order: 460,
  steps: [
    'Baut aus Sofakissen und Decken einen weichen Berg.',
    'Das Kind krabbelt hinauf und rutscht hinunter.',
    'Versteckt ein Kuscheltier oben als Ziel.',
  ],
  learn: 'Krabbeln, klettern und Gleichgewicht.',
  adultNote: 'Auf weichem Boden spielen und dabeibleiben.',
})
