import { defineGame } from '../types'

export default defineGame({
  id: 'feuerwehr',
  title: 'Feuerwehr-Einsatz',
  emoji: '🚒',
  category: 'rollen',
  minAge: 3,
  minutes: 20,
  items: ['Kuscheltier', 'Tuch', 'Schnur'],
  tags: ['allein'],
  order: 180,
  steps: [
    'Ein rotes Tuch ist das „Feuer“, Kuscheltiere sitzen in Not.',
    'Alarm! Mit „Tatü-tata“ zum Einsatz.',
    'Die Schnur ist der Wasserschlauch: Feuer löschen!',
    'Rettet alle Kuscheltiere und bringt sie in Sicherheit.',
  ],
  learn: 'Helfen, Mut und Sprache.',
})
