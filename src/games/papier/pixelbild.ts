import { defineGame } from '../types'

export default defineGame({
  id: 'pixelbild',
  title: 'Kästchen-Bilder',
  emoji: '🟥',
  category: 'papier',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 210,
  steps: [
    'Nehmt Häuschenpapier.',
    'Malt einzelne Kästchen bunt aus, sodass ein Bild entsteht: Herz, Pilz, Katze.',
    'Zeichnet das gleiche Bild nochmals – doppelt so gross.',
    'Erfindet eigene Kästchen-Figuren.',
  ],
  learn: 'Muster, Zählen und Raster verstehen.',
})
