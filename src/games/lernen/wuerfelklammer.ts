import { defineGame } from '../types'

export default defineGame({
  id: 'wuerfelklammer',
  title: 'Würfel-Klammern',
  emoji: '🎲',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: ['Klammern', 'Becher'],
  tags: ['allein', 'gruppe'],
  order: 100,
  steps: [
    'Würfelt mit dem Würfel in der App.',
    'Klemmt so viele Wäscheklammern an den Becherrand.',
    'Wer zuerst 20 Klammern am Becher hat, gewinnt.',
  ],
  learn: 'Würfelbilder erkennen, zählen und Kraft in den Fingern.',
  variants: 'Schwieriger: mit zwei Würfeln spielen und zusammenzählen.',
  tool: 'dice',
})
