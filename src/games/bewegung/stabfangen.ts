import { defineGame } from '../types'

export default defineGame({
  id: 'stabfangen',
  title: 'Stab fangen',
  emoji: '🧹',
  category: 'bewegung',
  minAge: 5,
  minutes: 10,
  items: ['Besen'],
  tags: ['gruppe'],
  place: 'beides',
  order: 430,
  steps: [
    'Stellt euch zu zweit gegenüber, etwa einen Meter auseinander. Jede Person hält einen Besen senkrecht auf den Boden.',
    'Auf „Wechsel!“ lassen beide los und rennen zum Besen des anderen.',
    'Wer ihn fängt, bevor er umfällt, macht einen Schritt nach hinten.',
    'Wie weit schafft ihr es?',
  ],
  learn: 'Reaktion, Schnelligkeit und Abstand schätzen.',
})
