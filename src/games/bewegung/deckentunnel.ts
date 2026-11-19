import { defineGame } from '../types'

export default defineGame({
  id: 'deckentunnel',
  title: 'Decken-Tunnel',
  emoji: '🕳️',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: ['Decke'],
  tags: ['gruppe'],
  order: 250,
  steps: [
    'Zwei Erwachsene halten eine Decke wie einen Tunnel über den Boden.',
    'Das Kind kriecht hindurch.',
    'Der Tunnel wird mal hoch, mal ganz niedrig.',
    'Oder: Die Decke wackelt wie ein Drache!',
  ],
  learn: 'Krabbeln, Körpergefühl und Mut.',
})
