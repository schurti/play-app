import { defineGame } from '../types'

export default defineGame({
  id: 'koerperbuchstaben',
  title: 'Buchstaben-Körper',
  emoji: '🤸',
  category: 'lernen',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 230,
  steps: [
    'Die App zeigt einen Buchstaben.',
    'Formt ihn mit eurem Körper – allein oder zu zweit am Boden.',
    'Die anderen raten, welcher Buchstabe es ist.',
  ],
  learn: 'Buchstabenformen mit dem ganzen Körper begreifen.',
  tool: 'letter',
})
