import { defineGame } from '../types'

export default defineGame({
  id: 'kazoo',
  title: 'Rollen-Summer',
  emoji: '🐝',
  category: 'musik',
  minAge: 4,
  minutes: 15,
  items: ['WC-Rollen', 'Backpapier', 'Gummibänder'],
  tags: ['allein'],
  order: 240,
  steps: [
    'Spannt ein Stück Backpapier über ein Ende einer WC-Rolle.',
    'Haltet es mit einem Gummiband fest.',
    'Stecht ein kleines Loch in die Rolle (Erwachsene helfen).',
    'Summt ins offene Ende – das Papier brummt mit!',
  ],
  learn: 'Schwingungen machen Töne.',
})
