import { defineGame } from '../types'

export default defineGame({
  id: 'schlaflied',
  title: 'Kuscheltier-Schlaflied',
  emoji: '🧸',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: ['Kuscheltier'],
  tags: ['allein', 'leise'],
  order: 230,
  steps: [
    'Nehmt ein Kuscheltier in den Arm.',
    'Erfindet ein ganz leises Lied für es – auch nur mit „La-le-lu“.',
    'Wiegt es dabei langsam hin und her.',
    'Wird das Lied immer leiser, bis das Kuscheltier schläft?',
  ],
  learn: 'Melodien erfinden und zur Ruhe kommen.',
})
