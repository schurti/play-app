import { defineGame } from '../types'

export default defineGame({
  id: 'stickerbild',
  title: 'Sticker kleben',
  emoji: '⭐',
  category: 'basteln',
  minAge: 2,
  minutes: 10,
  items: ['Papier'],
  tags: ['allein', 'leise'],
  order: 330,
  steps: [
    'Gebt dem Kind einen Bogen grosse Sticker.',
    'Es zieht sie ab und klebt sie auf ein Papier.',
    'Malt mit einem Stift Kreise – passen die Sticker hinein?',
  ],
  learn: 'Pinzettengriff und Konzentration.',
})
