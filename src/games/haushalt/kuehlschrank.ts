import { defineGame } from '../types'

export default defineGame({
  id: 'kuehlschrank',
  title: 'Kühlschrank-Ordnung',
  emoji: '🧊',
  category: 'haushalt',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['allein'],
  order: 150,
  steps: [
    'Schaut zusammen in den Kühlschrank.',
    'Was gehört wohin? Milch zur Milch, Gemüse ins Gemüsefach.',
    'Sucht Dinge, die bald gegessen werden müssen.',
    'Plant zusammen, was ihr daraus kocht.',
  ],
  learn: 'Lebensmittel kennen und nichts verschwenden.',
})
