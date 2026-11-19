import { defineGame } from '../types'

export default defineGame({
  id: 'silbenhuepfen',
  title: 'Silben-Hüpfen',
  emoji: '🐇',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 180,
  steps: [
    'Sagt ein Wort, z. B. „Ba-na-ne“.',
    'Hüpft für jede Silbe einmal.',
    'Wie viele Hüpfer waren es?',
    'Wer findet das längste Wort im Zimmer?',
  ],
  learn: 'Wörter in Silben gliedern – wichtig fürs Lesen und Schreiben.',
})
