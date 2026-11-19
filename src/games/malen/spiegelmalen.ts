import { defineGame } from '../types'

export default defineGame({
  id: 'spiegelmalen',
  title: 'Spiegel-Malen zu zweit',
  emoji: '🪞',
  category: 'malen',
  minAge: 5,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 160,
  steps: [
    'Zeichnet eine Linie in die Mitte des Blattes.',
    'Eine Person malt langsam auf ihrer Seite.',
    'Die andere malt dasselbe gespiegelt auf der anderen Seite.',
    'Danach tauschen. Wird es ein symmetrisches Bild?',
  ],
  learn: 'Genau beobachten, Symmetrie und Zusammenarbeit.',
})
