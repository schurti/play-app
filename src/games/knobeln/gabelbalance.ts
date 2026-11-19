import { defineGame } from '../types'

export default defineGame({
  id: 'gabelbalance',
  title: 'Gabel-Balance',
  emoji: '🍴',
  category: 'knobeln',
  minAge: 6,
  minutes: 15,
  items: ['Gläser'],
  tags: ['allein'],
  order: 130,
  steps: [
    'Steckt zwei Gabeln ineinander, sodass sie ein V bilden.',
    'Steckt einen Zahnstocher zwischen die Zinken.',
    'Legt die Spitze des Zahnstochers auf den Glasrand.',
    'Ausprobieren, bis alles frei schwebt – Zauberei? Nein, Schwerpunkt!',
  ],
  learn: 'Gleichgewicht und Schwerpunkt entdecken.',
  adultNote: 'Nur über einer weichen Unterlage üben.',
})
