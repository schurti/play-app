import { defineGame } from '../types'

export default defineGame({
  id: 'zeitlupe',
  title: 'Zeitlupen-Rennen',
  emoji: '🐢',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 190,
  steps: [
    'Alle stellen sich an eine Startlinie.',
    'Auf „Los!“ bewegt ihr euch so langsam wie möglich zum Ziel.',
    'Wer stehen bleibt, muss zurück zum Start.',
    'Wer als Letzter ankommt, gewinnt!',
  ],
  learn: 'Bewegungen kontrollieren und Geduld haben.',
})
