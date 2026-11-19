import { defineGame } from '../types'

export default defineGame({
  id: 'staebchenraetsel',
  title: 'Stäbchen-Rätsel',
  emoji: '🥢',
  category: 'knobeln',
  minAge: 6,
  minutes: 15,
  items: ['Wattestäbchen'],
  tags: ['allein', 'leise'],
  order: 30,
  steps: [
    'Legt aus 12 Wattestäbchen ein Fenster aus 4 kleinen Quadraten (2 × 2).',
    'Aufgabe 1: Nehmt 2 Stäbchen weg, sodass nur noch 2 Quadrate übrig bleiben.',
    'Aufgabe 2: Legt 3 Stäbchen so um, dass 3 gleich grosse Quadrate entstehen.',
    'Erfindet eigene Rätsel für die anderen.',
  ],
  learn: 'Räumliches Denken und Ausprobieren.',
})
