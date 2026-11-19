import { defineGame } from '../types'

export default defineGame({
  id: 'seilkarussell',
  title: 'Seil-Karussell',
  emoji: '🪀',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: ['Schnur', 'Socken'],
  tags: ['gruppe'],
  place: 'beides',
  order: 360,
  steps: [
    'Bindet eine zusammengerollte Socke an ein Seil.',
    'Ein Erwachsener steht in der Mitte und lässt das Seil knapp über dem Boden im Kreis schwingen.',
    'Die Kinder stehen im Kreis und springen darüber, wenn es kommt.',
    'Wer berührt wird, setzt eine Runde aus – oder es wird einfach schneller.',
  ],
  learn: 'Reaktion, Springen und Rhythmus.',
  adultNote: 'Das Seil knapp über dem Boden halten, nie höher als die Knie.',
})
