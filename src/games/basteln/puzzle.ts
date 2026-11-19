import { defineGame } from '../types'

export default defineGame({
  id: 'puzzle',
  title: 'Karton-Puzzle',
  emoji: '🧩',
  category: 'basteln',
  minAge: 4,
  minutes: 20,
  items: ['Karton', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 90,
  steps: [
    'Malt ein Bild auf ein Stück Karton, z. B. eine Müeslischachtel.',
    'Schneidet es in 6 bis 12 Teile (Erwachsene helfen).',
    'Mischen und puzzlen – dann tauschen.',
  ],
  learn: 'Teile und Ganzes erkennen.',
})
