import { defineGame } from '../types'

export default defineGame({
  id: 'hoehertiefer',
  title: 'Höher oder tiefer?',
  emoji: '⬆️',
  category: 'karten',
  minAge: 5,
  minutes: 10,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 20,
  steps: [
    'Legt eine Karte offen hin.',
    'Ratet: Ist die nächste Karte höher oder tiefer?',
    'Richtig geraten? Weiter! Falsch? Der Nächste ist dran.',
    'Wer schafft die längste Reihe?',
  ],
  learn: 'Zahlen vergleichen und Wahrscheinlichkeiten.',
})
