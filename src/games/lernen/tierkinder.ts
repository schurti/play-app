import { defineGame } from '../types'

export default defineGame({
  id: 'tierkinder',
  title: 'Tier-Mamas und Tier-Kinder',
  emoji: '🐣',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 480,
  steps: [
    'Eine Person nennt ein Tier: „Kuh!“',
    'Die anderen rufen das Tierkind: „Kalb!“',
    'Weiter mit Pferd (Fohlen), Schaf (Lamm), Huhn (Küken), Hund (Welpe), Katze (Kätzchen).',
    'Wer kennt auch schwierige wie Frosch (Kaulquappe)?',
  ],
  learn: 'Wortschatz rund um Tiere und Familien.',
})
