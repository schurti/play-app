import { defineGame } from '../types'

export default defineGame({
  id: 'geschwistertaxi',
  title: 'Decken-Taxi',
  emoji: '🚕',
  category: 'geschwister',
  minAge: 2,
  minutes: 10,
  items: ['Decke'],
  tags: ['gruppe'],
  order: 10,
  steps: [
    'Das kleinere Kind setzt sich auf eine Decke und hält sich gut fest.',
    'Das grössere zieht die Decke langsam durch die Wohnung.',
    'Der Fahrgast sagt, wohin es geht: «Bitte in die Küche!»',
    'Nach jeder Fahrt bezahlt der Fahrgast mit einem Lächeln. Dann tauschen, falls es geht.',
  ],
  learn: 'Kraft, Rücksicht und Abwechseln.',
  adultNote: 'Nur auf glattem Boden ohne Kanten und Treppen spielen.',
})
