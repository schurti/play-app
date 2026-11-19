import { defineGame } from '../types'

export default defineGame({
  id: 'stillepost',
  title: 'Stille Post',
  emoji: '🤫',
  category: 'ruhe',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 140,
  steps: [
    'Setzt euch in eine Reihe oder einen Kreis.',
    'Die erste Person flüstert der nächsten ein Wort ins Ohr.',
    'Es wird weitergeflüstert – nur einmal!',
    'Die letzte Person sagt das Wort laut. Ist es noch dasselbe?',
  ],
  learn: 'Genau zuhören und deutlich flüstern.',
})
