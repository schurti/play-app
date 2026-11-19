import { defineGame } from '../types'

export default defineGame({
  id: 'reimbilder',
  title: 'Reim-Bilder',
  emoji: '🐭',
  category: 'papier',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 290,
  steps: [
    'Teilt ein Blatt in zwei Hälften.',
    'Links malt ein Erwachsener etwas, z. B. eine Maus.',
    'Rechts malt das Kind etwas, das sich darauf reimt: ein Haus!',
    'Wie viele Reim-Paare schafft ihr?',
  ],
  learn: 'Reime hören – eine wichtige Vorstufe zum Lesen.',
})
