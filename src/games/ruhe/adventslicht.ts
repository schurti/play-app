import { defineGame } from '../types'

export default defineGame({
  id: 'adventslicht',
  title: 'Advents-Licht',
  emoji: '🕯️',
  category: 'ruhe',
  minAge: 2,
  minutes: 5,
  items: [],
  tags: ['gruppe', 'leise'],
  seasons: ['winter'],
  order: 360,
  steps: [
    'Zündet am Abend zusammen eine Kerze an, zum Beispiel am Adventskranz.',
    'Schaut einen Moment ganz still in die Flamme.',
    'Jedes erzählt etwas Schönes von heute.',
    'Singt ein leises Lied und blast die Kerze gemeinsam aus.',
  ],
  learn: 'Zur Ruhe kommen und Dankbarkeit.',
  adultNote: 'Kerze nie unbeaufsichtigt lassen.',
})
