import { defineGame } from '../types'

export default defineGame({
  id: 'daumencatchen',
  title: 'Daumen-Catchen',
  emoji: '👍',
  category: 'unterwegs',
  minAge: 4,
  minutes: 5,
  items: [],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Haltet euch mit den Fingern so, dass die Daumen oben frei sind.',
    'Zählt: „Eins, zwei, drei, vier – Daumenkrieg!“',
    'Wer den Daumen des anderen kurz festhält, gewinnt.',
    'Fair bleiben – nur mit dem Daumen!',
  ],
  learn: 'Reaktion und Geschicklichkeit auf engem Raum.',
})
