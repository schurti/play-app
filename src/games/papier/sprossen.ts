import { defineGame } from '../types'

export default defineGame({
  id: 'sprossen',
  title: 'Punkte-Sprossen',
  emoji: '🌱',
  category: 'papier',
  minAge: 6,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 120,
  steps: [
    'Malt drei Punkte aufs Papier.',
    'Abwechselnd verbindet jeder zwei Punkte (oder einen Punkt mit sich selbst) mit einer Linie und setzt auf die neue Linie einen neuen Punkt.',
    'Linien dürfen sich nicht kreuzen, und an keinem Punkt dürfen mehr als drei Linien hängen.',
    'Wer keinen Zug mehr machen kann, hat verloren.',
  ],
  learn: 'Logisches Denken und Regeln beachten.',
})
