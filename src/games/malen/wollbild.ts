import { defineGame } from '../types'

export default defineGame({
  id: 'wollbild',
  title: 'Woll-Bild',
  emoji: '🧶',
  category: 'malen',
  minAge: 4,
  minutes: 20,
  items: ['Wolle', 'Leim', 'Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 190,
  steps: [
    'Malt eine einfache Form vor: Sonne, Schnecke, Wolke.',
    'Fahrt die Linien mit Leim nach.',
    'Legt Wollfäden auf den Leim und drückt sie fest.',
    'Malt den Rest des Bildes dazu.',
  ],
  learn: 'Feinmotorik und Fühlen von Material.',
})
