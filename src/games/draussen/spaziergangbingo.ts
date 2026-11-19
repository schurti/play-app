import { defineGame } from '../types'

export default defineGame({
  id: 'spaziergangbingo',
  title: 'Spaziergang-Bingo',
  emoji: '🌳',
  category: 'draussen',
  minAge: 4,
  minutes: 30,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 20,
  steps: [
    'Zeichnet vor dem Spaziergang ein Gitter mit 3 × 3 Feldern.',
    'Malt in jedes Feld etwas, das man draussen finden kann: Hund, Blatt, Velo, Vogel, rote Tür …',
    'Nehmt das Blatt und einen Stift mit nach draussen.',
    'Kreuzt alles an, was ihr entdeckt. Drei in einer Reihe? „Bingo!“',
  ],
  learn: 'Genau beobachten und Wörter für die Umgebung lernen.',
})
