import { defineGame } from '../types'

export default defineGame({
  id: 'dominokette',
  title: 'Domino-Kette',
  emoji: '🀄',
  category: 'knobeln',
  minAge: 4,
  minutes: 20,
  items: ['Bausteine'],
  tags: ['allein', 'gruppe'],
  order: 110,
  steps: [
    'Stellt Bauklötze oder Bücher hochkant in eine lange Reihe – mit kleinem Abstand.',
    'Baut Kurven, Treppen und Abzweigungen.',
    'Tippt den ersten Stein an.',
    'Fällt die ganze Kette? Wo hat es gestockt?',
  ],
  learn: 'Ursache und Wirkung, Geduld und Planen.',
})
