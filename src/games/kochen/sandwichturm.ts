import { defineGame } from '../types'

export default defineGame({
  id: 'sandwichturm',
  title: 'Sandwich-Turm',
  emoji: '🥪',
  category: 'kochen',
  minAge: 3,
  minutes: 15,
  items: ['Teller'],
  tags: ['gruppe'],
  order: 150,
  steps: [
    'Legt Brot, Käse, Gurke, Salat und Schinken bereit.',
    'Baut abwechselnd einen hohen Sandwich-Turm.',
    'Schneidet ihn in Würfel und steckt Zahnstocher hinein.',
    'Wer schafft den höchsten Turm, der nicht umfällt?',
  ],
  learn: 'Bauen, Balance – und ein feines Zvieri.',
})
