import { defineGame } from '../types'

export default defineGame({
  id: 'kniereiter',
  title: 'Kniereiter',
  emoji: '🐎',
  category: 'ruhe',
  minAge: 1,
  minutes: 5,
  items: [],
  tags: ['leise'],
  order: 340,
  steps: [
    'Setzt das Kind auf eure Knie, Gesicht zu euch.',
    'Wippt im Takt eines Reims: „Hoppe, hoppe, Reiter …“',
    'Beim letzten Wort öffnet ihr die Knie – das Kind „plumpst“ sanft hinunter und wird aufgefangen.',
    'Nochmal!',
  ],
  learn: 'Rhythmus, Vertrauen und Nähe.',
  adultNote: 'Kind gut an den Händen oder unter den Armen halten.',
})
