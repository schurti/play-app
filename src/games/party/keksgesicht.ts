import { defineGame } from '../types'

export default defineGame({
  id: 'keksgesicht',
  title: 'Keks-Gesicht',
  emoji: '🍪',
  category: 'party',
  minAge: 5,
  minutes: 5,
  items: [],
  tags: ['gruppe'],
  order: 90,
  steps: [
    'Legt einen Keks auf die Stirn.',
    'Ohne Hände: Bewegt ihn nur mit Grimassen bis zum Mund.',
    'Fällt er herunter, beginnt ihr von vorn.',
  ],
  learn: 'Gesichtsmuskeln – und Tränen vor Lachen.',
})
