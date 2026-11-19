import { defineGame } from '../types'

export default defineGame({
  id: 'ballontanz',
  title: 'Ballon-Tanz',
  emoji: '🎈',
  category: 'party',
  minAge: 4,
  minutes: 10,
  items: ['Ballon'],
  tags: ['gruppe'],
  order: 70,
  steps: [
    'Zu zweit wird ein Ballon zwischen die Stirnen geklemmt.',
    'Startet die Musik und tanzt, ohne dass der Ballon fällt.',
    'Hände bleiben hinter dem Rücken!',
  ],
  learn: 'Koordination zu zweit.',
  adultNote: 'Geplatzte Ballonstücke sofort wegräumen.',
  tool: 'dance',
})
