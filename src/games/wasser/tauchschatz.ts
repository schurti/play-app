import { defineGame } from '../types'

export default defineGame({
  id: 'tauchschatz',
  title: 'Taucher-Schatz',
  emoji: '💎',
  category: 'wasser',
  minAge: 4,
  minutes: 15,
  items: ['Wasser', 'Schüssel'],
  tags: ['allein'],
  order: 120,
  steps: [
    'Legt bunte Steine oder Murmeln auf den Boden einer Schüssel mit Wasser.',
    'Taucht mit der Hand hinein und holt einen Schatz nach dem anderen.',
    'Schwieriger: nur mit zwei Löffeln.',
  ],
  learn: 'Fühlen unter Wasser und Feinmotorik.',
  adultNote:
    'Kleine Steine nur mit Kindern, die nichts mehr in den Mund nehmen.',
})
