import { defineGame } from '../types'

export default defineGame({
  id: 'duplosortieren',
  title: 'Duplo-Sortier-Express',
  emoji: '🧺',
  category: 'bauen',
  minAge: 2,
  maxAge: 4,
  minutes: 10,
  items: ['Duplo', 'Schüssel'],
  tags: ['allein'],
  order: 170,
  steps: [
    'Stellt für jede Farbe eine Schüssel oder einen Teller hin.',
    'Das Kind sortiert die Steine nach Farben.',
    'Zählt am Schluss: Welche Farbe hat am meisten?',
    'Und schon ist aufgeräumt!',
  ],
  learn: 'Farben, Sortieren und Zählen.',
})
