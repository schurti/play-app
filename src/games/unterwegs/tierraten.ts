import { defineGame } from '../types'

export default defineGame({
  id: 'tierraten',
  title: 'Tier-Raten',
  emoji: '🦓',
  category: 'unterwegs',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 60,
  steps: [
    'Eine Person denkt sich ein Tier aus.',
    'Die anderen stellen Ja-Nein-Fragen: „Kann es fliegen?“ – „Lebt es im Wasser?“',
    'Wer das Tier errät, denkt sich das nächste aus.',
  ],
  learn: 'Gezielt fragen und Tiere unterscheiden.',
})
