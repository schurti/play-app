import { defineGame } from '../types'

export default defineGame({
  id: 'tape',
  title: 'Klebeband-Parcours',
  emoji: '🟨',
  category: 'bewegung',
  minAge: 3,
  minutes: 15,
  items: ['Klebeband'],
  tags: ['allein'],
  order: 70,
  steps: [
    'Klebt Linien, Zickzack und Kreise auf den Boden (Malerband löst sich gut).',
    'Balanciert auf den Linien.',
    'Dann hüpfen, rückwärts gehen oder auf allen Vieren.',
  ],
  learn: 'Gleichgewicht und Körperwahrnehmung.',
})
