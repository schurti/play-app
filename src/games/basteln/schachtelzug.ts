import { defineGame } from '../types'

export default defineGame({
  id: 'schachtelzug',
  title: 'Schachtel-Zug',
  emoji: '🚂',
  category: 'basteln',
  minAge: 3,
  minutes: 25,
  items: ['Karton', 'Schnur', 'Kuscheltier'],
  tags: ['allein'],
  order: 240,
  steps: [
    'Sammelt ein paar Schachteln als Wagen.',
    'Verbindet sie mit Schnur zu einem Zug.',
    'Malt Räder und Fenster.',
    'Setzt Kuscheltiere hinein und zieht sie durch die Wohnung.',
  ],
  learn: 'Verbinden, Ziehen und Rollenspiel.',
  adultNote: 'Die Löcher für die Schnur macht ein Erwachsener.',
})
