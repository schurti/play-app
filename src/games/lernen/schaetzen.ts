import { defineGame } from '../types'

export default defineGame({
  id: 'schaetzen',
  title: 'Schätz-König',
  emoji: '🍝',
  category: 'lernen',
  minAge: 6,
  minutes: 15,
  items: ['Nudeln', 'Schüssel'],
  tags: ['allein', 'gruppe'],
  order: 80,
  steps: [
    'Jeder nimmt eine Handvoll Nudeln.',
    'Schätzt, wie viele es sind, und merkt euch die Zahl.',
    'Zählt sie in Zehner-Häufchen.',
    'Wer am nächsten dran war, gewinnt.',
  ],
  learn: 'Schätzen und Zehner bündeln.',
})
