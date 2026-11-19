import { defineGame } from '../types'

export default defineGame({
  id: 'schlafloewen',
  title: 'Schlafende Löwen',
  emoji: '🦁',
  category: 'ruhe',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 240,
  steps: [
    'Alle legen sich als schlafende Löwen ganz still auf den Boden.',
    'Eine Person versucht, die Löwen zum Lachen oder Bewegen zu bringen – ohne sie zu berühren.',
    'Wer sich bewegt, hilft beim Aufwecken.',
    'Welcher Löwe schläft am längsten?',
  ],
  learn: 'Stillhalten und Selbstbeherrschung.',
})
