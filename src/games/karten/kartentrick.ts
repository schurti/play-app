import { defineGame } from '../types'

export default defineGame({
  id: 'kartentrick',
  title: 'Karten-Zaubertrick',
  emoji: '🪄',
  category: 'karten',
  minAge: 6,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Legt 21 Karten in drei Reihen zu je 7 offen hin.',
    'Der Zuschauer merkt sich heimlich eine Karte und sagt nur die Reihe.',
    'Sammelt die Reihen ein, die genannte in die Mitte, und legt wieder drei Reihen aus. Dreimal wiederholen.',
    'Die gemerkte Karte liegt jetzt immer an 11. Stelle – Zauberei!',
  ],
  learn: 'Zählen, Ordnung und Auftreten.',
})
