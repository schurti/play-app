import { defineGame } from '../types'

export default defineGame({
  id: 'quatschwoerter',
  title: 'Quatsch-Wörter',
  emoji: '🤪',
  category: 'sprache',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 70,
  steps: [
    'Erfindet ein neues Wort, z. B. „Schnuffelpomp“.',
    'Was bedeutet es? Ein Tier? Ein Essen? Ein Gefühl?',
    'Benutzt das Wort den ganzen Tag in Sätzen.',
  ],
  learn: 'Fantasie mit Sprache und Satzbau.',
})
