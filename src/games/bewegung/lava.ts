import { defineGame } from '../types'

export default defineGame({
  id: 'lava',
  title: 'Der Boden ist Lava',
  emoji: '🌋',
  category: 'bewegung',
  minAge: 3,
  minutes: 15,
  items: ['Kissen'],
  tags: ['allein', 'gruppe'],
  order: 20,
  steps: [
    'Legt Kissen als Inseln durch den Raum.',
    'Der Boden ist heisse Lava!',
    'Springt von Insel zu Insel, ohne den Boden zu berühren.',
    'Jede Runde die Inseln etwas weiter auseinanderlegen.',
  ],
  learn: 'Gleichgewicht und Planen.',
})
