import { defineGame } from '../types'

export default defineGame({
  id: 'sorgenfresser',
  title: 'Sorgenfresser',
  emoji: '👹',
  category: 'gefuehle',
  minAge: 4,
  minutes: 30,
  items: ['Karton', 'Stifte', 'Papier'],
  tags: ['allein'],
  order: 60,
  steps: [
    'Bastelt aus einer Schachtel ein freundliches Monster mit grossem Maul.',
    'Wer Sorgen hat, malt oder schreibt sie auf einen Zettel.',
    'Füttert den Sorgenfresser damit.',
    'Am Abend schaut ihr zusammen hinein und redet darüber.',
  ],
  learn: 'Sorgen aussprechen und loslassen.',
  adultNote: 'Das Maul schneidet ein Erwachsener aus.',
})
