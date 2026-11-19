import { defineGame } from '../types'

export default defineGame({
  id: 'topfkonzert',
  title: 'Topf-Konzert',
  emoji: '🥁',
  category: 'musik',
  minAge: 1,
  maxAge: 4,
  minutes: 10,
  items: ['Töpfe', 'Löffel'],
  tags: ['allein'],
  order: 270,
  steps: [
    'Stellt Töpfe und Schüsseln umgedreht auf den Boden.',
    'Gebt dem Kind einen Holzlöffel.',
    'Trommelt zusammen: mal laut, mal ganz leise.',
  ],
  learn: 'Klänge entdecken und Ursache-Wirkung.',
})
