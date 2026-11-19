import { defineGame } from '../types'

export default defineGame({
  id: 'rasselpaare',
  title: 'Rassel-Paare',
  emoji: '🎊',
  category: 'musik',
  minAge: 4,
  minutes: 20,
  items: ['Becher', 'Reis', 'Nudeln', 'Salz', 'Klebeband'],
  tags: ['allein', 'leise'],
  order: 190,
  steps: [
    'Füllt immer zwei Becher gleich: zweimal Reis, zweimal Nudeln, zweimal Salz.',
    'Klebt sie mit Papier zu, damit man nicht hineinsieht.',
    'Mischt alle Becher.',
    'Schüttelt und findet die Paare nur durchs Hören!',
  ],
  learn: 'Genau hinhören und Klänge vergleichen.',
})
