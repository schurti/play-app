import { defineGame } from '../types'

export default defineGame({
  id: 'muenzdreieck',
  title: 'Münz-Dreieck',
  emoji: '🔺',
  category: 'knobeln',
  minAge: 6,
  minutes: 10,
  items: ['Münzen'],
  tags: ['allein', 'leise'],
  order: 40,
  steps: [
    'Legt 10 Münzen als Dreieck: 4 unten, dann 3, 2, 1.',
    'Die Spitze zeigt nach oben.',
    'Verschiebt nur 3 Münzen, sodass die Spitze nach unten zeigt.',
    'Tipp: Die mittleren Münzen bleiben liegen.',
  ],
  learn: 'Muster erkennen und vorausdenken.',
})
