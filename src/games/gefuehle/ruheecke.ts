import { defineGame } from '../types'

export default defineGame({
  id: 'ruheecke',
  title: 'Ruhe-Ecke einrichten',
  emoji: '🛋️',
  category: 'gefuehle',
  minAge: 3,
  minutes: 20,
  items: ['Kissen', 'Decke', 'Kuscheltier', 'Bücher'],
  tags: ['gruppe', 'leise'],
  order: 190,
  steps: [
    'Sucht zusammen eine ruhige Ecke in der Wohnung.',
    'Richtet sie gemütlich ein: Kissen, Decke, ein Lieblingskuscheltier, ein paar Bücher.',
    'Besprecht: Hierher darf man gehen, wenn Gefühle zu gross werden.',
    'Probiert es gleich aus: Drei tiefe Atemzüge in der Ruhe-Ecke.',
  ],
  learn: 'Sich selbst beruhigen lernen.',
  adultNote: 'Die Ruhe-Ecke ist kein Strafort, sondern ein Ort zum Auftanken.',
})
