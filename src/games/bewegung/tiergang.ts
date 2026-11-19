import { defineGame } from '../types'

export default defineGame({
  id: 'tiergang',
  title: 'Tier-Gang',
  emoji: '🐸',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 110,
  steps: [
    'Die App zeigt ein Tier.',
    'Bewegt euch wie dieses Tier durch die Wohnung.',
    'Die anderen dürfen mitmachen oder raten.',
  ],
  learn: 'Grobmotorik und Tiere kennenlernen.',
  tool: 'animal',
})
