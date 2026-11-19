import { defineGame } from '../types'

export default defineGame({
  id: 'schatzkarteparty',
  title: 'Party-Schatzsuche',
  emoji: '🏴‍☠️',
  category: 'party',
  minAge: 4,
  minutes: 30,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Versteckt für jedes Kind einen kleinen Schatz.',
    'Zeichnet Hinweiskarten mit Bildern: Kissen, Schuhregal, Pflanze.',
    'Die Kinder folgen den Hinweisen als Team.',
    'Am Ende finden alle zusammen die Schatzkiste.',
  ],
  learn: 'Zusammenarbeit und Bilder lesen.',
})
