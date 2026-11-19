import { defineGame } from '../types'

export default defineGame({
  id: 'sockenwurf',
  title: 'Socken-Wurf',
  emoji: '🧦',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: ['Socken', 'Schüssel'],
  tags: ['allein', 'gruppe'],
  order: 10,
  steps: [
    'Rollt Socken zu Bällen.',
    'Stellt eine Schüssel in einigem Abstand auf.',
    'Jeder wirft fünf Mal. Wer trifft am meisten?',
    'Nach jeder Runde einen Schritt weiter weg.',
  ],
  learn: 'Zielen und Körpergefühl.',
})
