import { defineGame } from '../types'

export default defineGame({
  id: 'rhythmus',
  title: 'Rhythmus-Echo',
  emoji: '👏',
  category: 'musik',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 10,
  steps: [
    'Hört euch das Muster in der App an.',
    'Macht es nach: 👏 klatschen, 🦶 stampfen, 🥁 auf den Tisch klopfen.',
    'Gelingt es? Dann ein neues, längeres Muster.',
  ],
  learn: 'Takt, Rhythmus und Merkfähigkeit.',
  tool: 'rhythm',
})
