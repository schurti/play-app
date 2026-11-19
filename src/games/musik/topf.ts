import { defineGame } from '../types'

export default defineGame({
  id: 'topf',
  title: 'Topf-Schlagzeug',
  emoji: '🥁',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: ['Töpfe', 'Löffel'],
  tags: ['allein'],
  order: 20,
  steps: [
    'Stellt Töpfe und Schüsseln umgedreht hin.',
    'Trommelt mit Holzlöffeln.',
    'Spielt laut und leise, schnell und langsam.',
    'Trommelt zu eurem Lieblingslied.',
  ],
  learn: 'Tempo und Lautstärke unterscheiden.',
})
