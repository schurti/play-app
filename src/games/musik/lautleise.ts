import { defineGame } from '../types'

export default defineGame({
  id: 'lautleise',
  title: 'Laut-Leise-Dirigent',
  emoji: '🔊',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: ['Töpfe', 'Löffel'],
  tags: ['gruppe'],
  order: 100,
  steps: [
    'Alle trommeln auf Töpfen oder klatschen.',
    'Der Dirigent hebt die Arme: Es wird lauter.',
    'Senkt er sie, wird es leiser – bis ganz still.',
    'Wechselt euch als Dirigent ab.',
  ],
  learn: 'Lautstärke steuern und aufeinander achten.',
})
