import { defineGame } from '../types'

export default defineGame({
  id: 'naturmandala',
  title: 'Natur-Mandala',
  emoji: '🍁',
  category: 'draussen',
  minAge: 3,
  minutes: 20,
  items: [],
  tags: ['allein', 'leise'],
  seasons: ['herbst'],
  order: 30,
  steps: [
    'Sammelt draussen Blätter, Steine, Zapfen, Blüten und Stöcke.',
    'Legt in die Mitte einen schönen Stein.',
    'Legt rundherum Kreise: einen Ring aus Blättern, dann Zapfen, dann Blüten …',
    'Macht ein Foto – der Wind darf das Kunstwerk danach behalten.',
  ],
  learn: 'Formen, Muster und Ruhe in der Natur.',
})
