import { defineGame } from '../types'

export default defineGame({
  id: 'blindekuh',
  title: 'Blinde Kuh',
  emoji: '🐮',
  category: 'party',
  minAge: 4,
  minutes: 15,
  items: ['Tuch'],
  tags: ['gruppe'],
  order: 50,
  steps: [
    'Einer Person werden die Augen verbunden.',
    'Die anderen bewegen sich leise im Raum.',
    'Die „blinde Kuh“ versucht, jemanden zu fangen und durch Tasten zu erraten, wer es ist.',
    'Richtig geraten? Rollen tauschen.',
  ],
  learn: 'Tasten, Hören und Vertrauen.',
  adultNote: 'Vorher Stolperfallen wegräumen.',
})
