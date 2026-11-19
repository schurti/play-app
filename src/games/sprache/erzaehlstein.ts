import { defineGame } from '../types'

export default defineGame({
  id: 'erzaehlstein',
  title: 'Erzähl-Stein',
  emoji: '🪨',
  category: 'sprache',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 90,
  steps: [
    'Setzt euch in einen Kreis. Ein schöner Stein wird herumgereicht.',
    'Nur wer den Stein hält, erzählt – zum Beispiel vom Tag.',
    'Die anderen hören zu, ohne zu unterbrechen.',
  ],
  learn: 'Erzählen und Zuhören üben.',
})
