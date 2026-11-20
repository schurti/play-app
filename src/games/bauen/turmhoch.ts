import { defineGame } from '../types'

export default defineGame({
  id: 'turmhoch',
  title: 'Höchster Turm',
  emoji: '🗼',
  category: 'bauen',
  minAge: 2,
  minutes: 10,
  items: ['Bausteine'],
  tags: ['allein'],
  order: 10,
  steps: [
    'Baut aus Bauklötzen einen Turm, so hoch es geht.',
    'Vor jedem neuen Klotz: Hält er noch? Ganz vorsichtig legen!',
    'Messt den Turm: Ist er schon so gross wie der Teddy? Wie du?',
    'Fällt er um? Lachen und noch einmal!',
  ],
  learn: 'Gleichgewicht, Geduld und Grössen vergleichen.',
  variants: 'Mit verschiedenen Klötzen: Welche Form trägt am besten?',
})
