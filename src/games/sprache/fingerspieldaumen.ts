import { defineGame } from '../types'

export default defineGame({
  id: 'fingerspieldaumen',
  title: 'Fingerspiel: Das ist der Daumen',
  emoji: '👍',
  category: 'sprache',
  minAge: 1,
  minutes: 5,
  items: [],
  tags: ['leise'],
  order: 170,
  steps: [
    'Nehmt die Hand des Kindes und tippt Finger für Finger an.',
    '„Das ist der Daumen, der schüttelt die Pflaumen, der hebt sie auf, der trägt sie nach Haus, und der Kleine isst sie alle auf!“',
    'Beim kleinen Finger sanft kitzeln.',
  ],
  learn: 'Sprache, Rhythmus und Körpergefühl.',
})
