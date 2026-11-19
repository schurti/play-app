import { defineGame } from '../types'

export default defineGame({
  id: 'entenfischen',
  title: 'Enten fischen',
  emoji: '🦆',
  category: 'wasser',
  minAge: 1,
  maxAge: 4,
  minutes: 10,
  items: ['Wasser', 'Schüssel', 'Löffel'],
  tags: ['allein'],
  order: 150,
  steps: [
    'Lasst Badeenten oder Deckel in der Badewanne schwimmen.',
    'Das Kind fischt sie mit einem Sieb oder grossen Löffel heraus.',
    'Und wirft sie wieder hinein.',
  ],
  learn: 'Greifen und Hand-Auge-Koordination.',
  adultNote: 'Bei Wasser immer dabeibleiben.',
})
