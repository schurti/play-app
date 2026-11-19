import { defineGame } from '../types'

export default defineGame({
  id: 'namensbuchstaben',
  title: 'Namen aus der Zeitung',
  emoji: '📰',
  category: 'lernen',
  minAge: 5,
  minutes: 20,
  items: ['Zeitung', 'Papier', 'Leim'],
  tags: ['allein', 'leise'],
  order: 390,
  steps: [
    'Schreibt euren Namen auf ein Blatt.',
    'Sucht in der Zeitung die Buchstaben eures Namens – gross gedruckt ist einfacher.',
    'Schneidet sie aus und klebt sie unter euren Namen.',
    'Schafft ihr auch die Namen der Familie?',
  ],
  learn: 'Buchstaben in verschiedenen Schriften wiedererkennen.',
  adultNote: 'Das Ausschneiden üben Kinder mit einer Kinderschere.',
})
