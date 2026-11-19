import { defineGame } from '../types'

export default defineGame({
  id: 'klammerfangen',
  title: 'Klammer-Fangen',
  emoji: '🎀',
  category: 'bewegung',
  minAge: 5,
  minutes: 10,
  items: ['Klammern'],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'Jeder klemmt drei Wäscheklammern an den Pullover.',
    'Auf „Los!“ versucht ihr, einander Klammern abzunehmen.',
    'Wer am Ende die meisten hat, gewinnt.',
  ],
  learn: 'Reaktion und faires Spielen.',
})
