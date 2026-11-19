import { defineGame } from '../types'

export default defineGame({
  id: 'lesezeichen',
  title: 'Lesezeichen',
  emoji: '🔖',
  category: 'basteln',
  minAge: 4,
  minutes: 15,
  items: ['Karton', 'Stifte', 'Wolle'],
  tags: ['allein', 'leise'],
  order: 230,
  steps: [
    'Schneidet einen schmalen Kartonstreifen.',
    'Bemalt ihn mit Mustern oder eurem Namen.',
    'Macht oben ein Loch und knotet ein Stück Wolle als Quaste daran.',
    'Schenkt es jemandem, der gerne liest!',
  ],
  learn: 'Gestalten und Freude schenken.',
})
