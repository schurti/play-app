import { defineGame } from '../types'

export default defineGame({
  id: 'nummernschild',
  title: 'Nummernschild-Zählen',
  emoji: '🚙',
  category: 'unterwegs',
  minAge: 5,
  minutes: 15,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 30,
  steps: [
    'Sucht auf den Nummernschildern der Autos die Zahl 1.',
    'Gefunden? Dann sucht ihr die 2, dann die 3 – immer der Reihe nach.',
    'Wer zuerst eine Zahl entdeckt, ruft sie laut.',
    'Wie weit kommt ihr bis zum Ziel?',
  ],
  learn: 'Ziffern erkennen und Zahlenreihe.',
})
