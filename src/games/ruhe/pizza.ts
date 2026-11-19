import { defineGame } from '../types'

export default defineGame({
  id: 'pizza',
  title: 'Rücken-Pizza',
  emoji: '🍕',
  category: 'ruhe',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['leise'],
  order: 30,
  steps: [
    'Das Kind liegt auf dem Bauch.',
    'Teig kneten: den Rücken sanft massieren.',
    'Ausrollen: mit dem Unterarm darüberrollen. Tomatensauce: streichen. Käse: mit den Fingern tippen.',
    'Ofen: die Hände warm reiben und auflegen. Dann tauschen!',
  ],
  learn: 'Berührung, Nähe und Entspannung.',
})
