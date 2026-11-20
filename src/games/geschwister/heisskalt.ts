import { defineGame } from '../types'

export default defineGame({
  id: 'heisskalt',
  title: 'Heiss oder kalt?',
  emoji: '🔥',
  category: 'geschwister',
  minAge: 3,
  minutes: 10,
  items: ['Kuscheltier'],
  tags: ['gruppe'],
  order: 140,
  steps: [
    'Das grössere Kind versteckt ein Kuscheltier, das kleinere wartet vor der Türe.',
    'Beim Suchen gibt das grössere Hinweise: «Kalt, kälter … warm … heiss!»',
    'Gefunden? Dann versteckt das kleinere.',
    'Wer findet in weniger als einer Minute?',
  ],
  learn: 'Hinweise geben, zuhören und Geduld.',
})
