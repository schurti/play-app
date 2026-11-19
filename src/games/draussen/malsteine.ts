import { defineGame } from '../types'

export default defineGame({
  id: 'malsteine',
  title: 'Steine bemalen',
  emoji: '🪨',
  category: 'draussen',
  minAge: 3,
  minutes: 30,
  items: ['Farbe', 'Pinsel'],
  tags: ['allein', 'leise'],
  order: 50,
  steps: [
    'Sucht glatte Steine.',
    'Wascht sie und lasst sie trocknen.',
    'Bemalt sie als Marienkäfer, Monster, Gesichter oder mit Mustern.',
    'Versteckt einen Stein im Park – jemand anderes freut sich beim Finden.',
  ],
  learn: 'Gestalten und anderen eine Freude machen.',
})
