import { defineGame } from '../types'

export default defineGame({
  id: 'minifloss',
  title: 'Mini-Floss',
  emoji: '🛶',
  category: 'draussen',
  minAge: 5,
  minutes: 30,
  items: ['Schnur'],
  tags: ['allein'],
  seasons: ['sommer'],
  order: 260,
  steps: [
    'Sammelt gerade Stöcke, etwa gleich lang.',
    'Legt sie nebeneinander und bindet sie oben und unten mit Schnur zusammen.',
    'Steckt ein Blatt als Segel auf einen kleinen Stock in die Mitte.',
    'Lasst das Floss in einer Pfütze oder am Bachrand schwimmen.',
  ],
  learn: 'Bauen, Knoten und Schwimmen ausprobieren.',
  adultNote: 'Am Wasser nur mit Erwachsenen.',
})
