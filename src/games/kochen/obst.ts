import { defineGame } from '../types'

export default defineGame({
  id: 'obst',
  title: 'Obst-Gesichter',
  emoji: '🍎',
  category: 'kochen',
  minAge: 3,
  minutes: 15,
  items: ['Obst', 'Teller'],
  tags: ['allein'],
  order: 10,
  steps: [
    'Schneidet verschiedene Früchte und Gemüse in Stücke.',
    'Legt auf dem Teller Gesichter, Tiere oder ein Haus.',
    'Foto machen – und dann aufessen!',
  ],
  learn: 'Gesund essen und kreativ sein.',
  adultNote:
    'Schneiden macht ein Erwachsener – oder das Kind mit einem Kindermesser.',
})
