import { defineGame } from '../types'

export default defineGame({
  id: 'rollentiere',
  title: 'Rollen-Tiere',
  emoji: '🐱',
  category: 'basteln',
  minAge: 3,
  minutes: 20,
  items: ['WC-Rollen', 'Farbe', 'Papier', 'Leim'],
  tags: ['allein', 'leise'],
  order: 130,
  steps: [
    'Bemalt eine WC-Rolle in der Farbe eures Tiers.',
    'Schneidet aus Papier Ohren, Flügel oder einen Schwanz.',
    'Klebt alles an und malt ein Gesicht.',
    'Baut einen ganzen Zoo!',
  ],
  learn: 'Formen gestalten und Tiere beschreiben.',
})
