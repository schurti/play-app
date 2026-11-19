import { defineGame } from '../types'

export default defineGame({
  id: 'zahlraten',
  title: 'Zahl erraten',
  emoji: '🔢',
  category: 'unterwegs',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 110,
  steps: [
    'Eine Person denkt sich eine Zahl zwischen 1 und 20.',
    'Die anderen raten. Antwort: „grösser“ oder „kleiner“.',
    'Wie viele Versuche braucht ihr?',
    'Schwieriger: bis 100.',
  ],
  learn: 'Zahlen vergleichen und clever eingrenzen.',
})
