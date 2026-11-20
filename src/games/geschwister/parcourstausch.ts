import { defineGame } from '../types'

export default defineGame({
  id: 'parcourstausch',
  title: 'Parcours füreinander',
  emoji: '🧗',
  category: 'geschwister',
  minAge: 3,
  minutes: 25,
  items: ['Kissen', 'Decke'],
  tags: ['gruppe'],
  order: 60,
  steps: [
    'Das grössere Kind baut einen Parcours für das kleinere: Kissen, Tunnel aus Decken, Stühle.',
    'Das kleinere probiert ihn aus. Das grössere feuert an.',
    'Jetzt baut das kleinere einen Parcours für das grössere.',
    'Welche Hindernisse sind für wen schwer, welche leicht?',
  ],
  learn: 'Sich in andere hineinversetzen und Bewegung.',
  adultNote: 'Die Erwachsenen prüfen kurz, ob alles sicher steht.',
})
