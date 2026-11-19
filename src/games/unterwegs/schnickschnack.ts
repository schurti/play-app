import { defineGame } from '../types'

export default defineGame({
  id: 'schnickschnack',
  title: 'Schnick-Schnack-Schnuck',
  emoji: '✂️',
  category: 'unterwegs',
  minAge: 4,
  minutes: 5,
  items: [],
  tags: ['gruppe'],
  place: 'beides',
  order: 70,
  steps: [
    'Beide ballen eine Faust und zählen: „Schnick – Schnack – Schnuck!“',
    'Bei „Schnuck“ zeigt jeder Stein (Faust), Schere (zwei Finger) oder Papier (flache Hand).',
    'Stein schlägt Schere, Schere schneidet Papier, Papier wickelt Stein ein.',
    'Wer gewinnt drei Runden?',
  ],
  learn: 'Regeln merken und schnell reagieren.',
})
