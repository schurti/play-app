import { defineGame } from '../types'

export default defineGame({
  id: 'faltmeister',
  title: 'Falt-Meister',
  emoji: '👚',
  category: 'haushalt',
  minAge: 5,
  minutes: 15,
  items: ['Kleider'],
  tags: ['allein'],
  order: 100,
  steps: [
    'Legt ein T-Shirt flach hin.',
    'Faltet beide Seiten zur Mitte, dann das untere Drittel hoch.',
    'Noch einmal falten – fertig ist ein kleines Päckchen.',
    'Wer faltet am schönsten? Stapelt eure Päckchen in den Schrank.',
  ],
  learn: 'Genau arbeiten und Ordnung halten.',
})
