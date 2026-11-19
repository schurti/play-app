import { defineGame } from '../types'

export default defineGame({
  id: 'teamturm',
  title: 'Turm ohne Worte',
  emoji: '🤝',
  category: 'gefuehle',
  minAge: 5,
  minutes: 15,
  items: ['Becher'],
  tags: ['gruppe'],
  order: 100,
  steps: [
    'Baut zusammen einen Becher-Turm.',
    'Aber: Niemand darf sprechen!',
    'Verständigt euch nur mit Gesten und Blicken.',
    'Danach erzählen: Was war schwierig, was hat geholfen?',
  ],
  learn: 'Zusammenarbeit ohne Worte.',
})
