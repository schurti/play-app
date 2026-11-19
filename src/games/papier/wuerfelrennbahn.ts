import { defineGame } from '../types'

export default defineGame({
  id: 'wuerfelrennbahn',
  title: 'Würfel-Rennbahn',
  emoji: '🏁',
  category: 'papier',
  minAge: 4,
  minutes: 25,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 260,
  steps: [
    'Zeichnet eine kurvige Rennbahn mit 30 Feldern, Start und Ziel.',
    'Malt auf ein paar Felder Überraschungen: Pfeil = 2 vor, Pfütze = 1 zurück.',
    'Jeder hat eine Spielfigur (Knopf, Nudel, Klammer).',
    'Würfelt mit der App und zieht. Wer ist zuerst im Ziel?',
  ],
  learn: 'Zählen, Würfelbilder und Regeln erfinden.',
  tool: 'dice',
})
