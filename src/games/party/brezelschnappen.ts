import { defineGame } from '../types'

export default defineGame({
  id: 'brezelschnappen',
  title: 'Brezel-Schnappen',
  emoji: '🥨',
  category: 'party',
  minAge: 3,
  minutes: 10,
  items: ['Schnur'],
  tags: ['gruppe'],
  order: 170,
  steps: [
    'Spannt eine Schnur quer durch den Raum.',
    'Hängt kleine Brezeln oder Ringe-Gebäck an Fäden daran, auf Mundhöhe der Kinder.',
    'Hände auf den Rücken!',
    'Wer schafft es, seine Brezel nur mit dem Mund zu essen?',
  ],
  learn: 'Geschicklichkeit und Lachen.',
})
