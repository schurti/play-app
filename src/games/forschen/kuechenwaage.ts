import { defineGame } from '../types'

export default defineGame({
  id: 'kuechenwaage',
  title: 'Schätzen und Wiegen',
  emoji: '⚖️',
  category: 'forschen',
  minAge: 5,
  minutes: 15,
  items: ['Küchenwaage', 'Obst'],
  tags: ['allein'],
  order: 200,
  steps: [
    'Nehmt einen Apfel in die Hand: Wie schwer ist er wohl?',
    'Schreibt die Schätzung auf.',
    'Legt ihn auf die Küchenwaage und vergleicht.',
    'Wer schätzt bei Banane, Kartoffel und Buch am besten?',
  ],
  learn: 'Gewichte schätzen und Zahlen auf der Waage lesen.',
})
