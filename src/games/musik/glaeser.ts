import { defineGame } from '../types'

export default defineGame({
  id: 'glaeser',
  title: 'Gläser-Xylofon',
  emoji: '🎼',
  category: 'musik',
  minAge: 5,
  minutes: 15,
  items: ['Gläser', 'Wasser', 'Löffel'],
  tags: ['allein'],
  order: 40,
  steps: [
    'Stellt 4 bis 6 Gläser in eine Reihe.',
    'Füllt sie unterschiedlich hoch mit Wasser.',
    'Schlagt sanft mit einem Löffel an.',
    'Sortiert die Gläser von tief nach hoch und spielt eine Melodie.',
  ],
  learn: 'Mehr Wasser macht einen tieferen Ton.',
  adultNote: 'Gläser können zerbrechen – nur mit Erwachsenen.',
})
