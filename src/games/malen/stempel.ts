import { defineGame } from '../types'

export default defineGame({
  id: 'stempel',
  title: 'Kartoffel-Stempel',
  emoji: '🥔',
  category: 'malen',
  minAge: 4,
  minutes: 25,
  items: ['Kartoffel', 'Farbe', 'Papier'],
  tags: ['allein', 'leise'],
  order: 90,
  steps: [
    'Ein Erwachsener halbiert eine Kartoffel und schnitzt eine einfache Form: Herz, Stern, Dreieck.',
    'Form in Farbe tunken.',
    'Stempelt Muster, Blumen oder Geschenkpapier.',
  ],
  learn: 'Muster erkennen und fortsetzen.',
  adultNote: 'Das Schnitzen der Formen macht ein Erwachsener.',
})
