import { defineGame } from '../types'

export default defineGame({
  id: 'paarekarten',
  title: 'Paare finden mit Spielkarten',
  emoji: '🃏',
  category: 'karten',
  minAge: 4,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 10,
  steps: [
    'Nehmt 10 Kartenpaare (z. B. zwei Siebner, zwei Könige) und legt sie verdeckt aus.',
    'Deckt abwechselnd zwei Karten auf.',
    'Gleicher Wert? Behalten und nochmals!',
    'Sonst wieder umdrehen. Wer hat am Schluss mehr Paare?',
  ],
  learn: 'Gedächtnis und Zahlen erkennen.',
})
