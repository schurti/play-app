import { defineGame } from '../types'

export default defineGame({
  id: 'uhrpatience',
  title: 'Uhr-Patience',
  emoji: '🕐',
  category: 'karten',
  minAge: 5,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['allein', 'leise'],
  order: 130,
  steps: [
    'Legt 12 Stapel à 4 Karten verdeckt wie eine Uhr, einen 13. in die Mitte.',
    'Deckt die oberste Karte der Mitte auf und legt sie unter den Stapel ihrer Zahl (Bube = 11, Dame = 12, König = Mitte).',
    'Deckt dort die oberste Karte auf und macht weiter.',
    'Ist am Schluss jede Karte aufgedeckt, bevor der vierte König kommt?',
  ],
  learn: 'Zahlen einer Uhr zuordnen – ein Spiel für allein.',
})
