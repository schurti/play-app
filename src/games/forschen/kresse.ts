import { defineGame } from '../types'

export default defineGame({
  id: 'kresse',
  title: 'Kresse-Garten',
  emoji: '🌱',
  category: 'forschen',
  minAge: 3,
  minutes: 10,
  items: ['Kresse-Samen', 'Küchenpapier', 'Becher'],
  tags: ['allein', 'leise'],
  order: 70,
  steps: [
    'Malt ein Gesicht auf einen Becher.',
    'Legt nasses Küchenpapier hinein und streut Kresse-Samen darauf.',
    'Jeden Tag ein bisschen giessen.',
    'Nach etwa einer Woche hat das Gesicht Haare – ernten und aufs Butterbrot!',
  ],
  learn: 'Pflanzen brauchen Wasser und Licht.',
})
