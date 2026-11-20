import { defineGame } from '../types'

export default defineGame({
  id: 'blumenraten',
  title: 'Blumen-Raten',
  emoji: '🌼',
  category: 'papier',
  minAge: 6,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 60,
  steps: [
    'Eine Person holt sich heimlich ein Wort aus der App und malt für jeden Buchstaben einen Strich.',
    'Daneben malt sie eine Blume mit 6 Blütenblättern.',
    'Die anderen raten Buchstaben. Richtige Buchstaben kommen auf ihren Strich.',
    'Bei falschen Buchstaben wird ein Blütenblatt durchgestrichen. Errät ihr das Wort, bevor die Blume kahl ist?',
  ],
  learn: 'Buchstaben, Wörter und logisches Raten.',
  tool: 'term',
})
