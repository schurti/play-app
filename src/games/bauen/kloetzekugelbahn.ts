import { defineGame } from '../types'

export default defineGame({
  id: 'kloetzekugelbahn',
  title: 'Kugelbahn aus Klötzen',
  emoji: '🔵',
  category: 'bauen',
  minAge: 5,
  minutes: 25,
  items: ['Bausteine', 'Murmeln', 'Bücher'],
  tags: ['allein'],
  order: 140,
  steps: [
    'Lehnt ein grosses Buch schräg an einen Stapel: die erste Rampe.',
    'Baut mit Klötzen Wände, damit die Murmel nicht herunterfällt.',
    'Fügt Kurven, Tunnel und eine zweite Rampe dazu.',
    'Lasst die Murmel rollen. Wo bleibt sie hängen? Verbessern!',
  ],
  learn: 'Schräge, Tempo und Ausprobieren.',
  adultNote:
    'Murmeln nur mit Kindern ab etwa 4 Jahren, kleine Geschwister fernhalten.',
})
