import { defineGame } from '../types'

export default defineGame({
  id: 'pinguinmarsch',
  title: 'Pinguin-Po-Marsch',
  emoji: '🐧',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 310,
  steps: [
    'Setzt euch mit gestreckten Beinen auf den Boden.',
    'Rutscht nur durch Kippen der Hüfte vorwärts – Po links, Po rechts.',
    'Schafft ihr es auch rückwärts?',
    'Bonus: Als Krebs (Bauch nach oben) und als Bär (Po hoch) zurück zum Start.',
  ],
  learn: 'Rumpfkraft, Körperspannung und Haltung.',
})
