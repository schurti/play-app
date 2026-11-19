import { defineGame } from '../types'

export default defineGame({
  id: 'kim',
  title: 'Was fehlt?',
  emoji: '🙈',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: ['Tuch'],
  tags: ['leise'],
  order: 50,
  steps: [
    'Legt 5 bis 8 Dinge auf den Tisch.',
    'Das Kind schaut sie 30 Sekunden lang an.',
    'Augen zu! Ein Ding verschwindet unter dem Tuch.',
    'Augen auf: Was fehlt?',
  ],
  learn: 'Merkfähigkeit und genaues Hinschauen.',
  variants:
    'Schwieriger: zwei Dinge wegnehmen oder heimlich die Reihenfolge vertauschen.',
})
