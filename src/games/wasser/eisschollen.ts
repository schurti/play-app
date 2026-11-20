import { defineGame } from '../types'

export default defineGame({
  id: 'eisschollen',
  title: 'Eisschollen-Rettung',
  emoji: '🧊',
  category: 'wasser',
  minAge: 3,
  minutes: 15,
  items: ['Wasser', 'Schüssel', 'Löffel'],
  tags: ['allein'],
  order: 170,
  steps: [
    'Friert am Vortag Wasser in einer Schüssel oder in Joghurtbechern ein.',
    'Legt die Eisschollen in die Badewanne oder in ein Becken.',
    'Setzt kleine Spielfiguren oder Tiere darauf.',
    'Rettet sie mit dem Löffel, bevor das Eis schmilzt!',
  ],
  learn: 'Schmelzen beobachten und Geschicklichkeit.',
})
