import { defineGame } from '../types'

export default defineGame({
  id: 'farbensammler',
  title: 'Farben-Sammler draussen',
  emoji: '🍂',
  category: 'draussen',
  minAge: 3,
  minutes: 20,
  items: ['Eierkarton', 'Stifte'],
  tags: ['allein'],
  order: 80,
  steps: [
    'Malt in jede Mulde eines Eierkartons einen Farbklecks: Rot, Gelb, Grün, Braun …',
    'Geht nach draussen und sucht zu jeder Farbe etwas: Blatt, Blüte, Steinchen.',
    'Legt es in die passende Mulde.',
    'Welche Farbe war am schwierigsten zu finden?',
  ],
  learn: 'Farben in der Natur genau anschauen.',
})
