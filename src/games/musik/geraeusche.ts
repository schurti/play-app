import { defineGame } from '../types'

export default defineGame({
  id: 'geraeusche',
  title: 'Geräusche-Raten',
  emoji: '👂',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 50,
  steps: [
    'Das Kind schliesst die Augen.',
    'Jemand macht ein Geräusch: Schlüssel klimpern, Papier knüllen, Wasser giessen, Reissverschluss.',
    'Was war das? Dann tauschen.',
  ],
  learn: 'Genaues Hinhören.',
})
