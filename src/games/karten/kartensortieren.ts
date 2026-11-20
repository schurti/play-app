import { defineGame } from '../types'

export default defineGame({
  id: 'kartensortieren',
  title: 'Karten-Post',
  emoji: '📮',
  category: 'karten',
  minAge: 3,
  minutes: 10,
  items: ['Spielkarten'],
  tags: ['allein', 'leise'],
  order: 140,
  steps: [
    'Legt vier Karten als «Briefkästen» aus: Herz, Karo, Pik und Kreuz.',
    'Das Kind ist der Pöstler und verteilt den Stapel Karte für Karte.',
    'Jede Karte kommt in den Briefkasten mit dem gleichen Zeichen.',
    'Schwieriger: Innerhalb der Häufchen nach Zahlen ordnen.',
  ],
  learn: 'Sortieren, Formen und Zeichen erkennen.',
})
