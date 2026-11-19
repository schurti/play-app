import { defineGame } from '../types'

export default defineGame({
  id: 'silbenpuzzle',
  title: 'Silben-Puzzle',
  emoji: '🧩',
  category: 'sprache',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein'],
  order: 80,
  steps: [
    'Schreibt Wörter mit zwei oder drei Silben auf Zettel: Ba-na-ne, Ta-sche, Ro-bo-ter.',
    'Schneidet die Silben auseinander und mischt sie.',
    'Das Kind setzt die Wörter wieder zusammen.',
    'Bonus: Quatsch-Wörter aus falschen Silben bauen.',
  ],
  learn: 'Silben erkennen – ein wichtiger Schritt zum Lesen.',
})
