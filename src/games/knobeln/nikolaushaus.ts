import { defineGame } from '../types'

export default defineGame({
  id: 'nikolaushaus',
  title: 'Haus vom Nikolaus',
  emoji: '🏠',
  category: 'knobeln',
  minAge: 5,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 170,
  steps: [
    'Zeichnet ein Haus mit Dach und einem Kreuz im Viereck, in einem Zug.',
    'Der Stift darf nicht abgesetzt werden, und keine Linie wird zweimal gezogen.',
    'Sprecht beim Zeichnen: «Das – ist – das – Haus – vom – Ni – ko – laus»: acht Silben, acht Striche.',
    'Wo muss man anfangen, damit es klappt?',
  ],
  learn: 'Ausprobieren, Strategie und Feinmotorik.',
})
