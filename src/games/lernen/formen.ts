import { defineGame } from '../types'

export default defineGame({
  id: 'formen',
  title: 'Formen-Suche',
  emoji: '🔺',
  category: 'lernen',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein'],
  order: 40,
  steps: [
    'Die App zeigt eine Form.',
    'Sucht etwas im Haus mit dieser Form.',
    'Fahrt mit dem Finger den Rand nach und zählt die Ecken.',
  ],
  learn: 'Formen erkennen und Ecken zählen.',
  tool: 'shape',
})
