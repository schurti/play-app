import { defineGame } from '../types'

export default defineGame({
  id: 'mandala',
  title: 'Nudel-Mandala',
  emoji: '🌸',
  category: 'ruhe',
  minAge: 4,
  minutes: 15,
  items: ['Nudeln', 'Reis', 'Teller'],
  tags: ['allein', 'leise'],
  order: 100,
  steps: [
    'Legt in die Mitte eines Tellers eine Nudel.',
    'Legt rundherum einen Kreis aus Nudeln.',
    'Dann einen Kreis aus Reis, dann wieder Nudeln.',
    'Arbeitet langsam und ruhig von innen nach aussen.',
  ],
  learn: 'Konzentration, Ruhe und Muster.',
})
