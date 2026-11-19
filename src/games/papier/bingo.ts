import { defineGame } from '../types'

export default defineGame({
  id: 'bingo',
  title: 'Wohnungs-Bingo',
  emoji: '🎯',
  category: 'papier',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'gruppe'],
  order: 240,
  steps: [
    'Zeichnet ein Gitter mit 3 × 3 Feldern.',
    'Malt in jedes Feld etwas aus der Wohnung: Löffel, Socke, Buch, Pflanze …',
    'Sucht die Dinge in der Wohnung und kreuzt sie an.',
    'Drei in einer Reihe? „Bingo!“',
  ],
  learn: 'Gegenstände benennen, suchen und Reihen erkennen.',
})
