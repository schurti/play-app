import { defineGame } from '../types'

export default defineGame({
  id: 'modenschau',
  title: 'Modenschau',
  emoji: '👗',
  category: 'rollen',
  minAge: 3,
  minutes: 20,
  items: ['Kleider', 'Klebeband'],
  tags: ['gruppe'],
  order: 70,
  steps: [
    'Klebt einen Laufsteg auf den Boden.',
    'Verkleidet euch mit Kleidern, Tüchern und Hüten.',
    'Musik an und über den Laufsteg laufen.',
    'Das Publikum klatscht und macht Fotos.',
  ],
  learn: 'Selbstvertrauen und Fantasie.',
})
