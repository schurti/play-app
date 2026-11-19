import { defineGame } from '../types'

export default defineGame({
  id: 'deckelsortierer',
  title: 'Deckel-Briefkasten',
  emoji: '📮',
  category: 'lernen',
  minAge: 1,
  minutes: 10,
  items: ['Karton'],
  tags: ['allein'],
  order: 620,
  steps: [
    'Schneidet einen Schlitz in einen Kartondeckel oder eine Dose.',
    'Das Kind steckt grosse Deckel oder Bierdeckel hinein.',
    'Plopp! Deckel auf, alles raus, nochmal.',
  ],
  learn: 'Hand-Auge-Koordination und Ursache-Wirkung.',
  adultNote: 'Kleine Teile verschluckt man leicht – immer dabeibleiben.',
})
