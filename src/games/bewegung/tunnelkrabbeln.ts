import { defineGame } from '../types'

export default defineGame({
  id: 'tunnelkrabbeln',
  title: 'Krabbel-Tunnel',
  emoji: '🚇',
  category: 'bewegung',
  minAge: 1,
  minutes: 10,
  items: ['Karton', 'Decke'],
  tags: ['allein'],
  order: 480,
  steps: [
    'Baut aus Stühlen und einer Decke oder aus offenen Kartons einen Tunnel.',
    'Wartet am anderen Ende: „Wo bist du?“',
    'Das Kind krabbelt durch zu euch.',
  ],
  learn: 'Krabbeln und Mut.',
})
