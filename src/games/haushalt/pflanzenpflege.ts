import { defineGame } from '../types'

export default defineGame({
  id: 'pflanzenpflege',
  title: 'Pflanzen-Pfleger',
  emoji: '🪴',
  category: 'haushalt',
  minAge: 3,
  minutes: 10,
  items: ['Wasser', 'Becher'],
  tags: ['allein', 'leise'],
  order: 80,
  steps: [
    'Fühlt mit dem Finger in die Erde: Ist sie trocken?',
    'Giesst die trockenen Pflanzen mit einem Becher Wasser – langsam!',
    'Wischt die Blätter mit einem feuchten Tuch ab.',
    'Gebt jeder Pflanze einen Namen.',
  ],
  learn: 'Verantwortung und Pflanzen verstehen.',
})
