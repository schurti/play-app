import { defineGame } from '../types'

export default defineGame({
  id: 'brotgesichter',
  title: 'Brot-Gesichter',
  emoji: '🍞',
  category: 'kochen',
  minAge: 3,
  minutes: 15,
  items: ['Teller', 'Obst'],
  tags: ['allein'],
  order: 40,
  steps: [
    'Bestreicht ein Brot mit Butter oder Frischkäse.',
    'Legt ein Gesicht: Gurken-Augen, Tomaten-Mund, Karotten-Haare.',
    'Wer macht das lustigste Gesicht?',
    'Und dann: aufessen!',
  ],
  learn: 'Gesund essen und kreativ sein.',
})
