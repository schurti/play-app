import { defineGame } from '../types'

export default defineGame({
  id: 'zahlpaare',
  title: 'Zahl und Menge',
  emoji: '🃏',
  category: 'lernen',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'gruppe'],
  order: 280,
  steps: [
    'Schneidet 20 Kärtchen aus Papier.',
    'Schreibt auf 10 Kärtchen die Zahlen 1 bis 10.',
    'Malt auf die anderen 10 Kärtchen die passende Anzahl Punkte.',
    'Legt alle verdeckt hin und deckt abwechselnd zwei auf: Passen Zahl und Menge zusammen?',
  ],
  learn: 'Ziffern und Mengen verbinden – und das Gedächtnis trainieren.',
})
