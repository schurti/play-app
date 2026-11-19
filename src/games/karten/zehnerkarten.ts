import { defineGame } from '../types'

export default defineGame({
  id: 'zehnerkarten',
  title: 'Zehner-Karten',
  emoji: '🔟',
  category: 'karten',
  minAge: 6,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['allein', 'gruppe'],
  order: 60,
  steps: [
    'Nehmt die Karten 1 (Ass) bis 9.',
    'Legt 12 Karten offen hin.',
    'Sucht Paare, die zusammen 10 ergeben: 3 + 7, 4 + 6 …',
    'Nehmt sie weg und füllt mit neuen Karten auf.',
  ],
  learn: 'Rechnen bis 10 – die wichtigsten Zahlenpaare.',
})
