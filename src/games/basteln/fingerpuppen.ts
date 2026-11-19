import { defineGame } from '../types'

export default defineGame({
  id: 'fingerpuppen',
  title: 'Finger-Puppen',
  emoji: '☝️',
  category: 'basteln',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['allein', 'leise'],
  order: 180,
  steps: [
    'Schneidet schmale Papierstreifen.',
    'Malt auf jeden Streifen ein Gesicht: Prinzessin, Drache, Frosch.',
    'Klebt die Streifen zu Ringen, die auf eure Finger passen.',
    'Spielt mit allen zehn Fingern ein Theater!',
  ],
  learn: 'Erzählen und Feinmotorik.',
})
