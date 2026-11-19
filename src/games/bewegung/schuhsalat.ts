import { defineGame } from '../types'

export default defineGame({
  id: 'schuhsalat',
  title: 'Schuh-Salat',
  emoji: '👟',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 400,
  steps: [
    'Sammelt alle Schuhe der Familie auf einen grossen Haufen und mischt sie.',
    'Auf „Los!“ suchen alle die Paare.',
    'Jedes gefundene Paar wird in einer Reihe aufgestellt.',
    'Bonus: Wer kennt zu jedem Paar die Besitzerin oder den Besitzer?',
  ],
  learn: 'Paare erkennen, sortieren und Tempo.',
})
