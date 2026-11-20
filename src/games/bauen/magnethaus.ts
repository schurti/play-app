import { defineGame } from '../types'

export default defineGame({
  id: 'magnethaus',
  title: 'Magnet-Haus',
  emoji: '🏠',
  category: 'bauen',
  minAge: 3,
  minutes: 20,
  items: ['Magformers', 'Kuscheltier'],
  tags: ['allein'],
  order: 90,
  steps: [
    'Baut aus Quadraten Wände für ein Haus.',
    'Dreiecke werden zum Dach.',
    'Passt ein kleines Kuscheltier hinein?',
    'Baut eine Garage, einen Turm oder ein zweites Stockwerk dazu.',
  ],
  learn: 'Formen kombinieren und Räume bauen.',
})
