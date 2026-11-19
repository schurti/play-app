import { defineGame } from '../types'

export default defineGame({
  id: 'bananeschneiden',
  title: 'Banane schneiden',
  emoji: '🍌',
  category: 'kochen',
  minAge: 2,
  minutes: 10,
  items: ['Obst', 'Teller'],
  tags: ['allein'],
  order: 170,
  steps: [
    'Schält zusammen eine Banane.',
    'Das Kind schneidet sie mit einem stumpfen Messer in Scheiben.',
    'Legt die Scheiben auf einen Teller – und gemeinsam essen.',
  ],
  learn: 'Erste Küchenarbeit und Stolz.',
  adultNote: 'Nur mit einem stumpfen Messer oder Kindermesser.',
})
