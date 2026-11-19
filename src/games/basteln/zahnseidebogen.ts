import { defineGame } from '../types'

export default defineGame({
  id: 'zahnseidebogen',
  title: 'Mini-Bogen',
  emoji: '🏹',
  category: 'basteln',
  minAge: 6,
  minutes: 15,
  items: ['Zahnseide-Sticks', 'Gummibänder'],
  tags: ['allein'],
  order: 290,
  steps: [
    'Nehmt einen Zahnseide-Stick (mit dem Bogen aus Kunststoff).',
    'Spannt ein kleines Gummiband als Sehne an die Enden.',
    'Legt ein Wattestäbchen als Pfeil an und zieht zurück.',
    'Schiesst auf Becher-Türme oder gemalte Zielscheiben.',
  ],
  learn: 'Spannung, Kraft und Zielen.',
  adultNote:
    'Nur mit Erwachsenen. Nie auf Menschen oder Tiere zielen – nur auf Becher oder Papier-Ziele.',
})
