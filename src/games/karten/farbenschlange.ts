import { defineGame } from '../types'

export default defineGame({
  id: 'farbenschlange',
  title: 'Farben-Schlange',
  emoji: '🐍',
  category: 'karten',
  minAge: 3,
  minutes: 10,
  items: ['Spielkarten'],
  tags: ['allein'],
  order: 80,
  steps: [
    'Legt eine lange Schlange aus Karten: abwechselnd rot und schwarz.',
    'Schwieriger: Herz, Pik, Karo, Kreuz der Reihe nach.',
    'Oder: Zahlen von 1 bis 10 in einer Reihe.',
  ],
  learn: 'Muster und Sortieren.',
})
