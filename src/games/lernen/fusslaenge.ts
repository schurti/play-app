import { defineGame } from '../types'

export default defineGame({
  id: 'fusslaenge',
  title: 'Füsse-Messen',
  emoji: '👣',
  category: 'lernen',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein'],
  order: 330,
  steps: [
    'Wie lang ist das Zimmer? Raten und aufschreiben!',
    'Geht Fuss vor Fuss von einer Wand zur anderen und zählt.',
    'Messt auch das Bett, den Teppich und den Flur.',
    'Messt dasselbe mit Erwachsenen-Füssen: Warum ist die Zahl kleiner?',
  ],
  learn: 'Längen messen und vergleichen.',
})
