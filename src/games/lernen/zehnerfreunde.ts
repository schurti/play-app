import { defineGame } from '../types'

export default defineGame({
  id: 'zehnerfreunde',
  title: 'Zehner-Freunde',
  emoji: '🔟',
  category: 'lernen',
  minAge: 6,
  minutes: 10,
  items: ['Nudeln'],
  tags: ['allein', 'gruppe'],
  order: 370,
  steps: [
    'Legt 10 Nudeln in zwei Häufchen auf, z. B. 3 und 7.',
    'Das sind „Zehner-Freunde“: Zusammen ergeben sie 10.',
    'Findet alle Paare: 1 und 9, 2 und 8 …',
    'Dann mit den Fingern: Ich zeige 4 – wie viele fehlen bis 10?',
  ],
  learn: 'Zahlzerlegung bis 10 – die Basis fürs Rechnen.',
})
