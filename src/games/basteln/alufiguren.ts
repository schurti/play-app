import { defineGame } from '../types'

export default defineGame({
  id: 'alufiguren',
  title: 'Alu-Figuren',
  emoji: '🤖',
  category: 'basteln',
  minAge: 4,
  minutes: 15,
  items: ['Alufolie'],
  tags: ['allein', 'leise'],
  order: 190,
  steps: [
    'Reisst Stücke Alufolie ab.',
    'Knüllt und formt daraus Figuren: Männchen, Tiere, Roboter.',
    'Arme und Beine lassen sich biegen – stellt sie in lustige Posen.',
  ],
  learn: 'Formen mit den Händen und räumliches Denken.',
})
