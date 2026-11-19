import { defineGame } from '../types'

export default defineGame({
  id: 'salzteig',
  title: 'Salzteig kneten',
  emoji: '🥨',
  category: 'basteln',
  minAge: 3,
  minutes: 30,
  items: ['Mehl', 'Salz', 'Wasser', 'Schüssel'],
  tags: ['allein'],
  order: 200,
  steps: [
    'Mischt 2 Tassen Mehl und 1 Tasse Salz in einer Schüssel.',
    'Gebt nach und nach etwa eine Dreivierteltasse Wasser dazu und knetet.',
    'Formt Tiere, Schnecken, Herzen oder Buchstaben.',
    'Lasst die Figuren ein paar Tage trocknen und bemalt sie dann.',
  ],
  learn: 'Abmessen, Kneten und Gestalten.',
  adultNote: 'Salzteig ist nicht zum Essen – viel Salz!',
})
