import { defineGame } from '../types'

export default defineGame({
  id: 'gefuehlsthermometer',
  title: 'Gefühls-Thermometer',
  emoji: '🌡️',
  category: 'gefuehle',
  minAge: 4,
  minutes: 5,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 120,
  steps: [
    'Stellt eine Situation vor: „Du darfst Glace essen.“',
    'Jeder zeigt mit Fingern von 1 bis 5, wie stark er sich freut.',
    'Dann: „Dein Turm fällt um.“ Wie stark ärgert ihr euch?',
    'Sprecht über die Unterschiede.',
  ],
  learn: 'Gefühle einschätzen und vergleichen.',
})
