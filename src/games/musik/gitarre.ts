import { defineGame } from '../types'

export default defineGame({
  id: 'gitarre',
  title: 'Gummiband-Gitarre',
  emoji: '🎸',
  category: 'musik',
  minAge: 5,
  minutes: 20,
  items: ['Karton', 'Gummibänder'],
  tags: ['allein'],
  order: 60,
  steps: [
    'Nehmt eine kleine offene Schachtel.',
    'Spannt Gummibänder in verschiedenen Dicken darüber.',
    'Zupft daran: Welches klingt hoch, welches tief?',
  ],
  learn: 'Dünne, straffe Bänder klingen höher.',
})
