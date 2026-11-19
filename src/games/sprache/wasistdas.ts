import { defineGame } from '../types'

export default defineGame({
  id: 'wasistdas',
  title: 'Was ist das?',
  emoji: '👉',
  category: 'sprache',
  minAge: 1,
  maxAge: 4,
  minutes: 5,
  items: [],
  tags: ['leise'],
  order: 190,
  steps: [
    'Geht durch die Wohnung und zeigt auf Dinge: „Lampe!“, „Tür!“',
    'Das Kind zeigt auch – ihr sagt das Wort.',
    'Später fragt ihr: „Wo ist die Lampe?“',
  ],
  learn: 'Wortschatz durch Zeigen und Benennen.',
})
