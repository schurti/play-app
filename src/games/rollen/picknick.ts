import { defineGame } from '../types'

export default defineGame({
  id: 'picknick',
  title: 'Kuscheltier-Picknick',
  emoji: '🧺',
  category: 'rollen',
  minAge: 3,
  minutes: 20,
  items: ['Decke', 'Teller', 'Kuscheltier', 'Obst'],
  tags: ['allein', 'leise'],
  place: 'beides',
  order: 200,
  steps: [
    'Breitet eine Decke am Boden aus.',
    'Ladet Kuscheltiere ein und setzt sie im Kreis hin.',
    'Verteilt Teller und echtes Obst.',
    'Jedes Kuscheltier sagt, was es am liebsten isst.',
  ],
  learn: 'Teilen, Tischdecken und Gastfreundschaft.',
})
