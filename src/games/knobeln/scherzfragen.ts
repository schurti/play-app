import { defineGame } from '../types'

export default defineGame({
  id: 'scherzfragen',
  title: 'Scherzfragen',
  emoji: '😜',
  category: 'knobeln',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 90,
  steps: [
    'Stellt euch Scherzfragen: „Was hat Zähne, aber kann nicht beissen?“ (Ein Kamm)',
    '„Was wird nasser, je mehr es trocknet?“ (Ein Handtuch)',
    'Erfindet selbst neue Scherzfragen.',
  ],
  learn: 'Um die Ecke denken und Sprache verstehen.',
})
