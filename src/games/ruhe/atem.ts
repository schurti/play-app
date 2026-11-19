import { defineGame } from '../types'

export default defineGame({
  id: 'atem',
  title: 'Atem-Ballon',
  emoji: '🎈',
  category: 'ruhe',
  minAge: 3,
  minutes: 5,
  items: [],
  tags: ['allein', 'leise'],
  order: 10,
  steps: [
    'Setzt euch bequem hin.',
    'Atmet ein, wenn der Kreis grösser wird – wie ein Ballon.',
    'Atmet aus, wenn er kleiner wird.',
    'Fünf Runden schaffen!',
  ],
  learn: 'Ruhig werden und den eigenen Atem spüren.',
  tool: 'breath',
})
