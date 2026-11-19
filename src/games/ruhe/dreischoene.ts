import { defineGame } from '../types'

export default defineGame({
  id: 'dreischoene',
  title: 'Drei schöne Dinge',
  emoji: '💛',
  category: 'ruhe',
  minAge: 3,
  minutes: 5,
  items: [],
  tags: ['leise'],
  order: 170,
  steps: [
    'Am Abend setzt ihr euch zusammen.',
    'Jeder erzählt drei schöne Dinge vom Tag.',
    'Auch Kleinigkeiten zählen: ein feines Znüni, ein Lachen, ein Vogel.',
    'Wer mag, malt eines davon auf.',
  ],
  learn: 'Dankbarkeit und über Gefühle sprechen.',
})
