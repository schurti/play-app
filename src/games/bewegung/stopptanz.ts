import { defineGame } from '../types'

export default defineGame({
  id: 'stopptanz',
  title: 'Stopptanz',
  emoji: '💃',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 50,
  steps: [
    'Startet die Musik in der App.',
    'Tanzt wild, solange die Musik spielt.',
    'Hört die Musik auf: Sofort einfrieren!',
    'Wer wackelt, macht eine lustige Grimasse.',
  ],
  learn: 'Zuhören, reagieren und Körperkontrolle.',
  tool: 'dance',
})
