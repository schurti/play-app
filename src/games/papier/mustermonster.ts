import { defineGame } from '../types'

export default defineGame({
  id: 'mustermonster',
  title: 'Muster-Monster',
  emoji: '🐙',
  category: 'papier',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 270,
  steps: [
    'Zeichnet den Umriss eines grossen Monsters.',
    'Teilt den Bauch mit Linien in viele Felder.',
    'Füllt jedes Feld mit einem anderen Muster: Punkte, Streifen, Wellen, Zickzack.',
    'Wie viele verschiedene Muster findet ihr?',
  ],
  learn: 'Muster erfinden, Feinmotorik und Ausdauer.',
})
