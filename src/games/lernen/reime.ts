import { defineGame } from '../types'

export default defineGame({
  id: 'reime',
  title: 'Reim-Ball',
  emoji: '🔁',
  category: 'lernen',
  minAge: 5,
  minutes: 10,
  items: ['Socken'],
  tags: ['gruppe'],
  order: 90,
  steps: [
    'Rollt eine Socke zu einem Ball.',
    'Wer wirft, sagt ein Wort, z. B. „Haus“.',
    'Wer fängt, sagt ein Reimwort: „Maus“! Fantasiewörter gelten auch.',
  ],
  learn: 'Reime hören – eine wichtige Vorstufe zum Lesen.',
})
