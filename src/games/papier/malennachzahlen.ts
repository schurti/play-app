import { defineGame } from '../types'

export default defineGame({
  id: 'malennachzahlen',
  title: 'Malen nach Zahlen',
  emoji: '🔢',
  category: 'papier',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 220,
  steps: [
    'Ein Erwachsener zeichnet ein einfaches Bild mit grossen Flächen.',
    'In jede Fläche kommt eine Zahl. Daneben steht eine Legende: 1 = rot, 2 = blau, 3 = gelb.',
    'Das Kind malt jede Fläche in der richtigen Farbe aus.',
  ],
  learn: 'Zahlen erkennen und einer Farbe zuordnen.',
})
