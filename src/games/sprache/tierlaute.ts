import { defineGame } from '../types'

export default defineGame({
  id: 'tierlaute',
  title: 'Wie macht das Tier?',
  emoji: '🐮',
  category: 'sprache',
  minAge: 1,
  minutes: 5,
  items: ['Bücher'],
  tags: ['leise'],
  order: 180,
  steps: [
    'Schaut ein Tier-Bilderbuch an.',
    'Zeigt auf ein Tier: „Wie macht die Kuh?“ – „Muuuh!“',
    'Dann fragt ihr: „Wo ist der Hund?“ – das Kind zeigt.',
  ],
  learn: 'Erste Wörter, Tierlaute und Zeigen.',
})
