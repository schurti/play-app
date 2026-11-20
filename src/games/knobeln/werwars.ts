import { defineGame } from '../types'

export default defineGame({
  id: 'werwars',
  title: 'Wer war es?',
  emoji: '🕵️',
  category: 'knobeln',
  minAge: 5,
  minutes: 15,
  items: ['Kuscheltier'],
  tags: ['gruppe'],
  order: 160,
  steps: [
    'Drei Kuscheltiere sitzen auf dem Sofa. Eines hat heimlich einen Keks genommen.',
    'Ein Erwachsener gibt Hinweise: «Es hat keine langen Ohren.» «Es ist nicht braun.»',
    'Die Kinder schliessen nach jedem Hinweis Tiere aus.',
    'Wer zuerst sicher ist, sagt: «Es war …!»',
  ],
  learn: 'Schlussfolgern und ausschliessen.',
  variants: 'Danach denkt sich ein Kind den Fall aus.',
})
