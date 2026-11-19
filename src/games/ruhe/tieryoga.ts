import { defineGame } from '../types'

export default defineGame({
  id: 'tieryoga',
  title: 'Tier-Yoga',
  emoji: '🧘',
  category: 'ruhe',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein', 'leise'],
  order: 60,
  steps: [
    'Die App zeigt eine Yoga-Figur.',
    'Macht sie nach und haltet sie fünf Atemzüge lang.',
    'Zum Schluss: die Kind-Haltung zum Ausruhen.',
  ],
  learn: 'Beweglichkeit, Gleichgewicht und Ruhe.',
  tool: 'yoga',
})
