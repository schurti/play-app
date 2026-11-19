import { defineGame } from '../types'

export default defineGame({
  id: 'luftzahlen',
  title: 'Zahlen in der Luft',
  emoji: '☝️',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 350,
  steps: [
    'Eine Person schreibt eine Zahl gross mit dem Finger in die Luft.',
    'Die anderen raten.',
    'Schwieriger: auf den Rücken schreiben.',
    'Dann tauschen.',
  ],
  learn: 'Ziffernformen erkennen und merken.',
})
