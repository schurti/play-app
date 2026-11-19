import { defineGame } from '../types'

export default defineGame({
  id: 'liedstopp',
  title: 'Lied im Kopf',
  emoji: '🤐',
  category: 'musik',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 180,
  steps: [
    'Singt zusammen ein bekanntes Lied.',
    'Hebt jemand die Hand, singt ihr nur noch im Kopf weiter.',
    'Senkt die Hand sich, singt ihr wieder laut.',
    'Seid ihr alle noch an derselben Stelle?',
  ],
  learn: 'Inneres Hören und Taktgefühl.',
})
