import { defineGame } from '../types'

export default defineGame({
  id: 'bauernhof',
  title: 'Bauernhof',
  emoji: '🐄',
  category: 'rollen',
  minAge: 3,
  minutes: 25,
  items: ['Kuscheltier', 'Karton', 'Nudeln'],
  tags: ['allein'],
  order: 210,
  steps: [
    'Baut aus Schachteln Ställe.',
    'Die Kuscheltiere sind die Tiere vom Hof.',
    'Füttert sie mit Nudeln, bringt sie auf die Weide und in den Stall.',
    'Was sagt jedes Tier? Muh, mäh, gack!',
  ],
  learn: 'Tiere, Fürsorge und Tagesablauf.',
})
