import { defineGame } from '../types'

export default defineGame({
  id: 'laser',
  title: 'Laser-Tunnel',
  emoji: '🕸️',
  category: 'bewegung',
  minAge: 4,
  minutes: 15,
  items: ['Schnur', 'Klebeband'],
  tags: ['allein'],
  order: 80,
  steps: [
    'Spannt Schnur kreuz und quer durch den Flur und klebt sie fest.',
    'Klettert durch, ohne eine Schnur zu berühren.',
    'Wer schafft es am schnellsten? Jemand zählt laut mit.',
  ],
  learn: 'Körpergefühl und Beweglichkeit.',
  adultNote: 'Schnur nie auf Halshöhe spannen und nach dem Spiel wegräumen.',
})
