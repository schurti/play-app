import { defineGame } from '../types'

export default defineGame({
  id: 'rieseklein',
  title: 'Riese und Zwerg',
  emoji: '🐘',
  category: 'papier',
  minAge: 3,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 160,
  steps: [
    'Zeichnet etwas ganz Kleines: eine winzige Maus, ein winziges Haus.',
    'Dann dasselbe riesengross – so gross, dass es fast nicht aufs Blatt passt.',
    'Vergleicht: Was ist gleich, was anders?',
  ],
  learn: 'Grössen vergleichen: gross, klein, riesig, winzig.',
})
