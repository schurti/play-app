import { defineGame } from '../types'

export default defineGame({
  id: 'kissentransport',
  title: 'Kissen-Transport',
  emoji: '🛋️',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: ['Kissen'],
  tags: ['allein', 'gruppe'],
  order: 180,
  steps: [
    'Klemmt ein Kissen zwischen die Knie.',
    'Hüpft oder watschelt damit durch den Raum bis zur Ziellinie.',
    'Fällt es herunter, geht es von vorne los.',
    'Schafft ihr es auch rückwärts?',
  ],
  learn: 'Gleichgewicht und Koordination.',
})
