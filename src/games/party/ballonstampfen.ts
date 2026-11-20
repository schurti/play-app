import { defineGame } from '../types'

export default defineGame({
  id: 'ballonstampfen',
  title: 'Ballon-Stampfen',
  emoji: '🎈',
  category: 'party',
  minAge: 5,
  minutes: 10,
  items: ['Ballon', 'Schnur'],
  tags: ['gruppe'],
  place: 'beides',
  order: 150,
  steps: [
    'Jedes Kind bekommt einen Ballon mit einer Schnur ans Fussgelenk gebunden.',
    'Auf «Los!» versucht ihr, die Ballone der anderen zu zertreten.',
    'Den eigenen Ballon gut schützen!',
    'Wessen Ballon bleibt am längsten ganz?',
  ],
  learn: 'Geschicklichkeit und Reaktion.',
  adultNote:
    'Nur mit Socken oder barfuss und mit genug Platz; laut, also vorher warnen.',
})
