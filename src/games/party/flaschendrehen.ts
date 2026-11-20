import { defineGame } from '../types'

export default defineGame({
  id: 'flaschendrehen',
  title: 'Flaschen-Drehen',
  emoji: '🍾',
  category: 'party',
  minAge: 4,
  minutes: 15,
  items: ['PET-Flasche'],
  tags: ['gruppe'],
  order: 190,
  steps: [
    'Setzt euch im Kreis, in der Mitte liegt eine leere PET-Flasche.',
    'Ein Kind dreht die Flasche.',
    'Wer am Schluss mit dem Flaschenhals gezeigt wird, macht eine lustige Aufgabe: wie ein Hund bellen, auf einem Bein hüpfen, einen Witz erzählen.',
    'Dann dreht dieses Kind.',
  ],
  learn: 'Mut, Fantasie und Spass in der Gruppe.',
})
