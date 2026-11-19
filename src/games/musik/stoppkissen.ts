import { defineGame } from '../types'

export default defineGame({
  id: 'stoppkissen',
  title: 'Stopp-Kissen',
  emoji: '🪑',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: ['Kissen'],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Legt für jedes Kind ein Kissen in einen Kreis.',
    'Startet die Musik in der App und tanzt um die Kissen.',
    'Hört die Musik auf, setzt sich jeder auf ein Kissen.',
    'Jede Runde wird ein Kissen weggenommen – aber niemand scheidet aus: Alle müssen sich irgendwie die Kissen teilen!',
  ],
  learn: 'Zuhören, reagieren und zusammenhalten.',
  tool: 'dance',
})
