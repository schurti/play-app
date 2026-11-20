import { defineGame } from '../types'

export default defineGame({
  id: 'pantomime',
  title: 'Pantomime',
  emoji: '🎭',
  category: 'rollen',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 10,
  steps: [
    'Nur wer dran ist, schaut auf die geheime Karte.',
    'Stellt das Wort dar – ohne zu sprechen!',
    'Die anderen raten. Wer es errät, ist als Nächstes dran.',
  ],
  learn: 'Körpersprache und Fantasie.',
  tool: 'term',
})
