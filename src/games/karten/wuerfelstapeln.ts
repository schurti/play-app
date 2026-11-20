import { defineGame } from '../types'

export default defineGame({
  id: 'wuerfelstapeln',
  title: 'Würfel-Turm',
  emoji: '🗼',
  category: 'karten',
  minAge: 4,
  minutes: 5,
  items: [],
  tags: ['allein'],
  order: 200,
  steps: [
    'Nehmt alle Würfel, die ihr im Haus habt.',
    'Stapelt sie zu einem Turm, einen auf den anderen.',
    'Wie viele schafft ihr, bevor er umfällt?',
    'Schwieriger: Der Turm muss oben eine Sechs zeigen.',
  ],
  learn: 'Ruhige Hand und Konzentration.',
})
