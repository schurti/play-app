import { defineGame } from '../types'

export default defineGame({
  id: 'loeffellauf',
  title: 'Löffel-Lauf',
  emoji: '🥄',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: ['Löffel', 'Socken'],
  tags: ['allein', 'gruppe'],
  order: 30,
  steps: [
    'Legt einen Socken-Ball auf einen Löffel.',
    'Geht einmal durch die Wohnung, ohne dass er herunterfällt.',
    'Geschafft? Dann wird der Weg schwieriger: um Stühle, über Kissen.',
  ],
  learn: 'Konzentration und Balance.',
})
