import { defineGame } from '../types'

export default defineGame({
  id: 'eierraupe',
  title: 'Eierkarton-Raupe',
  emoji: '🐛',
  category: 'basteln',
  minAge: 3,
  minutes: 25,
  items: ['Eierkarton', 'Farbe', 'Pinsel', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 120,
  steps: [
    'Schneidet einen Eierkarton der Länge nach in einen Streifen mit 4 bis 6 Mulden.',
    'Bemalt die Raupe bunt.',
    'Wenn die Farbe trocken ist: Augen, Mund und Fühler aufmalen.',
    'Lasst die Raupe über den Tisch krabbeln!',
  ],
  learn: 'Malen, Gestalten und Wiederverwerten.',
  adultNote: 'Das Zerschneiden des Eierkartons macht ein Erwachsener.',
})
