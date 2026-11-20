import { defineGame } from '../types'

export default defineGame({
  id: 'gerechtteilen',
  title: 'Gerecht teilen',
  emoji: '🍰',
  category: 'knobeln',
  minAge: 5,
  minutes: 10,
  items: ['Papier'],
  tags: ['gruppe'],
  order: 190,
  steps: [
    'Zwei Kinder wollen einen «Kuchen» aus Papier teilen.',
    'Die Regel: Eines schneidet oder reisst, das andere wählt zuerst.',
    'Wie muss das erste teilen, damit es nicht zu kurz kommt?',
    'Probiert es beim nächsten Znüni mit einem echten Apfel.',
  ],
  learn: 'Fairness, Hälften und vorausdenken.',
})
