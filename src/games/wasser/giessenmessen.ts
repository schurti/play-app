import { defineGame } from '../types'

export default defineGame({
  id: 'giessenmessen',
  title: 'Giessen und Messen',
  emoji: '🫗',
  category: 'wasser',
  minAge: 3,
  minutes: 15,
  items: ['Becher', 'Wasser', 'Schüssel'],
  tags: ['allein'],
  order: 40,
  steps: [
    'Stellt Becher und Gefässe in verschiedenen Grössen bereit.',
    'Giesst Wasser von einem in den anderen.',
    'Wie viele kleine Becher passen in einen grossen?',
    'Wer kann giessen, ohne etwas zu verschütten?',
  ],
  learn: 'Mengen vergleichen und ruhige Hände.',
})
