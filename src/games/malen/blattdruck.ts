import { defineGame } from '../types'

export default defineGame({
  id: 'blattdruck',
  title: 'Blätter-Druck',
  emoji: '🍂',
  category: 'malen',
  minAge: 3,
  minutes: 15,
  items: ['Farbe', 'Pinsel', 'Papier'],
  tags: ['allein', 'leise'],
  order: 240,
  steps: [
    'Sammelt draussen ein paar Blätter mit starken Adern.',
    'Bemalt die Rückseite eines Blattes mit Farbe.',
    'Drückt es mit der Farbseite aufs Papier und zieht es ab.',
    'Druckt einen ganzen Wald!',
  ],
  learn: 'Formen der Natur entdecken und drucken.',
})
