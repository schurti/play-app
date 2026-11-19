import { defineGame } from '../types'

export default defineGame({
  id: 'handtiere',
  title: 'Hand-Tiere',
  emoji: '✋',
  category: 'papier',
  minAge: 3,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 280,
  steps: [
    'Legt die Hand flach aufs Papier und fahrt sie mit dem Stift nach.',
    'Was könnte daraus werden? Ein Truthahn, ein Fisch, ein Igel?',
    'Malt Augen, Schnabel und Federn dazu.',
    'Auch mit Füssen ausprobieren!',
  ],
  learn: 'Umrisse erkennen und Fantasie.',
})
