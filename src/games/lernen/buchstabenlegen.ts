import { defineGame } from '../types'

export default defineGame({
  id: 'buchstabenlegen',
  title: 'Buchstaben legen',
  emoji: '🔤',
  category: 'lernen',
  minAge: 4,
  minutes: 15,
  items: ['Wolle', 'Nudeln'],
  tags: ['allein', 'leise'],
  order: 380,
  steps: [
    'Die App zeigt einen Buchstaben.',
    'Legt ihn mit Wollfäden oder Nudeln auf den Tisch nach.',
    'Fahrt den Buchstaben mit dem Finger nach und sagt den Laut.',
    'Legt danach den Anfangsbuchstaben eures Namens.',
  ],
  learn: 'Buchstabenformen begreifen und Laute zuordnen.',
  tool: 'letter',
})
