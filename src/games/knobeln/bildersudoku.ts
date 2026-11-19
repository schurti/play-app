import { defineGame } from '../types'

export default defineGame({
  id: 'bildersudoku',
  title: 'Bilder-Sudoku',
  emoji: '🍎',
  category: 'knobeln',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 100,
  steps: [
    'Zeichnet ein Gitter mit 4 × 4 Feldern.',
    'Statt Zahlen gibt es 4 Bilder: Apfel, Stern, Herz, Sonne.',
    'In jeder Reihe, jeder Spalte und jedem 2 × 2-Block darf jedes Bild nur einmal vorkommen.',
    'Malt ein paar Bilder vor – das Kind ergänzt den Rest.',
  ],
  learn: 'Logisch kombinieren.',
})
