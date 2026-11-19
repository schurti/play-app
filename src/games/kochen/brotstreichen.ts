import { defineGame } from '../types'

export default defineGame({
  id: 'brotstreichen',
  title: 'Brot streichen',
  emoji: '🍞',
  category: 'kochen',
  minAge: 2,
  minutes: 10,
  items: ['Teller', 'Löffel'],
  tags: ['allein'],
  order: 180,
  steps: [
    'Gebt dem Kind eine Scheibe Brot und etwas Frischkäse.',
    'Mit einem Löffel oder Buttermesser streicht es selbst.',
    'Belegt mit Gurkenscheiben – fertig ist das Znüni.',
  ],
  learn: 'Selbstständigkeit am Tisch.',
})
