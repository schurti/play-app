import { defineGame } from '../types'

export default defineGame({
  id: 'abcreise',
  title: 'ABC-Reise',
  emoji: '🔤',
  category: 'unterwegs',
  minAge: 6,
  minutes: 20,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 50,
  steps: [
    'Sucht auf Schildern, Plakaten und Lastwagen ein A.',
    'Dann ein B, ein C – das ganze Alphabet der Reihe nach.',
    'Alle helfen zusammen.',
    'Schafft ihr es bis zum Z, bevor ihr ankommt?',
  ],
  learn: 'Buchstaben erkennen und das Alphabet.',
})
