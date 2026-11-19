import { defineGame } from '../types'

export default defineGame({
  id: 'buchhoehle',
  title: 'Bücher-Höhle',
  emoji: '📚',
  category: 'ruhe',
  minAge: 3,
  minutes: 20,
  items: ['Bücher', 'Decke', 'Taschenlampe'],
  tags: ['leise'],
  order: 160,
  steps: [
    'Baut eine kleine Höhle aus einer Decke.',
    'Kriecht mit ein paar Bilderbüchern und einer Taschenlampe hinein.',
    'Lest zusammen oder schaut die Bilder an.',
    'Das Kind erzählt die Geschichte mit eigenen Worten nach.',
  ],
  learn: 'Freude an Büchern und Wortschatz.',
})
