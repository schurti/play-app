import { defineGame } from '../types'

export default defineGame({
  id: 'zoobauen',
  title: 'Zoo bauen',
  emoji: '🦁',
  category: 'bauen',
  minAge: 3,
  minutes: 25,
  items: ['Bausteine', 'Kuscheltier'],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Baut für jedes Tier ein Gehege mit Mauer.',
    'Was braucht es? Der Fisch Wasser (ein blaues Tuch), der Affe einen Turm zum Klettern.',
    'Baut einen Weg für die Besucher und eine Kasse.',
    'Macht eine Führung durch euren Zoo.',
  ],
  learn: 'Planen, Tierwissen und Erzählen.',
})
