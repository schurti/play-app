import { defineGame } from '../types'

export default defineGame({
  id: 'zweihandmalen',
  title: 'Zwei-Hand-Malen',
  emoji: '✌️',
  category: 'papier',
  minAge: 5,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 310,
  steps: [
    'Nehmt in jede Hand einen Stift.',
    'Malt mit beiden Händen gleichzeitig – gespiegelt: links ein Kreis, rechts ein Kreis.',
    'Dann schwieriger: zwei Herzen, zwei Bäume, zwei Häuser.',
    'Wie fühlt es sich an? Welche Hand ist ordentlicher?',
  ],
  learn:
    'Beide Gehirnhälften arbeiten zusammen – Koordination und Konzentration.',
})
