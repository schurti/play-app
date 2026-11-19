import { defineGame } from '../types'

export default defineGame({
  id: 'smoothie',
  title: 'Smoothie-Labor',
  emoji: '🥤',
  category: 'kochen',
  minAge: 3,
  minutes: 15,
  items: ['Obst', 'Becher'],
  tags: ['gruppe'],
  order: 20,
  steps: [
    'Wählt zwei oder drei Früchte aus.',
    'Wascht sie und schneidet sie in Stücke.',
    'Ein Erwachsener mixt alles.',
    'Probiert: Welche Mischung schmeckt am besten? Gebt eurem Smoothie einen Namen.',
  ],
  learn: 'Früchte kennen, Geschmäcker vergleichen.',
  adultNote: 'Den Mixer bedient ein Erwachsener.',
})
