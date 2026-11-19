import { defineGame } from '../types'

export default defineGame({
  id: 'hoerminute',
  title: 'Hör-Minute',
  emoji: '🤫',
  category: 'ruhe',
  minAge: 4,
  minutes: 5,
  items: [],
  tags: ['allein', 'leise'],
  order: 40,
  steps: [
    'Startet unten den Timer mit 1 Minute.',
    'Augen zu und ganz still sein.',
    'Zählt an den Fingern jedes Geräusch, das ihr hört.',
    'Danach erzählen: Was habt ihr gehört?',
  ],
  learn: 'Stille aushalten und genau hinhören.',
})
