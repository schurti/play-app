import { defineGame } from '../types'

export default defineGame({
  id: 'summen',
  title: 'Lieder-Summen',
  emoji: '🎶',
  category: 'musik',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 70,
  steps: [
    'Eine Person summt ein bekanntes Lied – ohne Worte.',
    'Die anderen raten.',
    'Wer es errät, summt das nächste.',
  ],
  learn: 'Melodien erkennen und Gedächtnis.',
})
