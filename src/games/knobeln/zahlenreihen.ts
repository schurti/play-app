import { defineGame } from '../types'

export default defineGame({
  id: 'zahlenreihen',
  title: 'Zahlen-Rätsel',
  emoji: '🧮',
  category: 'knobeln',
  minAge: 6,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 20,
  steps: [
    'Sagt eine Reihe von Zahlen: 2, 4, 6 …',
    'Welche Zahl kommt als Nächstes?',
    'Erfindet eigene Reihen für die anderen.',
    'Wer findet die Regel am schnellsten?',
  ],
  learn: 'Regeln entdecken und in Zahlen denken.',
  variants: 'Ideen: 1, 2, 3 · 10, 9, 8 · 5, 10, 15 · 1, 1, 2, 2, 3, 3.',
})
