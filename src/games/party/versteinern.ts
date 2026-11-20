import { defineGame } from '../types'

export default defineGame({
  id: 'versteinern',
  title: 'Zauberer-Fangis',
  emoji: '🪄',
  category: 'party',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  place: 'beides',
  order: 180,
  steps: [
    'Ein Kind ist der Zauberer und fängt die anderen.',
    'Wer berührt wird, ist versteinert und bleibt mit gegrätschten Beinen stehen.',
    'Die anderen können ihn erlösen, indem sie zwischen den Beinen hindurchkriechen.',
    'Sind alle versteinert? Dann gibt es einen neuen Zauberer.',
  ],
  learn: 'Rennen, Reaktion und einander helfen.',
})
