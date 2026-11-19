import { defineGame } from '../types'

export default defineGame({
  id: 'aluboote',
  title: 'Alu-Boote',
  emoji: '🚤',
  category: 'wasser',
  minAge: 5,
  minutes: 20,
  items: ['Alufolie', 'Münzen', 'Schüssel', 'Wasser'],
  tags: ['allein', 'gruppe'],
  place: 'beides',
  order: 130,
  steps: [
    'Faltet aus einem Stück Alufolie ein Boot.',
    'Lasst es schwimmen und legt eine Münze nach der anderen hinein.',
    'Wie viele Münzen trägt euer Boot, bevor es sinkt?',
    'Baut ein besseres Boot – breiter? höher?',
  ],
  learn: 'Schwimmen und Form: Breite Boote tragen mehr.',
})
