import { defineGame } from '../types'

export default defineGame({
  id: 'mutigwuerfeln',
  title: 'Mutig würfeln',
  emoji: '🎲',
  category: 'karten',
  minAge: 6,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 90,
  steps: [
    'Wer dran ist, würfelt so oft er will und zählt die Augen zusammen.',
    'Aber: Kommt eine 1, sind alle Punkte dieser Runde weg!',
    'Hört rechtzeitig auf und schreibt die Punkte auf.',
    'Wer zuerst 50 Punkte hat, gewinnt.',
  ],
  learn: 'Addieren und Risiko abschätzen.',
  tool: 'dice',
})
