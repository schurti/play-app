import { defineGame } from '../types'

export default defineGame({
  id: 'klatschverse',
  title: 'Klatsch-Verse',
  emoji: '👐',
  category: 'musik',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 140,
  steps: [
    'Setzt euch gegenüber.',
    'Klatscht einen einfachen Rhythmus: in die eigenen Hände, dann gegen die Hände des anderen.',
    'Sprecht dazu einen kurzen Vers, z. B. „Eins, zwei, Papagei, drei, vier, Grenadier“.',
    'Werdet immer schneller!',
  ],
  learn: 'Rhythmus, Sprache und Koordination verbinden.',
})
