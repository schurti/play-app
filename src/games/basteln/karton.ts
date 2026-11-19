import { defineGame } from '../types'

export default defineGame({
  id: 'karton',
  title: 'Karton-Auto',
  emoji: '📦',
  category: 'basteln',
  minAge: 4,
  minutes: 30,
  items: ['Karton', 'Klebeband', 'Stifte'],
  tags: ['allein'],
  order: 10,
  steps: [
    'Nehmt einen grossen Karton und schneidet den Boden weg.',
    'Klebt Träger aus Klebeband oder Schnur an.',
    'Malt Scheinwerfer, Nummernschild und Lenkrad.',
    'Losfahren!',
  ],
  learn: 'Planen und Gestalten.',
  adultNote: 'Das Schneiden macht ein Erwachsener.',
})
