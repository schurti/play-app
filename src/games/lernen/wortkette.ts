import { defineGame } from '../types'

export default defineGame({
  id: 'wortkette',
  title: 'Wort-Kette',
  emoji: '🔗',
  category: 'lernen',
  minAge: 6,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 410,
  steps: [
    'Die erste Person sagt ein Wort, z. B. „Haus“.',
    'Die nächste sagt ein Wort, das mit dem letzten Laut beginnt: „Sonne“.',
    'Dann: „Esel“, „Löwe“ …',
    'Wie lang wird eure Kette?',
  ],
  learn: 'Laute am Wortende und Wortanfang hören.',
})
