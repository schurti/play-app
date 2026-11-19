import { defineGame } from '../types'

export default defineGame({
  id: 'langsamessen',
  title: 'Zeitlupen-Essen',
  emoji: '🍎',
  category: 'ruhe',
  minAge: 4,
  minutes: 5,
  items: ['Obst'],
  tags: ['allein', 'leise'],
  order: 250,
  steps: [
    'Jeder bekommt ein kleines Stück Apfel.',
    'Schaut es zuerst genau an und riecht daran.',
    'Esst es so langsam wie möglich.',
    'Erzählt: Wie fühlt es sich an? Wie schmeckt es?',
  ],
  learn: 'Mit allen Sinnen wahrnehmen.',
})
