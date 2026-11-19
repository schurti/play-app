import { defineGame } from '../types'

export default defineGame({
  id: 'sackhuepfen',
  title: 'Sackhüpfen',
  emoji: '🛍️',
  category: 'party',
  minAge: 4,
  minutes: 10,
  items: ['Kissen'],
  tags: ['gruppe'],
  place: 'beides',
  order: 20,
  steps: [
    'Steigt mit beiden Beinen in einen Kissenbezug.',
    'Haltet ihn mit den Händen fest.',
    'Hüpft bis zur Ziellinie und zurück.',
    'Wer ist zuerst wieder da?',
  ],
  learn: 'Gleichgewicht und Kraft – mit viel Lachen.',
})
