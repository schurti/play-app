import { defineGame } from '../types'

export default defineGame({
  id: 'autofarben',
  title: 'Auto-Farben zählen',
  emoji: '🚗',
  category: 'unterwegs',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 40,
  steps: [
    'Jeder wählt eine Farbe: rot, blau, weiss, schwarz …',
    'Zählt laut jedes Auto in eurer Farbe, das vorbeifährt.',
    'Wer hat nach 5 Minuten am meisten?',
    'Danach Farben tauschen.',
  ],
  learn: 'Farben benennen und zählen.',
})
