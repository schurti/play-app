import { defineGame } from '../types'

export default defineGame({
  id: 'rechenfahrt',
  title: 'Rechen-Fahrt',
  emoji: '➕',
  category: 'unterwegs',
  minAge: 6,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 80,
  steps: [
    'Nehmt die Zahlen auf einem Nummernschild.',
    'Zählt die einzelnen Ziffern zusammen: 3 + 4 + 1 = 8.',
    'Wer zuerst das Ergebnis ruft, bekommt einen Punkt.',
  ],
  learn: 'Kopfrechnen im Alltag.',
})
