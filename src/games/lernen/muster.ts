import { defineGame } from '../types'

export default defineGame({
  id: 'muster',
  title: 'Klammer-Muster',
  emoji: '🎨',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: ['Klammern', 'Karton'],
  tags: ['allein', 'leise'],
  order: 160,
  steps: [
    'Klemmt Wäscheklammern in einem Muster an einen Kartonrand, z. B. rot, blau, rot, blau.',
    'Das Kind setzt das Muster fort.',
    'Dann erfindet das Kind ein Muster für euch.',
  ],
  learn: 'Muster erkennen und fortsetzen – eine Grundlage fürs Rechnen.',
  variants: 'Schwieriger: Muster mit drei Farben, z. B. rot, rot, gelb.',
})
