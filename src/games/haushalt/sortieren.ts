import { defineGame } from '../types'

export default defineGame({
  id: 'sortieren',
  title: 'Sortier-Profi',
  emoji: '🧺',
  category: 'haushalt',
  minAge: 3,
  minutes: 15,
  items: ['Socken'],
  tags: ['allein'],
  order: 10,
  steps: [
    'Schüttet frisch gewaschene Socken auf einen Haufen.',
    'Findet alle Paare.',
    'Sortiert danach: Wem gehört welche Socke?',
  ],
  learn: 'Gleiches erkennen und ordnen – und nebenbei im Haushalt helfen.',
  variants:
    'Auch mit Besteck: Löffel und Gabeln in die richtigen Fächer sortieren.',
})
