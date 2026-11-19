import { defineGame } from '../types'

export default defineGame({
  id: 'wuerfelbingo',
  title: 'Würfel-Bingo',
  emoji: '🎯',
  category: 'karten',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 100,
  steps: [
    'Jeder zeichnet ein Gitter mit 3 × 3 Feldern und schreibt Zahlen von 2 bis 12 hinein.',
    'Würfelt mit zwei Würfeln in der App und zählt zusammen.',
    'Wer die Zahl hat, streicht sie durch.',
    'Drei in einer Reihe? „Bingo!“',
  ],
  learn: 'Addieren und Zahlen suchen.',
  tool: 'dice',
})
