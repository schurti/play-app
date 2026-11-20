import { defineGame } from '../types'

export default defineGame({
  id: 'chefminuten',
  title: 'Chef für zehn Minuten',
  emoji: '👑',
  category: 'geschwister',
  minAge: 3,
  minutes: 20,
  items: [],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Das kleinere Kind ist zehn Minuten lang der Chef.',
    'Es bestimmt, was gespielt wird, und das grössere macht mit.',
    'Dann wird getauscht: Das grössere ist Chef.',
    'Sprecht danach: Wie war es, Chef zu sein? Wie war es, mitzumachen?',
  ],
  learn: 'Rücksicht, Abwechseln und eigene Wünsche ausdrücken.',
  adultNote: 'Erwachsene achten darauf, dass die Wünsche fair und sicher sind.',
})
