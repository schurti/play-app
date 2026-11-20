import { defineGame } from '../types'

export default defineGame({
  id: 'steineflitschen',
  title: 'Steine flitschen',
  emoji: '🌊',
  category: 'draussen',
  minAge: 6,
  minutes: 15,
  items: [],
  tags: ['allein', 'gruppe'],
  seasons: ['sommer'],
  order: 210,
  steps: [
    'Sucht flache, runde Steine.',
    'Haltet den Stein zwischen Daumen und Zeigefinger, ganz flach.',
    'Werft ihn seitlich und flach übers Wasser.',
    'Zählt die Hüpfer: Wie oft springt euer Stein?',
  ],
  learn: 'Wurftechnik, Geduld und zählen.',
  adultNote: 'Nur, wo niemand im Wasser ist, und mit Abstand zum Ufer.',
})
