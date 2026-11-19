import { defineGame } from '../types'

export default defineGame({
  id: 'hotelbett',
  title: 'Bett machen wie im Hotel',
  emoji: '🛏️',
  category: 'haushalt',
  minAge: 5,
  minutes: 10,
  items: ['Kissen', 'Decke'],
  tags: ['allein'],
  order: 110,
  steps: [
    'Schüttelt Kissen und Decke kräftig auf.',
    'Zieht das Leintuch glatt.',
    'Legt die Decke ordentlich hin und das Kissen obenauf.',
    'Setzt ein Kuscheltier als „Hotelgast“ dazu – fertig!',
  ],
  learn: 'Selbstständigkeit am Morgen.',
})
