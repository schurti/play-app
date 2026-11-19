import { defineGame } from '../types'

export default defineGame({
  id: 'spiegeln',
  title: 'Spiegel-Spiel',
  emoji: '🪞',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 170,
  steps: [
    'Stellt euch zu zweit gegenüber.',
    'Eine Person bewegt sich langsam: Arme heben, Grimasse ziehen, zur Seite neigen.',
    'Die andere ist das Spiegelbild und macht alles gleichzeitig nach.',
    'Nach einer Minute wechseln.',
  ],
  learn: 'Konzentration, Körperwahrnehmung und Rücksicht.',
})
