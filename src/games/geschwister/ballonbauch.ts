import { defineGame } from '../types'

export default defineGame({
  id: 'ballonbauch',
  title: 'Ballon-Sandwich',
  emoji: '🎈',
  category: 'geschwister',
  minAge: 3,
  minutes: 10,
  items: ['Ballon'],
  tags: ['gruppe'],
  order: 110,
  steps: [
    'Klemmt einen Ballon zwischen eure Bäuche.',
    'Geht so ohne Hände durch das Zimmer.',
    'Schwieriger: Ballon zwischen Rücken, Stirnen oder Hüften.',
    'Fällt er herunter? Aufheben und weiter!',
  ],
  learn: 'Absprache, Körpergefühl und Lachen.',
})
