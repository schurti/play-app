import { defineGame } from '../types'

export default defineGame({
  id: 'telleruhr',
  title: 'Teller-Uhr',
  emoji: '🕐',
  category: 'lernen',
  minAge: 5,
  minutes: 25,
  items: ['Teller', 'Stifte', 'Karton'],
  tags: ['allein'],
  order: 300,
  steps: [
    'Schreibt auf einen Pappteller die Zahlen 1 bis 12 wie bei einer Uhr.',
    'Schneidet aus Karton einen langen und einen kurzen Zeiger.',
    'Ein Erwachsener befestigt die Zeiger in der Mitte.',
    'Stellt Uhrzeiten ein: „Um 7 Uhr stehen wir auf, um 12 Uhr essen wir.“',
  ],
  learn: 'Volle Stunden lesen und den Tagesablauf verstehen.',
  adultNote:
    'Die Zeiger befestigt ein Erwachsener mit einer Musterklammer in der Mitte.',
})
