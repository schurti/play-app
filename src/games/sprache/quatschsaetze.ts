import { defineGame } from '../types'

export default defineGame({
  id: 'quatschsaetze',
  title: 'Verrückte Sätze',
  emoji: '🌀',
  category: 'sprache',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Jeder schreibt oder malt auf drei Zettel: WER (eine Figur), MACHT WAS (Tätigkeit), WO (Ort).',
    'Sammelt die Zettel getrennt und mischt sie.',
    'Zieht je einen Zettel und lest den Satz vor: „Die Oma tanzt im Kühlschrank.“',
  ],
  learn: 'Satzbau und Lachen über Sprache.',
})
