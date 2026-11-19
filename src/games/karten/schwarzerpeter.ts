import { defineGame } from '../types'

export default defineGame({
  id: 'schwarzerpeter',
  title: 'Schwarzer Peter',
  emoji: '🎩',
  category: 'karten',
  minAge: 4,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'Nehmt Paare aus dem Kartenspiel und eine einzelne Karte als „Schwarzen Peter“.',
    'Verteilt alle Karten. Legt eigene Paare sofort ab.',
    'Zieht reihum eine Karte beim Nachbarn – passt sie, Paar ablegen.',
    'Wer am Schluss den Schwarzen Peter hält, bekommt einen Punkt auf die Nase gemalt.',
  ],
  learn: 'Paare erkennen und ein Pokerface üben.',
})
