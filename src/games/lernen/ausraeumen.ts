import { defineGame } from '../types'

export default defineGame({
  id: 'ausraeumen',
  title: 'Ausräumen, Einräumen',
  emoji: '📥',
  category: 'lernen',
  minAge: 1,
  minutes: 10,
  items: ['Schüssel', 'Becher', 'Löffel'],
  tags: ['allein'],
  order: 600,
  steps: [
    'Gebt dem Kind eine Schüssel mit Bechern, Löffeln und Deckeln.',
    'Es darf alles ausräumen.',
    'Und wieder einräumen – immer wieder!',
  ],
  learn: 'Drinnen und draussen, voll und leer.',
})
