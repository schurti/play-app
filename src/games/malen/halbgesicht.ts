import { defineGame } from '../types'

export default defineGame({
  id: 'halbgesicht',
  title: 'Halbes Gesicht',
  emoji: '🪞',
  category: 'malen',
  minAge: 5,
  minutes: 15,
  items: ['Zeitung', 'Papier', 'Stifte', 'Klebeband'],
  tags: ['allein', 'leise'],
  order: 80,
  steps: [
    'Schneidet ein grosses Gesicht aus einer Zeitschrift aus und halbiert es.',
    'Klebt eine Hälfte aufs Papier.',
    'Das Kind malt die fehlende Hälfte dazu – passend oder total verrückt.',
  ],
  learn: 'Symmetrie und genaues Beobachten.',
})
