import { defineGame } from '../types'

export default defineGame({
  id: 'wasistinderkiste',
  title: 'Was ist in der Kiste?',
  emoji: '📦',
  category: 'sprache',
  minAge: 3,
  minutes: 10,
  items: ['Karton'],
  tags: ['gruppe'],
  order: 100,
  steps: [
    'Eine Person legt heimlich einen Gegenstand in eine Schachtel.',
    'Sie beschreibt ihn, ohne ihn zu nennen: „Es ist rund, rot und man kann es essen.“',
    'Die anderen raten.',
  ],
  learn: 'Beschreiben, Eigenschaften und Wortschatz.',
})
