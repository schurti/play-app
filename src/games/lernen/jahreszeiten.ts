import { defineGame } from '../types'

export default defineGame({
  id: 'jahreszeiten',
  title: 'Jahreszeiten-Schrank',
  emoji: '🍁',
  category: 'lernen',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein'],
  order: 500,
  steps: [
    'Teilt ein Blatt in vier Felder: Frühling, Sommer, Herbst, Winter.',
    'Malt in jedes Feld passende Kleider: Badehose, Regenjacke, Mütze …',
    'Und was macht man in jeder Jahreszeit draussen?',
    'In welcher Jahreszeit seid ihr gerade?',
  ],
  learn: 'Jahreszeiten und passende Kleidung kennen.',
})
