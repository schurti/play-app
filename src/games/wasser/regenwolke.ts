import { defineGame } from '../types'

export default defineGame({
  id: 'regenwolke',
  title: 'Regenwolke im Glas',
  emoji: '🌧️',
  category: 'wasser',
  minAge: 4,
  minutes: 15,
  items: ['Gläser', 'Wasser', 'Farbe', 'Rasierschaum'],
  tags: ['allein'],
  order: 80,
  steps: [
    'Füllt ein Glas mit Wasser.',
    'Sprüht oben eine Wolke aus Rasierschaum darauf.',
    'Tropft gefärbtes Wasser auf die Wolke.',
    'Wenn sie voll ist, „regnet“ es farbige Fäden ins Glas!',
  ],
  learn: 'Wie Wolken sich füllen und es regnet.',
})
