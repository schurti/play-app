import { defineGame } from '../types'

export default defineGame({
  id: 'kuscheltierfuettern',
  title: 'Kuscheltier füttern',
  emoji: '🧸',
  category: 'rollen',
  minAge: 2,
  minutes: 10,
  items: ['Kuscheltier', 'Löffel', 'Teller'],
  tags: ['allein'],
  order: 290,
  steps: [
    'Setzt Kuscheltiere an einen Tisch.',
    'Das Kind kocht und füttert sie mit dem Löffel.',
    'Danach Zähne putzen und ins Bett bringen.',
  ],
  learn: 'Erstes Rollenspiel und Fürsorge.',
})
