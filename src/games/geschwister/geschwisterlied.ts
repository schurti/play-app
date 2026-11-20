import { defineGame } from '../types'

export default defineGame({
  id: 'geschwisterlied',
  title: 'Unser Geschwister-Lied',
  emoji: '🎵',
  category: 'geschwister',
  minAge: 4,
  minutes: 15,
  items: [],
  tags: ['gruppe'],
  order: 150,
  steps: [
    'Nehmt eine bekannte Melodie, zum Beispiel «Alle meine Entchen».',
    'Erfindet einen neuen Text über euch zwei: Was macht ihr gerne zusammen?',
    'Übt das Lied und erfindet Bewegungen dazu.',
    'Singt es der Familie vor.',
  ],
  learn: 'Sprache, Reime und Gemeinschaft.',
})
