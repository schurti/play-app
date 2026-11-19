import { defineGame } from '../types'

export default defineGame({
  id: 'baumgesichter',
  title: 'Baum-Gesichter',
  emoji: '🌳',
  category: 'draussen',
  minAge: 4,
  minutes: 20,
  items: [],
  tags: ['allein'],
  order: 180,
  steps: [
    'Sucht einen Baum mit dicker Rinde.',
    'Klebt mit feuchter Erde oder Lehm ein Gesicht an den Stamm.',
    'Augen aus Steinen, Haare aus Gras, ein Mund aus Beeren oder Blättern.',
    'Gebt dem Baumgeist einen Namen.',
  ],
  learn: 'Fantasie und Naturmaterialien entdecken.',
})
