import { defineGame } from '../types'

export default defineGame({
  id: 'schoepfen',
  title: 'Schöpfen und Giessen',
  emoji: '🫗',
  category: 'wasser',
  minAge: 1,
  minutes: 15,
  items: ['Wasser', 'Becher', 'Schüssel'],
  tags: ['allein'],
  order: 140,
  steps: [
    'Stellt eine Schüssel mit Wasser auf ein Handtuch.',
    'Gebt Becher, Löffel und ein Sieb dazu.',
    'Das Kind schöpft, giesst und schaut, wo das Wasser hinfliesst.',
  ],
  learn: 'Voll und leer, erste Physik.',
  adultNote: 'Bei Wasser immer dabeibleiben, auch wenn es wenig ist.',
})
