import { defineGame } from '../types'

export default defineGame({
  id: 'tischkantenschnipsen',
  title: 'Tischkanten-Schnipsen',
  emoji: '🃏',
  category: 'ruhe',
  minAge: 5,
  minutes: 10,
  items: ['Papier'],
  tags: ['gruppe', 'leise'],
  order: 290,
  steps: [
    'Faltet ein Papier zu einem kleinen, festen Päckchen.',
    'Schnipst es von eurer Tischseite aus über den Tisch.',
    'Wer es am nächsten an die Kante bringt, ohne dass es herunterfällt, gewinnt die Runde.',
    'Variante: mit einem umgedrehten Becher, der über den Tisch geschoben wird.',
  ],
  learn: 'Kraft dosieren und Geduld.',
})
