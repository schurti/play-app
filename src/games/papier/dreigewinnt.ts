import { defineGame } from '../types'

export default defineGame({
  id: 'dreigewinnt',
  title: 'Drei in einer Reihe',
  emoji: '⭕',
  category: 'papier',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 30,
  steps: [
    'Zeichnet ein Gitter mit 3 × 3 Feldern.',
    'Eine Person malt Kreise, die andere Kreuze – abwechselnd ein Zeichen.',
    'Wer zuerst drei in einer Reihe hat (waagrecht, senkrecht oder schräg), gewinnt.',
    'Ist alles voll ohne Reihe: unentschieden, nochmals!',
  ],
  learn: 'Strategie, Vorausdenken und verlieren lernen.',
  variants:
    'Lustiger: Statt Kreuz und Kreis malt jeder ein eigenes Zeichen, z. B. Sonne und Mond.',
})
