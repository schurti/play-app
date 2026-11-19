import { defineGame } from '../types'

export default defineGame({
  id: 'buchstabe',
  title: 'Buchstaben-Detektiv',
  emoji: '🔤',
  category: 'lernen',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['allein'],
  order: 30,
  steps: [
    'Die App zeigt einen Buchstaben.',
    'Findet Dinge im Haus, die mit diesem Laut beginnen.',
    'Sagt jedes Wort laut und klatscht die Silben.',
  ],
  learn: 'Anlaute hören und Silben klatschen – wichtig fürs Lesenlernen.',
  variants: 'Leichter: Erwachsene sagen den Laut vor, z. B. „Mmm wie Maus“.',
  tool: 'letter',
})
