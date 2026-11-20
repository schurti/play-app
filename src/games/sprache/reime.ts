import { defineGame } from '../types'

export default defineGame({
  id: 'reime',
  title: 'Reim-Ball',
  emoji: '🔁',
  category: 'sprache',
  minAge: 5,
  minutes: 10,
  items: ['Socken'],
  tags: ['gruppe'],
  order: 10,
  steps: [
    'Rollt eine Socke zu einem Ball.',
    'Wer wirft, sagt ein Wort, z. B. «Haus». Ideen gibt die App.',
    'Wer fängt, sagt ein Reimwort: «Maus»! Fantasiewörter gelten auch.',
  ],
  learn: 'Reime hören – eine wichtige Vorstufe zum Lesen.',
  tool: 'term',
})
