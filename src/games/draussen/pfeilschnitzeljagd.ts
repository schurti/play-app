import { defineGame } from '../types'

export default defineGame({
  id: 'pfeilschnitzeljagd',
  title: 'Pfeil-Schnitzeljagd',
  emoji: '➡️',
  category: 'draussen',
  minAge: 4,
  minutes: 30,
  items: [],
  tags: ['gruppe'],
  order: 100,
  steps: [
    'Eine Gruppe geht voraus und legt an jeder Abzweigung einen Pfeil aus Stöcken.',
    'Die zweite Gruppe startet ein paar Minuten später und folgt den Pfeilen.',
    'Am Ende wartet die erste Gruppe versteckt – mit einem kleinen Znüni.',
    'Dann tauschen!',
  ],
  learn: 'Zeichen lesen, aufmerksam sein und Orientierung.',
  adultNote: 'Nur auf bekannten Wegen; Kinder nie allein vorausschicken.',
})
