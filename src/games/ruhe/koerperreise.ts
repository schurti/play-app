import { defineGame } from '../types'

export default defineGame({
  id: 'koerperreise',
  title: 'Körper-Reise',
  emoji: '🦶',
  category: 'ruhe',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein', 'leise'],
  order: 80,
  steps: [
    'Legt euch bequem auf den Rücken.',
    'Spannt die Füsse ganz fest an – und lasst locker.',
    'Dann die Beine, den Bauch, die Hände, die Schultern, das Gesicht.',
    'Zum Schluss liegt ihr ganz schwer und warm da.',
  ],
  learn: 'Anspannung und Entspannung im Körper spüren.',
})
