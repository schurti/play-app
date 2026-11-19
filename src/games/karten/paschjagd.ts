import { defineGame } from '../types'

export default defineGame({
  id: 'paschjagd',
  title: 'Pasch-Jagd',
  emoji: '🎲',
  category: 'karten',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 110,
  steps: [
    'Stellt die App auf 2 Würfel.',
    'Würfelt so lange, bis beide Würfel gleich sind – ein Pasch!',
    'Zählt die Würfe: Wer braucht am wenigsten?',
  ],
  learn: 'Würfelbilder vergleichen und zählen.',
  tool: 'dice',
})
