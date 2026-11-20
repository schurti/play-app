import { defineGame } from '../types'

export default defineGame({
  id: 'spiegelbauen',
  title: 'Spiegel-Bauen',
  emoji: '🪞',
  category: 'bauen',
  minAge: 5,
  minutes: 15,
  items: ['Duplo'],
  tags: ['gruppe', 'leise'],
  order: 200,
  steps: [
    'Legt eine Linie in die Tischmitte, zum Beispiel einen Stift.',
    'Eines baut links davon einen Stein nach dem anderen.',
    'Das andere baut rechts genau spiegelverkehrt mit.',
    'Am Ende entsteht ein Bauwerk, das auf beiden Seiten gleich aussieht.',
  ],
  learn: 'Symmetrie und Raumvorstellung.',
})
