import { defineGame } from '../types'

export default defineGame({
  id: 'gefuehlspantomime',
  title: 'Gefühle-Pantomime',
  emoji: '🎭',
  category: 'gefuehle',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 70,
  steps: [
    'Eine Person holt sich heimlich ein Gefühl aus der App und zeigt es ohne Worte.',
    'Die anderen raten.',
    'Wer es errät, erzählt, wann er sich zuletzt so gefühlt hat.',
  ],
  learn: 'Gefühle erkennen und zeigen.',
  tool: 'term',
})
