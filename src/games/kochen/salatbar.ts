import { defineGame } from '../types'

export default defineGame({
  id: 'salatbar',
  title: 'Salat-Bar',
  emoji: '🥗',
  category: 'kochen',
  minAge: 4,
  minutes: 20,
  items: ['Schüssel', 'Teller'],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Wascht Salat, Gurke, Tomaten und Karotten.',
    'Schneidet alles in Stücke (Kindermesser).',
    'Stellt alles in Schüsselchen auf den Tisch.',
    'Jeder stellt seinen Lieblingssalat zusammen.',
  ],
  learn: 'Gemüse kennen und selbstständig schöpfen.',
})
