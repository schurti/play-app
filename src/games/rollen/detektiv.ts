import { defineGame } from '../types'

export default defineGame({
  id: 'detektiv',
  title: 'Detektiv-Büro',
  emoji: '🕵️',
  category: 'rollen',
  minAge: 5,
  minutes: 25,
  items: ['Papier', 'Stifte', 'Taschenlampe'],
  tags: ['gruppe'],
  order: 170,
  steps: [
    'Ein Kuscheltier ist „verschwunden“.',
    'Erwachsene legen Spuren: Papier-Fussabdrücke, einen Hinweis-Zettel, einen Socken.',
    'Die Detektive untersuchen jede Spur mit der Taschenlampe.',
    'Folgt den Spuren und löst den Fall!',
  ],
  learn: 'Kombinieren und genau beobachten.',
})
