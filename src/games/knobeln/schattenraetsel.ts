import { defineGame } from '../types'

export default defineGame({
  id: 'schattenraetsel',
  title: 'Schatten-Rätsel',
  emoji: '🔦',
  category: 'knobeln',
  minAge: 4,
  minutes: 15,
  items: ['Taschenlampe'],
  tags: ['gruppe'],
  order: 80,
  steps: [
    'Macht das Zimmer dunkel.',
    'Eine Person hält heimlich einen Gegenstand vor die Lampe. Ideen gibt die App.',
    'Die anderen raten nur am Schatten: Gabel? Schlüssel? Banane?',
    'Schwieriger: den Gegenstand drehen.',
  ],
  learn: 'Formen erkennen und kombinieren.',
  adultNote: 'Lampe nur gemeinsam mit Erwachsenen benutzen.',
  tool: 'term',
})
