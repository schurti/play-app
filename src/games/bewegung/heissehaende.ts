import { defineGame } from '../types'

export default defineGame({
  id: 'heissehaende',
  title: 'Heisse Hände',
  emoji: '👋',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  place: 'beides',
  order: 370,
  steps: [
    'Zwei Personen stehen sich gegenüber. Eine hält die Hände mit den Handflächen nach oben.',
    'Die andere legt ihre Hände leicht darauf, Handflächen nach unten.',
    'Die untere Person versucht, blitzschnell auf die Handrücken der oberen zu tippen.',
    'Die obere zieht schnell weg. Treffer? Dann Rollen tauschen.',
  ],
  learn: 'Reaktion, Aufmerksamkeit und sanftes Spielen.',
})
