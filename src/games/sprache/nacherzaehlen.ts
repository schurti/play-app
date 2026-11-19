import { defineGame } from '../types'

export default defineGame({
  id: 'nacherzaehlen',
  title: 'Buch nacherzählen',
  emoji: '📖',
  category: 'sprache',
  minAge: 4,
  minutes: 15,
  items: ['Bücher'],
  tags: ['leise'],
  order: 150,
  steps: [
    'Lest ein Bilderbuch zusammen.',
    'Klappt es zu: Das Kind erzählt die Geschichte mit eigenen Worten nach.',
    'Was war am Anfang, in der Mitte, am Schluss?',
    'Wie hätte die Geschichte anders enden können?',
  ],
  learn: 'Erzählen in der richtigen Reihenfolge.',
})
