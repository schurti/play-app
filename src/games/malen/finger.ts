import { defineGame } from '../types'

export default defineGame({
  id: 'finger',
  title: 'Fingerabdruck-Tiere',
  emoji: '👆',
  category: 'malen',
  minAge: 3,
  minutes: 15,
  items: ['Farbe', 'Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 110,
  steps: [
    'Tunkt eine Fingerspitze in Farbe und drückt sie aufs Papier.',
    'Macht viele Abdrücke.',
    'Malt mit dem Stift Beine, Augen und Flügel dazu: Käfer, Mäuse, Vögel.',
  ],
  learn: 'Fantasie und Feinmotorik.',
})
