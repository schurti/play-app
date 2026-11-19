import { defineGame } from '../types'

export default defineGame({
  id: 'hoehle',
  title: 'Höhlen-Bau',
  emoji: '⛺',
  category: 'rollen',
  minAge: 3,
  minutes: 30,
  items: ['Decke', 'Kissen', 'Klammern'],
  tags: ['allein'],
  order: 40,
  steps: [
    'Legt eine Decke über Stühle oder Sofa.',
    'Haltet sie mit Wäscheklammern fest.',
    'Polstert den Boden mit Kissen.',
    'Taschenlampe rein – Bücher, Picknick oder Geschichten!',
  ],
  learn: 'Bauen, Planen und Geborgenheit.',
})
