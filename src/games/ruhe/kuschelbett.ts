import { defineGame } from '../types'

export default defineGame({
  id: 'kuschelbett',
  title: 'Kuscheltier ins Bett bringen',
  emoji: '🛏️',
  category: 'ruhe',
  minAge: 3,
  minutes: 10,
  items: ['Kuscheltier', 'Tuch'],
  tags: ['allein', 'leise'],
  order: 220,
  steps: [
    'Macht dem Kuscheltier ein Bett aus einem Tuch.',
    'Erzählt ihm, was es heute erlebt hat.',
    'Deckt es zu und flüstert ihm „Gute Nacht“.',
    'Bleibt einen Moment ganz still daneben sitzen.',
  ],
  learn: 'Fürsorge, Rituale und Ruhe.',
})
