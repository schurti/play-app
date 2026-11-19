import { defineGame } from '../types'

export default defineGame({
  id: 'kritzel',
  title: 'Kritzel-Zauber',
  emoji: '✏️',
  category: 'malen',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['leise'],
  order: 70,
  steps: [
    'Eine Person macht ein wildes Kritzel aufs Papier.',
    'Die andere zaubert daraus etwas: ein Tier, ein Auto, ein Monster.',
    'Dann tauschen.',
  ],
  learn: 'Fantasie und Dinge in Formen erkennen.',
})
