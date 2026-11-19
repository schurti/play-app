import { defineGame } from '../types'

export default defineGame({
  id: 'kuschelschaukel',
  title: 'Kuscheltier-Schaukel',
  emoji: '🧸',
  category: 'ruhe',
  minAge: 3,
  minutes: 5,
  items: ['Kuscheltier'],
  tags: ['allein', 'leise'],
  order: 20,
  steps: [
    'Legt euch auf den Rücken.',
    'Setzt ein Kuscheltier auf den Bauch.',
    'Atmet langsam, sodass das Kuscheltier sanft schaukelt.',
    'Zählt zehn Atemzüge.',
  ],
  learn: 'Bauchatmung und Entspannung.',
})
