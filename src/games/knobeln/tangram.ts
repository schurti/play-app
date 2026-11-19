import { defineGame } from '../types'

export default defineGame({
  id: 'tangram',
  title: 'Papier-Tangram',
  emoji: '🟩',
  category: 'knobeln',
  minAge: 5,
  minutes: 25,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 70,
  steps: [
    'Schneidet ein quadratisches Papier in 7 Teile: 2 grosse Dreiecke, 1 mittleres, 2 kleine, 1 Quadrat, 1 Parallelogramm.',
    'Legt aus allen Teilen Figuren: Katze, Haus, Schiff.',
    'Zeichnet den Umriss nach – kann jemand anderes die Figur nachlegen?',
  ],
  learn: 'Formen zusammensetzen und räumliches Denken.',
})
