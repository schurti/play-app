import { defineGame } from '../types'

export default defineGame({
  id: 'ballrollen',
  title: 'Ball hin und her',
  emoji: '⚽',
  category: 'bewegung',
  minAge: 1,
  maxAge: 4,
  minutes: 5,
  items: ['Ball'],
  tags: ['gruppe'],
  place: 'beides',
  order: 470,
  steps: [
    'Setzt euch mit gespreizten Beinen gegenüber.',
    'Rollt einen Ball zum Kind: „Hier kommt er!“',
    'Das Kind rollt ihn zurück.',
  ],
  learn: 'Erstes Zusammenspiel und Greifen.',
})
