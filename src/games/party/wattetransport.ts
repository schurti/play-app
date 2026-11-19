import { defineGame } from '../types'

export default defineGame({
  id: 'wattetransport',
  title: 'Watte-Transport',
  emoji: '☁️',
  category: 'party',
  minAge: 3,
  minutes: 10,
  items: ['Watte', 'Löffel', 'Schüssel'],
  tags: ['gruppe'],
  order: 80,
  steps: [
    'Legt Wattebällchen in eine Schüssel.',
    'Transportiert sie mit einem Löffel in eine andere Schüssel.',
    'Schwieriger: den Löffel im Mund halten.',
    'Welches Team hat zuerst alle drüben?',
  ],
  learn: 'Ruhige Hand und Teamgeist.',
})
