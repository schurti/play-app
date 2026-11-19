import { defineGame } from '../types'

export default defineGame({
  id: 'klammernab',
  title: 'Klammern abziehen',
  emoji: '📎',
  category: 'haushalt',
  minAge: 2,
  minutes: 10,
  items: ['Klammern', 'Karton'],
  tags: ['allein', 'leise'],
  order: 170,
  steps: [
    'Steckt Wäscheklammern an den Rand eines Kartons oder Eimers.',
    'Das Kind zieht sie ab und wirft sie in eine Schüssel.',
    'Schwieriger: wieder anstecken.',
  ],
  learn: 'Kraft in den Fingern und Feinmotorik.',
})
