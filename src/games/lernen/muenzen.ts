import { defineGame } from '../types'

export default defineGame({
  id: 'muenzen',
  title: 'Münz-Detektiv',
  emoji: '🪙',
  category: 'lernen',
  minAge: 5,
  minutes: 15,
  items: ['Münzen', 'Teller'],
  tags: ['allein'],
  order: 320,
  steps: [
    'Schüttet eine Handvoll Münzen auf den Tisch.',
    'Sortiert sie nach Wert auf Teller.',
    'Wie viele Münzen hat jeder Teller?',
    'Legt mit den Münzen genau einen Franken zusammen.',
  ],
  learn: 'Münzen unterscheiden, sortieren und erste Geldbeträge.',
  adultNote:
    'Münzen sind klein und können verschluckt werden – nur mit Erwachsenen spielen.',
})
