import { defineGame } from '../types'

export default defineGame({
  id: 'baumrubbeln',
  title: 'Baum-Rubbeln',
  emoji: '🌲',
  category: 'draussen',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 90,
  steps: [
    'Haltet ein Papier an einen Baumstamm.',
    'Rubbelt mit der Seite eines Stiftes darüber – das Muster der Rinde erscheint.',
    'Macht das bei verschiedenen Bäumen.',
    'Zuhause: Erkennt ihr, welches Bild von welchem Baum ist?',
  ],
  learn: 'Bäume an ihrer Rinde unterscheiden.',
})
