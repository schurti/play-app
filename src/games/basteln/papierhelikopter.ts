import { defineGame } from '../types'

export default defineGame({
  id: 'papierhelikopter',
  title: 'Papier-Helikopter',
  emoji: '🚁',
  category: 'basteln',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Klammern'],
  tags: ['allein', 'gruppe'],
  order: 270,
  steps: [
    'Schneidet einen Papierstreifen, etwa 3 cm breit und 15 cm lang.',
    'Schneidet oben in der Mitte etwa 6 cm ein und faltet die zwei Hälften in entgegengesetzte Richtungen – das sind die Rotoren.',
    'Klemmt unten eine Wäscheklammer als Gewicht an.',
    'Lasst ihn von oben fallen: Er dreht sich wie ein Helikopter!',
  ],
  learn: 'Luftwiderstand beobachten und ausprobieren.',
})
