import { defineGame } from '../types'

export default defineGame({
  id: 'siebenlegen',
  title: 'Sieben legen',
  emoji: '7️⃣',
  category: 'karten',
  minAge: 5,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 170,
  steps: [
    'Verteilt alle Karten. Wer eine Sieben hat, legt sie in die Mitte.',
    'Reihum darf man an die Siebener anlegen: nach oben 8, 9, 10 … und nach unten 6, 5, 4 …',
    'Jede Farbe bekommt ihre eigene Reihe.',
    'Wer nicht kann, setzt aus. Wer zuerst keine Karten mehr hat, gewinnt.',
  ],
  learn: 'Zahlenreihen vorwärts und rückwärts.',
})
