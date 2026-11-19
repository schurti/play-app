import { defineGame } from '../types'

export default defineGame({
  id: 'autobingo',
  title: 'Auto-Bingo',
  emoji: '🎯',
  category: 'unterwegs',
  minAge: 4,
  minutes: 30,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  place: 'beides',
  order: 90,
  steps: [
    'Zeichnet vor der Fahrt ein Gitter mit 3 × 3 Feldern.',
    'Malt hinein, was ihr sehen könntet: Kuh, Brücke, Lastwagen, Kirche, Velo …',
    'Kreuzt an, was ihr unterwegs entdeckt.',
    'Drei in einer Reihe? „Bingo!“',
  ],
  learn: 'Aufmerksam schauen und Begriffe kennen.',
})
