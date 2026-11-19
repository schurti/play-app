import { defineGame } from '../types'

export default defineGame({
  id: 'countdown',
  title: 'Raketen-Countdown',
  emoji: '🚀',
  category: 'lernen',
  minAge: 3,
  minutes: 5,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 250,
  steps: [
    'Kauert euch klein wie eine Rakete auf der Startrampe.',
    'Zählt zusammen rückwärts: 10, 9, 8 …',
    'Bei 0 ruft ihr „Start!“ und springt so hoch ihr könnt.',
    'Dann landet ihr ganz sanft auf dem Mond.',
  ],
  learn: 'Rückwärts zählen und Zahlenreihen festigen.',
  variants:
    'Schwieriger: von 20 rückwärts zählen oder nur jede zweite Zahl sagen.',
})
