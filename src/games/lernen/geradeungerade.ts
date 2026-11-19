import { defineGame } from '../types'

export default defineGame({
  id: 'geradeungerade',
  title: 'Gerade oder ungerade?',
  emoji: '🧦',
  category: 'lernen',
  minAge: 5,
  minutes: 10,
  items: ['Socken'],
  tags: ['allein'],
  order: 340,
  steps: [
    'Nehmt eine Handvoll Socken.',
    'Bildet Paare.',
    'Bleibt eine Socke allein übrig? Dann ist die Zahl ungerade.',
    'Probiert es mit 4, 5, 6, 7 … Socken.',
  ],
  learn: 'Gerade und ungerade Zahlen begreifen.',
})
