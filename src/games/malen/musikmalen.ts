import { defineGame } from '../types'

export default defineGame({
  id: 'musikmalen',
  title: 'Musik-Malen',
  emoji: '🎼',
  category: 'malen',
  minAge: 3,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein'],
  order: 150,
  steps: [
    'Spielt verschiedene Musik ab: schnell, langsam, laut, leise.',
    'Malt dazu, wie sich die Musik anfühlt: Zickzack, Wellen, Punkte.',
    'Wechselt bei jedem Lied die Farbe.',
    'Vergleicht danach: Wie sieht schnelle Musik aus?',
  ],
  learn: 'Gefühle und Klänge in Formen und Farben übersetzen.',
})
